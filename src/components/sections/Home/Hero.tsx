"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";

export function Hero() {
  return (
    <section className="relative flex flex-col justify-center overflow-hidden pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={cn(
                "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
              )}
            >
              <AnimatedShinyText className="text-sm inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
                <span>✨ Trusted by 10,000+ Users</span>
              </AnimatedShinyText>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl max-w-2xl font-semibold tracking-tight text-foreground leading-[1.1]"
          >
            Unlock Your Destiny with Vedic Astrology
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl"
          >
            Discover insights into your past, present, and future with accurate
            Kundli generation and expert astrological guidance.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto rounded-full px-8 bg-gradient-to-r from-white to-white/75 text-background h-12"
            >
              Get Your Free Kundli
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto rounded-full px-8 h-12"
            >
              Talk to Astrologer
            </Button>
          </motion.div>

          {/* Feature Snippets */}
          {/* <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl"
                    >
                        {[
                            { icon: Layout, title: "Dashboards & Widgets", desc: "Pre-built components for data." },
                            { icon: Layers, title: "Marketing Sections", desc: "Convert visitors into customers." },
                            { icon: Zap, title: "Global Assets", desc: "4000+ icons and illustrations." },
                        ].map((feature, index) => (
                            <div key={index} className="flex flex-col items-center p-6 rounded-2xl bg-secondary/30 border border-border/50 backdrop-blur-sm hover:bg-secondary/50 transition-colors">
                                <div className="p-3 rounded-xl bg-primary/10 text-primary mb-4">
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground">{feature.desc}</p>
                            </div>
                        ))}
                    </motion.div> */}
        </div>
      </div>
    </section>
  );
}
