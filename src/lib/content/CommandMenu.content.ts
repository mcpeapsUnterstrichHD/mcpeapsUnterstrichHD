/**
 * @module CommandMenu.content
 *
 * @description
 * Intlayer content dictionary for the Command Palette component. Provides
 * translations for the search input placeholder, the "no results" empty state,
 * and the "Languages" group heading. Translations are available in German
 * (de-DE) and English (en-US).
 *
 * Dictionary key: `"commandMenu"`
 *
 * @see {@link src/lib/components/command-menu/CommandMenu.svelte} -- component consuming `useIntlayer("commandMenu")`
 */
import { Locales, t, type Dictionary } from "intlayer";

const commandMenuContent = {
  key: "commandMenu",
  content: {
    searchPlaceholder: t({
      [Locales.ENGLISH_UNITED_STATES]: "Type a command or search...",
      [Locales.GERMAN_GERMANY]: "Befehl eingeben oder suchen...",
    }),
    noResults: t({
      [Locales.ENGLISH_UNITED_STATES]: "No results found.",
      [Locales.GERMAN_GERMANY]: "Keine Ergebnisse gefunden.",
    }),
    navigation: t({
      [Locales.ENGLISH_UNITED_STATES]: "Navigation",
      [Locales.GERMAN_GERMANY]: "Navigation",
    }),
    languages: t({
      [Locales.ENGLISH_UNITED_STATES]: "Languages",
      [Locales.GERMAN_GERMANY]: "Sprachen",
    }),
    settings: t({
      [Locales.ENGLISH_UNITED_STATES]: "Settings",
      [Locales.GERMAN_GERMANY]: "Einstellungen",
    }),
    misc: t({
      [Locales.ENGLISH_UNITED_STATES]: "Miscellaneous",
      [Locales.GERMAN_GERMANY]: "Sonstiges",
    }),
    cookieSettings: t({
      [Locales.ENGLISH_UNITED_STATES]: "Cookie Settings",
      [Locales.GERMAN_GERMANY]: "Cookie-Einstellungen",
    }),
    commandPalette: t({
      [Locales.ENGLISH_UNITED_STATES]: "Command Palette",
      [Locales.GERMAN_GERMANY]: "Befehlspalette",
    }),
    commandPaletteDescription: t({
      [Locales.ENGLISH_UNITED_STATES]: "Search for a command to run",
      [Locales.GERMAN_GERMANY]: "Einen Befehl zum Ausführen suchen",
    }),
  },
} satisfies Dictionary;

export default commandMenuContent;
