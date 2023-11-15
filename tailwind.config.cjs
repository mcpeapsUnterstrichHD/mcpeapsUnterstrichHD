const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'CaskaydiaCove-NFM': [
          '/mcpeapsUnterstrichHD/CaskaydiaCoveNerdFontMono-Regular.ttf', ...defaultTheme.fontFamily.mono,
        ],
        'CaskaydiaCove-NF': [
  '/mcpeapsUnterstrichHD/CaskaydiaCoveNerdFont-Regular.ttf',
  ...defaultTheme.fontFamily.serif,
],
'CaskaydiaCove-NFP': [
  '/mcpeapsUnterstrichHD/CaskaydiaCoveNerdFontPropo-Regular.ttf',
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
    darkTheme: 'class',
    darkMode: 'class',
    base: true,
    styled: true,
    utils: true,
    rtl: false,
    logs: false,
  },
};
