<script lang="ts">
  import { Skeleton } from '$lib/components/ui/skeleton';

  interface Props {
    showSubtitle?: boolean;
    showDescription?: boolean;
    buttonCount?: number;
  }

  let {
    showSubtitle = true,
    showDescription = false,
    buttonCount = 0,
  }: Props = $props();
</script>

<section class="text-center space-y-4 animate-in fade-in duration-500">
  {#if showSubtitle}
    <Skeleton class="h-6 w-48 mx-auto" />
  {/if}

  <!-- Main title -->
  <Skeleton class="h-12 w-72 mx-auto md:h-16 md:w-96" />

  <!-- Secondary title/tagline -->
  <Skeleton class="h-8 w-56 mx-auto" />

  {#if showDescription}
    <div class="flex flex-col items-center gap-2 max-w-2xl mx-auto mt-4">
      <Skeleton class="h-4 w-full max-w-md" />
      <Skeleton class="h-4 w-full max-w-sm" />
      <Skeleton class="h-4 w-full max-w-xs" />
    </div>
  {/if}

  {#if buttonCount > 0}
    <div class="flex flex-wrap gap-3 mt-6 justify-center">
      {#each Array(buttonCount) as _, i}
        <Skeleton class="h-10 w-32 rounded-md" />
      {/each}
    </div>
  {/if}
</section>
