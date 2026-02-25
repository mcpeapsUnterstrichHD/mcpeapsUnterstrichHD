<script lang="ts">
  import { Card } from "$lib/components/ui/card";
  import { Skeleton } from "$lib/components/ui/skeleton";
</script>

<Card.Root class="my-glass animate-in fade-in duration-500">
  <Card.Header>
    <div class="flex flex-row items-center justify-between gap-1">
      <Skeleton class="h-10 w-10 rounded-full" />
      <Skeleton class="h-6 w-48" />
    </div>
    <Card.Description>
      <div class="flex flex-wrap gap-2 mt-2">
        <Skeleton class="h-5 w-24 rounded-full" />
        <Skeleton class="h-5 w-16 rounded-full" />
        <Skeleton class="h-5 w-20 rounded-full" />
      </div>
    </Card.Description>
  </Card.Header>
  <Card.Content>
    <div class="space-y-2 mt-2">
      <Skeleton class="h-4 w-full" />
      <Skeleton class="h-4 w-4/5" />
      <Skeleton class="h-4 w-3/4" />
    </div>
  </Card.Content>
</Card.Root>
