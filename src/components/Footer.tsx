import { useTranslation } from 'react-i18next';
import { Link as LinkType } from '../@types/types';
import logo from '/logo.svg';
import { IoMail } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const footerLinks: LinkType[] = [
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
      className={`relative flex w-full flex-col items-start justify-center bg-almost_black px-8 pb-4 pt-32 font-light text-ghost_white md:items-center ${separatorStyle}`}
    >
      <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.5fr,8fr,8fr]">
        <Link to="/">
          <img src={logo} alt="ride ride logo" className="h-auto w-20" />
        </Link>
        <section className="flex flex-col gap-6">
          <h4>RideRide.com</h4>
          <div className="grid grid-cols-[1fr,12fr] items-center gap-1">
            <IoMail />
            <Link to="" className="text-orange underline">
              book@rideride.com
            </Link>
            <FaPhone />
            <Link to="" className="text-orange underline">
              (121) 987-6781
            </Link>
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
                  <Link to={link.href}>{t(link.i18nKey)}</Link>
                </li>
              );
            })}
          </ol>
        </section>
      </div>
      <div className="mt-24 text-sm font-extralight text-ghost_white">
        Design inspired by{' '}
        <Link
          to="https://bikerent.nyc/"
          rel="noreferrer noopener"
          target="_blank"
          className="text-sm"
        >
          bikerent.nyc
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
