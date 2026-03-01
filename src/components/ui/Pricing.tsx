import { Check } from "lucide-react";
import { SectionHeading } from "@/components/typography/SectionHeading";

const TIERS = [
    {
        name: "Starter",
        price: "R950",
        period: "/mo",
        description: "For local favorites.",
        features: ["500 AI minutes", "Basic Menu Knowledge", "SMS Confirmations"],
        highlighted: false,
        buttonText: "Start Trial"
    },
    {
        name: "Pro",
        badge: "POPULAR",
        price: "R2,500",
        period: "/mo",
        description: "For bustling venues.",
        features: ["Unlimited AI minutes", "Live Table Management", "Call Transcripts", "Priority Support"],
        highlighted: true,
        buttonText: "Get Started"
    },
    {
        name: "Enterprise",
        price: "Custom",
        period: "",
        description: "For restaurant groups.",
        features: ["Multi-location routing", "API Access", "Dedicated Success Manager"],
        highlighted: false,
        buttonText: "Contact Sales"
    }
];

export function Pricing() {
    return (
        <section id="pricing" className="section-offset w-full bg-peach/30 py-32 px-6 md:px-16 border-t border-charcoal/10 relative overflow-hidden">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="section-header mb-20 text-center">
                    <SectionHeading
                        title="Membership"
                        subtitle="Transparent pricing. Immediate ROI by reclaiming your host stand."
                        className="justify-items-center text-center"
                        titleClassName="type-h2-serif"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start lg:px-12">
                    {TIERS.map((tier) => (
                        <div
                            key={tier.name}
                            className={`relative bg-white rounded-[2rem] p-8 md:p-10 flex flex-col h-full border ${tier.highlighted
                                    ? "border-coral shadow-xl shadow-coral/10 scale-100 md:scale-105 z-10"
                                    : "border-stone-100 shadow-sm scale-100"
                                }`}
                        >
                            {tier.badge && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                    <span className="bg-coral text-white text-xs font-bold tracking-wider uppercase py-1 px-4 rounded-full shadow-md">
                                        {tier.badge}
                                    </span>
                                </div>
                            )}

                            <h3 className="font-outfit text-2xl font-bold mb-2 text-ink">
                                {tier.name}
                            </h3>
                            <p className="text-sm h-12 mb-6 text-charcoal">
                                {tier.description}
                            </p>

                            <div className="mb-8 border-b border-stone-100 pb-8">
                                <span className="text-5xl font-playfair italic font-medium text-ink">{tier.price}</span>
                                <span className="text-sm font-outfit text-charcoal">{tier.period}</span>
                            </div>

                            <ul className="flex-1 space-y-4 mb-8">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-sm font-jetbrains">
                                        <Check className="mr-3 flex-shrink-0 w-5 h-5 text-coral" />
                                        <span className="text-ink/90">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-4 rounded-full font-semibold text-sm tracking-wide transition-all ${tier.highlighted
                                        ? "bg-ink text-white hover:bg-ink/90 shadow-md"
                                        : "bg-peach text-ink hover:bg-coral hover:text-white border border-charcoal/10"
                                    }`}
                            >
                                {tier.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
