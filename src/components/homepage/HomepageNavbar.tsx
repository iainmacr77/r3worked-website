"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { R3WorkedWordmark } from "@/components/homepage/R3WorkedWordmark";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { href: "#the-3", label: "The 3" },
  { href: "#before-after-showcase", label: "Rework" },
  { href: "#follow-up-system", label: "System" },
  { href: "#preview-examples", label: "Previews" },
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
        scrolled ? "bg-[#F7F3EE]/90 backdrop-blur-md border-b border-[#161616]/5 py-2" : "bg-transparent py-4"
      )}
    >
      <div className="px-6 md:px-10">
        <div className="mx-auto flex max-w-[84rem] items-center justify-between">
          <Link href="#hero" className="flex items-center text-[#161616] transition-opacity hover:opacity-80">
            <R3WorkedWordmark className="text-[1.1rem] md:text-[1.22rem]" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium tracking-wide text-[#2A2A2A] transition-colors hover:text-[#D96B4F]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Link
              href="#final-cta"
              className="inline-flex items-center justify-center rounded-full bg-[#161616] px-6 py-2.5 text-xs font-semibold tracking-wide text-[#F7F3EE] transition-all hover:bg-[#2A2A2A] shadow-[0_4px_12px_rgba(22,22,22,0.1)]"
            >
              Get a homepage review
            </Link>
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
            className="absolute inset-x-0 top-full border-b border-[#161616]/5 bg-[#F7F3EE] px-6 py-6 shadow-xl md:hidden"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-semibold tracking-wide text-[#161616] hover:text-[#D96B4F]"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#final-cta"
                onClick={() => setMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-[#161616] px-6 py-3 text-sm font-semibold tracking-wide text-[#F7F3EE] shadow-md"
              >
                Get a homepage review
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
