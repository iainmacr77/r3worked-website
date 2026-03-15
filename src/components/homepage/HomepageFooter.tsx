import Link from "next/link";
import { Logo } from "../ui/Logo";

export function HomepageFooter() {
  return (
    <footer className="w-full border-t border-ink/[0.06] bg-[#FAFAF8] px-6 pb-12 pt-20 text-ink md:px-16">
      <div className="mx-auto mb-16 flex max-w-7xl flex-col items-start justify-between gap-16 md:flex-row md:items-start">
        {/* Brand column */}
        <div className="flex max-w-xs flex-col gap-6">
          <Logo theme="dark" className="w-32" accentColor="#FF6B6B" />
          <p className="font-outfit text-sm leading-relaxed text-charcoal/50">
            One voice layer for the real world. Starting with restaurants and clinics.
          </p>
        </div>

        {/* Navigation columns */}
        <div className="grid grid-cols-2 gap-12 font-outfit text-sm md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <h4 className="font-jetbrains text-[10px] uppercase tracking-[0.18em] text-charcoal/35">
              Solutions
            </h4>
            <Link
              href="/restaurants"
              className="text-charcoal/65 transition-colors hover:text-ink"
            >
              For Restaurants
            </Link>
            <Link
              href="/medical"
              className="text-charcoal/65 transition-colors hover:text-ink"
            >
              For Medical
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-jetbrains text-[10px] uppercase tracking-[0.18em] text-charcoal/35">
              Company
            </h4>
            <Link
              href="/news"
              className="text-charcoal/65 transition-colors hover:text-ink"
            >
              News
            </Link>
            <Link
              href="/contact"
              className="text-charcoal/65 transition-colors hover:text-ink"
            >
              Contact
            </Link>
            <Link
              href="/book"
              className="text-charcoal/65 transition-colors hover:text-ink"
            >
              Book Demo
            </Link>
          </div>
          <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
            <h4 className="font-jetbrains text-[10px] uppercase tracking-[0.18em] text-charcoal/35">
              Legal
            </h4>
            <Link
              href="/privacy"
              className="text-charcoal/65 transition-colors hover:text-ink"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-charcoal/65 transition-colors hover:text-ink"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-ink/[0.06] pt-8 font-jetbrains text-[10px] tracking-[0.1em] text-charcoal/30 md:flex-row">
        <p>
          © {new Date().getFullYear()} Hey Lola Technologies. All rights
          reserved.
        </p>
        <p>Cape Town, South Africa</p>
      </div>
    </footer>
  );
}
