<template>
  <div class="flex flex-col gap-8 px-4 py-6 max-w-9xl mx-auto">
    <!-- Hero Section -->
    <section class="text-center space-y-3">
      <p class="text-muted-foreground text-lg">
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
          {{ `${t('Aboutme.hello')} 󱠢` }}
        </TypingAnimation>
      </p>

      <AuroraText
        className="text-4xl md:text-5xl lg:text-6xl font-bold"
        :colors="[nord11, nord14, nord11, nord14]"
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
          {{ `${t('Aboutme.iam')} ${t('Aboutme.name')}` }}
        </TypingAnimation>
      </AuroraText>

      <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
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
          {{ t('Aboutme.title') }}
        </TypingAnimation>
      </h2>
    </section>

    <!-- Description -->
    <section class="text-center max-w-2xl mx-auto">
      <p class="text-muted-foreground leading-relaxed whitespace-pre-line">
        {{ t('Aboutme.description', { age }) }}
      </p>
    </section>

    <!-- Music Section -->
    <section class="grid gap-6 md:grid-cols-2">
      <!-- Playlist Card -->
      <Card class="bg-card/50 backdrop-blur-sm">
        <CardHeader class="pb-2">
          <CardTitle class="flex items-center gap-2 text-xl">
            <Music class="w-5 h-5 text-primary" />
            {{ t('Aboutme.myPlaylist') }}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            class="w-full rounded-lg"
            height="450"
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/de/playlist/favorite/pl.u-aZb0kXDFP7zBoV2"
            :title="t('Aboutme.myPlaylist')"
          />
        </CardContent>
      </Card>

      <!-- Current Song Card -->
      <Card class="bg-card/50 backdrop-blur-sm">
        <CardHeader class="pb-2">
          <CardTitle class="flex items-center gap-2 text-xl">
            <Disc3 class="w-5 h-5 text-primary animate-spin-slow" />
            {{ t('Aboutme.myCurrentSong') }}
          </CardTitle>
        </CardHeader>
        <CardContent class="flex flex-col gap-4">
          <iframe
            class="w-full rounded-lg"
            height="450"
            src="https://odesli.co/embed/?url=https%3A%2F%2Fsong.link%2Ffestival_dream&theme=dark"
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"
            allow="clipboard-read; clipboard-write"
            :title="t('Aboutme.myCurrentSong')"
          />
        </CardContent>
      </Card>
    </section>

    <!-- Pinned Projects -->
    <section>
      <PinnedProjects />
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Music, Disc3 } from 'lucide-vue-next'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import PinnedProjects from '@/components/PinnedProjects.vue'
import TypingAnimation from '@/components/ui/TypingAnimation.vue'
import AuroraText from '@/components/ui/AuroraText.vue'
import { nord11, nord14 } from '@/lib/NordColors'

const { t } = useI18n()

// Calculate age dynamically
const age = computed(() => {
  const today = new Date()
  const birthday = new Date("2003-06-06")
  let a = today.getFullYear() - birthday.getFullYear()
  const m = today.getMonth() - birthday.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    a--
  }
  return a
})
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 3s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
