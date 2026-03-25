"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { HomepagePreviewModal } from "./HomepagePreviewModal";
import { CollinsAfterFullPreview } from "./CollinsAfterFullPreview";
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
        <div className="mb-16 max-w-[42rem]">
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6 }}
              className="type-eyebrow text-[#B86B5C]"
            >
              BEFORE / AFTER
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 max-w-[13ch] font-sans font-bold text-[#161616] text-[clamp(2.5rem,4vw+1rem,4.5rem)] leading-[0.94] tracking-[-0.045em] text-balance"
            >
              From dated and unclear<br />to sharp and credible.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="type-support mt-6 max-w-[38rem] text-[#2A2A2A]/80"
            >
              Same business. Better structure, better trust, and a homepage that gives people a stronger reason to stay and enquire.
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
                  title="Collins Construction homepage"
                  url="https://collinsconstruction.co.uk"
                  footerOverlay={
                    <PreviewFooterCta
                      tone="after"
                      label="View full homepage"
                      onClick={() => setPreviewVariant("after")}
                    />
                  }
                >
                  <CollinsAfterFullPreview />
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

        {/* Centered Before / After Toggle */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex justify-center"
        >
          <div
            className="relative inline-grid grid-cols-2 items-center rounded-full border border-[#161616]/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(247,243,238,0.96))] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_14px_36px_rgba(22,22,22,0.08)] backdrop-blur-sm"
            role="tablist"
            aria-label="Homepage transformation view"
          >
            <div
              aria-hidden="true"
              className={
                isShowingAfter
                  ? "absolute inset-y-1.5 left-[calc(50%+0.25rem)] right-1.5 rounded-full border border-[#161616]/10 bg-[#161616] shadow-[0_10px_24px_rgba(22,22,22,0.16),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 ease-out"
                  : "absolute inset-y-1.5 left-1.5 right-[calc(50%+0.25rem)] rounded-full border border-[#161616]/10 bg-[#161616] shadow-[0_10px_24px_rgba(22,22,22,0.16),inset_0_1px_0_rgba(255,255,255,0.08)] transition-all duration-300 ease-out"
              }
            />
            <button
              type="button"
              role="tab"
              aria-selected={!isShowingAfter}
              aria-label="Show before homepage"
              onClick={() => setIsShowingAfter(false)}
              className={
                isShowingAfter
                  ? "relative z-10 min-w-[7.75rem] rounded-full px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.16em] text-[#161616]/45 transition-colors duration-300 hover:text-[#161616]/75 focus-visible:text-[#161616]"
                  : "relative z-10 min-w-[7.75rem] rounded-full px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.16em] text-[#F7F3EE] transition-colors duration-300"
              }
            >
              BEFORE
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={isShowingAfter}
              aria-label="Show after homepage"
              onClick={() => setIsShowingAfter(true)}
              className={
                isShowingAfter
                  ? "relative z-10 min-w-[7.75rem] rounded-full px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.16em] text-[#F7F3EE] transition-colors duration-300"
                  : "relative z-10 min-w-[7.75rem] rounded-full px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.16em] text-[#161616]/45 transition-colors duration-300 hover:text-[#161616]/75 focus-visible:text-[#161616]"
              }
            >
              AFTER
            </button>
          </div>
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
          ? "absolute bottom-4 right-4 inline-flex items-center gap-2.5 rounded-full border border-[#161616]/16 bg-white px-5 py-3 text-[12px] font-bold uppercase tracking-[0.13em] text-[#161616] shadow-[0_16px_34px_rgba(22,22,22,0.16),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#161616]/28 hover:shadow-[0_20px_40px_rgba(22,22,22,0.2),inset_0_1px_0_rgba(255,255,255,0.92)] focus-visible:ring-2 focus-visible:ring-[#161616]/20"
          : "absolute bottom-4 right-4 inline-flex items-center gap-2.5 rounded-full border border-[#CBD5E1] bg-white px-5 py-3 text-[12px] font-bold uppercase tracking-[0.13em] text-[#1E293B] shadow-[0_16px_34px_rgba(15,23,42,0.14),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#94A3B8] hover:shadow-[0_20px_40px_rgba(15,23,42,0.18),inset_0_1px_0_rgba(255,255,255,0.96)] focus-visible:ring-2 focus-visible:ring-[#94A3B8]/30"
      }
    >
      <span>{label}</span>
      <ArrowRight size={14} aria-hidden="true" />
    </button>
  );
}
