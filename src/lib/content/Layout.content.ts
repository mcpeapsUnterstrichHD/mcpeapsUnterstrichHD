/**
 * @module Layout.content
 *
 * @description
 * Intlayer content dictionary for the root application layout. Provides the
 * global page title and meta description used in the HTML `<head>` for SEO and
 * browser tab display. Translations are available in German (de-DE) and
 * English (en-US).
 *
 * Dictionary key: `"layout"`
 *
 * @see {@link src/routes/[[locale=locale]]/+layout.svelte} -- root layout consuming `useIntlayer("layout")`
 * @see {@link src/routes/[[locale=locale]]/+page.svelte} -- home page
 * @see {@link src/routes/[[locale=locale]]/+error.svelte} -- error page
 * @see {@link src/routes/[[locale=locale]]/aboutme/+page.svelte} -- about me page
 * @see {@link src/routes/[[locale=locale]]/projects/+page.svelte} -- projects page
 * @see {@link src/routes/[[locale=locale]]/contact/+page.svelte} -- contact page
 * @see {@link src/routes/[[locale=locale]]/cv/+page.svelte} -- CV page
 * @see {@link src/routes/[[locale=locale]]/cv/ats/+page.svelte} -- ATS-friendly CV page
 * @see {@link src/routes/[[locale=locale]]/linkhub/+page.svelte} -- link hub page
 * @see {@link src/routes/[[locale=locale]]/imprint/+page.svelte} -- imprint page
 */
import { Locales, t, type Dictionary } from "intlayer";

const layoutContent = {
  key: "layout",
  content: {
    title: t({
      [Locales.ENGLISH_UNITED_STATES]: "Fabian Aps Portfolio/Imprint",
      [Locales.GERMAN_GERMANY]: "Fabian Aps Portfolio/Impressum",
    }),
    description: t({
      [Locales.ENGLISH_UNITED_STATES]: "my own portfolio/imprint website",
      [Locales.GERMAN_GERMANY]: "meine eigene Portfolio/Impressum Webseite",
    }),
  },
} satisfies Dictionary;

export default layoutContent;
