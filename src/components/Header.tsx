import logo from '/logo-light.svg';
import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
  const { i18n } = useTranslation('common');
  return (
    <div>
      <button onClick={() => void i18n.changeLanguage('id')}>ID</button>
      <button onClick={() => void i18n.changeLanguage('en')}>EN</button>
    </div>
  );
};

function Header() {
  const [t] = useTranslation('common');

  return (
    <header className="flex flex-row items-center justify-end gap-8 bg-slate-50 px-4 py-2 pr-6">
      <LanguageSelector />
      <img src={logo} className=" mr-auto h-10 w-auto" />
      <nav>
        <ul className="flex flex-row gap-6">
          <li>Home</li>
          <li>Tour</li>
          <li>Bike</li>
          <li>Booking</li>
          <li>Contact</li>
        </ul>
      </nav>
      <span className="relative before:absolute before:-left-4 before:h-full before:w-0.5 before:bg-black">
        {t('Hello World')}
      </span>
      <span>Flag</span>
    </header>
  );
}

export default Header;
