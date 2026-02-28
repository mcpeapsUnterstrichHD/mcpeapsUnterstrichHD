/**
 * @module link-card
 *
 * Barrel export for the link-card component family.
 *
 * - `Root` -- The fully populated {@link LinkCard} component.
 * - `Skeleton` -- The loading placeholder {@link LinkCardSkeleton}.
 *
 * @example
 * ```ts
 * import * as LinkCard from '$lib/components/link-card';
 *
 * // <LinkCard.Root ... />
 * // <LinkCard.Skeleton />
 * ```
 */
export { default as Root } from "./link-card.svelte";
export { default as Skeleton } from "./link-card-skeleton.svelte";
