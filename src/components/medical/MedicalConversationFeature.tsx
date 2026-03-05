"use client";

import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const TRANSCRIPT = [
    { sender: "Patient", text: "Hi, I need to see Dr. Meyer this week." },
    { sender: "Lola", text: "Dr. Meyer has an opening on Thursday at 9:00 AM or Friday at 11:30 AM. Which works best?" },
    { sender: "Patient", text: "Let's do Thursday." },
    { sender: "Lola", text: "Great, Thursday at 9:00 AM is booked. Could you briefly describe the reason for your visit so the practice is prepared?" },
    { sender: "Patient", text: "Just a regular checkup and a small rash on my arm." },
    { sender: "Lola", text: "Noted. Your appointment is confirmed and the notes are added. See you Thursday!" },
];

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
                }, 900);
                return;
            }

            schedule(() => {
                setMessages((prev) => [...prev, nextMessage]);
                playSequence(index + 1);
            }, 1500);
        };

        playSequence(0);

        return () => {
            cancelled = true;
            clearTimers();
        };
    }, []);

    return (
        <div className="relative flex h-[460px] flex-col overflow-hidden rounded-[2rem] bg-[#0B0E13] p-8 shadow-[0_26px_65px_rgba(2,6,23,0.55)] ring-1 ring-white/10 lg:h-full">
            {/* Mint / Soft Blue glow elements instead of coral/emerald */}
            <div className="pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-[rgba(52,211,153,0.22)] blur-3xl" />
            <div className="pointer-events-none absolute -left-14 -bottom-16 h-44 w-44 rounded-full bg-[rgba(64,194,172,0.18)] blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-white/[0.04]" />

            <div className="relative z-10">
                <div className="mb-3 flex items-start justify-between gap-4">
                    <h3 className="font-outfit text-xl font-semibold text-white">Natural Conversation</h3>
                    <div className="flex items-center space-x-2 rounded-full bg-charcoal/40 px-3 py-1.5 ring-1 ring-white/5">
                        <div className="h-2 w-2 rounded-full bg-mint animate-pulse" />
                        <span className="text-[10px] font-jetbrains uppercase tracking-widest text-[#FFF5F0]">Live</span>
                    </div>
                </div>
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
                                        "flex max-w-[88%] flex-col animate-in fade-in slide-in-from-bottom-2 duration-500 ease-out",
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
                            <div className="flex max-w-[88%] flex-col self-start animate-in fade-in slide-in-from-bottom-2 duration-300">
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
        </div>
    );
}
