import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import common_en from './locales/en/common.json';
import common_id from './locales/id/common.json';
import home_en from './locales/en/home.json';
import home_id from './locales/id/home.json';
import bikes_en from './locales/en/bikes.json';
import bikes_id from './locales/id/bikes.json';

export const defaultNS = 'en';
export const resources = {
  en: {
    common: common_en,
    home: home_en,
    bikes: bikes_en,
  },
  id: {
    common: common_id,
    home: home_id,
    bikes: bikes_id,
  },
} as const;

await i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    ns: ['common'],
    defaultNS,
    resources,
    interpolation: { escapeValue: false },
  });

export default i18n;
