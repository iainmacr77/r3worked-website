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

export type PainSlide = {
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
];

function MedicalGlowBackground({ variant }: { variant: number }) {
  const glows = [
    {
      base: "linear-gradient(150deg, rgba(6,17,24,0.98) 0%, rgba(10,24,31,0.94) 48%, rgba(6,14,20,0.98) 100%)",
      orbA: "rgba(140, 232, 216, 0.12)",
      orbB: "rgba(86, 203, 181, 0.09)",
      orbC: "rgba(214, 255, 245, 0.06)",
      aPos: "16% 22%",
      bPos: "86% 18%",
      cPos: "54% 84%",
    },
    {
      base: "linear-gradient(150deg, rgba(5,15,21,0.992) 0%, rgba(8,20,27,0.968) 46%, rgba(5,12,18,0.992) 100%)",
      orbA: "rgba(137, 219, 201, 0.075)",
      orbB: "rgba(78, 197, 177, 0.055)",
      orbC: "rgba(109, 214, 190, 0.03)",
      aPos: "28% 14%",
      bPos: "78% 30%",
      cPos: "22% 82%",
    },
    {
      base: "linear-gradient(149deg, rgba(4,14,20,0.992) 0%, rgba(8,19,26,0.966) 42%, rgba(5,12,17,0.992) 100%)",
      orbA: "rgba(148, 233, 222, 0.07)",
      orbB: "rgba(109, 214, 190, 0.05)",
      orbC: "rgba(80, 196, 178, 0.028)",
      aPos: "18% 70%",
      bPos: "80% 16%",
      cPos: "60% 54%",
    },
    {
      base: "linear-gradient(151deg, rgba(5,15,21,0.992) 0%, rgba(8,20,27,0.968) 45%, rgba(5,13,18,0.992) 100%)",
      orbA: "rgba(126, 226, 208, 0.075)",
      orbB: "rgba(92, 208, 187, 0.055)",
      orbC: "rgba(170, 241, 230, 0.03)",
      aPos: "82% 22%",
      bPos: "20% 26%",
      cPos: "72% 82%",
    },
  ] as const;

  const current = glows[variant % glows.length];

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0" style={{ backgroundImage: current.base }} />
      <div
        className="absolute h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[72px] sm:h-72 sm:w-72 sm:blur-[92px]"
        style={{ left: current.aPos.split(" ")[0], top: current.aPos.split(" ")[1], backgroundColor: current.orbA }}
      />
      <div
        className="absolute h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px] sm:h-80 sm:w-80 sm:blur-[104px]"
        style={{ left: current.bPos.split(" ")[0], top: current.bPos.split(" ")[1], backgroundColor: current.orbB }}
      />
      <div
        className="absolute h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[76px] sm:h-[18rem] sm:w-[18rem] sm:blur-[96px]"
        style={{ left: current.cPos.split(" ")[0], top: current.cPos.split(" ")[1], backgroundColor: current.orbC }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,14,0.12),rgba(3,10,14,0.44))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_22%,rgba(0,0,0,0.62)_100%)]" />
      <div className="absolute inset-0 opacity-[0.12] mix-blend-soft-light [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:26px_26px]" />
    </div>
  );
}

type WhyLolaCarouselProps = {
  slides?: PainSlide[];
  ariaLabel?: string;
  variant?: "restaurant" | "medical";
};

export function WhyLolaCarousel({
  slides = PAIN_SLIDES,
  ariaLabel = "Operational pain points",
  variant = "restaurant",
}: WhyLolaCarouselProps) {
  const totalSlides = slides.length;
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
    const active = slides[Math.min(currentIndex, totalSlides - 1)];
    return `${active.signal}. ${active.headline}`;
  }, [currentIndex, slides, totalSlides]);

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
    if (slideOffsets.length === 0) return totalSlides - 1;

    for (let index = slideOffsets.length - 1; index >= 0; index -= 1) {
      if (slideOffsets[index] <= maxTranslate + 1) {
        return index;
      }
    }

    return 0;
  }, [maxTranslate, slideOffsets, totalSlides]);

  const activeIndex = Math.min(currentIndex, maxNavigableIndex);
  const isAtStart = activeIndex === 0;
  const isAtEnd = activeIndex >= maxNavigableIndex;
  const baseTranslate = isAtEnd
    ? maxTranslate
    : Math.min(slideOffsets[activeIndex] ?? 0, maxTranslate);

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
  const isMedical = variant === "medical";

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
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
      className={cn(
        "w-full focus:outline-none focus-visible:ring-2",
        isMedical ? "focus-visible:ring-[#74d8c5]/55" : "focus-visible:ring-coral/60"
      )}
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
            {slides.map((slide, index) => (
              <li
                key={`${slide.signal}-${index}`}
                ref={(element) => {
                  slideRefs.current[index] = element;
                }}
                className="min-w-0 shrink-0 basis-[88%] sm:basis-[76%] md:basis-[58%] lg:basis-[39%]"
              >
                <article
                  className={cn(
                    "relative flex h-[270px] flex-col overflow-hidden rounded-[2rem] border p-6 [backface-visibility:hidden] [clip-path:inset(0_round_2rem)] [transform:translateZ(0)] sm:h-[286px] sm:p-7 lg:h-[312px]",
                    isMedical
                      ? "border-white/12 bg-[rgba(7,18,24,0.72)] ring-1 ring-white/8 shadow-[0_24px_60px_rgba(4,18,24,0.42),inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-2xl"
                      : "border-white/12 bg-[#0B0E13] ring-1 ring-white/6",
                    activeIndex === index
                      ? "opacity-100"
                      : "opacity-88 lg:opacity-92"
                  )}
                >
                  {isMedical ? (
                    <MedicalGlowBackground variant={index} />
                  ) : (
                    <BokehBackground variant={(index + totalSlides - 1) % totalSlides} />
                  )}
                  <div
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute -inset-px rounded-[2rem]",
                      isMedical
                        ? "bg-[radial-gradient(130%_90%_at_50%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0)_54%)]"
                        : "bg-[radial-gradient(130%_90%_at_50%_0%,rgba(255,255,255,0.12),rgba(255,255,255,0)_58%)]"
                    )}
                  />
                  <div
                    aria-hidden
                    className={cn(
                      "pointer-events-none absolute inset-0 rounded-[2rem] border",
                      isMedical ? "border-white/10" : "border-white/8"
                    )}
                  />
                  {isMedical ? (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-[1px] rounded-[calc(2rem-1px)] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02)_28%,rgba(255,255,255,0.015)_100%)]"
                    />
                  ) : null}
                  <div className="relative z-10 flex h-full flex-col items-start">
                    <div
                      className={cn(
                        "mb-5 inline-flex w-fit items-center rounded-full border px-3 py-1.5",
                        isMedical
                          ? "border-white/10 bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md"
                          : "border-white/20 bg-white/10"
                      )}
                    >
                      <span
                        className={cn(
                          "h-1.5 w-1.5 rounded-full",
                          isMedical ? "bg-mint" : "bg-mint"
                        )}
                      />
                      <span
                        className={cn(
                          "ml-2 font-jetbrains text-[10px] uppercase tracking-[0.16em]",
                          isMedical ? "text-[#f3ece3]" : "text-peach/95"
                        )}
                      >
                        {slide.signal}
                      </span>
                    </div>
                    <h3
                      className={cn(
                        "max-w-[22ch] font-outfit text-[1.6rem] font-semibold leading-tight sm:text-[1.85rem]",
                        isMedical ? "text-white" : "text-white"
                      )}
                    >
                      {slide.headline}
                    </h3>
                    <p
                      className={cn(
                        "mt-3 max-w-[46ch] font-outfit text-sm leading-relaxed sm:text-[0.98rem]",
                        isMedical ? "text-[#ebfffb]/76" : "text-white/80"
                      )}
                    >
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
              "pointer-events-auto absolute left-0 top-1/2 inline-flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border shadow-[0_14px_30px_rgba(8,12,18,0.18),0_2px_10px_rgba(8,12,18,0.08)] transition-all duration-300 focus:outline-none focus-visible:ring-2 sm:h-12 sm:w-12",
              isMedical
                ? "text-[#0f2a29] focus-visible:ring-[#74d8c5]/55"
                : "text-[#12181F] focus-visible:ring-coral/60",
              isAtStart
                ? "pointer-events-none opacity-0"
                : isMedical
                  ? "border-[#b9f3e8]/48 bg-[#ecfbf7]/92 hover:bg-[#f5fffc] hover:shadow-[0_18px_34px_rgba(8,28,26,0.22),0_4px_12px_rgba(8,28,26,0.08)]"
                  : "border-[#E5DBCF] bg-[#F4EEE5]/96 hover:bg-[#FBF7F1] hover:shadow-[0_18px_34px_rgba(8,12,18,0.22),0_4px_12px_rgba(8,12,18,0.08)]"
            )}
          >
            <ChevronLeft size={18} strokeWidth={2.1} />
          </button>

          <button
            type="button"
            onClick={goNext}
            aria-label="Next card"
            aria-hidden={isAtEnd}
            tabIndex={isAtEnd ? -1 : 0}
            disabled={isAtEnd}
            className={cn(
              "pointer-events-auto absolute right-0 top-1/2 inline-flex h-11 w-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border shadow-[0_14px_30px_rgba(8,12,18,0.18),0_2px_10px_rgba(8,12,18,0.08)] transition-all duration-300 focus:outline-none focus-visible:ring-2 sm:h-12 sm:w-12",
              isMedical
                ? "text-[#0f2a29] focus-visible:ring-[#74d8c5]/55"
                : "text-[#12181F] focus-visible:ring-coral/60",
              isAtEnd
                ? "pointer-events-none opacity-0"
                : isMedical
                  ? "border-[#b9f3e8]/48 bg-[#ecfbf7]/92 hover:bg-[#f5fffc] hover:shadow-[0_18px_34px_rgba(8,28,26,0.22),0_4px_12px_rgba(8,28,26,0.08)]"
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
