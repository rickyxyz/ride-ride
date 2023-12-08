import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import common_en from './locales/en/locale.json';
import common_id from './locales/id/locale.json';

export const defaultNS = 'en';
export const resources = {
  en: {
    common: common_en,
  },
  id: {
    common: common_id,
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
