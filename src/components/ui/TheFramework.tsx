"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrandMark } from "./Logo";
import { ScanLine, AudioWaveform } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const FRAMEWORK_STEPS = [
    {
        id: 1,
        title: "Forward Your Lines",
        description: "Route your main restaurant line to Lola with a simple carrier swap. No hardware required.",
        visual: () => (
            <div className="w-48 h-48 rounded-full bg-ink/5 border border-ink/10 flex items-center justify-center relative">
                <div className="absolute inset-0 rounded-full border border-coral animate-ping opacity-20" />
                <BrandMark className="w-24 h-24 text-ink animate-[spin_10s_linear_infinite]" />
            </div>
        )
    },
    {
        id: 2,
        title: "Lola Learns",
        description: "Upload PDFs of your menus, floor plans, and wine lists. Lola instantly vectorizes the knowledge.",
        visual: () => (
            <div className="w-56 h-64 bg-white border border-charcoal/20 rounded-lg shadow-xl relative overflow-hidden flex flex-col justify-between p-4">
                <div className="w-full h-2 bg-charcoal/10 rounded-full mb-4" />
                <div className="w-3/4 h-2 bg-charcoal/10 rounded-full mb-2" />
                <div className="w-5/6 h-2 bg-charcoal/10 rounded-full mb-auto" />

                {/* Laser Scanner */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-coral shadow-[0_0_15px_rgba(255,107,107,0.8)] z-10 animate-[bounce_2s_infinite]" />
                <div className="absolute inset-0 bg-coral/5 z-0" />
                <ScanLine className="absolute bottom-4 right-4 text-charcoal/30" />
            </div>
        )
    },
    {
        id: 3,
        title: "Service Begins",
        description: "Lola handles 100% of incoming triage, routing VIPs to the Maître d', and booking standard reservations autonomously.",
        visual: () => (
            <div className="w-full max-w-[280px] h-32 bg-ink rounded-[2rem] flex items-center justify-center relative overflow-hidden">
                <AudioWaveform className="w-20 h-20 text-mint animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-ink via-transparent to-ink" />
            </div>
        )
    }
];

export function TheFramework() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Select all cards inside the container
        if (!container.current) return;
        const cards = gsap.utils.toArray<HTMLElement>(".framework-card");

        cards.forEach((card, i) => {
            if (i === cards.length - 1) return; // Don't animate the last card out

            ScrollTrigger.create({
                trigger: card,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: false, // Allows the next card to scroll *over* this one
                animation: gsap.to(card, {
                    scale: 0.9,
                    filter: "blur(20px)",
                    opacity: 0.5,
                    ease: "none"
                }),
                scrub: true,
            });
        });
    }, { scope: container });

    return (
        <section id="framework" className="w-full bg-ink relative">
            {/* Sticky Stacking Cards Container */}
            <div ref={container} className="relative w-full">
                {FRAMEWORK_STEPS.map((step, index) => (
                    <div
                        key={step.id}
                        className="framework-card w-full h-[100dvh] sticky top-0 flex items-center justify-center p-6 md:p-16"
                        style={{
                            backgroundColor: index % 2 === 0 ? "var(--color-peach)" : "var(--color-white)",
                            zIndex: index
                        }}
                    >
                        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="order-2 md:order-1 flex justify-center py-12">
                                <step.visual />
                            </div>
                            <div className="order-1 md:order-2 flex flex-col items-start gap-6">
                                <span className="text-coral font-jetbrains font-bold tracking-widest text-sm uppercase">Phase 0{step.id}</span>
                                <h2 className="text-5xl md:text-7xl font-playfair italic text-ink">{step.title}</h2>
                                <p className="text-xl md:text-3xl text-charcoal font-outfit max-w-lg leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
