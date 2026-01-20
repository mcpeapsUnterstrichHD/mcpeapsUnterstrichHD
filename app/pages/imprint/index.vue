<template>
  <div class="flex flex-col gap-8 px-4 py-6 max-w-9xl mx-auto">
    <!-- Hero Section -->
    <section class="text-center">
      <AuroraText
        className="text-4xl md:text-5xl lg:text-6xl font-bold"
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
          {{ t("Imprint.title") }}
        </TypingAnimation>
      </AuroraText>
    </section>

    <!-- Legal Info Cards -->
    <div class="grid gap-6 md:grid-cols-2">
      <!-- § 5 TMG Section -->
      <Card class="bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle class="flex items-center gap-2 text-xl">
            <Scale class="w-5 h-5 text-primary" />
            {{ t("Imprint.tmg.title") }}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <a
            :href="contactDetails.address.link"
            target="_blank"
            rel="noreferrer"
            class="flex items-start gap-2 hover:text-primary transition-colors"
          >
            <MapPin class="w-4 h-4 mt-1 shrink-0" />
            <div>
              Aps, Fabian<br />
              {{ contactDetails.address.street }}<br />
              {{ contactDetails.address.zip }} {{ t(contactDetails.address.city) }}, {{ t(contactDetails.address.country) }}
            </div>
          </a>
        </CardContent>
      </Card>

      <!-- Contact Section -->
      <Card class="bg-card/50 backdrop-blur-sm">
        <CardHeader>
          <CardTitle class="flex items-center gap-2 text-xl">
            <User class="w-5 h-5 text-primary" />
            {{ t("Imprint.contact.title") }}
          </CardTitle>
        </CardHeader>
        <CardContent class="flex flex-col gap-3">
          <a
            :href="contactDetails.email.link"
            target="_blank"
            rel="noreferrer"
            class="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Mail class="w-4 h-4" />
            {{ contactDetails.email.display }}
          </a>
          <a
            :href="contactDetails.telephone.link"
            target="_blank"
            rel="noreferrer"
            class="flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Phone class="w-4 h-4" />
            {{ contactDetails.telephone.display }}
          </a>
        </CardContent>
      </Card>
    </div>

    <!-- Responsible Person Section -->
    <Card class="bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle class="flex items-center gap-2 text-xl">
          <Scale class="w-5 h-5 text-primary" />
          {{ t("Imprint.rstv.title") }}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <a
          :href="contactDetails.address.link"
          target="_blank"
          rel="noreferrer"
          class="flex items-start gap-2 hover:text-primary transition-colors"
        >
          <MapPin class="w-4 h-4 mt-1 shrink-0" />
          <div>
            Aps, Fabian<br />
            {{ contactDetails.address.street }}<br />
            {{ contactDetails.address.zip }} {{ t(contactDetails.address.city) }}, {{ t(contactDetails.address.country) }}
          </div>
        </a>
      </CardContent>
    </Card>

    <!-- Cookie Disclaimer Section -->
    <Card class="bg-card/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle class="flex items-center gap-2 text-xl">
          <Cookie class="w-5 h-5 text-primary" />
          {{ t("Imprint.cookies.title") }}
        </CardTitle>
      </CardHeader>
      <CardContent class="flex flex-col gap-4">
        <p class="text-muted-foreground">
          {{ t("Imprint.cookies.description") }}
        </p>

        <!-- Technical Cookies -->
        <div class="p-4 bg-muted/30 rounded-lg">
          <h4 class="font-medium mb-2">{{ t("Imprint.cookies.technical.title") }}</h4>
          <p class="text-sm text-muted-foreground">
            {{ t("Imprint.cookies.technical.description") }}
          </p>
        </div>

        <!-- Third-Party Cookies -->
        <div class="p-4 bg-muted/30 rounded-lg">
          <h4 class="font-medium mb-2">{{ t("Imprint.cookies.thirdParty.title") }}</h4>
          <p class="text-sm text-muted-foreground">
            {{ t("Imprint.cookies.thirdParty.description") }}
          </p>
          <ul class="mt-2 text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li>Cal.com ({{ t("Imprint.cookies.thirdParty.calcom") }})</li>
            <li>Apple Music ({{ t("Imprint.cookies.thirdParty.appleMusic") }})</li>
            <li>song.link ({{ t("Imprint.cookies.thirdParty.songlink") }})</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { Mail, Phone, MapPin, Scale, User, Cookie } from 'lucide-vue-next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import TypingAnimation from '@/components/ui/TypingAnimation.vue'
import AuroraText from '@/components/ui/AuroraText.vue'
import { contactDetails } from '@/lib/contact'

const { t } = useI18n()
</script>
