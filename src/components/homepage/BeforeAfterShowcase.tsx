"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

export function BeforeAfterShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [isShowingAfter, setIsShowingAfter] = useState(false);

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
                className="absolute inset-0 bg-[#F7F3EE] flex flex-col pt-8"
              >
                {/* Minimal Premium Header */}
                <div className="absolute top-0 left-0 right-0 h-20 border-b border-[#161616]/5 flex items-center justify-between px-8 bg-white/40 backdrop-blur-md">
                  <div className="font-sans font-bold text-xl tracking-tight text-[#161616]">Apex Roofing.</div>
                  <div className="hidden lg:flex gap-8 text-[13px] font-semibold tracking-wide text-[#2A2A2A]">
                    <span>Services</span>
                    <span>Our Work</span>
                    <span>About Us</span>
                  </div>
                  <div className="px-5 py-2.5 bg-[#161616] text-[#F7F3EE] rounded-full text-xs font-bold uppercase tracking-[0.1em] shadow-md">
                    Get a Quote
                  </div>
                </div>

                <div className="flex-1 w-full h-full flex flex-col justify-center px-12 lg:px-24 mt-16 pb-12 relative overflow-hidden">
                   {/* Elegant Background Lighting */}
                   <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-[radial-gradient(ellipse_at_top_right,rgba(184,107,92,0.08),transparent_60%)] pointer-events-none" />

                   <div className="max-w-2xl relative z-10">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#B86B5C]/20 bg-[#B86B5C]/5 mb-6">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B86B5C]" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#B86B5C]">Established 1998</span>
                      </div>
                      <h1 className="text-5xl lg:text-7xl font-sans font-bold tracking-tight text-[#161616] leading-[1.0] mb-6">
                        Precision roofing.<br />Built to endure.
                      </h1>
                      <p className="text-xl text-[#2A2A2A]/80 font-medium leading-[1.6] max-w-lg mb-10">
                        Delivering architectural-grade roofing solutions across the South East. Specializing in heritage slate and modern flat systems.
                      </p>
                      <div className="flex gap-4">
                        <div className="px-8 py-4 rounded-full bg-[#161616] text-white text-[13px] font-bold uppercase tracking-[0.1em] shadow-[0_8px_24px_rgba(22,22,22,0.2)]">
                          Request an inspection
                        </div>
                        <div className="px-8 py-4 rounded-full border border-[#161616]/15 text-[#161616] text-[13px] font-bold uppercase tracking-[0.1em]">
                          View latest projects
                        </div>
                      </div>
                   </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="before"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 bg-[#F8FAFC] flex flex-col border-none"
              >
                {/* Generic/Dated Header */}
                <div className="absolute top-0 left-0 right-0 h-[90px] bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm">
                  <div className="flex items-center gap-3">
                     <div className="w-10 h-10 bg-blue-600 rounded flex items-center justify-center text-white font-serif italic font-bold">A</div>
                     <div>
                        <div className="font-serif italic text-2xl text-gray-800 leading-none">Apex Roofing</div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-wide mt-1">Roofing services Ltd</div>
                     </div>
                  </div>
                  <div className="hidden lg:flex gap-6 text-[15px] font-sans text-gray-600">
                    <span className="text-blue-600">Home</span>
                    <span>Services</span>
                    <span>About</span>
                    <span>Contact</span>
                  </div>
                  <div className="flex flex-col items-end">
                     <span className="text-xs text-gray-500">Call us today!</span>
                     <span className="text-lg font-bold text-gray-900">01234 567 890</span>
                  </div>
                </div>

                {/* Grayish bland hero background */}
                <div className="flex-1 w-full bg-[#E2E8F0]/50 mt-[90px] flex items-center px-10 relative overflow-hidden">
                   {/* Faux generic stock-photo like overlay block */}
                   <div className="absolute right-0 top-0 bottom-0 w-[40%] bg-blue-900/10 pointer-events-none" />
                   
                   <div className="max-w-xl bg-white/80 backdrop-blur p-8 lg:p-10 border border-gray-200 shadow-sm">
                      <div className="text-blue-600 font-bold tracking-wider text-sm mb-2 uppercase">Welcome to our website</div>
                      <h1 className="text-4xl font-serif font-bold text-gray-900 leading-tight mb-4">
                        The best roofers in town since 1998
                      </h1>
                      <p className="text-gray-600 text-base leading-relaxed mb-6 font-sans">
                        We do all types of roofs. Flat roofs, pitched roofs, repairs and emergency callouts. Our team is fully qualified and ready to help you with your next project. Call us now for a free quote.
                      </p>
                      <div className="flex gap-4">
                        <div className="px-6 py-3 bg-blue-600 text-white font-bold rounded shadow">
                          Click Here For Quote
                        </div>
                        <div className="px-6 py-3 bg-gray-200 text-gray-800 font-bold rounded border border-gray-300">
                          Read More
                        </div>
                      </div>
                   </div>
                </div>
                {/* Cluttered trust badges */}
                <div className="absolute bottom-6 left-10 flex gap-4 opacity-70">
                   <div className="w-[100px] h-[40px] bg-gray-300 rounded" />
                   <div className="w-[80px] h-[40px] bg-gray-300 rounded" />
                   <div className="w-[90px] h-[40px] bg-gray-300 rounded" />
                </div>
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

      </div>
    </section>
  );
}
