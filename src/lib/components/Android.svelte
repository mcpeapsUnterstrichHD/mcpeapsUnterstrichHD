<script lang="ts">
  /**
   * @component Android
   *
   * An Android device mockup rendered with SVG. The frame features a realistic
   * device body with rounded corners, two side buttons (volume rocker and power),
   * and a centered front-facing camera punch-hole at the top of the screen.
   *
   * The component uses a layered rendering approach:
   * 1. Background SVG layer: phone frame, screen area, image/video content.
   * 2. Children layer: arbitrary Svelte content positioned inside the screen.
   * 3. Foreground SVG layer: camera circles rendered on top of everything.
   *
   * Supports light and dark mode via Tailwind `dark:` class variants on SVG fills.
   *
   * Uses Svelte 4 syntax (`export let` props, `$:` reactive statements).
   *
   * @see {@link Safari.svelte} for browser mockup
   * @see {@link Iphone.svelte} for iOS device mockup
   *
   * @example
   * ```svelte
   * <Android src="/android-screenshot.png" />
   * ```
   *
   * @example With video
   * ```svelte
   * <Android videoSrc="/android-demo.mp4" className="max-w-xs" />
   * ```
   *
   * @example With custom children
   * ```svelte
   * <Android>
   *   <div class="flex items-center justify-center h-full bg-gray-100">
   *     Custom app content
   *   </div>
   * </Android>
   * ```
   */
  import type { Snippet } from "svelte";
  import type { SVGAttributes } from "svelte/elements";
  import { cn } from "$lib/utils";

  /**

  /** Total SVG viewBox width of the Android frame. */
  const ANDROID_WIDTH = 433;
  /** Total SVG viewBox height of the Android frame. */
  const ANDROID_HEIGHT = 882;
  /** X offset of the screen content area within the SVG viewBox. */
  const SCREEN_X = 9;
  /** Y offset of the screen content area within the SVG viewBox. */
  const SCREEN_Y = 14;
  /** Width of the screen content area in SVG units. */
  const SCREEN_WIDTH = 360;
  /** Height of the screen content area in SVG units. */
  const SCREEN_HEIGHT = 800;

  /** Screen X offset as a percentage of device width, for absolute positioning. */
  const LEFT_PCT = (SCREEN_X / ANDROID_WIDTH) * 100;
  /** Screen Y offset as a percentage of device height. */
  const TOP_PCT = (SCREEN_Y / ANDROID_HEIGHT) * 100;
  /** Screen width as a percentage of device width. */
  const WIDTH_PCT = (SCREEN_WIDTH / ANDROID_WIDTH) * 100;
  /** Screen height as a percentage of device height. */
  const HEIGHT_PCT = (SCREEN_HEIGHT / ANDROID_HEIGHT) * 100;

  /**
   * @prop {number} [width=433] - SVG viewBox width (defaults to ANDROID_WIDTH).
   * @prop {number} [height=882] - SVG viewBox height (defaults to ANDROID_HEIGHT).
   * @prop {string} [src=''] - Source URL for a static image rendered via SVG `<image>`.
   * @prop {string} [videoSrc=''] - Source URL for a video rendered via SVG `<foreignObject>`.
   *   Takes priority over `src` visually (both can technically render simultaneously).
   * @prop {string} [className=''] - Additional CSS class(es) on the wrapper div.
   * @prop {Snippet} [children] - Optional Svelte snippet rendered inside the screen area.
   */
  export let width: number = ANDROID_WIDTH;
  export let height: number = ANDROID_HEIGHT;
  export let src: string = "";
  export let videoSrc: string = "";
  export let className: string = "";
  export let children: Snippet | undefined = undefined;

  /** Whether a video source was provided. */
  $: hasVideo = !!videoSrc;
</script>

<div
  class={cn("relative inline-block w-full align-middle leading-none", className)}
  style="aspect-ratio: {width}/{height};"
>
  <!-- Background layer - phone frame and screen area -->
  <svg
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class={cn("absolute inset-0 w-full h-full z-0 pointer-events-none")}
  >
    <!-- Side buttons -->
    <path
      d="M376 153H378C379.105 153 380 153.895 380 155V249C380 250.105 379.105 251 378 251H376V153Z"
      class={cn("fill-[#E5E5E5] dark:fill-[#404040]")}
    />
    <path
      d="M376 301H378C379.105 301 380 301.895 380 303V351C380 352.105 379.105 353 378 353H376V301Z"
      class={cn("fill-[#E5E5E5] dark:fill-[#404040]")}
    />
    <!-- Phone body -->
    <path
      d="M0 42C0 18.8041 18.804 0 42 0H336C359.196 0 378 18.804 378 42V788C378 811.196 359.196 830 336 830H42C18.804 830 0 811.196 0 788V42Z"
      class={cn("fill-[#E5E5E5] dark:fill-[#404040]")}
    />
    <path
      d="M2 43C2 22.0132 19.0132 5 40 5H338C358.987 5 376 22.0132 376 43V787C376 807.987 358.987 825 338 825H40C19.0132 825 2 807.987 2 787V43Z"
      class={cn("fill-white dark:fill-[#262626]")}
    />
    <!-- Screen background -->
    <g clip-path="url(#clip0_514_20855)">
      <path
        d="M9.25 48C9.25 29.3604 24.3604 14.25 43 14.25H335C353.64 14.25 368.75 29.3604 368.75 48V780C368.75 798.64 353.64 813.75 335 813.75H43C24.3604 813.75 9.25 798.64 9.25 780V48Z"
        class={cn("fill-[#E5E5E5] stroke-[#E5E5E5] stroke-[0.5] dark:fill-[#404040] dark:stroke-[#404040]")}
      />
    </g>
    {#if src}
      <image
        href={src}
        width="360"
        height="800"
        class={cn("size-full object-cover")}
        preserveAspectRatio="xMidYMid slice"
        clip-path="url(#clip0_514_20855)"
      />
    {/if}
    {#if videoSrc}
      <foreignObject
        width="380"
        height="820"
        clip-path="url(#clip0_514_20855)"
        preserveAspectRatio="xMidYMid slice"
      >
        <video
          class={cn("size-full object-cover")}
          src={videoSrc}
          autoplay
          loop
          muted
          playsinline
        ></video>
      </foreignObject>
    {/if}
    <defs>
      <clipPath id="clip0_514_20855">
        <rect
          width="360"
          height="800"
          rx="33"
          ry="25"
          class={cn("fill-white dark:fill-[#262626]")}
          transform="translate(9 14)"
        />
      </clipPath>
    </defs>
  </svg>

  <!-- Children layer - content inside screen -->
  {#if children}
    <div
      class={cn("pointer-events-auto absolute z-10 overflow-hidden")}
      style="left: {LEFT_PCT}%; top: {TOP_PCT}%; width: {WIDTH_PCT}%; height: {HEIGHT_PCT}%; border-radius: 33px;"
    >
      {@render children()}
    </div>
  {/if}

  <!-- Foreground layer - camera on top -->
  <svg
    viewBox={`0 0 ${width} ${height}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class={cn("absolute inset-0 w-full h-full z-20 pointer-events-none")}
  >
    <circle
      cx="189"
      cy="28"
      r="9"
      class={cn("fill-white dark:fill-[#262626]")}
    />
    <circle
      cx="189"
      cy="28"
      r="4"
      class={cn("fill-[#E5E5E5] dark:fill-[#404040]")}
    />
  </svg>
</div>
