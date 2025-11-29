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
import { useTabStore } from "@/lib/store";

export function Navigation() {
  const setActiveTab = useTabStore((state) => state.setActiveTab);

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
    </Navbar>
  );
}
