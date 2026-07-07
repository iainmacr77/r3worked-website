import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal/LegalPage";
import { createSiteMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createSiteMetadata({
  title: "Privacy Policy | R3WORKED",
  description:
    "How R3WORKED (a trading name of Auric Consulting Limited) collects, uses and protects your personal data.",
});

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="7 July 2026"
      intro={
        <p>
          This policy explains what personal data we collect when you use
          r3worked.com or our services, why we collect it, and the choices you
          have. We keep it in plain English — if anything is unclear, email{" "}
          <a className="underline" href="mailto:privacy@r3worked.com">
            privacy@r3worked.com
          </a>
          .
        </p>
      }
      sections={[
        {
          heading: "1. Who we are",
          body: (
            <p>
              R3WORKED is a trading name of Auric Consulting Limited (company
              no. 143291), registered at Level 4, SBI Tower, Cybercity, Ebene,
              Republic of Mauritius. Auric Consulting Limited is the data
              controller for personal data collected through this website. For
              anything relating to your personal data, contact{" "}
              <a className="underline" href="mailto:privacy@r3worked.com">
                privacy@r3worked.com
              </a>
              .
            </p>
          ),
        },
        {
          heading: "2. What we collect",
          body: (
            <>
              <p>
                <strong>Enquiry details you give us.</strong> When you submit
                our enquiry or review-request form we collect your name, phone
                or WhatsApp number, your website address (optional) and any
                message you include.
              </p>
              <p>
                <strong>Communications.</strong> If you contact us by email or
                WhatsApp, we keep the correspondence so we can respond and keep
                track of your enquiry.
              </p>
              <p>
                <strong>Analytics data.</strong> With your consent, we use
                Google Analytics to understand how visitors use the site —
                pages viewed, approximate location, device and browser type.
                See our{" "}
                <Link className="underline" href="/cookies">
                  Cookie Policy
                </Link>{" "}
                for details. We do not load analytics unless you accept
                cookies.
              </p>
            </>
          ),
        },
        {
          heading: "3. How we use your data",
          body: (
            <>
              <p>We use personal data to:</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>respond to your enquiry and carry out a Lead Rescue Review;</li>
                <li>provide and administer our services if you become a client;</li>
                <li>send service-related messages (not marketing spam);</li>
                <li>understand and improve how the website performs; and</li>
                <li>comply with legal obligations.</li>
              </ul>
              <p>
                We do not sell your personal data, and we do not use it for
                third-party advertising.
              </p>
            </>
          ),
        },
        {
          heading: "4. Legal bases",
          body: (
            <p>
              Where UK or EU data protection law applies to you, we rely on:
              your <strong>consent</strong> (analytics cookies);{" "}
              <strong>steps taken at your request before a contract</strong>{" "}
              (responding to enquiries and running your free review);{" "}
              <strong>performance of a contract</strong> (delivering services
              to clients); and our <strong>legitimate interests</strong> in
              running and improving our business, where those interests are not
              outweighed by your rights.
            </p>
          ),
        },
        {
          heading: "5. Who we share data with",
          body: (
            <>
              <p>
                We share data only with service providers who help us run the
                website and our services, under contracts that restrict how
                they can use it:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>our website hosting provider;</li>
                <li>
                  our transactional email provider (used to deliver enquiry
                  notifications);
                </li>
                <li>Google (analytics, only if you consent to cookies).</li>
              </ul>
              <p>
                We may also disclose data where required by law or to protect
                our legal rights.
              </p>
            </>
          ),
        },
        {
          heading: "6. International transfers",
          body: (
            <p>
              We are based in Mauritius, and our service providers may process
              data in the United Kingdom, the European Union, the United States
              or elsewhere. Mauritius holds a data protection framework under
              the Data Protection Act 2017, and where we transfer data of UK or
              EU individuals we take reasonable steps — such as contractual
              safeguards with our providers — to protect it to a comparable
              standard.
            </p>
          ),
        },
        {
          heading: "7. How long we keep data",
          body: (
            <p>
              We keep enquiry data for as long as needed to handle your enquiry
              and, if you become a client, for the duration of our relationship
              plus a reasonable period afterwards for legal and accounting
              purposes. If you enquire but don&apos;t become a client, we
              delete or anonymise your details within 24 months. You can ask us
              to delete your data sooner at any time.
            </p>
          ),
        },
        {
          heading: "8. Your rights",
          body: (
            <>
              <p>
                Depending on where you live, you may have the right to access,
                correct, delete or receive a copy of your personal data, to
                object to or restrict certain processing, and to withdraw
                consent at any time (including cookie consent — see the{" "}
                <Link className="underline" href="/cookies">
                  Cookie Policy
                </Link>
                ).
              </p>
              <p>
                To exercise any of these rights, email{" "}
                <a className="underline" href="mailto:privacy@r3worked.com">
                  privacy@r3worked.com
                </a>
                . We aim to respond within one month. UK and EU residents also
                have the right to complain to their local supervisory authority
                (in the UK, the ICO).
              </p>
            </>
          ),
        },
        {
          heading: "9. Cookies",
          body: (
            <p>
              We use a small number of cookies — one essential cookie to
              remember your consent choice, and Google Analytics cookies only
              if you accept them. Full details, including how to change your
              choice, are in our{" "}
              <Link className="underline" href="/cookies">
                Cookie Policy
              </Link>
              .
            </p>
          ),
        },
        {
          heading: "10. Changes to this policy",
          body: (
            <p>
              We may update this policy from time to time. We&apos;ll change
              the &quot;last updated&quot; date above and, for significant
              changes, highlight them on the site.
            </p>
          ),
        },
        {
          heading: "11. Contact",
          body: (
            <p>
              Privacy questions:{" "}
              <a className="underline" href="mailto:privacy@r3worked.com">
                privacy@r3worked.com
              </a>
              . General enquiries:{" "}
              <a className="underline" href="mailto:info@r3worked.com">
                info@r3worked.com
              </a>
              . Post: Auric Consulting Limited, Level 4, SBI Tower, Cybercity,
              Ebene, Republic of Mauritius.
            </p>
          ),
        },
      ]}
    />
  );
}
