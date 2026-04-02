import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/shared/section";
import { courses } from "@/data/courses";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, ArrowLeft, CheckCircle } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) return {};
  return {
    title: course.title,
    description: course.description,
  };
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params;
  const course = courses.find((c) => c.slug === slug);
  if (!course) notFound();

  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-sage/5 to-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sm text-sage hover:text-forest transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            返回課程列表
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Badge variant="secondary" className="bg-sage/10 text-sage border-0">
                  {course.equipment}
                </Badge>
                <Badge variant="outline">{course.level}</Badge>
              </div>
              <p className="text-sm tracking-wider uppercase text-sage mb-2">
                {course.subtitle}
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl font-bold text-charcoal mb-4">
                {course.title}
              </h1>
              <p className="text-lg text-charcoal/60 leading-relaxed mb-6">
                {course.description}
              </p>
              <div className="flex items-center gap-6 text-sm text-charcoal/50 mb-8">
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {course.capacity}
                </span>
              </div>
              <Link
                href="/booking"
                className="inline-block rounded-full bg-forest px-8 py-3 text-base font-medium text-white hover:bg-sage-dark transition-colors"
              >
                預約此課程
              </Link>
            </div>
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-sage/10 to-sand-light/50 flex items-center justify-center">
              <span className="text-sage/30 text-sm">課程照片</span>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-charcoal mb-6">
            課程特色
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {course.features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 p-4 rounded-xl bg-sage/5"
              >
                <CheckCircle className="w-5 h-5 text-sage mt-0.5 shrink-0" />
                <span className="text-charcoal/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-sand-light/30">
        <div className="max-w-3xl">
          <h2 className="font-heading text-2xl font-bold text-charcoal mb-6">
            適合對象
          </h2>
          <ul className="space-y-3 text-charcoal/70">
            <li className="flex items-start gap-2">
              <span className="text-sage mt-1">•</span>
              想要改善體態和姿勢的人
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sage mt-1">•</span>
              久坐辦公室，肩頸腰背不適的上班族
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sage mt-1">•</span>
              想要安全有效訓練核心肌群的運動愛好者
            </li>
            <li className="flex items-start gap-2">
              <span className="text-sage mt-1">•</span>
              產前產後想要恢復身體的媽咪
            </li>
          </ul>
        </div>
      </Section>
    </>
  );
}
