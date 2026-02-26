"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Philosophy() {
    const container = useRef<HTMLDivElement>(null);
    const text1Ref = useRef<HTMLSpanElement>(null);
    const text2Ref = useRef<HTMLSpanElement>(null);

    useGSAP(() => {
        if (!text1Ref.current || !text2Ref.current || !container.current) return;

        // Simple reveal animation triggered on scroll
        gsap.from([text1Ref.current, text2Ref.current], {
            scrollTrigger: {
                trigger: container.current,
                start: "top 60%",
                end: "bottom 80%",
                toggleActions: "play none none reverse",
            },
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.3,
            ease: "power3.out"
        });
    }, { scope: container });

    return (
        <section
            ref={container}
            className="w-full bg-peach py-32 md:py-48 px-6 md:px-16 flex items-center justify-center relative overflow-hidden"
        >
            <div className="max-w-5xl w-full flex flex-col gap-16 md:gap-24 relative z-10">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-playfair text-charcoal/60 leading-tight">
                    <span ref={text1Ref} className="block w-full">Traditional hospitality asks: <br />
                        <span className="italic text-ink font-semibold">"Who has time to answer the phone?"</span>
                    </span>
                </h2>

                <h2 className="text-3xl md:text-5xl lg:text-7xl font-playfair text-ink leading-tight sm:text-right">
                    <span ref={text2Ref} className="block w-full">We ask: <br />
                        <span className="italic text-coral font-bold">"What if every call was an opportunity?"</span>
                    </span>
                </h2>
            </div>
        </section>
    );
}
