"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const DEFAULT_HEADLINE =
  "Lola answers, understands, confirms — and logs everything.";
const DEFAULT_SUBHEADLINE_PREFIX = "Your voice concierge that ";
const DEFAULT_SUBHEADLINE_HIGHLIGHT = "turns calls into bookings";
const DEFAULT_SUBHEADLINE_SUFFIX = " and everything in between.";
const WORD_STAGGER_MS = 120;
const WORD_TRANSITION_MS = 900;

const NOISE_TEXTURE = encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220' viewBox='0 0 220 220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='220' height='220' filter='url(%23n)' opacity='0.42'/></svg>"
);

function AnimatedWords({
  text,
  isVisible,
  startDelay = 0,
  reducedMotion,
  className,
}: {
  text: string;
  isVisible: boolean;
  startDelay?: number;
  reducedMotion: boolean;
  className?: string;
}) {
  const words = useMemo(() => text.split(" "), [text]);

  return (
    <span className={className}>
      {words.map((word, index) => {
        const delay = startDelay + index * WORD_STAGGER_MS;

        return (
          <span
            key={`${word}-${index}`}
            className={cn(
              "inline-block whitespace-pre transition-[transform,opacity,filter] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[transform,opacity,filter]",
              isVisible || reducedMotion
                ? "translate-x-0 opacity-100 blur-0"
                : "translate-x-5 opacity-0 blur-[6px]"
            )}
            style={{
              transitionDuration: reducedMotion ? "0ms" : `${WORD_TRANSITION_MS}ms`,
              transitionDelay: reducedMotion ? "0ms" : `${delay}ms`,
            }}
          >
            {word}
            {index < words.length - 1 ? "\u00A0" : ""}
          </span>
        );
      })}
    </span>
  );
}

type NarrativeBreakerProps = {
  headline?: string;
  subheadline?: string;
  subheadlinePrefix?: string;
  subheadlineHighlight?: string;
  subheadlineSuffix?: string;
  eyebrowDotClassName?: string;
  subheadlineHighlightClassName?: string;
  ariaLabel?: string;
};

export function NarrativeBreaker({
  headline = DEFAULT_HEADLINE,
  subheadline,
  subheadlinePrefix,
  subheadlineHighlight,
  subheadlineSuffix,
  eyebrowDotClassName = "bg-coral/80",
  subheadlineHighlightClassName = "text-coral",
  ariaLabel = "Narrative transition",
}: NarrativeBreakerProps = {}) {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = () => setReducedMotion(media.matches);
    handleMotionChange();
    media.addEventListener("change", handleMotionChange);
    return () => media.removeEventListener("change", handleMotionChange);
  }, []);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.42, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const headlineWordCount = headline.split(" ").length;
  const subheadlineDelay = headlineWordCount * WORD_STAGGER_MS + 320;

  return (
    <section
      ref={sectionRef}
      aria-label={ariaLabel}
      className="relative w-full overflow-hidden bg-[#070A10] px-6 py-20 md:px-16 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#090D16_0%,#10121C_38%,#0B0D14_100%)]" />
        <div className="absolute -left-16 top-8 h-72 w-72 rounded-full bg-[rgba(255,164,105,0.42)] blur-[120px]" />
        <div className="absolute right-[-8%] top-[18%] h-96 w-96 rounded-full bg-[rgba(255,107,107,0.32)] blur-[148px]" />
        <div className="absolute left-[40%] top-[56%] h-80 w-80 rounded-full bg-[rgba(52,211,153,0.28)] blur-[138px]" />
        <div className="absolute inset-0 bg-black/62" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_26%,rgba(0,0,0,0.72)_100%)]" />
        <div
          className="absolute inset-0 opacity-[0.16] mix-blend-soft-light"
          style={{ backgroundImage: `url("data:image/svg+xml,${NOISE_TEXTURE}")` }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="rounded-[2rem] border border-white/[0.15] bg-white/[0.03] p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_34px_70px_rgba(0,0,0,0.5)] backdrop-blur-sm md:p-10">
          <div
            className="mb-5 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-md"
            aria-hidden
          >
            <span className={cn("h-1.5 w-1.5 shrink-0 rounded-full", eyebrowDotClassName)} />
            <span className="ml-2 font-jetbrains text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f3ece3]">
              WHAT LOLA DOES
            </span>
          </div>
          <h2 className="max-w-[26ch] font-outfit text-3xl font-semibold leading-tight text-white md:text-5xl">
            <AnimatedWords
              text={headline}
              isVisible={isVisible}
              reducedMotion={reducedMotion}
            />
          </h2>
          <p className="mt-6 max-w-[56ch] font-outfit text-lg leading-relaxed text-white/88 md:text-2xl">
            {subheadline ? (
              <AnimatedWords
                text={subheadline}
                isVisible={isVisible}
                startDelay={subheadlineDelay}
                reducedMotion={reducedMotion}
              />
            ) : subheadlinePrefix || subheadlineHighlight || subheadlineSuffix ? (
              <>
                {subheadlinePrefix ? (
                  <AnimatedWords
                    text={subheadlinePrefix}
                    isVisible={isVisible}
                    startDelay={subheadlineDelay}
                    reducedMotion={reducedMotion}
                  />
                ) : null}
                {subheadlineHighlight ? (
                  <span className={cn("font-medium", subheadlineHighlightClassName)}>
                    <AnimatedWords
                      text={subheadlineHighlight}
                      isVisible={isVisible}
                      startDelay={
                        subheadlineDelay +
                        (subheadlinePrefix?.split(" ").length ?? 0) * WORD_STAGGER_MS
                      }
                      reducedMotion={reducedMotion}
                    />
                  </span>
                ) : null}
                {subheadlineSuffix ? (
                  <AnimatedWords
                    text={subheadlineSuffix}
                    isVisible={isVisible}
                    startDelay={
                      subheadlineDelay +
                      ((subheadlinePrefix?.split(" ").length ?? 0) +
                        (subheadlineHighlight?.split(" ").length ?? 0)) *
                        WORD_STAGGER_MS
                    }
                    reducedMotion={reducedMotion}
                  />
                ) : null}
              </>
            ) : (
              <>
                <AnimatedWords
                  text={DEFAULT_SUBHEADLINE_PREFIX}
                  isVisible={isVisible}
                  startDelay={subheadlineDelay}
                  reducedMotion={reducedMotion}
                />
                <span className="font-medium text-coral">
                  <AnimatedWords
                    text={DEFAULT_SUBHEADLINE_HIGHLIGHT}
                    isVisible={isVisible}
                    startDelay={
                      subheadlineDelay +
                      DEFAULT_SUBHEADLINE_PREFIX.split(" ").length * WORD_STAGGER_MS
                    }
                    reducedMotion={reducedMotion}
                  />
                </span>
                <AnimatedWords
                  text={DEFAULT_SUBHEADLINE_SUFFIX}
                  isVisible={isVisible}
                  startDelay={
                    subheadlineDelay +
                    (DEFAULT_SUBHEADLINE_PREFIX.split(" ").length +
                      DEFAULT_SUBHEADLINE_HIGHLIGHT.split(" ").length) *
                      WORD_STAGGER_MS
                  }
                  reducedMotion={reducedMotion}
                />
              </>
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
