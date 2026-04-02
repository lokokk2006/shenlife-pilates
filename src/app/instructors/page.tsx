import type { Metadata } from "next";
import { Section, SectionHeader } from "@/components/shared/section";
import { instructors } from "@/data/instructors";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "師資團隊",
  description:
    "身活皮拉提斯專業教練團隊，擁有國際認證與豐富教學經驗。",
};

export default function InstructorsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-sage/5 to-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage mb-4">
            Instructors
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
            師資團隊
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-charcoal/60 leading-relaxed">
            每位教練都經過嚴格的專業認證訓練，用心陪伴你的每一步改變。
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div
              key={instructor.name}
              className="rounded-2xl border border-border bg-white overflow-hidden"
            >
              <div className="aspect-[3/4] bg-gradient-to-br from-sage/10 to-sand-light/50 flex items-center justify-center">
                <span className="text-sage/30 text-sm">教練照片</span>
              </div>
              <div className="p-6">
                <h2 className="font-heading text-xl font-bold text-charcoal mb-1">
                  {instructor.name}
                </h2>
                <p className="text-sm text-sage mb-4">{instructor.title}</p>
                <p className="text-sm text-charcoal/60 leading-relaxed mb-4">
                  {instructor.bio}
                </p>
                <div className="mb-4">
                  <p className="text-xs font-medium text-charcoal/40 mb-2">
                    專業認證
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {instructor.certifications.map((cert) => (
                      <Badge
                        key={cert}
                        variant="outline"
                        className="text-xs"
                      >
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-medium text-charcoal/40 mb-2">
                    專長領域
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {instructor.specialties.map((s) => (
                      <span
                        key={s}
                        className="text-xs px-2.5 py-1 rounded-full bg-sage/10 text-sage"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
