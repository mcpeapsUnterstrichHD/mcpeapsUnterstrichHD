<template>
  <component :is="as" :class="cn('leading-[5rem] tracking-[-0.02em]', className)">
    {{ displayedText }}
    <span v-if="shouldShowCursor" :class="cn('inline-block', blinkCursor && 'animate-blink-cursor')">
      {{ cursorChar }}
    </span>
  </component>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { cn } from '@/lib/utils'

const props = withDefaults(defineProps<{
  words?: string[]
  className?: string
  duration?: number
  typeSpeed?: number
  deleteSpeed?: number
  delay?: number
  pauseDelay?: number
  loop?: boolean
  as?: string
  startOnView?: boolean
  showCursor?: boolean
  blinkCursor?: boolean
  cursorStyle?: "line" | "block" | "underscore"
}>(), {
  duration: 100,
  delay: 0,
  pauseDelay: 1000,
  loop: false,
  as: 'span',
  startOnView: true,
  showCursor: true,
  blinkCursor: true,
  cursorStyle: 'line',
  words: () => []
})

// Access default slot content if words are not provided
const slots = useSlots()
const slotChildren = slots.default ? slots.default()[0]?.children : ''
// If slot content is a string, use it
const initialText = typeof slotChildren === 'string' ? slotChildren : ''

const displayedText = ref("")
const currentWordIndex = ref(0)
const currentCharIndex = ref(0)
const phase = ref<"typing" | "pause" | "deleting">("typing")
const observer = ref<IntersectionObserver | null>(null)
const elementRef = ref<HTMLElement | null>(null) // In Vue we might need to wrap in a div if using intersection observer on component root
const isStarted = ref(!props.startOnView)

const wordsToAnimate = computed(() => {
  if (props.words && props.words.length > 0) return props.words
  return initialText ? [initialText] : []
})

const hasMultipleWords = computed(() => wordsToAnimate.value.length > 1)
const typingSpeed = computed(() => props.typeSpeed || props.duration)
const deletingSpeed = computed(() => props.deleteSpeed || typingSpeed.value / 2)

const cursorChar = computed(() => {
  switch (props.cursorStyle) {
    case "block": return "▌"
    case "underscore": return "_"
    case "line":
    default: return "|"
  }
})

let timeoutId: NodeJS.Timeout

const animate = () => {
  if (wordsToAnimate.value.length === 0) return

  const currentWord = wordsToAnimate.value[currentWordIndex.value] || ""
  const graphemes = Array.from(currentWord)

  let timeoutDelay = 0

  if (props.delay > 0 && displayedText.value === "") {
    timeoutDelay = props.delay
  } else if (phase.value === "typing") {
    timeoutDelay = typingSpeed.value
  } else if (phase.value === "deleting") {
    timeoutDelay = deletingSpeed.value
  } else {
    timeoutDelay = props.pauseDelay
  }

  timeoutId = setTimeout(() => {
    switch (phase.value) {
      case "typing":
        if (currentCharIndex.value < graphemes.length) {
          displayedText.value = graphemes.slice(0, currentCharIndex.value + 1).join("")
          currentCharIndex.value++
          animate()
        } else {
          if (hasMultipleWords.value || props.loop) {
            const isLastWord = currentWordIndex.value === wordsToAnimate.value.length - 1
            if (!isLastWord || props.loop) {
              phase.value = "pause"
              animate()
            }
          }
        }
        break

      case "pause":
        phase.value = "deleting"
        animate()
        break

      case "deleting":
        if (currentCharIndex.value > 0) {
          displayedText.value = graphemes.slice(0, currentCharIndex.value - 1).join("")
          currentCharIndex.value--
          animate()
        } else {
          const nextIndex = (currentWordIndex.value + 1) % wordsToAnimate.value.length
          currentWordIndex.value = nextIndex
          phase.value = "typing"
          animate()
        }
        break
    }
  }, timeoutDelay)
}

const shouldShowCursor = computed(() => {
  const currentWord = wordsToAnimate.value[currentWordIndex.value] || ""
  const graphemes = Array.from(currentWord)
  const isComplete = !props.loop &&
                     currentWordIndex.value === wordsToAnimate.value.length - 1 &&
                     currentCharIndex.value >= graphemes.length &&
                     phase.value !== "deleting"

  return props.showCursor &&
         !isComplete &&
         (hasMultipleWords.value || props.loop || currentCharIndex.value < graphemes.length)
})

onMounted(() => {
  if (props.startOnView) {
    // Simple intersection observer logic (can be improved)
    // For now we just start immediately as 'startOnView' implementation in Vue usually requires template ref access
    // We will auto-start specifically here to simplify.
    // Ideally use useIntersectionObserver from vueuse if available.
    isStarted.value = true
    animate()
  } else {
    animate()
  }
})

onUnmounted(() => {
  clearTimeout(timeoutId)
})

</script>

<style scoped>
@keyframes blink-cursor {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
.animate-blink-cursor {
  animation: blink-cursor 1s infinite;
}
</style>
