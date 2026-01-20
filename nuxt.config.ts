import { fileURLToPath } from 'url'
import { defaultLocale, languages } from './app/lib/lang';
import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from '@tailwindcss/vite'
import tsPaths from 'vite-tsconfig-paths'
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    '@nuxt/fonts',
    '@nuxt/hints',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/a11y',
    '@nuxtjs/i18n',
    '@formkit/auto-animate/nuxt',
    // '@nuxtjs/tailwindcss',
    '@nuxtjs/seo',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@dargmuesli/nuxt-cookie-control',
    'nuxt-viewport'
  ],
  vite: {
    plugins: [
      tailwindcss(),
      tsPaths()
    ]
  },
  css: ['./app/css/tailwind.css'],
  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  compatibilityDate: '2024-04-03',
  i18n: {
    defaultLocale: defaultLocale,
    langDir: 'locales',
    locales: languages.map((lang) => ({
      code: lang.code,
      name: lang.name,
      file: `${lang.code}.json`
    }))
  },
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'cookie', // or 'sessionStorage' or 'cookie'
    storageKey: 'MAHD-Theme'
  },
  cookieControl: {
    barPosition: 'bottom-full',
    closeModalOnClickOutside: true,
    colors: {
      barBackground: 'var(--background)',
      barButtonBackground: 'var(--primary)',
      barButtonColor: 'var(--primary-foreground)',
      barButtonHoverBackground: 'var(--primary)',
      barButtonHoverColor: 'var(--primary-foreground)',
      barTextColor: 'var(--foreground)',
      modalBackground: 'var(--background)',
      modalButtonBackground: 'var(--primary)',
      modalButtonColor: 'var(--primary-foreground)',
      modalButtonHoverBackground: 'var(--primary)',
      modalButtonHoverColor: 'var(--primary-foreground)',
      modalTextColor: 'var(--foreground)',
    },
    cookies: {
      necessary: [
        {
          name: 'MAHD-Theme',
          description: { en: 'Stores your theme preference.', de: 'Speichert deine Theme-Einstellung.' }
        }
      ],
      optional: []
    },
    locales: ['en', 'de'],
    isControlButtonEnabled: true
  }
})