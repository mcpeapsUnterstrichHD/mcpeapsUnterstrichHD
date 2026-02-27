<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import * as Avatar from "$lib/components/ui/avatar";
  import { Badge } from "$lib/components/ui/badge";
  import { Progress } from "$lib/components/ui/progress";

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

<Card.Root class="my-glass p-4 mb-4 break-inside-avoid">
  <Card.Header class="pb-1">
    <div class="flex flex-row items-center gap-3">
      {#if imagePrint}
        <Avatar.Root class="print:hidden">
          <Avatar.Image src={image} alt={imageAlt} />
          <Avatar.Fallback>{imageFallback}</Avatar.Fallback>
        </Avatar.Root>
        <Avatar.Root class="hidden print:flex">
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
      <span class="flex flex-wrap gap-2 mt-3">
        {#each badges as badge, i}
          <Badge variant="default">{badge}</Badge>
        {/each}
      </span>
    </Card.Description>
  </Card.Header>
  <Card.Content class="pt-1 pb-2">
    <Progress value={level} />
  </Card.Content>
</Card.Root>
