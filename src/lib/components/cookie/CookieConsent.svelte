<script lang="ts">
  import { onMount } from 'svelte';
  import { cookieConsentConfig } from './cookieConfig';
  import { cookieState } from './cookieState.svelte';
  import * as Sheet from '$lib/components/ui/sheet';
  import { Button } from '$lib/components/ui/button';
  import Langswitcher from '$lib/components/Langswitcher.svelte';
  import { useIntlayer } from 'svelte-intlayer';
  import {
    Cookie,
    ExternalLink,
    Shield,
    Music,
    Share2,
    Phone,
    Globe,
  } from '@lucide/svelte';
  import { getLocalizedUrl } from 'intlayer';

  const cookieConsent = useIntlayer('cookieConsent');

  let isVisible = $state(false);
  let sheetOpen = $state(false);

  function syncCategories() {
    import('vanilla-cookieconsent').then(CC => {
      cookieState.multimedia = CC.acceptedCategory('multimedia');
      cookieState.socialMedia = CC.acceptedCategory('socialMedia');
      cookieState.contact = CC.acceptedCategory('contact');
    });
  }

  onMount(() => {
    import('vanilla-cookieconsent').then(CC => {
      CC.run({
        ...cookieConsentConfig,
        onFirstConsent: () => {
          isVisible = false;
        },
        onConsent: () => syncCategories(),
        onChange: () => syncCategories(),
      });

      if (!CC.validConsent()) {
        isVisible = true;
      } else {
        syncCategories();
      }
    });

    const handleShowBanner = () => {
      syncCategories();
      sheetOpen = true;
    };
    window.addEventListener('show-cookie-consent', handleShowBanner);
    return () => {
      window.removeEventListener('show-cookie-consent', handleShowBanner);
    };
  });

  async function handleAcceptAll() {
    const CC = await import('vanilla-cookieconsent');
    CC.acceptCategory('all');
    isVisible = false;
    sheetOpen = false;
  }

  async function handleRejectAll() {
    const CC = await import('vanilla-cookieconsent');
    CC.acceptCategory([]);
    isVisible = false;
    sheetOpen = false;
  }

  async function handleSavePreferences() {
    const CC = await import('vanilla-cookieconsent');
    const accepted: string[] = ['necessary'];
    if (cookieState.multimedia) accepted.push('multimedia');
    if (cookieState.socialMedia) accepted.push('socialMedia');
    if (cookieState.contact) accepted.push('contact');
    CC.acceptCategory(accepted);
    isVisible = false;
    sheetOpen = false;
  }

  function handleOpenSheet() {
    syncCategories();
    sheetOpen = true;
  }
</script>

<!-- Compact Banner (bottom-right) -->
{#if isVisible}
  <div class="fixed bottom-4 right-4 z-50 max-w-sm print:hidden no-print animate-in slide-in-from-bottom-5 fade-in duration-300">
    <div class="my-glass rounded-lg shadow-xl p-4 space-y-3">
      <div class="flex items-start gap-3">
        <div class="shrink-0 p-2 bg-primary/10 rounded-full">
          <Cookie class="h-5 w-5 text-primary" />
        </div>
        <div class="flex-1 min-w-0">
          <h3 class="text-sm font-semibold text-foreground">
            {$cookieConsent.title}
          </h3>
          <p class="text-xs text-muted-foreground mt-1 line-clamp-3">
            {$cookieConsent.description}
          </p>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-2">
        <Button onclick={handleAcceptAll} size="sm" class="flex-1 text-xs">
          {$cookieConsent.acceptAll}
        </Button>
        <Button onclick={handleRejectAll} variant="outline" size="sm" class="flex-1 text-xs">
          {$cookieConsent.rejectAll}
        </Button>
      </div>
      <div class="flex items-center justify-between">
        <Button onclick={handleOpenSheet} variant="ghost" size="sm" class="text-xs text-muted-foreground hover:text-foreground px-1">
          {$cookieConsent.managePreferences}
        </Button>
        <a
          href={getLocalizedUrl('/imprint')}
          class="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {$cookieConsent.moreInfo}
          <ExternalLink class="h-3 w-3" />
        </a>
      </div>
    </div>
  </div>
{/if}

<!-- Preferences Sheet (right side) -->
<Sheet.Root bind:open={sheetOpen}>
  <Sheet.Content side="right" class="overflow-y-auto print:hidden no-print">
    <Sheet.Header>
      <Sheet.Title class="flex items-center gap-2">
        <Cookie class="h-5 w-5 text-primary" />
        {$cookieConsent.managePreferences}
      </Sheet.Title>
      <Sheet.Description>
        {$cookieConsent.description}
      </Sheet.Description>
    </Sheet.Header>

    <div class="px-6 space-y-4">
      <!-- Cookie Categories -->
      <div class="space-y-3">
        <!-- Necessary - always on -->
        <label class="flex items-center justify-between p-3 rounded-lg bg-muted/30">
          <span class="flex items-center gap-2 text-sm text-foreground">
            <Shield class="h-4 w-4 text-primary" />
            {$cookieConsent.technicalCookies.title}
          </span>
          <input type="checkbox" checked disabled class="h-4 w-4 accent-primary" />
        </label>

        <!-- Multimedia -->
        <label class="flex items-center justify-between p-3 rounded-lg bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors">
          <div class="flex-1 min-w-0">
            <span class="flex items-center gap-2 text-sm text-foreground">
              <Music class="h-4 w-4 text-primary" />
              {$cookieConsent.categories.multimedia.title}
            </span>
            <p class="text-xs text-muted-foreground mt-0.5 ml-6">
              {$cookieConsent.categories.multimedia.description}
            </p>
          </div>
          <input type="checkbox" bind:checked={cookieState.multimedia} class="h-4 w-4 accent-primary cursor-pointer shrink-0" />
        </label>

        <!-- Social Media -->
        <label class="flex items-center justify-between p-3 rounded-lg bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors">
          <div class="flex-1 min-w-0">
            <span class="flex items-center gap-2 text-sm text-foreground">
              <Share2 class="h-4 w-4 text-primary" />
              {$cookieConsent.categories.socialMedia.title}
            </span>
            <p class="text-xs text-muted-foreground mt-0.5 ml-6">
              {$cookieConsent.categories.socialMedia.description}
            </p>
          </div>
          <input type="checkbox" bind:checked={cookieState.socialMedia} class="h-4 w-4 accent-primary cursor-pointer shrink-0" />
        </label>

        <!-- Contact -->
        <label class="flex items-center justify-between p-3 rounded-lg bg-muted/30 cursor-pointer hover:bg-muted/50 transition-colors">
          <div class="flex-1 min-w-0">
            <span class="flex items-center gap-2 text-sm text-foreground">
              <Phone class="h-4 w-4 text-primary" />
              {$cookieConsent.categories.contact.title}
            </span>
            <p class="text-xs text-muted-foreground mt-0.5 ml-6">
              {$cookieConsent.categories.contact.description}
            </p>
          </div>
          <input type="checkbox" bind:checked={cookieState.contact} class="h-4 w-4 accent-primary cursor-pointer shrink-0" />
        </label>
      </div>

      <!-- Info Sections -->
      <div class="space-y-3 pt-2 border-t border-border/50">
        <div class="p-3 bg-muted/20 rounded-lg">
          <div class="flex items-center gap-2 mb-1">
            <Shield class="h-3.5 w-3.5 text-primary" />
            <p class="text-xs font-medium text-foreground">
              {$cookieConsent.technicalCookies.title}
            </p>
          </div>
          <p class="text-xs text-muted-foreground">
            {$cookieConsent.technicalCookies.description}
          </p>
        </div>

        <div class="p-3 bg-muted/20 rounded-lg">
          <div class="flex items-center gap-2 mb-1">
            <Music class="h-3.5 w-3.5 text-primary" />
            <p class="text-xs font-medium text-foreground">
              {$cookieConsent.thirdPartyCookies.title}
            </p>
          </div>
          <p class="text-xs text-muted-foreground">
            {$cookieConsent.thirdPartyCookies.description}
          </p>
        </div>
      </div>

      <!-- Language Selector -->
      <div class="pt-2 border-t border-border/50">
        <div class="flex items-center gap-2 mb-2">
          <Globe class="h-3.5 w-3.5 text-primary" />
          <p class="text-xs font-medium text-foreground">
            {$cookieConsent.language}
          </p>
        </div>
        <Langswitcher />
      </div>
    </div>

    <Sheet.Footer>
      <div class="flex flex-col gap-2 w-full">
        <Button onclick={handleSavePreferences} class="w-full">
          {$cookieConsent.savePreferences}
        </Button>
        <div class="flex gap-2">
          <Button onclick={handleAcceptAll} variant="outline" size="sm" class="flex-1 text-xs">
            {$cookieConsent.acceptAll}
          </Button>
          <Button onclick={handleRejectAll} variant="outline" size="sm" class="flex-1 text-xs">
            {$cookieConsent.rejectAll}
          </Button>
        </div>
        <a
          href={getLocalizedUrl('/imprint')}
          class="inline-flex items-center justify-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors pt-1"
        >
          {$cookieConsent.moreInfo}
          <ExternalLink class="h-3 w-3" />
        </a>
      </div>
    </Sheet.Footer>
  </Sheet.Content>
</Sheet.Root>
