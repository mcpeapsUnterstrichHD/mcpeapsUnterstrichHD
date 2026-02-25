import { Locales, t, type Dictionary } from "intlayer";

const contactContent = {
  key: "contact",
  content: {
    description: t({
      [Locales.ENGLISH_UNITED_STATES]: "Let's connect! Book a meeting.",
      [Locales.GERMAN_GERMANY]: "Lass uns in Kontakt treten! Buche ein Meeting."
    }),
    bookMeeting: t({
      [Locales.ENGLISH_UNITED_STATES]: "Book a Meeting",
      [Locales.GERMAN_GERMANY]: "Meeting buchen"
    }),
    calDescription: t({
      [Locales.ENGLISH_UNITED_STATES]: "Schedule a call or meeting via Cal.com",
      [Locales.GERMAN_GERMANY]: "Plane ein Gespräch oder Meeting über Cal.com"
    }),
  }
} satisfies Dictionary;

export default contactContent;
