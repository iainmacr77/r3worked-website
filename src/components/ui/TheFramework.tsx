"use client";

import { cn } from "@/lib/utils";
import { BrandMark } from "./Logo";
import { SectionHeading } from "@/components/typography/SectionHeading";
import { ControlRoomMetrics } from "./ControlRoomMetrics";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
    AlertTriangle,
    ArrowRight,
    Brain,
    CalendarCheck2,
    Clock3,
    ConciergeBell,
    MessageSquareReply,
    PhoneForwarded,
    Star,
    UserRoundCheck
} from "lucide-react";

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

type FrameworkStepSetup = {
    id: 1;
    title: string;
    subheadline: string;
    body: string;
    bullets: string[];
    closing: string;
    visual: () => JSX.Element;
};

type FrameworkStepBento = {
    id: 2 | 3;
    phaseLabel: "Phase 02/A" | "Phase 02/B";
    title: string;
    subheadline: string;
    body: string;
    bullets: string[];
    ctaPrimaryLabel?: string;
    ctaPrimaryHref?: string;
    ctaSecondaryLabel?: string;
    ctaSecondaryHref?: string;
    visual: () => JSX.Element;
};

type FrameworkStepStandard = {
    id: 4;
    phaseLabel?: "Phase 03";
    title: string;
    description: string;
    visual: () => JSX.Element;
};

type FrameworkStep = FrameworkStepSetup | FrameworkStepBento | FrameworkStepStandard;
const FEATURE_SECTION_TITLE_CLASS = "type-h2";

function GlassCard({
    className,
    disableGlassBase = false,
    children
}: {
    className?: string;
    disableGlassBase?: boolean;
    children: React.ReactNode;
}) {
    return (
        <div
            className={cn(
                "rounded-[1.75rem] border border-charcoal/12 p-5 shadow-[0_20px_48px_rgba(30,30,46,0.08)] md:p-6",
                !disableGlassBase && "bg-white/70 backdrop-blur-xl",
                className
            )}
        >
            {children}
        </div>
    );
}

function DarkGlassCard({
    className,
    children
}: {
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <GlassCard
            disableGlassBase
            className={cn(
                "relative overflow-hidden border-white/14 bg-gradient-to-br from-white/[0.11] via-white/[0.06] to-white/[0.025] shadow-[0_24px_56px_rgba(0,0,0,0.45)] backdrop-blur-xl",
                className
            )}
        >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-white/12 to-transparent" />
            <div className="pointer-events-none absolute -right-10 top-8 h-24 w-24 rounded-full bg-coral/12 blur-3xl" />
            <div className="relative z-10">{children}</div>
        </GlassCard>
    );
}

function OpsRow({
    icon,
    title,
    detail,
    active = false,
    className
}: {
    icon: React.ReactNode;
    title: string;
    detail: string;
    active?: boolean;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "ops-item flex items-start gap-3 rounded-2xl border border-white/12 bg-gradient-to-r from-ink/70 via-ink/55 to-white/[0.03] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-300",
                className
            )}
        >
            <span
                className={cn(
                    "mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl border text-coral transition-all duration-300",
                    active
                        ? "border-coral/52 bg-coral/20 text-coral/95 shadow-[0_0_0_1px_rgba(255,138,122,0.12),0_12px_24px_rgba(0,0,0,0.2)]"
                        : "border-coral/32 bg-coral/14"
                )}
            >
                {icon}
            </span>
            <div className="space-y-0.5">
                <p
                    className={cn(
                        "font-outfit text-sm font-medium md:text-base",
                        active ? "text-peach" : "text-peach/92"
                    )}
                >
                    {title}
                </p>
                <p
                    className={cn(
                        "font-outfit text-xs md:text-sm",
                        active ? "text-peach/82" : "text-peach/66"
                    )}
                >
                    {detail}
                </p>
            </div>
        </div>
    );
}

const ACTIVE_OPS_ROW_CLASSNAME =
    "ops-item--active -translate-y-px border-white/16 bg-[linear-gradient(135deg,rgba(18,23,35,0.94)_0%,rgba(31,26,45,0.9)_52%,rgba(46,32,52,0.78)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_16px_34px_rgba(0,0,0,0.32),0_0_0_1px_rgba(255,138,122,0.06)] ring-1 ring-coral/12";
const INACTIVE_OPS_ROW_CLASSNAME = "translate-y-0 hover:border-white/20";

function useCyclingActiveIndex(length: number) {
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(
        () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        const handleReducedMotionChange = (event: MediaQueryListEvent) => {
            setPrefersReducedMotion(event.matches);
        };

        reducedMotionQuery.addEventListener("change", handleReducedMotionChange);

        return () => {
            reducedMotionQuery.removeEventListener("change", handleReducedMotionChange);
        };
    }, []);

    useEffect(() => {
        if (prefersReducedMotion || length <= 1) {
            return;
        }
        const intervalId = window.setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % length);
        }, 3200);

        return () => {
            window.clearInterval(intervalId);
        };
    }, [length, prefersReducedMotion]);

    return prefersReducedMotion ? 0 : activeIndex;
}

function OperationBentoVisual() {
    const operationCardShellClassName = "h-full";
    const opsItems = [
        {
            icon: CalendarCheck2,
            title: "Booking confirmed",
            detail: "Sat 19:30 • 4 guests • Terrace"
        },
        {
            icon: Clock3,
            title: "Time changed (+30 mins)",
            detail: "Updated by caller while in queue"
        },
        {
            icon: ConciergeBell,
            title: "Dietary note captured",
            detail: "Shellfish allergy added to booking"
        },
        {
            icon: Star,
            title: "Waitlist converted",
            detail: "Spot opened • guest auto-confirmed"
        },
        {
            icon: PhoneForwarded,
            title: "Call escalated",
            detail: "Guest requested a human • forwarded instantly"
        }
    ];
    const activeIndex = useCyclingActiveIndex(opsItems.length);

    return (
        <>
            <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-5">
                <DarkGlassCard className={operationCardShellClassName}>
                    <p className="font-outfit text-xl font-medium leading-tight tracking-tight text-peach/94">Always on. Zero missed calls</p>
                    <p className="mt-2 font-outfit text-sm leading-relaxed text-peach/74 md:text-base">
                        Lola answers instantly — even at peak. No hold music, no voicemail, no &ldquo;please call back later&rdquo;.
                    </p>
                    <ul className="type-body mt-3 max-w-none space-y-2.5 text-peach/86">
                        <li className="flex items-start gap-2.5 leading-relaxed">
                            <UserRoundCheck className="mt-0.5 h-4 w-4 flex-none text-coral/95" />
                            <span>24/7 coverage</span>
                        </li>
                        <li className="flex items-start gap-2.5 leading-relaxed">
                            <UserRoundCheck className="mt-0.5 h-4 w-4 flex-none text-coral/95" />
                            <span>Handles multiple callers at once</span>
                        </li>
                        <li className="flex items-start gap-2.5 leading-relaxed">
                            <UserRoundCheck className="mt-0.5 h-4 w-4 flex-none text-coral/95" />
                            <span>Escalates when needed</span>
                        </li>
                    </ul>
                </DarkGlassCard>

                <DarkGlassCard className={cn("order-3 md:order-none md:row-span-2 relative flex flex-col pb-4 md:pb-5", operationCardShellClassName)}>
                    <div className="-mx-5 -mt-5 mb-4 flex items-center justify-between gap-3 rounded-t-[1.75rem] border-b border-white/12 bg-gradient-to-r from-white/[0.14] via-white/[0.06] to-transparent px-5 py-3 md:-mx-6 md:-mt-6 md:px-6 md:py-3.5">
                        <p className="eyebrow-pulse font-jetbrains text-[11px] font-semibold uppercase tracking-[0.18em] text-peach/88">OPERATIONS PANEL</p>
                        <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-coral/32 bg-coral/16 px-3 py-1 font-jetbrains text-[10px] font-semibold uppercase tracking-[0.14em] text-coral">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-coral" />
                            Live Ops
                        </span>
                    </div>
                    <div className="space-y-3 pt-2">
                        {opsItems.map((item, index) => {
                            const Icon = item.icon;
                            const isActive = index === activeIndex;

                            return (
                                <OpsRow
                                    key={item.title}
                                    active={isActive}
                                    className={cn(
                                        "transition-all duration-500 ease-out",
                                        isActive
                                            ? ACTIVE_OPS_ROW_CLASSNAME
                                            : INACTIVE_OPS_ROW_CLASSNAME
                                    )}
                                    icon={<Icon className="h-4 w-4" />}
                                    title={item.title}
                                    detail={item.detail}
                                />
                            );
                        })}
                    </div>
                </DarkGlassCard>

                <DarkGlassCard className={cn("order-2 md:order-none", operationCardShellClassName)}>
                    <p className="font-outfit text-xl font-medium leading-tight tracking-tight text-peach/94">Guest memory</p>
                    <p className="mt-2 font-outfit text-sm leading-relaxed text-peach/74 md:text-base">
                        Every caller is recognised. Lola pulls context instantly — so guests never repeat themselves.
                    </p>
                    <ul className="type-body mt-3 max-w-none space-y-2.5 text-peach/86">
                        <li className="flex items-start gap-2.5 leading-relaxed">
                            <Brain className="mt-0.5 h-4 w-4 flex-none text-coral" />
                            <span>Caller recognised: Sarah M.</span>
                        </li>
                        <li className="flex items-start gap-2.5 leading-relaxed">
                            <Brain className="mt-0.5 h-4 w-4 flex-none text-coral" />
                            <span>Last booking: Sat 19:30 · Terrace · 4 guests</span>
                        </li>
                        <li className="flex items-start gap-2.5 leading-relaxed">
                            <Brain className="mt-0.5 h-4 w-4 flex-none text-coral" />
                            <span>Note: shellfish allergy</span>
                        </li>
                    </ul>
                </DarkGlassCard>
            </div>

        </>
    );
}

function RulesRoutingBentoVisual() {
    const panelClassName = "h-full";
    const houseRules = [
        { label: "Corkage", value: "Rxx / bottle" },
        { label: "Kids", value: "Allowed until 20:00" },
        { label: "Dress code", value: "Smart casual" },
        { label: "Seating", value: "Bar / Terrace / Main" },
        { label: "Availability", value: "2-10 guests / Indoor / Outdoor / Roof terrace" },
        { label: "Accessibility", value: "Step-free entrance via side gate" }
    ];
    const routingRules = [
        { icon: ArrowRight, title: "Intent: Large group", detail: "Table over 10 → call forwarded to restaurant" },
        { icon: Clock3, title: "Intent: Short notice", detail: "Reservation within 24 hours → call forwarded to restaurant" },
        { icon: MessageSquareReply, title: "Intent: Menu query", detail: "Vegan menu query not in system → send website link via WhatsApp" },
        { icon: PhoneForwarded, title: "Intent: Supplier", detail: "Route to back office" },
        { icon: AlertTriangle, title: "Intent: Complaint", detail: "Escalate immediately" }
    ];
    const activeIndex = useCyclingActiveIndex(routingRules.length);

    return (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 md:gap-5">
            <DarkGlassCard className={panelClassName}>
                <p className="font-outfit text-xl font-medium leading-tight tracking-tight text-peach/94">House rules</p>
                <p className="mt-2 font-outfit text-sm leading-relaxed text-peach/72 md:text-base">Synced from booking system policy fields and restaurant source of truth.</p>
                <div className="mt-3 space-y-2.5 font-outfit text-sm text-peach/72">
                    {houseRules.map((rule) => (
                        <p key={rule.label} className="flex items-center justify-between gap-3 rounded-xl border border-white/12 bg-ink/52 px-3 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                            <span className="text-peach/88">{rule.label}</span>
                            <span className="text-right text-peach/66">{rule.value}</span>
                        </p>
                    ))}
                </div>
            </DarkGlassCard>
            <DarkGlassCard className={cn(panelClassName, "relative flex flex-col pb-4 md:pb-5")}>
                <div className="-mx-5 -mt-5 mb-4 flex items-center justify-between gap-3 rounded-t-[1.75rem] border-b border-white/12 bg-gradient-to-r from-white/[0.14] via-white/[0.06] to-transparent px-5 py-3 md:-mx-6 md:-mt-6 md:px-6 md:py-3.5">
                    <p className="font-jetbrains text-[11px] font-semibold uppercase tracking-[0.18em] text-peach/88">ROUTING RULES</p>
                    <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-coral/32 bg-coral/16 px-3 py-1 font-jetbrains text-[10px] font-semibold uppercase tracking-[0.14em] text-coral">
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-coral" />
                        Live Rules
                    </span>
                </div>
                <div className="mt-3 space-y-2">
                    {routingRules.map((rule, index) => {
                        const Icon = rule.icon;
                        const isActive = index === activeIndex;
                        return (
                            <OpsRow
                                key={rule.title}
                                active={isActive}
                                className={cn(
                                    "px-3 py-2.5 transition-all duration-500 ease-out",
                                    isActive
                                        ? ACTIVE_OPS_ROW_CLASSNAME
                                        : INACTIVE_OPS_ROW_CLASSNAME
                                )}
                                icon={<Icon className="h-4 w-4" />}
                                title={rule.title}
                                detail={rule.detail}
                            />
                        );
                    })}
                </div>
            </DarkGlassCard>
            <DarkGlassCard className={panelClassName}>
                <p className="font-outfit text-xl font-medium leading-tight tracking-tight text-peach/94">Key outcomes</p>
                <p className="mt-2 font-outfit text-sm leading-relaxed text-peach/72 md:text-base">Clear answers from your rules — with deterministic next steps.</p>
                <ul className="type-body mt-3 max-w-none space-y-2.5 text-peach/84">
                    <li className="flex items-start gap-2.5 leading-relaxed">
                        <UserRoundCheck className="mt-0.5 h-4 w-4 flex-none text-coral" />
                        <span>FAQs answered using your exact house rules</span>
                    </li>
                    <li className="flex items-start gap-2.5 leading-relaxed">
                        <UserRoundCheck className="mt-0.5 h-4 w-4 flex-none text-coral" />
                        <span>Availability checked live (party size + seating area)</span>
                    </li>
                    <li className="flex items-start gap-2.5 leading-relaxed">
                        <UserRoundCheck className="mt-0.5 h-4 w-4 flex-none text-coral" />
                        <span>Edge cases routed by intent (you decide what gets through)</span>
                    </li>
                    <li className="flex items-start gap-2.5 leading-relaxed">
                        <UserRoundCheck className="mt-0.5 h-4 w-4 flex-none text-coral" />
                        <span>Every call ends with clear next steps</span>
                    </li>
                </ul>
            </DarkGlassCard>
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
        phaseLabel: "Phase 02/A",
        title: "Lola Operation",
        subheadline: "Always on. Instant answer. Infinite scale — with memory.",
        body: "",
        bullets: [
            "Book, amend, cancel — in seconds",
            "Offer alternatives when you’re full (nearby times, different areas, waitlist where supported)",
            "“Hi Sarah.” Not “What’s your name again?”",
            "Recognises returning guests (or pulls details from the booking system)"
        ],
        ctaPrimaryLabel: "Book a demo",
        ctaPrimaryHref: "/book",
        ctaSecondaryLabel: "Hear Lola →",
        ctaSecondaryHref: "#hear-lola",
        visual: () => <OperationBentoVisual />
    },
    {
        id: 3,
        phaseLabel: "Phase 02/B",
        title: "Rules, FAQs & Routing",
        subheadline: "Your policies in. Confident answers out.",
        body: "",
        bullets: [
            "FAQs answered using your exact house rules",
            "Availability checked live (party size + seating area)",
            "Edge cases routed by intent (you decide what gets through)",
            "Every call ends with clear next steps"
        ],
        visual: () => <RulesRoutingBentoVisual />
    },
    {
        id: 4,
        phaseLabel: "Phase 03",
        title: "The Control Room",
        description: "Every ring becomes a data point.",
        visual: () => <div />
    }
] satisfies FrameworkStep[];

export function TheFramework() {
    return (
        <section id="framework" className="section-offset relative w-full bg-ink">
            {/* Sticky Stacking Cards Container */}
            <div className="relative w-full">
                {FRAMEWORK_STEPS.map((step, index) => {
                    const isSetup = step.id === 1;
                    const isBentoPhase = step.id === 2 || step.id === 3;
                    const isControlRoom = step.id === 4;
                    const isOperation = step.id === 2;
                    const isDarkBentoPhase = step.id === 2 || step.id === 3;
                    const cardBackgroundColor =
                        step.id === 2
                            ? "var(--color-ink)"
                            : step.id === 3
                            ? "var(--color-ink)"
                            : step.id === 4
                                ? "var(--color-ink)"
                                : index % 2 === 0
                                    ? "var(--color-peach)"
                                    : "var(--color-white)";
                    return (
                    <div
                        key={step.id}
                        className={cn(
                            "framework-card sticky top-0 flex w-full justify-center p-6 md:p-12 lg:p-16",
                            isOperation && "overflow-hidden",
                            isSetup
                                ? "min-h-[100svh] items-start pt-24 md:pt-28"
                                : "min-h-[100svh] items-center"
                        )}
                        style={{
                            backgroundColor: cardBackgroundColor,
                            zIndex: index
                        }}
                    >
                        {isControlRoom ? (
                            <div className="relative z-10 w-full max-w-7xl">
                                <ControlRoomMetrics />
                            </div>
                        ) : isBentoPhase ? (
                            <div className="relative z-10 w-full max-w-7xl space-y-7 md:space-y-8">
                                {"phaseLabel" in step ? (
                                    <SectionHeading
                                        eyebrow={step.phaseLabel}
                                        title={step.title}
                                        subtitle={step.subheadline}
                                        titleClassName={cn(FEATURE_SECTION_TITLE_CLASS, isDarkBentoPhase && "text-peach")}
                                        subtitleClassName={isDarkBentoPhase ? "text-peach/80" : undefined}
                                    />
                                ) : null}
                                {"body" in step && step.body ? (
                                    <p className="type-body text-charcoal">
                                        {step.body}
                                    </p>
                                ) : null}

                                {step.id === 2 ? (
                                    <>
                                        <step.visual />
                                        <p className="font-outfit text-sm leading-relaxed text-peach/70">
                                            Next: define how Lola routes edge cases and follows your exact policies.
                                        </p>
                                    </>
                                ) : step.id === 3 ? (
                                    <step.visual />
                                ) : (
                                    <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:items-start">
                                        <div className="lg:col-span-8">
                                            <step.visual />
                                        </div>
                                        <GlassCard className="lg:col-span-4">
                                            <p className="type-eyebrow text-charcoal/60">
                                                Key outcomes
                                            </p>
                                            {"bullets" in step ? (
                                                <ul className="type-body mt-3 max-w-none space-y-2.5 text-charcoal">
                                                    {step.bullets.map((bullet) => (
                                                        <li key={bullet} className="flex items-start gap-2.5 leading-relaxed">
                                                            <UserRoundCheck className="mt-0.5 h-4 w-4 flex-none text-coral" />
                                                            <span>{bullet}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : null}
                                            {"ctaPrimaryLabel" in step && step.ctaPrimaryLabel && step.ctaPrimaryHref ? (
                                                <div className="mt-5 flex flex-wrap items-center gap-4">
                                                    <Link
                                                        href={step.ctaPrimaryHref}
                                                        className="inline-flex items-center justify-center rounded-full border border-coral/40 bg-coral px-5 py-2.5 font-outfit text-sm font-medium text-white shadow-[0_10px_26px_rgba(255,107,107,0.28)] transition-transform hover:scale-[1.02]"
                                                    >
                                                        {step.ctaPrimaryLabel}
                                                    </Link>
                                                    {step.ctaSecondaryLabel && step.ctaSecondaryHref ? (
                                                        <Link
                                                            href={step.ctaSecondaryHref}
                                                            className="type-eyebrow text-coral transition-opacity hover:opacity-75"
                                                        >
                                                            {step.ctaSecondaryLabel}
                                                        </Link>
                                                    ) : null}
                                                </div>
                                            ) : null}
                                        </GlassCard>
                                    </div>
                                )}
                            </div>
                        ) : (
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
                                    {"subheadline" in step ? (
                                        <>
                                            <SectionHeading
                                                eyebrow={`Phase 0${step.id}`}
                                                title={step.title}
                                                subtitle={step.subheadline}
                                                titleClassName={FEATURE_SECTION_TITLE_CLASS}
                                            />
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
                                        <>
                                            {"phaseLabel" in step && step.phaseLabel ? (
                                                <SectionHeading
                                                    eyebrow={step.phaseLabel}
                                                    title={step.title}
                                                    titleClassName={FEATURE_SECTION_TITLE_CLASS}
                                                />
                                            ) : null}
                                            <p className="text-xl md:text-3xl text-charcoal font-outfit max-w-lg leading-relaxed">
                                                {step.description}
                                            </p>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    );
                })}
            </div>
        </section>
    );
}
