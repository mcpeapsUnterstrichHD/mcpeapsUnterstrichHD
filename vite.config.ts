import { intlayer, intlayerProxy } from "vite-intlayer";
import tailwindcss from "@tailwindcss/vite";
import devtoolsJson from "vite-plugin-devtools-json";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import biomePlugin from "vite-plugin-biome";
import Icons from "unplugin-icons/vite";
import TurboConsole from "unplugin-turbo-console/vite";
import ViteRestart from "vite-plugin-restart";
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
