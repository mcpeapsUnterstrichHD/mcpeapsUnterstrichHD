import { MediaQuery } from "svelte/reactivity";

const DEFAULT_MOBILE_BREAKPOINT = 768;
const DEFAULT_TABLET_UPPER_BREAKPOINT = 1024;

/**
 * Media query that matches iPadOS-class viewports (768px–1024px).
 *
 * Separated from `is-mobile.svelte.ts` so that shadcn-svelte component
 * updates (`shadcn-svelte add --overwrite`) don't remove it.
 */
export class IsTablet extends MediaQuery {
	constructor(
		lower: number = DEFAULT_MOBILE_BREAKPOINT,
		upper: number = DEFAULT_TABLET_UPPER_BREAKPOINT
	) {
		super(`(min-width: ${lower}px) and (max-width: ${upper - 1}px)`);
	}
}
