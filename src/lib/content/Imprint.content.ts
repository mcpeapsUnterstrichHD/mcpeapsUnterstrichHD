/**
 * @module Imprint.content
 *
 * @description
 * Intlayer content dictionary for the Legal Notice (Impressum) page. Contains
 * translations structured into the following sub-sections:
 *
 * - **title** -- Page heading ("Legal Notice" / "Impressum")
 * - **tmg** -- Information required under Section 5 of the German Telemedia Act,
 *   including the country label
 * - **contact** -- Contact section heading
 * - **rstv** -- Content responsibility notice under Section 55(2) of the German
 *   Interstate Broadcasting Treaty
 * - **cookies** -- Comprehensive cookie policy including sub-sections for
 *   no-analytics notice, technical cookies, third-party content, and consent
 *   storage duration
 *
 * Translations are available in German (de-DE) and English (en-US).
 *
 * Dictionary key: `"imprint"`
 *
 * @see {@link src/routes/[[locale=locale]]/imprint/+page.svelte} -- imprint page consuming `useIntlayer("imprint")`
 */
import { Locales, t, type Dictionary } from "intlayer";

const imprintContent = {
  key: "imprint",
  content: {
    title: t({
      [Locales.ENGLISH_UNITED_STATES]: "Legal Notice",
      [Locales.GERMAN_GERMANY]: "Impressum"
    }),
    tmg: {
      title: t({
        [Locales.ENGLISH_UNITED_STATES]: "Information according to § 5 TMG (German Telemedia Act)",
        [Locales.GERMAN_GERMANY]: "Angaben gemäß § 5 TMG"
      }),
      germany: t({
        [Locales.ENGLISH_UNITED_STATES]: "Germany",
        [Locales.GERMAN_GERMANY]: "Deutschland"
      }),
    },
    contact: {
      title: t({
        [Locales.ENGLISH_UNITED_STATES]: "Contact",
        [Locales.GERMAN_GERMANY]: "Kontakt"
      }),
    },
    rstv: {
      title: t({
        [Locales.ENGLISH_UNITED_STATES]: "Responsible for content according to § 55 Abs. 2 RStV (German Interstate Broadcasting Treaty)",
        [Locales.GERMAN_GERMANY]: "Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV"
      }),
    },
    cookies: {
      title: t({
        [Locales.ENGLISH_UNITED_STATES]: "Cookie Policy",
        [Locales.GERMAN_GERMANY]: "Cookie-Richtlinie"
      }),
      description: t({
        [Locales.ENGLISH_UNITED_STATES]: "This website uses cookies to ensure the best possible experience. We do not collect any analytics data about you or your device. Below you will find detailed information about the cookies used on this site.",
        [Locales.GERMAN_GERMANY]: "Diese Website verwendet Cookies, um das bestmögliche Erlebnis zu bieten. Es werden keinerlei analytische Daten über Sie oder Ihr Gerät erhoben. Nachfolgend finden Sie detaillierte Informationen zu den auf dieser Website verwendeten Cookies."
      }),
      noAnalytics: {
        title: t({
          [Locales.ENGLISH_UNITED_STATES]: "No Analytics",
          [Locales.GERMAN_GERMANY]: "Keine Analyse"
        }),
        description: t({
          [Locales.ENGLISH_UNITED_STATES]: "This website does not use any tracking, analytics, or profiling tools. No data about your behavior, device, or identity is collected or shared with third parties.",
          [Locales.GERMAN_GERMANY]: "Diese Website verwendet keine Tracking-, Analyse- oder Profiling-Tools. Es werden keine Daten über Ihr Verhalten, Ihr Gerät oder Ihre Identität erhoben oder an Dritte weitergegeben."
        }),
      },
      technical: {
        title: t({
          [Locales.ENGLISH_UNITED_STATES]: "Technical Cookies",
          [Locales.GERMAN_GERMANY]: "Technische Cookies"
        }),
        description: t({
          [Locales.ENGLISH_UNITED_STATES]: "We only use technically necessary cookies that are essential for the website to function properly. These include cookies for storing your language preference and cookie consent status. These cookies cannot be disabled.",
          [Locales.GERMAN_GERMANY]: "Wir verwenden nur technisch notwendige Cookies, die für die Funktion der Website unerlässlich sind. Dazu gehören Cookies zum Speichern Ihrer Sprachpräferenz und des Cookie-Zustimmungsstatus. Diese Cookies können nicht deaktiviert werden."
        }),
      },
      thirdParty: {
        title: t({
          [Locales.ENGLISH_UNITED_STATES]: "Third-Party Content (Blockable)",
          [Locales.GERMAN_GERMANY]: "Inhalte von Drittanbietern (Blockierbar)"
        }),
        description: t({
          [Locales.ENGLISH_UNITED_STATES]: "Some pages contain embedded content from third-party services. These services may set their own cookies, which are outside of my control. You can block this content at any time via your cookie settings.",
          [Locales.GERMAN_GERMANY]: "Einige Seiten enthalten eingebettete Inhalte von Drittanbietern. Diese Dienste können eigene Cookies setzen, die außerhalb meiner Kontrolle liegen. Sie können diese Inhalte jederzeit über Ihre Cookie-Einstellungen blockieren."
        }),
      },
      storage: {
        title: t({
          [Locales.ENGLISH_UNITED_STATES]: "Consent Storage",
          [Locales.GERMAN_GERMANY]: "Speicherung der Einstellungen"
        }),
        description: t({
          [Locales.ENGLISH_UNITED_STATES]: "Your cookie preferences are stored locally in a cookie for 7 days. After that, you will be asked again. You can change your preferences at any time by clicking the Cookie Settings button below or in the footer.",
          [Locales.GERMAN_GERMANY]: "Ihre Cookie-Einstellungen werden lokal in einem Cookie für 7 Tage gespeichert. Danach werden Sie erneut gefragt. Sie können Ihre Einstellungen jederzeit ändern, indem Sie den Button Cookie-Einstellungen unten oder im Footer klicken."
        }),
      },
    },
  }
} satisfies Dictionary;

export default imprintContent;
