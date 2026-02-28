<script lang="ts">
  /**
   * @component UserAvatar
   *
   * A user avatar component built on the shadcn-svelte Avatar primitives.
   * It resolves the user's profile picture through a cascading fallback chain:
   *
   * 1. An explicit `image` prop (custom src + alt).
   * 2. The GitHub profile picture derived from `githubUserName`
   *    (`https://github.com/{username}.png`).
   * 3. Text initials extracted from the `name` prop (displayed inside `Avatar.Fallback`).
   *
   * An optional `imageFallback` string can override the auto-generated initials.
   *
   * @example
   * ```svelte
   * <UserAvatar name="Mahd" githubUserName="mcpeapsUnterstrichHD" />
   * ```
   *
   * @example With explicit image and custom fallback
   * ```svelte
   * <UserAvatar
   *   name="Jane Doe"
   *   githubUserName="janedoe"
   *   image={{ src: "/avatars/jane.jpg", alt: "Jane Doe" }}
   *   imageFallback="JD"
   *   class="size-12"
   * />
   * ```
   */
  import * as Avatar from "$lib/components/ui/avatar";
  import { cn } from "$lib/utils";

  /**
   * Props for the UserAvatar component.
   *
   * @property {string} name - The user's full display name. Used to generate
   *   fallback initials and as the default alt text for the GitHub avatar.
   * @property {string} githubUserName - GitHub username, used to construct the
   *   default avatar URL (`https://github.com/{username}.png`).
   * @property {{ src: string; alt: string }} [image] - Optional explicit image
   *   source and alt text. When provided, overrides the GitHub avatar URL.
   * @property {string} [imageFallback] - Optional text to display inside the
   *   fallback circle. Defaults to initials derived from `name`.
   * @property {string} [class] - Additional CSS class(es) forwarded to `Avatar.Root`.
   */
  interface Props {
    name: string;
    githubUserName: string;
    image?: { src: string; alt: string };
    imageFallback?: string;
    class?: string;
  }

  let { name, githubUserName, image, imageFallback, class: className }: Props =
    $props();

  /**
   * Extracts the first character of each word in a string to produce initials.
   *
   * @param {string} str - The full name string.
   * @returns {string} Concatenated first characters (e.g., "John Doe" -> "JD").
   */
  function getInitials(str: string): string {
    return str
      .split(" ")
      .filter((word) => word.length > 0)
      .map((word) => word.charAt(0))
      .join("");
  }

  /** Resolved image object: uses the explicit `image` prop if provided, otherwise falls back to the GitHub avatar URL. */
  let resolvedImage = $derived(
    image ?? { src: `https://github.com/${githubUserName}.png`, alt: name },
  );
  /** Resolved fallback text: uses `imageFallback` if provided, otherwise auto-generated initials from `name`. */
  let resolvedFallback = $derived(imageFallback ?? getInitials(name));
</script>

<Avatar.Root class={cn(className)}>
  <Avatar.Image src={resolvedImage.src} alt={resolvedImage.alt} />
  <Avatar.Fallback>{resolvedFallback}</Avatar.Fallback>
</Avatar.Root>
