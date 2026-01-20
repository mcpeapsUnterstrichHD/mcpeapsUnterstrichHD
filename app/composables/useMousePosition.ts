import { ref, onMounted, onUnmounted } from 'vue'

export function useMousePosition() {
  const x = ref(0)
  const y = ref(0)

  const updateMouse = (e: MouseEvent) => {
    x.value = e.clientX
    y.value = e.clientY
  }

  onMounted(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', updateMouse)
    }
  })

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('mousemove', updateMouse)
    }
  })

  return { x, y }
}
