/**
 * @module Aboutme.content
 *
 * @description
 * Intlayer content dictionary for the "About Me" section of the portfolio.
 * Contains biographical translations including greeting text, name, professional
 * title, a detailed personal description (with an `{age}` interpolation
 * placeholder), and labels for the embedded Spotify playlist and latest song
 * sections. Translations are available in German (de-DE) and English (en-US).
 *
 * Dictionary key: `"aboutme"`
 *
 * @see {@link src/routes/[[locale=locale]]/aboutme/+page.svelte} -- dedicated About Me page
 * @see {@link src/routes/[[locale=locale]]/+page.svelte} -- home page hero section
 * @see {@link src/routes/[[locale=locale]]/linkhub/+page.svelte} -- link hub (name reference)
 * @see {@link src/routes/[[locale=locale]]/cv/+page.svelte} -- CV page (name/title)
 * @see {@link src/routes/[[locale=locale]]/cv/ats/+page.svelte} -- ATS CV page
 * @see {@link src/routes/[[locale=locale]]/imprint/+page.svelte} -- imprint page
 * @see {@link src/routes/[[locale=locale]]/contact/+page.svelte} -- contact page
 * @see {@link src/lib/components/AppSidebar.svelte} -- sidebar (name display)
 * @see {@link src/lib/components/Footer.svelte} -- footer (name/copyright)
 */
import { Locales, t, type Dictionary } from "intlayer";

const aboutmeContent = {
  key: "aboutme",
  content: {
    hello: t({
      [Locales.ENGLISH_UNITED_STATES]: "Hello",
      [Locales.GERMAN_GERMANY]: "Hallo"
    }),
    iam: t({
      [Locales.ENGLISH_UNITED_STATES]: "I am",
      [Locales.GERMAN_GERMANY]: "Ich bin"
    }),
    name: t({
      [Locales.ENGLISH_UNITED_STATES]: "Fabian Aps",
      [Locales.GERMAN_GERMANY]: "Fabian Aps"
    }),
    title: t({
      [Locales.ENGLISH_UNITED_STATES]: "Developer, DJ & Producer from Berlin",
      [Locales.GERMAN_GERMANY]: "ITler, DJ & Producer aus Berlin"
    }),
    description: t({
      [Locales.ENGLISH_UNITED_STATES]: "{age} years old, based in Berlin, living somewhere between code and beats. By day I study Computer Science at TU Berlin, by night I produce tracks or work on my projects. My internship at KfW showed me I can handle IT operations too – but my heart beats for development. Whether building software or making music: as long as it's creative.",
      [Locales.GERMAN_GERMANY]: "{age} Jahre, Berliner, und irgendwo zwischen Code und Beats zu Hause. Tagsüber studiere ich Informatik an der TU Berlin, nachts produziere ich Tracks oder bastle an meinen Projekten. Mein Praktikum bei der KfW hat mir gezeigt, dass ich auch im IT-Betrieb gut klarkomme – aber mein Herz schlägt für die Entwicklung. Ob Software bauen oder Musik machen Hauptsache kreativ."
    }),
    myPlaylist: t({
      [Locales.ENGLISH_UNITED_STATES]: "My Playlist",
      [Locales.GERMAN_GERMANY]: "Meine Playlist"
    }),
    myCurrentSong: t({
      [Locales.ENGLISH_UNITED_STATES]: "My Latest Song",
      [Locales.GERMAN_GERMANY]: "Mein aktuellster Song"
    }),
  }
} satisfies Dictionary;

export default aboutmeContent;
