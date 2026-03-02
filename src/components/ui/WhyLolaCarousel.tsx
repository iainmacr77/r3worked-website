"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
  type TransitionEvent,
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

const AUTOPLAY_MS = 4400;
const AUTOPLAY_RESUME_DELAY_MS = 1800;
const TOTAL_SLIDES = PAIN_SLIDES.length;

export function WhyLolaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAutoplayActive, setIsAutoplayActive] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isInstantJump, setIsInstantJump] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [slideOffsets, setSlideOffsets] = useState<number[]>([]);
  const resumeTimeoutRef = useRef<number | null>(null);
  const hoverRef = useRef(false);
  const isDraggingRef = useRef(false);
  const pointerIdRef = useRef<number | null>(null);
  const dragStartXRef = useRef(0);
  const dragOffsetRef = useRef(0);
  const trackRef = useRef<HTMLUListElement | null>(null);
  const slideRefs = useRef<Array<HTMLLIElement | null>>([]);
  const loopedSlides = useMemo(
    () => [PAIN_SLIDES[TOTAL_SLIDES - 1], ...PAIN_SLIDES, PAIN_SLIDES[0]],
    []
  );
  const activeIndex = useMemo(
    () => ((currentIndex - 1 + TOTAL_SLIDES) % TOTAL_SLIDES),
    [currentIndex]
  );

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion || !isAutoplayActive) return;
    const intervalId = window.setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(intervalId);
  }, [isAutoplayActive, prefersReducedMotion]);

  const liveLabel = useMemo(() => {
    const active = PAIN_SLIDES[activeIndex];
    return `${active.signal}. ${active.headline}`;
  }, [activeIndex]);

  useEffect(() => {
    if (!isInstantJump) return;
    const raf = window.requestAnimationFrame(() => setIsInstantJump(false));
    return () => window.cancelAnimationFrame(raf);
  }, [isInstantJump]);

  useEffect(() => {
    hoverRef.current = isHovered;
  }, [isHovered]);

  useEffect(() => {
    isDraggingRef.current = isDragging;
  }, [isDragging]);

  useEffect(
    () => () => {
      if (resumeTimeoutRef.current !== null) {
        window.clearTimeout(resumeTimeoutRef.current);
      }
    },
    []
  );

  const goTo = (index: number) => {
    setCurrentIndex((index + TOTAL_SLIDES) % TOTAL_SLIDES + 1);
  };

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => prev - 1);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const clearResumeTimeout = useCallback(() => {
    if (resumeTimeoutRef.current !== null) {
      window.clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  }, []);

  const scheduleResumeAutoplay = useCallback(() => {
    clearResumeTimeout();
    resumeTimeoutRef.current = window.setTimeout(() => {
      if (!hoverRef.current && !isDraggingRef.current) {
        setIsAutoplayActive(true);
      }
    }, AUTOPLAY_RESUME_DELAY_MS);
  }, [clearResumeTimeout]);

  const pauseAutoplayImmediately = useCallback(() => {
    clearResumeTimeout();
    setIsAutoplayActive(false);
  }, [clearResumeTimeout]);

  const handleViewportMouseEnter = () => {
    setIsHovered(true);
    pauseAutoplayImmediately();
  };

  const handleViewportMouseLeave = () => {
    setIsHovered(false);
    if (!isDraggingRef.current) {
      scheduleResumeAutoplay();
    }
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    pointerIdRef.current = event.pointerId;
    dragStartXRef.current = event.clientX;
    dragOffsetRef.current = 0;
    setDragOffset(0);
    setIsDragging(true);
    pauseAutoplayImmediately();
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!isDraggingRef.current || pointerIdRef.current !== event.pointerId) return;

    const nextOffset = event.clientX - dragStartXRef.current;
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
        Math.abs((slideOffsets[currentIndex + 1] ?? 0) - (slideOffsets[currentIndex] ?? 0)) ||
        Math.abs((slideOffsets[currentIndex] ?? 0) - (slideOffsets[currentIndex - 1] ?? 0)) ||
        240;
      const dragThreshold = stepSize * 0.18;

      if (dragDistance <= -dragThreshold) {
        goNext();
      } else if (dragDistance >= dragThreshold) {
        goPrev();
      }

      scheduleResumeAutoplay();
    },
    [currentIndex, goNext, goPrev, scheduleResumeAutoplay, slideOffsets]
  );

  const handleTrackTransitionEnd = (event: TransitionEvent<HTMLUListElement>) => {
    if (event.target !== event.currentTarget) return;

    if (currentIndex <= 0) {
      setIsInstantJump(true);
      setCurrentIndex(TOTAL_SLIDES);
      return;
    }

    if (currentIndex >= TOTAL_SLIDES + 1) {
      setIsInstantJump(true);
      setCurrentIndex(1);
    }
  };

  const measureOffsets = useCallback(() => {
    setSlideOffsets(slideRefs.current.map((slide) => slide?.offsetLeft ?? 0));
  }, []);

  useEffect(() => {
    measureOffsets();

    const onResize = () => measureOffsets();
    window.addEventListener("resize", onResize);

    if (typeof ResizeObserver === "undefined") {
      return () => window.removeEventListener("resize", onResize);
    }

    const resizeObserver = new ResizeObserver(() => {
      measureOffsets();
    });

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
  }, [measureOffsets]);

  const translateX = slideOffsets[currentIndex] ?? 0;
  const trackTranslate = -translateX + dragOffset;

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Operational pain points"
      tabIndex={0}
      onFocusCapture={pauseAutoplayImmediately}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          if (!hoverRef.current && !isDraggingRef.current) {
            scheduleResumeAutoplay();
          }
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          goPrev();
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          goNext();
        }
      }}
      className="w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-coral/60"
    >
      <div
        className={cn(
          "w-full overflow-hidden touch-pan-y select-none",
          isDragging ? "cursor-grabbing" : "cursor-grab"
        )}
        onMouseEnter={handleViewportMouseEnter}
        onMouseLeave={handleViewportMouseLeave}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishPointerDrag}
        onPointerCancel={finishPointerDrag}
      >
        <ul
          ref={trackRef}
          onTransitionEnd={handleTrackTransitionEnd}
          className={cn(
            "flex gap-4 motion-reduce:transition-none md:gap-5",
            isInstantJump || isDragging
              ? "transition-none"
              : "transition-transform duration-700 ease-out"
          )}
          style={{ transform: `translateX(${trackTranslate}px)` }}
        >
          {loopedSlides.map((slide, index) => (
            <li
              key={`${slide.signal}-${index}`}
              ref={(element) => {
                slideRefs.current[index] = element;
              }}
              className="min-w-0 shrink-0 basis-[90%] md:basis-[62%] lg:basis-[40%]"
            >
              <article
                className={cn(
                  "relative h-[340px] overflow-hidden rounded-[2rem] border border-white/12 bg-[#0B0E13] p-6 ring-1 ring-white/6 sm:h-[390px] sm:p-7 lg:h-[430px]",
                  currentIndex === index ? "opacity-100" : "opacity-90"
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
                <div className="relative z-10">
                  <div className="mb-5 inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-mint" />
                    <span className="ml-2 font-jetbrains text-[10px] uppercase tracking-[0.16em] text-peach/95">
                      {slide.signal}
                    </span>
                  </div>
                  <h3 className="max-w-[22ch] font-outfit text-2xl font-semibold leading-tight text-white sm:text-3xl">
                    {slide.headline}
                  </h3>
                  <p className="mt-3 max-w-[48ch] font-outfit text-sm leading-relaxed text-white/80 sm:text-base">
                    {slide.body}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex justify-center sm:mt-7">
        <div className="inline-flex items-center gap-3">
          <button
            type="button"
            onClick={goPrev}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/25 bg-white/70 text-ink transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-coral/60"
            aria-label="Previous slide"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center justify-center gap-2" aria-label="Slide pagination">
            {PAIN_SLIDES.map((slide, index) => (
              <button
                key={slide.signal}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={activeIndex === index}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-300",
                  activeIndex === index ? "w-6 bg-coral" : "w-2.5 bg-charcoal/35 hover:bg-charcoal/55"
                )}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={goNext}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/25 bg-white/70 text-ink transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-coral/60"
            aria-label="Next slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <p className="sr-only" aria-live="polite">
        {liveLabel}
      </p>
    </div>
  );
}
