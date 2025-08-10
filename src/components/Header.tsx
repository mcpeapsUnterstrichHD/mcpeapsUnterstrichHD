import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { useRouter, useSearch } from '@tanstack/react-router';
import {getLanguageName, LanguagesNUM} from "@/lib/lang.ts";

import { SidebarToggle } from "@/components/sidebar-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button.tsx";

export function NavBar() {
  const router = useRouter();
  const search = useSearch({ strict: false });
  const currentLang = search.lang ?? LanguagesNUM.de;
  const setLanguage = (lang: LanguagesNUM) => {
    router.navigate({
      search: {
        lang: lang,
  },
      reloadDocument: true,
    });
  };

  return (
    <nav className="top sticky top-0 z-10">
      <NavigationMenu className="no-print py-2">
        <NavigationMenuList className="fixed right-2">
          <NavigationMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  className="rounded-full bg-transparent backdrop-blur-sm font-bold"
                  variant="outline"
                >
                  {getLanguageName(currentLang)}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="bg-transparent backdrop-blur-sm"
                align="end"
              >
                {currentLang !== LanguagesNUM.de && (
                  <DropdownMenuItem onClick={() => setLanguage(LanguagesNUM.de)} >

                    {getLanguageName(LanguagesNUM.de)}
                  </DropdownMenuItem>
                )}
                {currentLang !== LanguagesNUM.en_US && (
                  <DropdownMenuItem onClick={() => setLanguage(LanguagesNUM.en_US)}>
                    {getLanguageName(LanguagesNUM.en_US)}
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuItem>
          <NavigationMenuItem className={
            `${navigationMenuTriggerStyle()}rounded-full bg-transparent backdrop-blur-sm`
          }
          >
            <SidebarToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
