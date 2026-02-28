<script lang="ts">
  /**
   * @module routes/[[locale=locale]]/imprint/+page
   * @description Legal imprint (Impressum) page required by German TMG (Telemediengesetz)
   * and RStV (Rundfunkstaatsvertrag) regulations. Displays mandatory legal information
   * including the site operator's identity, contact details, and responsible person.
   *
   * The page is structured into the following sections:
   *
   * 1. **Hero Section** - Animated imprint title with aurora gradient text
   * 2. **Legal Info Cards** (2-column grid):
   *    - TMG Section 5 card with operator name and address
   *    - Contact card with email and phone links
   * 3. **Responsible Person (RStV)** - Name and address of the person responsible
   *    for editorial content per the Interstate Broadcasting Treaty
   * 4. **Cookie Disclaimer** - Comprehensive cookie/privacy information including:
   *    - No analytics tracking statement
   *    - Technical cookies explanation
   *    - Third-party content cookies explanation
   *    - Local storage usage explanation
   *    - Button to re-open the cookie consent settings dialog (dispatches
   *      `show-cookie-consent` custom window event)
   *
   * Contact details are sourced from `$lib/contact`. Address strings are localized
   * via the Intlayer `cv` dictionary (city/country names). All text is internationalized
   * via the `imprint`, `aboutme`, `cv`, `cookieConsent`, and `layout` dictionaries.
   *
   * Legal imprint page with simple scrollable content layout, following Apple's
   * minimal legal information presentation pattern.
   *
   * @see {@link $lib/contact} for structured contact detail constants
   * @see {@link $lib/components/cookie/CookieConsent.svelte} for the cookie consent dialog
   */

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
  import AuroraText from "$lib/components/AuroraText.svelte";
  import TypingAnimation from "$lib/components/TypingAnimation.svelte";
  import * as Card from "$lib/components/ui/card";
  import { cn } from "$lib/utils";

  const imprint = useIntlayer("imprint");
  const cv = useIntlayer("cv");
  const cookieConsent = useIntlayer("cookieConsent");
  const layout = useIntlayer("layout");
</script>

<svelte:head>
  <title>{$imprint.title} | {$layout.title}</title>
</svelte:head>

<div class={cn("flex flex-col gap-12 px-6 py-10 lg:px-8 mx-auto")}>
  <!-- Hero Section -->
  <section class={cn("text-center")}>
    <AuroraText
      class={cn("text-4xl md:text-5xl lg:text-6xl font-bold")}
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
  <div class={cn("grid gap-8 md:grid-cols-2")}>
    <!-- § 5 TMG Section -->
    <Card.Root class={cn("my-glass")}>
      <Card.Header>
        <Card.Title class={cn("flex items-center gap-3 text-2xl")}>
          <Scale class={cn("w-6 h-6 text-primary")} />
          {$imprint.tmg.title}
        </Card.Title>
      </Card.Header>
      <Card.Content>
        <a
          href={contactDetails.address.link}
          target="_blank"
          rel="noreferrer"
          class={cn("flex items-start gap-2 hover:text-primary transition-colors")}
        >
          <MapPin class={cn("w-4 h-4 mt-1 shrink-0")} />
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
    <Card.Root class={cn("my-glass")}>
      <Card.Header>
        <Card.Title class={cn("flex items-center gap-3 text-2xl")}>
          <User class={cn("w-6 h-6 text-primary")} />
          {$imprint.contact.title}
        </Card.Title>
      </Card.Header>
      <Card.Content class={cn("flex flex-col gap-4")}>
        <a
          href={contactDetails.email.link}
          target="_blank"
          rel="noreferrer"
          class={cn("flex items-center gap-3 hover:text-primary transition-colors")}
        >
          <Mail class={cn("w-4 h-4")} />
          {contactDetails.email.display}
        </a>
        <a
          href={contactDetails.telephone.link}
          target="_blank"
          rel="noreferrer"
          class={cn("flex items-center gap-2 hover:text-primary transition-colors")}
        >
          <Phone class={cn("w-4 h-4")} />
          {contactDetails.telephone.display}
        </a>
      </Card.Content>
    </Card.Root>
  </div>

  <!-- Responsible Person Section -->
  <Card.Root class={cn("my-glass")}>
    <Card.Header>
      <Card.Title class={cn("flex items-center gap-3 text-2xl")}>
        <Scale class={cn("w-6 h-6 text-primary")} />
        {$imprint.rstv.title}
      </Card.Title>
    </Card.Header>
    <Card.Content>
      <a
        href={contactDetails.address.link}
        target="_blank"
        rel="noreferrer"
        class={cn("flex items-start gap-2 hover:text-primary transition-colors")}
      >
        <MapPin class={cn("w-4 h-4 mt-1 shrink-0")} />
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
  <Card.Root class={cn("my-glass")}>
    <Card.Header>
      <Card.Title class={cn("flex items-center gap-3 text-2xl")}>
        <Cookie class={cn("w-6 h-6 text-primary")} />
        {$imprint.cookies.title}
      </Card.Title>
    </Card.Header>
    <Card.Content class={cn("flex flex-col gap-5")}>
      <p class={cn("text-muted-foreground text-lg")}>{$imprint.cookies.description}</p>

      <div class={cn("p-5 bg-muted/30 rounded-lg")}>
        <h4 class={cn("font-medium text-lg mb-3")}>{$imprint.cookies.noAnalytics.title}</h4>
        <p class={cn("text-muted-foreground")}>
          {$imprint.cookies.noAnalytics.description}
        </p>
      </div>

      <div class={cn("p-5 bg-muted/30 rounded-lg")}>
        <h4 class={cn("font-medium text-lg mb-3")}>{$imprint.cookies.technical.title}</h4>
        <p class={cn("text-muted-foreground")}>
          {$imprint.cookies.technical.description}
        </p>
      </div>

      <div class={cn("p-5 bg-muted/30 rounded-lg")}>
        <h4 class={cn("font-medium text-lg mb-3")}>{$imprint.cookies.thirdParty.title}</h4>
        <p class={cn("text-muted-foreground")}>
          {$imprint.cookies.thirdParty.description}
        </p>
      </div>

      <div class={cn("p-5 bg-muted/30 rounded-lg")}>
        <h4 class={cn("font-medium text-lg mb-3")}>{$imprint.cookies.storage.title}</h4>
        <p class={cn("text-muted-foreground")}>
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
        class={cn("inline-flex items-center justify-center gap-3 px-8 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors w-full sm:w-auto")}
      >
        <Cookie class={cn("h-5 w-5")} />
        {$cookieConsent.cookieSettings}
      </button>
    </Card.Content>
  </Card.Root>
</div>
