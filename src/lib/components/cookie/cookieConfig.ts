/**
 * @module cookieConfig
 * @description Configuration module for the vanilla-cookieconsent v3 library integration.
 * Defines consent categories and library behavior for the cookie consent system.
 *
 * This module provides the base configuration object that is passed to
 * `vanilla-cookieconsent`'s `CC.run()` method. The built-in UI of the library
 * is intentionally suppressed (`autoShow: false`) because the application uses
 * a fully custom Svelte-based UI rendered by {@link CookieConsent.svelte}.
 * All user-facing text is handled via `intlayer` / paraglide translations,
 * so the language translations in this config are minimal placeholders required
 * by the library's API contract.
 *
 * @see {@link cookieState.svelte.ts} for the reactive state that tracks accepted categories
 * @see {@link CookieConsent.svelte} for the custom banner and preferences sheet UI
 * @see {@link ConsentIframe.svelte} for consent-gated iframe rendering
 * @see https://cookieconsent.orestbida.com/ for vanilla-cookieconsent v3 documentation
 *
 * @example
 * ```ts
 * import { cookieConsentConfig } from './cookieConfig';
 * import * as CC from 'vanilla-cookieconsent';
 *
 * CC.run({
 *   ...cookieConsentConfig,
 *   onConsent: () => { // handle consent },
 *   onChange: () => { // handle change },
 * });
 * ```
 */
import { Locales } from 'intlayer';
import type { CookieConsentConfig } from 'vanilla-cookieconsent';

/**
 * The core configuration object for vanilla-cookieconsent v3.
 *
 * @description Configures the cookie consent library with custom categories and behavior.
 * The library's built-in modals/banners are disabled in favor of a custom Svelte UI.
 * All UI text is sourced from intlayer/paraglide translations, not from this config.
 *
 * @constant
 * @type {CookieConsentConfig}
 *
 * @property {boolean} autoShow - Set to `false` to prevent the library's default banner from appearing;
 *   the custom Svelte UI in {@link CookieConsent.svelte} handles visibility instead.
 * @property {boolean} manageScriptTags - When `true`, the library automatically manages
 *   `<script>` tags with `data-cookiecategory` attributes based on consent state.
 * @property {boolean} autoClearCookies - When `true`, cookies associated with rejected
 *   categories are automatically removed.
 * @property {boolean} hideFromBots - When `true`, the consent mechanism is hidden from
 *   detected bot/crawler user agents.
 * @property {object} cookie - Cookie storage settings for the consent cookie itself.
 * @property {string} cookie.name - The name of the cookie that stores consent preferences (`'mahd-cookie-consent'`).
 * @property {number} cookie.expiresAfterDays - Number of days before the consent cookie expires (7 days).
 * @property {object} categories - Defines the available consent categories.
 * @property {object} categories.necessary - Essential cookies; always enabled, read-only (cannot be toggled off).
 * @property {object} categories.multimedia - Consent for embedded media services (e.g., Apple Music, Songlink).
 * @property {object} categories.socialMedia - Consent for social media embed services.
 * @property {object} categories.contact - Consent for contact/booking embed services (e.g., Cal.com).
 * @property {object} language - Minimal language configuration required by the library; actual UI text
 *   is rendered by Svelte components using intlayer translations.
 */
export const cookieConsentConfig: CookieConsentConfig = {
  autoShow: false,
  manageScriptTags: true,
  autoClearCookies: true,
  hideFromBots: true,

  cookie: {
    name: 'mahd-cookie-consent',
    expiresAfterDays: 7,
  },

  categories: {
    necessary: {
      enabled: true,
      readOnly: true,
    },
    multimedia: {
      enabled: true,
    },
    socialMedia: {
      enabled: true,
    },
    contact: {
      enabled: true,
    },
  },

  // Minimal language config required by the library.
  // Our actual UI is rendered via Svelte + paraglide.
  language: {
    default: Locales.GERMAN_GERMANY,
    translations: {
      [Locales.GERMAN_GERMANY]: {
        consentModal: {
          title: '',
          description: '',
        },
        preferencesModal: {
          title: '',
          acceptAllBtn: '',
          acceptNecessaryBtn: '',
          savePreferencesBtn: '',
          closeIconLabel: 'Schließen',
          sections: [],
        },
      },
      [Locales.ENGLISH_UNITED_STATES]: {
        consentModal: {
          title: '',
          description: '',
        },
        preferencesModal: {
          title: '',
          acceptAllBtn: '',
          acceptNecessaryBtn: '',
          savePreferencesBtn: '',
          closeIconLabel: 'Close',
          sections: [],
        },
      },
    },
  },
};
