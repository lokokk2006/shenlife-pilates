"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/shared/section";
import { courses } from "@/data/courses";
import { ArrowRight, Clock, Users } from "lucide-react";

export function FeaturedCourses() {
  const featured = courses.slice(0, 4);

  return (
    <Section>
      <SectionHeader
        subtitle="Courses"
        title="課程介紹"
        description="專業器械皮拉提斯課程，從核心訓練到體態雕塑，找到最適合你的練習方式。"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((course, index) => (
          <motion.div
            key={course.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              href={`/courses/${course.slug}`}
              className="group block h-full rounded-2xl border border-border bg-white p-6 hover:shadow-lg hover:border-sage/30 transition-all duration-300"
            >
              {/* Placeholder Image Area */}
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-sage/10 to-sand-light/50 mb-5 flex items-center justify-center overflow-hidden">
                <span className="text-sage/30 text-sm">課程照片</span>
              </div>

              <p className="text-xs tracking-wider uppercase text-sage mb-2">
                {course.subtitle}
              </p>
              <h3 className="font-heading text-lg font-bold text-charcoal mb-2 group-hover:text-forest transition-colors">
                {course.title}
              </h3>
              <p className="text-sm text-charcoal/50 line-clamp-2 mb-4">
                {course.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-charcoal/40">
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" />
                  {course.capacity}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-forest font-medium hover:gap-3 transition-all duration-200"
        >
          查看全部課程
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
}
