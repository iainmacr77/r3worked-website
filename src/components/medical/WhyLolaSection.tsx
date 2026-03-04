"use client";

import { useReducedMotion } from "framer-motion";
import { SectionHeading } from "@/components/typography/SectionHeading";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

// Expose these as tweakable constants as requested
export const AUTO_SCROLL_SPEED = 0.6; // Higher = faster
export const RESUME_DELAY_MS = 2000;
export const CARD_WIDTH_CLASSES = "w-[280px] sm:w-[320px]";

const PAIN_POINTS = [
    { label: "MISSED CALLS", text: "Missed calls become lost bookings." },
    { label: "CANCELLATIONS", text: "Cancellations leave dead air." },
    { label: "RESCHEDULES", text: "Reschedules consume the day." },
    { label: "AFTER HOURS", text: "After-hours demand disappears." },
    { label: "FRONT DESK", text: "Reception becomes a bottleneck." },
    { label: "FAQ DRAIN", text: "Same questions. All day." },
    { label: "PATIENT DROP-OFF", text: "Patients churn when access feels hard." },
    { label: "DIARY GAPS", text: "Diary gaps hide in plain sight." },
];

export function WhyLolaSection() {
    const reducedMotion = useReducedMotion();
    const trackRef = useRef<HTMLDivElement>(null);

    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [isAutoScrolling, setIsAutoScrolling] = useState(true);

    const dragStartX = useRef(0);
    const dragScrollLeft = useRef(0);
    const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const scheduleResume = () => {
        if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = setTimeout(() => {
            setIsAutoScrolling(true);
        }, RESUME_DELAY_MS);
    };

    const pauseAutoScroll = () => {
        setIsAutoScrolling(false);
        if (resumeTimeoutRef.current) {
            clearTimeout(resumeTimeoutRef.current);
            resumeTimeoutRef.current = null;
        }
    };

    // Auto-scroll loop
    useEffect(() => {
        const track = trackRef.current;
        if (reducedMotion || !isAutoScrolling || !track) return;

        let animationFrameId: number;

        const animate = () => {
            if (track) {
                track.scrollLeft += AUTO_SCROLL_SPEED;

                // Seamless loop logic:
                // We rendered the array 3 times. We scroll until we hit the start of the 3rd set,
                // then snap back to the start of the 2nd set (which looks identical).
                // track.scrollWidth is total width.
                // We have 3 blocks. Each block is track.scrollWidth / 3.
                const oneBlockWidth = track.scrollWidth / 3;

                if (track.scrollLeft >= oneBlockWidth * 2) {
                    track.scrollLeft -= oneBlockWidth;
                } else if (track.scrollLeft <= 0) {
                    // In case user dragged all the way left
                    track.scrollLeft += oneBlockWidth;
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [reducedMotion, isAutoScrolling]);

    // Pointer events for drag
    const onPointerDown = (e: React.PointerEvent) => {
        if (!trackRef.current) return;
        pauseAutoScroll();
        setIsDragging(true);
        dragStartX.current = e.pageX;
        dragScrollLeft.current = trackRef.current.scrollLeft;
        trackRef.current.style.scrollBehavior = 'auto'; // Disable smooth scroll while dragging
        trackRef.current.style.scrollSnapType = 'none'; // Disable snapping while dragging
    };

    const onPointerMove = (e: React.PointerEvent) => {
        if (!isDragging || !trackRef.current) return;
        e.preventDefault();
        const x = e.pageX;
        const walk = (x - dragStartX.current) * 1.5; // Drag speed multiplier
        trackRef.current.scrollLeft = dragScrollLeft.current - walk;
    };

    const onPointerUpOrLeave = () => {
        if (isDragging) {
            setIsDragging(false);
            scheduleResume();
            if (trackRef.current) {
                // Re-enable smooth snap behavior
                trackRef.current.style.scrollBehavior = 'smooth';
                trackRef.current.style.scrollSnapType = 'x mandatory';
            }
        } else if (!isHovered) {
            // Mouse leave when not dragging
            scheduleResume();
        }
    };

    const onMouseEnter = () => {
        setIsHovered(true);
        pauseAutoScroll();
    };

    const onMouseLeave = () => {
        setIsHovered(false);
        onPointerUpOrLeave();
    };

    // User manually scrolled using scroll-wheel or trackpad
    const onScroll = () => {
        if (!isDragging && !isHovered) {
            pauseAutoScroll();
            scheduleResume();
        }
    };

    // Initialize scroll position to the middle block so seamless loop works backward & forward
    useEffect(() => {
        if (trackRef.current) {
            const oneBlockWidth = trackRef.current.scrollWidth / 3;
            trackRef.current.scrollLeft = oneBlockWidth;
        }
    }, []);

    // Triple array for seamless infinite looping
    const loopItems = [...PAIN_POINTS, ...PAIN_POINTS, ...PAIN_POINTS];

    return (
        <div className="mx-auto flex w-full max-w-[100vw] flex-col items-center pb-16 pt-10 text-center">
            {/* Header Container */}
            <div className="flex max-w-4xl flex-col items-center px-6">
                <SectionHeading
                    className="justify-items-center mb-6"
                    eyebrow="WHY LOLA"
                    eyebrowClassName="text-[#156e60] tracking-[0.2em]"
                    title="Give reception their day back."
                    titleClassName="type-h2-serif text-center max-w-[16ch]"
                    subtitle="Lola absorbs the routine scheduling load so your front desk can focus on patients — not phone traffic."
                    subtitleClassName="text-center text-charcoal/88 max-w-2xl text-lg md:text-xl leading-relaxed mt-4"
                />

                <p className="type-body text-charcoal/80 max-w-2xl md:text-lg mb-12">
                    The point: reception is slammed with bookings, amendments, cancellations, and repetitive non-clinical questions; Lola handles routine; anything clinical is routed back safely.
                </p>
            </div>

            {/* Ticker Lane */}
            <div className="relative w-full overflow-hidden">
                {/* Soft gradient fades on left/right edges */}
                <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 bg-gradient-to-r from-medical-soft-blue to-transparent sm:w-24 md:w-32 lg:w-48" />
                <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-medical-soft-blue to-transparent sm:w-24 md:w-32 lg:w-48" />

                <div
                    ref={trackRef}
                    className={cn(
                        "flex w-full gap-4 overflow-x-auto px-16 pb-12 pt-4 sm:px-[10vw] md:gap-5 scrollbar-hide",
                        isDragging ? "cursor-grabbing touch-pan-y" : "cursor-grab touch-pan-x motion-reduce:snap-none"
                    )}
                    style={{
                        msOverflowStyle: "none",
                        scrollbarWidth: "none",
                        scrollSnapType: isDragging ? 'none' : 'x mandatory',
                        scrollBehavior: isDragging ? 'auto' : 'smooth'
                    }}
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    onPointerDown={onPointerDown}
                    onPointerMove={onPointerMove}
                    onPointerUp={onPointerUpOrLeave}
                    onPointerCancel={onPointerUpOrLeave}
                    onScroll={onScroll}
                >
                    {loopItems.map((point, i) => (
                        <div
                            key={`${point.label}-${i}`}
                            className={cn(
                                "group relative flex shrink-0 snap-center flex-col items-start justify-center rounded-[1.5rem] border border-[#89dbc9]/30 bg-white/70 p-6 shadow-[0_8px_32px_rgba(21,110,96,0.06)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-[0_12px_40px_rgba(21,110,96,0.12)] sm:p-7 min-h-[140px]",
                                CARD_WIDTH_CLASSES
                            )}
                        >
                            <div className="pointer-events-none absolute inset-0 rounded-[1.5rem] bg-[radial-gradient(120%_80%_at_50%_0%,rgba(255,255,255,0.7),rgba(255,255,255,0)_50%)]" />

                            <div className="relative z-10 flex w-full flex-col items-start text-left">
                                {/* Pillbox label */}
                                <div className="mb-4 inline-flex w-fit items-center rounded-full border border-[#66ccb9]/40 bg-white/60 px-2.5 py-1">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[#34D399]" />
                                    <span className="ml-2 font-jetbrains text-[9px] uppercase tracking-[0.14em] text-[#156e60]/90">
                                        {point.label}
                                    </span>
                                </div>

                                {/* Headline-style pain point */}
                                <h3 className="font-outfit text-[22px] font-semibold leading-tight text-ink sm:text-[24px]">
                                    {point.text}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
