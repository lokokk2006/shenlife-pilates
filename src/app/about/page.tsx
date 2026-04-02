import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/shared/section";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "關於身活",
  description:
    "身活皮拉提斯的品牌故事。我們相信，好的訓練源自理解，理解你的身體、你的目標、你的節奏。",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-sage/5 to-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage mb-4">
            About Us
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
            關於{SITE.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-charcoal/60 leading-relaxed">
            {SITE.tagline}
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal mb-6">
              我們的故事
            </h2>
            <div className="space-y-4 text-charcoal/70 leading-relaxed">
              <p>
                「身活」取自「身」與「活」——用身體去活，活出自己。我們相信，
                每個人的身體都蘊藏著改變的力量，只需要找到對的方式去喚醒它。
              </p>
              <p>
                在台南這座充滿生活感的城市，我們打造了一個專注於器械皮拉提斯的空間。
                這裡不只是運動教室，更是一個讓你放慢腳步、專注感受身體的地方。
              </p>
              <p>
                透過 Reformer 等專業器械，在教練一對一或小班制的指導下，
                你會發現——原來身體可以如此靈活、穩定、有力。
              </p>
            </div>
          </div>
          <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-sage/10 to-sand-light/50 flex items-center justify-center">
            <span className="text-sage/30 text-sm">教室環境照片</span>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section>
        <SectionHeader
          subtitle="Philosophy"
          title="訓練理念"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              num: "01",
              title: "以人為本",
              desc: "沒有一體適用的訓練。每個人的身體狀況、目標、生活型態都不同，我們根據個人需求設計最適合的課程內容。",
            },
            {
              num: "02",
              title: "精準控制",
              desc: "皮拉提斯的核心在於控制力。透過器械的阻力系統，讓每個動作都精準到位，而非追求次數或速度。",
            },
            {
              num: "03",
              title: "循序漸進",
              desc: "身體的改變需要時間。我們注重長期的訓練規劃，陪你一步步建立正確的動作模式和身體覺知。",
            },
          ].map((item) => (
            <div key={item.num} className="p-6">
              <span className="text-4xl font-heading font-bold text-sage/20 mb-4 block">
                {item.num}
              </span>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-charcoal/60 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Space */}
      <Section className="bg-sand-light/30">
        <SectionHeader
          subtitle="Our Space"
          title="教室環境"
          description="寬敞明亮的空間，專業的器械設備，讓每一次練習都是舒適的體驗。"
        />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="aspect-square rounded-xl bg-gradient-to-br from-sage/10 to-sand-light/50 flex items-center justify-center"
            >
              <span className="text-sage/30 text-sm">空間照片 {i}</span>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
