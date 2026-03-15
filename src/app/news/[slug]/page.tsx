import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { HomepageFooter } from "@/components/homepage/HomepageFooter";
import { HomepageNavbar } from "@/components/homepage/HomepageNavbar";
import { getNewsArticle, newsArticles } from "@/content/news";
import { createSiteMetadata } from "@/lib/site-metadata";

type NewsArticlePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return newsArticles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: NewsArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    return createSiteMetadata({
      title: "Hey Lola News | Article Not Found",
      description: "This Hey Lola article could not be found.",
    });
  }

  return createSiteMetadata({
    title: `${article.title} | Hey Lola News`,
    description: article.description,
  });
}

export default async function NewsArticlePage({
  params,
}: NewsArticlePageProps) {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="flex min-h-screen w-full flex-col bg-[#FAFAF8]">
      <HomepageNavbar />

      <article className="w-full px-6 pb-20 pt-32 md:px-16 md:pb-24 md:pt-40">
        <div className="mx-auto max-w-4xl">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-sm font-medium text-charcoal/52 transition-colors hover:text-ink"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to news
          </Link>

          <div className="mt-10 border-b border-ink/[0.08] pb-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-ink/[0.04] px-3 py-1 font-jetbrains text-[9px] font-bold uppercase tracking-[0.14em] text-charcoal/50">
                {article.category}
              </span>
              <span className="font-jetbrains text-[10px] uppercase tracking-[0.14em] text-charcoal/30">
                {article.date}
              </span>
            </div>

            <h1 className="type-h2 mt-6 max-w-[18ch] text-ink">
              {article.title}
            </h1>
            <p className="type-lead mt-6 max-w-[44ch] text-charcoal/60">
              {article.intro}
            </p>
          </div>

          <div className="grid gap-10 pt-10 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start">
            <div className="space-y-6 text-[1.02rem] leading-8 text-charcoal/76">
              {article.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <aside className="rounded-[1.75rem] border border-ink/[0.08] bg-white p-6">
              <p className="font-jetbrains text-[10px] uppercase tracking-[0.18em] text-charcoal/36">
                Key points
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-charcoal/68">
                {article.keyPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-1.5 inline-block h-2 w-2 rounded-full bg-coral/70" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </article>

      <HomepageFooter />
    </main>
  );
}
