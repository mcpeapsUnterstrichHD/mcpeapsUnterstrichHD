"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
//import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { ThemeToggle } from "@/components/theme-toggle"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function NavBar() {
  return (
    <NavigationMenu className="mt-2 mr-2 ml-2 mb-2">
      <NavigationMenuList>
      <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink>
                <div className="flex items-center">
                    <div className="">
                    <Avatar>
                      <AvatarImage src="https://github.com/mcpeapsUnterstrichHD.png" />
                      <AvatarFallback>MAHD</AvatarFallback>
                    </Avatar>
                    </div>
                    <div className="ml-2 mr-2 text-sm font-medium">
                      Fabian Aps
                    </div>
                </div>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
        <Link href="/musik" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Musik
            </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Über mich</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-5">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Avatar>
                      <AvatarImage src="https://github.com/mcpeapsUnterstrichHD.png" />
                      <AvatarFallback>MAHD</AvatarFallback>
                    </Avatar>

                    <div className="mb-2 mt-4 text-lg font-medium">
                      Fabian Aps
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Developer/DJ/Producer aus Leidenschaft
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/aboutme" title="Über mich">
                Wissenswertes über Mich
              </ListItem>
              <ListItem href="/projekte" title="Projekte">
                Meine Projekte
              </ListItem>
              <ListItem href="/lebenslauf" title="Lebenslauf">
                Mein aktueller Lebenslauf
              </ListItem>
              <ListItem href="https://linktr.ee/mcpeaps_hd" title="Linksammlung">
                Eine Verteilerseite zu Seiten Auserhalb dieser
              </ListItem>
              <ListItem href="/Impressum" title="Impressum" />
              
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink>
                <ThemeToggle />
            </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
