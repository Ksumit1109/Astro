"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote:
      "The Kundli report was incredibly detailed and accurate. It helped me understand my career path better.",
    author: "Priya Sharma",
    role: "Software Engineer",
    company: "Bangalore",
  },
  {
    quote:
      "I was skeptical at first, but the match making service gave us deep insights into our compatibility. Highly recommended!",
    author: "Rahul Verma",
    role: "Entrepreneur",
    company: "Mumbai",
  },
  {
    quote:
      "The gemstone recommendation really worked for me. I feel more positive and focused now.",
    author: "Anita Desai",
    role: "Teacher",
    company: "Delhi",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-secondary/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Trusted by Believers
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of satisfied users who have found guidance through
            our services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-background border-border/50 p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <p className="text-lg mb-6 leading-relaxed text-muted-foreground">
                    &quot;{item.quote}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {item.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-semibold">{item.author}</h4>
                      <p className="text-sm text-muted-foreground">
                        {item.role} at {item.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
