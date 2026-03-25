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
        <div className="mb-16">
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
            className="mt-6 type-h2 text-[#161616]"
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
            className="relative inline-grid grid-cols-2 items-center rounded-[14px] border border-[#C8BFB1]/50 bg-gradient-to-b from-white to-[#F3ECE1] p-[5px] shadow-[0_1px_2px_rgba(22,22,22,0.05),0_6px_14px_rgba(22,22,22,0.05),0_18px_40px_rgba(22,22,22,0.05),inset_0_1px_0_rgba(255,255,255,0.95),inset_0_-1px_0_rgba(22,22,22,0.02)]"
            role="tablist"
            aria-label="Homepage transformation view"
          >
            <div
              aria-hidden="true"
              className={
                isShowingAfter
                  ? "absolute inset-y-[5px] left-[calc(50%+2px)] right-[5px] rounded-[10px] bg-gradient-to-b from-[#1E1D1B] to-[#141312] shadow-[0_2px_4px_rgba(22,22,22,0.14),0_8px_18px_rgba(22,22,22,0.18),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-[380ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
                  : "absolute inset-y-[5px] left-[5px] right-[calc(50%+2px)] rounded-[10px] bg-gradient-to-b from-[#1E1D1B] to-[#141312] shadow-[0_2px_4px_rgba(22,22,22,0.14),0_8px_18px_rgba(22,22,22,0.18),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-[380ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
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
                  ? "relative z-10 min-w-[7.5rem] cursor-pointer rounded-[10px] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#3D3A35] transition-all duration-300 hover:text-[#1A1916] focus-visible:outline-none"
                  : "relative z-10 min-w-[7.5rem] cursor-pointer rounded-[10px] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#F3EDE4] transition-all duration-300 focus-visible:outline-none"
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
                  ? "relative z-10 min-w-[7.5rem] cursor-pointer rounded-[10px] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#F3EDE4] transition-all duration-300 focus-visible:outline-none"
                  : "relative z-10 min-w-[7.5rem] cursor-pointer rounded-[10px] px-5 py-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#3D3A35] transition-all duration-300 hover:text-[#1A1916] focus-visible:outline-none"
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
          ? "absolute bottom-5 right-5 inline-flex items-center gap-2.5 rounded-full border border-[#161616]/25 bg-gradient-to-b from-white to-[#F0E9DF] px-6 py-3.5 text-[11.5px] font-bold uppercase tracking-[0.15em] text-[#0A0A0A] shadow-[0_2px_4px_rgba(22,22,22,0.08),0_8px_18px_rgba(22,22,22,0.1),0_20px_44px_rgba(22,22,22,0.1),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#161616]/35 hover:shadow-[0_2px_4px_rgba(22,22,22,0.1),0_12px_24px_rgba(22,22,22,0.14),0_26px_52px_rgba(22,22,22,0.12),inset_0_1px_0_rgba(255,255,255,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#161616]/20"
          : "absolute bottom-5 right-5 inline-flex items-center gap-2.5 rounded-full border border-[#1E293B]/22 bg-gradient-to-b from-white to-[#EFF2F6] px-6 py-3.5 text-[11.5px] font-bold uppercase tracking-[0.15em] text-[#0A0F1A] shadow-[0_2px_4px_rgba(15,23,42,0.07),0_8px_18px_rgba(15,23,42,0.08),0_20px_44px_rgba(15,23,42,0.08),inset_0_1px_0_rgba(255,255,255,0.96)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1E293B]/32 hover:shadow-[0_2px_4px_rgba(15,23,42,0.1),0_12px_24px_rgba(15,23,42,0.12),0_26px_52px_rgba(15,23,42,0.1),inset_0_1px_0_rgba(255,255,255,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E293B]/18"
      }
    >
      <span>{label}</span>
      <ArrowRight size={14} strokeWidth={2.5} aria-hidden="true" />
    </button>
  );
}
