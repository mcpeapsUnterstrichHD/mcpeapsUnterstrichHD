import { Locales, t, type Dictionary } from "intlayer";

const sidebarContent = {
  key: "sidebar",
  content: {
    toggleSidebar: t({
      [Locales.ENGLISH_UNITED_STATES]: "Toggle Sidebar",
      [Locales.GERMAN_GERMANY]: "Seitenleiste umschalten"
    }),
    noLanguageFound: t({
      [Locales.ENGLISH_UNITED_STATES]: "No language found.",
      [Locales.GERMAN_GERMANY]: "Keine Sprache gefunden."
    }),
    searchLanguage: t({
      [Locales.ENGLISH_UNITED_STATES]: "Search language...",
      [Locales.GERMAN_GERMANY]: "Sprache suchen..."
    }),
  }
} satisfies Dictionary;

export default sidebarContent;
