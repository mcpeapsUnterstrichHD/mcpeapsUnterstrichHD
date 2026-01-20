<template>
  <div class="flex flex-col items-center justify-center min-h-[90vh] w-full relative px-4">
    <!-- Hero Content -->
    <div class="flex flex-col items-center gap-4 text-center">
      <!-- Animated Greeting -->
      <div class="text-muted-foreground text-lg md:text-xl lg:text-2xl animate-fade-in">
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
          {{ `${t("Aboutme.hello")} 󱠢 ${t("Aboutme.iam")}` }}
        </TypingAnimation>
      </div>

      <!-- Animated Name with Gradient -->
      <AuroraText
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold rounded-sm"
        :colors="[
          nord11,
          nord14,
          nord11,
          nord14,
          nord11,
          nord14,
          nord11
        ]"
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
          {{ t("Aboutme.name") }}
        </TypingAnimation>
      </AuroraText>

      <!-- Animated Title/Tagline -->
      <div class="text-xl md:text-2xl lg:text-3xl text-muted-foreground mt-2">
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
          {{ t("Aboutme.title") }}
        </TypingAnimation>
      </div>

      <!-- CTA Buttons -->
      <div class="flex flex-wrap gap-3 mt-8 justify-center">
        <!-- About Me Button -->
        <Button variant="default" size="lg" as-child class="group gap-2">
             <NuxtLinkLocale to="/aboutme">
                <User class="w-4 h-4 group-hover:scale-110 transition-transform" />
                {{ t("Recommendation.aboutme.action.label") }}
             </NuxtLinkLocale>
        </Button>

        <!-- Projects Button -->
        <Button variant="secondary" size="lg" as-child class="group gap-2">
            <NuxtLinkLocale to="/projects">
                <FolderOpen class="w-4 h-4 group-hover:scale-110 transition-transform" />
                {{ t("Recommendation.projects.action.label") }}
            </NuxtLinkLocale>
        </Button>

        <!-- CV Button -->
        <Button variant="outline" size="lg" as-child class="bg-card/50 backdrop-blur-sm group gap-2">
           <NuxtLinkLocale to="/cv">
              <FileText class="w-4 h-4 group-hover:scale-110 transition-transform" />
              {{ t("Recommendation.cv.action.label") }}
           </NuxtLinkLocale>
        </Button>

        <!-- Contact Button -->
         <Button variant="ghost" size="lg" as-child class="group gap-2">
            <NuxtLinkLocale to="/contact">
              <Mail class="w-4 h-4 group-hover:scale-110 transition-transform" />
              {{ t("Sites.contact") }}
            </NuxtLinkLocale>
        </Button>
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { User, FolderOpen, FileText, Mail } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import TypingAnimation from '@/components/ui/TypingAnimation.vue'
import AuroraText from '@/components/ui/AuroraText.vue'
import { nord11, nord14 } from '@/lib/NordColors'

const { t } = useI18n()
</script>
