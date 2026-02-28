/**
 * @module CookieConsent.content
 *
 * @description
 * Intlayer content dictionary for the cookie consent banner, preferences dialog,
 * and blocked-content overlay. Contains translations for:
 *
 * - **Banner** -- Title, description, and action buttons (Accept All, Reject All,
 *   Manage Preferences, Save Preferences, More Information, Cookie Settings)
 * - **Cookie categories** -- Technical cookies (always-on) and third-party
 *   cookies, each with title and explanatory description
 * - **Consent categories** -- Multimedia (Apple Music, Songlink), Social Media,
 *   and Contact & Booking (Cal.com), each with title and description
 * - **Blocked content overlay** -- Title, description with `{category}`
 *   placeholder, and settings button label
 * - **Language** -- Label for the language selector within the consent dialog
 *
 * Translations are available in German (de-DE) and English (en-US).
 *
 * Dictionary key: `"cookieConsent"`
 *
 * @see {@link src/lib/components/cookie/CookieConsent.svelte} -- cookie consent banner/dialog
 * @see {@link src/lib/components/cookie/ConsentIframe.svelte} -- blocked content overlay for iframes
 * @see {@link src/lib/components/Footer.svelte} -- footer cookie settings button
 * @see {@link src/routes/[[locale=locale]]/imprint/+page.svelte} -- imprint page cookie policy section
 */
import { Locales, t, type Dictionary } from "intlayer";

const cookieConsentContent = {
  key: "cookieConsent",
  content: {
    title: t({
      [Locales.ENGLISH_UNITED_STATES]: "Cookie Notice",
      [Locales.GERMAN_GERMANY]: "Cookie-Hinweis"
    }),
    description: t({
      [Locales.ENGLISH_UNITED_STATES]: "This website uses cookies to ensure you get the best experience. We do not collect any analytics data about you or your device. Only technically necessary cookies are set by default. Third-party content can be blocked at your discretion. Your cookie preferences are stored for 7 days.",
      [Locales.GERMAN_GERMANY]: "Diese Website verwendet Cookies, um Ihnen das beste Erlebnis zu bieten. Es werden keinerlei analytische Daten über Sie oder Ihr Gerät erhoben. Standardmäßig werden nur technisch notwendige Cookies gesetzt. Inhalte von Drittanbietern können auf Wunsch blockiert werden. Ihre Cookie-Einstellungen werden für 7 Tage gespeichert."
    }),
    technicalCookies: {
      title: t({
        [Locales.ENGLISH_UNITED_STATES]: "Technical Cookies",
        [Locales.GERMAN_GERMANY]: "Technische Cookies"
      }),
      description: t({
        [Locales.ENGLISH_UNITED_STATES]: "These cookies are required for basic site functionality, such as remembering your preferences and language settings. They cannot be disabled. No personal or analytical data is collected.",
        [Locales.GERMAN_GERMANY]: "Diese Cookies sind für grundlegende Website-Funktionen erforderlich, wie das Speichern Ihrer Einstellungen und Sprachpräferenzen. Sie können nicht deaktiviert werden. Es werden keine persönlichen oder analytischen Daten erhoben."
      }),
    },
    thirdPartyCookies: {
      title: t({
        [Locales.ENGLISH_UNITED_STATES]: "Third-Party Content",
        [Locales.GERMAN_GERMANY]: "Inhalte von Drittanbietern"
      }),
      description: t({
        [Locales.ENGLISH_UNITED_STATES]: "Some pages contain embedded content from third-party services like Cal.com or Apple Music. These services may set their own cookies, which are outside of my control. You can block this content at any time via your cookie settings.",
        [Locales.GERMAN_GERMANY]: "Einige Seiten enthalten eingebettete Inhalte von Drittanbietern wie Cal.com oder Apple Music. Diese Dienste können eigene Cookies setzen, die außerhalb meiner Kontrolle liegen. Sie können diese Inhalte jederzeit über Ihre Cookie-Einstellungen blockieren."
      }),
    },
    acceptAll: t({
      [Locales.ENGLISH_UNITED_STATES]: "Accept All",
      [Locales.GERMAN_GERMANY]: "Alle akzeptieren"
    }),
    rejectAll: t({
      [Locales.ENGLISH_UNITED_STATES]: "Reject All",
      [Locales.GERMAN_GERMANY]: "Alle ablehnen"
    }),
    managePreferences: t({
      [Locales.ENGLISH_UNITED_STATES]: "Manage Preferences",
      [Locales.GERMAN_GERMANY]: "Einstellungen verwalten"
    }),
    savePreferences: t({
      [Locales.ENGLISH_UNITED_STATES]: "Save Preferences",
      [Locales.GERMAN_GERMANY]: "Einstellungen speichern"
    }),
    moreInfo: t({
      [Locales.ENGLISH_UNITED_STATES]: "More Information",
      [Locales.GERMAN_GERMANY]: "Mehr Informationen"
    }),
    cookieSettings: t({
      [Locales.ENGLISH_UNITED_STATES]: "Cookie Settings",
      [Locales.GERMAN_GERMANY]: "Cookie-Einstellungen"
    }),
    language: t({
      [Locales.ENGLISH_UNITED_STATES]: "Language",
      [Locales.GERMAN_GERMANY]: "Sprache"
    }),
    categories: {
      multimedia: {
        title: t({
          [Locales.ENGLISH_UNITED_STATES]: "Multimedia",
          [Locales.GERMAN_GERMANY]: "Multimedia"
        }),
        description: t({
          [Locales.ENGLISH_UNITED_STATES]: "Required for embedded media like Apple Music and Songlink players.",
          [Locales.GERMAN_GERMANY]: "Erforderlich für eingebettete Medien wie Apple Music und Songlink Player."
        }),
      },
      socialMedia: {
        title: t({
          [Locales.ENGLISH_UNITED_STATES]: "Social Media",
          [Locales.GERMAN_GERMANY]: "Social Media"
        }),
        description: t({
          [Locales.ENGLISH_UNITED_STATES]: "Required for embedded social media content.",
          [Locales.GERMAN_GERMANY]: "Erforderlich für eingebettete Social-Media-Inhalte."
        }),
      },
      contact: {
        title: t({
          [Locales.ENGLISH_UNITED_STATES]: "Contact & Booking",
          [Locales.GERMAN_GERMANY]: "Kontakt & Buchung"
        }),
        description: t({
          [Locales.ENGLISH_UNITED_STATES]: "Required for the Cal.com booking calendar.",
          [Locales.GERMAN_GERMANY]: "Erforderlich für den Cal.com Buchungskalender."
        }),
      },
    },
    blockedContent: {
      title: t({
        [Locales.ENGLISH_UNITED_STATES]: "Content Blocked",
        [Locales.GERMAN_GERMANY]: "Inhalt blockiert"
      }),
      description: t({
        [Locales.ENGLISH_UNITED_STATES]: "This content is blocked because you haven't accepted the required cookies. Enable the corresponding category: ({category}) in your cookie settings to view this content.",
        [Locales.GERMAN_GERMANY]: "Dieser Inhalt ist blockiert, da Sie die entsprechenden Cookies nicht akzeptiert haben. Aktivieren Sie die entsprechende Kategorie: ({category}) in Ihren Cookie-Einstellungen, um diesen Inhalt anzuzeigen."
      }),
      button: t({
        [Locales.ENGLISH_UNITED_STATES]: "Cookie Settings",
        [Locales.GERMAN_GERMANY]: "Cookie-Einstellungen"
      }),
    },
  }
} satisfies Dictionary;

export default cookieConsentContent;
