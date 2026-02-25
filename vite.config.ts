import { intlayer, intlayerProxy } from "vite-intlayer";
import tailwindcss from '@tailwindcss/vite';
import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		intlayer(),
		intlayerProxy(),
		tailwindcss(),
		sveltekit(),
		devtoolsJson()
	],
	ssr: {
		noExternal: ['@icons-pack/svelte-simple-icons']
	},
	server: {
		fs: {
			allow: ['.intlayer']
		}
	}
});
