import type { Metadata } from "next";
import { HomepageFooter } from "@/components/homepage/HomepageFooter";
import { HomepageNavbar } from "@/components/homepage/HomepageNavbar";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import { createSiteMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createSiteMetadata({
  title: "Start Your Lead Rescue Review | R3WORKED",
  description:
    "Request a free Lead Rescue Review. We'll show you where your enquiries are being lost — missed calls, buried forms, slow replies — and what to fix first.",
});

const EXPECTATIONS = [
  {
    title: "Tell us where to look",
    body: "Your name, number and website — that's all we need to get started.",
  },
  {
    title: "We review your enquiry flow",
    body: "Calls, forms and messages: we find where serious jobs are slipping through.",
  },
  {
    title: "You get an honest report",
    body: "What's leaking, what to fix first, and whether R3WORKED is the right fit.",
  },
];

export default function BookPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#F5F2EA] text-[#161616]">
      <HomepageNavbar />

      <section className="w-full px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
        <div className="mx-auto grid max-w-[78rem] items-start gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
          <div>
            <p className="type-eyebrow inline-flex rounded-full border border-[#D96B4F]/20 bg-[#D96B4F]/5 px-4 py-1.5 text-[#B86B5C]">
              Free Lead Rescue Review
            </p>
            <h1 className="mt-6 type-section-heading-serif text-[#161616]">
              Start your Lead Rescue Review.
            </h1>
            <p className="type-support mt-6 max-w-[36rem] text-[#2A2A2A]/70">
              Find out where enquiries are leaking before they become someone
              else&apos;s booking. Free, quick, and no obligation.
            </p>

            <ol className="mt-12 flex flex-col gap-8">
              {EXPECTATIONS.map((step, index) => (
                <li key={step.title} className="flex items-start gap-5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D96B4F]/25 bg-[#D96B4F]/5 text-[0.8rem] font-bold tabular-nums text-[#D96B4F]">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-[1rem] font-semibold text-[#161616]">
                      {step.title}
                    </p>
                    <p className="mt-1 max-w-[34rem] text-[0.9rem] leading-relaxed text-[#2A2A2A]/60">
                      {step.body}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="premium-card p-6 sm:p-8 md:p-10">
            <LeadCaptureForm variant="light" />
          </div>
        </div>
      </section>

      <HomepageFooter />
    </main>
  );
}
