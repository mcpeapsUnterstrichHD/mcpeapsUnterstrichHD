<script lang="ts">
  /**
   * @component ProjectCard
   *
   * A card component that showcases a single project in the portfolio's masonry
   * grid layout. Each card displays the project title, technology badges, a
   * descriptive snippet (rendered via Svelte `children` snippet), and a zoomable
   * project image powered by the {@link Lens} component.
   *
   * The card wraps everything in an `<a>` tag. Internal links are localized via
   * `intlayer`'s `getLocalizedUrl`, while external links open in a new tab with
   * `noopener noreferrer` for security.
   *
   * Uses the shadcn-svelte Card primitives (`Card.Root`, `Card.Header`, etc.)
   * with a `my-glass` glassmorphism class for the Nord-themed frosted appearance.
   *
   * Uses Liquid Glass material (my-glass) for translucent card surface. Placed in
   * CSS-columns masonry layout matching iPadOS UICollectionView flow pattern --
   * 1 column on iPhone, 2-3 on iPad, 3-4 on Mac.
   *
   * @see {@link project-card-skeleton.svelte} for the loading placeholder variant.
   *
   * @example
   * ```svelte
   * <ProjectCard
   *   projektImage="/images/my-app.png"
   *   projektImageAlt="Screenshot of My App"
   *   projektTitle="My App"
   *   projektBadges={['SvelteKit', 'TypeScript', 'Tailwind']}
   *   projektLink="/projects/my-app"
   * >
   *   A brief description of the project.
   * </ProjectCard>
   * ```
   */
  import type { Snippet } from 'svelte';
  import * as Card from '$lib/components/ui/card';
  import { Badge } from '$lib/components/ui/badge';
  import { getLocalizedUrl, type Locale } from 'intlayer';
  import { useLocale } from 'svelte-intlayer';
  import Lens from '$lib/components/Lens.svelte';

  /** The current locale from svelte-intlayer, used to localize internal project links. */
  const { locale } = useLocale();

  /**
   * Props for the ProjectCard component.
   *
   * @property {string} projektImage - URL or path to the project screenshot/image.
   * @property {string} projektImageAlt - Alt text for the project image (accessibility).
   * @property {string} [projektImageBgColor=''] - Optional Tailwind background color class
   *   for the image container. Defaults to 'bg-background' if not provided.
   * @property {string} projektTitle - Display title of the project.
   * @property {string[]} projektBadges - Array of technology/tag labels rendered as Badge components.
   * @property {string} projektLink - URL to navigate to when the card is clicked. Internal
   *   paths are localized; external URLs (http/https) open in a new tab.
   * @property {Snippet} children - Svelte snippet for the project description content.
   */
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

  /** Whether `projektLink` points to an external URL (starts with http:// or https://). */
  let isExternal = $derived(projektLink?.startsWith('http://') || projektLink?.startsWith('https://'));
  /** The resolved href -- external links pass through unchanged; internal links are localized. */
  let href = $derived(isExternal ? projektLink : getLocalizedUrl(projektLink, $locale as Locale));
  /** External links open in a new tab; internal links use default navigation. */
  let target = $derived(isExternal ? '_blank' : undefined);
  /** Security attributes for external links to prevent reverse tabnabbing. */
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
