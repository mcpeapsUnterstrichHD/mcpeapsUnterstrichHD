<script lang="ts">
  import { page } from "$app/state";
  import * as Sidebar from "$lib/components/ui/sidebar";
  import * as Tooltip from "$lib/components/ui/tooltip";
  import UserAvatar from "$lib/components/UserAvatar.svelte";
  import TypingAnimation from "$lib/components/TypingAnimation.svelte";
  import Langswitcher from "$lib/components/Langswitcher.svelte";
  import SidebarToggle from "$lib/components/SidebarToggle.svelte";
  import {
    House,
    User,
    FolderKanban,
    FileText,
    Mail,
    Link as LinkIcon,
    Scale,
    Dot,
    type IconProps,
  } from "@lucide/svelte";
  import { useIntlayer, useLocale } from "svelte-intlayer";
  import { getLocalizedUrl, type Locale } from "intlayer";
  import LocalizedLink from "$lib/components/LocalizedLink.svelte";
  import { t } from "$lib/i18n";

  const footer = useIntlayer("footer");
  const sites = useIntlayer("sites");
  const aboutme = useIntlayer("aboutme");
  const logo = useIntlayer("logo");

  const { locale } = useLocale();

  interface SidebarLink {
    title: string;
    url: string;
    url2?: string;
    icon: any;
  }

  const today = new Date();

  let navigationLinks: SidebarLink[] = $derived([
    { title: t($sites, "root"), url: "/", icon: House },
    { title: t($sites, "aboutme"), url: "/aboutme/", icon: User },
    { title: t($sites, "projects"), url: "/projects/", icon: FolderKanban },
    { title: t($sites, "cv"), url: "/cv/", url2: "/cv/ats/", icon: FileText },
  ]);

  let connectLinks: SidebarLink[] = $derived([
    { title: t($sites, "contact"), url: "/contact/", icon: Mail },
    { title: t($sites, "linkhub"), url: "/linkhub/", icon: LinkIcon },
  ]);

  let legalLinks: SidebarLink[] = $derived([
    { title: t($sites, "impressum"), url: "/imprint/", icon: Scale },
  ]);

  function isActive(itemUrl: string, itemUrl2?: string): boolean {
    const currentLoc = $locale as Locale;
    const path = page.url.pathname.replace(/\/$/, "") || "/";
    const localized1 =
      getLocalizedUrl(itemUrl, currentLoc).replace(/\/$/, "") || "/";
    const localized2 = itemUrl2
      ? getLocalizedUrl(itemUrl2, currentLoc).replace(/\/$/, "") || "/"
      : undefined;
    return path === localized1 || (!!localized2 && path === localized2);
  }
</script>

<Sidebar.Root
  collapsible="offcanvas"
  variant="floating"
  class="no-print my-glass rounded-sm"
>
  <Sidebar.Header>
    <Sidebar.Group>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          <Sidebar.MenuItem>
            <Tooltip.Root>
              <Tooltip.Trigger
                onclick={() => {}}
                class="flex w-full items-center gap-2 rounded-md p-2 text-left text-xs hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors overflow-hidden"
              >
                <LocalizedLink
                  href="/"
                  class="flex w-full items-center gap-2 overflow-hidden"
                >
                  <UserAvatar
                    name={t($aboutme, "name")}
                    githubUserName="mcpeapsUnterstrichHD"
                    image={{ src: "/pictures/logo.png", alt: t($logo, "alt") }}
                    imageFallback="MAHD"
                    class="h-8 w-8 rounded-sm"
                  />
                  <span class="group-data-[collapsible=icon]:hidden">
                    <TypingAnimation
                      text={t($aboutme, "name")}
                      typeSpeed={145}
                      pauseDelay={1450}
                      deleteSpeed={75}
                      showCursor
                      blinkCursor
                      loop
                      startOnView
                      cursorStyle="underscore"
                    />
                  </span>
                </LocalizedLink>
              </Tooltip.Trigger>
              <Tooltip.Content side="right"
                >{t($aboutme, "name")}</Tooltip.Content
              >
            </Tooltip.Root>
          </Sidebar.MenuItem>
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  </Sidebar.Header>

  <Sidebar.Content>
    <!-- Navigation -->
    <Sidebar.Group>
      <Sidebar.GroupLabel>{t($footer, "navigation")}</Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each navigationLinks as item}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                {#snippet child({ props })}
                  <LocalizedLink href={item.url} {...props}>
                    {@const Icon = item.icon}
                    <Icon title={item.title} />
                    <span
                      class="flex-1 truncate group-data-[collapsible=icon]:hidden"
                      >{item.title}</span
                    >
                    {#if isActive(item.url, item.url2)}
                      <Dot
                        class="text-primary shrink-0"
                        size={72}
                        strokeWidth={6}
                      />
                    {/if}
                  </LocalizedLink>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>

    <!-- Connect -->
    <Sidebar.Group>
      <Sidebar.GroupLabel>{t($footer, "connect")}</Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each connectLinks as item: S }
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                {#snippet child({ props })}
                  <LocalizedLink href={item.url} {...props}>
                    {@const Icon = item.icon}
                    <Icon title={item.title} />
                    <span
                      class="flex-1 truncate group-data-[collapsible=icon]:hidden"
                      >{item.title}</span
                    >
                    {#if isActive(item.url)}
                      <Dot
                        class="text-primary shrink-0"
                        size={72}
                        strokeWidth={6}
                      />
                    {/if}
                  </LocalizedLink>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>

    <!-- Legal -->
    <Sidebar.Group>
      <Sidebar.GroupLabel>{t($footer, "legal")}</Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          {#each legalLinks as item}
            <Sidebar.MenuItem>
              <Sidebar.MenuButton>
                {#snippet child({ props })}
                  <LocalizedLink href={item.url} {...props}>
                    {@const Icon = item.icon}
                    <Icon title={item.title} />
                    <span
                      class="flex-1 truncate group-data-[collapsible=icon]:hidden"
                      >{item.title}</span
                    >
                    {#if isActive(item.url)}
                      <Dot
                        class="text-primary shrink-0"
                        size={72}
                        strokeWidth={6}
                      />
                    {/if}
                  </LocalizedLink>
                {/snippet}
              </Sidebar.MenuButton>
            </Sidebar.MenuItem>
          {/each}
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  </Sidebar.Content>

  <Sidebar.Footer>
    <Sidebar.Group>
      <Sidebar.GroupLabel class="group-data-[collapsible=icon]:hidden">
        &copy; {today.getFullYear()}
        {t($aboutme, "name")}
      </Sidebar.GroupLabel>
      <Sidebar.GroupContent>
        <Sidebar.Menu>
          <Sidebar.MenuItem>
            <Langswitcher sidebar />
          </Sidebar.MenuItem>
          <Sidebar.MenuItem>
            <SidebarToggle />
          </Sidebar.MenuItem>
        </Sidebar.Menu>
      </Sidebar.GroupContent>
    </Sidebar.Group>
  </Sidebar.Footer>

  <Sidebar.Rail />
</Sidebar.Root>
