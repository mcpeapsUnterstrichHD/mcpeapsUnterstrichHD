<template>
  <div class="relative w-full h-full" @click="handleClick">
    <canvas ref="canvasRef" class="absolute inset-0 pointer-events-none" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

const props = withDefaults(defineProps<{
  sparkColor?: string
  sparkSize?: number
  sparkRadius?: number
  sparkCount?: number
  duration?: number
  easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'
  extraScale?: number
}>(), {
  sparkColor: '#fff',
  sparkSize: 10,
  sparkRadius: 15,
  sparkCount: 8,
  duration: 400,
  easing: 'ease-out',
  extraScale: 1.0
})

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

const canvasRef = ref<HTMLCanvasElement | null>(null)
const sparks = ref<Spark[]>([])
const startTime = ref<number | null>(null)
const animationId = ref<number | null>(null)

const easeFunc = (t: number) => {
  switch (props.easing) {
    case 'linear':
      return t
    case 'ease-in':
      return t * t
    case 'ease-in-out':
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
    default:
      return t * (2 - t)
  }
}

const resizeCanvas = () => {
  const canvas = canvasRef.value
  if (!canvas) return
  const parent = canvas.parentElement
  if (!parent) return

  const { width, height } = parent.getBoundingClientRect()
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width
    canvas.height = height
  }
}

const draw = (timestamp: number) => {
  if (!startTime.value) {
    startTime.value = timestamp
  }
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  sparks.value = sparks.value.filter((spark) => {
    const elapsed = timestamp - spark.startTime
    if (elapsed >= props.duration) {
      return false
    }

    const progress = elapsed / props.duration
    const eased = easeFunc(progress)

    const distance = eased * props.sparkRadius * props.extraScale
    const lineLength = props.sparkSize * (1 - eased)

    const x1 = spark.x + distance * Math.cos(spark.angle)
    const y1 = spark.y + distance * Math.sin(spark.angle)
    const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle)
    const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle)

    ctx.strokeStyle = props.sparkColor
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()

    return true
  })

  animationId.value = requestAnimationFrame(draw)
}

const handleClick = (e: MouseEvent) => {
  const canvas = canvasRef.value
  if (!canvas) return
  const rect = canvas.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const now = performance.now()
  const newSparks: Spark[] = Array.from({ length: props.sparkCount }, (_, i) => ({
    x,
    y,
    angle: (2 * Math.PI * i) / props.sparkCount,
    startTime: now
  }))

  sparks.value.push(...newSparks)
}

let ro: ResizeObserver

onMounted(() => {
  const canvas = canvasRef.value
  if (canvas && canvas.parentElement) {
    ro = new ResizeObserver(() => {
       resizeCanvas()
    })
    ro.observe(canvas.parentElement)
    resizeCanvas()
  }
  animationId.value = requestAnimationFrame(draw)
})

onUnmounted(() => {
  if (animationId.value) {
    cancelAnimationFrame(animationId.value)
  }
  if (ro) {
    ro.disconnect()
  }
})

</script>
