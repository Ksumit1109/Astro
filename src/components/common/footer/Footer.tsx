import Link from "next/link";
import { Twitter, Linkedin, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { NavbarLogo } from "@/components/ui/resizable-navbar";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/50 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center font-bold text-xl">
              <NavbarLogo height={30} width={30} />
              <span className="ml-2">Astro</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Your daily guide to cosmic wisdom. Get accurate horoscopes, kundli
              matching, and astrological insights to navigate your life&apos;s
              journey.
            </p>
            <div className="flex gap-4 mt-2">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter size={20} />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Services Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Services</h3>
            <Link
              href="/horoscope"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Daily Horoscope
            </Link>
            <Link
              href="/kundli"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Kundli Matching
            </Link>
            <Link
              href="/panchang"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Today&apos;s Panchang
            </Link>
            <Link
              href="/numerology"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Numerology
            </Link>
          </div>

          {/* Company Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Company</h3>
            <Link
              href="/about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>

          {/* Newsletter Column */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Stay Connected</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to get your daily horoscope and cosmic updates delivered
              to your inbox.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Enter your email"
                className="bg-secondary/50 border-border/50"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-border/50" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Astro. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
