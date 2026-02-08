"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
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
} from "@/components/ui/sidebar";
import UserAvatar, { type ImageProps } from "@/components/userAvatar";
import {Link, usePathname} from '@/i18n/navigation';
import {useTranslations} from 'next-intl';
import { ViewTransition } from "react";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { Langswitcher } from "@/components/Langswitcher";
import {
  Home,
  User,
  FolderKanban,
  FileText,
  Mail,
  LinkIcon,
  Scale,
  Dot,
  LucideProps,
} from "lucide-react";
import { SidebarToggle } from "@/components/sidebar-toggle";
import * as React from "react";

interface SidebarLinks {
  title: string,
  url: string,
  url2?: string,
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const t = useTranslations();
  const pathname = usePathname();

  const today = new Date();
  const birthday = new Date("2003-06-06");
  let age = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }

  // Navigation links with icons
  const navigationLinks: SidebarLinks[] = [
    { title: t("Sites.root"), url: "/", icon: Home },
    { title: t("Sites.aboutme"), url: "/aboutme/", icon: User },
    { title: t("Sites.projects"), url: "/projects/", icon: FolderKanban },
    { title: t("Sites.cv"), url: "/cv/", url2: "/cv/ats/", icon: FileText },
  ];

  // Connect/Contact links with icons
  const connectLinks: SidebarLinks[] = [
    { title: t("Sites.contact"), url: "/contact/", icon: Mail },
    { title: t("Sites.linkhub"), url: "/linkhub/", icon: LinkIcon },
  ];

  // Legal links with icons
  const legalLinks: SidebarLinks[] = [
    { title: t("Sites.impressum"), url: "/imprint/", icon: Scale },
  ];

  const name = t("Aboutme.name");
  const githubUserName = "mcpeapsUnterstrichHD";
  const image: ImageProps = {
    src: "/pictures/logo.png",
    alt: t("Logo.alt"),
  };
  const imageFallback = "MAHD";

  return (
    <ViewTransition enter="slide" exit="root" update="root">
      <Sidebar
        collapsible="offcanvas"
        className="no-print backdrop-blur-sm rounded-sm"
        {...props}
      >
        <SidebarHeader>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <Tooltip>
                    <TooltipTrigger
                      render={<Link href="/" />}
                      className="h-auto py-2 justify-start ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground gap-2 rounded-[calc(var(--radius-sm)+2px)] p-2 text-left text-xs transition-[width,height,padding] group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 flex w-full items-center overflow-hidden outline-hidden"
                    >
                      <UserAvatar
                        name={name}
                        githubUserName={githubUserName}
                        image={image}
                        imageFallback={imageFallback}
                      />
                      <TypingAnimation
                        typeSpeed={145}
                        pauseDelay={1450}
                        deleteSpeed={75}
                        showCursor
                        blinkCursor
                        loop
                        startOnView
                        cursorStyle="underscore"
                        className="group-data-[collapsible=icon]:hidden"
                      >
                        {name}
                      </TypingAnimation>
                    </TooltipTrigger>
                    <TooltipContent side="right">{name}</TooltipContent>
                  </Tooltip>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarHeader>
        <SidebarContent>
          {/* Navigation */}
          <SidebarGroup>
            <SidebarGroupLabel>{t("Footer.navigation")}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navigationLinks.map((item) => (
                  <SidebarMenuItem key={item.url}>
                    <Tooltip>
                      <TooltipTrigger
                        render={<Link href={item.url} />}
                        className="ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground gap-2 rounded-[calc(var(--radius-sm)+2px)] p-2 text-left text-xs transition-[width,height,padding] group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 flex w-full items-center overflow-hidden outline-hidden [&>span:last-child]:truncate [&_svg]:size-4 [&_svg]:shrink-0"
                      >
                        <item.icon />
                        <span className="group-data-[collapsible=icon]:hidden">
                          {item.title}
                        </span>
                        {(pathname === item.url || pathname === item.url2) && (
                          <Dot
                            className="text-primary"
                            size={72}
                            strokeWidth={6}
                          />
                        )}
                      </TooltipTrigger>
                      <TooltipContent side="right">{item.title}</TooltipContent>
                    </Tooltip>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          {/* Connect */}
          <SidebarGroup>
            <SidebarGroupLabel>{t("Footer.connect")}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {connectLinks.map((item) => (
                  <SidebarMenuItem key={item.url}>
                    <Tooltip>
                      <TooltipTrigger
                        render={<Link href={item.url} />}
                        className="ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground gap-2 rounded-[calc(var(--radius-sm)+2px)] p-2 text-left text-xs transition-[width,height,padding] group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 flex w-full items-center overflow-hidden outline-hidden [&>span:last-child]:truncate [&_svg]:size-4 [&_svg]:shrink-0"
                      >
                        <item.icon />
                        <span className="group-data-[collapsible=icon]:hidden">
                          {item.title}
                        </span>
                        {pathname === item.url && (
                          <Dot
                            className="text-primary"
                            size={72}
                            strokeWidth={6}
                          />
                        )}
                      </TooltipTrigger>
                      <TooltipContent side="right">{item.title}</TooltipContent>
                    </Tooltip>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          {/* Legal */}
          <SidebarGroup>
            <SidebarGroupLabel>{t("Footer.legal")}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {legalLinks.map((item) => (
                  <SidebarMenuItem key={item.url}>
                    <Tooltip>
                      <TooltipTrigger
                        render={<Link href={item.url} />}
                        className="ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground gap-2 rounded-[calc(var(--radius-sm)+2px)] p-2 text-left text-xs transition-[width,height,padding] group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 flex w-full items-center overflow-hidden outline-hidden [&>span:last-child]:truncate [&_svg]:size-4 [&_svg]:shrink-0"
                      >
                        <item.icon />
                        <span className="group-data-[collapsible=icon]:hidden">
                          {item.title}
                        </span>
                        {pathname === item.url && (
                          <Dot
                            className="text-primary"
                            size={72}
                            strokeWidth={6}
                          />
                        )}
                      </TooltipTrigger>
                      <TooltipContent side="right">{item.title}</TooltipContent>
                    </Tooltip>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarGroup>
            <SidebarGroupLabel className="group-data-[collapsible=icon]:hidden">
              &copy; {today.getFullYear()} {t("Aboutme.name")}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <Langswitcher sidebar />
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarToggle />
                </SidebarMenuItem>
                {process.env.NODE_ENV === "development" && (
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      render={
                        <Link
                          href="https://idx.google.com/import?url=https%3A%2F%2Fgithub.com%2FmcpeapsUnterstrichHD%2FmcpeapsUnterstrichHD"
                          target="_blank"
                          rel="noreferrer"
                        />
                      }
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
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
    </ViewTransition>
  );
}
