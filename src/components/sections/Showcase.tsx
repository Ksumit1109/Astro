"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Career Guidance",
    category: "Consultation",
    color: "bg-blue-500/20",
  },
  {
    title: "Marriage Compatibility",
    category: "Match Making",
    color: "bg-purple-500/20",
  },
  {
    title: "Health Predictions",
    category: "Medical Astrology",
    color: "bg-green-500/20",
  },
  {
    title: "Gemstone Recommendation",
    category: "Remedies",
    color: "bg-orange-500/20",
  },
];

export function Showcase() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
              Astrological Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our wide range of services designed to help you navigate
              life&apos;s challenges.
            </p>
          </div>
          <Button variant="outline">View All Projects</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div
                className={`rounded-xl overflow-hidden border border-border/50 ${project.color} aspect-video relative`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {project.category}
                    </p>
                  </div>
                </div>
                {/* Placeholder for image */}
                <div className="w-full h-full flex items-center justify-center text-muted-foreground/20 font-bold text-4xl">
                  {project.title}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
