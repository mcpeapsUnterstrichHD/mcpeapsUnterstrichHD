<script lang="ts">
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

  const contact = useIntlayer('contact');
  const aboutme = useIntlayer('aboutme');
  const sites = useIntlayer('sites');

  type Platform = "desktop" | "ios" | "android" | "unknown";

  let platform: Platform = $state("unknown");
  const selectedLink = $state("https://cal.com/mcpeapsunterstrichhd");

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
  <title>{$sites.contact} — {$aboutme.name}</title>
</svelte:head>

<div class="flex flex-col gap-8 px-4 py-8 mx-auto min-h-[80vh]">
  <!-- Hero Section -->
  <section class="text-center space-y-4">
    <AuroraText class="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold" colors={['#C16069', '#A2BF8A', '#C16069', '#A2BF8A']} speed={3}>
      <TypingAnimation text={$sites.contact as unknown as string} typeSpeed={145} pauseDelay={1450} deleteSpeed={75} showCursor blinkCursor loop startOnView cursorStyle="underscore" />
    </AuroraText>

    <p class="text-muted-foreground text-lg max-w-xl mx-auto flex items-center justify-center gap-2">
      <MessageSquare class="w-5 h-5" />
      <TypingAnimation text={$contact.description as unknown as string} typeSpeed={145} pauseDelay={1450} deleteSpeed={75} showCursor blinkCursor loop startOnView cursorStyle="underscore" />
    </p>
  </section>

  <!-- Calendar Card -->
  <Card.Root class="my-glass w-full">
    <Card.Header class="text-center pb-4">
      <Card.Title class="flex items-center justify-center gap-2 text-2xl">
        <Calendar class="w-6 h-6 text-primary" />
        {$contact.bookMeeting}
      </Card.Title>
      <Card.Description class="flex items-center justify-center gap-2">
        <Mail class="w-4 h-4" />
        {$contact.calDescription}
      </Card.Description>
    </Card.Header>
    <Card.Content>
      {#if platform === "desktop"}
        <div class="w-full max-w-4xl mx-auto">
          <Safari url="https://cal.com/mcpeapsunterstrichhd" className="w-full">
            <ConsentIframe
              category="contact"
              src="https://cal.com/mcpeapsunterstrichhd"
              title="cal.com calendar"
              class="size-full border-0"
              height="600"
            />
          </Safari>
        </div>
      {:else if platform === "ios"}
        <div class="w-full max-w-sm mx-auto">
          <Iphone className="w-full">
            <ConsentIframe
              category="contact"
              src="https://cal.com/mcpeapsunterstrichhd"
              title="cal.com calendar"
              class="size-full border-0"
              height="600"
            />
          </Iphone>
        </div>
      {:else if platform === "android"}
        <div class="w-full max-w-sm mx-auto">
          <Android className="w-full">
            <ConsentIframe
              category="contact"
              src="https://cal.com/mcpeapsunterstrichhd"
              title="cal.com calendar"
              class="size-full border-0"
              height="600"
            />
          </Android>
        </div>
      {:else}
        <ConsentIframe
          category="contact"
          src="https://cal.com/mcpeapsunterstrichhd"
          title="cal.com calendar"
          class="w-full rounded-lg border border-border"
          height="600"
        />
      {/if}
    </Card.Content>
  </Card.Root>
</div>
