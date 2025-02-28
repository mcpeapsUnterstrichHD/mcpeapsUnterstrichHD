<template>
  <div>
    <NuxtLink :to="projectLink" class="block" external>
      <Card class="projectCard">
        <CardHeader>
          <CardTitle>{{ projectTitle }}</CardTitle>
          <CardDescription>
            <section class="flex flex-wrap gap-2">
              <Badge v-for="(badge, index) in projectBadges" :key="index" variant="default">
                {{ badge }}
              </Badge>
            </section>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <section class="flex flex-col justify-between gap-4">
            <p><slot /></p>
          </section>
        </CardContent>
        <CardFooter class="flex flex-grow flex-col items-center justify-center gap-4 p-4">
          <section :class="`${projectImageBgColor} flex items-center justify-center rounded-sm`">
            <NuxtImg
              preload
              :src="projectImage"
              :alt="projectImageAlt"
              :class="`${projectImageBgColor} rounded-sm object-contain w-[250px] h-[250px]`"
              :width="250"
              :height="250"
              :lazy-load="true"
              fit="inside"
            />
          </section>
        </CardFooter>
      </Card>
    </NuxtLink>
  </div>
</template>

<script lang="ts" setup>
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
interface Props {
	projectImage: string;
	projectImageAlt: string;
	projectImageBgColor: string;
	projectTitle: string;
	projectBadges: string[];
	projectLink: string;
}
const props = defineProps<Props>();
</script>

<style>
.projectCard {
  @apply backdrop-blur-sm;
  @apply bg-transparent;
  @apply grid;
  @apply grid-rows-subgrid;
  grid-row: span 3;
}
</style>