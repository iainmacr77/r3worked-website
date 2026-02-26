"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PhoneMissed, Utensils, AlertCircle, Sparkles, Navigation } from "lucide-react";
import { cn } from "@/lib/utils";

const CALL_EVENTS = [
    { id: 1, text: "Missed Call Captured", icon: PhoneMissed },
    { id: 2, text: "Table for 4 Confirmed", icon: Utensils },
    { id: 3, text: "Dietary Note Added", icon: AlertCircle },
];

const TRANSCRIPT = [
    { sender: "Customer", text: "Do you have vegan options?" },
    { sender: "Lola", text: "Yes, our Chef prepares a seasonal 5-course vegan tasting menu. Would you like me to note that for your reservation?" },
    { sender: "Customer", text: "That sounds perfect. Book it for 7 PM on Friday." },
    { sender: "Lola", text: "Confirmed. I've secured a table for you at 7:00 PM on Friday." },
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
                    {/* Card 1: Booking Intelligence */}
                    <ReservationShuffler />

                    {/* Card 2: Neural Conversationalist */}
                    <TranscriptTypewriter />

                    {/* Card 3: Capacity Maximizer */}
                    <ProtocolScheduler />
                </div>
            </div>
        </section>
    );
}

// ============== CARD 1: RESERVATION SHUFFLER ==============
function ReservationShuffler() {
    const [events, setEvents] = useState(CALL_EVENTS);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Cycle the cards every 3 seconds
        const interval = setInterval(() => {
            setEvents((prev) => {
                const newEvents = [...prev];
                const last = newEvents.pop();
                if (last) newEvents.unshift(last);
                return newEvents;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="glass-panel bg-white/50 rounded-[2rem] p-8 flex flex-col justify-between h-[400px] lg:h-full relative overflow-hidden group">
            <div>
                <h3 className="font-outfit font-semibold text-xl text-ink mb-2">Booking Intelligence</h3>
                <p className="text-sm text-charcoal">Handling intent asynchronously.</p>
            </div>

            <div className="relative w-full h-[200px] flex items-end justify-center perspective-[1000px]">
                {events.map((ev, index) => {
                    // We render from bottom to top visually using absolute positioning
                    // index 0 is the front card, index 1 is behind, index 2 is furthest back.
                    const isFront = index === 0;
                    const yOffset = index * -20;
                    const scale = 1 - index * 0.05;
                    const opacity = 1 - index * 0.2;
                    const zIndex = 30 - index;

                    return (
                        <div
                            key={ev.id}
                            className="absolute bottom-0 w-full max-w-[280px] bg-white border border-charcoal/10 rounded-2xl p-4 shadow-xl transition-all duration-[800ms] flex items-center space-x-4"
                            style={{
                                transform: `translateY(${yOffset}px) scale(${scale})`,
                                opacity,
                                zIndex,
                                transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)"
                            }}
                        >
                            <div className="p-3 bg-peach rounded-full text-coral flex-shrink-0">
                                <ev.icon size={20} />
                            </div>
                            <span className="font-jetbrains text-sm font-medium text-ink transition-colors">
                                {ev.text}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// ============== CARD 2: NEURAL CONVERSATIONALIST ==============
function TranscriptTypewriter() {
    const [visibleMessages, setVisibleMessages] = useState<number>(1);
    const containerRef = useRef<HTMLDivElement>(null);

    // Simple automated typing sequence simulator
    useEffect(() => {
        let timeout: NodeJS.Timeout;

        // Recursive function to show next message based on delays
        const showNext = (currentIndex: number) => {
            if (currentIndex >= TRANSCRIPT.length) {
                // Reset after a long pause
                timeout = setTimeout(() => setVisibleMessages(1), 5000);
                return;
            }

            const delay = TRANSCRIPT[currentIndex].sender === "Lola" ? 1200 : 2500;
            timeout = setTimeout(() => {
                setVisibleMessages(currentIndex + 1);
                showNext(currentIndex + 1);
            }, delay);
        };

        showNext(1);

        return () => clearTimeout(timeout);
    }, [visibleMessages]);

    return (
        <div className="glass-panel bg-ink rounded-[2rem] p-8 flex flex-col h-[400px] lg:h-full relative overflow-hidden">
            <div className="flex justify-between items-start mb-8">
                <div>
                    <h3 className="font-outfit font-semibold text-xl text-peach mb-2">Neural Conversationalist</h3>
                    <p className="text-sm text-charcoal">Real-time tone matching & intent extraction.</p>
                </div>
                <div className="flex items-center space-x-2 bg-charcoal/40 px-3 py-1.5 rounded-full">
                    <div className="w-2 h-2 rounded-full bg-mint animate-pulse" />
                    <span className="text-[10px] font-jetbrains text-peach uppercase tracking-widest">Live</span>
                </div>
            </div>

            <div className="flex-1 overflow-hidden flex flex-col justify-end space-y-4 font-jetbrains text-sm">
                {TRANSCRIPT.slice(0, visibleMessages).map((msg, i) => {
                    const isLola = msg.sender === "Lola";
                    const isLast = i === visibleMessages - 1;

                    return (
                        <div
                            key={i}
                            className={cn(
                                "flex flex-col max-w-[85%] animate-in fade-in slide-in-from-bottom-2 duration-300",
                                isLola ? "self-start" : "self-end items-end"
                            )}
                        >
                            <span className="text-[10px] text-charcoal mb-1 uppercase tracking-widest">{msg.sender}</span>
                            <div
                                className={cn(
                                    "px-4 py-3 rounded-2xl",
                                    isLola ? "bg-charcoal/30 text-peach rounded-tl-sm" : "bg-coral/20 text-peach rounded-tr-sm border border-coral/30"
                                )}
                            >
                                {msg.text}
                                {isLast && isLola && <span className="inline-block w-1.5 h-3 ml-1 bg-coral animate-pulse" />}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

// ============== CARD 3: PROTOCOL SCHEDULER ==============
function ProtocolScheduler() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const targetSlotRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!cursorRef.current || !targetSlotRef.current) return;

        const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

        // Initial position outside bounds
        gsap.set(cursorRef.current, { x: 250, y: 300, opacity: 0 });
        gsap.set(targetSlotRef.current, { backgroundColor: "rgba(56, 56, 56, 0.1)", color: "#1E1E2E" });

        // Move in
        tl.to(cursorRef.current, {
            x: 120,
            y: 140, // rough coords to the Friday peak slot
            opacity: 1,
            duration: 1.5,
            ease: "power2.inOut"
        })
            // Simulate click "push"
            .to(cursorRef.current, { scale: 0.8, duration: 0.1 })
            // Slot changes to Coral
            .to(targetSlotRef.current, {
                backgroundColor: "#FF6B6B",
                color: "white",
                duration: 0.2
            }, "<")
            // Release click
            .to(cursorRef.current, { scale: 1, duration: 0.1 })
            // Move away & fade
            .to(cursorRef.current, { x: 250, y: 50, opacity: 0, duration: 1, ease: "power2.in" })
            // Reset slot for next loop
            .set(targetSlotRef.current, { backgroundColor: "rgba(56, 56, 56, 0.1)", color: "#1E1E2E" }, "+=0.5");

    }, []);

    return (
        <div className="glass-panel bg-white/50 rounded-[2rem] p-8 flex flex-col h-[400px] lg:h-full relative overflow-hidden">
            <div className="mb-8 z-10">
                <h3 className="font-outfit font-semibold text-xl text-ink mb-2">Capacity Maximizer</h3>
                <p className="text-sm text-charcoal">Predictive table routing.</p>
            </div>

            {/* Mock Calendar Grid */}
            <div className="relative flex-1 bg-white border border-charcoal/10 rounded-2xl flex flex-col p-4 shadow-sm">
                <div className="flex justify-between text-xs font-jetbrains text-charcoal mb-4 px-2 border-b border-charcoal/10 pb-2">
                    <span>THU</span>
                    <span className="text-ink font-bold">FRI</span>
                    <span>SAT</span>
                </div>

                <div className="flex-1 grid grid-cols-3 gap-2">
                    {/* Mock column mapping */}
                    {[1, 2, 3].map((col) => (
                        <div key={col} className="flex flex-col gap-2">
                            {[1, 2, 3, 4].map((row) => {
                                const isTarget = col === 2 && row === 3; // Fri 7PM slot
                                return (
                                    <div
                                        key={row}
                                        ref={isTarget ? targetSlotRef : null}
                                        className={cn(
                                            "flex-1 rounded-lg flex items-center justify-center text-[10px] font-jetbrains transition-colors",
                                            isTarget ? "bg-charcoal/10 text-ink" : "bg-peach/50 text-charcoal/40"
                                        )}
                                    >
                                        {isTarget ? "19:00" : "---"}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
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
