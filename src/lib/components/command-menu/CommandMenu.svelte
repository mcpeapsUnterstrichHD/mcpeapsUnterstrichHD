<script lang="ts">
import { page } from "$app/state";
import { goto } from "$app/navigation";
import { tick, onMount } from "svelte";
import { useIntlayer, useLocale } from "svelte-intlayer";
import {
  Globe,
  Dot,
  House,
  User,
  FolderKanban,
  FileText,
  Mail,
  Link as LinkIcon,
  Scale,
  Cookie,
  PanelLeft,
} from "@lucide/svelte";
import * as Command from "$lib/components/ui/command";

import { Kbd } from "$lib/components/ui/kbd";
import { languages, type Language } from "$lib/lang";
import { getLocalizedUrl, isActive, t } from "$lib/i18n";
import { cn } from "$lib/utils";
import { useSidebar } from "$lib/components/ui/sidebar";
import { createWebHaptics } from "web-haptics/svelte";
import { onDestroy } from "svelte";
import { type Locale } from "intlayer";
const { trigger, destroy } = createWebHaptics();
onDestroy(destroy);

const dict = useIntlayer("commandMenu");
const sites = useIntlayer("sites");
const sidebarText = useIntlayer("sidebar");
const sidebar = useSidebar();

const { locale, setLocale } = useLocale({
  onLocaleChange: (newLocale) => {
    const localizedPath = getLocalizedUrl(
      page.url.pathname,
      newLocale as Language["code"],
    );
    goto(localizedPath, { invalidateAll: true });
  },
});

let open = $state(false);
let isMac = $state(false);

const hapticPattern = [
  { duration: 60, intensity: 1 },
  { delay: 30, duration: 60, intensity: 0.75 },
  { delay: 30, duration: 60 },
  { delay: 30, duration: 60, intensity: 0.75 },
  { delay: 30, duration: 60, intensity: 1 },
];

const navigationLinks = [
  { href: "/", label: () => t($sites, "root"), icon: House },
  { href: "/aboutme/", label: () => t($sites, "aboutme"), icon: User },
  {
    href: "/projects/",
    label: () => t($sites, "projects"),
    icon: FolderKanban,
  },
  {
    href: "/cv/",
    href2: "/cv/ats/",
    label: () => t($sites, "cv"),
    icon: FileText,
  },
  { href: "/contact/", label: () => t($sites, "contact"), icon: Mail },
  {
    href: "/linkhub/",
    label: () => t($sites, "linkhub"),
    icon: LinkIcon,
  },
  {
    href: "/imprint/",
    label: () => t($sites, "imprint"),
    icon: Scale,
  },
];

function navigateTo(href: string) {
  open = false;
  trigger(hapticPattern);
  const localizedHref = getLocalizedUrl(href, $locale as Language["code"]);
  goto(localizedHref);
}

async function selectLanguage(lang: Language) {
  open = false;
  trigger(hapticPattern);
  await tick();
  setLocale(lang.code);
}

function handleCookieSettings() {
  open = false;
  trigger(hapticPattern);
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("show-cookie-consent"));
  }
}

function toggleSidebar() {
  open = false;
  trigger(hapticPattern);
  sidebar.toggle();
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
    e.preventDefault();
    open = !open;
    return;
  }

  if (!open) return;

  const num = Number.parseInt(e.key, 10);
  if (num >= 1 && num <= navigationLinks.length) {
    e.preventDefault();
    navigateTo(navigationLinks[num - 1].href);
  }
}

onMount(() => {
  isMac = /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);
  function onToggle() {
    open = !open;
  }
  window.addEventListener("toggle-command-menu", onToggle);
  return () => {
    window.removeEventListener("toggle-command-menu", onToggle);
  };
});
</script>

<svelte:document onkeydown={handleKeydown} />

<Command.Dialog
  bind:open
  title={t($dict, "commandPalette")}
  description={t($dict, "commandPaletteDescription")}
>
  <Command.Input placeholder={t($dict, "searchPlaceholder")} />
  <Command.List>
    <Command.Empty>{t($dict, "noResults")}</Command.Empty>

    <Command.Group heading={t($dict, "navigation")}>
      {#each navigationLinks as link, i}
        {@const Icon = link.icon}
        <Command.Item
          value={link.label()}
          onSelect={() => navigateTo(link.href)}
          class={cn("flex items-center justify-between")}
        >
          <span class={cn("flex items-center gap-2")}>
            <Icon class={cn("me-2 size-4")} />
            <span>{link.label()}</span>
          </span>
          <span class={cn("flex items-center gap-1")}>
            {#if isActive($locale as Locale, link.href, link.href2)}
            <Dot
            class={cn("text-primary shrink-0")}
            size={72}
            strokeWidth={6}
          />
            {/if}
            <Kbd>{i + 1}</Kbd>
          </span>
        </Command.Item>
      {/each}
    </Command.Group>

    <Command.Separator />

    <Command.Group heading={t($dict, "languages")}>
      {#each languages as lang}
        <Command.Item
          value={`${lang.name} ${lang.country} ${lang.code}`}
          onSelect={() => selectLanguage(lang)}
          class={cn("flex items-center justify-between")}
        >
          <span class={cn("flex items-center gap-2")}>
            <Globe class={cn("size-4")} />
            <span>{lang.name} ({lang.country})</span>
          </span>
          {#if lang.code === $locale}
          <Dot
          class={cn("text-primary shrink-0")}
          size={72}
          strokeWidth={6}
        />
          {/if}
        </Command.Item>
      {/each}
    </Command.Group>

    <Command.Separator />

    <Command.Group heading={t($dict, "settings")}>
      <Command.Item
        value={t($dict, "cookieSettings")}
        onSelect={handleCookieSettings}
      >
        <Cookie class={cn("me-2 size-4")} />
        <span>{t($dict, "cookieSettings")}</span>
      </Command.Item>
    </Command.Group>

    <Command.Separator />

    <Command.Group heading={t($dict, "misc")}>
      <Command.Item
        value={t($sidebarText, "toggleSidebar")}
        onSelect={toggleSidebar}
      >
        <PanelLeft class={cn("me-2 size-4")} />
        <span>{t($sidebarText, "toggleSidebar")}</span>
        <span class={cn("ml-auto flex items-center gap-0.5")}>
          <Kbd>{isMac ? "⌘" : "Ctrl"}</Kbd>
          <Kbd>B</Kbd>
        </span>
      </Command.Item>
    </Command.Group>
  </Command.List>
</Command.Dialog>
