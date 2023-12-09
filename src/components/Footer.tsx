import { useTranslation } from 'react-i18next';
import { Link } from '../@types/types';
import logo from '/logo-light.svg';
import { IoMail } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa';

const footerLinks: Link[] = [
  {
    name: 'home',
    i18nKey: 'home',
    href: '/',
  },
  {
    name: 'bike',
    i18nKey: 'bike',
    href: '/bikes',
  },
  {
    name: 'tour',
    i18nKey: 'tour',
    href: '/tour',
  },
  {
    name: 'booking',
    i18nKey: 'booking',
    href: '/booking',
  },
  {
    name: 'contact',
    i18nKey: 'contact',
    href: '/contact',
  },
];

function Footer() {
  const [t] = useTranslation('common');
  const separatorStyle =
    'before:absolute before:left-0 before:top-0 before:z-40 before:h-28 before:w-full before:origin-bottom-left before:-skew-y-2 before:bg-almost_black';

  return (
    <footer
      className={`relative mt-40 flex w-full flex-col items-start justify-center bg-almost_black px-8 pb-4 pt-32 font-light text-ghost_white md:items-center ${separatorStyle}`}
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr,6fr,3fr]">
        <a href="/">
          <img src={logo} alt="ride ride logo" className="h-auto w-20" />
        </a>
        <section className="flex flex-col gap-6">
          <h4>RideRide.com</h4>
          <div className="grid grid-cols-[1fr,12fr] items-center gap-1">
            <IoMail />
            <a href="" className="text-orange underline">
              book@rideride.com
            </a>
            <FaPhone />
            <a href="" className="text-orange underline">
              (121) 987-6781
            </a>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-bold">Hours</span>
            <ol>
              <li>Mon - Fri : 08:00 AM - 07:00 PM</li>
              <li>Sat - Sun : 07:00 AM - 09:00 PM</li>
            </ol>
          </div>
        </section>
        <section className="flex flex-col gap-6">
          <h4>Sitemap</h4>
          <ol className="flex flex-col gap-2">
            {footerLinks.map((link) => {
              return (
                <li
                  key={`header-${link.name}`}
                  className="capitalize transition duration-75 hover:text-orange"
                >
                  <a href={link.href}>{t(link.i18nKey)}</a>
                </li>
              );
            })}
          </ol>
        </section>
      </div>
      <div className="mt-24 text-sm font-extralight text-ghost_white">
        Design inspired by{' '}
        <a
          href="https://bikerent.nyc/"
          rel="noreferrer noopener"
          target="_blank"
          className="text-sm"
        >
          bikerent.nyc
        </a>
      </div>
    </footer>
  );
}

export default Footer;
