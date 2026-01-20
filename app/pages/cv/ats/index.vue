<template>
  <div class="ats-cv">
    <div class="print:block bg-white text-black p-8 min-h-screen">
      <!-- Use print classes to style on print, and simple styles for screen preview if needed -->
      <!-- Header -->
      <h1 class="text-3xl font-bold mb-2">{{ t("Aboutme.name") }}</h1>
      <div class="text-lg subtitle mb-4">{{ t("Cv.about.title") }}</div>

      <!-- Contact Info - single line for ATS -->
      <div class="contact-info flex gap-2 text-sm mb-6 border-b pb-4">
        <span>{{ contactDetails.email.display }}</span>
        <span>|</span>
        <span>{{ contactDetails.telephone.display }}</span>
        <span>|</span>
        <span>{{ contactDetails.address.street }}, {{ contactDetails.address.zip }} {{ t(contactDetails.address.city) }}, {{ t(contactDetails.address.country) }}</span>
        <span>|</span>
        <span>{{ t("Cv.about.birthday") }}: 06.06.2003</span>
      </div>

      <!-- Education -->
      <h2 class="text-xl font-bold uppercase border-b mb-2">{{ t("Cv.education.title") }}</h2>
      <div v-for="edu in sortedEducation" :key="edu.key" class="entry mb-4">
        <div class="entry-header flex justify-between font-bold">
          <span class="entry-title">{{ t(edu.nameKey) }}</span>
          <span class="entry-date">{{ formatDate(edu.startdate) }} – {{ formatDate(edu.enddate) }}</span>
        </div>
        <p class="entry-description text-sm mt-1 whitespace-pre-wrap">{{ formatDescription(t(edu.descriptionKey)) }}</p>
      </div>

      <!-- Experience -->
      <h2 class="text-xl font-bold uppercase border-b mb-2 mt-6">{{ t("Cv.experience.title") }}</h2>
      <div v-for="exp in sortedExperience" :key="exp.key" class="entry mb-4">
        <div class="entry-header flex justify-between font-bold">
          <span class="entry-title">{{ t(exp.nameKey) }}</span>
          <span class="entry-date">{{ formatDate(exp.startdate) }} – {{ formatDate(exp.enddate) }}</span>
        </div>
        <p class="entry-description text-sm mt-1 whitespace-pre-wrap">{{ cleanDescription(t(exp.descriptionKey)) }}</p>
      </div>

      <!-- Skills -->
      <h2 class="text-xl font-bold uppercase border-b mb-2 mt-6">{{ t("Cv.skills.title") }}</h2>
      <div v-for="cat in skillCategories" :key="cat.key" class="skills-category mb-2 text-sm">
        <template v-if="getSkillsExcludingLanguage(cat.key).length > 0">
           <span class="skills-title font-bold">{{ t(cat.titleKey) }}: </span>
           <span class="skills-list">
             {{ getSkillsExcludingLanguage(cat.key).join(", ") }}
           </span>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Use CV layout with print buttons and toast notifications
definePageMeta({
  layout: 'cv'
})

import { useI18n } from 'vue-i18n'
import { contactDetails } from '@/lib/contact'
import {
  educationItems,
  experienceItems,
  skillItems,
  skillCategories,
  sortByEndDate
} from '@/lib/cv-data'

const { t } = useI18n()

const sortedEducation = sortByEndDate(
  educationItems.filter(e => e.key !== "looking")
)
const sortedExperience = sortByEndDate(experienceItems)

const formatDate = (d: string) => {
  const parts = d.split(".")
  if (parts.length === 2) return `${parts[0]}/${parts[1]}`
  if (parts.length === 3) return `${parts[1]}/${parts[2]}`
  return d
}

const formatDescription = (desc: string) => {
  return desc.replace(/[•]/g, "-")
}

const cleanDescription = (desc: string) => {
  return desc
    .replace(/[•]/g, "")
    .replace(/\\n/g, " ")
    .trim()
}

const getSkillsExcludingLanguage = (catKey: string) => {
    return skillItems
      .filter((s) => s.category === catKey)
      .map((s) => {
        const detailsParts: string[] = []

        // Add experience duration
        if (s.experience) {
          const durationText = t(`Cv.skills.badges.${s.experience.type}`, { count: s.experience.count })
          detailsParts.push(durationText)
        }

        // Add badges
        if (s.badgeKeys && s.badgeKeys.length > 0) {
          const translatedBadges = s.badgeKeys
            .filter(key => key !== 'Cv.skills.badges.language')
            .map(key => t(key))
          detailsParts.push(...translatedBadges)
        }

        // Add static badges
        if (s.staticBadges && s.staticBadges.length > 0) {
          detailsParts.push(...s.staticBadges)
        }

        const details = detailsParts.length > 0 ? ` (${detailsParts.join(", ")})` : ""
        return `${s.title}${details}`
      })
}
</script>

<style scoped>
/* Basic ATS styling reset for screen view, relies on printer-friendly classes or overrides */
.ats-cv {
  font-family: 'Times New Roman', Times, serif;
  color: black;
  background: white;
  width: 100%;
}
@media print {
    @page { margin: 1cm; }
    body { background: white; color: black; }
    .ats-cv { width: 100%; height: 100%; }
}
</style>
