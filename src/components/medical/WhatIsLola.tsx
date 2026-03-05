"use client";

import { SectionHeading } from "@/components/typography/SectionHeading";
import { motion, useReducedMotion } from "framer-motion";

const CAPABILITIES = [
    {
        title: "Bookings & changes",
    },
    {
        title: "Waitlist & callbacks",
    },
    {
        title: "Clinic-ready notes",
    },
];

export function WhatIsLola() {
    const reducedMotion = useReducedMotion();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 15 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section id="what-is-lola" className="w-full bg-medical-soft-blue px-6 py-20 md:px-16 md:py-24">
            <div className="mx-auto w-full max-w-4xl text-center">
                <SectionHeading
                    eyebrow="WHAT IS LOLA"
                    title="Lola is your front desk's AI booking agent."
                    subtitle="Lola answers everyday questions, books and changes appointments, and captures reason-for-visit context for your team. It works across GPs, dentists, dermatologists, chiropractors, and most appointment-based practices. The result is a calmer day with less phone pressure and fewer missed calls."
                    titleClassName="type-h2 text-charcoal"
                    subtitleClassName="text-charcoal/80"
                    className="mx-auto flex flex-col items-center text-center"
                />

                <motion.div
                    variants={reducedMotion ? undefined : containerVariants}
                    initial={reducedMotion ? undefined : "hidden"}
                    whileInView={reducedMotion ? undefined : "visible"}
                    viewport={{ once: true, margin: "-10%" }}
                    className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3"
                >
                    {CAPABILITIES.map((cap) => (
                        <motion.article
                            key={cap.title}
                            variants={reducedMotion ? undefined : itemVariants}
                            className="relative flex items-center justify-center gap-3 rounded-2xl border border-white/60 bg-white/70 px-6 py-5 shadow-[0_8px_20px_rgba(18,28,40,0.06)] backdrop-blur-md"
                        >
                            <span className="h-2 w-2 rounded-full bg-mint" />
                            <h3 className="font-outfit text-base font-medium text-charcoal">{cap.title}</h3>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
