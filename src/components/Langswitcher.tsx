"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { languages, type Language } from "@/lib/lang";
import { ChevronRight, ChevronDown, Globe, Search, Dot } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { ViewTransition } from "react";
import * as React from "react";

interface LangswitcherProps {
  sidebar?: boolean;
}

export function Langswitcher({ sidebar = false }: LangswitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Sidebar");
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");

  const currentLanguage = languages.find((lang) => lang.code === locale);

  // Calculate longest language label for dynamic min-width
  const longestLabelLength = React.useMemo(() => {
    return Math.max(...languages.map((lang) => `${lang.name} (${lang.country})`.length));
  }, []);

  const setLanguage = React.useCallback((lang: Language) => {
    router.replace(pathname, { locale: lang.code });
    setOpen(false);
    setSearch("");
  }, [pathname, router]);

  // Auto-select logic for exact matches
  React.useEffect(() => {
    if (!search) return;
    const lowerSearch = search.toLowerCase();
    const exactMatch = languages.find(
      (lang) =>
        lang.code.toLowerCase() === lowerSearch ||
        `${lang.name} (${lang.country})`.toLowerCase() === lowerSearch
    );
    if (exactMatch) {
      setLanguage(exactMatch);
    }
  }, [search, setLanguage]);

  // Manual filtering
  const filteredLanguages = languages.filter((lang) => {
    if (!search) return true;
    const searchValue = `${lang.name} (${lang.country}) ${lang.code}`.toLowerCase();
    return searchValue.includes(search.toLowerCase());
  });

  // Chevron icon based on sidebar context
  const ChevronIcon = sidebar ? ChevronRight : ChevronDown;

  // Container classes - sidebar uses special collapsed-icon behavior
  const containerClasses = sidebar
    ? "ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground gap-2 rounded-[calc(var(--radius-sm)+2px)] p-2 text-left text-xs transition-[width,height,padding] group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 flex w-full items-center overflow-hidden outline-hidden"
    : "gap-2 rounded-md border border-border/50 bg-card/50 backdrop-blur-sm p-2 text-left text-sm hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground focus-visible:ring-2 flex items-center outline-hidden cursor-pointer";

  // Dynamic min-width for footer mode: longest label + icons (globe ~2ch, search ~2ch, chevron ~2ch, padding ~3ch)
  const minWidth = !sidebar ? `${longestLabelLength + 9}ch` : undefined;

  // Input wrapper classes
  const inputWrapperClasses = sidebar
    ? "flex flex-1 min-w-0 items-center gap-1.5 group-data-[collapsible=icon]:hidden"
    : "flex flex-1 min-w-0 items-center gap-1.5";

  // List container - sidebar uses SidebarMenuSub, default uses regular div
  const ListWrapper = sidebar ? SidebarMenuSub : "div";
  const listClasses = sidebar
    ? "px-2 py-1.5 max-h-[300px] overflow-y-auto flex flex-col gap-2"
    : "absolute bottom-full left-0 right-0 mb-1 px-2 py-1.5 max-h-[200px] overflow-y-auto flex flex-col gap-2 bg-card/95 backdrop-blur-sm border border-border/50 rounded-md shadow-lg z-50";

  // Button hover classes - fixed height for consistency
  const buttonClasses = sidebar
    ? "cursor-pointer px-2 py-1.5 h-8 text-xs rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-left w-full"
    : "cursor-pointer px-2 py-1.5 h-8 text-sm rounded-md hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-left w-full";

  return (
    <ViewTransition enter="slide" exit="root" update="root">
    <Collapsible className={`group/collapsible ${sidebar ? "" : "relative"}`} open={open} onOpenChange={setOpen}>
      {/* Main trigger row */}
      <div className={containerClasses} style={{ minWidth }}>
        {sidebar ? (
          <Tooltip>
            <TooltipTrigger
              className="shrink-0 outline-none cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <Globe className="size-4" />
            </TooltipTrigger>
            <TooltipContent side="right">
              {currentLanguage?.name} ({currentLanguage?.country})
            </TooltipContent>
          </Tooltip>
        ) : (
          <Globe className="size-4 shrink-0 text-muted-foreground" />
        )}

        <div className={inputWrapperClasses}>
          {open && <Search className="size-3.5 shrink-0 opacity-50" />}
          <input
            type="text"
            placeholder={t("searchLanguage")}
            value={open ? search : `${currentLanguage?.name} (${currentLanguage?.country})`}
            onChange={(e) => {
              setSearch(e.target.value);
              if (!open) setOpen(true);
            }}
            className="h-auto p-0 border-0 focus-visible:ring-0 focus:outline-none bg-transparent w-full cursor-pointer placeholder:text-muted-foreground/70 text-inherit"
            onFocus={() => {
              setOpen(true);
              setSearch("");
            }}
          />
        </div>

        <CollapsibleTrigger className="ml-auto cursor-pointer p-0.5 rounded-sm hover:bg-muted/50 outline-none focus-visible:ring-2">
          <ChevronIcon className={`size-4 transition-transform duration-200 ${sidebar ? (open ? "rotate-90" : "") : (open ? "" : "-rotate-90")} ${sidebar ? "group-data-[collapsible=icon]:hidden" : ""} shrink-0 opacity-50`} />
        </CollapsibleTrigger>
      </div>

      <CollapsibleContent>
        <ListWrapper className={listClasses}>
          {filteredLanguages.length === 0 ? (
            <span className="py-2 text-center text-xs text-muted-foreground">{t("noLanguageFound")}</span>
          ) : (
            filteredLanguages.map((lang) => (
              <button
                type="button"
                key={lang.code}
                onClick={() => setLanguage(lang)}
                className={`${buttonClasses} flex items-center justify-between`}
              >
                <span className={lang.code === locale ? "font-bold" : ""}>
                  {lang.name} ({lang.country})
                </span>
                {lang.code === locale && (
                  <Dot className="text-primary" size={32} strokeWidth={6} />
                )}
              </button>
            ))
          )}
        </ListWrapper>
      </CollapsibleContent>
    </Collapsible>
    </ViewTransition>
  );
}
