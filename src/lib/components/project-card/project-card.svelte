<script lang="ts">
  import type { Snippet } from 'svelte';
  import * as Card from '$lib/components/ui/card';
  import { Badge } from '$lib/components/ui/badge';
  import { getLocalizedUrl, type Locale } from 'intlayer';
  import { useLocale } from 'svelte-intlayer';
  import Lens from '$lib/components/Lens.svelte';

  const { locale } = useLocale();

  interface Props {
    projektImage: string;
    projektImageAlt: string;
    projektImageBgColor?: string;
    projektTitle: string;
    projektBadges: string[];
    projektLink: string;
    children: Snippet;
  }

  let {
    projektImage,
    projektImageAlt,
    projektImageBgColor = '',
    projektTitle,
    projektBadges,
    projektLink,
    children
  }: Props = $props();

  let isExternal = $derived(projektLink?.startsWith('http://') || projektLink?.startsWith('https://'));
  let href = $derived(isExternal ? projektLink : getLocalizedUrl(projektLink, $locale as Locale));
  let target = $derived(isExternal ? '_blank' : undefined);
  let rel = $derived(isExternal ? 'noopener noreferrer' : undefined);
</script>

<a {href} {target} {rel} class="break-inside-avoid mb-4 block">
  <Card.Root class="my-glass">
    <Card.Header>
      <Card.Title>{projektTitle}</Card.Title>
      <Card.Description>
        <span class="flex flex-wrap gap-2">
          {#each projektBadges as badge}
            <Badge variant="default">{badge}</Badge>
          {/each}
        </span>
      </Card.Description>
    </Card.Header>
    <Card.Content>
      <section class="flex flex-col justify-between gap-4">
        <p>{@render children()}</p>
      </section>
    </Card.Content>
    <Card.Footer class="flex grow flex-col items-center justify-center gap-4 p-4">
      <section class="flex items-center justify-center rounded-sm w-full">
        <Lens zoomFactor={2} lensSize={150} ariaLabel="Zoom Area">
          <img
            src={projektImage}
            alt={projektImageAlt}
            class="{projektImageBgColor || 'bg-background'} w-full p-4 rounded-sm object-contain"
          />
        </Lens>
      </section>
    </Card.Footer>
  </Card.Root>
</a>
