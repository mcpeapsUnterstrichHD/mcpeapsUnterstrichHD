<script lang="ts">
  /**
   * @component CardSkeleton
   *
   * A configurable card-shaped loading skeleton used as a placeholder while
   * content is being fetched or rendered. Built on shadcn-svelte Card and
   * Skeleton primitives, it provides a frosted glass appearance
   * (`bg-card/50 backdrop-blur-sm`) with a fade-in entrance animation.
   *
   * The skeleton layout can be customized by toggling image, header, and
   * footer sections, and by controlling the number of text-line placeholders
   * in the content area. Alternatively, a `children` snippet can replace the
   * default content lines with custom skeleton markup.
   *
   * @see {@link HeroSkeleton} for the hero section loading placeholder
   *
   * @example Default card skeleton with 3 text lines and a header
   * ```svelte
   * <CardSkeleton />
   * ```
   *
   * @example Full card skeleton with image, header, footer, and 5 content lines
   * ```svelte
   * <CardSkeleton showImage showHeader showFooter contentLines={5} />
   * ```
   *
   * @example Custom skeleton content
   * ```svelte
   * <CardSkeleton showHeader={false}>
   *   <Skeleton class={cn("h-6 w-3/4" />
   *   <Skeleton class={cn("h-4 w-1/2" />
   * </CardSkeleton>
   * ```
   */
  import * as Card from '$lib/components/ui/card';
  import { Skeleton } from '$lib/components/ui/skeleton';
  import { cn } from '$lib/utils';

  /**
   * Props for the CardSkeleton component.
   *
   * @property {boolean} [showImage=false] - Whether to render a full-width image
   *   skeleton at the top of the card.
   * @property {boolean} [showHeader=true] - Whether to render the header section
   *   containing a circular avatar skeleton and a title skeleton.
   * @property {boolean} [showFooter=false] - Whether to render a footer section
   *   with two button-shaped skeletons.
   * @property {number} [contentLines=3] - Number of text-line skeletons in the
   *   content area. Each subsequent line is 15% narrower than the previous.
   * @property {string} [class={cn(''] - Additional CSS class(es) forwarded to `Card.Root`.
   * @property {Snippet} [children] - Optional custom skeleton content that replaces
   *   the default `contentLines` placeholders.
   */
  interface Props {
    showImage?: boolean;
    showHeader?: boolean;
    showFooter?: boolean;
    contentLines?: number;
    class?: string;
    children?: import('svelte').Snippet;
  }

  let {
    showImage = false,
    showHeader = true,
    showFooter = false,
    contentLines = 3,
    class: className = '',
    children,
  }: Props = $props();
</script>

<Card.Root class={cn("bg-card/50 backdrop-blur-sm animate-in fade-in duration-500", className)}>
  {#if showImage}
    <Skeleton class={cn("h-40 w-full rounded-t-lg rounded-b-none")} />
  {/if}

  {#if showHeader}
    <Card.Header class={cn("pb-2")}>
      <div class={cn("flex items-center gap-2")}>
        <Skeleton class={cn("h-5 w-5 rounded-full")} />
        <Skeleton class={cn("h-5 w-32")} />
      </div>
    </Card.Header>
  {/if}

  <Card.Content class={cn("space-y-2")}>
    {#if children}
      {@render children()}
    {:else}
      {#each Array(contentLines) as _, i}
        <Skeleton class={cn("h-4")} style="width: {100 - i * 15}%" />
      {/each}
    {/if}
  </Card.Content>

  {#if showFooter}
    <div class={cn("px-4 pb-4 pt-2 flex gap-2")}>
      <Skeleton class={cn("h-8 w-20 rounded-md")} />
      <Skeleton class={cn("h-8 w-20 rounded-md")} />
    </div>
  {/if}
</Card.Root>
