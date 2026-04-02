"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FaqItem } from "@/data/faq";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <Accordion className="w-full">
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left text-charcoal hover:text-forest">
            {item.question}
          </AccordionTrigger>
          <AccordionContent className="text-charcoal/60 leading-relaxed">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
