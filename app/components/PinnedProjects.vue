<template>
  <div class="w-full px-4">
    <h2 class="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2">
      <Pin class="w-6 h-6 text-primary" />
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
        {{ t('Projects.pinned') }}:
      </TypingAnimation>
    </h2>
    <MasonryGrid :variant="Variants.pinned_projects">
      <ProjektCard
        v-for="project in pinnedProjects"
        :key="project.projektLink"
        v-bind="project"
      >
        {{ project.children }}
      </ProjektCard>
    </MasonryGrid>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { Pin } from 'lucide-vue-next'
import TypingAnimation from '@/components/ui/TypingAnimation.vue'
import MasonryGrid from '@/components/MasonryGrid.vue'
import { Variants } from '@/types/masonry'
import ProjektCard from '@/components/ProjektCard.vue'

const { t } = useI18n()

// Logic from pinedProjects.tsx
const pinnedProjects = computed(() => {
  return [
    {
      projektImage: "/pictures/projects/my_Portfolio.png",
      projektImageAlt: t("Projects.items.portfolio.imgAlt"),
      projektImageBgColor: "",
      projektTitle: t("Projects.items.portfolio.title"),
      projektBadges: ["FOSS", "WEB", "NEW"],
      projektLink: "https://github.com/mcpeapsUnterstrichHD/mcpeapsUnterstrichHD",
      children: t("Projects.items.portfolio.description"),
    },
    {
      projektImage: "/pictures/projects/ssqlr.png",
      projektImageAlt: t("Projects.items.simplesql.imgAlt"),
      projektImageBgColor: "",
      projektTitle: t("Projects.items.simplesql.title"),
      projektBadges: ["FOSS", "RUST", "SQL"],
      projektLink: "https://github.com/comboomPunkTsucht/simplesql",
      children: t("Projects.items.simplesql.description"),
    },
    {
      projektImage: "/pictures/projects/searxng.png",
      projektImageAlt: t("Projects.items.localServices.imgAlt"),
      projektImageBgColor: "",
      projektTitle: t("Projects.items.localServices.title"),
      projektBadges: ["FOSS", "WEB", "NEW", "SEARCH ENGINE", "DOCKER"],
      projektLink: "https://github.com/mcpeapsUnterstrichHD/local-services",
      children: t("Projects.items.localServices.description"),
    },
  ].sort((a, b) => a.projektTitle.localeCompare(b.projektTitle))
})
</script>
