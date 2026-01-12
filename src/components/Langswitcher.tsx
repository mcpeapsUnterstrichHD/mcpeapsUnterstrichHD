"use client";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { languages, type Language } from "@/lib/lang";
import { ChevronRight, ChevronDown, Globe } from "lucide-react";
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

  // Custom filter: allow searching by name, country, code
  const filterLanguages = (value: string, search: string) => {
    if (value.toLowerCase().includes(search.toLowerCase())) return 1;
    return 0;
  };

  const LanguageCommand = () => (
    <Command filter={filterLanguages}>
      <CommandInput
        placeholder="Search language..."
        value={search}
        onValueChange={setSearch}
      />
      <CommandList>
        <CommandEmpty>{t("noLanguageFound")}</CommandEmpty>
        <CommandGroup heading="Languages">
          {languages.map((lang) => (
            <CommandItem
              key={lang.code}
              value={`${lang.name} (${lang.country}) ${lang.code}`}
              onSelect={() => setLanguage(lang)}
              className="cursor-pointer"
            >
              <span className={lang.code === locale ? "font-bold" : ""}>
                 {lang.name} ({lang.country})
              </span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );

  // Sidebar mode: use Collapsible with SidebarMenuSub
  if (sidebar) {
    return (
      <Collapsible className="group/collapsible" open={open} onOpenChange={setOpen}>
        <Command filter={filterLanguages} shouldFilter={true}>
             {/* Main Container */}
             <div className="ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground gap-2 rounded-[calc(var(--radius-sm)+2px)] p-2 text-left text-xs transition-[width,height,padding] group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! focus-visible:ring-2 flex w-full items-center overflow-hidden outline-hidden">
               <Tooltip>
                 <TooltipTrigger
                    className="shrink-0 outline-none cursor-pointer"
                    onClick={() => setOpen(true)}
                 >
                    <Globe />
                 </TooltipTrigger>
                 <TooltipContent side="right">
                    {currentLanguage?.name} ({currentLanguage?.country})
                 </TooltipContent>
               </Tooltip>

               <div className="flex flex-1 items-center overflow-hidden group-data-[collapsible=icon]:hidden">
                  <CommandInput
                      placeholder="Search language..."
                      value={open ? search : `${currentLanguage?.name} (${currentLanguage?.country})`}
                      onValueChange={(val) => {
                          setSearch(val);
                          if (!open) setOpen(true);
                      }}
                      className="h-auto p-0 border-0 focus-visible:ring-0 bg-transparent truncate w-full cursor-pointer placeholder:text-sidebar-foreground/70"
                      onFocus={() => {
                          setOpen(true);
                          setSearch("");
                      }}
                  />
               </div>

               <CollapsibleTrigger className="ml-auto cursor-pointer p-0.5 rounded-sm hover:bg-sidebar-accent/50 outline-none focus-visible:ring-2 ring-sidebar-ring">
                    <ChevronRight className={`transition-transform duration-200 ${open ? "rotate-90" : ""} group-data-[collapsible=icon]:hidden shrink-0`} />
               </CollapsibleTrigger>
             </div>

           <CollapsibleContent>
               <SidebarMenuSub>
                  <CommandList className="px-2 py-1.5 max-h-[300px] overflow-y-auto">
                    <CommandEmpty>{t("noLanguageFound")}</CommandEmpty>
                    <CommandGroup heading="Languages">
                      {languages.map((lang) => (
                        <CommandItem
                          key={lang.code}
                          value={`${lang.name} (${lang.country}) ${lang.code}`}
                          onSelect={() => setLanguage(lang)}
                          className="cursor-pointer"
                        >
                          <span className={lang.code === locale ? "font-bold" : ""}>
                             {lang.name} ({lang.country})
                          </span>
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
               </SidebarMenuSub>
           </CollapsibleContent>
        </Command>
      </Collapsible>
    );
  }

  // Default mode: use Popover for better search experience than DropdownMenu
  return (
    <ViewTransition enter="slide" exit="root" update="root">
        <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
            <Button
              className="rounded-sm text-foreground bg-card/50 backdrop-blur-sm text-center font-bold print:hidden min-w-44 justify-between px-3"
              variant="outline"
              role="combobox"
              aria-expanded={open}
            >
             <span className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                {currentLanguage?.name || "Language"} {"("}{currentLanguage?.country || "country"}{")"}
             </span>
             <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0 bg-card/50 backdrop-blur-sm text-foreground">
             <LanguageCommand />
        </PopoverContent>
        </Popover>
    </ViewTransition>
  );
}
