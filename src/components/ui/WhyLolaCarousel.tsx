"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { BokehBackground } from "@/components/ui/BokehBackground";

type PainSlide = {
  signal: string;
  headline: string;
  body: string;
};

const PAIN_SLIDES: PainSlide[] = [
  {
    signal: "Revenue Leak",
    headline: "Missed calls become missed bookings.",
    body: "Tables sit empty while demand vanishes silently. You only feel it later in the nightly closeout.",
  },
  {
    signal: "Peak Service",
    headline: "Every ringing phone pulls staff off the floor.",
    body: "Hosts leave guests waiting, pace slows, and service quality drops during your busiest windows.",
  },
  {
    signal: "Human Error",
    headline: "Even answered calls still create avoidable mistakes.",
    body: "Wrong times, misspelled names, and table-size mixups create friction before guests even arrive.",
  },
  {
    signal: "Time Drain",
    headline: "FAQ calls consume hours with no upside.",
    body: "Parking, corkage, kids, and dress code questions repeat daily while your team should be focused on service.",
  },
  {
    signal: "Floor Chaos",
    headline: "Changes and late arrivals break flow fast.",
    body: "Amendments, cancellations, and hold requests pile up at once and disrupt table planning in real time.",
  },
  {
    signal: "No Visibility",
    headline: "No call intelligence means no improvement loop.",
    body: "Without tags, patterns, and transcripts, there is nothing to coach, fix, or optimize week over week.",
  },
  {
    signal: "Guest Risk",
    headline: "VIP and dietary notes still get lost in transit.",
    body: "Missed preferences lead to weaker guest experiences and erode trust with your most valuable regulars.",
  },
];

const TOTAL_SLIDES = PAIN_SLIDES.length;

export function WhyLolaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [slideOffsets, setSlideOffsets] = useState<number[]>([]);
  const [viewportWidth, setViewportWidth] = useState(0);
  const [trackWidth, setTrackWidth] = useState(0);
  const isDraggingRef = useRef(false);
  const pointerIdRef = useRef<number | null>(null);
  const dragStartXRef = useRef(0);
  const dragOffsetRef = useRef(0);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLUListElement | null>(null);
  const slideRefs = useRef<Array<HTMLLIElement | null>>([]);

  const liveLabel = useMemo(() => {
    const active = PAIN_SLIDES[Math.min(currentIndex, TOTAL_SLIDES - 1)];
    return `${active.signal}. ${active.headline}`;
  }, [currentIndex]);

  useEffect(() => {
    isDraggingRef.current = isDragging;
  }, [isDragging]);

  const measureLayout = useCallback(() => {
    setSlideOffsets(slideRefs.current.map((slide) => slide?.offsetLeft ?? 0));
    setViewportWidth(viewportRef.current?.clientWidth ?? 0);
    setTrackWidth(trackRef.current?.scrollWidth ?? 0);
  }, []);

  useEffect(() => {
    measureLayout();

    const onResize = () => measureLayout();
    window.addEventListener("resize", onResize);

    if (typeof ResizeObserver === "undefined") {
      return () => window.removeEventListener("resize", onResize);
    }

    const resizeObserver = new ResizeObserver(() => {
      measureLayout();
    });

    if (viewportRef.current) {
      resizeObserver.observe(viewportRef.current);
    }

    if (trackRef.current) {
      resizeObserver.observe(trackRef.current);
    }

    slideRefs.current.forEach((slide) => {
      if (slide) resizeObserver.observe(slide);
    });

    return () => {
      window.removeEventListener("resize", onResize);
      resizeObserver.disconnect();
    };
  }, [measureLayout]);

  const maxTranslate = useMemo(
    () => Math.max(0, trackWidth - viewportWidth),
    [trackWidth, viewportWidth]
  );

  const maxNavigableIndex = useMemo(() => {
    if (slideOffsets.length === 0) return TOTAL_SLIDES - 1;

    for (let index = slideOffsets.length - 1; index >= 0; index -= 1) {
      if (slideOffsets[index] <= maxTranslate + 1) {
        return index;
      }
    }

    return 0;
  }, [maxTranslate, slideOffsets]);

  const activeIndex = Math.min(currentIndex, maxNavigableIndex);
  const baseTranslate = Math.min(slideOffsets[activeIndex] ?? 0, maxTranslate);
  const isAtStart = activeIndex === 0;
  const isAtEnd = activeIndex >= maxNavigableIndex;

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => Math.min(maxNavigableIndex, prev + 1));
  }, [maxNavigableIndex]);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" || (event.pointerType === "pen" && event.button !== 0)) {
      return;
    }

    pointerIdRef.current = event.pointerId;
    dragStartXRef.current = event.clientX;
    dragOffsetRef.current = 0;
    setDragOffset(0);
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || pointerIdRef.current !== event.pointerId) return;

    const rawOffset = event.clientX - dragStartXRef.current;
    const resistingEdge =
      (isAtStart && rawOffset > 0) || (isAtEnd && rawOffset < 0);
    const nextOffset = resistingEdge ? rawOffset * 0.35 : rawOffset;
    dragOffsetRef.current = nextOffset;
    setDragOffset(nextOffset);
  };

  const finishPointerDrag = useCallback(
    (event: ReactPointerEvent<HTMLDivElement>) => {
      if (!isDraggingRef.current || pointerIdRef.current !== event.pointerId) return;

      const dragDistance = dragOffsetRef.current;
      pointerIdRef.current = null;
      dragOffsetRef.current = 0;
      setIsDragging(false);
      setDragOffset(0);

      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }

      const stepSize =
        Math.abs((slideOffsets[activeIndex + 1] ?? 0) - (slideOffsets[activeIndex] ?? 0)) ||
        Math.abs((slideOffsets[activeIndex] ?? 0) - (slideOffsets[activeIndex - 1] ?? 0)) ||
        240;
      const dragThreshold = Math.min(Math.max(stepSize * 0.22, 44), 96);

      if (dragDistance <= -dragThreshold && !isAtEnd) {
        goNext();
      } else if (dragDistance >= dragThreshold && !isAtStart) {
        goPrev();
      }
    },
    [activeIndex, goNext, goPrev, isAtEnd, isAtStart, slideOffsets]
  );

  const trackTranslate = -baseTranslate + dragOffset;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Operational pain points"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          goPrev();
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          goNext();
        }
        if (event.key === "Home") {
          event.preventDefault();
          setCurrentIndex(0);
        }
        if (event.key === "End") {
          event.preventDefault();
          setCurrentIndex(maxNavigableIndex);
        }
      }}
      className="w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-coral/60"
    >
      <div className="relative">
        <div
          ref={viewportRef}
          className={cn(
            "w-full overflow-hidden touch-pan-y select-none",
            isDragging ? "cursor-grabbing" : "cursor-default"
          )}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={finishPointerDrag}
          onPointerCancel={finishPointerDrag}
        >
          <ul
            ref={trackRef}
            className={cn(
              "flex gap-4 will-change-transform motion-reduce:transition-none md:gap-5",
              isDragging
                ? "transition-none"
                : "transition-transform duration-700 ease-[cubic-bezier(0.2,0.8,0.2,1)]"
            )}
            style={{ transform: `translate3d(${trackTranslate}px, 0, 0)` }}
          >
            {PAIN_SLIDES.map((slide, index) => (
              <li
                key={`${slide.signal}-${index}`}
                ref={(element) => {
                  slideRefs.current[index] = element;
                }}
                className="min-w-0 shrink-0 basis-[88%] sm:basis-[76%] md:basis-[58%] lg:basis-[39%]"
              >
                <article
                  className={cn(
                    "relative flex h-[270px] flex-col overflow-hidden rounded-[2rem] border border-white/12 bg-[#0B0E13] p-6 ring-1 ring-white/6 [backface-visibility:hidden] [clip-path:inset(0_round_2rem)] [transform:translateZ(0)] sm:h-[286px] sm:p-7 lg:h-[312px]",
                    activeIndex === index
                      ? "opacity-100"
                      : "opacity-88 lg:opacity-92"
                  )}
                >
                  <BokehBackground variant={(index + TOTAL_SLIDES - 1) % TOTAL_SLIDES} />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-px rounded-[2rem] bg-[radial-gradient(130%_90%_at_50%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0)_58%)]"
                  />
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 rounded-[2rem] border border-white/8"
                  />
                  <div className="relative z-10 flex h-full flex-col items-start">
                    <div className="mb-5 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                      <span className="ml-2 font-jetbrains text-[10px] uppercase tracking-[0.16em] text-peach/95">
                        {slide.signal}
                      </span>
                    </div>
                    <h3 className="max-w-[22ch] font-outfit text-[1.6rem] font-semibold leading-tight text-white sm:text-[1.85rem]">
                      {slide.headline}
                    </h3>
                    <p className="mt-3 max-w-[46ch] font-outfit text-sm leading-relaxed text-white/80 sm:text-[0.98rem]">
                      {slide.body}
                    </p>
                  </div>
                </article>
              </li>
            ))}
          </ul>

        </div>

        <div className="pointer-events-none absolute inset-0">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Previous card"
            aria-hidden={isAtStart}
            tabIndex={isAtStart ? -1 : 0}
            className={cn(
              "pointer-events-auto absolute left-0 top-1/2 inline-flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-[#12181F] shadow-[0_14px_30px_rgba(8,12,18,0.18),0_2px_10px_rgba(8,12,18,0.08)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral/60 sm:h-12 sm:w-12",
              isAtStart
                ? "pointer-events-none opacity-0"
                : "border-[#E5DBCF] bg-[#F4EEE5]/96 hover:bg-[#FBF7F1] hover:shadow-[0_18px_34px_rgba(8,12,18,0.22),0_4px_12px_rgba(8,12,18,0.08)]"
            )}
          >
            <ChevronLeft size={18} strokeWidth={2.1} />
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next card"
            disabled={isAtEnd}
            className={cn(
              "pointer-events-auto absolute right-0 top-1/2 inline-flex h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border text-[#12181F] shadow-[0_14px_30px_rgba(8,12,18,0.18),0_2px_10px_rgba(8,12,18,0.08)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral/60 sm:h-12 sm:w-12",
              isAtEnd
                ? "cursor-not-allowed border-[#E9E0D5] bg-[#EFE7DD]/88 text-[#12181F]/38 shadow-[0_8px_20px_rgba(8,12,18,0.10)]"
                : "border-[#E5DBCF] bg-[#F4EEE5]/96 hover:bg-[#FBF7F1] hover:shadow-[0_18px_34px_rgba(8,12,18,0.22),0_4px_12px_rgba(8,12,18,0.08)]"
            )}
          >
            <ChevronRight size={18} strokeWidth={2.1} />
          </button>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {liveLabel}
      </p>
    </div>
  );
}
