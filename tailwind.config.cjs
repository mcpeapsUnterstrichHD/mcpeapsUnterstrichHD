/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		fontFamily: {
		  'CaskaydiaCove': [
			'/mcpeapsUnterstrichHD/CaskaydiaCoveNerdFontMono-Regular.ttf',
			'monospace'
		  ],
		  'CaskaydiaCove-semi-light-italic': [
			'/mcpeapsUnterstrichHD/CaskaydiaCoveNerdFontMono-SemiLightItalic.ttf',
			'monospace'
		  ],
		  'CaskaydiaCove-semi-light': [
			'/mcpeapsUnterstrichHD/CaskaydiaCoveNerdFontMono-SemiLight.ttf',
			'monospace'
		  ],
		  'CaskaydiaCove-semi-bold-italic': [
			'/mcpeapsUnterstrichHD/CaskaydiaCoveNerdFontMono-SemiBoldItalic.ttf',
			'monospace'
		  ],
		  'CaskaydiaCove-semi-bold': [
			'/mcpeapsUnterstrichHD/CaskaydiaCoveNerdFontMono-SemiBold.ttf',
			'monospace'
		  ],
		  'CaskaydiaCove-light-italic': [
			'/mcpeapsUnterstrichHD/CaskaydiaCoveNerdFontMono-LightItalic.ttf',
			'monospace'
		  ],
		  'CaskaydiaCove-light': [
			'/mcpeapsUnterstrichHD/CaskaydiaCoveNerdFontMono-Light.ttf',
			'monospace'
		  ],
		  'CaskaydiaCove-italic': [
			'/mcpeapsUnterstrichHD/CaskaydiaCoveNerdFontMono-Italic.ttf',
			'monospace'
		  ],
		  'CaskaydiaCove-extra-light-italic': [
			'/mcpeapsUnterstrichHD/CaskaydiaCoveNerdFontMono-ExtraLightItalic.ttf',
			'monospace'
		  ],
		  'CaskaydiaCove-extra-light': [
			'/mcpeapsUnterstrichHD/CaskaydiaCoveNerdFontMono-ExtraLight.ttf',
			'monospace'
		  ],
		  'CaskaydiaCove-bold-italic': [
			'/mcpeapsUnterstrichHD/CaskaydiaCoveNerdFontMono-BoldItalic.ttf',
			'monospace'
		  ],
		  'CaskaydiaCove-bold': [
			'/mcpeapsUnterstrichHD/CaskaydiaCoveNerdFontMono-Bold.ttf',
			'monospace'
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
  