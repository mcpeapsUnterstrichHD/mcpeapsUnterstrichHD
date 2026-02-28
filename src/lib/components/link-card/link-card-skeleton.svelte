<script lang="ts">
  /**
   * @component LinkCardSkeleton
   *
   * A loading-state placeholder that mirrors the layout of {@link LinkCard}.
   * Renders shimmer `Skeleton` primitives for the icon, title, heading, and
   * description inside a shadcn-svelte `Card` with `my-glass` styling.
   *
   * Uses `animate-in fade-in duration-500` for a smooth entrance when swapped
   * in during data fetching.
   *
   * This component accepts no props and is meant to be rendered one-to-one in
   * place of each `LinkCard.Root` while link data is loading.
   *
   * @see {@link LinkCard} -- The data-populated counterpart
   */
  import * as Card from "$lib/components/ui/card";
  import { Skeleton } from "$lib/components/ui/skeleton";
  import {cn} from "$lib/utils";
</script>

<Card.Root class={cn("my-glass animate-in fade-in duration-500")}>
  <Card.Header>
    <div class={cn("flex flex-row items-center justify-between gap-1")}>
      <Skeleton class={cn("h-10 w-10 rounded-full")} />
      <Skeleton class={cn("h-5 w-24")} />
    </div>
    <Skeleton class={cn("h-4 w-32 mt-2")} />
  </Card.Header>
  <Card.Content>
    <div class={cn("space-y-2")}>
      <Skeleton class={cn("h-4 w-full")} />
      <Skeleton class={cn("h-4 w-3/4")} />
    </div>
  </Card.Content>
</Card.Root>
