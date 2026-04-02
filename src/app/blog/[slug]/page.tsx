import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/shared/section";
import { blogPosts } from "@/data/blog";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function renderMarkdown(content: string) {
  // Simple markdown-to-HTML conversion for blog content
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inList = false;
  let listItems: string[] = [];
  let inTable = false;
  let tableRows: string[][] = [];
  let key = 0;

  function flushList() {
    if (listItems.length > 0) {
      elements.push(
        <ul key={key++} className="space-y-2 my-4 pl-5 list-disc text-charcoal/70">
          {listItems.map((item, i) => (
            <li key={i} dangerouslySetInnerHTML={{ __html: parseBold(item) }} />
          ))}
        </ul>
      );
      listItems = [];
      inList = false;
    }
  }

  function flushTable() {
    if (tableRows.length > 0) {
      const header = tableRows[0];
      const body = tableRows.slice(1);
      elements.push(
        <div key={key++} className="my-6 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-sage/20">
                {header.map((cell, i) => (
                  <th key={i} className="text-left py-2 px-3 font-medium text-charcoal">
                    {cell}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {body.map((row, ri) => (
                <tr key={ri} className="border-b border-border">
                  {row.map((cell, ci) => (
                    <td key={ci} className="py-2 px-3 text-charcoal/70">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      tableRows = [];
      inTable = false;
    }
  }

  function parseBold(text: string): string {
    return text.replace(/\*\*(.*?)\*\*/g, '<strong class="font-medium text-charcoal">$1</strong>');
  }

  for (const line of lines) {
    const trimmed = line.trim();

    // Table rows
    if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
      flushList();
      const cells = trimmed
        .split("|")
        .filter(Boolean)
        .map((c) => c.trim());
      // Skip separator rows
      if (cells.every((c) => /^[-:]+$/.test(c))) continue;
      tableRows.push(cells);
      inTable = true;
      continue;
    } else if (inTable) {
      flushTable();
    }

    if (trimmed === "") {
      flushList();
      continue;
    }

    if (trimmed.startsWith("## ")) {
      flushList();
      elements.push(
        <h2 key={key++} className="font-heading text-xl font-bold text-charcoal mt-8 mb-4">
          {trimmed.slice(3)}
        </h2>
      );
    } else if (trimmed.startsWith("### ")) {
      flushList();
      elements.push(
        <h3 key={key++} className="font-heading text-lg font-bold text-charcoal mt-6 mb-3">
          {trimmed.slice(4)}
        </h3>
      );
    } else if (/^\d+\.\s/.test(trimmed)) {
      const text = trimmed.replace(/^\d+\.\s/, "");
      listItems.push(text);
      inList = true;
    } else if (trimmed.startsWith("- ")) {
      listItems.push(trimmed.slice(2));
      inList = true;
    } else {
      flushList();
      elements.push(
        <p
          key={key++}
          className="text-charcoal/70 leading-relaxed my-3"
          dangerouslySetInnerHTML={{ __html: parseBold(trimmed) }}
        />
      );
    }
  }
  flushList();
  flushTable();
  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <section className="pt-32 pb-8 bg-gradient-to-b from-sage/5 to-cream">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-sage hover:text-forest transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            返回部落格
          </Link>
          <Badge variant="secondary" className="bg-sage/10 text-sage border-0 mb-4">
            {post.category}
          </Badge>
          <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-charcoal/40">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("zh-TW", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      <Section className="pt-8">
        <article className="mx-auto max-w-3xl prose-custom">
          {renderMarkdown(post.content)}
        </article>
      </Section>

      {/* Related / CTA */}
      <Section className="bg-sand-light/30 text-center">
        <h2 className="font-heading text-2xl font-bold text-charcoal mb-4">
          想親身體驗嗎？
        </h2>
        <p className="text-charcoal/60 mb-6">
          預約一堂體驗課，讓身體感受皮拉提斯的魅力。
        </p>
        <Link
          href="/booking"
          className="inline-block rounded-full bg-forest px-8 py-3 text-base font-medium text-white hover:bg-sage-dark transition-colors"
        >
          預約體驗課 NT$500
        </Link>
      </Section>
    </>
  );
}
