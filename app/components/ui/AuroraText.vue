<template>
  <span :class="['relative inline-block', className]">
    <span class="sr-only"><slot /></span>
    <span
      class="animate-aurora relative bg-[length:200%_auto] bg-clip-text text-transparent"
      :style="gradientStyle"
      aria-hidden="true"
    >
      <slot />
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = withDefaults(defineProps<{
  className?: string
  colors?: string[]
  speed?: number
}>(), {
  className: '',
  colors: () => ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
  speed: 1
})

const gradientStyle = computed(() => {
  return {
    backgroundImage: `linear-gradient(135deg, ${props.colors.join(", ")}, ${props.colors[0]})`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animationDuration: `${10 / props.speed}s`,
  }
})
</script>

<style scoped>
@keyframes aurora {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.animate-aurora {
  animation: aurora linear infinite;
}
</style>
