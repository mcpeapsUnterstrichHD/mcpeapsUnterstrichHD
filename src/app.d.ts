/**
 * @module app.d.ts
 * @description Global TypeScript declarations for the SvelteKit application.
 * Extends SvelteKit's built-in `App` namespace to add custom types for:
 * - `Locals` — per-request data (locale) available in server hooks and load functions
 * - `Platform` — Cloudflare Workers runtime environment bindings
 *
 * @see {@link https://svelte.dev/docs/kit/types#app.d.ts} SvelteKit app.d.ts documentation
 * @see `src/hooks.server.ts` — Where `locals.locale` is set
 */

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}

		/** Per-request locals set in the server hook. */
		interface Locals { locale: import("intlayer").Locale }

		/**
		 * Cloudflare Workers platform bindings.
		 * Available via `event.platform` in server-side code.
		 *
		 * @property env - Cloudflare environment bindings (KV, D1, R2, etc.)
		 * @property ctx - Execution context for waitUntil() and passThroughOnException()
		 * @property caches - Cloudflare Cache API
		 * @property cf - Incoming request properties (country, city, ASN, etc.)
		 */
		interface Platform {
			env: Env;
			ctx: ExecutionContext;
			caches: CacheStorage;
			cf?: IncomingRequestCfProperties
		}

		// interface PageData {}
		// interface PageState {}
	}
}

export {};
