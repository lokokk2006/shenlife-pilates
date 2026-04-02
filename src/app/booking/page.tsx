import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/shared/section";
import { LineButton } from "@/components/shared/line-button";
import { SITE, STORE } from "@/lib/constants";
import {
  CheckCircle,
  Clock,
  MapPin,
  MessageCircle,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "預約體驗",
  description:
    "預約身活皮拉提斯體驗課，首堂只要 NT$1,600。透過 LINE 與我們聯繫，開始你的皮拉提斯旅程。",
};

const bookingSteps = [
  {
    step: "1",
    title: "加入 LINE 好友",
    description: "掃描 QR Code 或點擊按鈕加入身活官方 LINE",
  },
  {
    step: "2",
    title: "告訴我們你的需求",
    description: "想要達到什麼目標？有沒有身體上的特殊狀況？",
  },
  {
    step: "3",
    title: "安排體驗課",
    description: "我們會為你安排最適合的時段和教練",
  },
  {
    step: "4",
    title: "來教室體驗",
    description: "提前 10 分鐘到場，穿合身運動服即可",
  },
];

export default function BookingPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-sage/5 to-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage mb-4">
            Book Now
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
            預約體驗
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-charcoal/60 leading-relaxed">
            第一次來身活？預約一堂體驗課，讓身體感受器械皮拉提斯的魅力。
          </p>
        </div>
      </section>

      {/* Trial Class Info */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-sage/10 px-4 py-2 text-sm text-sage mb-6">
              <Sparkles className="w-4 h-4" />
              首堂體驗優惠
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-charcoal mb-2">
              體驗課 NT$1,600
            </h2>
            <p className="text-lg text-charcoal/60 leading-relaxed mb-8">
              1 對 1 專屬體驗，包含身體評估、器械介紹和基礎訓練。
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "專業教練一對一指導",
                "完整身體狀態評估",
                "Reformer 器械使用教學",
                "個人化訓練建議",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-charcoal/70">
                  <CheckCircle className="w-5 h-5 text-sage shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-6">
              <LineButton size="lg">LINE 預約體驗課</LineButton>
              <a
                href={SITE.lineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={SITE.lineQrCode}
                  alt="LINE QR Code"
                  width={100}
                  height={100}
                  className="rounded-lg shadow-[var(--shadow-card)]"
                />
              </a>
            </div>
            <p className="mt-3 text-xs text-charcoal/40">
              掃描 QR Code 加入好友，或搜尋 ID：{SITE.lineId}
            </p>
          </div>

          <div className="bg-cream rounded-2xl p-8 lg:p-10">
            <h3 className="font-heading text-xl font-bold text-charcoal mb-6">
              預約流程
            </h3>
            <div className="space-y-6">
              {bookingSteps.map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-forest text-white text-sm font-bold">
                    {s.step}
                  </div>
                  <div>
                    <p className="font-medium text-charcoal mb-1">{s.title}</p>
                    <p className="text-sm text-charcoal/50">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Notes */}
      <Section>
        <SectionHeader subtitle="Notes" title="注意事項" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Clock,
              title: "時間",
              items: ["請提前 10 分鐘到教室", "課程時間 60 分鐘", `營業時間：平日 ${STORE.openHours.weekday}`],
            },
            {
              icon: MapPin,
              title: "地點",
              items: [STORE.name, STORE.address, STORE.parking],
            },
            {
              icon: MessageCircle,
              title: "準備",
              items: [
                "穿合身有彈性的運動服",
                "避免太寬鬆的衣褲",
                "建議穿防滑襪或赤腳",
              ],
            },
          ].map((section) => (
            <div key={section.title} className="p-6 rounded-xl bg-sand-light/30">
              <section.icon className="w-6 h-6 text-sage mb-4" />
              <h3 className="font-heading text-lg font-bold text-charcoal mb-3">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="text-sm text-charcoal/60">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* LINE CTA */}
      <Section className="bg-forest text-white text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
          準備好了嗎？
        </h2>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          透過 LINE 聯繫我們，告訴我們你方便的時間，我們會為你安排最適合的教練。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <LineButton size="lg">加入 LINE 預約</LineButton>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors"
          >
            電話諮詢 {SITE.phone}
          </a>
        </div>
      </Section>
    </>
  );
}
