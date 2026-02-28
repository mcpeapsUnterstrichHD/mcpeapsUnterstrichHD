/**
 * @module timeline-card
 *
 * Barrel export for the timeline-card component family.
 *
 * - `Root` -- The fully populated {@link TimelineCard} component.
 * - `Skeleton` -- The loading placeholder {@link TimelineCardSkeleton}.
 *
 * @example
 * ```ts
 * import * as TimelineCard from '$lib/components/timeline-card';
 *
 * // <TimelineCard.Root ... />
 * // <TimelineCard.Skeleton />
 * ```
 */
export { default as Root } from "./timeline-card.svelte";
export { default as Skeleton } from "./timeline-card-skeleton.svelte";
