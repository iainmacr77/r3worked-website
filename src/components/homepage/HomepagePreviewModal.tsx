"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

import { CollinsBeforeFullPreview } from "./CollinsBeforeFullPreview";

interface HomepagePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  variant: "before" | "after" | null;
}

export function HomepagePreviewModal({ isOpen, onClose, variant }: HomepagePreviewModalProps) {
  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-10">
          {/* Subtle Backdrop Layer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={onClose}
            className="absolute inset-0 bg-[#161616]/30 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 10 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[1400px] h-[90vh] lg:h-[85vh] bg-white rounded-[1.5rem] lg:rounded-[2rem] shadow-[0_32px_80px_rgba(22,22,22,0.15)] overflow-hidden flex flex-col ring-1 ring-[#161616]/5"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Modal Header / Chrome */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#161616]/5 bg-[#F8FAFC]/50">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#161616]/10" />
                  <div className="w-3 h-3 rounded-full bg-[#161616]/10" />
                  <div className="w-3 h-3 rounded-full bg-[#161616]/10" />
                </div>
                <div className="w-px h-4 bg-[#161616]/10 mx-2" />
                <h3 id="modal-title" className="text-sm font-semibold text-[#161616] flex items-center gap-2">
                  <ExternalLink size={14} className="text-[#161616]/40" />
                  {variant === "before" ? "Original Site Preview" : "R3WORKED Architecture Preview"}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-[#161616]/5 transition-colors group outline-none focus-visible:ring-2 focus-visible:ring-[#161616]/20"
                aria-label="Close preview"
              >
                <X size={18} className="text-[#161616]/60 group-hover:text-[#161616] transition-colors" />
              </button>
            </div>

            {/* Scrollable Sub-Viewport */}
            <div className="flex-1 w-full bg-[#F8FAFC] overflow-y-auto overflow-x-hidden relative scroll-smooth scrollbar-hide">
              {variant === "before" ? (
                <CollinsBeforeModalContent />
              ) : (
                <PlaceholderAfterContent />
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// ==========================================
// PREVIEW CONTENT: Swap these out incrementally
// ==========================================

function CollinsBeforeModalContent() {
  return <CollinsBeforeFullPreview />;
}

function PlaceholderAfterContent() {
  return (
    <div className="min-h-[150vh] flex flex-col bg-[#F7F3EE]">
      {/* 
        TODO: Swap this entire component later for:
        <AfterHomepagePreview /> (The actual polished R3WORKED Collins page structure)
      */}
      <div className="p-20 border-b border-[#161616]/5 flex flex-col justify-center min-h-[60vh] relative">
        <div className="absolute top-0 right-0 w-[50%] h-[100%] bg-[radial-gradient(ellipse_at_top_right,rgba(184,107,92,0.08),transparent_60%)] pointer-events-none" />
        <div className="max-w-3xl relative z-10">
          <h1 className="text-5xl lg:text-7xl font-sans font-bold tracking-tight text-[#161616] leading-[1.0] mb-8">
            Precision building.<br />Engineered for scale.
          </h1>
          <p className="text-xl text-[#2A2A2A]/80 font-medium leading-[1.6] max-w-xl mb-12">
            A premium demonstration of architectural intent, sharp typography, and effortless modern layout designed to convert high-value prospects.
          </p>
          <div className="px-8 py-4 rounded-full bg-[#161616] text-white text-[13px] font-bold uppercase tracking-[0.1em] shadow-[0_8px_24px_rgba(22,22,22,0.2)] inline-block">
            Start a project
          </div>
        </div>
      </div>
      <div className="flex-1 p-20 flex flex-col gap-16">
        <div className="w-full h-80 rounded-[2rem] bg-[#161616]/5 border border-[#161616]/5" />
        <div className="grid grid-cols-2 gap-10">
          <div className="w-full h-64 rounded-[2rem] bg-white border border-[#161616]/5 shadow-sm" />
          <div className="w-full h-64 rounded-[2rem] bg-white border border-[#161616]/5 shadow-sm" />
        </div>
      </div>
    </div>
  );
}
