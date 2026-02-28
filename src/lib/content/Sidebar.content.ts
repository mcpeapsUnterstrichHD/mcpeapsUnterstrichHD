/**
 * @module Sidebar.content
 *
 * @description
 * Intlayer content dictionary for the sidebar navigation and language switcher
 * components. Contains translations for the sidebar toggle button label, the
 * language search input placeholder, and the "no language found" fallback
 * message. Translations are available in German (de-DE) and English (en-US).
 *
 * Dictionary key: `"sidebar"`
 *
 * @see {@link src/lib/components/SidebarToggle.svelte} -- sidebar toggle button consuming `useIntlayer("sidebar")`
 * @see {@link src/lib/components/Langswitcher.svelte} -- language switcher dropdown consuming `useIntlayer("sidebar")`
 */
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
