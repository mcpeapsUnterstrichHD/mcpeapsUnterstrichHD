import { Locales, t, type Dictionary } from "intlayer";

const sitesContent = {
  key: "sites",
  content: {
    root: t({
      [Locales.ENGLISH_UNITED_STATES]: "Home",
      [Locales.GERMAN_GERMANY]: "Startseite"
    }),
    impressum: t({
      [Locales.ENGLISH_UNITED_STATES]: "Imprint",
      [Locales.GERMAN_GERMANY]: "Impressum"
    }),
    aboutme: t({
      [Locales.ENGLISH_UNITED_STATES]: "About Me",
      [Locales.GERMAN_GERMANY]: "Über mich"
    }),
    projects: t({
      [Locales.ENGLISH_UNITED_STATES]: "Projects",
      [Locales.GERMAN_GERMANY]: "Projekte"
    }),
    contact: t({
      [Locales.ENGLISH_UNITED_STATES]: "Contact Me",
      [Locales.GERMAN_GERMANY]: "Kontaktier mich"
    }),
    cv: t({
      [Locales.ENGLISH_UNITED_STATES]: "Resume",
      [Locales.GERMAN_GERMANY]: "Lebenslauf"
    }),
    linkhub: t({
      [Locales.ENGLISH_UNITED_STATES]: "Link List",
      [Locales.GERMAN_GERMANY]: "Linkübersicht"
    }),
    notFound: t({
      [Locales.ENGLISH_UNITED_STATES]: "404 - Page Not Found",
      [Locales.GERMAN_GERMANY]: "404 - Seite nicht gefunden"
    }),
  }
} satisfies Dictionary;

export default sitesContent;
