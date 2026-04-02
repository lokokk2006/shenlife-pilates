"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LineButton } from "@/components/shared/line-button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest/5 via-cream to-sand-light/30" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, var(--color-sage) 1px, transparent 0)`,
        backgroundSize: "40px 40px",
      }} />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm font-medium tracking-[0.3em] uppercase text-sage mb-6">
            Reformer Pilates Studio
          </p>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="font-heading text-5xl sm:text-6xl lg:text-8xl font-bold text-charcoal leading-[1.1] mb-6"
        >
          感受身體
          <br />
          <span className="text-forest">活出自己</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="mx-auto max-w-xl text-base lg:text-lg text-charcoal/60 leading-relaxed mb-10"
        >
          台南專業器械皮拉提斯教室
          <br />
          透過 Reformer 訓練，找回身體的平衡與力量
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/booking"
            className="rounded-full bg-forest px-8 py-3.5 text-base font-medium text-white hover:bg-sage-dark transition-all duration-200 hover:shadow-lg"
          >
            預約體驗課
          </Link>
          <LineButton size="lg">LINE 諮詢</LineButton>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-sage/40 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-sage/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
