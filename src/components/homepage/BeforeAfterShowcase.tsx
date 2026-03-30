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
    <section id="before-after-showcase" className="light-section-seam bg-[#F7F3EE] px-6 pt-24 pb-14 md:px-10 md:pt-32 md:pb-16">
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
                    <>
                      <PreviewEyebrowSwitch
                        isShowingAfter
                        onClick={() => setIsShowingAfter(false)}
                      />
                      <PreviewFooterCta
                        tone="after"
                        label="View full homepage"
                        onClick={() => setPreviewVariant("after")}
                      />
                    </>
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
                    <>
                      <PreviewEyebrowSwitch
                        isShowingAfter={false}
                        onClick={() => setIsShowingAfter(true)}
                      />
                      <PreviewFooterCta
                        tone="before"
                        label="View full homepage"
                        onClick={() => setPreviewVariant("before")}
                      />
                    </>
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
          ? "group absolute bottom-5 right-5 inline-flex cursor-pointer items-center gap-2.5 overflow-hidden rounded-full border border-[#D96B4F]/28 bg-gradient-to-b from-[#E7785D] to-[#D96B4F] px-6 py-3.5 text-[11.5px] font-bold uppercase tracking-[0.15em] text-[#FFFFFF] shadow-[0_2px_6px_rgba(217,107,79,0.22),0_18px_44px_rgba(22,22,22,0.12),inset_0_1px_0_rgba(255,255,255,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D96B4F]/38 hover:shadow-[0_2px_8px_rgba(217,107,79,0.28),0_22px_54px_rgba(22,22,22,0.14),inset_0_1px_0_rgba(255,255,255,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F]/25"
          : "group absolute bottom-5 right-5 inline-flex cursor-pointer items-center gap-2.5 overflow-hidden rounded-full border border-[#D96B4F]/28 bg-gradient-to-b from-[#E7785D] to-[#D96B4F] px-6 py-3.5 text-[11.5px] font-bold uppercase tracking-[0.15em] text-[#FFFFFF] shadow-[0_2px_6px_rgba(217,107,79,0.22),0_18px_44px_rgba(15,23,42,0.12),inset_0_1px_0_rgba(255,255,255,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D96B4F]/38 hover:shadow-[0_2px_8px_rgba(217,107,79,0.28),0_22px_54px_rgba(15,23,42,0.14),inset_0_1px_0_rgba(255,255,255,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D96B4F]/25"
      }
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:translate-x-[220%] motion-reduce:transition-none"
        style={{ transform: "translateX(0) skewX(-12deg)" }}
      />
      <span className="relative z-10">{label}</span>
      <ArrowRight
        className="relative z-10"
        size={14}
        strokeWidth={2.5}
        aria-hidden="true"
      />
    </button>
  );
}

type PreviewEyebrowSwitchProps = {
  isShowingAfter: boolean;
  onClick: () => void;
};

function PreviewEyebrowSwitch({ isShowingAfter, onClick }: PreviewEyebrowSwitchProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute left-5 top-6 inline-flex cursor-pointer items-center rounded-full border border-[#161616]/18 bg-white/88 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#161616]/82 shadow-[0_2px_5px_rgba(22,22,22,0.08),0_18px_44px_rgba(22,22,22,0.08)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#161616]/26 hover:bg-white/94 hover:text-[#161616] hover:shadow-[0_2px_7px_rgba(22,22,22,0.1),0_24px_58px_rgba(22,22,22,0.1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#161616]/18"
      aria-label={
        isShowingAfter ? "Switch to pre-R3WORKED homepage view" : "Switch to R3WORKED homepage view"
      }
    >
      {isShowingAfter ? "← SEE THE PRE-R3WORKED SITE" : "VIEW THE R3WORKED SITE →"}
    </button>
  );
}
