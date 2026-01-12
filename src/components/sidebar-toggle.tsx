"use client";

import { useSidebar } from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { PanelLeft } from "lucide-react";
import { useTranslations } from "next-intl";
import { ViewTransition } from "react";

interface SidebarToggleProps {
  /** Show in header style (rounded, backdrop) vs sidebar style */
  variant?: "header" | "sidebar";
}

export function SidebarToggle({ variant = "sidebar" }: SidebarToggleProps) {
  const { toggleSidebar, state } = useSidebar();
  const t = useTranslations();

  const baseClasses = "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground gap-2 rounded-[calc(var(--radius-sm)+2px)] p-2 text-left text-xs transition-[width,height,padding] focus-visible:ring-2 flex items-center overflow-hidden outline-hidden cursor-pointer";

  const variantClasses = variant === "header"
    ? "rounded-sm text-foreground bg-card/50 backdrop-blur-sm"
    : "w-full group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2!";

  return (
    <ViewTransition enter="slide" exit="root" update="root">
      <Tooltip>
        <TooltipTrigger
          onClick={toggleSidebar}
          className={`${baseClasses} ${variantClasses}`}
        >
          <PanelLeft className="h-4 w-4" />
            <span className="group-data-[collapsible=icon]:hidden">
              {t("Sidebar.toggleSidebar")}
            </span>
        </TooltipTrigger>
        <TooltipContent side="right">
          {t("Sidebar.toggleSidebar")}
        </TooltipContent>
      </Tooltip>
    </ViewTransition>
  );
}
