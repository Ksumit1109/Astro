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
              <NavigationMenuTrigger hoverIndex={0}>Home</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <div className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6">
                      <div className="mb-2 text-lg font-medium sm:mt-4">
                        shadcn/ui
                      </div>
                      <p className="text-muted-foreground text-sm leading-tight">
                        Beautifully designed components built with Tailwind CSS.
                      </p>
                    </div>
                  </li>
                  <Link href="/docs" title="Introduction">
                    Re-usable components built using Radix UI and Tailwind CSS.
                  </Link>
                  <Link href="/docs/installation" title="Installation">
                    How to install dependencies and structure your app.
                  </Link>
                  <Link href="/docs/primitives/typography" title="Typography">
                    Styles for headings, paragraphs, lists...etc
                  </Link>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger hoverIndex={1}>
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-2 w-[400px] p-4">
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="#kundli"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
                <Link href="/docs">Docs</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink hoverIndex={3} asChild>
                <Link href="/pricing">Pricing</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <NavbarButton variant="secondary">Login</NavbarButton>
          <NavbarButton variant="primary">Book a call</NavbarButton>
        </div>
      </NavBody>
    </Navbar>
  );
}
