<script lang="ts">
  /**
   * @component AuroraText
   *
   * Renders inline text with an animated aurora gradient effect. The gradient
   * smoothly shifts its position over time using a CSS keyframe animation,
   * creating a shimmering, colorful text appearance.
   *
   * Internally, the component renders the children twice:
   * 1. An invisible copy that establishes the element's width/height.
   * 2. An absolutely-positioned overlay with `background-clip: text` and
   *    `text-fill-color: transparent` to apply the gradient as a text fill.
   *
   * The overlay is marked `aria-hidden="true"` so screen readers only read the
   * invisible (but semantically present) first copy.
   *
   * @example
   * ```svelte
   * <AuroraText colors={['#FF0080', '#7928CA', '#0070F3']} speed={1.5}>
   *   Hello, World!
   * </AuroraText>
   * ```
   *
   * @example With custom class and slower speed
   * ```svelte
   * <AuroraText class={cn("text-4xl font-bold" speed={0.5}>
   *   Portfolio
   * </AuroraText>
   * ```
   */
  import type { Snippet } from 'svelte';
  import { cn } from '$lib/utils';

  /**
   * Props for the AuroraText component.
   *
   * @property {string} [class=''] - Additional CSS class(es) forwarded to the wrapper `<span>`.
   * @property {string[]} [colors=['#FF0080','#7928CA','#0070F3','#38bdf8']] - Array of CSS
   *   color values used to build the animated linear gradient. The first color is appended
   *   again at the end to create a seamless loop.
   * @property {number} [speed=1] - Animation speed multiplier. Higher values produce a faster
   *   gradient shift (duration = 10 / speed seconds).
   * @property {Snippet} children - The text content to render with the aurora effect.
   */
  interface Props {
    class?: string;
    colors?: string[];
    speed?: number;
    children: Snippet;
  }

  let {
    class: className = '',
    colors = ['#FF0080', '#7928CA', '#0070F3', '#38bdf8'],
    speed = 1,
    children
  }: Props = $props();

  /** Comma-separated color list for the CSS gradient, with the first color repeated at the end for seamless looping. */
  let gradientColors = $derived([...colors, colors[0]].join(', '));
  /** Background size for the gradient (200% width to enable horizontal shift animation). */
  let bgSize = $derived(`200% auto`);
  /** CSS animation duration string, inversely proportional to `speed`. */
  let duration = $derived(`${10 / speed}s`);
</script>

<span class={cn("relative inline-block", className)}>
  <!-- Invisible copy for width measurement -->
  <span class={cn("invisible")}>{@render children()}</span>
  <!-- Aurora gradient overlay -->
  <span
    class={cn("aurora-text animate-aurora absolute inset-0 bg-clip-text text-transparent")}
    style="
      --aurora-gradient: {gradientColors};
      --aurora-bg-size: {bgSize};
      --aurora-speed: {duration};
    "
    aria-hidden="true"
  >
    {@render children()}
  </span>
</span>

<style>
  .aurora-text {
    background-image: linear-gradient(135deg, var(--aurora-gradient));
    background-size: var(--aurora-bg-size);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: aurora var(--aurora-speed) ease-in-out infinite alternate;
  }

  @keyframes aurora {
    0% { background-position: 50% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 50% 50%; }
  }
</style>
