import Link from "next/link";
import { BrandMark, Logo } from "./Logo";

export function Footer() {
    return (
        <footer className="w-full bg-ink rounded-t-[4rem] text-peach pt-24 pb-12 px-6 md:px-16 mt-[-4rem] relative z-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-16 mb-20">

                <div className="flex flex-col gap-8 max-w-sm">
                    <Logo theme="light" className="w-40" />
                    <p className="font-outfit text-charcoal/80 text-lg">
                        One voice layer for operations that can&apos;t afford to miss a call.
                    </p>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10">
                            <div className="w-2.5 h-2.5 bg-mint rounded-full animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
                        </div>
                        <span className="font-jetbrains text-xs uppercase tracking-widest text-mint">
                            System Operational
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-12 font-outfit text-sm">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-jetbrains text-xs uppercase tracking-widest text-charcoal">Product</h4>
                        <Link href="#features" className="hover:text-coral transition-colors">Features</Link>
                        <Link href="#framework" className="hover:text-coral transition-colors">Framework</Link>
                        <Link href="#pricing" className="hover:text-coral transition-colors">Pricing</Link>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-jetbrains text-xs uppercase tracking-widest text-charcoal">Company</h4>
                        <Link href="/about" className="hover:text-coral transition-colors">About Us</Link>
                        <Link href="/contact" className="hover:text-coral transition-colors">Contact</Link>
                        <Link href="/careers" className="hover:text-coral transition-colors">Careers</Link>
                    </div>
                    <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
                        <h4 className="font-jetbrains text-xs uppercase tracking-widest text-charcoal">Legal</h4>
                        <Link href="/privacy" className="hover:text-coral transition-colors flex items-center gap-2">
                            Privacy Policy
                            <span className="bg-charcoal/20 px-2 py-0.5 rounded-full text-[10px]">POPIA</span>
                        </Link>
                        <Link href="/terms" className="hover:text-coral transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto border-t border-charcoal/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-jetbrains text-charcoal">
                <p>© {new Date().getFullYear()} Hey Lola Technologies. All rights reserved.</p>
                <BrandMark className="w-6 h-6 opacity-30 grayscale" />
            </div>
        </footer>
    );
}
