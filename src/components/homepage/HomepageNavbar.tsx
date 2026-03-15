"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Logo, BrandMark } from "../ui/Logo";
import Link from "next/link";
import { Menu, X } from "lucide-react";

type NavMode = "top" | "scrolled";

export function HomepageNavbar() {
  const [navMode, setNavMode] = useState<NavMode>("top");
  const [isVisible, setIsVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const latestModeRef = useRef<NavMode>("top");
  const latestVisibleRef = useRef(true);
  const lastScrollYRef = useRef(0);
  const scrollAccumulatorRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const syncVisibility = (nextVisible: boolean) => {
      if (latestVisibleRef.current !== nextVisible) {
        latestVisibleRef.current = nextVisible;
        setIsVisible(nextVisible);
      }
    };

    const update = () => {
      const y = window.scrollY;
      const target: NavMode = y > 40 ? "scrolled" : "top";

      if (latestModeRef.current !== target) {
        latestModeRef.current = target;
        setNavMode(target);
      }

      if (menuOpen) {
        lastScrollYRef.current = y;
        scrollAccumulatorRef.current = 0;
        syncVisibility(true);
        return;
      }

      if (y <= 24) {
        lastScrollYRef.current = y;
        scrollAccumulatorRef.current = 0;
        syncVisibility(true);
        return;
      }

      const delta = y - lastScrollYRef.current;
      lastScrollYRef.current = y;

      if (Math.abs(delta) < 2) {
        return;
      }

      const accumulator = scrollAccumulatorRef.current;
      const nextAccumulator =
        accumulator === 0 || Math.sign(accumulator) === Math.sign(delta)
          ? accumulator + delta
          : delta;

      scrollAccumulatorRef.current = nextAccumulator;

      if (nextAccumulator > 18 && y > 120) {
        scrollAccumulatorRef.current = 0;
        syncVisibility(false);
      } else if (nextAccumulator < -18) {
        scrollAccumulatorRef.current = 0;
        syncVisibility(true);
      }
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;

      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        update();
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
      }
    };
  }, [menuOpen]);

  const links = [
    { href: "/restaurants", label: "Restaurants" },
    { href: "/medical", label: "Medical" },
    { href: "/news", label: "News" },
  ];

  const handleMenuToggle = () => {
    if (!menuOpen && !latestVisibleRef.current) {
      latestVisibleRef.current = true;
      setIsVisible(true);
    }

    setMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[transform,background-color,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        isVisible || menuOpen ? "translate-y-0" : "-translate-y-[105%]",
        navMode === "scrolled"
          ? "shell-glass-nav"
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
            className="group relative inline-flex min-h-11 items-center justify-center overflow-hidden rounded-full border border-coral/55 bg-[linear-gradient(135deg,#FF6B6B_0%,#F0716B_100%)] px-5 py-2.5 text-[13px] font-semibold tracking-[0.04em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_22px_rgba(231,127,116,0.22)] transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-coral/70 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.26),0_14px_28px_rgba(231,127,116,0.28)] active:translate-y-0 active:scale-[0.98]"
          >
            <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(255,255,255,0)_28%,rgba(255,255,255,0.28)_50%,rgba(255,255,255,0)_72%)] translate-x-[-120%] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-[120%]" />
            <span className="relative z-10">Book Demo</span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={handleMenuToggle}
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
          className="group relative mt-3 block overflow-hidden rounded-full border border-coral/55 bg-[linear-gradient(135deg,#FF6B6B_0%,#F0716B_100%)] px-5 py-2.5 text-center text-sm font-semibold tracking-[0.04em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_10px_22px_rgba(231,127,116,0.18)]"
        >
          <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,rgba(255,255,255,0)_28%,rgba(255,255,255,0.22)_50%,rgba(255,255,255,0)_72%)]" />
          <span className="relative z-10">Book Demo</span>
        </Link>
      </div>
    </header>
  );
}
