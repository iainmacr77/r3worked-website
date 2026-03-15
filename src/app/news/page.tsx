import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { HomepageFooter } from "@/components/homepage/HomepageFooter";
import { HomepageNavbar } from "@/components/homepage/HomepageNavbar";
import { newsArticles } from "@/content/news";
import { createSiteMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createSiteMetadata({
  title: "Hey Lola News | Product Notes and Operating Insights",
  description:
    "Updates, product notes, and operating insights from Hey Lola across restaurants, medical, and the broader voice layer.",
});

export default function NewsPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#FAFAF8]">
      <HomepageNavbar />

      <section className="w-full border-b border-ink/[0.06] px-6 pb-16 pt-32 md:px-16 md:pb-20 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <p className="font-jetbrains text-[10px] font-semibold uppercase tracking-[0.22em] text-charcoal/42">
            News
          </p>
          <h1 className="type-h2-serif mt-4 max-w-[12ch] text-ink">
            Notes from the operating layer.
          </h1>
          <p className="type-lead mt-6 max-w-[42ch] text-charcoal/60">
            Product updates, field observations, and platform thinking from Hey
            Lola.
          </p>
        </div>
      </section>

      <section className="w-full bg-white px-6 py-20 md:px-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-[2rem] border border-ink/[0.06] bg-ink/[0.04] md:grid-cols-3">
          {newsArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className="group flex h-full flex-col bg-white p-8 transition-colors duration-300 hover:bg-[#FAFAF8] md:p-9"
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-ink/[0.04] px-3 py-1 font-jetbrains text-[9px] font-bold uppercase tracking-[0.14em] text-charcoal/50">
                  {article.category}
                </span>
                <span className="font-jetbrains text-[10px] tracking-[0.1em] text-charcoal/25">
                  {article.date}
                </span>
              </div>

              <h2 className="mt-5 text-xl font-semibold leading-snug tracking-tight text-ink">
                {article.title}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-charcoal/56">
                {article.excerpt}
              </p>

              <p className="mt-8 flex items-center gap-2 text-sm font-medium text-charcoal/42 transition-colors group-hover:text-ink">
                Read article
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </p>
            </Link>
          ))}
        </div>
      </section>

      <HomepageFooter />
    </main>
  );
}
