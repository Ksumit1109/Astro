"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How accurate are the predictions?",
    answer:
      "Our predictions are based on precise mathematical calculations of planetary positions and time-tested Vedic astrology principles.",
  },
  {
    question: "Is my birth data safe?",
    answer:
      "Yes, absolutely. We treat your personal information and birth details with the utmost confidentiality and security.",
  },
  {
    question: "What details do I need for a Kundli?",
    answer:
      "You need your exact date of birth, time of birth, and place of birth to generate an accurate Kundli.",
  },
  {
    question: "Can astrology predict marriage timing?",
    answer:
      "Yes, astrology can indicate favorable periods for marriage based on planetary transits and dasha periods.",
  },
  {
    question: "Do you offer remedies?",
    answer:
      "Yes, our premium reports and consultations include practical remedies like gemstones, mantras, and donations.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Common queries about astrology and our services.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
