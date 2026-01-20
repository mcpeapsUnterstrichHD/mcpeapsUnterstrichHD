<template>
  <div class="flex flex-col gap-8 px-4 py-8 mx-auto min-h-[80vh]">
    <!-- Hero Section -->
    <section class="text-center space-y-4">
      <AuroraText
        className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold"
        :colors="['#C16069', '#A2BF8A', '#C16069', '#A2BF8A']"
        :speed="3"
      >
        <TypingAnimation
            :typeSpeed="145"
            :pauseDelay="1450"
            :deleteSpeed="75"
            showCursor
            blinkCursor
            loop
            startOnView
            cursorStyle="underscore"
        >
          {{ t("Sites.contact") }}
        </TypingAnimation>
      </AuroraText>

      <p class="text-muted-foreground text-lg max-w-xl mx-auto flex items-center justify-center gap-2">
        <MessageSquare class="w-5 h-5" />
        <TypingAnimation
            :typeSpeed="145"
            :pauseDelay="1450"
            :deleteSpeed="75"
            showCursor
            blinkCursor
            loop
            startOnView
            cursorStyle="underscore"
        >
          {{ t("Contact.description") }}
        </TypingAnimation>
      </p>
    </section>

    <!-- Calendar Card -->
    <Card class="bg-card/50 backdrop-blur-sm w-full">
      <CardHeader class="text-center pb-4">
        <CardTitle class="flex items-center justify-center gap-2 text-2xl">
          <Calendar class="w-6 h-6 text-primary" />
          {{ t("Contact.bookMeeting") }}
        </CardTitle>
        <CardDescription class="flex items-center justify-center gap-2">
          <Mail class="w-4 h-4" />
          {{ t("Contact.calDescription") }}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <CalendarEmbed />
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, defineAsyncComponent, defineComponent, h } from 'vue'
import { useI18n } from 'vue-i18n'
import { Calendar, Mail, MessageSquare } from 'lucide-vue-next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import TypingAnimation from '@/components/ui/TypingAnimation.vue'
import AuroraText from '@/components/ui/AuroraText.vue'
import { useWindowSize } from '@vueuse/core'

// Define platform-specific components asynchronously to avoid heavy initial load if desired
// Or direct import is fine given they are relatively simple.
import Safari from '@/components/ui/Safari.vue'
import Iphone from '@/components/ui/Iphone.vue'
import Android from '@/components/ui/Android.vue'

const { t } = useI18n()

type Platform = "desktop" | "ios" | "android" | "unknown"

const detectPlatform = (): Platform => {
  if (typeof navigator === "undefined") return "unknown"
  const userAgent = navigator.userAgent

  if (/iphone|ipad|ipod/i.test(userAgent)) return "ios"
  if (/android/i.test(userAgent)) return "android"
  if (!/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase())) {
    return "desktop"
  }
  return "unknown"
}

const platform = ref<Platform>("unknown")

onMounted(() => {
  platform.value = detectPlatform()
})

// Calendar Component Logic
const calUrl = "https://cal.com/mcpeapsunterstrichhd"

// Calendar Component Logic
const CalendarEmbed = defineComponent({
  setup() {
    const platform = ref<Platform>("unknown")
    const calUrl = "https://cal.com/mcpeapsunterstrichhd"

    onMounted(() => {
       platform.value = detectPlatform()
    })

    const iframe = h('iframe', {
        src: calUrl,
        title: "cal.com calendar",
        class: "size-full border-0"
    })

    return () => {
        if (platform.value === 'desktop') {
            return h('div', { class: 'w-full max-w-4xl mx-auto' }, [
                h(Safari, { url: calUrl, class: 'w-full' }, { default: () => iframe })
            ])
        }
        if (platform.value === 'ios') {
            return h('div', { class: 'w-full max-w-sm mx-auto' }, [
                h(Iphone, { class: 'w-full' }, { default: () => iframe })
            ])
        }
        if (platform.value === 'android') {
             return h('div', { class: 'w-full max-w-sm mx-auto' }, [
                h(Android, { class: 'w-full' }, { default: () => iframe })
            ])
        }

        // Fallback
        return h('iframe', {
            src: calUrl,
            title: calUrl,
            class: "w-full h-200 rounded-lg border border-border"
        })
    }
  }
})
</script>
