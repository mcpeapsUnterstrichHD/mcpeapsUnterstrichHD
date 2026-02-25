<script lang="ts">
  import type { Snippet } from 'svelte';

  export type MasonryVariant = 'projects' | 'pinned_projects' | 'skills' | 'links';

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

  const variantClasses: Record<MasonryVariant, string> = {
    projects: 'columns-1 sm:columns-2 md:columns-3 lg:columns-4',
    pinned_projects: 'columns-1 sm:columns-2 md:columns-3',
    skills: 'columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5',
    links: 'columns-1 sm:columns-2 md:columns-3 lg:columns-4'
  };
</script>

<div class="{variantClasses[variant]} gap-4 w-full {className}">
  {@render children()}
</div>
