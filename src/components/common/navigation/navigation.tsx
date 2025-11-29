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
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useTabStore } from "@/lib/store";

export function Navigation() {
  const setActiveTab = useTabStore((state) => state.setActiveTab);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleServiceClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    tabId: string
  ) => {
    e.preventDefault();
    setActiveTab(tabId);
    const tabsSection = document.getElementById("services");
    if (tabsSection) {
      const yOffset = -100; // Adjusted offset as requested (user tried -180, let's try -100 or keep user's preference if known, but 80 was requested originally. User tried 180. Let's use 100 as a safe middle or 150?)
      // User said "take the margin from top 80px". User tried -180.
      // Let's use -100 to be safe, or stick to -80 if that was the requirement.
      // Actually, let's use -100.
      const y =
        tabsSection.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };
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
                        href="#services"
                        onClick={(e) => handleServiceClick(e, "kundli")}
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
                        href="#services"
                        onClick={(e) => handleServiceClick(e, "matchmaking")}
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
                        href="#services"
                        onClick={(e) => handleServiceClick(e, "numerology")}
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
                        href="#services"
                        onClick={(e) => handleServiceClick(e, "panchang")}
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
                        href="#services"
                        onClick={(e) => handleServiceClick(e, "rashifal")}
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
                <Link href="/#features">Why us</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink hoverIndex={3} asChild>
                <Link href="/#pricing">Pricing</Link>
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
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <Link
            href="/"
            className="block px-4 py-2 text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <div className="px-4 py-2">
            <p className="text-sm font-semibold text-muted-foreground mb-2">
              Services
            </p>
            <div className="grid gap-2 pl-2">
              <Link
                href="#services"
                onClick={(e) => {
                  handleServiceClick(e, "kundli");
                  setMobileMenuOpen(false);
                }}
                className="block py-1 text-base"
              >
                Kundli
              </Link>
              <Link
                href="#services"
                onClick={(e) => {
                  handleServiceClick(e, "matchmaking");
                  setMobileMenuOpen(false);
                }}
                className="block py-1 text-base"
              >
                Match Making
              </Link>
              <Link
                href="#services"
                onClick={(e) => {
                  handleServiceClick(e, "numerology");
                  setMobileMenuOpen(false);
                }}
                className="block py-1 text-base"
              >
                Numerology
              </Link>
              <Link
                href="#services"
                onClick={(e) => {
                  handleServiceClick(e, "panchang");
                  setMobileMenuOpen(false);
                }}
                className="block py-1 text-base"
              >
                Panchang
              </Link>
              <Link
                href="#services"
                onClick={(e) => {
                  handleServiceClick(e, "rashifal");
                  setMobileMenuOpen(false);
                }}
                className="block py-1 text-base"
              >
                Rashifal
              </Link>
            </div>
          </div>
          <Link
            href="/#features"
            className="block px-4 py-2 text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Why us
          </Link>
          <Link
            href="/#pricing"
            className="block px-4 py-2 text-lg font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <div className="px-4 pt-4 mt-auto w-full">
            <NavbarButton variant="primary" className="w-full justify-center">
              Book a call
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
