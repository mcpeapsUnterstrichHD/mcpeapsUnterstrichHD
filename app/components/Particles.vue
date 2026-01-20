<template>
  <div
    :class="['fixed inset-0 z-0 no-print animate-fade-in pointer-events-none', className]"
    ref="canvasContainerRef"
    aria-hidden="true"
  >
    <canvas ref="canvasRef" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useMousePosition } from '@/composables/useMousePosition'

const props = withDefaults(defineProps<{
  className?: string
  quantity?: number
  staticity?: number
  ease?: number
  refresh?: boolean
}>(), {
  className: '',
  quantity: 120,
  staticity: 50,
  ease: 20,
  refresh: true
})

const canvasRef = ref<HTMLCanvasElement | null>(null)
const canvasContainerRef = ref<HTMLDivElement | null>(null)
const context = ref<CanvasRenderingContext2D | null>(null)
const circles = ref<any[]>([])
const { x: mouseX, y: mouseY } = useMousePosition()
const mouse = ref<{ x: number; y: number }>({ x: 0, y: 0 })
const canvasSize = ref<{ w: number; h: number }>({ w: 0, h: 0 })
// Ensure we handle SSR or non-window environments gracefully
const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1

const onMouseMove = () => {
  if (canvasRef.value) {
    const rect = canvasRef.value.getBoundingClientRect()
    const { w, h } = canvasSize.value
    const x = mouseX.value - rect.left - w / 2
    const y = mouseY.value - rect.top - h / 2
    const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2
    if (inside) {
      mouse.value.x = x
      mouse.value.y = y
    }
  }
}

// Watch mouse movement
watch([mouseX, mouseY], () => {
  onMouseMove()
})

watch(() => props.refresh, () => {
  initCanvas()
})

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
}

const circleParams = (): Circle => {
  const getRandomColor = (one: string, two: string): string => {
    const randomValue = Math.floor(Math.random() * 2)
    return randomValue === 0 ? one : two
  }

  const x = Math.floor(Math.random() * canvasSize.value.w)
  const y = Math.floor(Math.random() * canvasSize.value.h)
  const translateX = 0
  const translateY = 0
  const size = Math.floor(Math.random() * 2) + 3
  const alpha = Number.parseFloat((Math.random() * 0.8 + 0.1).toFixed(1))
  const targetAlpha = Number.parseFloat((Math.random() * 0.6 + 0.1).toFixed(1))
  const dx = (Math.random() - 0.5) * 0.2
  const dy = (Math.random() - 0.5) * 0.2
  const magnetism = 0.1 + Math.random() * 4
  const color = getRandomColor(
    `rgba(191,97,106,${alpha})`, // Nord red (nord11)
    `rgba(163,190,140,${alpha})` // Nord green (nord14)
  )
  return {
    x,
    y,
    translateX,
    size,
    alpha,
    targetAlpha,
    dx,
    dy,
    magnetism,
    translateY,
    color,
  }
}

const drawCircle = (circle: Circle, update = false) => {
  if (context.value) {
    const { x, y, translateX, translateY, size, color } = circle
    context.value.translate(translateX, translateY)
    context.value.beginPath()
    context.value.arc(x, y, size, 0, 2 * Math.PI)
    context.value.fillStyle = color
    context.value.fill()
    context.value.setTransform(dpr, 0, 0, dpr, 0, 0)

    if (!update) {
      circles.value.push(circle)
    }
  }
}

const clearContext = () => {
  if (context.value) {
    context.value.clearRect(
      0,
      0,
      canvasSize.value.w,
      canvasSize.value.h,
    )
  }
}

const drawParticles = () => {
  clearContext()
  const particleCount = props.quantity
  for (let i = 0; i < particleCount; i++) {
    const circle = circleParams()
    drawCircle(circle)
  }
}

const remapValue = (
  value: number,
  start1: number,
  end1: number,
  start2: number,
  end2: number,
): number => {
  const remapped =
    ((value - start1) * (end2 - start2)) / (end1 - start1) + start2
  return remapped > 0 ? remapped : 0
}

const animate = () => {
  clearContext()
  circles.value.forEach((circle: Circle, i: number) => {
    // Handle the alpha value
    const edge = [
      circle.x + circle.translateX - circle.size,
      canvasSize.value.w - circle.x - circle.translateX - circle.size,
      circle.y + circle.translateY - circle.size,
      canvasSize.value.h - circle.y - circle.translateY - circle.size,
    ]
    const closestEdge = edge.reduce((a, b) => Math.min(a, b))
    const remapClosestEdge = parseFloat(
      remapValue(closestEdge, 0, 20, 0, 1).toFixed(2),
    )
    if (remapClosestEdge > 1) {
      circle.alpha += 0.02
      if (circle.alpha > circle.targetAlpha) {
        circle.alpha = circle.targetAlpha
      }
    } else {
      circle.alpha = circle.targetAlpha * remapClosestEdge
    }
    circle.x += circle.dx
    circle.y += circle.dy
    circle.translateX +=
      (mouse.value.x / (props.staticity / circle.magnetism) - circle.translateX) /
      props.ease
    circle.translateY +=
      (mouse.value.y / (props.staticity / circle.magnetism) - circle.translateY) /
      props.ease

    if (
      circle.x < -circle.size ||
      circle.x > canvasSize.value.w + circle.size ||
      circle.y < -circle.size ||
      circle.y > canvasSize.value.h + circle.size
    ) {
      circles.value.splice(i, 1)
      const newCircle = circleParams()
      drawCircle(newCircle)
    } else {
      drawCircle(
        {
          ...circle,
          x: circle.x,
          y: circle.y,
          translateX: circle.translateX,
          translateY: circle.translateY,
          alpha: circle.alpha,
        },
        true,
      )
    }
  })
  window.requestAnimationFrame(animate)
}

const resizeCanvas = () => {
  if (canvasContainerRef.value && canvasRef.value && context.value) {
    circles.value.length = 0
    const containerRect = canvasContainerRef.value.getBoundingClientRect()
    const width = containerRect.width || window.innerWidth
    const height = containerRect.height || window.innerHeight
    canvasSize.value.w = width
    canvasSize.value.h = height
    canvasRef.value.width = width * dpr
    canvasRef.value.height = height * dpr
    canvasRef.value.style.width = `${width}px`
    canvasRef.value.style.height = `${height}px`
    context.value.scale(dpr, dpr)

    drawParticles()
  }
}

const initCanvas = () => {
  resizeCanvas()
  drawParticles()
}

onMounted(() => {
  if (canvasRef.value) {
    context.value = canvasRef.value.getContext("2d")
  }
  initCanvas()
  animate()
  window.addEventListener("resize", resizeCanvas)
})

onUnmounted(() => {
  window.removeEventListener("resize", resizeCanvas)
})

</script>
