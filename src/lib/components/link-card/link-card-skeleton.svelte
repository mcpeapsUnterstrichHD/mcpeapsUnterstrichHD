<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Skeleton } from "$lib/components/ui/skeleton";
</script>

<Card.Root class="my-glass animate-in fade-in duration-500">
  <Card.Header>
    <div class="flex flex-row items-center justify-between gap-1">
      <Skeleton class="h-10 w-10 rounded-full" />
      <Skeleton class="h-5 w-24" />
    </div>
    <Skeleton class="h-4 w-32 mt-2" />
  </Card.Header>
  <Card.Content>
    <div class="space-y-2">
      <Skeleton class="h-4 w-full" />
      <Skeleton class="h-4 w-3/4" />
    </div>
  </Card.Content>
</Card.Root>
