<script lang="ts">
  import * as Card from '$lib/components/ui/card';

  interface Props {
    title: string;
    description: string;
    heading: string;
    url: string;
    icon: string;
  }

  let { title, description, heading, url, icon }: Props = $props();
</script>

<div class="break-inside-avoid mb-4">
  <a href={url} target="_blank" rel="noopener noreferrer">
    <Card.Root class="my-glass">
      <Card.Header>
        <div class="flex items-center gap-3">
          <img src={icon} alt={title} class="w-8 h-8 rounded" />
          <div>
            <Card.Title class="text-base">{title}</Card.Title>
            <p class="text-sm text-muted-foreground">{heading}</p>
          </div>
        </div>
        <Card.Description>{description}</Card.Description>
      </Card.Header>
    </Card.Root>
  </a>
</div>
