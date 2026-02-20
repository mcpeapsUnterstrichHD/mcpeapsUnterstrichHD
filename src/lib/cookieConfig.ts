import type { CookieConsentConfig } from "vanilla-cookieconsent";

/**
 * vanilla-cookieconsent v3 configuration.
 *
 * We set `autoShow: false` because we render our own custom React UI.
 * The library's built-in modals/banners are not displayed.
 * All UI text comes from next-intl translations, not from this config.
 *
 * Categories:
 *  - necessary: always enabled, cannot be disabled
*  - analytics: for future analytics scripts (e.g. Plausible, Umami)
*  - marketing: for third-party embeds (Apple Music, Songlink, Cal.com)
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
    name: "MAHD_COOKIE_CONSENT",
    expiresAfterDays: 7,
  },

  categories: {
    necessary: {
      enabled: true,
      readOnly: true,
    },
    // analytics: {
    //   enabled: false,
    // },
    // marketing: {
    //   enabled: false,
    // },
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
  // Our actual UI is rendered via React + next-intl.
  language: {
    default: "de-de",
    translations: {
      "de-de": {
        consentModal: {
          title: "",
          description: "",
        },
        preferencesModal: {
          title: "",
          acceptAllBtn: "",
          acceptNecessaryBtn: "",
          savePreferencesBtn: "",
          closeIconLabel: "Schließen",
          sections: [],
        },
      },
    },
  },
};
