const URL = "mcpeapsunterstrichhd.dev";
const LONG_TITLE= 'Fabian Aps Portfolio/Impressum';
const SHORT_TITLE = "Fabian Aps";
const DESCRIPTION = "my own portfolio/impressum website";
const AUTHOR = "mcpeaps_HD";
const KEYWORDS = [
	"portfolio", "website", "impressum", "github", "linkedin", "aps", "fabian",
];
const PICTURES_PATH = "/pictures";
const LOGO_PATH = `${PICTURES_PATH}/Logo.png`;
const LOGO_ALT = "Logo of mcpeaps_HD";
const LOGO_SIZE = 3000;
const FAVICON_PATH = '/favicon.ico';


const THEME_COLOR = "#2E3440";


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	experimental: {
		defaults: {
			nuxtLink: {
				prefetch: true,
			},
		},
	},
	nitro: {
		prerender: {
			// enabled by default with nuxt generate, not required
			crawlLinks: true,
			// add any routes to prerender
			routes: [
				"/",
				"/sitemap.xml",
				"/lebenslauf",
				"/lebenslauf-pdf",
				"/impressum",
				"/aboutme",
				"/projects",
				"/robots.txt",
				"/manifest.webmanifest",
			],
		},
		preset: "cloudflare-pages", // Oder 'cloudflare-pages', falls du Pages nutzt
	},
	app: {
		head: {
			seoMeta: {
				title: LONG_TITLE,
				description: DESCRIPTION,
				keywords: KEYWORDS.join(", "),
				charset: "utf-8",
				viewport: "width=device-width, initial-scale=1.0",
				author: AUTHOR,
				robots: "index, follow",
			},
			meta: [
				{ name: "description", content: DESCRIPTION },
				{ name: "keywords", content: KEYWORDS.join(", ") },
				{ name: "author", content: AUTHOR },
				{ name: "robots", content: "index, follow" },
				{ charset: "utf-8" },
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
			],
		},
		config: {
			appid: "mcpeapsUnterstrichHD",
		},
		pageTransition: { name: "page", mode: "out-in" },
	},
	compatibilityDate: "2024-11-01",
	devtools: {
		enabled: process.env.NODE_ENV !== "production",
	},
	modules: [
		"shadcn-nuxt",
		"@nuxtjs/tailwindcss",
		"@nuxtjs/color-mode",
		"@nuxt/fonts",
		"@nuxtjs/robots",
		"@nuxtjs/seo",
		"@nuxtjs/sitemap",
		"@nuxtjs/web-vitals",
		"@vite-pwa/nuxt",
		"@nuxt/image",
		"@nuxtjs/device",
		"@weareheavy/nuxt-cookie-consent",
		"nuxt-svgo",
		"nuxt-viewport",
		"nuxt-og-image",
		"nuxt-site-config",
		"@nuxthub/core",
		"nuxt-booster",
	],
	hub: {
		browser: true,
	},
	site: {
		url: `https://${URL}`,
		name: LONG_TITLE,
		description: DESCRIPTION,
		shortName: SHORT_TITLE,
		keywords: KEYWORDS.join(", "),
		icon: {
			url: LOGO_PATH,
			sizes: `${LOGO_SIZE}x${LOGO_SIZE}`,
			type: "image/png",
		},
		defaultLocale: "de-DE",
	},
	ogImage: {
		defaults: {
			renderer: "chromium",
		},
	},
	shadcn: {
		/**
		 * Prefix for all the imported component
		 */
		prefix: "",
		/**
		 * Directory that the component lives in.
		 * @default "./components/ui"
		 */
		componentDir: "./components/ui",
	},
	tailwindcss: {
		configPath: "./tailwind.config.js",
	},
	colorMode: {
		preference: "system",
		fallback: "dark",
		classSuffix: "",
	},
	robots: {
		sitemap: "/sitemap.xml",
		blockAiBots: false,
		blockNonSeoBots: false,
		disallow: ["/impressum", "/lebenslauf"],
		allow: ["/", "/aboutme", "/projets"],
	},
	seo: {},
	sitemap: {
		hostname: `https://${URL}`,
		xsl: false,
		defaults: {
			lastmod: new Date().toISOString(),
			priority: 0.5,
			changefreq: "daily",
		},
		title: LONG_TITLE,
		xslColumns: [
			{ label: "URL", width: "50%" },
			{ label: "Last Modified", select: "sitemap:lastmod", width: "25%" },
			{ label: "Priority", select: "sitemap:priority", width: "12.5%" },
			{
				label: "Change Frequency",
				select: "sitemap:changefreq",
				width: "12.5%",
			},
		],
	},
	webVitals: {
		provider: "log",
	},
	pwa: {
		manifest: {
			name: SHORT_TITLE,
			short_name: SHORT_TITLE,
			description: DESCRIPTION,
			theme_color: THEME_COLOR,
			background_color: THEME_COLOR,
			display: "standalone",
			start_url: "/",
			scope: "/",
			display_override: ["standalone", "window-controls-overlay"],
			lang: "de-DE",
			prefer_related_applications: false,

			icons: [
				{
					src: FAVICON_PATH,
					sizes: `${LOGO_SIZE}x${LOGO_SIZE}`,
					type: "image/x-icon",
				},
				{
					src: LOGO_PATH,
					sizes: `${LOGO_SIZE}x${LOGO_SIZE}`,
					type: "image/png",
					purpose: "maskable",
				},
				{
					src: LOGO_PATH,
					sizes: `${LOGO_SIZE}x${LOGO_SIZE}`,
					type: "image/png",
					purpose: "any",
				},
				{
					src: LOGO_PATH,
					sizes: `${LOGO_SIZE}x${LOGO_SIZE}`,
					type: "image/png",
				},
			],
			screenshots: [
				{
					src: LOGO_PATH,
					sizes: `${LOGO_SIZE}x${LOGO_SIZE}`,
					type: "image/png",
					form_factor: "wide",
					label: "Logo of mcpeaps_HD",
				},
				{
					src: LOGO_PATH,
					sizes: `${LOGO_SIZE}x${LOGO_SIZE}`,
					type: "image/png",
					form_factor: "narrow",
					label: "Logo of mcpeaps_HD",
				},
			],
		},
		devOptions: {
			enabled: false,
			type: "module",
		},
		workbox: {
			navigateFallback: "/",
			cacheId: "mcpeaps_HD",
			clientsClaim: true,
			directoryIndex: "*",
			cleanupOutdatedCaches: true,
			runtimeCaching: [
				{ urlPattern: "*", handler: "NetworkFirst", },
			],
		},
		registerType: "autoUpdate",
	},
	image: {
		domains: [URL, "cdn.idx.dev", "img.youtube.com", "i.vimeocdn.com"],
		alias: {
			"/": URL,
			youtube: "https://img.youtube.com",
			vimeo: "https://i.vimeocdn.com",
		},
	},
	device: {},
	cookieConsent: {},
	svgo: {},
	viewport: {},
});