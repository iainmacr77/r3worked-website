"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

import { CollinsAfterFullPreview } from "./CollinsAfterFullPreview";
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
                <CollinsAfterModalContent />
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

function CollinsAfterModalContent() {
  return <CollinsAfterFullPreview />;
}
