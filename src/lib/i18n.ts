import type { LanguagesNUM } from "@/lib/lang.ts";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const loadLocale = async (lng: LanguagesNUM) => {
  console.log(lng);
  try {
    const translations = await import(`../assets/lang/${lng}.json`);
    return translations.default;
  } catch (e) {
    console.warn(
      `Übersetzungen für ${lng} nicht gefunden, fallback auf 'de-DE'.`,
    );
    // @ts-ignore
    const fallback = await import("../assets/lang/de-DE.json");
    return fallback.default;
  }
};

i18n.use(initReactI18next).init({
  lng: "de-DE", // Standard-Sprache
  fallbackLng: "de-DE", // Fallback-Sprache
  resources: {}, // leer, wir laden dynamisch
  interpolation: { escapeValue: false },
});

// Funktion, um Sprache dynamisch zu wechseln
export const setLanguage = async (lng: LanguagesNUM) => {
  const translations = await loadLocale(lng);
  i18n.addResourceBundle(lng, "translation", translations, true, true);
  i18n.changeLanguage(lng);
};

export default i18n;
