import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/shared/section";
import { pricingPlans, pricingTiers, trialPrice } from "@/data/pricing";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "價格方案",
  description:
    "身活皮拉提斯價格方案 — 1 對 1 體驗課 NT$1,600，堂數方案 NT$1,500 起。台南永康器械皮拉提斯。",
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
            透明的價格，沒有隱藏費用。所有課程皆為 1 對 1 專屬教練指導。
          </p>
        </div>
      </section>

      {/* Plan Cards */}
      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl border p-6 lg:p-8 flex flex-col",
                plan.highlight
                  ? "border-forest bg-forest text-white shadow-xl scale-[1.02]"
                  : "border-border bg-white shadow-[var(--shadow-card)]"
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
                  "block text-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-250 active:scale-[0.97]",
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
      </Section>

      {/* Full Price Table */}
      <Section className="bg-sand-light/30">
        <SectionHeader
          subtitle="Price Table"
          title="完整價目表"
          description="一對一課程，買越多越優惠"
        />

        <div className="max-w-2xl mx-auto">
          {/* Trial */}
          <div className="mb-6 rounded-2xl bg-forest text-white p-6 flex items-center justify-between">
            <div>
              <p className="font-heading text-lg font-bold">體驗課</p>
              <p className="text-sm text-white/60">1 對 1 ・ 首次體驗</p>
            </div>
            <p className="font-heading text-3xl font-bold">
              ${trialPrice.toLocaleString()}
            </p>
          </div>

          {/* Tier Table */}
          <div className="rounded-2xl border border-border bg-white overflow-hidden shadow-[var(--shadow-card)]">
            <div className="grid grid-cols-3 bg-cream px-6 py-3 text-sm font-medium text-charcoal/60">
              <span>堂數</span>
              <span className="text-center">單價</span>
              <span className="text-right">總價</span>
            </div>
            {pricingTiers.map((tier, i) => (
              <div
                key={tier.sessions}
                className={cn(
                  "grid grid-cols-3 px-6 py-4 items-center",
                  i < pricingTiers.length - 1 && "border-b border-dashed border-border"
                )}
              >
                <span className="font-heading text-lg font-bold text-charcoal">
                  {tier.sessions} 堂
                </span>
                <span className="text-center text-charcoal/70">
                  ${tier.perSession.toLocaleString()}
                </span>
                <span className="text-right font-medium text-forest">
                  ${tier.total.toLocaleString()}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-charcoal/50">
          <p>
            所有方案皆為 1 對 1 專屬教練指導，含器械使用。
            <br />
            詳細方案內容請透過 LINE 聯繫我們。
          </p>
        </div>
      </Section>
    </>
  );
}
