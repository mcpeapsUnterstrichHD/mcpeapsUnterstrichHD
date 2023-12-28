const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': [
          'caskaydiacovenerdfontmono-regular.ttf', ...defaultTheme.fontFamily.mono,
        ],
        'serif': [
  'caskaydiacovenerdfont-regular.ttf',
  ...defaultTheme.fontFamily.serif,
],
'sans': [
  'caskaydiacovenerdfontpropo-regular.ttf',
  ...defaultTheme.fontFamily.sans,
],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui'),require("@tailwindcss/forms")({
    strategy: 'base', // only generate global styles
    //strategy: 'class', // only generate classes
  }),
],
  daisyui: {
    themes: true,
    darkTheme: 'black',
    darkMode: 'class',
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    logs: false,
  },
};
