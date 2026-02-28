<script lang="ts">
  /**
   * @component ClickSpark
   *
   * A decorative click-effect component that radiates spark lines outward from
   * the mouse click position. Each click spawns `sparkCount` line segments
   * distributed evenly around a full circle, which animate outward over
   * `duration` milliseconds with configurable easing.
   *
   * The component overlays a transparent `<canvas>` on top of its children. The
   * canvas is kept in sync with the container size via a ResizeObserver, and an
   * animation loop driven by `requestAnimationFrame` draws and fades sparks.
   *
   * @example
   * ```svelte
   * <ClickSpark sparkColor="#FFD700" sparkCount={12} duration={500}>
   *   <button>Click me!</button>
   * </ClickSpark>
   * ```
   *
   * @example Subtle sparks with ease-in easing
   * ```svelte
   * <ClickSpark sparkSize={6} sparkRadius={10} easing="ease-in" extraScale={0.8}>
   *   <div class="p-8">Content area</div>
   * </ClickSpark>
   * ```
   */
  import { onMount } from 'svelte';
  import { cn } from '$lib/utils';


  /**
   * Props for the ClickSpark component.
   *
   * @property {string} [sparkColor='#fff'] - CSS color for the spark lines.
   * @property {number} [sparkSize=10] - Initial length (in pixels) of each spark line.
   *   Lines shrink to 0 over the animation duration.
   * @property {number} [sparkRadius=15] - Base travel distance (in pixels) each spark
   *   moves outward from the click origin.
   * @property {number} [sparkCount=8] - Number of spark lines generated per click,
   *   distributed evenly around 360 degrees.
   * @property {number} [duration=400] - Animation duration in milliseconds for each spark burst.
   * @property {'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'} [easing='ease-out'] -
   *   Easing function applied to the outward travel of each spark.
   * @property {number} [extraScale=1.0] - Multiplier applied to `sparkRadius` for
   *   additional control over travel distance.
   * @property {Snippet} [children] - Optional child content rendered beneath the spark canvas.
   */
  interface Props {
    sparkColor?: string;
    sparkSize?: number;
    sparkRadius?: number;
    sparkCount?: number;
    duration?: number;
    easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
    extraScale?: number;
    children?: import('svelte').Snippet;
  }

  let {
    sparkColor = '#fff',
    sparkSize = 10,
    sparkRadius = 15,
    sparkCount = 8,
    duration = 400,
    easing = 'ease-out',
    extraScale = 1.0,
    children,
  }: Props = $props();

  /**
   * Describes a single spark line segment spawned from a click.
   *
   * @property {number} x - Horizontal origin of the spark (click position).
   * @property {number} y - Vertical origin of the spark (click position).
   * @property {number} angle - Radial angle in radians determining the spark's direction.
   * @property {number} startTime - High-resolution timestamp from `performance.now()` when the spark was created.
   */
  interface Spark {
    x: number;
    y: number;
    angle: number;
    startTime: number;
  }

  /** Reference to the overlay `<canvas>` element where sparks are drawn. */
  let canvas: HTMLCanvasElement;
  /** Reference to the container `<div>` used for sizing and click target. */
  let container: HTMLDivElement;
  /** Array of currently animating spark objects, pruned each frame. */
  let sparks: Spark[] = [];

  /**
   * Applies the configured easing function to a normalized progress value.
   *
   * @param {number} t - Progress value between 0 and 1.
   * @returns {number} The eased value between 0 and 1.
   */
  function easeFunc(t: number): number {
    switch (easing) {
      case 'linear': return t;
      case 'ease-in': return t * t;
      case 'ease-in-out': return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      default: return t * (2 - t); // ease-out
    }
  }

  /**
   * Click handler that spawns a new burst of spark objects at the click position.
   * Each spark is assigned an evenly-spaced radial angle and timestamped with
   * `performance.now()` for frame-accurate animation timing.
   *
   * @param {MouseEvent} e - The native click event.
   */
  function handleClick(e: MouseEvent) {
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const now = performance.now();
    const newSparks: Spark[] = Array.from({ length: sparkCount }, (_, i) => ({
      x, y,
      angle: (2 * Math.PI * i) / sparkCount,
      startTime: now,
    }));
    sparks.push(...newSparks);
  }

  /**
   * Initializes the 2D canvas context, sets up a ResizeObserver to keep the
   * canvas sized to its container, and starts a `requestAnimationFrame` loop
   * that draws active sparks. Each frame, expired sparks are pruned, and
   * remaining sparks are drawn as shrinking line segments radiating outward.
   * Cleanup cancels the animation frame, disconnects the observer, and clears
   * any pending resize timeout.
   */
  onMount(() => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;

    const resizeCanvas = () => {
      const { width, height } = container.getBoundingClientRect();
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    let resizeTimeout: ReturnType<typeof setTimeout>;
    const ro = new ResizeObserver(() => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 100);
    });
    ro.observe(container);
    resizeCanvas();

    const draw = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparks = sparks.filter(spark => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) return false;

        const progress = elapsed / duration;
        const eased = easeFunc(progress);
        const distance = eased * sparkRadius * extraScale;
        const lineLength = sparkSize * (1 - eased);

        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

        ctx.strokeStyle = sparkColor;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

        return true;
      });

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
      clearTimeout(resizeTimeout);
    };
  });
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class={cn("relative w-full h-full")} bind:this={container} onclick={handleClick}>
  <canvas bind:this={canvas} class={cn("absolute inset-0 pointer-events-none")}></canvas>
  {#if children}
    {@render children()}
  {/if}
</div>
