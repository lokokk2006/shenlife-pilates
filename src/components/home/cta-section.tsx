"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LineButton } from "@/components/shared/line-button";

export function CtaSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-forest to-sage-dark px-8 py-16 lg:px-16 lg:py-20 text-center text-white"
        >
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white/5" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/5" />

          <div className="relative">
            <p className="text-sm font-medium tracking-[0.3em] uppercase text-white/50 mb-4">
              Start Your Journey
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              第一步，從體驗開始
            </h2>
            <p className="mx-auto max-w-lg text-base text-white/70 leading-relaxed mb-10">
              不確定器械皮拉提斯適不適合你？
              <br />
              預約一堂體驗課，讓身體告訴你答案。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/booking"
                className="rounded-full bg-white text-forest px-8 py-3.5 text-base font-medium hover:bg-sand-light transition-colors duration-200"
              >
                預約體驗課 NT$500
              </Link>
              <LineButton size="lg">LINE 諮詢</LineButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
