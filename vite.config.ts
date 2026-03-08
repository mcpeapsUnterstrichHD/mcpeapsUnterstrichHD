import { intlayer, intlayerProxy } from "vite-intlayer";
import tailwindcss from "@tailwindcss/vite";
import devtoolsJson from "vite-plugin-devtools-json";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import biomePlugin from "vite-plugin-biome";
import Icons from "unplugin-icons/vite";
import TurboConsole from "unplugin-turbo-console/vite";
import ViteRestart from "vite-plugin-restart";
import { VitePWA } from "vite-plugin-pwa";
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
    VitePWA({
      srcDir: "src/service-worker",
      filename: "index.ts",
      strategies: "injectManifest",
      registerType: "prompt",
      scope: "/",
      base: "/",
      pwaAssets: {
        config: true,
        overrideManifestIcons: true,
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
      devOptions: {
        enabled: true,
        type: "module",
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
      disableGlobbing: false,
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
