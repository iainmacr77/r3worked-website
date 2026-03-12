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
            <div className="relative flex w-full max-w-sm flex-col items-center justify-center gap-8">
                {/* Top Sources */}
                <div className="flex w-full justify-between px-4 z-10">
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex h-12 w-24 items-center justify-center rounded-xl border border-slate-200 bg-white text-xs font-medium text-slate-600 shadow-sm">
                            PMS Layer
                        </div>
                        <div className="h-4 w-px bg-slate-200" />
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <div className="flex h-12 w-28 items-center justify-center rounded-xl border border-slate-200 bg-white text-xs font-medium text-slate-600 shadow-sm">
                            <Calendar className="mr-2 h-3.5 w-3.5 text-blue-500" /> G-Cal
                        </div>
                        <div className="h-4 w-px bg-slate-200" />
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <div className="flex h-12 w-24 flex-col items-center justify-center rounded-xl border border-slate-200 bg-white text-xs font-medium leading-tight text-slate-600 shadow-sm">
                            <span>Paper</span>
                            <span className="text-[9px] text-slate-400">Digital bridge</span>
                        </div>
                        <div className="h-4 w-px bg-slate-200" />
                    </div>
                </div>

                {/* Central Diary */}
                <div className="relative z-20 flex w-64 flex-col gap-3 rounded-2xl border border-teal-100 bg-white p-5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] ring-1 ring-slate-900/5">
                    <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 shadow-sm">
                        <div className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                        <span className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-wider text-teal-700">Source Connected</span>
                    </div>

                    <div className="mt-2 flex items-center justify-between border-b border-slate-100 pb-3">
                        <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-slate-400" />
                            <div className="h-3 w-20 rounded bg-slate-100" />
                        </div>
                        <div className="h-5 w-12 rounded-full bg-teal-50" />
                    </div>
                    <div className="flex flex-col gap-2 pt-1">
                        <div className="h-8 w-full rounded border border-slate-100 bg-slate-50" />
                        <div className="h-8 w-3/4 rounded border border-slate-100 bg-slate-50" />
                        <div className="h-8 w-full rounded border border-slate-100 bg-slate-50" />
                    </div>
                </div>

                {/* Connecting Lines Behind */}
                <div className="absolute top-12 left-1/2 -z-10 -ml-[1px] h-20 w-px bg-slate-200" />
                <div className="absolute top-16 left-1/4 -z-10 h-px w-1/2 bg-slate-200" />
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
            <div className="relative z-10 flex w-80 flex-col items-center justify-center rounded-2xl border border-teal-200/40 bg-white/60 p-6 shadow-xl ring-1 ring-slate-900/5 backdrop-blur-xl">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-teal-200 bg-teal-100 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-teal-800 shadow-sm whitespace-nowrap">
                    Clinic Rules Engine
                </div>

                <div className="mt-3 grid w-full grid-cols-2 gap-2">
                    {/* Left Column */}
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
                            <span className="text-[10px] uppercase tracking-wider text-slate-500">Booking Hours</span>
                            <span className="text-sm font-medium text-slate-700">8am - 6pm</span>
                        </div>
                        <div className="flex flex-col rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
                            <span className="text-[10px] uppercase tracking-wider text-slate-500">Buffer</span>
                            <span className="text-sm font-medium text-slate-700">15 mins</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
                            <Settings className="h-3.5 w-3.5 text-slate-400" />
                            <span className="text-xs font-medium text-slate-700">Appt. Types</span>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col rounded-lg border border-teal-200 bg-teal-50/50 px-3 py-2 shadow-sm">
                            <span className="text-[10px] uppercase tracking-wider text-teal-600">Reception Approval</span>
                            <div className="mt-0.5 flex items-center justify-between">
                                <span className="text-sm font-medium text-teal-800">ON</span>
                                <div className="h-2 w-2 rounded-full bg-teal-500" />
                            </div>
                        </div>
                        <div className="flex flex-col rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
                            <span className="text-[10px] uppercase tracking-wider text-slate-500">Handoff Rule</span>
                            <span className="truncate text-xs font-medium text-slate-700">Strict Clinical</span>
                        </div>
                        <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 shadow-sm">
                            <CheckCircle2 className="h-3.5 w-3.5 text-teal-500" />
                            <span className="text-xs font-medium text-slate-700">Loaded FAQs</span>
                        </div>
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
            className="relative flex h-full w-full flex-col items-center justify-center p-8"
        >
            {/* Top Demand Sources Container */}
            <div className="flex flex-wrap justify-center gap-2">
                <div className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
                    <PhoneCall className="h-3.5 w-3.5 text-slate-400" /> New booking
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm">
                    <RefreshCw className="h-3.5 w-3.5 text-slate-400" /> Reschedule
                </div>
                <div className="flex items-center gap-1.5 rounded-full border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-medium text-rose-700 shadow-sm">
                    <ShieldCheck className="h-3.5 w-3.5 text-rose-500" /> Clinical question
                </div>
            </div>

            {/* Processing Layer */}
            <div className="relative my-6 flex w-full max-w-[280px] justify-center">
                <div className="absolute top-0 left-[15%] h-6 w-px bg-slate-200" />
                <div className="absolute top-0 left-1/2 h-6 w-px bg-slate-200" />
                <div className="absolute top-0 right-[15%] h-6 w-px bg-slate-200" />

                <div className="relative z-10 mt-6 flex w-full items-center justify-center rounded-xl border border-teal-200/50 bg-teal-50/80 py-3 shadow-sm backdrop-blur-sm">
                    <span className="text-xs font-semibold uppercase tracking-widest text-teal-800">Lola Handling</span>
                </div>

                <div className="absolute bottom-[-24px] left-[25%] h-6 w-px bg-teal-200" />
                <div className="absolute bottom-[-24px] right-[25%] h-6 w-px bg-amber-200" />
            </div>

            {/* Outcomes */}
            <div className="flex w-full max-w-[300px] justify-between pt-6">
                {/* Routine Outcomes */}
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-teal-700">Routine Output</span>
                    <div className="flex w-[130px] flex-col gap-1.5">
                        <div className="flex items-center justify-between rounded-md border border-slate-200 bg-white px-2.5 py-1.5 shadow-sm">
                            <span className="text-[10px] font-medium text-slate-600">Appt Booked</span>
                            <CheckCircle2 className="h-3 w-3 text-teal-500" />
                        </div>
                        <div className="flex items-center justify-between rounded-md border border-slate-200 bg-white px-2.5 py-1.5 shadow-sm">
                            <span className="text-[10px] font-medium text-slate-600">Slot Reopened</span>
                            <RefreshCw className="h-3 w-3 text-teal-500" />
                        </div>
                    </div>
                </div>

                {/* Exceptions */}
                <div className="flex flex-col items-center gap-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-700">Exceptions</span>
                    <div className="flex w-[130px] flex-col gap-1.5">
                        <div className="flex items-center justify-between rounded-md border border-amber-200 bg-amber-50 px-2.5 py-1.5 shadow-sm">
                            <span className="text-[10px] font-medium text-amber-800">Staff Handoff</span>
                            <CornerDownRight className="h-3 w-3 text-amber-600" />
                        </div>
                        <div className="flex items-center justify-between rounded-md border border-amber-200 bg-amber-50 px-2.5 py-1.5 shadow-sm">
                            <span className="text-[10px] font-medium text-amber-800">Reception Ring</span>
                            <PhoneCall className="h-3 w-3 text-amber-600" />
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
                        subtitle="Lola fits around the diary you already run. Your clinic sets the rules, approvals, and clinical boundaries — then Lola carries the routine booking load around them."
                        titleClassName="text-3xl md:text-4xl lg:text-[2.75rem] font-semibold leading-[1.1] tracking-tight text-slate-900"
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
