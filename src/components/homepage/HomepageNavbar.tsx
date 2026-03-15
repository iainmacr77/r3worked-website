"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Logo, BrandMark } from "../ui/Logo";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type NavMode = "top" | "scrolled";

export function HomepageNavbar() {
  const [navMode, setNavMode] = useState<NavMode>("top");
  const [menuOpen, setMenuOpen] = useState(false);
  const latestModeRef = useRef<NavMode>("top");

  useEffect(() => {
    const update = () => {
      const y = window.scrollY;
      const target: NavMode = y > 48 ? "scrolled" : "top";
      if (latestModeRef.current !== target) {
        latestModeRef.current = target;
        setNavMode(target);
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const links = [
    { href: "/restaurants", label: "Restaurants" },
    { href: "/medical", label: "Medical" },
    { href: "/news", label: "News" },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        navMode === "scrolled"
          ? "bg-[#FAFAF8]/80 backdrop-blur-xl border-b border-ink/[0.06] shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="hidden md:block">
            <Logo
              theme="dark"
              className="w-28 text-ink lg:w-32"
              accentColor="#FF6B6B"
            />
          </div>
          <div className="md:hidden">
            <BrandMark className="h-9 w-9" />
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 text-[13px] font-medium tracking-wide text-charcoal/70 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/book"
            className="rounded-full bg-ink px-5 py-2.5 text-[13px] font-semibold text-[#FAFAF8] transition-all duration-200 hover:bg-ink/85 active:scale-[0.97]"
          >
            Book Demo
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={cn(
          "absolute inset-x-0 top-[72px] border-b border-ink/[0.06] bg-[#FAFAF8]/95 backdrop-blur-xl px-6 pb-6 pt-2 transition-all duration-200 md:hidden",
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="block py-3 text-sm font-medium text-charcoal/80 transition-colors hover:text-ink"
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/book"
          onClick={() => setMenuOpen(false)}
          className="mt-3 block rounded-full bg-ink px-5 py-2.5 text-center text-sm font-semibold text-[#FAFAF8]"
        >
          Book Demo
        </Link>
      </div>
    </header>
  );
}
