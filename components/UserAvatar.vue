<template>
  <Avatar>
    <AvatarImage :src="avatarImage.src" :alt="avatarImage.alt" />
    <AvatarFallback>{{ finalImageFallback }}</AvatarFallback>
  </Avatar>
</template>

<script lang="ts" setup>
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ImageProps {
  src: string;
  alt: string;
}

interface Props {
  name: string;
  githubUserName: string;
  href?: string;
  image?: ImageProps;
  imageFallback?: string;
}

const props = defineProps<Props>();

function getInitials(str: string): string {
  const words = str.split(" ").filter((word) => word.length > 0);
  const initials = words.map((word) => word.charAt(0));
  return initials.join("");
}

const avatarImage = computed(() => {
  if (props.image) return props.image;
  return {
    src: `https://github.com/${props.githubUserName}.png`,
    alt: props.name,
  };
});

const finalImageFallback = computed(() => {
  return props.imageFallback ?? getInitials(props.name);
});
</script>

<style>

</style>