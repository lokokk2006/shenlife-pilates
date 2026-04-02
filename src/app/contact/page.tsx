import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/shared/section";
import { LineButton } from "@/components/shared/line-button";
import { SITE, STORE } from "@/lib/constants";
import { Car, Clock, MapPin, MessageCircle, Phone, Train } from "lucide-react";

export const metadata: Metadata = {
  title: "門市位置",
  description:
    "身活皮拉提斯門市位置 — 台南市永康區東橋五路112號。附近停車場、交通方式、營業時間。",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-sage/5 to-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage mb-4">
            Location
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
            門市位置
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-charcoal/60 leading-relaxed">
            台南首館・東橋店
          </p>
        </div>
      </section>

      {/* Store Info + Map */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-2">
              {STORE.name}
            </h2>
            <p className="text-sm text-sage mb-8">台南首館・東橋店</p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage/10">
                  <MapPin className="w-5 h-5 text-sage" />
                </div>
                <div>
                  <p className="font-medium text-charcoal mb-1">地址</p>
                  <a
                    href={STORE.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-charcoal/60 hover:text-forest transition-colors"
                  >
                    {STORE.address}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage/10">
                  <Phone className="w-5 h-5 text-sage" />
                </div>
                <div>
                  <p className="font-medium text-charcoal mb-1">電話</p>
                  <a
                    href={`tel:${SITE.phone}`}
                    className="text-sm text-charcoal/60 hover:text-forest transition-colors"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#06C755]/10">
                  <MessageCircle className="w-5 h-5 text-[#06C755]" />
                </div>
                <div>
                  <p className="font-medium text-charcoal mb-1">LINE 官方帳號</p>
                  <a
                    href={SITE.lineUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-charcoal/60 hover:text-forest transition-colors"
                  >
                    {SITE.lineId}
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage/10">
                  <Clock className="w-5 h-5 text-sage" />
                </div>
                <div>
                  <p className="font-medium text-charcoal mb-1">營業時間</p>
                  <div className="text-sm text-charcoal/60 space-y-1">
                    <p>週一至週五：{STORE.openHours.weekday}</p>
                    <p>週六：{STORE.openHours.saturday}</p>
                    <p>週日：{STORE.openHours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* LINE QR */}
            <div className="mt-8 flex items-center gap-6">
              <LineButton size="lg">LINE 聯繫我們</LineButton>
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
            <p className="mt-2 text-xs text-charcoal/40">
              掃描 QR Code 或搜尋 ID：{SITE.lineId}
            </p>
          </div>

          {/* Right: Google Maps */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-card)] border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5!2d120.396!3d23.035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjPCsDAyJzA2LjAiTiAxMjDCsDIzJzQ1LjYiRQ!5e0!3m2!1szh-TW!2stw!4v1"
                title="身活皮拉提斯 地圖"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-3 text-center">
              <a
                href={STORE.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-sage hover:text-forest transition-colors"
              >
                <MapPin className="w-4 h-4" />
                在 Google Maps 中開啟
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Transportation */}
      <Section className="bg-sand-light/30">
        <SectionHeader
          subtitle="Transportation"
          title="交通方式"
          description="多種方式輕鬆抵達身活"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Driving */}
          <div className="rounded-2xl bg-white p-6 shadow-[var(--shadow-card)]">
            <Car className="w-8 h-8 text-sage mb-4" />
            <h3 className="font-heading text-lg font-bold text-charcoal mb-4">
              自行開車
            </h3>
            <p className="text-sm font-medium text-charcoal mb-2">附近停車場</p>
            <ul className="space-y-2 text-sm text-charcoal/60">
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">P</span>
                東橋五路二號公園停車場
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">P</span>
                康橋商場停車場（統一精工）
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">P</span>
                小橋公園停車場
              </li>
            </ul>
          </div>

          {/* Landmarks */}
          <div className="rounded-2xl bg-white p-6 shadow-[var(--shadow-card)]">
            <MapPin className="w-8 h-8 text-sage mb-4" />
            <h3 className="font-heading text-lg font-bold text-charcoal mb-4">
              周邊地標
            </h3>
            <ul className="space-y-2 text-sm text-charcoal/60">
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">•</span>
                7-ELEVEN 康橋門市
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">•</span>
                星巴克 康橋門市
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">•</span>
                統一精工 康橋商場
              </li>
            </ul>
            <p className="mt-4 text-xs text-charcoal/40">
              位於東橋五路，鄰近東橋六街與海環九路
            </p>
          </div>

          {/* Public Transit */}
          <div className="rounded-2xl bg-white p-6 shadow-[var(--shadow-card)]">
            <Train className="w-8 h-8 text-sage mb-4" />
            <h3 className="font-heading text-lg font-bold text-charcoal mb-4">
              大眾運輸
            </h3>
            <ul className="space-y-2 text-sm text-charcoal/60">
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">•</span>
                搭乘台南市公車至「東橋」站下車，步行約 3 分鐘
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sage mt-0.5">•</span>
                台鐵「大橋站」下車，轉乘公車或騎車約 10 分鐘
              </li>
            </ul>
            <p className="mt-4 text-xs text-charcoal/40">
              建議開車或騎車前往最為方便
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-forest text-white text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-4">
          歡迎預約參觀教室
        </h2>
        <p className="text-white/70 mb-8 max-w-md mx-auto">
          想先來看看環境？歡迎透過 LINE 預約參觀，我們會為你介紹教室和課程。
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <LineButton size="lg">LINE 預約參觀</LineButton>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-3.5 text-base font-medium text-white hover:bg-white/10 transition-colors duration-250"
          >
            電話聯繫 {SITE.phone}
          </a>
        </div>
      </Section>
    </>
  );
}
