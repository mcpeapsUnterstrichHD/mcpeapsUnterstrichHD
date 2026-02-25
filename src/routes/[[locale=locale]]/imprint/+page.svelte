<script lang="ts">
  import { useIntlayer, useLocale } from "svelte-intlayer";
  import {
    Shield,
    Fingerprint,
    Gavel,
    Handshake,
    ExternalLink,
    Settings,
  } from "@lucide/svelte";
  import { contactDetails } from "$lib/contact";
  import { Mail, Phone, MapPin, Scale, User, Cookie } from "@lucide/svelte";
  import { getLocalizedUrl, type Locale } from "intlayer";
  import AuroraText from "$lib/components/AuroraText.svelte";
  import TypingAnimation from "$lib/components/TypingAnimation.svelte";
  import * as Card from "$lib/components/ui/card";

  const { locale } = useLocale();
  const imprint = useIntlayer("imprint");
  const aboutme = useIntlayer("aboutme");
  const cv = useIntlayer("cv");
  const cookieConsent = useIntlayer("cookieConsent");
</script>

<svelte:head>
  <title>{$imprint.title} — {$aboutme.name}</title>
</svelte:head>

<div class="flex flex-col gap-8 px-4 py-6 mx-auto">
  <!-- Hero Section -->
  <section class="text-center">
    <AuroraText
      class="text-4xl md:text-5xl lg:text-6xl font-bold"
      colors={["#C16069", "#A2BF8A", "#C16069", "#A2BF8A"]}
      speed={3}
    >
      <TypingAnimation
        text={$imprint.title as unknown as string}
        typeSpeed={145}
        pauseDelay={1450}
        deleteSpeed={75}
        showCursor
        blinkCursor
        loop
        startOnView
        cursorStyle="underscore"
      />
    </AuroraText>
  </section>

  <!-- Legal Info Cards -->
  <div class="grid gap-6 md:grid-cols-2">
    <!-- § 5 TMG Section -->
    <Card.Root class="my-glass">
      <Card.Header>
        <Card.Title class="flex items-center gap-2 text-xl">
          <Scale class="w-5 h-5 text-primary" />
          {$imprint.tmg.title}
        </Card.Title>
      </Card.Header>
      <Card.Content>
        <a
          href={contactDetails.address.link}
          target="_blank"
          rel="noreferrer"
          class="flex items-start gap-2 hover:text-primary transition-colors"
        >
          <MapPin class="w-4 h-4 mt-1 shrink-0" />
          <div>
            Aps, Fabian<br />
            {contactDetails.address.street}<br />
            {contactDetails.address.zip}
            {$cv.about.address.berlin}, {$cv.about.address.germany}
          </div>
        </a>
      </Card.Content>
    </Card.Root>

    <!-- Contact Section -->
    <Card.Root class="my-glass">
      <Card.Header>
        <Card.Title class="flex items-center gap-2 text-xl">
          <User class="w-5 h-5 text-primary" />
          {$imprint.contact.title}
        </Card.Title>
      </Card.Header>
      <Card.Content class="flex flex-col gap-3">
        <a
          href={contactDetails.email.link}
          target="_blank"
          rel="noreferrer"
          class="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <Mail class="w-4 h-4" />
          {contactDetails.email.display}
        </a>
        <a
          href={contactDetails.telephone.link}
          target="_blank"
          rel="noreferrer"
          class="flex items-center gap-2 hover:text-primary transition-colors"
        >
          <Phone class="w-4 h-4" />
          {contactDetails.telephone.display}
        </a>
      </Card.Content>
    </Card.Root>
  </div>

  <!-- Responsible Person Section -->
  <Card.Root class="my-glass">
    <Card.Header>
      <Card.Title class="flex items-center gap-2 text-xl">
        <Scale class="w-5 h-5 text-primary" />
        {$imprint.rstv.title}
      </Card.Title>
    </Card.Header>
    <Card.Content>
      <a
        href={contactDetails.address.link}
        target="_blank"
        rel="noreferrer"
        class="flex items-start gap-2 hover:text-primary transition-colors"
      >
        <MapPin class="w-4 h-4 mt-1 shrink-0" />
        <div>
          Aps, Fabian<br />
          {contactDetails.address.street}<br />
          {contactDetails.address.zip}
          {$cv.about.address.berlin}, {$cv.about.address.germany}
        </div>
      </a>
    </Card.Content>
  </Card.Root>

  <!-- Cookie Disclaimer Section -->
  <Card.Root class="my-glass">
    <Card.Header>
      <Card.Title class="flex items-center gap-2 text-xl">
        <Cookie class="w-5 h-5 text-primary" />
        {$imprint.cookies.title}
      </Card.Title>
    </Card.Header>
    <Card.Content class="flex flex-col gap-4">
      <p class="text-muted-foreground">{$imprint.cookies.description}</p>

      <div class="p-4 bg-muted/30 rounded-lg">
        <h4 class="font-medium mb-2">{$imprint.cookies.noAnalytics.title}</h4>
        <p class="text-sm text-muted-foreground">
          {$imprint.cookies.noAnalytics.description}
        </p>
      </div>

      <div class="p-4 bg-muted/30 rounded-lg">
        <h4 class="font-medium mb-2">{$imprint.cookies.technical.title}</h4>
        <p class="text-sm text-muted-foreground">
          {$imprint.cookies.technical.description}
        </p>
      </div>

      <div class="p-4 bg-muted/30 rounded-lg">
        <h4 class="font-medium mb-2">{$imprint.cookies.thirdParty.title}</h4>
        <p class="text-sm text-muted-foreground">
          {$imprint.cookies.thirdParty.description}
        </p>
      </div>

      <div class="p-4 bg-muted/30 rounded-lg">
        <h4 class="font-medium mb-2">{$imprint.cookies.storage.title}</h4>
        <p class="text-sm text-muted-foreground">
          {$imprint.cookies.storage.description}
        </p>
      </div>

      <button
        type="button"
        onclick={() => {
          if (typeof window !== "undefined") {
            window.dispatchEvent(new CustomEvent("show-cookie-consent"));
          }
        }}
        class="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors w-full sm:w-auto"
      >
        <Cookie class="h-4 w-4" />
        {$cookieConsent.cookieSettings}
      </button>
    </Card.Content>
  </Card.Root>
</div>
