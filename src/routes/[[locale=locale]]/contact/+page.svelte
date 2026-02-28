<script lang="ts">
  /**
   * @module routes/[[locale=locale]]/contact/+page
   * @description Contact page featuring an embedded Cal.com meeting scheduler.
   * The page adapts its iframe presentation based on the detected user platform,
   * rendering the calendar inside a device-specific frame mockup:
   *
   * - **Desktop** - Displayed inside a `Safari` browser frame mockup
   * - **iOS** - Displayed inside an `Iphone` device frame mockup
   * - **Android** - Displayed inside an `Android` device frame mockup
   * - **Unknown** - Displayed as a plain bordered iframe
   *
   * Platform detection is performed client-side on mount via user agent sniffing.
   * The calendar iframe is wrapped in `ConsentIframe` for GDPR cookie consent gating
   * under the "contact" consent category.
   *
   * The hero section displays an animated contact title and description with
   * `AuroraText` and `TypingAnimation` components.
   *
   * @state {Platform} platform - Detected user platform, one of "desktop", "ios", "android", or "unknown"
   *
   * Contact page with platform-adaptive device frame -- Safari browser frame on Mac,
   * iPhone frame on iOS, Android frame on Android. Follows Apple's convention of
   * presenting content within contextually appropriate device chrome.
   *
   * @see {@link $lib/components/cookie/ConsentIframe.svelte} for consent-gated iframe embedding
   * @see {@link $lib/components/Safari.svelte} for desktop browser frame mockup
   * @see {@link $lib/components/Iphone.svelte} for iOS device frame mockup
   * @see {@link $lib/components/Android.svelte} for Android device frame mockup
   * @see {@link $lib/contact} for contact detail constants
   */

  import { useIntlayer } from 'svelte-intlayer';
  import * as Card from '$lib/components/ui/card';
  import AuroraText from '$lib/components/AuroraText.svelte';
  import TypingAnimation from '$lib/components/TypingAnimation.svelte';
  import ConsentIframe from '$lib/components/cookie/ConsentIframe.svelte';
  import { Mail, MessageSquare, Calendar } from '@lucide/svelte';
  import { contactDetails } from '$lib/contact';
  import Safari from '$lib/components/Safari.svelte';
  import Iphone from '$lib/components/Iphone.svelte';
  import Android from '$lib/components/Android.svelte';
  import { onMount } from 'svelte';
  import { cn } from '$lib/utils';

  const contact = useIntlayer('contact');
  const sites = useIntlayer('sites');
  const layout = useIntlayer('layout');

  /**
   * Supported platform types for adaptive device frame rendering.
   * @typedef {"desktop" | "ios" | "android" | "unknown"} Platform
   */
  type Platform = "desktop" | "ios" | "android" | "unknown";

  /** @state Current detected platform, determines which device frame to render */
  let platform: Platform = $state("unknown");
  /** @constant The Cal.com booking URL embedded in the calendar iframe */
  const selectedLink = $state("https://cal.com/mcpeapsunterstrichhd");

  /**
   * Detects the user's platform by inspecting the browser user agent string.
   * Returns a `Platform` discriminator used to select the appropriate device frame mockup.
   *
   * @returns {Platform} The detected platform: "ios", "android", "desktop", or "unknown"
   */
  function detectPlatform(): Platform {
    if (typeof navigator === "undefined") return "unknown";
    const userAgent = navigator.userAgent;

    if (/iphone|ipad|ipod/i.test(userAgent)) return "ios";
    if (/android/i.test(userAgent)) return "android";
    if (!/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase())) {
      return "desktop";
    }
    return "unknown";
  }

  onMount(() => {
    platform = detectPlatform();
  });
</script>

<svelte:head>
  <title>{$sites.contact} | {$layout.title}</title>
</svelte:head>

<div class={cn("flex flex-col gap-12 px-6 py-10 lg:px-8 mx-auto min-h-[80vh]")}>
  <!-- Hero Section -->
  <section class={cn("text-center space-y-6")}>
    <AuroraText class={cn("text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold")} colors={['#C16069', '#A2BF8A', '#C16069', '#A2BF8A']} speed={3}>
      <TypingAnimation text={$sites.contact as unknown as string} typeSpeed={145} pauseDelay={1450} deleteSpeed={75} showCursor blinkCursor loop startOnView cursorStyle="underscore" />
    </AuroraText>

    <p class={cn("text-muted-foreground text-xl max-w-2xl mx-auto flex items-center justify-center gap-3")}>
      <MessageSquare class={cn("w-6 h-6 text-primary")} />
      <TypingAnimation text={$contact.description as unknown as string} typeSpeed={145} pauseDelay={1450} deleteSpeed={75} showCursor blinkCursor loop startOnView cursorStyle="underscore" />
    </p>
  </section>

  <!-- Calendar Card -->
  <Card.Root class={cn("my-glass w-full")}>
    <Card.Header class={cn("text-center pb-4")}>
      <Card.Title class={cn("flex items-center justify-center gap-3 text-3xl")}>
        <Calendar class={cn("w-7 h-7 text-primary")} />
        {$contact.bookMeeting}
      </Card.Title>
      <Card.Description class={cn("flex items-center justify-center gap-2")}>
        <Mail class={cn("w-4 h-4 text-primary")} />
        {$contact.calDescription}
      </Card.Description>
    </Card.Header>
    <Card.Content>
      {#if platform === "desktop"}
        <div class={cn("w-full max-w-4xl mx-auto")}>
          <Safari url="https://cal.com/mcpeapsunterstrichhd" className="w-full">
            <ConsentIframe
              category="contact"
              src="https://cal.com/mcpeapsunterstrichhd"
              title="cal.com calendar"
              class={cn("size-full border-0")}
              height="600"
            />
          </Safari>
        </div>
      {:else if platform === "ios"}
        <div class={cn("w-full max-w-sm mx-auto")}>
          <Iphone className="w-full">
            <ConsentIframe
              category="contact"
              src="https://cal.com/mcpeapsunterstrichhd"
              title="cal.com calendar"
              class={cn("size-full border-0")}
              height="600"
            />
          </Iphone>
        </div>
      {:else if platform === "android"}
        <div class={cn("w-full max-w-sm mx-auto")}>
          <Android className="w-full">
            <ConsentIframe
              category="contact"
              src="https://cal.com/mcpeapsunterstrichhd"
              title="cal.com calendar"
              class={cn("size-full border-0")}
              height="600"
            />
          </Android>
        </div>
      {:else}
        <ConsentIframe
          category="contact"
          src="https://cal.com/mcpeapsunterstrichhd"
          title="cal.com calendar"
          class={cn("w-full rounded-lg border border-border")}
          height="600"
        />
      {/if}
    </Card.Content>
  </Card.Root>
</div>
