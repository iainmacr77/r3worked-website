import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "News | Hey Lola",
  description: "The latest updates, insights, and announcements from Hey Lola.",
};

export default function NewsPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-ink">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 py-32 text-center md:py-48">
        <Logo theme="light" className="w-36 text-white" accentColor="#FF6B6B" />
        <p className="mt-8 font-jetbrains text-[11px] font-semibold uppercase tracking-[0.2em] text-coral">
          Coming Soon
        </p>
        <h1 className="type-h2 mt-4 max-w-[16ch] text-peach">
          News &amp; Updates
        </h1>
        <p className="type-lead mt-4 max-w-[42ch] text-peach/70">
          We&apos;re preparing our newsroom. Check back soon for the latest from Hey Lola.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-peach/20 bg-peach/8 px-6 py-3 text-sm font-medium text-peach transition-colors hover:bg-peach/14"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to homepage
        </Link>
      </div>
    </main>
  );
}
