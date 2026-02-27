<script lang="ts">
  import { useIntlayer } from "svelte-intlayer";
  import * as Card from "$lib/components/ui/card";
  import AuroraText from "$lib/components/AuroraText.svelte";
  import TypingAnimation from "$lib/components/TypingAnimation.svelte";
  import ConsentIframe from "$lib/components/cookie/ConsentIframe.svelte";
  import PinnedProjects from "$lib/components/PinnedProjects.svelte";
  import { Music, Disc3 } from "@lucide/svelte";
  import { t } from "$lib/i18n";

  const aboutme = useIntlayer("aboutme");
  const sites = useIntlayer("sites");
  const layout = useIntlayer("layout");

  // Calculate age dynamically
  const today = new Date();
  const birthday = new Date("2003-06-06");
  let age = today.getFullYear() - birthday.getFullYear();
  const mo = today.getMonth() - birthday.getMonth();
  if (mo < 0 || (mo === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
</script>

<svelte:head>
  <title>{t($sites, "aboutme")} | {$layout.title}</title>
</svelte:head>

<div class="flex flex-col gap-8 px-4 py-6 mx-auto">
  <!-- Hero Section -->
  <section class="text-center space-y-3">
    <p class="text-muted-foreground text-lg">
      <TypingAnimation
        text="{t($aboutme, 'hello')} 󱠢"
        typeSpeed={145}
        pauseDelay={1450}
        deleteSpeed={75}
        showCursor
        blinkCursor
        loop
        startOnView
        cursorStyle="underscore"
      />
    </p>

    <AuroraText
      class="text-4xl md:text-5xl lg:text-6xl font-bold"
      colors={["#C16069", "#A2BF8A", "#C16069", "#A2BF8A"]}
      speed={3}
    >
      <TypingAnimation
        text="{t($aboutme, 'iam')} {t($aboutme, 'name')}"
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

    <h2 class="text-xl md:text-2xl text-muted-foreground font-medium">
      <TypingAnimation
        text={t($aboutme, "title")}
        typeSpeed={145}
        pauseDelay={1450}
        deleteSpeed={75}
        showCursor
        blinkCursor
        loop
        startOnView
        cursorStyle="underscore"
      />
    </h2>
  </section>

  <!-- Description -->
  <section class="text-center max-w-2xl mx-auto">
    <p class="text-muted-foreground leading-relaxed whitespace-pre-line">
      {t($aboutme, "description").replace("{age}", age.toString())}
    </p>
  </section>

  <!-- Music Section -->
  <section class="grid gap-6 md:grid-cols-2">
    <!-- Playlist Card -->
    <Card.Root class="my-glass">
      <Card.Header class="pb-2">
        <Card.Title class="flex items-center gap-2 text-xl">
          <Music class="w-5 h-5 text-primary" />
          {t($aboutme, "myPlaylist")}
        </Card.Title>
      </Card.Header>
      <Card.Content>
        <ConsentIframe
          category="multimedia"
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          class="w-full rounded-lg"
          height="450"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/de/playlist/favorite/pl.u-aZb0kXDFP7zBoV2"
          title={t($aboutme, "myPlaylist")}
        />
      </Card.Content>
    </Card.Root>

    <!-- Current Song Card -->
    <Card.Root class="my-glass">
      <Card.Header class="pb-2">
        <Card.Title class="flex items-center gap-2 text-xl">
          <Disc3 class="w-5 h-5 text-primary animate-spin" />
          {t($aboutme, "myCurrentSong")}
        </Card.Title>
      </Card.Header>
      <Card.Content class="flex flex-col gap-4">
        <ConsentIframe
          category="multimedia"
          class="w-full rounded-lg"
          height="450"
          src="https://odesli.co/embed/?url=https%3A%2F%2Fsong.link%2Ffestival_dream&theme=dark"
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"
          allow="clipboard-read; clipboard-write"
          title={t($aboutme, "myCurrentSong")}
        />
      </Card.Content>
    </Card.Root>
  </section>

  <!-- Pinned Projects -->
  <section>
    <PinnedProjects />
  </section>
</div>
