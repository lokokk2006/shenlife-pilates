"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeader } from "@/components/shared/section";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Lin 小姐",
    role: "上班族",
    content:
      "長期坐辦公室導致肩頸痠痛和下背不適，來身活上了三個月的 Reformer 課後，明顯感覺體態改善了，同事都問我是不是瘦了！其實是姿勢變好了。",
    duration: "持續練習 3 個月",
  },
  {
    name: "Chen 先生",
    role: "工程師",
    content:
      "本來以為皮拉提斯只適合女生，結果上了第一堂課就被圈粉。核心訓練的效果比去健身房練腹肌還明顯，而且不會受傷。現在每週固定來兩次。",
    duration: "持續練習 6 個月",
  },
  {
    name: "Wang 小姐",
    role: "產後媽咪",
    content:
      "產後腹直肌分離和骨盆底肌無力的問題，在教練的專業指導下慢慢恢復。教練很有耐心，每個動作都會仔細調整，讓我安心地重建身體。",
    duration: "持續練習 4 個月",
  },
  {
    name: "Huang 小姐",
    role: "舞者",
    content:
      "作為舞者，核心穩定和身體控制力非常重要。身活的 Reformer 訓練幫助我在舞蹈表演上有了很大的突破，尤其是平衡和延展性的提升。",
    duration: "持續練習 8 個月",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <Section className="bg-sand-light/30">
      <SectionHeader
        subtitle="Testimonials"
        title="學員心聲"
        description="聽聽他們怎麼說"
      />

      <div className="relative mx-auto max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-8 lg:p-12 shadow-sm"
          >
            <Quote className="w-10 h-10 text-sage/20 mb-6" />
            <p className="text-base lg:text-lg text-charcoal/80 leading-relaxed mb-8">
              {testimonials[current].content}
            </p>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-charcoal">
                  {testimonials[current].name}
                </p>
                <p className="text-sm text-charcoal/50">
                  {testimonials[current].role} ・{" "}
                  {testimonials[current].duration}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="p-2 rounded-full border border-sage/30 text-sage hover:bg-sage hover:text-white transition-colors"
            aria-label="上一則"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-sage w-6" : "bg-sage/20"
                }`}
                aria-label={`跳至第 ${i + 1} 則`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-2 rounded-full border border-sage/30 text-sage hover:bg-sage hover:text-white transition-colors"
            aria-label="下一則"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </Section>
  );
}
