import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import resourcesToBackend from "i18next-resources-to-backend";

import { defaultLocale, LanguagesNUM, RoutingArray } from "@/lib/lang";

// Get locale from URL path
// - /aboutme -> de-DE (default, no prefix)
// - /en-US/aboutme -> en-US (prefixed)
export function getLocaleFromPath(pathname: string): LanguagesNUM {
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  // Check if first segment is a valid non-default locale
  if (
    firstSegment &&
    RoutingArray.includes(firstSegment) &&
    firstSegment !== defaultLocale
  ) {
    return firstSegment as LanguagesNUM;
  }

  return defaultLocale;
}

// Build path with locale prefix (only for non-default locale)
export function buildLocalePath(path: string, locale: LanguagesNUM): string {
  // Create regex pattern to match all locales
  const localePattern = RoutingArray.map((l) => l.replace("-", "\\-")).join("|");
  const localeRegex = new RegExp(`^\\/(${localePattern})\\/`);
  const localeEndRegex = new RegExp(`^\\/(${localePattern})$`);

  if (locale === defaultLocale) {
    // Remove locale prefix if present for default locale
    return path.replace(localeRegex, "/").replace(localeEndRegex, "/");
  }

  // Add prefix for non-default locale (use full locale code)
  const cleanPath = path.replace(localeRegex, "/").replace(localeEndRegex, "/");
  return `/${locale}${cleanPath === "/" ? "" : cleanPath}`;
}

// Get stored language or detect from URL
const getInitialLanguage = (): LanguagesNUM => {
  if (typeof window !== "undefined") {
    // First check URL
    const urlLocale = getLocaleFromPath(window.location.pathname);
    if (urlLocale !== defaultLocale) {
      return urlLocale;
    }

    // Then check localStorage
    const stored = localStorage.getItem("language") as LanguagesNUM | null;
    if (stored && Object.values(LanguagesNUM).includes(stored)) {
      return stored;
    }
  }
  return defaultLocale;
};

// Use dynamic imports for translations
i18n
  .use(initReactI18next)
  .use(
    resourcesToBackend((language: string, namespace: string) => {
      // Map simple codes to full codes if necessary, or simpler: just import what is requested
      switch (language) {
        case "de-DE":
          return import("@/locales/de-DE.json");
        case "en-US":
          return import("@/locales/en-US.json");
        default:
          return import("@/locales/de-DE.json");
      }
    })
  )
  .init({
    lng: getInitialLanguage(),
    fallbackLng: defaultLocale,
    supportedLngs: RoutingArray,
    interpolation: {
      escapeValue: false, // React already escapes
    },
    react: {
      useSuspense: true, // Needed for lazy loading
    },
  });

export default i18n;

// Helper to change language and persist
export const changeLanguage = (lng: LanguagesNUM) => {
  i18n.changeLanguage(lng);
  if (typeof window !== "undefined") {
    localStorage.setItem("language", lng);
  }
};

// Get current locale
export const getCurrentLocale = (): LanguagesNUM => {
  return i18n.language as LanguagesNUM;
};
