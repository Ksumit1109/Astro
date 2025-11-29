import { Features } from "@/components/sections/Features";
import { Testimonials } from "@/components/sections/Testimonials";
import { Showcase } from "@/components/sections/Showcase";
import { Pricing } from "@/components/sections/Pricing";
import { FAQ } from "@/components/sections/FAQ";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import BackgroundEffect from "@/components/sections/Home/BackgroundEffect";
import { Hero } from "@/components/sections/Home/Hero";
import ProductTabs from "@/components/sections/Home/ProductTabs";
import WhatWeDo from "@/components/sections/Home/WhatWeDo";
import { GridEffect } from "@/components/common/effects/GridEffect";

export default function MainPage() {
  return (
    <div className="flex flex-col gap-0">
      <BackgroundEffect />
      <GridEffect />
      <Hero />
      <ProductTabs />
      <WhatWeDo />
      <Features />
      <Showcase />
      <Testimonials />
      <Pricing />
      <FAQ />

      {/* Final CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to build your next project?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Get started with Envision today and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto rounded-full px-8 text-base h-12 text-primary"
            >
              Get Started Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto rounded-full px-8 text-base h-12 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
