"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/Magnetic";
import { R3WorkedWordmark } from "@/components/homepage/R3WorkedWordmark";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "/#hero", label: "Lead Rescue" },
  { href: "/#before-after-showcase", label: "Website Uplift" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/#final-cta", label: "Contact" },
];

export function HomepageNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "bg-[#F5F2EA]/90 backdrop-blur-md border-b border-[#161616]/5 py-2" : "bg-transparent py-4"
      )}
    >
      <div className="px-6 md:px-10">
        <div className="mx-auto flex max-w-[84rem] items-center justify-between">
          <Link href="/#hero" className="flex items-center text-[#161616] transition-opacity hover:opacity-80">
            <R3WorkedWordmark className="text-[1.1rem] md:text-[1.22rem]" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-[#2A2A2A] transition-colors hover:text-[#C97C2E]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Magnetic strength={0.25}>
              <Link
                href="/#lead-rescue-review"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full border border-[#161616]/10 bg-white/80 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-[#161616] shadow-[0_4px_12px_rgba(22,22,22,0.06)] transition-[border-color,box-shadow] duration-300 hover:border-[#161616]/0 hover:shadow-[0_8px_20px_rgba(22,22,22,0.12)]"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 translate-y-full rounded-full bg-[#161616] transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
                />
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#F0A442]">
                  Get started
                </span>
                <ArrowRight
                  size={13}
                  strokeWidth={2.5}
                  className="relative z-10 -ml-1 w-0 opacity-0 transition-all duration-300 group-hover:ml-0 group-hover:w-[13px] group-hover:opacity-100 group-hover:text-[#F0A442]"
                />
              </Link>
            </Magnetic>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#161616]/5 text-[#161616] transition-colors hover:bg-[#161616]/10 md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-x-0 top-full border-b border-[#161616]/5 bg-[#F5F2EA] px-6 py-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-semibold tracking-wide text-[#161616] hover:text-[#C97C2E]"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#lead-rescue-review"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-full border border-[#161616]/10 bg-white px-6 py-3 text-sm font-semibold tracking-wide text-[#161616] shadow-md"
              >
                Get started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
