<script lang="ts">
  /**
   * @component Lens
   *
   * Hover-activated magnification lens inspired by macOS Quick Look preview zoom.
   * Provides 2x zoom within a 150px circular viewport, following Apple's convention
   * of progressive disclosure through direct manipulation.
   *
   * A hover-activated magnifying lens effect that zooms into content at the
   * cursor position. When the user hovers over the component, a circular lens
   * appears under the cursor showing a zoomed-in view of the children content.
   *
   * The lens uses Svelte `spring` stores for smooth scale and opacity transitions,
   * and a CSS radial-gradient `mask-image` to create the circular reveal. The zoom
   * is achieved by rendering the children twice -- once at normal scale and once
   * inside a scaled container clipped by the lens mask.
   *
   * Accessibility: The container is focusable (`tabindex="0"`) with `role="region"`
   * and a configurable `aria-label`. Pressing Escape dismisses the lens.
   *
   * @example
   * ```svelte
   * <Lens zoomFactor={2} lensSize={150} ariaLabel="Zoom into image">
   *   <img src="/photo.jpg" alt="A photo" />
   * </Lens>
   * ```
   *
   * @example Static lens (always visible, no hover needed)
   * ```svelte
   * <Lens isStatic={true} zoomFactor={3} lensSize={200}>
   *   <div>Zoomable content</div>
   * </Lens>
   * ```
   */
  import { onMount } from 'svelte';
  import { spring } from 'svelte/motion';
  import { cn } from '$lib/utils';

  /**
   * Props for the Lens component.
   *
   * @property {Snippet} children - The content to display and magnify on hover.
   * @property {number} [zoomFactor=2] - Scale multiplier for the magnified view inside the lens.
   * @property {number} [lensSize=150] - Diameter of the circular lens in pixels.
   * @property {boolean} [isStatic=false] - When true, the lens overlay is always visible
   *   regardless of hover state.
   * @property {number} [duration=0.1] - CSS transition duration in seconds for opacity
   *   and scale transitions.
   * @property {string} [lensColor='black'] - Color used in the radial-gradient mask. Typically
   *   left as 'black' for standard masking behavior.
   * @property {string} [ariaLabel='Zoom Area'] - Accessible label for the lens region.
   */
  interface Props {
    children: import('svelte').Snippet;
    zoomFactor?: number;
    lensSize?: number;
    isStatic?: boolean;
    duration?: number;
    lensColor?: string;
    ariaLabel?: string;
  }

  let {
    children,
    zoomFactor = 2,
    lensSize = 150,
    isStatic = false,
    duration = 0.1,
    lensColor = 'black',
    ariaLabel = 'Zoom Area'
  }: Props = $props();

  /** Reference to the container div, used for calculating mouse position relative to bounds. */
  let containerRef: HTMLDivElement | undefined = $state();
  /** Whether the user is currently hovering over the container. */
  let isHovering = $state(false);
  /** Current mouse coordinates relative to the container's top-left corner. */
  let mousePosition = $state({ x: 0, y: 0 });

  /** Spring store controlling the lens container's scale (0.58 when hidden, 1 when active). */
  let lensScale = spring(0.58, { stiffness: 0.1, damping: 0.3 });
  /** Spring store controlling the lens container's opacity (0 when hidden, 1 when active). */
  let lensOpacity = spring(0, { stiffness: 0.1, damping: 0.3 });

  /**
   * Updates the mouse position state relative to the container on each mouse move.
   *
   * @param {MouseEvent} e - The native mousemove event.
   */
  function handleMouseMove(e: MouseEvent) {
    if (!containerRef) return;
    const rect = containerRef.getBoundingClientRect();
    mousePosition = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  /** Keyboard handler: pressing Escape dismisses the lens. */
  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') setIsHovering(false);
  }

  /**
   * Toggles the hover state and animates the lens springs accordingly.
   * When hovering begins, scale springs to 1 and opacity to 1.
   * When hovering ends, scale returns to 0.58 and opacity to 0.
   *
   * @param {boolean} hovering - Whether the lens should be shown.
   */
  function setIsHovering(hovering: boolean) {
    isHovering = hovering;
    if (hovering) {
      lensScale.set(1);
      lensOpacity.set(1);
    } else {
      lensScale.set(0.58);
      lensOpacity.set(0);
    }
  }

  /** CSS radial-gradient mask that creates the circular lens reveal at the current mouse position. */
  let maskImage = $derived(
    `radial-gradient(circle ${lensSize / 2}px at ${mousePosition.x}px ${mousePosition.y}px, ${lensColor} 100%, transparent 100%)`
  );

  /** Whether the lens overlay should be rendered (always true in static mode, otherwise tracks hover). */
  let showLens = $derived(isStatic || isHovering);
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- svelte-ignore a11y_role_has_required_aria_props -->
<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<div
  bind:this={containerRef}
  class={cn("relative z-20 overflow-hidden rounded-xl w-full h-full")}
  onmouseenter={() => setIsHovering(true)}
  onmouseleave={() => setIsHovering(false)}
  onmousemove={handleMouseMove}
  onkeydown={handleKeyDown}
  role="region"
  aria-label={ariaLabel}
  tabindex="0"
>
  {@render children()}

  {#if showLens}
    <div
      class={cn("absolute inset-0 overflow-hidden")}
      style="
        opacity: {$lensOpacity};
        transform: scale({$lensScale});
        mask-image: {maskImage};
        -webkit-mask-image: {maskImage};
        transform-origin: {mousePosition.x}px {mousePosition.y}px;
        z-index: 50;
        transition: opacity {duration}s ease, transform {duration}s ease;
      "
    >
      <div
        class={cn("absolute inset-0")}
        style="
          transform: scale({zoomFactor});
          transform-origin: {mousePosition.x}px {mousePosition.y}px;
        "
      >
        {@render children()}
      </div>
    </div>
  {/if}
</div>
