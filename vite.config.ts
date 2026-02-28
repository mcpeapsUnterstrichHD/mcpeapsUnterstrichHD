import { intlayer, intlayerProxy } from "vite-intlayer";
import tailwindcss from '@tailwindcss/vite';
import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { watch } from "node:fs";

export default defineConfig({
	plugins: [
		intlayer(),
		//intlayerProxy(),
		tailwindcss(),
		sveltekit(),
		devtoolsJson()
	],
	ssr: {
		noExternal: ['@icons-pack/svelte-simple-icons']
	},
	server: {
		watch:{
			ignored: ['**/node_modules/**', '**/.intlayer/**'],
			alwaysStat: true,
			followSymlinks: true,
			atomic: true,
			useFsEvents: true,
			usePolling: false,
			ignorePermissionErrors: true,
			interval: 100,
			binaryInterval: 100,
			disableGlobbing: false
		},
		fs: {
			strict: true,
			allow: ['.intlayer']
		},
		port: 3000,
		host: true,
		open: true,
	},
});
