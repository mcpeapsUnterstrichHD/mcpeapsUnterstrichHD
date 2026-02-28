<script lang="ts">
  /**
   * @component MasonryGrid
   *
   * A CSS-column-based masonry layout wrapper that arranges child cards into
   * responsive columns. The number of columns scales with viewport width using
   * Tailwind responsive breakpoints (`sm`, `md`, `lg`, `xl`).
   *
   * Column counts are platform-adaptive following iPadOS UICollectionView flow
   * patterns: 1 column on iPhone-class viewports, 2--3 on iPad-class, 3--5 on
   * Mac-class. Uses CSS columns for native browser masonry without JavaScript
   * layout calculation.
   *
   * Column counts are determined by the `variant` prop via the `variantClasses`
   * lookup:
   *
   * | Variant           | xs | sm | md | lg | xl |
   * |-------------------|----|----|----|----|----|
   * | `projects`        |  1 |  2 |  3 |  4 |  4 |
   * | `pinned_projects` |  1 |  2 |  3 |  3 |  3 |
   * | `skills`          |  1 |  2 |  3 |  4 |  5 |
   * | `links`           |  1 |  2 |  3 |  4 |  4 |
   *
   * Child cards should use `break-inside-avoid` to prevent mid-card column
   * breaks (all card components in this project already include this class).
   *
   * @see {@link ProjectCard} -- Rendered inside the `projects` / `pinned_projects` variant
   * @see {@link SkillCard} -- Rendered inside the `skills` variant
   * @see {@link LinkCard} -- Rendered inside the `links` variant
   */
  import type { Snippet } from 'svelte';
    import { cn } from '$lib/utils';

  /**
   * Union of supported masonry layout variants, each mapping to a different
   * set of responsive column-count Tailwind classes.
   */
  export type MasonryVariant = 'projects' | 'pinned_projects' | 'skills' | 'links';

  /**
   * Props for the MasonryGrid component.
   *
   * @property {MasonryVariant} [variant='projects'] - Layout preset controlling
   *   responsive column counts.
   * @property {string} [class=''] - Additional CSS class(es) forwarded to the wrapper `<div>`.
   * @property {Snippet} children - Svelte snippet of card components to lay out in the grid.
   */
  interface Props {
    variant?: MasonryVariant;
    class?: string;
    children: Snippet;
  }

  let {
    variant = 'projects',
    class: className = '',
    children
  }: Props = $props();

  /**
   * Static lookup mapping each `MasonryVariant` to its responsive Tailwind
   * column classes. These use CSS `columns-*` utilities for true masonry flow.
   */
  const variantClasses: Record<MasonryVariant, string> = {
    projects: 'columns-1 sm:columns-2 md:columns-3 lg:columns-4',
    pinned_projects: 'columns-1 sm:columns-2 md:columns-3',
    skills: 'columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5',
    links: 'columns-1 sm:columns-2 md:columns-3 lg:columns-4'
  };
</script>

<div class={cn(variantClasses[variant], "gap-4 w-full", className)}>
  {@render children()}
</div>
