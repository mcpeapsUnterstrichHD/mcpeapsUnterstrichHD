<script lang="ts">
  /**
   * @component LinkCard
   *
   * A compact masonry-compatible card representing a single external link entry
   * on the Linkhub page. Displays a small icon, title, heading subtitle, and a
   * description inside a shadcn-svelte `Card` with `my-glass` frosted-glass
   * backdrop. Link entry card following iOS cell pattern -- leading icon (32x32),
   * title with subtitle, and description. Uses Liquid Glass material for
   * translucent Nord-themed surface.
   *
   * All links open in a new tab (`target="_blank"`) with `rel="noopener noreferrer"`
   * for security.
   *
   * Layout uses `break-inside-avoid` for proper CSS-column masonry behaviour
   * within a {@link MasonryGrid}.
   *
   * @see {@link MasonryGrid} -- Grid wrapper that lays out link cards in columns
   * @see {@link LinkCardSkeleton} -- Loading placeholder counterpart
   */
  import * as Card from '$lib/components/ui/card';
  import { cn } from '$lib/utils';

  /**
   * Props for the LinkCard component.
   *
   * @property {string} title - Display title of the link entry.
   * @property {string} description - Brief descriptive text shown below the heading.
   * @property {string} heading - Subtitle/category label displayed under the title.
   * @property {string} url - External URL opened in a new tab when the card is clicked.
   * @property {string} icon - URL or path to the link's icon image (rendered at 32x32).
   */
  interface Props {
    title: string;
    description: string;
    heading: string;
    url: string;
    icon: string;
  }

  let { title, description, heading, url, icon }: Props = $props();
</script>

<div class={cn("break-inside-avoid mb-4")}>
  <a href={url} target="_blank" rel="noopener noreferrer">
    <Card.Root class={cn("my-glass")}>
      <Card.Header>
        <div class={cn("flex items-center gap-3")}>
          <img src={icon} alt={title} class={cn("w-8 h-8 rounded")} />
          <div>
            <Card.Title class={cn("text-base")}>{title}</Card.Title>
            <p class={cn("text-sm text-muted-foreground")}>{heading}</p>
          </div>
        </div>
        <Card.Description>{description}</Card.Description>
      </Card.Header>
    </Card.Root>
  </a>
</div>
