<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import { Skeleton } from '$lib/components/ui/skeleton';

  interface Props {
    showImage?: boolean;
    showHeader?: boolean;
    showFooter?: boolean;
    contentLines?: number;
    class?: string;
    children?: import('svelte').Snippet;
  }

  let {
    showImage = false,
    showHeader = true,
    showFooter = false,
    contentLines = 3,
    class: className = '',
    children,
  }: Props = $props();
</script>

<Card.Root class="bg-card/50 backdrop-blur-sm animate-in fade-in duration-500 {className}">
  {#if showImage}
    <Skeleton class="h-40 w-full rounded-t-lg rounded-b-none" />
  {/if}

  {#if showHeader}
    <Card.Header class="pb-2">
      <div class="flex items-center gap-2">
        <Skeleton class="h-5 w-5 rounded-full" />
        <Skeleton class="h-5 w-32" />
      </div>
    </Card.Header>
  {/if}

  <Card.Content class="space-y-2">
    {#if children}
      {@render children()}
    {:else}
      {#each Array(contentLines) as _, i}
        <Skeleton class="h-4" style="width: {100 - i * 15}%" />
      {/each}
    {/if}
  </Card.Content>

  {#if showFooter}
    <div class="px-4 pb-4 pt-2 flex gap-2">
      <Skeleton class="h-8 w-20 rounded-md" />
      <Skeleton class="h-8 w-20 rounded-md" />
    </div>
  {/if}
</Card.Root>
