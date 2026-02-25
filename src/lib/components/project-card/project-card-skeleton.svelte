<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import { Skeleton } from "$lib/components/ui/skeleton";
</script>

<Card.Root class="my-glass animate-in fade-in duration-500">
  <Card.Header>
    <Card.Title>
      <Skeleton class="h-6 w-3/4" />
    </Card.Title>
    <Card.Description>
      <section class="flex flex-wrap gap-2">
        <Skeleton class="h-5 w-12 rounded-full" />
        <Skeleton class="h-5 w-16 rounded-full" />
        <Skeleton class="h-5 w-10 rounded-full" />
      </section>
    </Card.Description>
  </Card.Header>
  <Card.Content>
    <section class="flex flex-col justify-between gap-4">
      <div class="space-y-2">
        <Skeleton class="h-4 w-full" />
        <Skeleton class="h-4 w-4/5" />
      </div>
    </section>
  </Card.Content>
  <Card.Footer class="flex grow flex-col items-center justify-center gap-4 p-4">
    <section class="flex items-center justify-center rounded-sm w-full">
      <Skeleton class="w-full h-48 rounded-sm" />
    </section>
  </Card.Footer>
</Card.Root>
