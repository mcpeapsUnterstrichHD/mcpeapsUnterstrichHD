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
