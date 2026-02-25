<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import * as Avatar from '$lib/components/ui/avatar';
  import { Badge } from '$lib/components/ui/badge';

  interface Props {
    image: string;
    imageAlt: string;
    imageFallback: string;
    title: string;
    badges: string[];
    children?: import('svelte').Snippet;
  }

  let { image, imageAlt, imageFallback, title, badges, children }: Props = $props();
</script>

<Card.Root class="my-glass">
  <Card.Header>
    <div class="flex flex-row items-center justify-between gap-1">
      <Avatar.Root>
        <Avatar.Image src={image} alt={imageAlt} />
        <Avatar.Fallback>{imageFallback}</Avatar.Fallback>
      </Avatar.Root>
      <Card.Title>{title}</Card.Title>
    </div>
    <Card.Description>
      <span class="flex flex-wrap gap-2">
        {#each badges as badge}
          <Badge variant="default">{badge}</Badge>
        {/each}
      </span>
    </Card.Description>
  </Card.Header>
  <Card.Content>
    {#if children}
      {@render children()}
    {/if}
  </Card.Content>
</Card.Root>
