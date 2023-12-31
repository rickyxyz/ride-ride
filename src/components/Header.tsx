import logo from '/logo.svg';
import { useTranslation } from 'react-i18next';
import { TbShoppingCart } from 'react-icons/tb';
import { PiCaretDown, PiCaretUp } from 'react-icons/pi';
import { HiMiniXMark, HiBars3 } from 'react-icons/hi2';
import '../../node_modules/flag-icons/css/flag-icons.min.css';
import {
  Link as LinkType,
  I18nLang,
  languagesFlag,
  languagesKey,
} from '../@types/types';
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { useCartContext } from './useCart';
import { Link } from 'react-router-dom';

const headerLinks: LinkType[] = [
  {
    name: 'home',
    i18nKey: 'home',
    href: '/',
  },
  {
    name: 'bike',
    i18nKey: 'bike',
    href: '/bike',
  },
  {
    name: 'tour',
    i18nKey: 'tour',
    href: '/tour',
  },
  {
    name: 'stores',
    i18nKey: 'stores',
    href: '/stores',
  },
  {
    name: 'about us',
    i18nKey: 'about us',
    href: '/about',
  },
];

function _LanguageSwitcher({
  className,
  mode = 'desktop',
}: {
  className?: React.ComponentProps<'div'>['className'];
  mode?: 'desktop' | 'mobile';
}) {
  const [t, i18n] = useTranslation('common');
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const handleSwitch = (language_code: I18nLang) => {
    setIsDropdownVisible(false);
    return i18n.changeLanguage(language_code);
  };

  useEffect(() => {
    const handleWindowClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        isDropdownVisible &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownVisible(false);
      }
    };

    window.addEventListener('click', handleWindowClick);
    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, [isDropdownVisible]);

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        className="h flex flex-row items-center gap-2 px-2 uppercase"
        onClick={handleToggle}
      >
        <span className={`fi fis fi-${t('language_code')} h-4 w-4 bg-white `} />
        {t('language_key')}
        {isDropdownVisible ? <PiCaretUp /> : <PiCaretDown />}
      </button>
      {isDropdownVisible && (
        <div
          className={`border-px left bg-gray-100 mt-2 w-full border-black bg-gray p-2 ${
            mode === 'desktop' ? 'absolute shadow-md' : ''
          }`}
        >
          <ul>
            {languagesKey.map((langKey) => {
              if (langKey !== t('language_key'))
                return (
                  <li key={`lang-${langKey}`}>
                    <button
                      className="flex w-full flex-row items-center gap-2 uppercase"
                      onClick={() => void handleSwitch(langKey)}
                    >
                      <span
                        className={`fi fis fi-${languagesFlag[langKey]} h-4 w-4 bg-white`}
                      />
                      {langKey}
                    </button>
                  </li>
                );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

function _SideBar({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const [t] = useTranslation('common');

  return (
    <div
      className={`absolute right-0 top-0 z-50 flex h-full flex-col gap-12 bg-ghost_white px-4 py-6 pr-6 ${
        isOpen ? 'w-52' : 'hidden'
      }`}
    >
      <button onClick={() => setIsOpen(false)} className="self-end">
        <HiMiniXMark size={32} />
      </button>
      <nav>
        <ul className="flex flex-col gap-6">
          {headerLinks.map((link) => {
            return (
              <li
                key={`header-${link.name}`}
                className="capitalize transition duration-75 hover:text-orange"
              >
                <Link to={link.href}>{t(link.i18nKey)}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <_LanguageSwitcher className="mt-auto" mode="mobile" />
    </div>
  );
}

function Header() {
  const cart = useCartContext()[0];
  const cartHasItem = cart.length > 0;
  const [t] = useTranslation('common');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <header className="flex h-20 max-w-full flex-row items-center justify-end gap-6 px-4 py-2 pr-6">
      <Link to="/" className=" mr-auto transition duration-75 hover:scale-105">
        <img src={logo} className="h-10 w-auto" />
      </Link>
      <nav className="hidden lg:block">
        <ul className="flex flex-row gap-6">
          {headerLinks.map((link) => {
            return (
              <li
                key={`header-${link.name}`}
                className="capitalize transition duration-75 hover:text-orange"
              >
                <Link to={link.href}>{t(link.i18nKey)}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <span className="relative ml-6 transition duration-75 before:absolute before:-left-6 before:bg-black hover:text-orange lg:before:h-full lg:before:w-0.5">
        {cartHasItem && (
          <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-orange" />
        )}
        <Link to="/order">
          <TbShoppingCart size={24} />
        </Link>
      </span>
      <_LanguageSwitcher className="hidden lg:block" />
      <button
        className="block lg:hidden"
        onClick={() => setIsSidebarOpen(true)}
      >
        <HiBars3 size={28} />
      </button>
      <_SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    </header>
  );
}

export default Header;
