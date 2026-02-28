/**
 * @module Sites.content
 *
 * @description
 * Intlayer content dictionary for site-wide navigation labels and page titles.
 * Maps each route to its localized display name: Home, Imprint, About Me,
 * Projects, Contact Me, Resume, Link List, and the 404 error page title. These
 * labels are consumed by navigation components, breadcrumbs, and page metadata
 * across the entire application. Translations are available in German (de-DE)
 * and English (en-US).
 *
 * Dictionary key: `"sites"`
 *
 * @see {@link src/lib/components/AppSidebar.svelte} -- sidebar navigation consuming `useIntlayer("sites")`
 * @see {@link src/lib/components/Footer.svelte} -- footer navigation consuming `useIntlayer("sites")`
 * @see {@link src/routes/[[locale=locale]]/+page.svelte} -- home page
 * @see {@link src/routes/[[locale=locale]]/+error.svelte} -- error page
 * @see {@link src/routes/[[locale=locale]]/aboutme/+page.svelte} -- about me page
 * @see {@link src/routes/[[locale=locale]]/contact/+page.svelte} -- contact page
 * @see {@link src/routes/[[locale=locale]]/cv/+page.svelte} -- CV page
 * @see {@link src/routes/[[locale=locale]]/cv/ats/+page.svelte} -- ATS CV page
 * @see {@link src/routes/[[locale=locale]]/linkhub/+page.svelte} -- link hub page
 */
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
