<script lang="ts">
  /**
   * @component ProjectCardSkeleton
   *
   * A loading-state placeholder that mirrors the layout of {@link ProjectCard}.
   * Renders shimmer `Skeleton` primitives for the title, badge row, description
   * lines, and image area inside a shadcn-svelte `Card` with `my-glass` styling.
   *
   * Uses `animate-in fade-in duration-500` for a smooth entrance when swapped
   * in during data fetching.
   *
   * This component accepts no props and is meant to be rendered one-to-one in
   * place of each `ProjectCard.Root` while project data is loading.
   *
   * @see {@link ProjectCard} -- The data-populated counterpart
   */
  import * as Card from "$lib/components/ui/card";
  import { Skeleton } from "$lib/components/ui/skeleton";
    import { cn } from "$lib/utils";
</script>

<Card.Root class={cn("my-glass animate-in fade-in duration-500")}>
  <Card.Header>
    <Card.Title>
      <Skeleton class={cn("h-6 w-3/4")} />
    </Card.Title>
    <Card.Description>
      <section class={cn("flex flex-wrap gap-2")}>
        <Skeleton class={cn("h-5 w-12 rounded-full")} />
        <Skeleton class={cn("h-5 w-16 rounded-full")} />
        <Skeleton class={cn("h-5 w-10 rounded-full")} />
      </section>
    </Card.Description>
  </Card.Header>
  <Card.Content>
    <section class={cn("flex flex-col justify-between gap-4")}>
      <div class={cn("space-y-2")}>
        <Skeleton class={cn("h-4 w-full")} />
        <Skeleton class={cn("h-4 w-4/5")} />
      </div>
    </section>
  </Card.Content>
  <Card.Footer class={cn("flex grow flex-col items-center justify-center gap-4 p-4")}>
    <section class={cn("flex items-center justify-center rounded-sm w-full")}>
      <Skeleton class={cn("w-full h-48 rounded-sm")} />
    </section>
  </Card.Footer>
</Card.Root>
