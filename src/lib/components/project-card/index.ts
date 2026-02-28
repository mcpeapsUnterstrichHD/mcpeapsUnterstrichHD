/**
 * @module project-card
 *
 * Barrel export for the project-card component family.
 *
 * - `Root` -- The fully populated {@link ProjectCard} component.
 * - `Skeleton` -- The loading placeholder {@link ProjectCardSkeleton}.
 *
 * @example
 * ```ts
 * import * as ProjectCard from '$lib/components/project-card';
 *
 * // <ProjectCard.Root ... />
 * // <ProjectCard.Skeleton />
 * ```
 */
export { default as Root } from "./project-card.svelte";
export { default as Skeleton } from "./project-card-skeleton.svelte";
