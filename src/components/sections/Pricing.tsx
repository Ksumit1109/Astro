"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Basic Kundli",
    price: "Free",
    description: "Essential charts and basic predictions.",
    features: [
      "Lagna Chart",
      "Navamsa Chart",
      "Basic Planetary Details",
      "Current Dasha",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Premium Report",
    price: "$29",
    description: "In-depth analysis of your life path.",
    features: [
      "50+ Pages Report",
      "Detailed Predictions",
      "Gemstone Suggestions",
      "Remedies",
      "5 Year Transit",
    ],
    cta: "Buy Now",
    popular: true,
  },
  {
    name: "Consultation",
    price: "$99",
    description: "Live call with expert astrologer.",
    features: [
      "30 Min Call",
      "Ask 3 Questions",
      "Detailed Analysis",
      "Remedies Discussion",
      "Recording Provided",
    ],
    cta: "Book Now",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Choose Your Path to Enlightenment
          </h2>
          <p className="text-lg text-muted-foreground">
            Select a plan that suits your spiritual journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative flex flex-col ${
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/10 scale-105 z-10"
                  : "border-border/50 bg-secondary/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground hover:bg-primary">
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/month</span>
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className={`w-full ${plan.popular ? "" : "variant-outline"}`}
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
