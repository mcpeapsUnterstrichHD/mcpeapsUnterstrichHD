<script lang="ts">
  /**
   * @module routes/[[locale=locale]]/aboutme/+page
   * @description "About Me" page providing a personal introduction to the portfolio owner.
   * Renders a hero section with animated typing effects for greeting, name, and professional
   * title using `AuroraText` and `TypingAnimation` components.
   *
   * The page includes:
   * - **Hero section** - Animated greeting, name with gradient aurora text, and title tagline
   * - **Description section** - Personal bio text with dynamically calculated age
   *   (born 2003-06-06), injected via `{age}` placeholder replacement
   * - **Music section** - Two cards side-by-side: an embedded Apple Music playlist and a
   *   current song embed via Odesli/song.link, both wrapped in `ConsentIframe` for
   *   GDPR cookie consent gating
   * - **Pinned Projects section** - Displays featured GitHub pinned repositories
   *
   * All text content is internationalized via the Intlayer `aboutme`, `sites`, and `layout`
   * dictionaries accessed through the `t()` helper and `useIntlayer()` stores.
   *
   * About page using iPadOS-style 2-column grid layout on md+ viewports
   * (md:grid-cols-2), collapsing to full-width stack on iOS-class viewports.
   *
   * @see {@link $lib/components/cookie/ConsentIframe.svelte} for consent-gated iframe embedding
   * @see {@link $lib/components/PinnedProjects.svelte} for GitHub pinned repositories display
   * @see {@link $lib/components/AuroraText.svelte} for gradient text animation
   */

  import { useIntlayer } from "svelte-intlayer";
  import * as Card from "$lib/components/ui/card";
  import AuroraText from "$lib/components/AuroraText.svelte";
  import TypingAnimation from "$lib/components/TypingAnimation.svelte";
  import ConsentIframe from "$lib/components/cookie/ConsentIframe.svelte";
  import PinnedProjects from "$lib/components/PinnedProjects.svelte";
  import { Music, Disc3 } from "@lucide/svelte";
  import { t } from "$lib/i18n";
  import { cn } from "$lib/utils";

  const aboutme = useIntlayer("aboutme");
  const sites = useIntlayer("sites");
  const layout = useIntlayer("layout");

  /**
   * Dynamically calculates the portfolio owner's current age based on the
   * birth date of June 6, 2003. Accounts for whether the birthday has
   * occurred yet in the current year.
   */
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

<div class={cn("flex flex-col gap-12 px-6 py-10 lg:px-8 mx-auto")}>
  <!-- Hero Section -->
  <section class={cn("text-center space-y-4")}>
    <p class={cn("text-muted-foreground text-xl")}>
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
      class={cn("text-4xl md:text-5xl lg:text-6xl font-bold")}
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

    <h2 class={cn("text-2xl md:text-3xl text-muted-foreground font-medium")}>
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
  <section class={cn("text-center max-w-3xl mx-auto")}>
    <p class={cn("text-muted-foreground text-lg leading-relaxed whitespace-pre-line")}>
      {t($aboutme, "description").replace("{age}", age.toString())}
    </p>
  </section>

  <!-- Music Section -->
  <section class={cn("grid gap-8 md:grid-cols-2")}>
    <!-- Playlist Card -->
    <Card.Root class={cn("my-glass")}>
      <Card.Header class={cn("pb-2")}>
        <Card.Title class={cn("flex items-center gap-3 text-2xl")}>
          <Music class={cn("w-6 h-6 text-primary")} />
          {t($aboutme, "myPlaylist")}
        </Card.Title>
      </Card.Header>
      <Card.Content>
        <ConsentIframe
          category="multimedia"
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          class={cn("w-full rounded-lg")}
          height="450"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/de/playlist/favorite/pl.u-aZb0kXDFP7zBoV2"
          title={t($aboutme, "myPlaylist")}
        />
      </Card.Content>
    </Card.Root>

    <!-- Current Song Card -->
    <Card.Root class={cn("my-glass")}>
      <Card.Header class={cn("pb-2")}>
        <Card.Title class={cn("flex items-center gap-3 text-2xl")}>
          <Disc3 class={cn("w-6 h-6 text-primary animate-spin")} />
          {t($aboutme, "myCurrentSong")}
        </Card.Title>
      </Card.Header>
      <Card.Content class={cn("flex flex-col gap-4")}>
        <ConsentIframe
          category="multimedia"
          class={cn("w-full rounded-lg")}
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
