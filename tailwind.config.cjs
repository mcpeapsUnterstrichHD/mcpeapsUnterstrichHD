/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'CaskaydiaCove NFM': [
          '/mcpeapsUnterstrichHD/CaskaydiaCoveNerdFontMono-Regular.ttf',
          'monospace',
        ],
        'CaskaydiaCove NF': [
          '/mcpeapsUnterstrichHD/CaskaydiaCoveNerdFont-Regular.ttf',
          'serif',
        ],
        'CaskaydiaCove NFP': [
          '/mcpeapsUnterstrichHD/CaskaydiaCoveNerdFontPropo-Regular.ttf',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
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
