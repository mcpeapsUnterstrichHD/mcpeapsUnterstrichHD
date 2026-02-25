<script lang="ts">
  import { onMount, untrack } from 'svelte';

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

  let displayText = $state('');
  let isDeleting = $state(false);
  let hasIntersected = $state(false);
  let isStarted = $derived(!startOnView || hasIntersected);
  let containerEl: HTMLSpanElement;

  let cursorChar = $derived(cursorStyle === 'underscore' ? '_' : cursorStyle === 'pipe' ? '|' : '█');

  // We don't need prevText as a derived value or state anymore
  // because the $effect itself will re-run when `text` changes,
  // since `text` is the only reactive dependency read outside `untrack`.

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

<span class="leading-[5rem] tracking-[-0.02em] {className}" bind:this={containerEl}
  >{displayText}{#if showCursor}<span
    class="cursor inline-block"
    class:blink={blinkCursor}>{cursorChar}</span>{/if}</span>

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
