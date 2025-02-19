<script setup lang="ts">
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
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarRail,
} from '@/components/ui/sidebar'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card'
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'

// Data setup
const today = new Date()
const birthday = new Date('2003-06-06')
const name = 'Fabian Aps'
const githubUserName = 'mcpeapsUnterstrichHD'
const image = {
  src: 'https://github.com/mcpeapsUnterstrichHD.png',
  alt: 'mcpeaps_HD Logo',
}
const imageFallback = 'MAHD'

// Calculate age
const age = computed(() => {
  let age = today.getFullYear() - birthday.getFullYear()
  const m = today.getMonth() - birthday.getMonth()
  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--
  }
  return age
})

// Navigation items
const items = [
  {
    title: 'Über mich',
    url: '/aboutme',
  },
  {
    title: 'Projekte',
    url: '/projects',
  },
  {
    title: 'Lebenslauf',
    url: '/lebenslauf',
  },
  {
    title: 'Impressum',
    url: '/impressum',
  },
]
</script>

<template>
  <aside class="z-50 sticky top-2 h-[calc(100vh-1rem)] shrink-0 float-left clear-left left-2 isolate print:hidden">
    <Sidebar variant="floating" collapsible="offcanvas" class="rounded-sm bg-background/80 backdrop-blur-sm">
      <SidebarHeader>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <HoverCard>
                  <HoverCardTrigger as-child>
                    <SidebarMenuButton as-child>
                      <NuxtLink to="/" class="p-6 hover:underline transition-colors">
                        <UserAvatar
                          :name="name"
                          :github-user-name="githubUserName"
                          :image="image"
                          :image-fallback="imageFallback"
                        />
                        <span>{{ name }}</span>
                      </NuxtLink>
                    </SidebarMenuButton>
                  </HoverCardTrigger>
                  <HoverCardContent class="w-80">
                    <section class="grid grid-flow-row grid-rows-2">
                      <p class="grid grid-cols-2 grid-flow-col items-center justify-center p-2">
                        <UserAvatar
                          :name="name"
                          :github-user-name="githubUserName"
                          :image="image"
                          :image-fallback="imageFallback"
                        />
                        <span class="text-lg">{{ name }}</span>
                      </p>
                      <p class="text-lg p-2">ITler/DJ/Producer aus Leidenschaft</p>
                      <p class="p-2">
                        Ich bin ein {{ age }} jähriger ITler/DJ/Producher und ich liebe es
                        Software zu entwikeln aber durch mein Praktikum bei der KfW
                        Bankengruppe hat mir gezeigt, dass mir Anwendungsbetreung auch nicht
                        schwer liegt, denoch mach ich die Entwicklung gerne als Hobby. Musik
                        ist dabei auch eine Leidenschaft von mir, egal ab hören oder
                        Produzieren.
                      </p>
                    </section>
                  </HoverCardContent>
                </HoverCard>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton as-child>
                  <a href="https://link.me/mcpeaps_hd" target="_blank" class="hover:underline transition-colors">
                    <span>Linkhub</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <Collapsible default-open class="group/collapsible">
                <SidebarMenuItem>
                  <CollapsibleTrigger as-child>
                    <SidebarMenuButton>
                      <span class="hover:underline transition-colors">Über mich</span>
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      <SidebarMenuSubItem v-for="item in items" :key="item.title">
                        <SidebarMenuButton as-child>
                          <NuxtLink :to="item.url" class="hover:underline transition-colors">
                            <span>{{ item.title }}</span>
                          </NuxtLink>
                        </SidebarMenuButton>
                      </SidebarMenuSubItem>
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton as-child>
                  <NuxtLink to="/" class="text-sm font-semibold hover:underline">
                    &copy; {{ today.getFullYear() }} Fabian Aps
                  </NuxtLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton as-child>
                  <a href="https://link.me/mcpeaps_hd" target="_blank" class="font-medium hover:underline transition-colors">
                    <span>Linksammlung</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton as-child>
                  <NuxtLink to="/" class="font-medium hover:underline transition-colors">
                    <span>Fabian Aps</span>
                  </NuxtLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton as-child>
                  <NuxtLink to="/impressum" class="font-medium hover:underline transition-colors">
                    <span>Impressum</span>
                  </NuxtLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton as-child>
                  <a
                    href="https://idx.google.com/import?url=https%3A%2F%2Fgithub.com%2FmcpeapsUnterstrichHD%2FmcpeapsUnterstrichHD"
                    target="_blank"
                    class="hover:underline transition-colors"
                  >
                    <picture>
                      <source
                        media="(prefers-color-scheme: dark)"
                        srcset="https://cdn.idx.dev/btn/open_light_32.svg"
                      />
                      <source
                        media="(prefers-color-scheme: light)"
                        srcset="https://cdn.idx.dev/btn/open_dark_32.svg"
                      />
                      <img
                        height="32"
                        width="32"
                        alt="Open in IDX"
                        src="https://cdn.idx.dev/btn/open_purple_32.svg"
                      />
                    </picture>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  </aside>
</template>