import { type LanguagesNUM, i18next_Language_Resource as resources } from "@/lib/lang.ts";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "de-DE", // Standard-Sprache
  fallbackLng: "de-DE", // Fallback-Sprache
  resources,
  interpolation: { escapeValue: false },
  react: {
    useSuspense: false, // Deaktivieren von Suspense, um SSR zu unterstützen
    bindI18n: "languageChanged loaded",
    bindI18nStore: "added removed",
  },

});

// Funktion, um Sprache dynamisch zu wechseln
export const setLanguage = async (lng: LanguagesNUM) => {
  i18n.changeLanguage(lng);
};

export default i18n;
