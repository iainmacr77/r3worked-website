"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Utensils, AlertCircle, Sparkles, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";

const CALL_EVENTS = [
    { id: 1, text: "Table for 4 Confirmed", icon: Utensils },
    { id: 2, text: "Dietary Note Added: Gluten-Free", icon: AlertCircle },
    { id: 3, text: "VIP Guest Flagged", icon: Sparkles },
    { id: 4, text: "Waitlist Converted → Booking Confirmed", icon: Sparkles },
    { id: 5, text: "Special Occasion Tagged: Anniversary", icon: Sparkles },
    { id: 6, text: "Late Arrival Noted: +15 mins", icon: AlertCircle },
    { id: 7, text: "High Chair Requested", icon: Utensils },
];

const TRANSCRIPT = [
    { sender: "Customer", text: "Booking for two next Saturday at 8pm?" },
    { sender: "Lola", text: "Confirmed - I've booked you for 20:00 next Saturday." },
    { sender: "Customer", text: "Is the restaurant child-friendly?" },
    { sender: "Lola", text: "Absolutely. We have a kiddies menu and high chairs on request." },
    { sender: "Customer", text: "Are you open Mondays for lunch?" },
    { sender: "Lola", text: "Yes - Mondays 12:00 to 16:00 for lunch." },
];

export function FeaturesDashboard() {
    return (
        <section id="features" className="w-full bg-peach py-32 px-6 md:px-16 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-5xl font-playfair italic text-ink mb-6">
                        The Precision Dashboard
                    </h2>
                    <p className="text-xl text-charcoal max-w-2xl font-outfit">
                        A front-of-house operating system that never sleeps. Watch Lola orchestrate your flow in real-time.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-auto lg:h-[600px]">
                    {/* Card 2: Neural Conversationalist */}
                    <TranscriptTypewriter />

                    {/* Card 1: Booking Intelligence */}
                    <ReservationShuffler />

                    {/* Card 3: Capacity Maximizer */}
                    <ProtocolScheduler />
                </div>
            </div>
        </section>
    );
}

// ============== CARD 1: RESERVATION SHUFFLER ==============
export function ReservationShuffler() {
    const [visibleEvents, setVisibleEvents] = useState(1);
    const FEED_TIMESTAMPS = ["NOW", "1m", "2m", "3m", "5m", "7m", "9m"];

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        const showNext = (currentIndex: number) => {
            if (currentIndex >= CALL_EVENTS.length) {
                timeout = setTimeout(() => setVisibleEvents(1), 4000);
                return;
            }

            timeout = setTimeout(() => {
                setVisibleEvents(currentIndex + 1);
            }, 1700);
        };

        showNext(visibleEvents);

        return () => clearTimeout(timeout);
    }, [visibleEvents]);

    return (
        <div className="relative flex h-[400px] flex-col overflow-hidden rounded-[2rem] bg-[#0B0E13] p-8 shadow-[0_26px_65px_rgba(2,6,23,0.55)] ring-1 ring-white/10 lg:h-full">
            <div className="pointer-events-none absolute -left-14 -top-14 h-40 w-40 rounded-full bg-[rgba(16,185,129,0.24)] blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -right-12 h-44 w-44 rounded-full bg-[rgba(139,92,246,0.22)] blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-white/[0.06]" />

            <div className="relative z-10">
                <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="font-outfit text-xl font-semibold text-white">Booking Intelligence</h3>
                    <div className="inline-flex items-center space-x-2 rounded-full bg-charcoal/40 px-3 py-1.5">
                        <div className="h-2 w-2 rounded-full bg-mint animate-pulse" />
                        <span className="text-[10px] font-jetbrains uppercase tracking-widest text-peach">Live Ops</span>
                    </div>
                </div>
                <p className="max-w-[30ch] text-sm text-white/75">
                    Capture missed calls, confirm bookings, and store preferences automatically.
                </p>
            </div>

            <div className="relative z-10 mt-5 flex-1 min-h-0 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.09] to-white/[0.03] p-4 shadow-inner shadow-black/30 ring-1 ring-white/10 backdrop-blur-md">
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-black/35 via-transparent to-black/45" />
                <div className="relative h-full overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    <div className="flex min-h-full flex-col justify-start gap-3">
                        {CALL_EVENTS.slice(0, visibleEvents).reverse().map((event, index) => {
                            const cardOpacity = index === 0 ? 1 : index === 1 ? 0.8 : index === 2 ? 0.65 : 0.5;
                            const cardBlur = index === 0 ? 0 : index === 1 ? 0.15 : index === 2 ? 0.35 : 0.55;

                            return (
                                <div
                                    key={event.id}
                                    className="w-full animate-in slide-in-from-top-2 fade-in rounded-2xl border border-white/10 bg-white/10 p-4 text-white shadow-2xl backdrop-blur-md duration-300"
                                    style={{ opacity: cardOpacity, filter: `blur(${cardBlur}px)` }}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-white/20 to-white/[0.06] text-emerald-200 ring-1 ring-white/20">
                                            <event.icon size={18} />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <div className="mb-1 flex items-center justify-between gap-2">
                                                <span className="text-[10px] font-jetbrains uppercase tracking-[0.18em] text-white/65">
                                                    Lola Ops
                                                </span>
                                                <span className="text-[10px] font-jetbrains uppercase tracking-[0.14em] text-white/40">
                                                    {FEED_TIMESTAMPS[Math.min(index, FEED_TIMESTAMPS.length - 1)]}
                                                </span>
                                            </div>
                                            <p className="truncate font-jetbrains text-sm font-medium text-white/92">
                                                {event.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============== CARD 2: NEURAL CONVERSATIONALIST ==============
export function TranscriptTypewriter() {
    const [messages, setMessages] = useState<typeof TRANSCRIPT>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const chatScrollRef = useRef<HTMLDivElement>(null);
    const timeoutRefs = useRef<Array<ReturnType<typeof setTimeout>>>([]);

    useEffect(() => {
        const chatWindow = chatScrollRef.current;
        if (!chatWindow) return;
        chatWindow.scrollTo({
            top: chatWindow.scrollHeight,
            behavior: "smooth"
        });
    }, [messages, isTyping]);

    useEffect(() => {
        let cancelled = false;

        const clearTimers = () => {
            timeoutRefs.current.forEach((id) => clearTimeout(id));
            timeoutRefs.current = [];
        };

        const schedule = (callback: () => void, delay: number) => {
            const id = setTimeout(() => {
                if (!cancelled) callback();
            }, delay);
            timeoutRefs.current.push(id);
        };

        const playSequence = (index: number) => {
            if (cancelled) return;

            if (index >= TRANSCRIPT.length) {
                schedule(() => {
                    setMessages([]);
                    setCurrentIndex(0);
                    setIsTyping(false);
                    playSequence(0);
                }, 3000);
                return;
            }

            setCurrentIndex(index);
            const nextMessage = TRANSCRIPT[index];

            if (nextMessage.sender === "Lola") {
                setIsTyping(true);
                schedule(() => {
                    setMessages((prev) => [...prev, nextMessage]);
                    setIsTyping(false);
                    playSequence(index + 1);
                }, 700);
                return;
            }

            schedule(() => {
                setMessages((prev) => [...prev, nextMessage]);
                playSequence(index + 1);
            }, 1200);
        };

        playSequence(0);

        return () => {
            cancelled = true;
            clearTimers();
        };
    }, []);

    return (
        <div className="relative flex h-[400px] flex-col overflow-hidden rounded-[2rem] bg-[#0B0E13] p-8 shadow-[0_26px_65px_rgba(2,6,23,0.55)] ring-1 ring-white/10 lg:h-full">
            <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[rgba(16,185,129,0.32)] blur-3xl" />
            <div className="pointer-events-none absolute -left-14 -bottom-16 h-44 w-44 rounded-full bg-[rgba(52,211,153,0.22)] blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-white/[0.06]" />

            <div className="relative z-10">
                <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="font-outfit text-xl font-semibold text-white">Natural Conversation</h3>
                    <div className="flex items-center space-x-2 rounded-full bg-charcoal/40 px-3 py-1.5">
                        <div className="h-2 w-2 rounded-full bg-mint animate-pulse" />
                        <span className="text-[10px] font-jetbrains uppercase tracking-widest text-peach">Live</span>
                    </div>
                </div>
                <p className="max-w-[30ch] text-sm text-white/75">Understands guests, answers questions and confirms bookings in one conversation.</p>
            </div>

            <div className="relative z-10 mt-5 flex-1 min-h-0 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.09] to-white/[0.03] p-4 shadow-inner shadow-black/25 ring-1 ring-white/10 backdrop-blur-md">
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-black/35 via-transparent to-black/45" />
                <div
                    ref={chatScrollRef}
                    className="relative h-full overflow-y-auto pr-1 font-jetbrains text-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    <div className="flex min-h-full flex-col justify-start gap-3">
                        {messages.map((msg, i) => {
                            const isLola = msg.sender === "Lola";

                            return (
                                <div
                                    key={`${msg.sender}-${i}-${msg.text.slice(0, 14)}`}
                                    className={cn(
                                        "flex max-w-[88%] flex-col animate-in fade-in slide-in-from-bottom-2 duration-500 ease-out",
                                        isLola ? "self-start" : "self-end items-end"
                                    )}
                                >
                                    <span className="mb-1 text-[10px] uppercase tracking-widest text-peach/60">{msg.sender}</span>
                                    <div
                                        className={cn(
                                            "rounded-2xl px-4 py-3 leading-relaxed",
                                            isLola
                                                ? "rounded-tl-sm border border-white/10 bg-charcoal/55 text-peach"
                                                : "rounded-tr-sm border border-coral/25 bg-coral/18 text-peach"
                                        )}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            );
                        })}

                        {isTyping && TRANSCRIPT[currentIndex]?.sender === "Lola" && (
                            <div className="flex max-w-[88%] flex-col self-start animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <span className="mb-1 text-[10px] uppercase tracking-widest text-peach/60">Lola</span>
                                <div className="inline-flex w-fit items-center gap-1 rounded-2xl rounded-tl-sm border border-white/10 bg-charcoal/55 px-4 py-3">
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-peach/80 [animation-delay:0ms]" />
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-peach/80 [animation-delay:120ms]" />
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-peach/80 [animation-delay:240ms]" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

// ============== CARD 3: PROTOCOL SCHEDULER ==============
export function ProtocolScheduler() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const planRef = useRef<HTMLDivElement>(null);
    const tableRefs = useRef<Record<string, HTMLDivElement | null>>({});
    const TABLES = [
        { id: "T1", seats: 2, initialStatus: "booked" as const },
        { id: "T2", seats: 4, initialStatus: "available" as const },
        { id: "T3", seats: 6, initialStatus: "booked" as const },
        { id: "T4", seats: 2, initialStatus: "available" as const },
        { id: "T5", seats: 4, initialStatus: "booked" as const },
        { id: "T6", seats: 2, initialStatus: "available" as const },
        { id: "T7", seats: 4, initialStatus: "available" as const },
        { id: "T8", seats: 6, initialStatus: "booked" as const },
        { id: "T9", seats: 2, initialStatus: "available" as const },
        { id: "T10", seats: 4, initialStatus: "booked" as const },
        { id: "T11", seats: 2, initialStatus: "available" as const },
        { id: "T12", seats: 6, initialStatus: "booked" as const },
    ];
    const BOOKING_SEQUENCE = ["T2", "T11", "T6", "T7", "T9"] as const;

    useGSAP(() => {
        if (!cursorRef.current || !planRef.current) return;

        const availableStyles = {
            backgroundColor: "rgba(255, 228, 181, 0.66)",
            color: "#1E1E2E",
            borderColor: "rgba(30, 30, 46, 0.18)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.38)"
        };
        const bookedStyles = {
            backgroundColor: "rgba(255,107,107,0.94)",
            color: "white",
            borderColor: "rgba(255,255,255,0.32)",
            boxShadow: "0 10px 20px rgba(255,107,107,0.28) inset"
        };

        const setInitialTableStates = () => {
            TABLES.forEach((table) => {
                const element = tableRefs.current[table.id];
                if (!element) return;
                gsap.set(element, table.initialStatus === "booked" ? bookedStyles : availableStyles);
            });
        };

        const getTargetPosition = (tableId: string) => {
            const planRect = planRef.current!.getBoundingClientRect();
            const targetEl = tableRefs.current[tableId];
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

        // Initial position outside bounds
        gsap.set(cursorRef.current, { x: startX(), y: startY(), opacity: 0 });
        setInitialTableStates();

        BOOKING_SEQUENCE.forEach((tableId) => {
            tl.to(cursorRef.current, {
                x: () => getTargetPosition(tableId).x,
                y: () => getTargetPosition(tableId).y,
                opacity: 1,
                duration: 0.95,
                ease: "power2.inOut"
            })
                .to(cursorRef.current, { scale: 0.82, duration: 0.1, ease: "power1.out" })
                .to(tableRefs.current[tableId], {
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
                TABLES.forEach((table) => {
                    const element = tableRefs.current[table.id];
                    if (!element) return;
                    gsap.to(element, {
                        ...(table.initialStatus === "booked" ? bookedStyles : availableStyles),
                        duration: 0.26,
                        ease: "power1.inOut"
                    });
                });
            })
            .to({}, { duration: 0.28 })
            .set(cursorRef.current, { x: startX(), y: startY(), scale: 1 });

    }, []);

    return (
        <div className="relative flex h-[400px] flex-col overflow-hidden rounded-[2rem] bg-[#0B0E13] p-8 shadow-[0_26px_65px_rgba(2,6,23,0.55)] ring-1 ring-white/10 lg:h-full">
            <div className="pointer-events-none absolute -left-14 -top-12 h-40 w-40 rounded-full bg-[rgba(56,189,248,0.28)] blur-3xl" />
            <div className="pointer-events-none absolute -right-14 -bottom-16 h-48 w-48 rounded-full bg-[rgba(20,184,166,0.26)] blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-white/[0.06]" />

            <div className="relative z-10">
                <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="font-outfit text-xl font-semibold text-white">Capacity Maximizer</h3>
                    <div className="flex items-center space-x-2 rounded-full bg-charcoal/40 px-3 py-1.5">
                        <div className="h-2 w-2 rounded-full bg-mint animate-pulse" />
                        <span className="text-[10px] font-jetbrains uppercase tracking-widest text-peach">Live</span>
                    </div>
                </div>
                <p className="max-w-[34ch] text-sm text-white/75 leading-relaxed">
                    Turns availability into revenue: smarter allocations, fewer conflicts, faster turnarounds.
                </p>
            </div>

            {/* Table plan */}
            <div
                ref={planRef}
                className="relative mt-5 flex-1 rounded-2xl border border-charcoal/10 bg-white p-4 shadow-sm"
            >
                <div className="grid h-full grid-cols-3 gap-2">
                    {TABLES.map((table) => {
                        const isBooked = table.initialStatus === "booked";
                        const chairCount = table.seats === 2 ? 2 : table.seats === 4 ? 4 : 6;

                        return (
                            <div
                                key={table.id}
                                ref={(el) => { tableRefs.current[table.id] = el; }}
                                className={cn(
                                    "relative flex flex-col items-center justify-center rounded-xl border text-center font-jetbrains shadow-[inset_0_1px_0_rgba(255,255,255,0.38)] transition-colors duration-300 ease-out",
                                    isBooked
                                        ? "border-coral/35 bg-coral/90 text-white"
                                        : "border-charcoal/15 bg-peach/60 text-ink"
                                )}
                            >
                                <span className="text-[10px] font-medium tracking-[0.08em]">
                                    {table.id} • {table.seats}p
                                </span>
                                <div className="mt-2 flex items-center gap-1">
                                    {Array.from({ length: chairCount }).map((_, idx) => (
                                        <span
                                            key={`${table.id}-chair-${idx}`}
                                            className={cn(
                                                "h-1.5 w-1.5 rounded-full",
                                                isBooked ? "bg-white/85" : "bg-charcoal/35"
                                            )}
                                        />
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Mock Mouse Cursor SVG */}
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
