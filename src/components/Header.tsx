import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Langswitcher } from "@/components/Langswitcher";
import { SidebarToggle } from "@/components/sidebar-toggle";

export function NavBar() {
  return (
    <header className="fixed right-2 top-0 z-20 w-full">
      <NavigationMenu className="print:hidden py-2 w-full max-w-none justify-end">
        <NavigationMenuList className="flex gap-2 pr-4 print:hidden">
          <NavigationMenuItem
            className={`rounded-full bg-background/50 backdrop-blur-sm print:hidden`}
          >
            <Langswitcher />
          </NavigationMenuItem>
          <NavigationMenuItem
            className={`rounded-full bg-background/50 backdrop-blur-sm print:hidden`}
          >
            <SidebarToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}
