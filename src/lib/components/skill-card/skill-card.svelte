<script lang="ts">
  /**
   * @component SkillCard
   *
   * A compact masonry-compatible card displaying a single technical skill with
   * an avatar icon, title, category badges, and a proficiency progress bar.
   *
   * When an `imagePrint` URL is provided, the component renders two
   * `Avatar.Root` instances: one visible on screen (`print:hidden`) and one
   * visible only in print (`hidden print:flex`). This allows a print-friendly
   * icon (e.g. a monochrome SVG) to replace the screen icon in printed layouts.
   *
   * The `level` prop (0-100) drives a `Progress` bar indicating proficiency.
   *
   * Layout uses shadcn-svelte `Card` with `my-glass` backdrop and
   * `break-inside-avoid` for proper CSS-column masonry behaviour.
   *
   * Renders as a Liquid Glass card with `break-inside-avoid` for CSS-columns masonry.
   * Layout follows iOS grouped List cell pattern with leading avatar, title, and
   * trailing proficiency indicator.
   *
   * @see {@link MasonryGrid} -- Grid wrapper that lays out skill cards in columns
   * @see {@link SkillCardSkeleton} -- Loading placeholder counterpart
   */
  import * as Card from "$lib/components/ui/card";
  import * as Avatar from "$lib/components/ui/avatar";
  import { Badge } from "$lib/components/ui/badge";
  import { Progress } from "$lib/components/ui/progress";
  import { cn } from "$lib/utils";

  /**
   * Props for the SkillCard component.
   *
   * @property {string} image - URL or path to the skill's icon/avatar image (screen display).
   * @property {string} [imagePrint] - Optional alternative image URL used only in print layouts.
   *   When provided, the screen image is hidden via `print:hidden` and this image is shown
   *   via `hidden print:flex`.
   * @property {string} imageAlt - Accessible alt text for the skill icon.
   * @property {string} imageFallback - Short fallback text (e.g. initials) shown while
   *   the avatar image loads or if it fails.
   * @property {string} title - Display name of the skill.
   * @property {string[]} badges - Array of category/tag labels rendered as Badge components.
   * @property {number} level - Proficiency level (0-100) rendered as a Progress bar.
   * @property {string} [category] - Optional category identifier (used for filtering externally).
   */
  interface Props {
    image: string;
    imagePrint?: string;
    imageAlt: string;
    imageFallback: string;
    title: string;
    badges: string[];
    level: number;
    category?: string;
  }

  let {
    image,
    imagePrint,
    imageAlt,
    imageFallback,
    title,
    badges,
    level,
  }: Props = $props();

  // Determine which image to show (print variant handled via CSS media query if needed)
</script>

<Card.Root class={cn("my-glass p-4 mb-4 break-inside-avoid")}>
  <Card.Header class={cn("pb-1")}>
    <div class={cn("flex flex-row items-center gap-3")}>
      {#if imagePrint}
        <Avatar.Root class={cn("print:hidden")}>
          <Avatar.Image src={image} alt={imageAlt} />
          <Avatar.Fallback>{imageFallback}</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root class={cn("hidden print:flex")}>
          <Avatar.Image src={imagePrint} alt={imageAlt} />
          <Avatar.Fallback>{imageFallback}</Avatar.Fallback>
        </Avatar.Root>
      {:else}
        <Avatar.Root>
          <Avatar.Image src={image} alt={imageAlt} />
          <Avatar.Fallback>{imageFallback}</Avatar.Fallback>
        </Avatar.Root>
      {/if}
      <Card.Title>{title}</Card.Title>
    </div>
    <Card.Description>
      <span class={cn("flex flex-wrap gap-2 mt-3")}>
        {#each badges as badge, i}
          <Badge variant="default">{badge}</Badge>
        {/each}
      </span>
    </Card.Description>
  </Card.Header>
  <Card.Content class={cn("pt-1 pb-2")}>
    <Progress value={level} />
  </Card.Content>
</Card.Root>
