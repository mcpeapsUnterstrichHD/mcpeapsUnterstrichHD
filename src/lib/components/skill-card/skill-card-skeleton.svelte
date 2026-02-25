<script lang="ts">
  import { Card } from "$lib/components/ui/card";
  import { Skeleton } from "$lib/components/ui/skeleton";
</script>

<Card.Root class="my-glass p-4 animate-in fade-in duration-500">
  <Card.Header class="pb-1">
    <div class="flex flex-row items-center gap-3">
      <Skeleton class="h-10 w-10 rounded-full" />
      <Skeleton class="h-5 w-24" />
    </div>
    <Card.Description>
      <div class="flex flex-wrap gap-2 mt-3">
        <Skeleton class="h-5 w-12 rounded-full" />
        <Skeleton class="h-5 w-16 rounded-full" />
      </div>
    </Card.Description>
  </Card.Header>
  <Card.Content class="pt-1 pb-2">
    <Skeleton class="h-2 w-full rounded-full" />
  </Card.Content>
</Card.Root>
