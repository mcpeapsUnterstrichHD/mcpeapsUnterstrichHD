<script lang="ts">
  import type { Snippet } from 'svelte';

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

  let gradientColors = $derived([...colors, colors[0]].join(', '));
  let bgSize = $derived(`200% auto`);
  let duration = $derived(`${10 / speed}s`);
</script>

<span class="relative inline-block {className}">
  <!-- Invisible copy for width measurement -->
  <span class="invisible">{@render children()}</span>
  <!-- Aurora gradient overlay -->
  <span
    class="aurora-text animate-aurora absolute inset-0 bg-clip-text text-transparent"
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
