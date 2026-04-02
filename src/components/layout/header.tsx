"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import { MobileNav } from "./mobile-nav";

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-heading text-2xl font-bold tracking-wide text-forest">
              {SITE.name}
            </span>
            <span className="hidden sm:block text-xs tracking-[0.3em] text-sage font-light uppercase">
              Pilates
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-charcoal/70 hover:text-forest transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/booking"
              className="ml-2 rounded-full bg-forest px-6 py-2.5 text-sm font-medium text-white hover:bg-sage-dark transition-colors duration-200"
            >
              預約體驗
            </Link>
          </div>

          {/* Mobile Nav Toggle */}
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
