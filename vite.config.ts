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
      injectRegister: false,
      strategies: "generateSW", // Spielt keine Rolle mehr, wenn injectRegister false ist
      pwaAssets: {
        integration: {
          publicDir: "static/",
          baseUrl: "/pictures/",
          outDir: "static/pictures/",
        },
        config: true,
        overrideManifestIcons: false,
        image: "static/pictures/logo.png",
      },
      manifest: false,
      minify: true,
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
