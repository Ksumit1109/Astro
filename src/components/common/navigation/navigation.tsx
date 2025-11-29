"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Navbar,
  NavBody,
  NavbarLogo,
  NavbarButton,
} from "@/components/ui/resizable-navbar";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function Navigation() {
  return (
    <Navbar>
      <NavBody>
        <NavbarLogo />
        <NavigationMenu>
          <NavigationMenuList className="flex-wrap">
            <NavigationMenuItem>
              <NavigationMenuLink hoverIndex={0} asChild>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger hoverIndex={1}>
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-lightground">
                <ul className="grid gap-2 w-[300px] p-1">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="#kundli"
                        className="block select-none space-y-1 rounded-md  leading-none no-underline outline-none transition-colors hover:bg-hoverground focus:bg-hoverground focus:text-muted-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Kundli
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Generate detailed birth chart analysis
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="#matchmaking"
                        className="block select-none space-y-1 rounded-md  leading-none no-underline outline-none transition-colors hover:bg-hoverground focus:bg-hoverground focus:text-muted-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Match Making
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Check horoscope compatibility
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="#numerology"
                        className="block select-none space-y-1 rounded-md  leading-none no-underline outline-none transition-colors hover:bg-hoverground focus:bg-hoverground focus:text-muted-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Numerology
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Discover the power of numbers
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="#panchang"
                        className="block select-none space-y-1 rounded-md  leading-none no-underline outline-none transition-colors hover:bg-hoverground focus:bg-hoverground focus:text-muted-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Panchang
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Daily astrological calendar
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="#rashifal"
                        className="block select-none space-y-1 rounded-md  leading-none no-underline outline-none transition-colors hover:bg-hoverground focus:bg-hoverground focus:text-muted-foreground"
                      >
                        <div className="text-sm font-medium leading-none">
                          Rashifal
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Daily horoscope predictions
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink hoverIndex={2} asChild>
                <Link href="/#">Docs</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink hoverIndex={3} asChild>
                <Link href="/#">Pricing</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          {/* <NavbarButton variant="secondary">Login</NavbarButton> */}
          <NavbarButton variant="primary">Book a call</NavbarButton>
        </div>
      </NavBody>
    </Navbar>
  );
}
