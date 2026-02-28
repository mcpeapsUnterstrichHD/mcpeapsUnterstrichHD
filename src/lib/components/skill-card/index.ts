/**
 * @module skill-card
 *
 * Barrel export for the skill-card component family.
 *
 * - `Root` -- The fully populated {@link SkillCard} component.
 * - `Skeleton` -- The loading placeholder {@link SkillCardSkeleton}.
 *
 * @example
 * ```ts
 * import * as SkillCard from '$lib/components/skill-card';
 *
 * // <SkillCard.Root ... />
 * // <SkillCard.Skeleton />
 * ```
 */
export { default as Root } from "./skill-card.svelte";
export { default as Skeleton } from "./skill-card-skeleton.svelte";
