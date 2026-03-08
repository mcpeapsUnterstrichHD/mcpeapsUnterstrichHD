import { intlayer, intlayerProxy } from "vite-intlayer";
import process from "node:process";
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
      scope: "/",
      base: "/",
      selfDestroying: true,
      pwaAssets: {
        config: true,
      },
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
        cleanupOutdatedCaches: true,
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
              networkTimeoutSeconds: 30,
            },
          },
          {
            urlPattern: /\/__data\.json(\?.*)?$/,
            handler: "NetworkFirst",
            options: {
              cacheName: "data-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
              networkTimeoutSeconds: 30,
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
          {
            urlPattern: ({ request }) =>
              request.destination === "image" ||
              request.destination === "script" ||
              request.destination === "style" ||
              request.destination === "font",
            handler: "CacheFirst",
            options: {
              cacheName: "assets-cache",
              expiration: {
                maxEntries: 200,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      devOptions: {
        enabled: process.env.ENV === "development",
        suppressWarnings: true,
        type: "module",
      },
      kit: {
        includeVersionFile: true,
        trailingSlash: "ignore",
      },
    }),
    devtoolsJson(),
  ],
  ssr: {
    noExternal: ["@icons-pack/svelte-simple-icons"],
    external: ["workbox-window"],
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
      disableGlobbing: true,
    },
    fs: {
      strict: true,
      allow: [".intlayer"],
    },
    port: 3000,
    host: true,
    open: true,
    hmr: {
      port: 3000,
    },
  },
  build: {
    target: "esnext",
    minify: true,
    cssMinify: true,
    license: true,
    rollupOptions: {},
  },
});
