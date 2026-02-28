/**
 * @module cookieState
 * @description Reactive global state module for tracking cookie consent category acceptance.
 * Uses Svelte 5 runes (`$state`) to provide fine-grained reactivity across the application.
 *
 * This module serves as the single source of truth for which optional cookie categories
 * the user has consented to. The state is synchronized with the `vanilla-cookieconsent`
 * library by {@link CookieConsent.svelte} via its `syncCategories()` function, which
 * reads accepted categories from the library and writes them into this state object.
 *
 * Other components (e.g., {@link ConsentIframe.svelte}) derive their rendering behavior
 * from this state to conditionally show or block embedded content.
 *
 * Note: The `necessary` category is intentionally omitted because it is always enabled
 * and read-only -- there is no need to track it reactively.
 *
 * @see {@link cookieConfig.ts} for the category definitions passed to vanilla-cookieconsent
 * @see {@link CookieConsent.svelte} for the component that writes to this state
 * @see {@link ConsentIframe.svelte} for a consumer that reads from this state
 *
 * @example
 * ```ts
 * import { cookieState } from './cookieState.svelte';
 *
 * // Check if multimedia consent has been granted
 * if (cookieState.multimedia) {
 *   // Render Apple Music embed
 * }
 *
 * // Update consent state (typically done by CookieConsent.svelte)
 * cookieState.multimedia = true;
 * ```
 */

/**
 * Global reactive cookie consent state using Svelte 5 `$state` rune.
 *
 * @description Tracks the user's consent decision for each optional cookie category.
 * Each property is a boolean that is `false` by default (no consent) and set to `true`
 * when the user grants consent for that category. The state is deeply reactive thanks
 * to Svelte 5's `$state` rune, meaning any component reading these properties will
 * automatically re-render when consent changes.
 *
 * @type {{ multimedia: boolean; socialMedia: boolean; contact: boolean }}
 *
 * @property {boolean} multimedia - Whether the user has consented to multimedia cookies.
 *   Controls loading of embedded media content such as Apple Music players and Songlink widgets.
 *   Defaults to `false`.
 * @property {boolean} socialMedia - Whether the user has consented to social media cookies.
 *   Controls loading of social media embeds and widgets.
 *   Defaults to `false`.
 * @property {boolean} contact - Whether the user has consented to contact/booking cookies.
 *   Controls loading of contact and scheduling embeds such as Cal.com widgets.
 *   Defaults to `false`.
 */
export const cookieState = $state({
  multimedia: false,
  socialMedia: false,
  contact: false,
});
