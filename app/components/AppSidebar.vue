<template>
  <Sidebar
    collapsible="offcanvas"
    class="no-print backdrop-blur-sm rounded-sm"
    v-bind="$attrs"
  >
    <SidebarHeader>
      <SidebarGroup>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <Tooltip>
                <TooltipTrigger as-child>
                  <NuxtLinkLocale
                    to="/"
                    class="h-auto py-2 justify-start ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground gap-2 rounded-[calc(var(--radius-sm)+2px)] p-2 text-left text-xs transition-[width,height,padding] group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 flex w-full items-center overflow-hidden outline-hidden"
                  >
                    <UserAvatar
                      :name="name"
                      :githubUserName="githubUserName"
                      :image="image"
                      :imageFallback="imageFallback"
                    />
                    <TypingAnimation
                      :typeSpeed="145"
                      :pauseDelay="1450"
                      :deleteSpeed="75"
                      showCursor
                      blinkCursor
                      loop
                      startOnView
                      cursorStyle="underscore"
                      class="group-data-[collapsible=icon]:hidden"
                    >
                      {{ name }}
                    </TypingAnimation>
                  </NuxtLinkLocale>
                </TooltipTrigger>
                <TooltipContent side="right">{{ name }}</TooltipContent>
              </Tooltip>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarHeader>

    <SidebarContent>
      <!-- Navigation -->
      <SidebarGroup>
        <SidebarGroupLabel>{{ t("Footer.navigation") }}</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
             <SidebarMenuItem v-for="item in navigationLinks" :key="item.url">
                <Tooltip>
                  <TooltipTrigger as-child>
                     <NuxtLinkLocale
                        :to="item.url"
                        class="ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground gap-2 rounded-[calc(var(--radius-sm)+2px)] p-2 text-left text-xs transition-[width,height,padding] group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 flex w-full items-center overflow-hidden outline-hidden [&>span:last-child]:truncate [&_svg]:size-4 [&_svg]:shrink-0"
                     >
                        <component :is="item.icon" />
                        <span class="group-data-[collapsible=icon]:hidden">
                          {{ item.title }}
                        </span>
                        <Dot
                          v-if="isActive(item.url) || (item.url2 && isActive(item.url2))"
                          class="text-primary"
                          :size="72"
                          :stroke-width="6"
                        />
                     </NuxtLinkLocale>
                  </TooltipTrigger>
                  <TooltipContent side="right">{{ item.title }}</TooltipContent>
                </Tooltip>
             </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <!-- Connect -->
      <SidebarGroup>
        <SidebarGroupLabel>{{ t("Footer.connect") }}</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in connectLinks" :key="item.url">
               <Tooltip>
                  <TooltipTrigger as-child>
                     <NuxtLinkLocale
                        :to="item.url"
                        class="ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground gap-2 rounded-[calc(var(--radius-sm)+2px)] p-2 text-left text-xs transition-[width,height,padding] group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 flex w-full items-center overflow-hidden outline-hidden [&>span:last-child]:truncate [&_svg]:size-4 [&_svg]:shrink-0"
                     >
                        <component :is="item.icon" />
                        <span class="group-data-[collapsible=icon]:hidden">
                          {{ item.title }}
                        </span>
                        <Dot
                          v-if="isActive(item.url)"
                          class="text-primary"
                          :size="72"
                          :stroke-width="6"
                        />
                     </NuxtLinkLocale>
                  </TooltipTrigger>
                  <TooltipContent side="right">{{ item.title }}</TooltipContent>
               </Tooltip>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>

      <!-- Legal -->
      <SidebarGroup>
        <SidebarGroupLabel>{{ t("Footer.legal") }}</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem v-for="item in legalLinks" :key="item.url">
               <Tooltip>
                  <TooltipTrigger as-child>
                     <NuxtLinkLocale
                        :to="item.url"
                        class="ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground gap-2 rounded-[calc(var(--radius-sm)+2px)] p-2 text-left text-xs transition-[width,height,padding] group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 flex w-full items-center overflow-hidden outline-hidden [&>span:last-child]:truncate [&_svg]:size-4 [&_svg]:shrink-0"
                     >
                        <component :is="item.icon" />
                        <span class="group-data-[collapsible=icon]:hidden">
                          {{ item.title }}
                        </span>
                         <Dot
                          v-if="isActive(item.url)"
                          class="text-primary"
                          :size="72"
                          :stroke-width="6"
                        />
                     </NuxtLinkLocale>
                  </TooltipTrigger>
                  <TooltipContent side="right">{{ item.title }}</TooltipContent>
               </Tooltip>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>

    <SidebarFooter>
      <SidebarGroup>
        <SidebarGroupLabel class="group-data-[collapsible=icon]:hidden">
          &copy; {{ new Date().getFullYear() }} {{ t("Aboutme.name") }}
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <Langswitcher sidebar />
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarToggle />
            </SidebarMenuItem>
            <!-- Dev Only Link (optional) -->
             <SidebarMenuItem v-if="isDev">
                <SidebarMenuButton as-child>
                   <a
                      href="https://idx.google.com/import?url=https%3A%2F%2Fgithub.com%2FmcpeapsUnterstrichHD%2FmcpeapsUnterstrichHD"
                      target="_blank"
                      rel="noreferrer"
                   >
                    <img
                        height="32"
                        width="32"
                        alt="Open in IDX"
                        src="https://cdn.idx.dev/btn/open_purple_32.svg"
                    />
                   </a>
                </SidebarMenuButton>
             </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarFooter>
    <SidebarRail />
  </Sidebar>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from '@/components/ui/sidebar'
import UserAvatar, { type ImageProps } from '@/components/UserAvatar.vue' // Adjust import if renamed
// import { Link, usePathname } from '@/i18n/navigation' // Nuxt uses useRoute/NuxtLinkLocale
import { useI18n } from 'vue-i18n'
import TypingAnimation from '@/components/ui/TypingAnimation.vue'
import Langswitcher from '@/components/Langswitcher.vue'
import {
  Home,
  User,
  FolderKanban,
  FileText,
  Mail,
  Link as LinkIcon,
  Scale,
  Dot,
} from 'lucide-vue-next'
import SidebarToggle from '@/components/SidebarToggle.vue'

const { t } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
// Helper to check active route.
// Note: route.path includes locale in Nuxt i18n if strategy is prefix.
// localePath returns the localized path.
const isActive = (url: string) => {
    // If url is root "/", strictly match.
    // Otherwise check startsWith.
    // Better: use exact match or smart match.
    // Nuxt router link active class handles styling usually, but we need the Dot icon condition.
    const path = localePath(url)
    if (url === '/' || url === '') return route.path === path
    return route.path.startsWith(path) && (route.path === path || route.path.charAt(path.length) === '/')
    // Actually, simple strict match might be enough if not nested.
    // Let's rely on strict match if it worked in Next.js.
    // Next.js: pathname === item.url
}
const isDev = import.meta.dev

const navigationLinks = computed(() => [
  { title: t("Sites.root"), url: "/", icon: Home },
  { title: t("Sites.aboutme"), url: "/aboutme", icon: User },
  { title: t("Sites.projects"), url: "/projects", icon: FolderKanban },
  { title: t("Sites.cv"), url: "/cv", url2: "/cv/ats", icon: FileText },
])

const connectLinks = computed(() => [
  { title: t("Sites.contact"), url: "/contact", icon: Mail },
  { title: t("Sites.linkhub"), url: "/linkhub", icon: LinkIcon },
])

const legalLinks = computed(() => [
  { title: t("Sites.impressum"), url: "/imprint", icon: Scale },
])

const name = computed(() => t("Aboutme.name"))
const githubUserName = "mcpeapsUnterstrichHD"
const image = computed<ImageProps>(() => ({
  src: "/pictures/logo.png",
  alt: t("Logo.alt"),
}))
const imageFallback = "MAHD"

</script>
