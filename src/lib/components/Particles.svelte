<script lang="ts">
  /**
   * @component Particles
   *
   * A canvas-based particle background that renders floating circles in Nord
   * palette colors (nord11 red and nord14 green). Particles drift slowly with
   * subtle parallax movement driven by mouse position, creating an ambient
   * decorative backdrop for the portfolio.
   *
   * The component is rendered as a fixed, full-viewport overlay at `z-[-1]` with
   * `pointer-events-none` so it never intercepts user interaction. It carries the
   * `no-print` class and `aria-hidden="true"` to be excluded from print layouts
   * and assistive technology.
   *
   * Particles respawn when they drift off-canvas and fade in/out near edges using
   * alpha remapping. The canvas is DPR-aware for crisp rendering on Retina displays.
   *
   * @example
   * ```svelte
   * <Particles quantity={80} staticity={60} ease={30} />
   * ```
   *
   * @example Fewer particles, higher mouse responsiveness
   * ```svelte
   * <Particles quantity={40} staticity={20} ease={10} />
   * ```
   */
  import { onMount } from 'svelte';
  import { cn } from '$lib/utils';


  /**
   * Props for the Particles component.
   *
   * @property {string} [class=''] - Additional CSS class(es) forwarded to the container `<div>`.
   * @property {number} [quantity=120] - Number of particle circles to render on the canvas.
   * @property {number} [staticity=50] - Controls how resistant particles are to mouse movement.
   *   Higher values make particles less responsive to the cursor (more static).
   * @property {number} [ease=20] - Easing divisor for particle translation toward the mouse.
   *   Higher values produce slower, smoother following; lower values feel snappier.
   * @property {boolean} [refresh=true] - Reserved for future use; not currently read by the component.
   */
  interface Props {
    class?: string;
    quantity?: number;
    staticity?: number;
    ease?: number;
    refresh?: boolean;
  }

  let {
    class: className = '',
    quantity = 120,
    staticity = 50,
    ease = 20,
    refresh = true
  }: Props = $props();

  /** Reference to the `<canvas>` element used for particle rendering. */
  let canvasEl: HTMLCanvasElement;
  /** Reference to the container `<div>` used to measure available dimensions. */
  let containerEl: HTMLDivElement;
  /** The 2D rendering context of the canvas, obtained on mount. */
  let ctx: CanvasRenderingContext2D | null = null;
  /** Array of all active particle circle objects currently being animated. */
  let circles: Circle[] = [];
  /** Current mouse position relative to the canvas center, used for parallax displacement. */
  let mouse = { x: 0, y: 0 };
  /** Current canvas logical dimensions (before DPR scaling). */
  let canvasSize = { w: 0, h: 0 };
  /** Device pixel ratio for Retina-aware canvas rendering. */
  let dpr = 1;
  /** ID from `requestAnimationFrame`, used to cancel the animation loop on cleanup. */
  let animationId: number;

  /**
   * Describes a single particle circle on the canvas.
   *
   * @property {number} x - Horizontal position in canvas logical pixels.
   * @property {number} y - Vertical position in canvas logical pixels.
   * @property {number} translateX - Mouse-driven horizontal offset (parallax).
   * @property {number} translateY - Mouse-driven vertical offset (parallax).
   * @property {number} size - Radius of the circle in pixels (3-4).
   * @property {number} alpha - Current opacity (animated toward `targetAlpha`).
   * @property {number} targetAlpha - The target resting opacity for this particle.
   * @property {number} dx - Horizontal drift velocity per frame.
   * @property {number} dy - Vertical drift velocity per frame.
   * @property {number} magnetism - How strongly this particle is attracted to the mouse (0.1-4.1).
   * @property {string} color - RGBA color string, randomly chosen between Nord red and Nord green.
   */
  type Circle = {
    x: number;
    y: number;
    translateX: number;
    translateY: number;
    size: number;
    alpha: number;
    targetAlpha: number;
    dx: number;
    dy: number;
    magnetism: number;
    color: string;
  };

  /**
   * Generates randomized parameters for a new particle circle.
   * Position is uniformly distributed across the canvas, size ranges 3-4px,
   * and color is randomly chosen between Nord red (nord11) and Nord green (nord14).
   *
   * @returns {Circle} A fully initialized circle object ready for drawing.
   */
  function circleParams(): Circle {
    const getRandomColor = (one: string, two: string): string =>
      Math.random() < 0.5 ? one : two;

    const x = Math.floor(Math.random() * canvasSize.w);
    const y = Math.floor(Math.random() * canvasSize.h);
    const size = Math.floor(Math.random() * 2) + 3;
    const alpha = Number.parseFloat((Math.random() * 0.8 + 0.1).toFixed(1));
    const targetAlpha = Number.parseFloat((Math.random() * 0.6 + 0.1).toFixed(1));

    return {
      x, y,
      translateX: 0, translateY: 0,
      size, alpha, targetAlpha,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
      magnetism: 0.1 + Math.random() * 4,
      color: getRandomColor(
        `rgba(191,97,106,${alpha})`,  // Nord red (nord11)
        `rgba(163,190,140,${alpha})`  // Nord green (nord14)
      ),
    };
  }

  /**
   * Draws a single circle onto the canvas at its current position (including translation).
   * When `update` is false (initial draw), the circle is also pushed into the `circles` array.
   *
   * @param {Circle} circle - The circle object to render.
   * @param {boolean} [update=false] - If true, this is a redraw of an existing circle (skip push).
   */
  function drawCircle(circle: Circle, update = false) {
    if (!ctx) return;
    ctx.translate(circle.translateX, circle.translateY);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI);
    ctx.fillStyle = circle.color;
    ctx.fill();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!update) circles.push(circle);
  }

  /** Clears the entire canvas, preparing it for the next animation frame. */
  function clearContext() {
    ctx?.clearRect(0, 0, canvasSize.w, canvasSize.h);
  }

  /** Clears the canvas and creates `quantity` new particles with random parameters. */
  function drawParticles() {
    clearContext();
    for (let i = 0; i < quantity; i++) {
      drawCircle(circleParams());
    }
  }

  /**
   * Resizes the canvas to match its container dimensions (DPR-aware),
   * resets the circles array, and redraws all particles from scratch.
   * Called on mount and on `window.resize`.
   */
  function resizeCanvas() {
    if (!containerEl || !canvasEl || !ctx) return;
    circles = [];
    const rect = containerEl.getBoundingClientRect();
    canvasSize.w = rect.width || window.innerWidth;
    canvasSize.h = rect.height || window.innerHeight;
    canvasEl.width = canvasSize.w * dpr;
    canvasEl.height = canvasSize.h * dpr;
    canvasEl.style.width = `${canvasSize.w}px`;
    canvasEl.style.height = `${canvasSize.h}px`;
    ctx.scale(dpr, dpr);
    drawParticles();
  }

  /**
   * Linearly remaps a value from one range to another, clamped to a minimum of 0.
   * Used to fade particle alpha near canvas edges.
   *
   * @param {number} value - The input value to remap.
   * @param {number} start1 - Start of the source range.
   * @param {number} end1 - End of the source range.
   * @param {number} start2 - Start of the target range.
   * @param {number} end2 - End of the target range.
   * @returns {number} The remapped value, clamped to >= 0.
   */
  function remapValue(value: number, start1: number, end1: number, start2: number, end2: number): number {
    const remapped = ((value - start1) * (end2 - start2)) / (end1 - start1) + start2;
    return remapped > 0 ? remapped : 0;
  }

  /**
   * The main animation loop driven by `requestAnimationFrame`. On each frame it:
   * 1. Clears the canvas.
   * 2. Updates each particle's position (drift + mouse parallax).
   * 3. Fades alpha near canvas edges using `remapValue`.
   * 4. Respawns particles that drift off-screen.
   * 5. Redraws all particles and schedules the next frame.
   */
  function animate() {
    clearContext();
    circles.forEach((circle, i) => {
      const edge = [
        circle.x + circle.translateX - circle.size,
        canvasSize.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        canvasSize.h - circle.y - circle.translateY - circle.size,
      ];
      const closestEdge = Math.min(...edge);
      const remapClosestEdge = parseFloat(remapValue(closestEdge, 0, 20, 0, 1).toFixed(2));

      if (remapClosestEdge > 1) {
        circle.alpha += 0.02;
        if (circle.alpha > circle.targetAlpha) circle.alpha = circle.targetAlpha;
      } else {
        circle.alpha = circle.targetAlpha * remapClosestEdge;
      }

      circle.x += circle.dx;
      circle.y += circle.dy;
      circle.translateX += (mouse.x / (staticity / circle.magnetism) - circle.translateX) / ease;
      circle.translateY += (mouse.y / (staticity / circle.magnetism) - circle.translateY) / ease;

      if (
        circle.x < -circle.size ||
        circle.x > canvasSize.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasSize.h + circle.size
      ) {
        circles.splice(i, 1);
        drawCircle(circleParams());
      } else {
        drawCircle({ ...circle }, true);
      }
    });
    animationId = requestAnimationFrame(animate);
  }

  /**
   * Tracks mouse position relative to the canvas center, updating the `mouse`
   * coordinates used by the parallax calculation in `animate()`. Ignores mouse
   * events that fall outside the canvas bounds.
   *
   * @param {MouseEvent} event - The native mousemove event.
   */
  function onMouseMove(event: MouseEvent) {
    if (!canvasEl) return;
    const rect = canvasEl.getBoundingClientRect();
    const x = event.clientX - rect.left - canvasSize.w / 2;
    const y = event.clientY - rect.top - canvasSize.h / 2;
    const inside = x < canvasSize.w / 2 && x > -canvasSize.w / 2 && y < canvasSize.h / 2 && y > -canvasSize.h / 2;
    if (inside) {
      mouse.x = x;
      mouse.y = y;
    }
  }

  /**
   * Initializes the canvas context, triggers initial particle draw, starts the
   * animation loop, and registers resize/mousemove listeners. Cleanup cancels
   * the animation frame and removes global listeners.
   */
  onMount(() => {
    dpr = window.devicePixelRatio || 1;
    ctx = canvasEl.getContext('2d');
    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationId);
    };
  });
</script>

<div
  class={cn("fixed inset-0 z-[-1] no-print pointer-events-none", className)}
  bind:this={containerEl}
  aria-hidden="true"
>
  <canvas bind:this={canvasEl}></canvas>
</div>
