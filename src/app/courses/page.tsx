import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeader } from "@/components/shared/section";
import { courses } from "@/data/courses";
import { Badge } from "@/components/ui/badge";
import { Clock, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "課程介紹",
  description:
    "身活皮拉提斯課程總覽 — Reformer 核心訓練、體態雕塑、脊椎保健、1 對 1 私人課。台南專業器械皮拉提斯。",
};

export default function CoursesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-sage/5 to-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage mb-4">
            Courses
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
            課程介紹
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-charcoal/60 leading-relaxed">
            所有課程皆使用專業器械，由認證教練指導。從初學者到進階，找到最適合你的練習方式。
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/courses/${course.slug}`}
              className="group block rounded-2xl border border-border bg-white overflow-hidden hover:shadow-lg hover:border-sage/30 transition-all duration-300"
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-sage/10 to-sand-light/50 flex items-center justify-center">
                <span className="text-sage/30 text-sm">課程照片</span>
              </div>
              <div className="p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-sage/10 text-sage border-0 text-xs">
                    {course.equipment}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {course.level}
                  </Badge>
                </div>
                <p className="text-xs tracking-wider uppercase text-sage mb-1">
                  {course.subtitle}
                </p>
                <h2 className="font-heading text-xl lg:text-2xl font-bold text-charcoal mb-3 group-hover:text-forest transition-colors">
                  {course.title}
                </h2>
                <p className="text-sm text-charcoal/60 leading-relaxed mb-4">
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
                <div className="flex flex-wrap gap-2 mt-4">
                  {course.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-2.5 py-1 rounded-full bg-cream text-charcoal/50"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
