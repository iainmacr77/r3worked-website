"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { HomepagePreviewModal } from "./HomepagePreviewModal";
import { CollinsBeforeFullPreview } from "./CollinsBeforeFullPreview";
import { BrowserPreviewFrame } from "./BrowserPreviewFrame";

export function BeforeAfterShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isShowingAfter, setIsShowingAfter] = useState(false);
  const [previewVariant, setPreviewVariant] = useState<"before" | "after" | null>(null);

  return (
    <section id="before-after-showcase" className="bg-[#F7F3EE] px-6 py-24 md:px-10 md:py-32 border-t border-[#161616]/5">
      <div className="mx-auto max-w-[84rem]" ref={containerRef}>
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-[42rem]">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6 }}
              className="type-eyebrow text-[#B86B5C]"
            >
              The Transformation
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-sans font-bold text-[#161616] text-[clamp(2.5rem,4vw+1rem,4.5rem)] leading-tight tracking-[-0.03em]"
            >
              From ordinary surface<br />to commercial asset.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-[clamp(1.125rem,1vw+0.5rem,1.25rem)] leading-relaxed text-[#2A2A2A]/80 font-medium max-w-[38rem]"
            >
              Many perfectly good businesses are heavily undervalued by their websites. We take standard, cluttered interfaces and rebuild them into clear, high-trust digital environments.
            </motion.p>
          </div>
        </div>

        {/* Interactive Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] rounded-[1.5rem] overflow-hidden border border-[#161616]/10 shadow-[0_24px_64px_rgba(22,22,22,0.1)] bg-white"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {isShowingAfter ? (
              <motion.div
                key="after"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#F7F3EE]"
              >
                <BrowserPreviewFrame
                  title="Apex Roofing homepage"
                  url="https://apexroofing.co.uk"
                  footerOverlay={
                    <PreviewFooterCta
                      tone="after"
                      label="View full homepage"
                      onClick={() => setPreviewVariant("after")}
                    />
                  }
                >
                  <CollinsAfterCollapsedPreviewPage />
                </BrowserPreviewFrame>
              </motion.div>
            ) : (
              <motion.div
                key="before"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#F8FAFC]"
              >
                <BrowserPreviewFrame
                  title="Collins Construction homepage"
                  url="https://collinsconstruction.co.uk"
                  footerOverlay={
                    <PreviewFooterCta
                      tone="before"
                      label="View full homepage"
                      onClick={() => setPreviewVariant("before")}
                    />
                  }
                >
                  <CollinsBeforeFullPreview />
                </BrowserPreviewFrame>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Controls Below */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 relative h-[60px]"
        >
          <AnimatePresence mode="wait">
            {isShowingAfter ? (
              <motion.div
                key="controls-after"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-between"
              >
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#B86B5C] mb-1">After R3WORKED</span>
                  <span className="text-[15px] font-medium text-[#161616]">Sharp, premium, high-trust asset</span>
                </div>
                
                <button 
                  onClick={() => setIsShowingAfter(false)}
                  className="group flex items-center gap-3 px-6 py-3 rounded-full border border-[#161616]/10 bg-white hover:border-[#161616]/20 transition-all duration-300 shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-[#161616]/20"
                  aria-label="View Before variant"
                >
                  <ArrowLeft size={16} className="text-[#161616] transition-transform group-hover:-translate-x-1" />
                  <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-[#161616]">View Before</span>
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="controls-before"
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-between"
              >
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#2A2A2A]/40 mb-1">Before R3WORKED</span>
                  <span className="text-[15px] font-medium text-[#161616]">Generic, dated, low-conversion trace</span>
                </div>

                <button 
                  onClick={() => setIsShowingAfter(true)}
                  className="group flex items-center gap-3 px-6 py-3 rounded-full bg-[#161616] hover:bg-[#2A2A2A] transition-all duration-300 shadow-md outline-none focus-visible:ring-2 focus-visible:ring-[#161616]/20 focus-visible:ring-offset-2"
                  aria-label="View After variant"
                >
                  <span className="text-[13px] font-bold uppercase tracking-[0.1em] text-white">See the rebuild</span>
                  <ArrowRight size={16} className="text-white transition-transform group-hover:translate-x-1" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Deep View Modal overlay */}
        <HomepagePreviewModal 
           isOpen={!!previewVariant} 
           variant={previewVariant} 
           onClose={() => setPreviewVariant(null)} 
        />

      </div>
    </section>
  );
}

type PreviewFooterCtaProps = {
  tone: "before" | "after";
  label: string;
  onClick: () => void;
};

function PreviewFooterCta({ tone, label, onClick }: PreviewFooterCtaProps) {
  return (
    <button
      onClick={onClick}
      className={
        tone === "after"
          ? "absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-[#161616]/12 bg-white/92 px-5 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-[#161616] shadow-[0_12px_24px_rgba(22,22,22,0.12)] backdrop-blur-sm transition-colors hover:border-[#161616]/20 hover:bg-white focus-visible:ring-2 focus-visible:ring-[#161616]/20"
          : "absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full border border-[#D0D7E2] bg-white/96 px-5 py-3 text-[12px] font-bold uppercase tracking-[0.12em] text-[#334155] shadow-[0_12px_24px_rgba(15,23,42,0.1)] backdrop-blur-sm transition-colors hover:border-[#B9C4D5] hover:bg-white focus-visible:ring-2 focus-visible:ring-[#94A3B8]/30"
      }
    >
      <span>{label}</span>
      <ArrowRight size={14} aria-hidden="true" />
    </button>
  );
}

function CollinsAfterCollapsedPreviewPage() {
  return (
    <div className="min-h-[1200px] bg-[#F7F3EE] text-[#161616]">
      <header className="flex h-20 items-center justify-between border-b border-[#161616]/5 bg-white/70 px-12 backdrop-blur-md">
        <div className="font-sans text-xl font-bold tracking-tight text-[#161616]">
          Apex Roofing.
        </div>
        <div className="flex items-center gap-8 text-[13px] font-semibold tracking-wide text-[#2A2A2A]">
          <span>Services</span>
          <span>Our Work</span>
          <span>About Us</span>
        </div>
        <div className="rounded-full bg-[#161616] px-5 py-2.5 text-xs font-bold uppercase tracking-[0.1em] text-[#F7F3EE] shadow-md">
          Get a Quote
        </div>
      </header>

      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden px-20 py-20">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-[48%] bg-[radial-gradient(ellipse_at_top_right,rgba(184,107,92,0.08),transparent_60%)]" />
        <div className="relative z-10 flex min-h-[36rem] max-w-3xl flex-col justify-center">
          <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#B86B5C]/20 bg-[#B86B5C]/5 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B86B5C]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#B86B5C]">
              Established 1998
            </span>
          </div>
          <h1 className="mb-6 text-7xl font-sans font-bold leading-[0.98] tracking-[-0.04em] text-[#161616]">
            Precision roofing.
            <br />
            Built to endure.
          </h1>
          <p className="mb-10 max-w-xl text-xl font-medium leading-[1.6] text-[#2A2A2A]/80">
            Delivering architectural-grade roofing solutions across the South East.
            Specializing in heritage slate and modern flat systems.
          </p>
          <div className="flex gap-4">
            <div className="rounded-full bg-[#161616] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.1em] text-white shadow-[0_8px_24px_rgba(22,22,22,0.2)]">
              Request an inspection
            </div>
            <div className="rounded-full border border-[#161616]/15 px-8 py-4 text-[13px] font-bold uppercase tracking-[0.1em] text-[#161616]">
              View project gallery
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#161616]/6 bg-white px-20 py-16">
        <div className="grid grid-cols-3 gap-8">
          <div className="rounded-[1.5rem] border border-[#161616]/8 bg-[#F8F3EC] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B86B5C]">
              Domestic
            </p>
            <p className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#161616]">
              Slate, tile, and flat roofing systems.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-[#161616]/8 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#161616]/45">
              Response
            </p>
            <p className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#161616]">
              Structured inspections and clearer quote capture.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-[#161616]/8 bg-white p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#161616]/45">
              Heritage
            </p>
            <p className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#161616]">
              Detail-led presentation with a stronger first impression.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
