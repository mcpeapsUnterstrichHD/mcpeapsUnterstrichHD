<template>
  <SidebarProvider
    :style="{
      '--sidebar-width': 'var(--appsidebar-width)',
      '--sidebar-width-mobile': 'var(--appsidebar-width-mobile)',
    }"
    v-auto-animate
  >
    <AppSidebar variant="floating" v-auto-animate />

    <Particles :quantity="400" :refresh="true" v-auto-animate/>

    <!-- Main content container - offset from fixed sidebar on desktop -->
    <div
      class="relative z-10 flex flex-col min-h-svh flex-1 md:ml-[var(--appsidebar-width)] transition-[margin-left] duration-200 ease-linear"
      v-auto-animate
    >
      <Header />

      <!-- Main content area - flex-1 to fill available space -->
      <main class="flex-1 w-full max-w-full">
        <slot />
      </main>

      <!-- Slot for child layout actions (e.g., CV buttons) -->
      <slot name="actions" />

      <Toaster class="rounded-sm bg-background/80 backdrop-blur-sm shadow-lg print:hidden no-print" />
      <Footer />
    </div>

    <ClickSpark
       :sparkColor="nord6"
       :sparkSize="10"
       :sparkRadius="15"
       :sparkCount="8"
       :duration="400"
       class="fixed inset-0 pointer-events-none z-50"
       v-auto-animate
    />
  </SidebarProvider>
</template>

<script setup lang="ts">
import { SidebarProvider } from '@/components/ui/sidebar'
import AppSidebar from '@/components/AppSidebar.vue'
import Particles from '@/components/Particles.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ClickSpark from '@/components/ClickSpark.vue'
import { Toaster } from '@/components/ui/sonner'
import { nord6 } from '@/lib/NordColors'
import { onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { toast } from 'vue-sonner'

const { t } = useI18n()
const router = useRouter()
const localePath = useLocalePath()

let currentIndex = 0
let intervalId: ReturnType<typeof setInterval> | null = null

// Recommendation toasts - rotate every 10 minutes
onMounted(() => {
  const recommendations = [
    {
      title: t('Recommendation.projects.title'),
      description: t('Recommendation.projects.description'),
      action: {
        label: t('Recommendation.projects.action.label'),
        onClick: () => router.push(localePath('/projects'))
      }
    },
    {
      title: t('Recommendation.aboutme.title'),
      description: t('Recommendation.aboutme.description'),
      action: {
        label: t('Recommendation.aboutme.action.label'),
        onClick: () => router.push(localePath('/aboutme'))
      }
    },
    {
      title: t('Recommendation.cv.title'),
      description: t('Recommendation.cv.description'),
      action: {
        label: t('Recommendation.cv.action.label'),
        onClick: () => router.push(localePath('/cv'))
      }
    },
    {
      title: t('Recommendation.linkhub.title'),
      description: t('Recommendation.linkhub.description'),
      action: {
        label: t('Recommendation.linkhub.action.label'),
        onClick: () => router.push(localePath('/linkhub'))
      }
    },
    {
      title: t('Recommendation.github.title'),
      description: t('Recommendation.github.description'),
      action: {
        label: t('Recommendation.github.action.label'),
        onClick: () => globalThis.window.open('https://github.com/mcpeapsUnterstrichHD', '_blank')
      }
    },
    {
      title: t('Recommendation.twitter.title'),
      description: t('Recommendation.twitter.description'),
      action: {
        label: t('Recommendation.twitter.action.label'),
        onClick: () => globalThis.window.open('https://x.com/mcpeaps_HD', '_blank')
      }
    },
    {
      title: t('Recommendation.instagram.title'),
      description: t('Recommendation.instagram.description'),
      action: {
        label: t('Recommendation.instagram.action.label'),
        onClick: () => globalThis.window.open('https://instagram.com/mcpeaps_hd', '_blank')
      }
    },
    {
      title: t('Recommendation.tiktok.title'),
      description: t('Recommendation.tiktok.description'),
      action: {
        label: t('Recommendation.tiktok.action.label'),
        onClick: () => globalThis.window.open('https://tiktok.com/@mcpeaps_hd', '_blank')
      }
    },
    {
      title: t('Recommendation.threads.title'),
      description: t('Recommendation.threads.description'),
      action: {
        label: t('Recommendation.threads.action.label'),
        onClick: () => globalThis.window.open('https://threads.com/@mcpeaps_hd', '_blank')
      }
    },
    {
      title: t('Recommendation.bluesky.title'),
      description: t('Recommendation.bluesky.description'),
      action: {
        label: t('Recommendation.bluesky.action.label'),
        onClick: () => globalThis.window.open('https://bsky.mcpeapsunterstrichhd.dev', '_blank')
      }
    }
  ]

  // Show first recommendation immediately
  const showRecommendation = () => {
    const { title, description, action } = recommendations[currentIndex]
    toast(title, { description, action })
  }
  showRecommendation()

  // Rotate every 10 minutes
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % recommendations.length
    showRecommendation()
  }, 10 * 60 * 1000)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
})
</script>

<style>
  /* Define sidebar widths if not already in global css */
  :root,
  .light,
  .dark {
    --appsidebar-width: 16rem;
    --appsidebar-width-mobile: 18rem;
  }
  </style>
