<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";

  interface Props {
    name: string;
    githubUserName: string;
    image?: { src: string; alt: string };
    imageFallback?: string;
    class?: string;
  }

  let { name, githubUserName, image, imageFallback, class: className }: Props =
    $props();

  function getInitials(str: string): string {
    return str
      .split(" ")
      .filter((word) => word.length > 0)
      .map((word) => word.charAt(0))
      .join("");
  }

  let resolvedImage = $derived(
    image ?? { src: `https://github.com/${githubUserName}.png`, alt: name },
  );
  let resolvedFallback = $derived(imageFallback ?? getInitials(name));
</script>

<Avatar.Root class={className}>
  <Avatar.Image src={resolvedImage.src} alt={resolvedImage.alt} />
  <Avatar.Fallback>{resolvedFallback}</Avatar.Fallback>
</Avatar.Root>
