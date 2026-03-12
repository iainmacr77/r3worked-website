import { cn } from "@/lib/utils";

export function MedicalCapacityFeature() {
    const APPOINTMENTS = [
        { id: "08:00", title: "Booked", detail: "Confirmed", status: "booked" as const },
        { id: "08:40", title: "Open slot", detail: "Awaiting fill", status: "open" as const },
        { id: "09:20", title: "Recovered", detail: "Rebooked from waitlist", status: "recovered" as const },
        { id: "10:00", title: "Booked", detail: "Confirmed", status: "booked" as const },
        { id: "10:40", title: "Booked", detail: "Confirmed", status: "booked" as const },
        { id: "11:20", title: "Recovered", detail: "Filled after hours", status: "recovered" as const },
        { id: "12:00", title: "Blocked", detail: "Lunch break", status: "blocked" as const },
        { id: "12:40", title: "Open slot", detail: "Awaiting fill", status: "open" as const },
        { id: "13:20", title: "Booked", detail: "Confirmed", status: "booked" as const },
    ];

    return (
        <div className="relative flex h-[460px] flex-col overflow-hidden rounded-[2rem] bg-[#101823] p-6 shadow-[0_28px_72px_rgba(2,6,23,0.5)] ring-1 ring-white/10 lg:h-full lg:p-7">
            <div className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-[rgba(255,245,240,0.08)] blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-white/[0.035]" />

            <div className="relative z-10">
                <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                        <p className="font-jetbrains text-[10px] uppercase tracking-[0.16em] text-white/48">
                            CLINIC DIARY
                        </p>
                        <h3 className="mt-2 font-outfit text-xl font-semibold text-white">Morning clinic snapshot</h3>
                    </div>
                    <div className="flex items-center space-x-2 rounded-full bg-charcoal/40 px-3 py-1.5 ring-1 ring-white/5">
                        <div className="h-2 w-2 rounded-full bg-[#9fd8cb] animate-pulse" />
                        <span className="text-[10px] font-jetbrains uppercase tracking-widest text-[#FFF5F0]">Live</span>
                    </div>
                </div>
                <p className="max-w-[34ch] text-sm leading-relaxed text-white/72">
                    Waitlist and after-hours demand help refill cancelled slots.
                </p>
            </div>

            <div className="relative mt-5 flex-1 rounded-2xl border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.05))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_18px_40px_rgba(5,10,18,0.18)] ring-1 ring-white/8 backdrop-blur-md">
                <div className="mb-4 flex items-center justify-between gap-3 border-b border-white/8 pb-3">
                    <div>
                        <p className="font-jetbrains text-[10px] uppercase tracking-[0.14em] text-white/42">WEDNESDAY</p>
                        <p className="mt-1 text-sm font-medium text-white/84">Dr Moore - Morning clinic</p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[10px] uppercase tracking-[0.14em] text-white/58">
                        LIVE DIARY
                    </div>
                </div>
                <div className="mb-3 flex flex-wrap gap-2">
                    {[
                        "Booked",
                        "Open slot",
                        "Recovered",
                        "Blocked",
                    ].map((item, index) => (
                        <div
                            key={item}
                            className={cn(
                                "rounded-full px-2.5 py-1 text-[10px] uppercase tracking-[0.12em]",
                                index === 0
                                    ? "border border-white/10 bg-white/[0.07] text-white/62"
                                    : index === 1
                                        ? "border border-slate-300/10 bg-[#172333]/65 text-white/56"
                                        : index === 2
                                            ? "border border-[#a9ddd2]/24 bg-[#a9ddd2]/[0.12] text-[#ecf9f5]"
                                            : "border border-[#c9b7a8]/22 bg-[#b09f91]/14 text-[#f4e9df]"
                            )}
                        >
                            {item}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {APPOINTMENTS.map((appt) => {
                        const isBooked = appt.status === "booked";
                        const isRecovered = appt.status === "recovered";
                        const isBlocked = appt.status === "blocked";

                        return (
                            <div
                                key={appt.id}
                                className={cn(
                                    "relative flex min-h-[92px] flex-col justify-between rounded-xl border p-3 text-left font-jetbrains shadow-[inset_0_1px_0_rgba(255,255,255,0.12)]",
                                    isBooked
                                        ? "border-white/10 bg-white/[0.09] text-[#FFF5F0]"
                                        : isRecovered
                                            ? "border-[#a9ddd2]/24 bg-[#a9ddd2]/[0.16] text-[#f4fffc] shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_8px_20px_rgba(53,112,97,0.08)]"
                                        : isBlocked
                                            ? "border-[#c9b7a8]/24 bg-[#b09f91]/16 text-[#fff5f0]"
                                            : "border-slate-300/10 bg-[#172333]/65 text-[#FFF5F0]/86"
                                )}
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <span className="text-[10px] font-medium tracking-[0.08em] opacity-78">
                                        {appt.id}
                                    </span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[10px] uppercase tracking-[0.14em] opacity-74">
                                        {appt.title}
                                    </span>
                                    <span className="text-[11px] leading-snug opacity-70">
                                        {appt.detail}
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
