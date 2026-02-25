<script lang="ts">
  import { onMount } from 'svelte';
  import { toast } from 'svelte-sonner';
  import { goto } from '$app/navigation';
  import { useIntlayer, useLocale } from 'svelte-intlayer';
  import { getLocalizedUrl, type Locale } from 'intlayer';

  const { locale } = useLocale();
  const recommendation = useIntlayer('recommendation');

  let currentIndex = 0;

  let recommendations = $derived([
    {
      title: $recommendation.projects.title as unknown as string,
      description: $recommendation.projects.description as unknown as string,
      href: getLocalizedUrl('/projects', $locale as Locale),
    },
    {
      title: $recommendation.aboutme.title as unknown as string,
      description: $recommendation.aboutme.description as unknown as string,
      href: getLocalizedUrl('/aboutme', $locale as Locale),
    },
    {
      title: $recommendation.cv.title as unknown as string,
      description: $recommendation.cv.description as unknown as string,
      href: getLocalizedUrl('/cv', $locale as Locale),
    },
    {
      title: $recommendation.linkhub.title as unknown as string,
      description: $recommendation.linkhub.description as unknown as string,
      href: getLocalizedUrl('/linkhub', $locale as Locale),
    },
    {
      title: $recommendation.github.title as unknown as string,
      description: $recommendation.github.description as unknown as string,
      external: 'https://github.com/mcpeapsUnterstrichHD',
    },
    {
      title: $recommendation.twitter.title as unknown as string,
      description: $recommendation.twitter.description as unknown as string,
      external: 'https://x.com/mcpeaps_HD',
    },
    {
      title: $recommendation.instagram.title as unknown as string,
      description: $recommendation.instagram.description as unknown as string,
      external: 'https://instagram.com/mcpeaps_hd',
    },
    {
      title: $recommendation.tiktok.title as unknown as string,
      description: $recommendation.tiktok.description as unknown as string,
      external: 'https://tiktok.com/@mcpeaps_hd',
    },
    {
      title: $recommendation.threads.title as unknown as string,
      description: $recommendation.threads.description as unknown as string,
      external: 'https://threads.com/@mcpeaps_hd',
    },
    {
      title: $recommendation.bluesky.title as unknown as string,
      description: $recommendation.bluesky.description as unknown as string,
      external: 'https://bsky.mcpeapsunterstrichhd.dev',
    },
  ]);

  onMount(() => {
    function showRecommendation() {
      const rec = recommendations[currentIndex];
      toast(rec.title, {
        description: rec.description,
        action: {
          label: rec.external ? '↗' : '→',
          onClick: () => {
            if (rec.external) {
              window.open(rec.external, '_blank');
            } else if (rec.href) {
              goto(rec.href);
            }
          }
        }
      });
      currentIndex = (currentIndex + 1) % recommendations.length;
    }

    // Show first recommendation immediately
    showRecommendation();

    // Rotate every 10 minutes
    const intervalId = setInterval(showRecommendation, 10 * 60 * 1000);

    return () => clearInterval(intervalId);
  });
</script>
