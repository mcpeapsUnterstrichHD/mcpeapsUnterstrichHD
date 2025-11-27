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
    <nav className="top sticky top-0 z-10">
      <NavigationMenu className="print:hidden py-2">
        <NavigationMenuList className="fixed right-2 print:hidden">
          <NavigationMenuItem
            className={`${navigationMenuTriggerStyle()}rounded-full bg-transparent backdrop-blur-sm print:hidden`}
          >
            <Langswitcher />
          </NavigationMenuItem>
          <NavigationMenuItem
            className={`${navigationMenuTriggerStyle()}rounded-full bg-transparent backdrop-blur-sm print:hidden`}
          >
            <SidebarToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
