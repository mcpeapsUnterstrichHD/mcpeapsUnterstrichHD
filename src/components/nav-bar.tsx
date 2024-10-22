"use client";

import Link from "next/link";
import * as React from "react";

//import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { ThemeToggle } from "@/components/theme-toggle";

import { SidebarToggle } from "./sidebar-toggle";

export function NavBar() {
  return (
    <nav className="top sticky top-0 z-10">
      <NavigationMenu className="no-print py-2">
        <NavigationMenuList className="fixed right-2">
          <NavigationMenuItem className={
            `${navigationMenuTriggerStyle()}rounded-full bg-transparent backdrop-blur-sm`
          }
          >
            <SidebarToggle />
          </NavigationMenuItem>
          <NavigationMenuItem
            className={
              `${navigationMenuTriggerStyle()}rounded-full bg-transparent backdrop-blur-sm`
            }
          >
            <ThemeToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}