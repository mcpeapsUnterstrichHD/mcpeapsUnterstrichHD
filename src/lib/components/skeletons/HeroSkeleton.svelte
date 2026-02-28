<script lang="ts">
  /**
   * @component HeroSkeleton
   *
   * A hero-section loading skeleton used as a placeholder while the main
   * hero content is being fetched or hydrated. It mirrors the typical hero
   * layout: a centered subtitle, large title, secondary tagline, optional
   * multi-line description, and optional action buttons.
   *
   * All skeleton elements are centered and responsive (e.g., the main title
   * skeleton grows from `h-12 w-72` to `h-16 w-96` on medium screens). The
   * section uses a fade-in entrance animation (`animate-in fade-in duration-500`).
   *
   * @see {@link CardSkeleton} for card-shaped loading placeholders
   *
   * @example Default hero skeleton (subtitle, title, tagline)
   * ```svelte
   * <HeroSkeleton />
   * ```
   *
   * @example Full hero skeleton with description and buttons
   * ```svelte
   * <HeroSkeleton showSubtitle showDescription buttonCount={2} />
   * ```
   *
   * @example Minimal hero skeleton (title and tagline only)
   * ```svelte
   * <HeroSkeleton showSubtitle={false} />
   * ```
   */
  import { Skeleton } from '$lib/components/ui/skeleton';
  import { cn } from '$lib/utils';

  /**

  /**
   * Props for the HeroSkeleton component.
   *
   * @property {boolean} [showSubtitle=true] - Whether to render a subtitle
   *   skeleton line above the main title.
   * @property {boolean} [showDescription=false] - Whether to render a multi-line
   *   description skeleton below the tagline (3 progressively narrower lines).
   * @property {number} [buttonCount=0] - Number of button-shaped skeletons to
   *   render in a centered flex row below the description.
   */
  interface Props {
    showSubtitle?: boolean;
    showDescription?: boolean;
    buttonCount?: number;
  }

  let {
    showSubtitle = true,
    showDescription = false,
    buttonCount = 0,
  }: Props = $props();
</script>

<section class={cn("text-center space-y-4 animate-in fade-in duration-500")}>
  {#if showSubtitle}
    <Skeleton class={cn("h-6 w-48 mx-auto")} />
  {/if}

  <!-- Main title -->
  <Skeleton class={cn("h-12 w-72 mx-auto md:h-16 md:w-96")} />

  <!-- Secondary title/tagline -->
  <Skeleton class={cn("h-8 w-56 mx-auto")} />

  {#if showDescription}
    <div class={cn("flex flex-col items-center gap-2 max-w-2xl mx-auto mt-4")}>
      <Skeleton class={cn("h-4 w-full max-w-md")} />
      <Skeleton class={cn("h-4 w-full max-w-sm")} />
      <Skeleton class={cn("h-4 w-full max-w-xs")} />
    </div>
  {/if}

  {#if buttonCount > 0}
    <div class={cn("flex flex-wrap gap-3 mt-6 justify-center")}>
      {#each Array(buttonCount) as _, i}
        <Skeleton class={cn("h-10 w-32 rounded-md")} />
      {/each}
    </div>
  {/if}
</section>
