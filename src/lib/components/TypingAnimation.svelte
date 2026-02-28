<script lang="ts">
  /**
   * @component TypingAnimation
   *
   * A typewriter-style text animation component that progressively reveals text
   * character by character, optionally deleting and re-typing in a continuous loop.
   *
   * The component supports three cursor styles (underscore, pipe, block) with an
   * optional blinking animation. It can be configured to start immediately or defer
   * until the element scrolls into view via IntersectionObserver.
   *
   * The animation reacts to prop changes -- if `text` or speed values change, the
   * animation restarts from scratch with the new values.
   *
   * @example
   * ```svelte
   * <TypingAnimation
   *   text="Hello, world!"
   *   typeSpeed={100}
   *   deleteSpeed={50}
   *   cursorStyle="pipe"
   * />
   * ```
   *
   * @example Non-looping, start on view
   * ```svelte
   * <TypingAnimation
   *   text="Welcome to my portfolio"
   *   loop={false}
   *   startOnView={true}
   *   showCursor={false}
   * />
   * ```
   */
  import { onMount, untrack } from 'svelte';
  import { cn } from "$lib/utils";

  /**
   * Props for the TypingAnimation component.
   *
   * @property {string} text - The full text string to type out character by character.
   * @property {number} [typeSpeed=145] - Delay in ms between each character typed.
   * @property {number} [deleteSpeed=75] - Delay in ms between each character deleted.
   * @property {number} [pauseDelay=1450] - Delay in ms to pause after fully typing before deleting.
   *   Half this value is used as the pause after fully deleting before re-typing.
   * @property {boolean} [loop=true] - Whether to continuously loop the type/delete cycle.
   *   When false, the text is typed once and the animation stops.
   * @property {boolean} [showCursor=true] - Whether to render the trailing cursor character.
   * @property {boolean} [blinkCursor=true] - Whether the cursor blinks with a CSS animation.
   * @property {'underscore' | 'pipe' | 'block'} [cursorStyle='underscore'] - Visual style of
   *   the cursor character: '_' for underscore, '|' for pipe, or a block character.
   * @property {boolean} [startOnView=true] - When true, defers animation start until the
   *   component scrolls into the viewport (via IntersectionObserver with 10% threshold).
   * @property {string} [class=''] - Additional CSS class(es) forwarded to the wrapper `<span>`.
   */
  interface Props {
    text: string;
    typeSpeed?: number;
    deleteSpeed?: number;
    pauseDelay?: number;
    loop?: boolean;
    showCursor?: boolean;
    blinkCursor?: boolean;
    cursorStyle?: 'underscore' | 'pipe' | 'block';
    startOnView?: boolean;
    class?: string;
  }

  let {
    text,
    typeSpeed = 145,
    deleteSpeed = 75,
    pauseDelay = 1450,
    loop = true,
    showCursor = true,
    blinkCursor = true,
    cursorStyle = 'underscore',
    startOnView = true,
    class: className = ''
  }: Props = $props();

  /** The substring of `text` currently visible on screen, progressively built up or torn down. */
  let displayText = $state('');
  /** Whether the animation is currently in the deleting phase (removing characters). */
  let isDeleting = $state(false);
  /** Set to true once the IntersectionObserver fires, unlocking the animation when `startOnView` is enabled. */
  let hasIntersected = $state(false);
  /** Derived flag: true when the animation is allowed to run (either `startOnView` is off, or the element has intersected). */
  let isStarted = $derived(!startOnView || hasIntersected);
  /** Reference to the wrapper `<span>` element, used by the IntersectionObserver. */
  let containerEl: HTMLSpanElement;

  /** The resolved cursor character based on `cursorStyle` -- '_', '|', or block character. */
  let cursorChar = $derived(cursorStyle === 'underscore' ? '_' : cursorStyle === 'pipe' ? '|' : '█');

  /**
   * Core animation effect. Reads reactive props (`text`, speeds, `loop`) outside
   * `untrack()` so Svelte re-runs the entire effect whenever any of them change,
   * effectively restarting the animation from scratch with fresh values.
   *
   * Inside `untrack()`, a recursive `tick()` function drives the type/delete loop
   * using `setTimeout`. The cleanup function returned by the effect clears any
   * pending timeout to prevent leaked timers.
   */
  $effect(() => {
    // Track dependencies to dynamically restart animation on prop change
    // Svelte-Intlayer passes proxy objects that need string coercion before slicing
    const currentText = String(text ?? '');
    const currentTypeSpeed = typeSpeed;
    const currentDeleteSpeed = deleteSpeed;
    const currentPauseDelay = pauseDelay;
    const currentLoop = loop;

    let timeoutId: ReturnType<typeof setTimeout>;

    untrack(() => {
      clearTimeout(timeoutId);
      displayText = '';
      isDeleting = false;

      function tick() {
        if (!isStarted) {
          timeoutId = setTimeout(tick, 100);
          return;
        }

        if (!isDeleting) {
          // Typing
          if (displayText.length < currentText.length) {
            displayText = currentText.slice(0, displayText.length + 1);
            timeoutId = setTimeout(tick, currentTypeSpeed);
          } else {
            // Pause at end
            if (currentLoop) {
              timeoutId = setTimeout(() => {
                isDeleting = true;
                tick();
              }, currentPauseDelay);
            }
          }
        } else {
          // Deleting
          if (displayText.length > 0) {
            displayText = currentText.slice(0, displayText.length - 1);
            timeoutId = setTimeout(tick, currentDeleteSpeed);
          } else {
            isDeleting = false;
            timeoutId = setTimeout(tick, currentPauseDelay / 2);
          }
        }
      }

      tick();
    });

    return () => {
      clearTimeout(timeoutId);
    };
  });

  /**
   * Sets up an IntersectionObserver on mount when `startOnView` is true.
   * Once the wrapper element is at least 10% visible in the viewport,
   * `hasIntersected` is set to true (unlocking the animation) and the
   * observer disconnects itself. Cleanup disconnects on component destroy.
   */
  onMount(() => {
    let observer: IntersectionObserver | undefined;

    if (startOnView && containerEl) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries[0]?.isIntersecting) {
            hasIntersected = true;
            observer?.disconnect();
          }
        },
        { threshold: 0.1 }
      );
      observer.observe(containerEl);
    }

    return () => {
      observer?.disconnect();
    };
  });
</script>

<span class={cn("leading-20 tracking-[-0.02em]", className)} bind:this={containerEl}
  >{displayText}{#if showCursor}<span
    class={cn("cursor inline-block")}
    class:blink={cn(blinkCursor)}>{cursorChar}</span>{/if}</span>

<style>
  .cursor {
    display: inline;
  }
  .blink {
    animation: blink-cursor 1.2s step-end infinite;
  }
  @keyframes blink-cursor {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }
</style>
