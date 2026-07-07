import type { Metadata } from "next";
import Link from "next/link";
import { CookiePreferences } from "@/components/analytics/CookieConsent";
import { LegalPage } from "@/components/legal/LegalPage";
import { createSiteMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createSiteMetadata({
  title: "Cookie Policy | R3WORKED",
  description:
    "The cookies r3worked.com uses, what they do, and how to change your consent choice.",
});

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      updated="7 July 2026"
      intro={
        <p>
          Cookies are small files stored on your device by websites you visit.
          We keep our use of them deliberately minimal: one essential item to
          remember your choice, and Google Analytics only if you say yes.
        </p>
      }
      sections={[
        {
          heading: "1. Essential storage",
          body: (
            <p>
              We store a single value in your browser (
              <code>r3w-cookie-consent</code>) to remember whether you accepted
              or declined analytics cookies. It contains no personal data and
              is required for the consent system to work, so it doesn&apos;t
              need consent itself.
            </p>
          ),
        },
        {
          heading: "2. Analytics cookies (optional)",
          body: (
            <>
              <p>
                If — and only if — you accept, we load Google Analytics to
                understand how visitors use the site: which pages are viewed,
                roughly where visitors come from, and what devices they use.
                Google Analytics sets cookies such as <code>_ga</code> and{" "}
                <code>_ga_*</code>, which typically last up to 2 years. IP
                addresses are anonymised.
              </p>
              <p>
                If you decline, no analytics scripts are loaded at all —
                nothing is set beyond the essential item above.
              </p>
            </>
          ),
        },
        {
          heading: "3. Change your choice",
          body: (
            <>
              <p>
                You can change your mind at any time. Use the control below to
                reset your choice — the consent banner will appear again.
              </p>
              <CookiePreferences />
              <p>
                You can also clear or block cookies through your browser
                settings at any time.
              </p>
            </>
          ),
        },
        {
          heading: "4. More information",
          body: (
            <p>
              For how we handle personal data more broadly, see our{" "}
              <Link className="underline" href="/privacy">
                Privacy Policy
              </Link>
              . Questions about cookies:{" "}
              <a className="underline" href="mailto:privacy@r3worked.com">
                privacy@r3worked.com
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
