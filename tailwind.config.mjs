const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography'),require("@tailwindcss/forms")({
    strategy: 'base', // only generate global styles
    //strategy: 'class', // only generate classes
  }),
],
}
}