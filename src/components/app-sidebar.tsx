import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

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
} from "@/components/ui/sidebar"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import UserAvatar, { ImageProps } from "./userAvatar";
import Image from "next/image";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";

// submenu items.
const items = [
  {
    title: "Über mich",
    url: "/aboutme",
  },
  {
    title: "Projekte",
    url: "/projekte",
  },
  {
    title: "Lebenslauf",
    url: "/lebenslauf",
  },
  {
    title: "Impressum",
    url: "/impressum",
  },
]



export function AppSidebar() {
  const today = new Date();
  const birthday = new Date("2003-06-06");
  var age = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  const name = "Fabian Aps";
  const githubUserName = "mcpeapsUnterstrichHD";
  const image: ImageProps = {
    src: "https://github.com/mcpeapsUnterstrichHD.png",
    alt: "mcpeaps_HD Logo",
  };
  const imageFallback = "MAHD";
  return (
    <aside className="float-left clear-left isolate sticky z-10 top">
      <Sidebar variant="floating" collapsible="offcanvas">
        <SidebarHeader>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <SidebarMenuButton asChild>
                        <a href="/" className="p-6">
                          <UserAvatar
                            name={name}
                            githubUserName={githubUserName}
                            image={image}
                            imageFallback={imageFallback}
                          />
                          <span>
                            {name}
                          </span>
                        </a>
                      </SidebarMenuButton>
                    </HoverCardTrigger>
                    <HoverCardContent className=" w-80">
                      <section className="grid grid-flow-row grid-rows-2">
                        <p className="grid grid-cols-2 grid-flow-col items-center justify-center p-2">
                          <UserAvatar
                            name={name}
                            githubUserName={githubUserName}
                            image={image}
                            imageFallback={imageFallback}
                          />
                          <span className="text-lg">
                            {name}
                          </span>
                        </p>
                        <p className="text-lg p-2">
                          ITler/DJ/Producer aus Leidenschaft
                        </p>
                        <p className="p-2">
                          Ich bin ein {age} jähriger ITler/DJ/Producher und ich liebe es
                          Software zu entwikeln aber durch mein Praktikum bei der KfW
                          Bankengruppe hat mir gezeigt, dass mir Anwendungsbetreung auch nicht
                          schwer liegt, denoch mach ich die Entwicklung gerne als Hobby. Musik
                          ist dabei auch eine Leidenschaft von mir, egal ab hören oder
                          Produzieren.{" "}
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
                  <SidebarMenuButton asChild>
                    <a href="https://link.me/mcpeaps_hd" target="_blank">
                      <span >
                        Linkhub
                      </span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <Collapsible defaultOpen className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <span >
                          Über mich
                        </span>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuButton asChild>
                              <a href={item.url}>
                                <span>{item.title}</span>
                              </a>
                            </SidebarMenuButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub></CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarGroup>
            <SidebarGroupLabel>&copy; {today.getFullYear()} Fabian Aps</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem className="rounded-full bg-transparent backdrop-blur-sm">
                  <SidebarMenuButton asChild>
                    <a
                      href="https://link.me/mcpeaps_hd"
                      target="_blank"
                    >
                      <span >Linksammlung</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem className="rounded-full bg-transparent backdrop-blur-sm">
                  <SidebarMenuButton asChild>
                    <a
                      href="/"
                    >
                      <span >Fabian Aps</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem className="rounded-full bg-transparent backdrop-blur-sm">
                  <SidebarMenuButton asChild>
                    <a
                      href="/impressum"
                    >
                      <span >Impressum</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem className="rounded-full bg-transparent backdrop-blur-sm">
                  <SidebarMenuButton asChild>
                    <a
                      href="https://idx.google.com/import?url=https%3A%2F%2Fgithub.com%2FmcpeapsUnterstrichHD%2FmcpeapsUnterstrichHD"
                      target="_blank"
                    >
                      <picture>
                        <source
                          media="(prefers-color-scheme: dark)"
                          srcSet="https://cdn.idx.dev/btn/open_light_32.svg"
                        />
                        <source
                          media="(prefers-color-scheme: light)"
                          srcSet="https://cdn.idx.dev/btn/open_dark_32.svg"
                        />
                        <Image
                          height={32}
                          width={32}
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
      </Sidebar >
    </aside>
  )
}
