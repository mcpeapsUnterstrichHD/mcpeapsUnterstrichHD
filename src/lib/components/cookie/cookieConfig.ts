import { Locales } from 'intlayer';
import type { CookieConsentConfig } from 'vanilla-cookieconsent';

/**
 * vanilla-cookieconsent v3 configuration.
 *
 * We set `autoShow: false` because we render our own custom Svelte UI.
 * The library's built-in modals/banners are not displayed.
 * All UI text comes from paraglide translations, not from this config.
 *
 * Categories:
 *  - necessary: always enabled, cannot be disabled
 *  - multimedia: for embedded media (Apple Music, Songlink)
 *  - socialMedia: for social media embeds
 *  - contact: for contact/booking embeds (Cal.com)
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
