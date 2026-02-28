/**
 * @module routes/[[locale=locale]]/+layout.server
 * @description Server-side layout load function for the locale-scoped route group.
 * Extracts the detected locale from `locals` (set by the SvelteKit hooks/middleware)
 * and passes it to the client-side layout as page data.
 *
 * The locale value is determined by the `[[locale=locale]]` route parameter matcher
 * and/or server-side locale detection logic in hooks. This data is consumed by the
 * corresponding `+layout.svelte` to synchronize the Intlayer client-side locale store.
 *
 * @see {@link routes/[[locale=locale]]/+layout.svelte} for client-side locale synchronization
 * @see {@link src/hooks.server.ts} for server-side locale detection middleware
 */

import type { LayoutServerLoad } from "./$types";

/**
 * Server load function that provides the detected locale to the layout.
 *
 * @param {object} context - SvelteKit load context
 * @param {App.Locals} context.locals - Server-side locals containing the detected locale
 * @returns {Promise<{ locale: import('intlayer').Locale }>} Object with the locale for client hydration
 *
 * @example
 * // The returned data is available in +layout.svelte as:
 * // let { data } = $props(); // data.locale === 'de-DE' | 'en-US'
 */
export const load: LayoutServerLoad = async ({ locals }) => {
  return {
    locale: locals.locale,
  };
};
