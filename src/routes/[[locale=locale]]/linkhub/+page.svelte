<script lang="ts">
  import { useIntlayer } from 'svelte-intlayer';
  import * as Card from '$lib/components/ui/card';
  import AuroraText from '$lib/components/AuroraText.svelte';
  import TypingAnimation from '$lib/components/TypingAnimation.svelte';
  import ConsentIframe from '$lib/components/cookie/ConsentIframe.svelte';
  import MasonryGrid from '$lib/components/MasonryGrid.svelte';
  import * as LinkCard from '$lib/components/link-card';
  import { Share2, Globe, MoreHorizontal } from '@lucide/svelte';

  const linkhub = useIntlayer('linkhub');
  const aboutme = useIntlayer('aboutme');
  const sites = useIntlayer('sites');
  const layout = useIntlayer('layout');

  const spotifyUrl = "https://open.spotify.com/embed/track/25S3D2lEwF25iur275I4d4?utm_source=generator&theme=0";
</script>

<svelte:head>
  <title>{$sites.linkhub} | {$layout.title}</title>
</svelte:head>

<div class="flex flex-col gap-8 px-4 py-6 mx-auto">
  <!-- Hero Section -->
  <section class="text-center space-y-3">
    <AuroraText class="text-4xl md:text-5xl lg:text-6xl font-bold" colors={['#C16069', '#A2BF8A', '#C16069', '#A2BF8A']} speed={3}>
      <TypingAnimation text={$aboutme.name as unknown as string} typeSpeed={145} pauseDelay={1450} deleteSpeed={75} showCursor blinkCursor loop startOnView cursorStyle="underscore" />
    </AuroraText>
    <p class="text-muted-foreground text-lg">
      {$linkhub.description}
    </p>
  </section>

  <!-- Social Media Section -->
  <section class="space-y-4">
    <h2 class="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2">
      <Share2 class="w-6 h-6 text-primary" />
      <TypingAnimation text={$linkhub.sections.socialMedia.title as unknown as string} typeSpeed={145} pauseDelay={1450} deleteSpeed={75} showCursor blinkCursor loop startOnView cursorStyle="underscore" />
    </h2>
    <MasonryGrid variant="links">
      <LinkCard.Root title={$linkhub.sections.socialMedia.instagram.title as unknown as string} description={$linkhub.sections.socialMedia.instagram.description as unknown as string} heading={$linkhub.sections.socialMedia.instagram.headding as unknown as string} url="https://instagram.com/mcpeaps_hd" icon="/pictures/linkhub/instagram-dark.svg" />
      <LinkCard.Root title={$linkhub.sections.socialMedia.tiktok.title as unknown as string} description={$linkhub.sections.socialMedia.tiktok.description as unknown as string} heading={$linkhub.sections.socialMedia.tiktok.headding as unknown as string} url="https://www.tiktok.com/@mcpeaps_hd" icon="/pictures/linkhub/tiktok.svg" />
      <LinkCard.Root title={$linkhub.sections.socialMedia.threads.title as unknown as string} description={$linkhub.sections.socialMedia.threads.description as unknown as string} heading={$linkhub.sections.socialMedia.threads.headding as unknown as string} url="https://www.threads.net/@mcpeaps_hd" icon="/pictures/linkhub/threads-dark.svg" />
      <LinkCard.Root title={$linkhub.sections.socialMedia.bsky.title as unknown as string} description={$linkhub.sections.socialMedia.bsky.description as unknown as string} heading={$linkhub.sections.socialMedia.bsky.headding as unknown as string} url="https://bsky.mcpeapsunterstrichhd.dev" icon="/pictures/linkhub/bsky.svg" />
      <LinkCard.Root title={$linkhub.sections.socialMedia.twitter.title as unknown as string} description={$linkhub.sections.socialMedia.twitter.description as unknown as string} heading={$linkhub.sections.socialMedia.twitter.headding as unknown as string} url="https://x.com/mcpeaps_HD" icon="/pictures/linkhub/twitter-dark.svg" />
      <LinkCard.Root title={$linkhub.sections.socialMedia.discord.title as unknown as string} description={$linkhub.sections.socialMedia.discord.description as unknown as string} heading={$linkhub.sections.socialMedia.discord.headding as unknown as string} url="https://discord.gg/XHGTbb4mTF" icon="/pictures/linkhub/discord.svg" />
      <LinkCard.Root title={$linkhub.sections.socialMedia.youtube.title as unknown as string} description={$linkhub.sections.socialMedia.youtube.description as unknown as string} heading={$linkhub.sections.socialMedia.youtube.headding as unknown as string} url="https://youtube.com/@mcpeaps_HD" icon="/pictures/linkhub/youtube.svg" />
    </MasonryGrid>
  </section>

  <!-- Websites Section -->
  <section class="space-y-4">
    <h2 class="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2">
      <Globe class="w-6 h-6 text-primary" />
      <TypingAnimation text={$linkhub.sections.websites.title as unknown as string} typeSpeed={145} pauseDelay={1450} deleteSpeed={75} showCursor blinkCursor loop startOnView cursorStyle="underscore" />
    </h2>
    <MasonryGrid variant="links">
      <LinkCard.Root title={$linkhub.sections.websites.myWebsite.title as unknown as string} description={$linkhub.sections.websites.myWebsite.description as unknown as string} heading={$linkhub.sections.websites.myWebsite.headding as unknown as string} url="https://mcpeapsunterstrichhd.dev" icon="/pictures/logo.png" />
      <LinkCard.Root title={$linkhub.sections.websites.cbps.title as unknown as string} description={$linkhub.sections.websites.cbps.description as unknown as string} heading={$linkhub.sections.websites.cbps.headding as unknown as string} url="https://comboompunktsucht.app" icon="/pictures/cbps_logo.png" />
      <LinkCard.Root title={$linkhub.sections.websites.blogCBPS.title as unknown as string} description={$linkhub.sections.websites.blogCBPS.description as unknown as string} heading={$linkhub.sections.websites.blogCBPS.headding as unknown as string} url="https://blog.comboompunktsucht.app" icon="/pictures/cbps_logo.png" />
    </MasonryGrid>
  </section>

  <!-- Other Section -->
  <section class="space-y-4">
    <h2 class="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2">
      <MoreHorizontal class="w-6 h-6 text-primary" />
      <TypingAnimation text={$linkhub.sections.other.title as unknown as string} typeSpeed={145} pauseDelay={1450} deleteSpeed={75} showCursor blinkCursor loop startOnView cursorStyle="underscore" />
    </h2>
    <MasonryGrid variant="links">
      <LinkCard.Root title={$linkhub.sections.other.github.title as unknown as string} description={$linkhub.sections.other.github.description as unknown as string} heading={$linkhub.sections.other.github.headding as unknown as string} url="https://github.com/mcpeapsUnterstrichHD" icon="/pictures/linkhub/github-dark.svg" />
      <!-- Playlist with embed -->
      <div class="break-inside-avoid mb-4">
        <a href="https://music.apple.com/de/playlist/favorite/pl.u-aZb0kXDFP7zBoV2" target="_blank" rel="noopener noreferrer">
          <Card.Root class="my-glass">
            <Card.Header>
              <div class="flex items-center gap-3">
                <img src="/pictures/linkhub/apple-musik.svg" alt="Apple Music" class="w-8 h-8 rounded" />
                <div>
                  <Card.Title class="text-base">{$linkhub.sections.other.playlist.title}</Card.Title>
                  <p class="text-sm text-muted-foreground">{$linkhub.sections.other.playlist.headding}</p>
                </div>
              </div>
              <Card.Description>{$linkhub.sections.other.playlist.description}</Card.Description>
            </Card.Header>
            <Card.Content>
              <ConsentIframe
                category="multimedia"
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
                class="w-full rounded-lg"
                height="450"
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src="https://embed.music.apple.com/de/playlist/favorite/pl.u-aZb0kXDFP7zBoV2"
                title={$linkhub.sections.other.playlist.description as unknown as string}
              />
            </Card.Content>
          </Card.Root>
        </a>
      </div>
      <!-- Song with embed -->
      <div class="break-inside-avoid mb-4">
        <a href="https://song.link/festival_dream&theme=dark" target="_blank" rel="noopener noreferrer">
          <Card.Root class="my-glass">
            <Card.Header>
              <div class="flex items-center gap-3">
                <img src="/pictures/linkhub/apple-musik.svg" alt="Apple Music" class="w-8 h-8 rounded" />
                <div>
                  <Card.Title class="text-base">{$linkhub.sections.other.song.title}</Card.Title>
                  <p class="text-sm text-muted-foreground">{$linkhub.sections.other.song.headding}</p>
                </div>
              </div>
              <Card.Description>{$linkhub.sections.other.song.description}</Card.Description>
            </Card.Header>
            <Card.Content>
              <ConsentIframe
                category="multimedia"
                class="w-full rounded-lg"
                height="450"
                src="https://odesli.co/embed/?url=https%3A%2F%2Fsong.link%2Ffestival_dream&theme=dark"
                allowFullScreen
                sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"
                allow="clipboard-read; clipboard-write"
                title={$linkhub.sections.other.song.description as unknown as string}
              />
            </Card.Content>
          </Card.Root>
        </a>
      </div>
    </MasonryGrid>
  </section>
</div>
