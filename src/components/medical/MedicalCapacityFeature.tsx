"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Navigation } from "lucide-react";
import { cn } from "@/lib/utils";

export function MedicalCapacityFeature() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const planRef = useRef<HTMLDivElement>(null);
    const tableRefs = useRef<Record<string, HTMLDivElement | null>>({});

    // Adjusted for medical context: "appointments" instead of "tables"
    const APPOINTMENTS = [
        { id: "A1", type: "Consult", initialStatus: "booked" as const },
        { id: "A2", type: "Follow-up", initialStatus: "available" as const },
        { id: "A3", type: "Procedure", initialStatus: "booked" as const },
        { id: "A4", type: "Consult", initialStatus: "available" as const },
        { id: "A5", type: "Follow-up", initialStatus: "booked" as const },
        { id: "A6", type: "Consult", initialStatus: "available" as const },
        { id: "A7", type: "Follow-up", initialStatus: "available" as const },
        { id: "A8", type: "Procedure", initialStatus: "booked" as const },
        { id: "A9", type: "Consult", initialStatus: "available" as const },
        { id: "A10", type: "Follow-up", initialStatus: "booked" as const },
        { id: "A11", type: "Consult", initialStatus: "available" as const },
        { id: "A12", type: "Procedure", initialStatus: "booked" as const },
    ];
    const BOOKING_SEQUENCE = ["A2", "A11", "A6", "A7", "A9"] as const;

    useGSAP(() => {
        if (!cursorRef.current || !planRef.current) return;

        // Medical style colors: available=light mint, booked=darker mint/teal
        const availableStyles = {
            backgroundColor: "rgba(255, 245, 240, 0.6)", // Peach light
            color: "#1E1E2E",
            borderColor: "rgba(30, 30, 46, 0.18)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.38)"
        };

        // Instead of coral, use a distinct mint/teal for "booked"
        const bookedStyles = {
            backgroundColor: "rgba(52, 211, 153, 0.8)", // Mint
            color: "#1E1E2E",
            borderColor: "rgba(255,255,255,0.4)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3)"
        };

        const setInitialTableStates = () => {
            APPOINTMENTS.forEach((appt) => {
                const element = tableRefs.current[appt.id];
                if (!element) return;
                gsap.set(element, appt.initialStatus === "booked" ? bookedStyles : availableStyles);
            });
        };

        const getTargetPosition = (apptId: string) => {
            const planRect = planRef.current!.getBoundingClientRect();
            const targetEl = tableRefs.current[apptId];
            if (!targetEl) return { x: startX(), y: startY() };
            const targetRect = targetEl.getBoundingClientRect();
            const targetX = targetRect.left - planRect.left + targetRect.width / 2 - 12;
            const targetY = targetRect.top - planRect.top + targetRect.height / 2 - 12;
            return { x: targetX, y: targetY };
        };

        const startX = () => planRef.current!.clientWidth + 26;
        const startY = () => planRef.current!.clientHeight + 18;
        const exitX = () => planRef.current!.clientWidth + 40;
        const exitY = () => -28;

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, repeatRefresh: true });

        gsap.set(cursorRef.current, { x: startX(), y: startY(), opacity: 0 });
        setInitialTableStates();

        BOOKING_SEQUENCE.forEach((apptId) => {
            tl.to(cursorRef.current, {
                x: () => getTargetPosition(apptId).x,
                y: () => getTargetPosition(apptId).y,
                opacity: 1,
                duration: 0.95,
                ease: "power2.inOut"
            })
                .to(cursorRef.current, { scale: 0.82, duration: 0.1, ease: "power1.out" })
                .to(tableRefs.current[apptId], {
                    ...bookedStyles,
                    duration: 0.26,
                    ease: "power1.out"
                }, "<")
                .to(cursorRef.current, { scale: 1, duration: 0.1, ease: "power1.in" })
                .to({}, { duration: 0.24 });
        });

        tl.to({}, { duration: 1 })
            .to(cursorRef.current, {
                x: () => exitX(),
                y: () => exitY(),
                opacity: 0,
                duration: 0.85,
                ease: "power2.in"
            })
            .call(() => {
                APPOINTMENTS.forEach((appt) => {
                    const element = tableRefs.current[appt.id];
                    if (!element) return;
                    gsap.to(element, {
                        ...(appt.initialStatus === "booked" ? bookedStyles : availableStyles),
                        duration: 0.26,
                        ease: "power1.inOut"
                    });
                });
            })
            .to({}, { duration: 0.28 })
            .set(cursorRef.current, { x: startX(), y: startY(), scale: 1 });

    }, []);

    return (
        <div className="relative flex h-[460px] flex-col overflow-hidden rounded-[2rem] bg-[#0B0E13] p-8 shadow-[0_26px_65px_rgba(2,6,23,0.55)] ring-1 ring-white/10 lg:h-full">
            <div className="pointer-events-none absolute -left-14 -top-12 h-40 w-40 rounded-full bg-[rgba(52,211,153,0.22)] blur-3xl" />
            <div className="pointer-events-none absolute -right-14 -bottom-16 h-48 w-48 rounded-full bg-[rgba(100,220,180,0.18)] blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-white/[0.04]" />

            <div className="relative z-10">
                <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="font-outfit text-xl font-semibold text-white">Schedule Maximizer</h3>
                    <div className="flex items-center space-x-2 rounded-full bg-charcoal/40 px-3 py-1.5 ring-1 ring-white/5">
                        <div className="h-2 w-2 rounded-full bg-mint animate-pulse" />
                        <span className="text-[10px] font-jetbrains uppercase tracking-widest text-[#FFF5F0]">Live</span>
                    </div>
                </div>
            </div>

            <div
                ref={planRef}
                className="relative mt-5 flex-1 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.09] to-white/[0.03] p-4 shadow-inner shadow-black/25 ring-1 ring-white/10 backdrop-blur-md"
            >
                <div className="grid h-full grid-cols-3 gap-2">
                    {APPOINTMENTS.map((appt) => {
                        const isBooked = appt.initialStatus === "booked";

                        return (
                            <div
                                key={appt.id}
                                ref={(el) => { tableRefs.current[appt.id] = el; }}
                                className={cn(
                                    "relative flex flex-col items-center justify-center rounded-xl border text-center font-jetbrains shadow-[inset_0_1px_0_rgba(255,255,255,0.38)] transition-colors duration-300 ease-out",
                                    isBooked
                                        ? "border-mint/35 bg-mint/80 text-[#1E1E2E]"
                                        : "border-charcoal/15 bg-peach/40 text-[#FFF5F0]/80"
                                )}
                            >
                                <div className="flex flex-col items-center gap-1">
                                    <span className="text-[10px] font-medium tracking-[0.08em] opacity-80">
                                        {appt.id}
                                    </span>
                                    <span className="text-[9px] uppercase tracking-wider opacity-60">
                                        {appt.type}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div
                    ref={cursorRef}
                    className="absolute z-50 pointer-events-none drop-shadow-md"
                >
                    <Navigation size={24} className="text-ink fill-white -rotate-90" strokeWidth={1.5} />
                </div>
            </div>
        </div>
    );
}
