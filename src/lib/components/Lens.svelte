<script lang="ts">
  import { onMount } from 'svelte';
  import { spring } from 'svelte/motion';

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

  let containerRef: HTMLDivElement | undefined = $state();
  let isHovering = $state(false);
  let mousePosition = $state({ x: 0, y: 0 });

  // Use spring for smooth animation
  let lensScale = spring(0.58, { stiffness: 0.1, damping: 0.3 });
  let lensOpacity = spring(0, { stiffness: 0.1, damping: 0.3 });

  function handleMouseMove(e: MouseEvent) {
    if (!containerRef) return;
    const rect = containerRef.getBoundingClientRect();
    mousePosition = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Escape') setIsHovering(false);
  }

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

  let maskImage = $derived(
    `radial-gradient(circle ${lensSize / 2}px at ${mousePosition.x}px ${mousePosition.y}px, ${lensColor} 100%, transparent 100%)`
  );

  let showLens = $derived(isStatic || isHovering);
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- svelte-ignore a11y_role_has_required_aria_props -->
<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<div
  bind:this={containerRef}
  class="relative z-20 overflow-hidden rounded-xl w-full h-full"
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
      class="absolute inset-0 overflow-hidden"
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
        class="absolute inset-0"
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
