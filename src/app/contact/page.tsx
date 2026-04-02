import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/shared/section";
import { LineButton } from "@/components/shared/line-button";
import { SITE, STORE } from "@/lib/constants";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "聯絡我們",
  description:
    "身活皮拉提斯聯絡資訊 — 地址、電話、營業時間。歡迎透過 LINE 或電話與我們聯繫。",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-sage/5 to-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage mb-4">
            Contact
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
            聯絡我們
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-charcoal/60 leading-relaxed">
            任何問題都歡迎聯繫，我們很樂意為你解答。
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-heading text-2xl font-bold text-charcoal mb-8">
              教室資訊
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage/10">
                  <MapPin className="w-5 h-5 text-sage" />
                </div>
                <div>
                  <p className="font-medium text-charcoal mb-1">地址</p>
                  <p className="text-sm text-charcoal/60">{STORE.address}</p>
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

          {/* Map Placeholder */}
          <div>
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-sage/10 to-sand-light/50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-sage/30 mx-auto mb-3" />
                <p className="text-sage/40 text-sm">Google Maps 嵌入</p>
                <p className="text-sage/30 text-xs mt-1">
                  設定地址後將顯示地圖
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
