import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translation_en from "assets/translations/en.json";
import translation_de from "assets/translations/de.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: { ...translation_en },
    },
    de: {
      translation: { ...translation_de },
    },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
