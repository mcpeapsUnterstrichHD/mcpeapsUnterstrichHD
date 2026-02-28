<script lang="ts">
  /**
   * @module routes/[[locale=locale]]/+page
   * @description Home / landing page of the portfolio website. Displays a fullscreen
   * hero section with animated typing effects for the greeting, name, and professional
   * title. The name is rendered with an `AuroraText` gradient animation using
   * Nord-inspired colors (#C16069 red / #A2BF8A green).
   *
   * Below the hero text, four call-to-action buttons link to the main sections:
   * About Me, Projects, CV, and Contact. All links are locale-aware via
   * `getLocalizedUrl()`, ensuring correct routing under the optional locale prefix.
   *
   * The page uses multiple Intlayer content dictionaries:
   * - `aboutme` - for name, greeting, title
   * - `sites` - for navigation labels
   * - `layout` - for the site-wide title
   * - `recommendation` - for CTA button labels
   *
   * Hero landing page with centered content following iOS onboarding screen
   * patterns. Typography scales responsively across Apple viewport classes
   * (4xl iPhone to 8xl Mac).
   *
   * @see {@link $lib/components/AuroraText.svelte} for the gradient text animation
   * @see {@link $lib/components/TypingAnimation.svelte} for the typewriter effect
   */

  import { useIntlayer } from 'svelte-intlayer';
  import { getLocalizedUrl, type Locale } from 'intlayer';
  import { useLocale } from 'svelte-intlayer';
  import AuroraText from '$lib/components/AuroraText.svelte';

  const { locale } = useLocale();
  import TypingAnimation from '$lib/components/TypingAnimation.svelte';
  import { User, FolderOpen, FileText, Mail } from '@lucide/svelte';
  import * as Button from '$lib/components/ui/button';

  const aboutme = useIntlayer('aboutme');
  const sites = useIntlayer('sites');
  const layout = useIntlayer('layout');
  const recommendation = useIntlayer('recommendation');
</script>

<svelte:head>
  <title>{$aboutme.name} — {$aboutme.title} | {$layout.title}</title>
  <meta name="description" content={$aboutme.title} />
</svelte:head>

<div class="flex flex-col items-center justify-center min-h-[90vh] w-full relative px-6 lg:px-8">
  <!-- Hero Content -->
  <div class="flex flex-col items-center gap-6 text-center">
    <!-- Animated Greeting -->
    <div class="text-muted-foreground text-xl md:text-2xl lg:text-3xl animate-fade-in">
      <TypingAnimation
        text="{$aboutme.hello} 󱠢 {$aboutme.iam}"
        typeSpeed={145}
        pauseDelay={1450}
        deleteSpeed={75}
        showCursor
        blinkCursor
        loop
        startOnView
        cursorStyle="underscore"
      />
    </div>

    <!-- Animated Name with Gradient -->
    <AuroraText
      class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold rounded-sm"
      colors={['#C16069', '#A2BF8A', '#C16069', '#A2BF8A', '#C16069', '#A2BF8A', '#C16069']}
      speed={3}
    >
      <TypingAnimation
        text={$aboutme.name}
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

    <!-- Animated Title/Tagline -->
    <div class="text-2xl md:text-3xl lg:text-4xl text-muted-foreground mt-4">
      <TypingAnimation
        text={$aboutme.title as unknown as string}
        typeSpeed={145}
        pauseDelay={1450}
        deleteSpeed={75}
        showCursor
        blinkCursor
        loop
        startOnView
        cursorStyle="underscore"
      />
    </div>

    <!-- CTA Buttons -->
    <div class="flex flex-wrap gap-4 mt-12 justify-center">
      <Button.Root href={getLocalizedUrl('/aboutme', $locale as Locale)} variant="default" size="lg" class="group gap-2">
        <User class="w-4 h-4 group-hover:scale-110 transition-transform" />
        {$recommendation.aboutme.action.label}
      </Button.Root>
      <Button.Root href={getLocalizedUrl('/projects', $locale as Locale)} variant="secondary" size="lg" class="group gap-2">
        <FolderOpen class="w-4 h-4 group-hover:scale-110 transition-transform" />
        {$recommendation.projects.action.label}
      </Button.Root>
      <Button.Root href={getLocalizedUrl('/cv', $locale as Locale)} variant="outline" size="lg" class="my-glass group gap-2">
        <FileText class="w-4 h-4 group-hover:scale-110 transition-transform" />
        {$recommendation.cv.action.label}
      </Button.Root>
      <Button.Root href={getLocalizedUrl('/contact', $locale as Locale)} variant="ghost" size="lg" class="group gap-2">
        <Mail class="w-4 h-4 group-hover:scale-110 transition-transform" />
        {$sites.contact}
      </Button.Root>
    </div>
  </div>
</div>
