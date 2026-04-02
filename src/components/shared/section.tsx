import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("py-20 lg:py-28", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  description,
  className,
  align = "center",
}: {
  title: string;
  subtitle?: string;
  description?: string;
  className?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={cn(
        "mb-14",
        align === "center" && "text-center",
        className
      )}
    >
      {subtitle && (
        <p className="text-sm font-medium tracking-[0.2em] uppercase text-sage mb-3">
          {subtitle}
        </p>
      )}
      <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base lg:text-lg text-charcoal/60 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
