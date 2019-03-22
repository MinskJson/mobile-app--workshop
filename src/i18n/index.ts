import ruTranslation from './ru/translation';
import enTranslation from './en/translation';
import demoTranslation from './123/translation';

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: enTranslation,
  ru: ruTranslation,
  123: demoTranslation,
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "123",
    defaultNS: 'translation',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export {
    i18n,
  }