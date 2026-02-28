<script lang="ts">
  /**
   * @component TimelineCardSkeleton
   *
   * A loading-state placeholder that mirrors the layout of {@link TimelineCard}.
   * Renders shimmer `Skeleton` primitives for the avatar, title, badge row, and
   * body text inside a shadcn-svelte `Card` with `my-glass` styling.
   *
   * Uses `animate-in fade-in duration-500` for a smooth entrance when swapped
   * in during data fetching.
   *
   * This component accepts no props and is meant to be rendered one-to-one in
   * place of each `TimelineCard.Root` while timeline data is loading.
   *
   * @see {@link TimelineCard} -- The data-populated counterpart
   */
  import { Card } from "$lib/components/ui/card";
  import { Skeleton } from "$lib/components/ui/skeleton";
  import { cn } from "$lib/utils";
</script>

<Card.Root class={cn("my-glass animate-in fade-in duration-500")}>
  <Card.Header>
    <div class={cn("flex flex-row items-center justify-between gap-1")}>
      <Skeleton class={cn("h-10 w-10 rounded-full")} />
      <Skeleton class={cn("h-6 w-48")} />
    </div>
    <Card.Description>
      <div class={cn("flex flex-wrap gap-2 mt-2")}>
        <Skeleton class={cn("h-5 w-24 rounded-full")} />
        <Skeleton class={cn("h-5 w-16 rounded-full")} />
        <Skeleton class={cn("h-5 w-20 rounded-full")} />
      </div>
    </Card.Description>
  </Card.Header>
  <Card.Content>
    <div class={cn("space-y-2 mt-2")}>
      <Skeleton class={cn("h-4 w-full")} />
      <Skeleton class={cn("h-4 w-4/5")} />
      <Skeleton class={cn("h-4 w-3/4")} />
    </div>
  </Card.Content>
</Card.Root>
