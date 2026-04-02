"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { NAV_ITEMS, SITE } from "@/lib/constants";
import { useState } from "react";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          render={
            <button
              className="p-2 text-charcoal hover:text-forest transition-colors"
              aria-label="開啟選單"
            />
          }
        >
          <Menu className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent side="right" className="w-80 bg-cream">
          <SheetTitle className="font-heading text-xl font-bold text-forest mb-8">
            {SITE.name}
          </SheetTitle>
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 text-base text-charcoal/80 hover:text-forest hover:bg-sand-light/50 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-6 px-4">
              <Link
                href="/booking"
                onClick={() => setOpen(false)}
                className="block w-full text-center rounded-full bg-forest px-6 py-3 text-sm font-medium text-white hover:bg-sage-dark transition-colors"
              >
                預約體驗
              </Link>
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
