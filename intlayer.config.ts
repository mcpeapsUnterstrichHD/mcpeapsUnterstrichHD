import { Locales, type IntlayerConfig } from "intlayer";


const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.GERMAN_GERMANY, Locales.ENGLISH_UNITED_STATES],
    defaultLocale: "de-DE",
    strictMode: "strict"
  },
  routing: {
    mode: 'prefix-no-default',
    storage: [
      {
        type: "localStorage",
        name: "mahd-locale",
      },
      {
        type: "cookie",
        name: "mahd-locale",
        expires: /* 60 * 60 * 24 * */ 7,
        secure: true,
        sameSite: "strict",
        httpOnly: false,
      },
      {
        type: "header",
        name: "x-mahd-locale",
      }
    ],
  },
};

export default config;
