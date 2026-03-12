"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Calendar, Settings, ShieldCheck, PhoneCall, ArrowRight, CornerDownRight, Zap, RefreshCw, CheckCircle2, Clock } from "lucide-react";
import { SectionHeading } from "@/components/typography/SectionHeading";

const STEPS = [
    {
        id: 1,
        heading: "1. Attach to your reality",
        copy: "Keep your existing source of truth. Lola connects seamlessly to established Practice Management Systems or Google Calendar. Still paper-based? Lola provides a lightweight digital bridge to get you started without the enterprise IT headache.",
    },
    {
        id: 2,
        heading: "2. Define the boundaries",
        copy: "You remain completely in control. Define your operating hours, appointment types, pacing buffers, and FAQs. Decide exactly when Lola handles a request directly, and when she requires Receptionist Approval first.",
    },
    {
        id: 3,
        heading: "3. Handle routine, escalate exceptions",
        copy: "Once live, Lola absorbs the noise. She comfortably handles new bookings, reschedules, cancellations, and after-hours demand. Anything clinical, uncertain, or complex is safely and immediately routed to your reception team.",
    },
];

function StepContent({
    step,
    index,
    setActiveStep,
}: {
    step: (typeof STEPS)[0];
    index: number;
    setActiveStep: (idx: number) => void;
}) {
    const ref = useRef<HTMLDivElement>(null);
    // trigger when the item is around the center of the viewport
    const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveStep(index);
        }
    }, [isInView, index, setActiveStep]);

    return (
        <div
            ref={ref}
            className={`relative py-16 transition-opacity duration-700 ease-out md:py-32 ${isInView ? "opacity-100" : "opacity-30"
                }`}
        >
            <h3 className="type-h3 text-slate-900">{step.heading}</h3>
            <p className="type-body mt-4 max-w-[42ch] text-slate-600">
                {step.copy}
            </p>
        </div>
    );
}

function DiaryVisual() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex h-full w-full flex-col items-center justify-center p-8"
        >
            <div className="flex flex-col gap-3 w-64 rounded-xl border border-slate-200/60 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                    <Calendar className="h-4 w-4 text-slate-400" />
                    <div className="h-3 w-24 rounded bg-slate-100" />
                </div>
                <div className="flex flex-col gap-2 pt-1">
                    <div className="h-8 w-full rounded bg-slate-50 border border-slate-100" />
                    <div className="h-8 w-3/4 rounded bg-slate-50 border border-slate-100" />
                    <div className="h-8 w-full rounded bg-slate-50 border border-slate-100" />
                    <div className="h-8 w-5/6 rounded bg-slate-50 border border-slate-100" />
                </div>
            </div>
        </motion.div>
    );
}

function ConfigLayerVisual() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex h-full w-full flex-col items-center justify-center p-8"
        >
            {/* Background Diary (dimmed) */}
            <div className="absolute flex flex-col gap-3 w-64 rounded-xl border border-slate-200/50 bg-white/50 p-4 opacity-50 blur-[2px]">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                    <Calendar className="h-4 w-4 text-slate-400" />
                    <div className="h-3 w-24 rounded bg-slate-100" />
                </div>
                <div className="flex flex-col gap-2 pt-1">
                    <div className="h-8 w-full rounded bg-slate-50" />
                    <div className="h-8 w-3/4 rounded bg-slate-50" />
                    <div className="h-8 w-full rounded bg-slate-50" />
                </div>
            </div>

            {/* Glassmorphic Lola Layer */}
            <div className="relative z-10 flex w-72 flex-col items-center justify-center rounded-2xl border border-teal-200/40 bg-teal-50/60 p-6 shadow-lg backdrop-blur-md">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-teal-200 bg-teal-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal-700">
                    Lola Rules Engine
                </div>
                <div className="mt-4 flex w-full flex-col gap-3">
                    <div className="flex items-center justify-between rounded-lg border border-white/60 bg-white/80 px-3 py-2 text-sm text-slate-700 shadow-sm">
                        <span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-teal-600" /> Buffer</span>
                        <span className="font-medium text-teal-700">15 mins</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-white/60 bg-white/80 px-3 py-2 text-sm text-slate-700 shadow-sm">
                        <span className="flex items-center gap-2"><Settings className="h-3.5 w-3.5 text-teal-600" /> Confirm Mode</span>
                        <span className="font-medium text-teal-700">ON</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-white/60 bg-white/80 px-3 py-2 text-sm text-slate-700 shadow-sm">
                        <span className="flex items-center gap-2"><CheckCircle2 className="h-3.5 w-3.5 text-teal-600" /> Approved FAQs</span>
                        <span className="font-medium text-teal-700">Loaded</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

function LiveOperationVisual() {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex h-full w-full flex-col items-center justify-center gap-6 p-8"
        >
            {/* Top Demand Source */}
            <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
                <PhoneCall className="h-4 w-4 text-slate-400" />
                Incoming Call
            </div>

            <div className="relative flex w-full justify-center">
                {/* Branching paths */}
                <div className="absolute top-0 left-1/2 h-8 w-px -translate-x-1/2 bg-slate-200" />
                <div className="absolute top-8 left-[30%] h-px w-[40%] bg-slate-200" />

                <div className="absolute top-8 left-[30%] h-6 w-px bg-slate-200" />
                <div className="absolute top-8 right-[30%] h-6 w-px bg-slate-200" />

                <div className="mt-14 flex w-full justify-center gap-8">
                    {/* Routine Path */}
                    <div className="flex flex-col items-center gap-3">
                        <div className="flex flex-col items-center rounded-xl border border-teal-200 bg-teal-50 px-4 py-3 shadow-sm">
                            <Zap className="mb-1 h-5 w-5 text-teal-600" />
                            <span className="text-xs font-semibold text-teal-800 uppercase tracking-wider">Routine</span>
                            <span className="mt-1 text-xs text-teal-600 text-center max-w-[10ch]">Auto-booked</span>
                        </div>
                    </div>

                    {/* Clinical Path */}
                    <div className="flex flex-col items-center gap-3">
                        <div className="flex flex-col items-center rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 shadow-sm">
                            <ShieldCheck className="mb-1 h-5 w-5 text-amber-600" />
                            <span className="text-xs font-semibold text-amber-800 uppercase tracking-wider">Clinical</span>
                            <span className="mt-1 text-xs text-amber-600 text-center max-w-[10ch]">Staff Handoff</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function ClinicOperationsFlow() {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <section className="relative w-full bg-slate-50 px-6 py-24 md:px-16 lg:py-32">
            <div className="mx-auto w-full max-w-7xl">
                {/* Top Level Context */}
                <div className="mb-16 max-w-2xl lg:mb-24">
                    <SectionHeading
                        eyebrow="HOW LOLA ATTACHES AND OPERATES"
                        eyebrowClassName="text-teal-600 font-semibold tracking-[0.16em]"
                        title="An intelligent layer around your existing practice."
                        subtitle="Lola isn’t a rip-and-replace system. She fits seamlessly over your current diary, governed entirely by the rules your clinic sets."
                        titleClassName="type-h2-serif text-slate-900"
                        subtitleClassName="type-lead mt-5 text-slate-600"
                    />
                </div>

                {/* Sticky Scroll Area */}
                <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-24">
                    {/* Mobile visual (shows above text only on mobile if stacked, but better to just use sticky on desktop) */}

                    {/* Left Column (Sticky Visual) */}
                    <div className="hidden lg:block lg:relative">
                        <div className="sticky top-1/4 h-[50vh] w-full rounded-[2.5rem] border border-slate-200/60 bg-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-slate-900/5 backdrop-blur-2xl">
                            <AnimatePresence mode="wait">
                                {activeStep === 0 && <DiaryVisual key="diary" />}
                                {activeStep === 1 && <ConfigLayerVisual key="config" />}
                                {activeStep === 2 && <LiveOperationVisual key="live" />}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Right Column (Scrolling Text) */}
                    <div className="flex flex-col pb-[20vh]">
                        {STEPS.map((step, index) => (
                            <div key={step.id} className="relative">
                                {/* Mobile visual inline representation */}
                                <div className="mb-8 block h-64 w-full rounded-3xl border border-slate-200/60 bg-white shadow-sm lg:hidden overflow-hidden">
                                    {index === 0 && <DiaryVisual />}
                                    {index === 1 && <ConfigLayerVisual />}
                                    {index === 2 && <LiveOperationVisual />}
                                </div>

                                <StepContent
                                    step={step}
                                    index={index}
                                    setActiveStep={setActiveStep}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
