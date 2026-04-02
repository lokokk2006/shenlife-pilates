import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/shared/section";
import { blogPosts } from "@/data/blog";
import { Badge } from "@/components/ui/badge";
import { Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "部落格",
  description:
    "身活皮拉提斯部落格 — 皮拉提斯入門知識、健康資訊、訓練技巧。",
};

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-gradient-to-b from-sage/5 to-cream">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage mb-4">
            Blog
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-tight">
            部落格
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-charcoal/60 leading-relaxed">
            分享皮拉提斯知識、健康觀念和訓練心得。
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block rounded-2xl border border-border bg-white overflow-hidden hover:shadow-lg hover:border-sage/30 transition-all duration-300"
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-sage/10 to-sand-light/50 flex items-center justify-center">
                <span className="text-sage/30 text-sm">文章封面</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge
                    variant="secondary"
                    className="bg-sage/10 text-sage border-0 text-xs"
                  >
                    {post.category}
                  </Badge>
                  <span className="flex items-center gap-1 text-xs text-charcoal/40">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-heading text-lg font-bold text-charcoal mb-2 group-hover:text-forest transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-sm text-charcoal/50 line-clamp-2">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-xs text-charcoal/30">
                  {new Date(post.date).toLocaleDateString("zh-TW", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
