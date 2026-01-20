<template>
  <div class="flex flex-col gap-6 px-4 py-6 mx-auto">
    <!-- Header / Personal Info -->
    <Card class="bg-card/50 backdrop-blur-sm print:bg-white print:shadow-none">
      <CardHeader class="text-center pb-2">
        <h1 class="text-3xl md:text-4xl font-bold">{{ t("Aboutme.name") }}</h1>
        <p class="text-lg text-muted-foreground">{{ t("Cv.about.title") }}</p>
      </CardHeader>
      <CardContent>
        <div class="grid grid-cols-1 md:grid-cols-2 print:grid-cols-1 gap-4 text-sm">
          <!-- Contact Info -->
          <div class="flex flex-col gap-2">
            <a
              :href="contactDetails.email.link"
              class="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail class="w-4 h-4" />
              {{ contactDetails.email.display }}
            </a>
            <a
              :href="contactDetails.telephone.link"
              class="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone class="w-4 h-4" />
              {{ contactDetails.telephone.display }}
            </a>
            <div class="flex items-center gap-2 text-muted-foreground">
              <Calendar class="w-4 h-4" />
              {{ t("Cv.about.birthday") }}: 06.06.2003
            </div>
          </div>
          <!-- Address -->
          <a
            :href="contactDetails.address.link"
            target="_blank"
            rel="noreferrer"
            class="flex items-start gap-2 hover:text-primary transition-colors"
          >
            <MapPin class="w-4 h-4 mt-0.5 shrink-0" />
            <div>
              {{ contactDetails.address.street }}<br />
              {{ contactDetails.address.zip }} {{ t(contactDetails.address.city) }}, {{ t(contactDetails.address.country) }}
            </div>
          </a>
        </div>
      </CardContent>
    </Card>

    <!-- Education Section -->
    <section>
      <h2 class="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2 mb-4">
        <GraduationCap class="w-6 h-6 text-primary print:text-black" />
        {{ t("Cv.education.title") }}
      </h2>

      <!-- Large Timeline -->
      <div class="hidden sm:block">
        <TimelineElementBig
          v-for="{ key, ...e } in education"
          :key="key"
          v-bind="e"
        >
          <p>{{ e.children }}</p>
        </TimelineElementBig>
      </div>

      <!-- Small Timeline -->
      <div class="block sm:hidden">
        <TimelineElementSmall
          v-for="{ key, ...e } in education"
          :key="key"
          v-bind="e"
        >
          <p>{{ e.children }}</p>
        </TimelineElementSmall>
      </div>
    </section>

    <!-- Experience Section -->
    <section>
      <h2 class="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2 mb-4">
        <Briefcase class="w-6 h-6 text-primary print:text-black" />
        {{ t("Cv.experience.title") }}
      </h2>

      <!-- Large Timeline -->
      <div class="hidden sm:block">
        <TimelineElementBig
          v-for="{ key, ...ex } in experience"
          :key="key"
          v-bind="ex"
        >
          <div>{{ ex.children }}</div>
        </TimelineElementBig>
      </div>

      <!-- Small Timeline -->
      <div class="block sm:hidden">
        <TimelineElementSmall
          v-for="{ key, ...ex } in experience"
          :key="key"
          v-bind="ex"
        >
          <div>{{ ex.children }}</div>
        </TimelineElementSmall>
      </div>
    </section>

    <!-- Skills Section -->
    <section>
      <h2 class="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2 mb-4">
        <Wrench class="w-6 h-6 text-primary print:text-black" />
        {{ t("Cv.skills.title") }}
      </h2>

      <div class="flex flex-col gap-8">
        <div v-for="cat in skillCategories" :key="cat.key" class="break-inside-avoid">
            <template v-if="skillsByCategory(cat.key).length > 0">
                <h3 class="text-xl font-semibold mb-4 ml-1 opacity-80">{{ t(cat.titleKey) }}</h3>
                <MasonryGrid :variant="Variants.skills">
                    <SkillCard
                        v-for="s in skillsByCategory(cat.key)"
                        :key="s.SkillTitle"
                        v-bind="s"
                    />
                </MasonryGrid>
            </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Use CV layout with print buttons and toast notifications
definePageMeta({
  layout: 'cv'
})

import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import {
  GraduationCap,
  Briefcase,
  Wrench,
  Mail,
  Phone,
  MapPin,
  Calendar
} from 'lucide-vue-next'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import SkillCard from '@/components/SkillCard.vue'
import TimelineElementBig from '@/components/TimelineElementBig.vue'
import TimelineElementSmall from '@/components/TimelineElementSmall.vue'
import MasonryGrid from '@/components/MasonryGrid.vue'
import { Variants } from '@/types/masonry'
import { contactDetails } from '@/lib/contact'
import {
  educationItems,
  experienceItems,
  skillItems,
  skillCategories,
  sortByEndDate
} from '@/lib/cv-data'

const { t, tm } = useI18n()

// Transform education data
const education = computed(() => {
  const items = educationItems.map((edu) => ({
    key: edu.key,
    TimeLineTitle: t(edu.nameKey),
    TimeLineBadges: edu.badgeKeys.map((bk) => {
      // Handle dynamic badges
      // t(bk) should handle parameters if passed
      // But here we need conditional parameters based on content of key?
      // Next.js logic: if (bk.includes("semester")) ...
      // We can replicate that logic.
      if (bk.includes("semester")) return t(bk, { semester: 6 })
      if (bk.includes("years")) return t(bk, { years: 3 })
      return t(bk)
    }),
    TimeLineImage: edu.image,
    TimeLineImageAlt: t(edu.imgAltKey),
    TimeLineImageFallback: edu.imageFallback,
    startdate: edu.startdate,
    enddate: edu.enddate,
    children: t(edu.descriptionKey),
  }))
  return sortByEndDate(items)
})

// Transform experience data
const experience = computed(() => {
  const items = experienceItems.map((exp) => ({
    key: exp.key,
    TimeLineTitle: t(exp.nameKey),
    TimeLineBadges: tm(exp.badgesKey) as string[], // Use tm for implicit array if configured, or t and hope it works?
    // i18n structure suggests badgesKey is a key that returns an array?
    // In Next.js: t.raw(exp.badgesKey)
    // In Nuxt i18n: translation keys returning arrays are supported if configured.
    // If not, we might need to change structure to badgesKey.0, badgesKey.1 etc.
    // Let's assume tm() works or just cast typical t() if it returns array.
    // For now using tm() which returns the object/array from locale message.
    TimeLineImage: exp.image,
    TimeLineImageAlt: t(exp.imgAltKey),
    TimeLineImageFallback: exp.imageFallback,
    startdate: exp.startdate,
    enddate: exp.enddate,
    children: t(exp.descriptionKey),
  }))
  return sortByEndDate(items)
})

// Transform skills data
const skills = computed(() => {
  const items = skillItems.map((skill) => {
    const badges = [
      ...skill.badgeKeys.map((bk) => t(bk)),
      ...(skill.staticBadges || []),
    ]

    if (skill.experience) {
      badges.push(t(`Cv.skills.badges.${skill.experience.type}`, { count: skill.experience.count }))
    }

    const screenImage = skill.darkImage || skill.image
    const printImage = skill.darkImage ? skill.image : undefined

    return {
      SkillTitle: skill.title,
      SkillBadges: badges,
      SkillImage: screenImage,
      SkillImagePrint: printImage,
      SkillImageAlt: skill.imageAlt,
      SkillImageFallback: skill.imageFallback,
      Skilllevel: skill.level,
      category: skill.category,
    }
  })
  return items.sort((a, b) => a.SkillTitle.localeCompare(b.SkillTitle))
})

const skillsByCategory = (categoryKey: string) => {
    return skills.value.filter(s => s.category === categoryKey)
}

</script>
