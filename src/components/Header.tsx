import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";


import { SidebarToggle } from "@/components/sidebar-toggle";

export function NavBar() {
  return (
    <nav className="top sticky top-0 z-10 print:hidden">
      <NavigationMenu className="no-print py-2">
        <NavigationMenuList className="fixed right-2">
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
