"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfterShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

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
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4 shrink-0"
          >
            <div className="flex flex-col items-end">
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#2A2A2A]/40">Interactive</span>
              <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#161616]">Drag to compare</span>
            </div>
            <div className="w-12 h-12 rounded-full border border-[#161616]/10 flex items-center justify-center bg-white shadow-[0_4px_12px_rgba(22,22,22,0.05)]">
              <MoveHorizontal size={18} className="text-[#161616]" />
            </div>
          </motion.div>
        </div>

        {/* Interactive Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.2, 0.65, 0.3, 0.9] }}
          className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:aspect-[21/9] rounded-[1.5rem] overflow-hidden border border-[#161616]/10 shadow-[0_24px_64px_rgba(22,22,22,0.1)] cursor-ew-resize bg-white select-none"
          onPointerDown={() => setIsDragging(true)}
          onPointerUp={() => setIsDragging(false)}
          onPointerLeave={() => setIsDragging(false)}
          onPointerMove={handlePointerMove}
        >
          {/* AFTER STATE (Bottom Layer) */}
          <div className="absolute inset-0 bg-[#F7F3EE] flex flex-col pt-8">
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
          </div>

          {/* BEFORE STATE (Top Layer, Clipped) */}
          <div 
            className="absolute inset-0 bg-[#F8FAFC] flex flex-col pointer-events-none border-r border-[#161616]/20 shadow-[4px_0_24px_rgba(0,0,0,0.05)]"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
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
                    <div className="px-6 py-3 bg-blue-600 text-white font-bold rounded shadow cursor-pointer">
                      Click Here For Quote
                    </div>
                    <div className="px-6 py-3 bg-gray-200 text-gray-800 font-bold rounded cursor-pointer border border-gray-300">
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
          </div>

          {/* Slider Line & Handle */}
          <div 
            className="absolute top-0 bottom-0 w-[2px] bg-white pointer-events-none z-20 flexItems-center justify-center mix-blend-difference"
            style={{ left: `calc(${sliderPosition}%)` }}
          />
          {/* Central Handle Container - absolutely positioned over line */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 z-30 pointer-events-none"
            style={{ left: `calc(${sliderPosition}%)`, transform: 'translate(-50%, -50%)' }}
          >
            <div className="w-14 h-14 bg-[#161616] rounded-full shadow-[0_8px_16px_rgba(22,22,22,0.3)] flex items-center justify-center border-4 border-white transition-transform duration-200 ease-out hover:scale-110">
              <div className="flex gap-1.5">
                <div className="w-1 h-5 bg-white rounded-full" />
                <div className="w-1 h-5 bg-white rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Labels below */}
        <div className="flex justify-between items-center mt-6 px-2">
          <div className="flex flex-col">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#2A2A2A]/40 mb-1">Before R3WORKED</span>
            <span className="text-[15px] font-semibold text-[#161616]">Generic, dated, low-conversion trace</span>
          </div>
          <div className="flex flex-col text-right">
            <span className="text-xs font-bold uppercase tracking-[0.1em] text-[#B86B5C] mb-1">After R3WORKED</span>
            <span className="text-[15px] font-semibold text-[#161616]">Sharp, premium, high-trust asset</span>
          </div>
        </div>

      </div>
    </section>
  );
}
