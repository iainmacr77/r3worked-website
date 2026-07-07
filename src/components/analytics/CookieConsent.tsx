"use client";

import Link from "next/link";
import Script from "next/script";
import { useEffect, useState, useSyncExternalStore } from "react";
import { motion } from "framer-motion";

const CONSENT_KEY = "r3w-cookie-consent";
const CONSENT_EVENT = "r3w-consent-change";
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// "unknown" only occurs during SSR/hydration, before localStorage is readable.
type Consent = "accepted" | "rejected" | "none" | "unknown";

function subscribe(callback: () => void) {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

function getSnapshot(): Consent {
  const value = window.localStorage.getItem(CONSENT_KEY);
  return value === "accepted" || value === "rejected" ? value : "none";
}

function getServerSnapshot(): Consent {
  return "unknown";
}

function useConsent() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

function writeConsent(value: "accepted" | "rejected" | null) {
  if (value === null) {
    window.localStorage.removeItem(CONSENT_KEY);
  } else {
    window.localStorage.setItem(CONSENT_KEY, value);
  }
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

function GoogleAnalytics() {
  if (!GA_ID) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}

/**
 * Holds the banner back until the hero has scrolled out of view, so the
 * opening animation plays uncovered. Pages without a #hero (e.g. /book,
 * /cookies) show the banner straight away. Analytics remain consent-gated
 * regardless of when the banner appears.
 */
function useHeroPassed() {
  const [passed, setPassed] = useState(false);

  useEffect(() => {
    const check = () => {
      const hero = document.getElementById("hero");
      if (!hero || hero.getBoundingClientRect().bottom <= 0) {
        setPassed(true);
        window.removeEventListener("scroll", check);
      }
    };
    window.addEventListener("scroll", check, { passive: true });
    // Initial check runs in a frame callback rather than the effect body so
    // no state is set synchronously during the effect (react-hooks lint).
    const frame = requestAnimationFrame(check);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", check);
    };
  }, []);

  return passed;
}

export function CookieConsent() {
  const consent = useConsent();
  const heroPassed = useHeroPassed();

  return (
    <>
      {consent === "accepted" ? <GoogleAnalytics /> : null}

      {consent === "none" && heroPassed ? (
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 md:px-6 md:pb-6"
        >
          <div className="mx-auto flex max-w-[46rem] flex-col gap-4 rounded-2xl border border-[#161616]/10 bg-[#FFFDF8] p-5 shadow-[0_12px_40px_rgba(22,22,22,0.14)] sm:flex-row sm:items-center sm:gap-6 sm:p-6">
            <p className="flex-1 text-[0.85rem] leading-relaxed text-[#2A2A2A]/75">
              We use one essential cookie plus optional analytics cookies to
              see how the site is used. No ads, no selling data.{" "}
              <Link href="/cookies" className="underline hover:text-[#161616]">
                Cookie Policy
              </Link>
            </p>
            <div className="flex shrink-0 items-center gap-3">
              <button
                onClick={() => writeConsent("rejected")}
                className="rounded-full border border-[#161616]/15 px-5 py-2.5 text-[0.82rem] font-semibold text-[#2A2A2A]/70 transition-colors hover:border-[#161616]/30 hover:text-[#161616]"
              >
                Decline
              </button>
              <button
                onClick={() => writeConsent("accepted")}
                className="rounded-full bg-[#C97C2E] px-5 py-2.5 text-[0.82rem] font-semibold text-white transition-colors hover:bg-[#A87C4F]"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </>
  );
}

export function CookiePreferences() {
  const consent = useConsent();

  if (consent === "unknown") return null;

  const reset = () => {
    writeConsent(null);
    // Reload so analytics scripts are added or removed cleanly.
    window.location.reload();
  };

  return (
    <div className="mt-2 flex flex-col items-start gap-3 rounded-xl border border-[#161616]/10 bg-[#FFFDF8] p-5">
      <p className="text-[0.9rem] text-[#2A2A2A]/75">
        Your current choice:{" "}
        <strong className="text-[#161616]">
          {consent === "accepted"
            ? "analytics cookies accepted"
            : consent === "rejected"
              ? "analytics cookies declined"
              : "not set yet"}
        </strong>
      </p>
      <button
        onClick={reset}
        className="rounded-full border border-[#161616]/15 px-5 py-2 text-[0.82rem] font-semibold text-[#2A2A2A]/70 transition-colors hover:border-[#161616]/30 hover:text-[#161616]"
      >
        Change my choice
      </button>
    </div>
  );
}
