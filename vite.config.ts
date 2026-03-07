import { intlayer, intlayerProxy } from "vite-intlayer";
import tailwindcss from "@tailwindcss/vite";
import devtoolsJson from "vite-plugin-devtools-json";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import biomePlugin from "vite-plugin-biome";
import Icons from "unplugin-icons/vite";
import TurboConsole from "unplugin-turbo-console/vite";
import ViteRestart from "vite-plugin-restart";
import { SvelteKitPWA } from "@vite-pwa/sveltekit";
import { qrcode } from "vite-plugin-qrcode";

export default defineConfig({
  plugins: [
    qrcode(),
    intlayer(),
    //intlayerProxy(),
    TurboConsole(), // Please add this plugin before sveltekit
    biomePlugin({
      mode: "format",
      files: ".", // Format only JavaScript files in src
      applyFixes: true,
    }),
    Icons({
      compiler: "svelte",
      autoInstall: true, // Auto-detects npm/yarn/pnpm
    }),
    ViteRestart({
      restart: ["src/**/*"],
    }),
    tailwindcss(),
    sveltekit(),
    SvelteKitPWA({
      srcDir: "src",
      strategies: "generateSW",
      registerType: "prompt",
      includeAssets: [
        "pictures/favicon.ico",
        "pictures/logo192.png",
        "pictures/logo512.png",
        "pictures/logo_maskable_icon.png",
      ],
      manifest: {
        name: "Fabian Aps",
        short_name: "Fabian Aps",
        description: "my own portfolio/impressum website",
        start_url: "/",
        display: "standalone",
        display_override: ["standalone", "window-controls-overlay"],
        background_color: "#2E3440",
        theme_color: "#2E3440",
        lang: "de-DE",
        id: "dev.mcpeapsUnterstrichHD.mcpeapsUnterstrichHD",
        icons: [
          {
            src: "pictures/favicon.ico",
            sizes: "any",
            type: "image/x-icon",
          },
          {
            src: "pictures/logo192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pictures/logo512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "pictures/logo_maskable_icon.png",
            sizes: "1024x1024",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        screenshots: [
          {
            src: "pictures/logo.png",
            sizes: "3000x3000",
            type: "image/png",
            form_factor: "wide",
            label: "Logo of mcpeaps_HD",
          },
          {
            src: "pictures/logo.png",
            sizes: "3000x3000",
            type: "image/png",
            form_factor: "narrow",
            label: "Logo of mcpeaps_HD",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webp,woff,woff2}"],
        navigateFallback: "/offline.html",
        runtimeCaching: [
          {
            urlPattern: ({ request }) => request.mode === "navigate",
            handler: "NetworkFirst",
            options: {
              cacheName: "pages-cache",
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
              networkTimeoutSeconds: 3,
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: true,
        type: "module",
        navigateFallback: "/",
      },
    }),
    devtoolsJson(),
  ],
  ssr: {
    noExternal: ["@icons-pack/svelte-simple-icons"],
  },
  server: {
    watch: {
      ignored: ["**/node_modules/**", "**/.intlayer/**"],
      alwaysStat: true,
      followSymlinks: true,
      atomic: true,
      useFsEvents: true,
      usePolling: false,
      ignorePermissionErrors: true,
      interval: 100,
      binaryInterval: 100,
      disableGlobbing: false,
    },
    fs: {
      strict: true,
      allow: [".intlayer"],
    },
    port: 3000,
    host: true,
    open: true,
    hmr: true,
  },
  build: {
    target: "esnext",
    minify: true,
    cssMinify: true,
    license: true,
    ssr: true,
  },
});
