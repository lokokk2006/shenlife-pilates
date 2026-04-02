"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Section } from "@/components/shared/section";

const stats = [
  { value: 500, suffix: "+", label: "學員信賴" },
  { value: 10000, suffix: "+", label: "累計課堂" },
  { value: 98, suffix: "%", label: "滿意度" },
  { value: 5, suffix: "+", label: "年教學經驗" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function StatsCounter() {
  return (
    <Section className="bg-forest text-white">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <p className="font-heading text-4xl lg:text-5xl font-bold mb-2">
              <AnimatedNumber value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="text-sm text-white/60">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
