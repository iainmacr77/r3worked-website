"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { SectionHeading } from "@/components/typography/SectionHeading";

type OverlayCard = {
  title: string;
  body: string;
  badge?: string;
};

function OverlayPanel({
  title,
  subtitle,
  cards,
}: {
  title: string;
  subtitle: string;
  cards: OverlayCard[];
}) {
  return (
    <article className="w-full rounded-[2rem] border border-[#8addcc]/40 bg-white/85 p-6 shadow-[0_20px_44px_rgba(30,30,46,0.1)] md:p-8">
      <p className="font-jetbrains text-[11px] uppercase tracking-[0.14em] text-[#1e8a78]">{title}</p>
      <p className="mt-3 max-w-[62ch] text-charcoal">{subtitle}</p>
      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-[1.35rem] border border-[#83dcca]/45 bg-white p-5 shadow-[0_16px_30px_rgba(30,30,46,0.08)]"
          >
            {card.badge ? (
              <p className="font-jetbrains text-[10px] uppercase tracking-[0.12em] text-[#1e8a78]">
                {card.badge}
              </p>
            ) : null}
            <h3 className="mt-2 font-outfit text-2xl font-semibold text-ink">{card.title}</h3>
            <p className="mt-3 text-charcoal">{card.body}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export function RightSlideOverlayPair({
  heading,
  subheading,
  setupCards,
  operationCards,
}: {
  heading: string;
  subheading: string;
  setupCards: OverlayCard[];
  operationCards: OverlayCard[];
}) {
  const stackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: stackRef,
    offset: ["start start", "end end"],
  });

  // Same core pattern as Restaurants framework stack: sticky full-screen layers with z-index.
  // Medical variant changes the incoming panel motion to horizontal right->left coverage.
  const targetX = useTransform(scrollYProgress, [0.14, 0.56], ["100%", "0%"]);
  const smoothX = useSpring(targetX, { stiffness: 120, damping: 28, mass: 0.85 });

  return (
    <section id="connect" className="section-offset w-full bg-medical-soft-blue px-6 py-20 md:px-16 md:py-24">
      <div className="mx-auto w-full max-w-7xl">
        <SectionHeading
          eyebrow="HOW IT CONNECTS"
          title={heading}
          subtitle={subheading}
          titleClassName="type-h2"
        />
      </div>

      <div ref={stackRef} className="relative mx-auto mt-10 hidden w-full max-w-7xl md:block min-h-[190svh]">
        <div className="sticky top-0 z-10 flex h-[100svh] items-center py-6">
          <OverlayPanel
            title="Lola Setup"
            subtitle="Connection layer and controls are configured first."
            cards={setupCards}
          />
        </div>
        <div className="-mt-[100svh] sticky top-0 z-20 flex h-[100svh] items-center overflow-hidden py-6">
          <motion.div
            style={prefersReducedMotion ? undefined : { x: smoothX }}
            className="w-full"
          >
            <OverlayPanel
              title="Lola Operation"
              subtitle="As demand increases, operations fully cover setup context."
              cards={operationCards}
            />
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-10 grid w-full max-w-7xl grid-cols-1 gap-5 md:hidden">
        <OverlayPanel
          title="Lola Setup"
          subtitle="Connection layer and controls are configured first."
          cards={setupCards}
        />
        <OverlayPanel
          title="Lola Operation"
          subtitle="Operations then take over as the dominant layer."
          cards={operationCards}
        />
      </div>
    </section>
  );
}
