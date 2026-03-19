"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { R3WorkedWordmark } from "@/components/homepage/R3WorkedWordmark";

const NAV_LINKS = [
  { href: "#the-3", label: "The 3" },
  { href: "#before-after-showcase", label: "Rework" },
  { href: "#lead-capture-layer", label: "System" },
  { href: "#preview-examples", label: "Previews" },
];

export function HomepageNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#161616]/6 bg-[rgba(247,243,238,0.78)] backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-[78rem] items-center justify-between px-6 md:px-10">
        <Link href="#hero" className="flex items-center">
          <R3WorkedWordmark className="text-[1.1rem] md:text-[1.22rem]" />
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-[13px] font-medium tracking-[0.02em] text-[#2A2A2A]/72 transition-colors hover:bg-[#161616]/4 hover:text-[#161616]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link
            href="#final-cta"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#D96B4F]/24 bg-[linear-gradient(135deg,rgba(255,255,255,0.84)_0%,rgba(245,236,230,0.92)_100%)] px-5 py-2.5 text-[13px] font-semibold tracking-[0.04em] text-[#161616] shadow-[inset_0_1px_0_rgba(255,255,255,0.74),0_10px_24px_rgba(90,60,42,0.08)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-[#D96B4F]/36 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.78),0_14px_28px_rgba(90,60,42,0.11)]"
          >
            Get a homepage review
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#161616]/8 bg-white/50 text-[#161616] transition-colors hover:bg-white/80 md:hidden"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <div
        className={cn(
          "border-t border-[#161616]/6 px-6 pb-5 pt-3 transition-all duration-200 md:hidden",
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <div className="mx-auto flex max-w-[78rem] flex-col gap-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-2xl px-3 py-3 text-sm font-medium text-[#2A2A2A]/80 transition-colors hover:bg-[#161616]/4 hover:text-[#161616]"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="#final-cta"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-flex min-h-11 items-center justify-center rounded-full border border-[#D96B4F]/24 bg-[linear-gradient(135deg,rgba(255,255,255,0.84)_0%,rgba(245,236,230,0.92)_100%)] px-5 py-2.5 text-sm font-semibold tracking-[0.04em] text-[#161616] shadow-[inset_0_1px_0_rgba(255,255,255,0.74),0_10px_24px_rgba(90,60,42,0.08)]"
          >
            Get a homepage review
          </Link>
        </div>
      </div>
    </header>
  );
}
