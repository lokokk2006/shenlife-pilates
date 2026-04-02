import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/shared/section";
import { FaqAccordion } from "@/components/faq/faq-accordion";
import { faqItems } from "@/data/faq";
import { LineButton } from "@/components/shared/line-button";

export const metadata: Metadata = {
  title: "常見問題",
  description:
    "身活皮拉提斯常見問題 — 初學者入門、課程資訊、費用說明、預約方式。",
};

export default function FaqPage() {
  const categories = [...new Set(faqItems.map((item) => item.category))];

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-sage/5 to-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage mb-4">
            FAQ
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
            常見問題
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-charcoal/60 leading-relaxed">
            整理了大家最常問的問題，希望能幫助你更了解身活。
          </p>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl mx-auto">
          {categories.map((category) => (
            <div key={category} className="mb-12 last:mb-0">
              <h2 className="font-heading text-xl font-bold text-charcoal mb-4 pb-2 border-b border-border">
                {category}
              </h2>
              <FaqAccordion
                items={faqItems.filter((item) => item.category === category)}
              />
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-sand-light/30 text-center">
        <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">
          還有其他問題嗎？
        </h2>
        <p className="text-charcoal/60 mb-6">
          歡迎透過 LINE 聯繫我們，我們很樂意為你解答任何疑問。
        </p>
        <LineButton size="lg">LINE 詢問</LineButton>
      </Section>
    </>
  );
}
