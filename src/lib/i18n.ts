import type { LanguagesNUM } from "@/lib/lang.ts";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import deDE from "@/assets/lang/de-DE.json";
import enUS from "@/assets/lang/en-US.json"; // falls du eine englische Version hast

i18n.use(initReactI18next).init({
  lng: "de-DE", // Standard-Sprache
  fallbackLng: "de-DE", // Fallback-Sprache
  resources: {
    "de-DE": { translation: deDE },
    "en-US": { translation: enUS },
  },
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
