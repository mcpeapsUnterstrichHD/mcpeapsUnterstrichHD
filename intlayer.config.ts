import {type IntlayerConfig } from "intlayer";
import { languages } from "./src/lib/lang";


const config: IntlayerConfig = {
  internationalization: {
    locales: languages.map(l => l.code),
    defaultLocale: languages[0].code,
    strictMode: "strict"
  },
  routing: {
    mode: 'prefix-no-default',
    storage: [
      {
        type: "cookie",
        name: "mahd-locale",
        expires: 60 * 60 * 24 * 7,
        secure: true,
        sameSite: "strict",
        httpOnly: false,
      },
      {
        type: "localStorage",
        name: "mahd-locale",
      },
      {
        type: "header",
        name: "x-mahd-locale",
      }
    ],
  },
};

export default config;
