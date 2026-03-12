"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const TRANSCRIPT = [
    {
        sender: "Lola",
        text: "Good morning David, welcome back to Dr Moore's practice reception. How may I assist you today?",
    },
    { sender: "Patient", text: "I need to move my appointment tomorrow." },
    {
        sender: "Lola",
        text: "I see your appointment is scheduled for 3pm. When would you like to move it to?",
    },
    { sender: "Patient", text: "Is there any space on Wednesday morning?" },
    {
        sender: "Lola",
        text: "Let me check. Yes, I can see the doctor has space at 9.30am and 11am. Would either of these suit?",
    },
    { sender: "Patient", text: "Please book me in for 11am." },
    {
        sender: "Lola",
        text: "Certainly, that's done. Is there anything else I can help with?",
    },
    {
        sender: "Patient",
        text: "I just need to know if I should continue taking my tablets until I see the doctor.",
    },
    {
        sender: "Lola",
        text: "Certainly, as this is a medically related question I will pass you straight through to Dr Moore's assistant.",
    },
];

function getTypingDelay(text: string) {
    const wordCount = text.trim().split(/\s+/).length;
    return Math.min(2200, 900 + wordCount * 55);
}

function getPauseAfterMessage(text: string, sender: string) {
    const wordCount = text.trim().split(/\s+/).length;
    const baseDelay = sender === "Lola" ? 900 : 700;
    return Math.min(2000, baseDelay + wordCount * 35);
}

export function MedicalConversationFeature() {
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
                }, 4200);
                return;
            }

            setCurrentIndex(index);
            const nextMessage = TRANSCRIPT[index];

            if (nextMessage.sender === "Lola") {
                setIsTyping(true);
                schedule(() => {
                    setMessages((prev) => [...prev, nextMessage]);
                    setIsTyping(false);
                    schedule(() => playSequence(index + 1), getPauseAfterMessage(nextMessage.text, nextMessage.sender));
                }, getTypingDelay(nextMessage.text));
                return;
            }

            schedule(() => {
                setMessages((prev) => [...prev, nextMessage]);
                schedule(() => playSequence(index + 1), getPauseAfterMessage(nextMessage.text, nextMessage.sender));
            }, 1350);
        };

        playSequence(0);

        return () => {
            cancelled = true;
            clearTimers();
        };
    }, []);

    return (
        <div className="relative flex h-[520px] flex-col overflow-hidden rounded-[2rem] bg-[#0a1018] p-6 shadow-[0_28px_72px_rgba(2,6,23,0.58)] ring-1 ring-white/10 lg:h-full lg:p-7">
            <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[rgba(52,211,153,0.2)] blur-3xl" />
            <div className="pointer-events-none absolute -left-14 -bottom-16 h-44 w-44 rounded-full bg-[rgba(64,194,172,0.16)] blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-white/[0.04]" />

            <div className="relative z-10">
                <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                        <p className="font-jetbrains text-[10px] uppercase tracking-[0.16em] text-white/48">
                            ROUTINE CALL FLOW
                        </p>
                        <h3 className="mt-2 font-outfit text-xl font-semibold text-white">Natural conversation with a visible boundary</h3>
                    </div>
                    <div className="flex items-center space-x-2 rounded-full bg-charcoal/40 px-3 py-1.5 ring-1 ring-white/5">
                        <div className="h-2 w-2 rounded-full bg-mint animate-pulse" />
                        <span className="text-[10px] font-jetbrains uppercase tracking-widest text-[#FFF5F0]">Live</span>
                    </div>
                </div>
                <p className="max-w-[34ch] text-sm leading-relaxed text-white/72">
                    Scheduling gets completed cleanly. Visit context is captured at a high level. Clinical advice stays with staff.
                </p>
            </div>

            <div className="relative z-10 mt-5 flex-1 min-h-0 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.09] to-white/[0.03] p-4 shadow-inner shadow-black/25 ring-1 ring-white/10 backdrop-blur-md">
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-black/35 via-transparent to-black/45" />
                <div
                    ref={chatScrollRef}
                    className="relative h-full overflow-y-auto pr-1 font-jetbrains text-sm [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    <div className="flex min-h-full flex-col justify-start gap-4">
                        {messages.map((msg, i) => {
                            const isLola = msg.sender === "Lola";

                            return (
                                <div
                                    key={`${msg.sender}-${i}-${msg.text.slice(0, 14)}`}
                                    className={cn(
                                        "flex max-w-[88%] flex-col animate-in fade-in slide-in-from-bottom-2 duration-700 ease-out",
                                        isLola ? "self-start" : "self-end items-end"
                                    )}
                                >
                                    <span className="mb-1 text-[10px] uppercase tracking-widest text-[#FFF5F0]/60">{msg.sender}</span>
                                    <div
                                        className={cn(
                                            "rounded-2xl px-4 py-3 leading-relaxed",
                                            isLola
                                                ? "rounded-tl-sm border border-white/10 bg-charcoal/55 text-[#FFF5F0]"
                                                : "rounded-tr-sm border border-mint/20 bg-mint/15 text-[#FFF5F0]"
                                        )}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            );
                        })}

                        {isTyping && TRANSCRIPT[currentIndex]?.sender === "Lola" && (
                            <div className="flex max-w-[88%] flex-col self-start animate-in fade-in slide-in-from-bottom-2 duration-500">
                                <span className="mb-1 text-[10px] uppercase tracking-widest text-[#FFF5F0]/60">Lola</span>
                                <div className="inline-flex w-fit items-center gap-1 rounded-2xl rounded-tl-sm border border-white/10 bg-charcoal/55 px-4 py-3">
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#FFF5F0]/80 [animation-delay:0ms]" />
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#FFF5F0]/80 [animation-delay:120ms]" />
                                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#FFF5F0]/80 [animation-delay:240ms]" />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className="relative z-10 mt-4 grid gap-3 sm:grid-cols-3">
                {[
                    "Reschedule completed",
                    "Visit context captured",
                    "Clinical question escalated",
                ].map((item) => (
                    <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/[0.045] px-3 py-3 text-[11px] uppercase tracking-[0.12em] text-white/62"
                    >
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}
