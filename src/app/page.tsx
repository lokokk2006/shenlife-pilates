import { Hero } from "@/components/home/hero";
import { BrandValues } from "@/components/home/brand-values";
import { FeaturedCourses } from "@/components/home/featured-courses";
import { StatsCounter } from "@/components/home/stats-counter";
import { Testimonials } from "@/components/home/testimonials";
import { CtaSection } from "@/components/home/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandValues />
      <FeaturedCourses />
      <StatsCounter />
      <Testimonials />
      <CtaSection />
    </>
  );
}
