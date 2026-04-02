import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/shared/section";
import { pricingPlans } from "@/data/pricing";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "價格方案",
  description:
    "身活皮拉提斯價格方案 — 體驗課 NT$500 起、單堂課、月方案、堂數方案。找到最適合你的訓練計畫。",
};

export default function PricingPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-sage/5 to-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage mb-4">
            Pricing
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
            價格方案
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-charcoal/60 leading-relaxed">
            透明的價格，沒有隱藏費用。選擇最適合你的方案，開始你的皮拉提斯旅程。
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl border p-6 lg:p-8 flex flex-col",
                plan.highlight
                  ? "border-forest bg-forest text-white shadow-xl scale-[1.02]"
                  : "border-border bg-white"
              )}
            >
              {plan.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-sage px-4 py-1 rounded-full text-xs font-medium text-white">
                  最多人選擇
                </span>
              )}
              <h3
                className={cn(
                  "font-heading text-lg font-bold mb-2",
                  plan.highlight ? "text-white" : "text-charcoal"
                )}
              >
                {plan.name}
              </h3>
              <div className="mb-4">
                <span
                  className={cn(
                    "font-heading text-3xl font-bold",
                    plan.highlight ? "text-white" : "text-forest"
                  )}
                >
                  {plan.price}
                </span>
                {plan.priceNote && (
                  <span
                    className={cn(
                      "text-sm ml-1",
                      plan.highlight ? "text-white/60" : "text-charcoal/40"
                    )}
                  >
                    {plan.priceNote}
                  </span>
                )}
              </div>
              <p
                className={cn(
                  "text-sm leading-relaxed mb-6",
                  plan.highlight ? "text-white/70" : "text-charcoal/60"
                )}
              >
                {plan.description}
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <CheckCircle
                      className={cn(
                        "w-4 h-4 mt-0.5 shrink-0",
                        plan.highlight ? "text-sage-light" : "text-sage"
                      )}
                    />
                    <span
                      className={
                        plan.highlight ? "text-white/80" : "text-charcoal/70"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/booking"
                className={cn(
                  "block text-center rounded-full px-6 py-3 text-sm font-medium transition-colors",
                  plan.highlight
                    ? "bg-white text-forest hover:bg-sand-light"
                    : "bg-forest text-white hover:bg-sage-dark"
                )}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-charcoal/50">
          <p>
            以上價格僅供參考，實際費用請透過 LINE 聯繫我們確認。
            <br />
            所有方案皆包含專業教練指導與器械使用。
          </p>
        </div>
      </Section>
    </>
  );
}
