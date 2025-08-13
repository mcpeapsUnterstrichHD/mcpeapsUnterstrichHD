import logo from "@/assets/pictures/logo.png";
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
import { LanguagesNUM } from "@/lib/lang.ts";
import { Link, useSearch } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export function AppSidebar() {
  const { t } = useTranslation();
  const search = useSearch({ strict: false });
  const currentLang = search.lang ?? LanguagesNUM.de;

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
      title: t("sites.aboutme"),
      url: "/aboutme",
    },
    {
      title: t("sites.projects"),
      url: "/projects",
    },
    {
      title: t("sites.cv"),
      url: "/cv",
    },
    {
      title: t("sites.contact"),
      url: "/contact",
    },
    {
      title: t("sites.impressum"),
      url: "/impressum",
    },
  ];
  const name = t("aboutme.name");
  const githubUserName = "mcpeapsUnterstrichHD";
  const image: ImageProps = {
    src: logo,
    alt: t("logo.alt"),
  };
  const imageFallback = "MAHD";
  return (
    <aside className="float-left clear-left isolate sticky z-10 top-2 left-2 no-print">
      <Sidebar variant="floating" collapsible="offcanvas">
        <SidebarHeader>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <HoverCard>
                    <HoverCardTrigger asChild>
                      <SidebarMenuButton asChild>
                        <Link
                          to="/"
                          className="p-6"
                          search={{
                            lang: currentLang,
                          }}
                        >
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
                        <p className="text-lg p-2">{t("aboutme.title")}</p>
                        <p className="p-2">
                          {t("aboutme.description", { age })}
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
                    <a
                      href="https://link.me/mcpeaps_hd"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>{t("sites.linkhub")}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <Collapsible defaultOpen className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        <span>{t("sites.aboutme")}</span>
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {items.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuButton asChild>
                              <Link
                                to={item.url}
                                search={{
                                  lang: currentLang,
                                }}
                              >
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
                    <a
                      href="https://link.me/mcpeaps_hd"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>{t("sites.linkhub")}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem className="rounded-full bg-transparent backdrop-blur-sm">
                  <SidebarMenuButton asChild>
                    <Link
                      to="/"
                      search={{
                        lang: currentLang,
                      }}
                    >
                      <span>{t("aboutme.name")}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem className="rounded-full bg-transparent backdrop-blur-sm">
                  <SidebarMenuButton asChild>
                    <Link
                      to="/impressum"
                      search={{
                        lang: currentLang,
                      }}
                    >
                      <span>{t("sites.impressum")}</span>
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
