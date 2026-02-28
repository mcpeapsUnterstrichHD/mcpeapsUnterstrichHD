<script lang="ts">
  /**
   * @component SkillCardSkeleton
   *
   * A loading-state placeholder that mirrors the layout of {@link SkillCard}.
   * Renders shimmer `Skeleton` primitives for the avatar, title, badge row,
   * and progress bar inside a shadcn-svelte `Card` with `my-glass` styling.
   *
   * Uses `animate-in fade-in duration-500` for a smooth entrance when swapped
   * in during data fetching.
   *
   * This component accepts no props and is meant to be rendered one-to-one in
   * place of each `SkillCard.Root` while skill data is loading.
   *
   * @see {@link SkillCard} -- The data-populated counterpart
   */
  import { Card } from "$lib/components/ui/card";
  import { Skeleton } from "$lib/components/ui/skeleton";
  import { cn } from "$lib/utils";
</script>

<Card.Root class={cn("my-glass p-4 animate-in fade-in duration-500")}>
  <Card.Header class={cn("pb-1")}>
    <div class={cn("flex flex-row items-center gap-3")}>
      <Skeleton class={cn("h-10 w-10 rounded-full")} />
      <Skeleton class={cn("h-5 w-24")} />
    </div>
    <Card.Description>
      <div class={cn("flex flex-wrap gap-2 mt-3")}>
        <Skeleton class={cn("h-5 w-12 rounded-full")} />
        <Skeleton class={cn("h-5 w-16 rounded-full")} />
      </div>
    </Card.Description>
  </Card.Header>
  <Card.Content class={cn("pt-1 pb-2")}>
    <Skeleton class={cn("h-2 w-full rounded-full")} />
  </Card.Content>
</Card.Root>
