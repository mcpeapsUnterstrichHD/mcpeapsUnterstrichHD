<template>
  <div>
    <Card class="bg-transparent backdrop-blur-sm">
    <CardHeader>
      <div class="flex flex-row items-center justify-between gap-1">
        <Avatar>
          <AvatarImage :src="image" :alt="imageAlt" />
          <AvatarFallback>{{ imageFallback }}</AvatarFallback>
        </Avatar>
        <CardTitle>{{ title }}</CardTitle>
      </div>
      <CardDescription>
        <div class="flex flex-wrap gap-2">
          <Badge variant='default'>{{`${from} – ${to}`}}</Badge>
          <Badge v-for="(badge, index) in badges" :key="index" variant="default">
            {{ badge }}
          </Badge>
        </div>
      </CardDescription>
    </CardHeader>
    <CardContent>
      <slot />
    </CardContent>
  </Card>
  </div>
</template>

<script lang="ts" setup>
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Props {
  from: string;
  to: string;
  image: string;
  imageAlt: string;
  imageFallback: string;
  title: string;
  badges: string[];
}
const props = defineProps<Props>();

</script>

<style>

</style>