"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { BrandMark } from "./Logo";
import { ScanLine, AudioWaveform } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function BlueprintSchematicOverlay() {
    type Node = { x: number; y: number; r: number };
    type Connection = {
        from: Node;
        to: Node;
        color: string;
        arrowAtFrom?: boolean;
        arrowAtTo?: boolean;
    };

    const computeAngle = (x1: number, y1: number, x2: number, y2: number) =>
        (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;

    const trimLineToRadius = (
        x1: number,
        y1: number,
        x2: number,
        y2: number,
        rStart: number,
        rEnd: number
    ) => {
        const dx = x2 - x1;
        const dy = y2 - y1;
        const len = Math.hypot(dx, dy) || 1;
        const ux = dx / len;
        const uy = dy / len;

        return {
            sx: x1 + ux * rStart,
            sy: y1 + uy * rStart,
            ex: x2 - ux * rEnd,
            ey: y2 - uy * rEnd,
            ux,
            uy
        };
    };

    const renderArrowhead = (x: number, y: number, angle: number, size: number) => {
        const rad = (angle * Math.PI) / 180;
        const ux = Math.cos(rad);
        const uy = Math.sin(rad);
        const baseX = x - ux * size;
        const baseY = y - uy * size;
        const halfWidth = size * 0.5;
        const px = -uy * halfWidth;
        const py = ux * halfWidth;

        return `M ${x.toFixed(2)} ${y.toFixed(2)} L ${(baseX + px).toFixed(2)} ${(baseY + py).toFixed(2)} L ${(baseX - px).toFixed(2)} ${(baseY - py).toFixed(2)} Z`;
    };

    const nodes = {
        guest: { x: 94, y: 128, r: 43 },
        lola: { x: 258, y: 210, r: 49 },
        booking: { x: 429, y: 121, r: 43 },
        direct: { x: 430, y: 302, r: 39 },
        suppliers: { x: 100, y: 302, r: 39 }
    } satisfies Record<string, Node>;

    const connections: Connection[] = [
        { from: nodes.guest, to: nodes.lola, color: "rgba(30,30,46,0.58)", arrowAtFrom: true, arrowAtTo: true },
        { from: nodes.lola, to: nodes.booking, color: "rgba(255,107,107,0.92)", arrowAtFrom: true, arrowAtTo: true },
        { from: nodes.suppliers, to: nodes.direct, color: "rgba(30,30,46,0.56)", arrowAtTo: true },
        { from: nodes.lola, to: nodes.direct, color: "rgba(30,30,46,0.58)", arrowAtTo: true }
    ];

    const lineStroke = 2.15;
    const arrowSize = 10.8;
    const arrowGap = 2;

    return (
        <div className="pointer-events-none relative mx-auto aspect-[11/10] w-full max-w-[580px] overflow-visible">
            <svg
                viewBox="-56 -20 640 520"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 h-full w-full overflow-visible"
                preserveAspectRatio="xMidYMid meet"
                overflow="visible"
                style={{ overflow: "visible" }}
                aria-hidden
            >
                {/* Guest node */}
                <circle cx="94" cy="128" r="42" fill="none" stroke="rgba(30,30,46,0.46)" strokeWidth="1.2" />
                <rect x="79" y="112" width="30" height="34" rx="8" fill="none" stroke="rgba(30,30,46,0.48)" strokeWidth="1.2" />
                <rect x="84" y="118" width="20" height="20" rx="4" fill="none" stroke="rgba(30,30,46,0.42)" strokeWidth="1" />
                <path d="M72 150c7 9 11 10 22 10" fill="none" stroke="rgba(30,30,46,0.44)" strokeWidth="1.2" />
                <text x="50" y="184" fontSize="11" fill="rgba(30,30,46,0.66)" letterSpacing="0.08em">GUEST</text>
                <text x="50" y="198" fontSize="10" fill="rgba(30,30,46,0.58)" letterSpacing="0.05em">PHONE + WHATSAPP</text>

                {/* Suppliers node */}
                <circle cx="100" cy="302" r="38" fill="none" stroke="rgba(30,30,46,0.46)" strokeWidth="1.2" />
                <rect x="82" y="286" width="36" height="22" rx="3.5" fill="none" stroke="rgba(30,30,46,0.48)" strokeWidth="1.2" />
                <path d="M82 296h36M90 286l10 10 10-10" fill="none" stroke="rgba(30,30,46,0.42)" strokeWidth="1" />
                <text x="50" y="352" fontSize="11" fill="rgba(30,30,46,0.66)" letterSpacing="0.08em">SUPPLIERS</text>
                <text x="50" y="366" fontSize="9.5" fill="rgba(30,30,46,0.56)" letterSpacing="0.04em">DELIVERIES</text>

                {/* Lola node */}
                <g className="blueprint-lola-pulse-soft">
                    <circle cx="258" cy="210" r="55" fill="none" stroke="rgba(255,107,107,0.38)" strokeWidth="1.25" />
                </g>
                <g className="blueprint-lola-pulse">
                    <circle cx="258" cy="210" r="47" fill="none" stroke="rgba(255,107,107,0.69)" strokeWidth="1.55" />
                </g>
                <circle cx="258" cy="210" r="36" fill="rgba(255,107,107,0.22)" stroke="rgba(255,107,107,0.96)" strokeWidth="1.6" />
                <circle cx="258" cy="210" r="41" fill="none" stroke="rgba(255,107,107,0.56)" strokeWidth="1.25" style={{ filter: "blur(1.8px)" }} />
                <foreignObject x="224" y="176" width="68" height="68">
                    <div className="flex h-full w-full items-center justify-center">
                        <BrandMark className="h-10 w-10" />
                    </div>
                </foreignObject>
                <text x="224" y="272" fontSize="11" fill="rgba(255,107,107,0.9)" letterSpacing="0.09em">LOLA NUMBER</text>

                {/* Booking system node */}
                <rect x="390" y="92" width="78" height="58" rx="10" fill="none" stroke="rgba(30,30,46,0.48)" strokeWidth="1.2" />
                <path d="M402 106h54M402 120h54M402 134h54M416 92v58M442 92v58" fill="none" stroke="rgba(30,30,46,0.4)" strokeWidth="1" />
                <text x="386" y="172" fontSize="11" fill="rgba(30,30,46,0.66)" letterSpacing="0.08em">BOOKING SYSTEM</text>
                <rect x="448" y="78" width="34" height="18" rx="9" fill="rgba(255,107,107,0.14)" stroke="rgba(255,107,107,0.78)" strokeWidth="1" />
                <text x="456" y="90.5" fontSize="9" fill="rgba(255,107,107,0.95)" letterSpacing="0.08em">API</text>

                {/* Restaurant direct line node */}
                <circle cx="430" cy="302" r="38" fill="none" stroke="rgba(30,30,46,0.46)" strokeWidth="1.2" />
                <path d="M417 298c6 8 16 9 25 0M414 292c2-10 6-15 16-15s14 5 16 15" fill="none" stroke="rgba(30,30,46,0.48)" strokeWidth="1.2" />
                <rect x="422" y="301" width="16" height="10" rx="3" fill="none" stroke="rgba(30,30,46,0.48)" strokeWidth="1.1" />
                <text x="368" y="352" fontSize="11" fill="rgba(30,30,46,0.66)" letterSpacing="0.08em">DIRECT LINE</text>

                {/* Deterministic straight connectors with trimmed ends and standalone arrowheads */}
                {connections.map((connection, index) => {
                    const base = trimLineToRadius(
                        connection.from.x,
                        connection.from.y,
                        connection.to.x,
                        connection.to.y,
                        connection.from.r,
                        connection.to.r
                    );

                    const startInset = connection.arrowAtFrom ? arrowSize + arrowGap : 0;
                    const endInset = connection.arrowAtTo ? arrowSize + arrowGap : 0;

                    const lineStartX = base.sx + base.ux * startInset;
                    const lineStartY = base.sy + base.uy * startInset;
                    const lineEndX = base.ex - base.ux * endInset;
                    const lineEndY = base.ey - base.uy * endInset;

                    const forwardAngle = computeAngle(base.sx, base.sy, base.ex, base.ey);
                    const reverseAngle = computeAngle(base.ex, base.ey, base.sx, base.sy);

                    return (
                        <g key={`connector-${index}`}>
                            <path
                                d={`M ${lineStartX.toFixed(2)} ${lineStartY.toFixed(2)} L ${lineEndX.toFixed(2)} ${lineEndY.toFixed(2)}`}
                                fill="none"
                                stroke={connection.color}
                                strokeWidth={lineStroke}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            {connection.arrowAtFrom ? (
                                <path d={renderArrowhead(base.sx, base.sy, reverseAngle, arrowSize)} fill={connection.color} />
                            ) : null}
                            {connection.arrowAtTo ? (
                                <path d={renderArrowhead(base.ex, base.ey, forwardAngle, arrowSize)} fill={connection.color} />
                            ) : null}
                        </g>
                    );
                })}
            </svg>

            <style jsx>{`
                .blueprint-lola-pulse {
                    transform-box: fill-box;
                    transform-origin: center;
                    animation: blueprintPulse 2.8s ease-out infinite;
                }
                .blueprint-lola-pulse-soft {
                    transform-box: fill-box;
                    transform-origin: center;
                    animation: blueprintPulseSoft 3.6s ease-out infinite;
                }

                @keyframes blueprintPulse {
                    0% {
                        opacity: 0.34;
                        transform: scale(1);
                    }
                    100% {
                        opacity: 0.08;
                        transform: scale(1.08);
                    }
                }
                @keyframes blueprintPulseSoft {
                    0% {
                        opacity: 0.24;
                        transform: scale(1);
                    }
                    100% {
                        opacity: 0.05;
                        transform: scale(1.1);
                    }
                }
            `}</style>
        </div>
    );
}

const FRAMEWORK_STEPS = [
    {
        id: 1,
        title: "Lola Setup",
        subheadline: "Route calls into Lola. Keep your direct line. Start booking instantly.",
        body: "We provision a dedicated Lola number for your restaurant — designed for guests. Your existing line stays live for suppliers and direct business calls, and it can receive forwarded calls from Lola when you want a human to take over.",
        bullets: [
            "One number guests actually use: publish the Lola number everywhere (Google, website, Instagram, menus).",
            "Call + WhatsApp-ready: guests can reach you via standard calls or WhatsApp calls — essential for travellers.",
            "Connects to your booking system: Lola plugs into your booking API to see availability, table options, rules, and guest details.",
            "Learns your house rules: hours, menus, corkage, kids, seating areas, dress code, policies — plus booking constraints.",
            "Routing you control: if a guest insists on speaking to the restaurant, Lola can forward immediately.",
        ],
        closing: "In under a day, your calls stop interrupting service — and start becoming clean, logged bookings.",
        visual: () => <BlueprintSchematicOverlay />
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
        id: 4,
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
                {FRAMEWORK_STEPS.map((step, index) => {
                    const isSetup = step.id === 1;
                    const cardBackgroundColor =
                        step.id === 3
                            ? "var(--color-white)"
                            : step.id === 4
                                ? "var(--color-peach)"
                                : index % 2 === 0
                                    ? "var(--color-peach)"
                                    : "var(--color-white)";
                    return (
                    <div
                        key={step.id}
                        className={cn(
                            "framework-card sticky top-0 flex w-full justify-center p-6 md:p-12 lg:p-16",
                            isSetup
                                ? "min-h-[calc(100svh-76px)] items-start pt-24 md:pt-28"
                                : "h-[100dvh] items-center"
                        )}
                        style={{
                            backgroundColor: cardBackgroundColor,
                            zIndex: index
                        }}
                    >
                        <div
                            className={cn(
                                "grid w-full grid-cols-1 gap-8 items-center md:gap-10 lg:gap-12",
                                isSetup
                                    ? "max-w-7xl lg:grid-cols-12"
                                    : "max-w-6xl md:grid-cols-2"
                            )}
                        >
                            <div
                                className={cn(
                                    "order-2 flex justify-center py-8 md:order-1 md:py-10",
                                    isSetup && "w-full justify-center lg:col-span-5 lg:justify-center lg:pl-6"
                                )}
                            >
                                <div className={cn(isSetup && "w-full max-w-[580px] opacity-90 sm:opacity-85")}>
                                    <step.visual />
                                </div>
                            </div>
                            <div className={cn("order-1 flex flex-col items-start gap-6 md:order-2", isSetup && "lg:col-span-7 md:gap-6")}>
                                <span className="text-coral font-jetbrains font-bold tracking-widest text-sm uppercase">Phase 0{step.id}</span>
                                <h2 className="text-5xl md:text-7xl font-playfair italic text-ink">{step.title}</h2>
                                {"subheadline" in step ? (
                                    <>
                                        <p className="max-w-[30ch] font-outfit text-2xl leading-snug text-charcoal md:text-[2rem]">
                                            {step.subheadline}
                                        </p>
                                        <p className="max-w-[68ch] font-outfit text-base leading-relaxed text-charcoal md:text-lg">
                                            {step.body}
                                        </p>
                                        <ul className="max-w-[68ch] space-y-2.5 font-outfit text-charcoal">
                                            <li className="text-base leading-relaxed md:text-lg">
                                                <span className="font-medium text-coral">Lola number</span>: One number guests actually use: publish the Lola number everywhere (Google, website, Instagram, menus).
                                            </li>
                                            <li className="text-base leading-relaxed md:text-lg">
                                                <span className="font-medium text-coral">WhatsApp calls</span>: Call + WhatsApp-ready: guests can reach you via standard calls or WhatsApp calls — essential for travellers.
                                            </li>
                                            <li className="text-base leading-relaxed md:text-lg">
                                                Connects to your booking system: Lola plugs into your booking API to see availability, table options, rules, and guest details.
                                            </li>
                                            <li className="text-base leading-relaxed md:text-lg">
                                                Learns your house rules: hours, menus, corkage, kids, seating areas, dress code, policies — plus booking constraints.
                                            </li>
                                            <li className="text-base leading-relaxed md:text-lg">
                                                Routing you control: if a guest insists on speaking to the restaurant, Lola can forward immediately.
                                            </li>
                                        </ul>
                                        <p className="max-w-[68ch] pt-1 font-outfit text-lg leading-relaxed text-ink md:text-2xl">
                                            {step.closing}
                                        </p>
                                    </>
                                ) : (
                                    <p className="text-xl md:text-3xl text-charcoal font-outfit max-w-lg leading-relaxed">
                                        {step.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                    );
                })}
            </div>
        </section>
    );
}
