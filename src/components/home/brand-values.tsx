"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/shared/section";
import { Heart, Shield, Sparkles } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "專注聆聽",
    description:
      "每個身體都有自己的故事。我們用心聆聽，根據你的狀態設計最適合的訓練，讓每一次練習都是與身體的深度對話。",
  },
  {
    icon: Shield,
    title: "安全精準",
    description:
      "器械皮拉提斯的核心在於精準控制。透過 Reformer 的彈簧阻力系統，在安全的環境中挑戰身體極限，有效避免運動傷害。",
  },
  {
    icon: Sparkles,
    title: "持續蛻變",
    description:
      "皮拉提斯不只是運動，更是一種生活方式。我們陪你從第一堂課開始，見證身體一步步的改變，活出更好的自己。",
  },
];

export function BrandValues() {
  return (
    <Section className="bg-white">
      <SectionHeader
        subtitle="Our Philosophy"
        title="為什麼選擇身活"
        description="我們相信，好的訓練源自理解。理解你的身體、你的目標、你的節奏。"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="text-center px-4"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-sage/10 text-sage mb-6">
              <value.icon className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-xl font-bold text-charcoal mb-3">
              {value.title}
            </h3>
            <p className="text-sm text-charcoal/60 leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
