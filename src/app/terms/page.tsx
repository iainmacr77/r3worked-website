import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal/LegalPage";
import { createSiteMetadata } from "@/lib/site-metadata";

export const metadata: Metadata = createSiteMetadata({
  title: "Terms & Conditions | R3WORKED",
  description:
    "The terms and conditions for using r3worked.com and R3WORKED's Lead Rescue and Website Uplift services.",
});

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms & Conditions"
      updated="7 July 2026"
      intro={
        <p>
          These terms govern your use of r3worked.com and, unless we agree
          otherwise in writing, any services we provide. By using the site or
          engaging our services, you agree to them. Questions:{" "}
          <a className="underline" href="mailto:legal@r3worked.com">
            legal@r3worked.com
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
              Republic of Mauritius (&quot;R3WORKED&quot;, &quot;we&quot;,
              &quot;us&quot;).
            </p>
          ),
        },
        {
          heading: "2. Our services",
          body: (
            <>
              <p>We offer two families of services:</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  <strong>Lead Rescue</strong> — a monthly subscription
                  covering enquiry capture, owner alerts, lead logging and
                  review follow-up, with optional add-ons (such as AI call
                  answering) as they become available;
                </li>
                <li>
                  <strong>Website Uplift</strong> — one-off website refresh or
                  rebuild projects, with optional ongoing site care and
                  hosting.
                </li>
              </ul>
              <p>
                The specific scope, deliverables and price for your engagement
                are set out in the written proposal or order we agree with you,
                which takes precedence over the general descriptions on the
                website.
              </p>
            </>
          ),
        },
        {
          heading: "3. Prices and payment",
          body: (
            <>
              <p>
                Prices shown on the website are in pounds sterling and may
                change; the price agreed in your proposal is the one that
                applies to you. Unless stated otherwise, prices exclude any
                applicable taxes.
              </p>
              <p>
                Subscriptions are billed monthly in advance. One-off project
                fees are payable as set out in your proposal (typically a
                deposit up front with the balance on completion). If an invoice
                remains unpaid after reasonable reminders, we may suspend
                services until it is settled.
              </p>
            </>
          ),
        },
        {
          heading: "4. Subscriptions and cancellation",
          body: (
            <p>
              There is no long-term lock-in. You can cancel a subscription at
              any time by emailing{" "}
              <a className="underline" href="mailto:billing@r3worked.com">
                billing@r3worked.com
              </a>
              ; cancellation takes effect at the end of the current billing
              period, and we don&apos;t refund partial months. On cancellation
              we will, on request, export and hand over your lead data before
              deleting it.
            </p>
          ),
        },
        {
          heading: "5. Your responsibilities",
          body: (
            <>
              <p>To let us deliver the services, you agree to:</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  give us accurate information and timely access to anything we
                  reasonably need (domain, hosting, content, approvals);
                </li>
                <li>
                  make sure content you supply doesn&apos;t infringe anyone
                  else&apos;s rights;
                </li>
                <li>
                  use the services lawfully — including complying with data
                  protection and electronic marketing rules when contacting
                  your own customers.
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "6. Service availability",
          body: (
            <p>
              We aim to keep the services running smoothly and will make
              reasonable efforts to fix problems quickly, but we don&apos;t
              guarantee uninterrupted or error-free operation. Parts of the
              service depend on third-party providers (hosting, messaging,
              telephony) whose availability is outside our control. Features
              marked &quot;coming soon&quot; are not commitments to deliver by
              any particular date.
            </p>
          ),
        },
        {
          heading: "7. Intellectual property",
          body: (
            <>
              <p>
                The content of r3worked.com — text, design, graphics and code —
                belongs to us or our licensors, and you may not reproduce it
                commercially without permission.
              </p>
              <p>
                For client work: once you have paid in full, you own the final
                website content and design we deliver for you. We retain
                ownership of our underlying tools, templates, systems and
                know-how, and we may use them for other clients. You retain
                ownership of everything you supply to us.
              </p>
            </>
          ),
        },
        {
          heading: "8. Data protection",
          body: (
            <p>
              Our{" "}
              <Link className="underline" href="/privacy">
                Privacy Policy
              </Link>{" "}
              explains how we handle personal data collected through the
              website. Where we process your customers&apos; data on your
              behalf as part of the services (for example, leads captured
              through your website), you remain the controller of that data and
              we act on your instructions; we will enter into a data processing
              agreement with you on request.
            </p>
          ),
        },
        {
          heading: "9. Liability",
          body: (
            <>
              <p>
                Nothing in these terms excludes liability that cannot legally
                be excluded. Subject to that:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  we are not liable for indirect or consequential losses, loss
                  of profit, loss of business or loss of data;
                </li>
                <li>
                  our total liability arising out of the services in any
                  12-month period is capped at the amount you paid us in that
                  period;
                </li>
                <li>
                  we are not responsible for the content or performance of
                  third-party services we integrate with, or for results that
                  depend on factors outside our control (such as how many
                  enquiries your business receives).
                </li>
              </ul>
            </>
          ),
        },
        {
          heading: "10. Termination",
          body: (
            <p>
              Either party may end an engagement if the other materially
              breaches these terms and doesn&apos;t fix the breach within 14
              days of being asked in writing. On termination you pay for work
              done up to the termination date, and each party returns or
              deletes the other&apos;s confidential information on request.
            </p>
          ),
        },
        {
          heading: "11. Changes to these terms",
          body: (
            <p>
              We may update these terms from time to time; the version on this
              page applies from its &quot;last updated&quot; date. For active
              subscriptions, we&apos;ll give you reasonable notice of changes
              that materially affect you, and you can cancel before they take
              effect.
            </p>
          ),
        },
        {
          heading: "12. Governing law",
          body: (
            <p>
              These terms are governed by the laws of the Republic of
              Mauritius, and the courts of Mauritius have exclusive
              jurisdiction over any dispute arising from them — although
              we&apos;d much rather resolve any issue by talking first.
            </p>
          ),
        },
        {
          heading: "13. Contact",
          body: (
            <p>
              Legal:{" "}
              <a className="underline" href="mailto:legal@r3worked.com">
                legal@r3worked.com
              </a>
              . Billing:{" "}
              <a className="underline" href="mailto:billing@r3worked.com">
                billing@r3worked.com
              </a>
              . General:{" "}
              <a className="underline" href="mailto:info@r3worked.com">
                info@r3worked.com
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
