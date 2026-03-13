"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Logo, BrandMark } from "./Logo";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

type NavMode = "top" | "hero" | "compact";

const HERO_PILL_START_PX = 56;
const HERO_EXIT_OFFSET_PX = 0;

export function Navbar() {
  const [navMode, setNavMode] = useState<NavMode>("top");
  const [compactMenuOpen, setCompactMenuOpen] = useState(false);
  const latestModeRef = useRef<NavMode>("top");
  const pathname = usePathname();
  const isMedical = pathname === "/medical";

  const scrollToAnchor = (id: "#features" | "#framework" | "#pricing") => {
    setCompactMenuOpen(false);
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const updateNavMode = () => {
      const y = window.scrollY;
      const heroEl = document.getElementById("hero");
      const heroBottom = heroEl ? heroEl.offsetTop + heroEl.offsetHeight : Number.MAX_SAFE_INTEGER;

      let targetMode: NavMode = "top";
      if (y > HERO_PILL_START_PX && y < heroBottom + HERO_EXIT_OFFSET_PX) {
        targetMode = "hero";
      } else if (y >= heroBottom + HERO_EXIT_OFFSET_PX) {
        targetMode = "compact";
      }

      if (latestModeRef.current !== targetMode) {
        latestModeRef.current = targetMode;
        if (targetMode !== "compact") {
          setCompactMenuOpen(false);
        }
        setNavMode(targetMode);
      }
    };

    updateNavMode();
    window.addEventListener("scroll", updateNavMode, { passive: true });
    window.addEventListener("resize", updateNavMode);

    return () => {
      window.removeEventListener("scroll", updateNavMode);
      window.removeEventListener("resize", updateNavMode);
    };
  }, []);

  return (
    <div className="fixed left-1/2 top-6 z-50 h-[76px] w-[95%] max-w-7xl -translate-x-1/2">
      <nav
        className={cn(
          "absolute inset-0 flex items-center justify-between px-6 py-4 text-peach/95 transition-all duration-200 ease-out",
          navMode === "top"
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        )}
      >
        <Link href="/" className="flex-shrink-0">
          <div className="hidden md:block">
            <Logo
              theme="light"
              className="w-32 text-white lg:w-40"
              accentColor={isMedical ? "#9aeee0" : "#FF6B6B"}
            />
          </div>
          <div className="md:hidden">
            <BrandMark className="h-10 w-10" />
          </div>
        </Link>

        <div className="hidden items-center space-x-8 text-sm font-medium tracking-wide md:flex">
          <Link href="#features" className="transition-colors hover:text-peach">
            Features
          </Link>
          <Link href="#framework" className="transition-colors hover:text-peach">
            Framework
          </Link>
          <Link href="#pricing" className="transition-colors hover:text-peach">
            Pricing
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="inline-flex items-center rounded-full border border-charcoal/30 bg-ink/45 p-1 text-xs font-medium">
            <Link
              href="/restaurants"
              className={cn(
                "rounded-full px-3 py-1.5 transition-colors",
                !isMedical ? "bg-coral text-white" : "text-peach/85 hover:text-peach"
              )}
            >
              For Restaurants
            </Link>
            <Link
              href="/medical"
              className={cn(
                "rounded-full px-3 py-1.5 transition-colors",
                isMedical ? "bg-[#9aeee0] text-ink" : "text-peach/85 hover:text-peach"
              )}
            >
              For Medical
            </Link>
          </div>
          <Link
            href="/book"
            className={cn(
              "magnetic-button rounded-full px-6 py-2.5 text-sm font-semibold shadow-lg transition-colors",
              isMedical
                ? "bg-[#9aeee0] text-ink shadow-[0_10px_24px_rgba(154,238,224,0.35)] hover:bg-[#8ae5d6]"
                : "bg-coral text-white shadow-coral/20 hover:bg-coral/90"
            )}
          >
            Book Demo
          </Link>
        </div>
      </nav>

      <nav
        className={cn(
          "absolute inset-0 flex items-center justify-between rounded-full border border-charcoal bg-ink/80 px-6 py-4 text-white shadow-[0_10px_30px_rgba(10,10,18,0.35)] backdrop-blur-md transition-all duration-200 ease-out",
          navMode === "hero"
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0 bg-ink/80 border-charcoal"
        )}
      >
        <Link href="/" className="flex-shrink-0">
          <div className="hidden md:block">
            <Logo
              theme="light"
              className="w-32 text-white lg:w-40"
              accentColor={isMedical ? "#9aeee0" : "#FF6B6B"}
            />
          </div>
          <div className="md:hidden">
            <BrandMark className="h-10 w-10" />
          </div>
        </Link>

        <div className="hidden items-center space-x-8 text-sm font-medium tracking-wide md:flex">
          <Link href="#features" className="transition-colors hover:text-coral">
            Features
          </Link>
          <Link href="#framework" className="transition-colors hover:text-coral">
            Framework
          </Link>
          <Link href="#pricing" className="transition-colors hover:text-coral">
            Pricing
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="inline-flex items-center rounded-full border border-charcoal/50 bg-ink/70 p-1 text-xs font-medium text-peach">
            <Link
              href="/restaurants"
              className={cn(
                "rounded-full px-3 py-1.5 transition-colors",
                !isMedical ? "bg-coral text-white" : "text-peach/85 hover:text-peach"
              )}
            >
              For Restaurants
            </Link>
            <Link
              href="/medical"
              className={cn(
                "rounded-full px-3 py-1.5 transition-colors",
                isMedical ? "bg-[#9aeee0] text-ink" : "text-peach/85 hover:text-peach"
              )}
            >
              For Medical
            </Link>
          </div>
          <Link
            href="/book"
            className={cn(
              "magnetic-button rounded-full px-6 py-2.5 text-sm font-semibold shadow-lg transition-colors",
              isMedical
                ? "bg-[#9aeee0] text-ink shadow-[0_10px_24px_rgba(154,238,224,0.35)] hover:bg-[#8ae5d6]"
                : "bg-coral text-white shadow-coral/20 hover:bg-coral/90"
            )}
          >
            Book Demo
          </Link>
        </div>
      </nav>

      <div
        className={cn(
          "absolute inset-0 transition-all duration-200 ease-out",
          navMode === "compact"
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        )}
      >
        <div className="flex h-full items-center justify-between gap-3">
          <Link
            href="/"
            className="inline-flex h-12 items-center rounded-full border border-charcoal bg-ink/88 px-4 text-peach shadow-[0_10px_24px_rgba(10,10,18,0.35)] backdrop-blur-md"
          >
            <div className="hidden md:block">
              <Logo
                theme="light"
                className="w-28 text-white lg:w-32"
                accentColor={isMedical ? "#9aeee0" : "#FF6B6B"}
              />
            </div>
            <div className="md:hidden">
              <BrandMark className="h-10 w-10" />
            </div>
          </Link>

          <div className="relative flex items-center gap-2 md:gap-3">
            <Link
              href="/book"
              className="magnetic-button inline-flex h-12 items-center rounded-full border border-charcoal bg-ink/88 px-4 text-sm font-semibold text-peach shadow-[0_10px_24px_rgba(10,10,18,0.35)] backdrop-blur-md transition-colors hover:bg-ink/95 md:px-5"
            >
              Book Demo
            </Link>
            <button
              aria-label="Toggle navigation menu"
              aria-expanded={compactMenuOpen}
              onClick={() => setCompactMenuOpen((prev) => !prev)}
              className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-charcoal bg-ink/88 text-peach shadow-[0_10px_24px_rgba(10,10,18,0.35)] backdrop-blur-md transition-colors hover:bg-ink/95"
            >
              {compactMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
            <div
              className={cn(
                "absolute right-0 top-[calc(100%+0.65rem)] w-56 rounded-2xl border border-charcoal bg-ink/95 p-2 text-peach shadow-[0_16px_34px_rgba(10,10,18,0.45)] transition-all duration-200 ease-out",
                compactMenuOpen
                  ? "translate-y-0 pointer-events-auto opacity-100"
                  : "-translate-y-2 pointer-events-none opacity-0"
              )}
            >
              <div className="mb-2 inline-flex w-full items-center rounded-xl border border-charcoal/80 bg-ink/80 p-1 text-[11px]">
                <Link
                  href="/restaurants"
                  onClick={() => setCompactMenuOpen(false)}
                  className={cn(
                    "flex-1 rounded-lg px-2 py-1.5 text-center transition-colors",
                    !isMedical ? "bg-coral text-white" : "text-peach/85"
                  )}
                >
                  For Restaurants
                </Link>
                <Link
                  href="/medical"
                  onClick={() => setCompactMenuOpen(false)}
                  className={cn(
                    "flex-1 rounded-lg px-2 py-1.5 text-center transition-colors",
                    isMedical ? "bg-coral text-white" : "text-peach/85"
                  )}
                >
                  For Medical
                </Link>
              </div>
              <button
                onClick={() => scrollToAnchor("#features")}
                className="w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-peach/10"
              >
                Features
              </button>
              <button
                onClick={() => scrollToAnchor("#framework")}
                className="w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-peach/10"
              >
                Framework
              </button>
              <button
                onClick={() => scrollToAnchor("#pricing")}
                className="w-full rounded-xl px-3 py-2 text-left text-sm font-medium transition-colors hover:bg-peach/10"
              >
                Pricing
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
