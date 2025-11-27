"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
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
} from "@/components/ui/sidebar";
import UserAvatar, { type ImageProps } from "@/components/userAvatar";
import {Link} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';

export function AppSidebar() {
  const t = useTranslations();

  const today = new Date();
  const birthday = new Date("2003-06-06");
  let age = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }

  // submenu items.
  const items: {
    title: string;
    url: string;
  }[] = [
    {
      title: t("Sites.aboutme"),
      url: "/aboutme",
    },
    {
      title: t("Sites.projects"),
      url: "/projects",
    },
    {
      title: t("Sites.cv"),
      url: "/cv",
    },
    {
      title: t("Sites.contact"),
      url: "/contact",
    },
    {
      title: t("Sites.impressum"),
      url: "/imprint",
    },
  ];

  const name = t("Aboutme.name");
  const githubUserName = "mcpeapsUnterstrichHD";
  const image: ImageProps = {
    src: "/pictures/logo.png",
    alt: t("Logo.alt"),
  };
  const imageFallback = "MAHD";

  return (
    <aside className="float-left clear-left sticky z-10 top no-print">
      <Sidebar variant="floating" collapsible="offcanvas">
        <SidebarHeader>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <SidebarMenuButton asChild>
                        <Link href="/" className="p-6">
                          <UserAvatar
                            name={name}
                            githubUserName={githubUserName}
                            image={image}
                            imageFallback={imageFallback}
                          />
                          <span>{name}</span>
                        </Link>
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
                          <span className="text-lg">{name}</span>
                        </p>
                        <p className="text-lg p-2">{t("Aboutme.title")}</p>
                        <p className="p-2">
                          {t("Aboutme.description", { age: age })}
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
                    <Link href="/linkhub">
                      <span>{t("Sites.linkhub")}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <Collapsible defaultOpen className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <span>{t("Sites.aboutme")}</span>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuButton asChild>
                              <Link href={item.url}>
                                <span>{item.title}</span>
                              </Link>
                            </SidebarMenuButton>
                          </SidebarMenuSubItem>
                        ))}
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
            <SidebarGroupLabel>
              &copy; {today.getFullYear()} Fabian Aps
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem className="rounded-full bg-transparent backdrop-blur-sm">
                  <SidebarMenuButton asChild>
                  <Link
                    href="/linkhub"
                    >
                      <span>{t("Sites.linkhub")}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem className="rounded-full bg-transparent backdrop-blur-sm">
                  <SidebarMenuButton asChild>
                    <Link href="/">
                      <span>{t("Aboutme.name")}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem className="rounded-full bg-transparent backdrop-blur-sm">
                  <SidebarMenuButton asChild>
                    <Link href="/imprint">
                      <span>{t("Sites.impressum")}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem className="rounded-full bg-transparent backdrop-blur-sm">
                  <SidebarMenuButton asChild>
                    <a
                      href="https://idx.google.com/import?url=https%3A%2F%2Fgithub.com%2FmcpeapsUnterstrichHD%2FmcpeapsUnterstrichHD"
                      target="_blank"
                      rel="noreferrer"
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
                        <img
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
      </Sidebar>
    </aside>
  );
}
