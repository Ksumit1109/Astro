"use client";

import { motion } from "framer-motion";
import { Palette, Smartphone, Zap, Globe, Shield, Code } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const features = [
  {
    icon: Palette,
    title: "Accurate Calculations",
    description:
      "Precise planetary positions and charts based on authentic Vedic algorithms.",
  },
  {
    icon: Smartphone,
    title: "Vedic Principles",
    description:
      "Deeply rooted in ancient wisdom and traditional astrological texts.",
  },
  {
    icon: Zap,
    title: "Instant Reports",
    description: "Generate comprehensive Kundli and life reports in seconds.",
  },
  {
    icon: Globe,
    title: "Multilingual Support",
    description: "Available in multiple languages to serve a global audience.",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Your birth data and personal information are kept strictly confidential.",
  },
  {
    icon: Code,
    title: "Expert Analysis",
    description:
      "Insights derived from years of astrological research and expertise.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Why Choose Our Astrology Services?
          </h2>
          <p className="text-lg text-muted-foreground">
            Combining ancient wisdom with modern technology for reliable
            guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-secondary/20 border-border/50 hover:bg-secondary/40 transition-colors duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon size={24} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
