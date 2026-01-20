<template>
  <div class="flex flex-col gap-8 px-4 py-6 mx-auto">
    <!-- Hero Section -->
    <section class="text-center space-y-2">
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
          {{ t("Projects.title") }}
        </TypingAnimation>
      </AuroraText>
      <p class="text-muted-foreground flex items-center justify-center gap-2">
        <FolderOpen class="w-5 h-5" />
        {{ t("Projects.projectCount", { count: totalProjectCount }) }}
      </p>
    </section>

    <!-- Pinned Projects -->
    <section>
      <PinnedProjects />
    </section>

    <!-- All Projects -->
    <section class="space-y-4">
      <h2 class="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2">
        <Grid3X3 class="w-6 h-6 text-primary" />
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
          {{ `${t("Projects.all")}:` }}
        </TypingAnimation>
      </h2>
      <MasonryGrid :variant="Variants.projects">
        <ProjektCard
          v-for="project in completedProjects"
          :key="project.projektLink"
          v-bind="project"
        >
          {{ project.children }}
        </ProjektCard>
      </MasonryGrid>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { FolderOpen, Grid3X3 } from 'lucide-vue-next'
import PinnedProjects from '@/components/PinnedProjects.vue'
import ProjektCard from '@/components/ProjektCard.vue'
import MasonryGrid from '@/components/MasonryGrid.vue'
import { Variants } from '@/types/masonry'
import TypingAnimation from '@/components/ui/TypingAnimation.vue'
import AuroraText from '@/components/ui/AuroraText.vue'
import { nord11, nord14 } from '@/lib/NordColors'

const { t } = useI18n()

// This logic should probably be shared if used elsewhere (like pinning logic)
// But for now duplicating the mock data fetch is consistent with Next.js page.
// Ideally, this data would come from a content source or shared constant.

const allProjects = computed(() => [
    {
      projektImage: "/pictures/projects/OSZimt-Logo-l.png",
      projektImageAlt: t("Projects.items.schulRepo.imgAlt"),
      projektImageBgColor: "bg-white",
      projektTitle: t("Projects.items.schulRepo.title"),
      projektBadges: ["FOSS", "SCHOOL"],
      projektLink: "https://github.com/comboomPunkTsucht/OSZIMT-repo-ITA12_aps",
      children: t("Projects.items.schulRepo.description"),
    },
    {
      projektImage: "/pictures/projects/OSZimt-Logo-l.png",
      projektImageAlt: t("Projects.items.klassenWebsite.imgAlt"),
      projektImageBgColor: "bg-white",
      projektTitle: t("Projects.items.klassenWebsite.title"),
      projektBadges: ["FOSS", "SCHOOL", "WEB", "MARKDOWN", "WIKI"],
      projektLink: "https://github.com/comboomPunkTsucht/OSZ_ITA12_Doc",
      children: t("Projects.items.klassenWebsite.description"),
    },
    {
      projektImage: "/pictures/projects/Klassen_App_Icon_iOS_macOS_iPadOS.png",
      projektImageAlt: t("Projects.items.klassenApp.imgAlt"),
      projektImageBgColor: "",
      projektTitle: t("Projects.items.klassenApp.title"),
      projektBadges: ["FOSS", "SCHOOL", "APP", "iOS", "SWIFT", "SWIFTUI", "HUB"],
      projektLink: "https://github.com/comboomPunkTsucht/ITA-12_App",
      children: t("Projects.items.klassenApp.description"),
    },
    {
      projektImage: "/pictures/projects/ssqlr.png",
      projektImageAlt: t("Projects.items.simpleSqlRunner.imgAlt"),
      projektImageBgColor: "",
      projektTitle: t("Projects.items.simpleSqlRunner.title"),
      projektBadges: ["FOSS", "SCHOOL", "JAVA", "SQL"],
      projektLink: "https://github.com/comboomPunkTsucht/Simple-SQL-Runner",
      children: t("Projects.items.simpleSqlRunner.description"),
    },
    {
      projektImage: "/pictures/logo.png",
      projektImageAlt: t("Projects.items.dotfilesMacos.imgAlt"),
      projektImageBgColor: "",
      projektTitle: t("Projects.items.dotfilesMacos.title"),
      projektBadges: ["FOSS", "WEB", "NEW", "Configuration", "DOTFILES", "MACOS"],
      projektLink: "https://github.com/mcpeapsUnterstrichHD/dotfiles-macos",
      children: t("Projects.items.dotfilesMacos.description"),
    },
    {
      projektImage: "/pictures/logo.png",
      projektImageAlt: t("Projects.items.nixConfig.imgAlt"),
      projektImageBgColor: "",
      projektTitle: t("Projects.items.nixConfig.title"),
      projektBadges: ["FOSS", "WEB", "NEW", "Configuration", "DOTFILES", "Linux", "NIXOS"],
      projektLink: "https://github.com/mcpeapsUnterstrichHD/nix-config",
      children: t("Projects.items.nixConfig.description"),
    },
    {
      projektImage: "/pictures/logo.png",
      projektImageAlt: t("Projects.items.dotfilesLinux.imgAlt"),
      projektImageBgColor: "",
      projektTitle: t("Projects.items.dotfilesLinux.title"),
      projektBadges: ["FOSS", "WEB", "NEW", "Configuration", "DOTFILES", "Linux"],
      projektLink: "https://github.com/mcpeapsUnterstrichHD/dotfiles-linux",
      children: t("Projects.items.dotfilesLinux.description"),
    },
    {
      projektImage: "/pictures/cbps_logo.png",
      projektImageAlt: t("Projects.items.cbpsWebsite.imgAlt"),
      projektImageBgColor: "",
      projektTitle: t("Projects.items.cbpsWebsite.title"),
      projektBadges: ["FOSS", "WEB", "MARKDOWN", "WIKI"],
      projektLink: "https://github.com/comboomPunkTsucht/comboom.sucht-BLOG",
      children: t("Projects.items.cbpsWebsite.description"),
    },
    {
      projektImage: "/pictures/cbps_logo.png",
      projektImageAlt: t("Projects.items.cbpsApp.imgAlt"),
      projektImageBgColor: "",
      projektTitle: t("Projects.items.cbpsApp.title"),
      projektBadges: ["FOSS", "APP", "iOS", "SWIFT", "SWIFTUI", "HUB"],
      projektLink: "https://github.com/comboomPunkTsucht/comboomPunkTsucht-IOS-macOS-App",
      children: t("Projects.items.cbpsApp.description"),
    },
    {
      projektImage: "/pictures/projects/LogoDerTUBerlin2020.svg",
      projektImageAlt: t("Projects.items.uniRepo.imgAlt"),
      projektImageBgColor: "bg-white",
      projektTitle: t("Projects.items.uniRepo.title"),
      projektBadges: ["FOSS", "UNIVERSITY"],
      projektLink: "https://github.com/comboomPunkTsucht/TU-Berlin-repo-aps",
      children: t("Projects.items.uniRepo.description"),
    },
    {
      projektImage: "/pictures/projects/live-wallpaper.png",
      projektImageAlt: t("Projects.items.liveWallpaper.imgAlt"),
      projektImageBgColor: "",
      projektTitle: t("Projects.items.liveWallpaper.title"),
      projektBadges: ["NATIVE", "WASM", "C++", "RAYLIB"],
      projektLink: "https://github.com/comboomPunkTsucht/comboom_punkt_sucht_native_wallpaper",
      children: t("Projects.items.liveWallpaper.description"),
    },
])

// Recreating getPinnedProjects logic inside computed since we don't have the external function easily shareable yet (unless we extracted it to utils)
// But for consistency with PinnedProjects component, I should probably extract it.
// However, PinnedProjects component handles its own data loading internally in my previous implementation.
// So here I need to duplicate it or better, just use the component for the top part and manual list for bottom.
// BUT the page combines both lists.
// Let's duplicate logic for now for speed.

const pinnedProjects = computed(() => [
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
].sort((a, b) => a.projektTitle.localeCompare(b.projektTitle)))

const completedProjects = computed(() => {
  return [...pinnedProjects.value, ...allProjects.value].sort(
    (a, b) => a.projektTitle.localeCompare(b.projektTitle)
  )
})

const totalProjectCount = computed(() => completedProjects.value.length)

</script>
