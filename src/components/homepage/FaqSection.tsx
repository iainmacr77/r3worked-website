"use client";

import { Accordion } from "radix-ui";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { WavyDivider } from "@/components/homepage/WavyDivider";

const FAQS = [
  {
    question: "Do I need a new website?",
    answer:
      "No. If your site already converts, Lead Rescue bolts straight on for £149/mo. We only recommend a refresh or rebuild if the site itself is losing you enquiries.",
  },
  {
    question: "What happens to my existing phone number?",
    answer:
      "Nothing — you keep it. When AI missed-call answering launches, it covers your existing number; there's no porting and no new number to hand out.",
  },
  {
    question: "Is the AI missed-call answering live yet?",
    answer:
      "Not yet — it's in development. Everything else — form capture, WhatsApp/email alerts, lead log, review follow-up — is live today.",
  },
  {
    question: "Is there a contract?",
    answer:
      "No. Lead Rescue is billed monthly with no fixed term — cancel any time.",
  },
  {
    question: "How do leads reach me?",
    answer:
      "Instantly, by WhatsApp and email, the moment someone submits your enquiry form — logged in your lead control centre so nothing gets missed.",
  },
  {
    question: "What's the free Lead Rescue Review?",
    answer:
      "A short, honest look at your current site and enquiry flow — where leads might be leaking and what to fix first. No obligation; request it via the form above.",
  },
] as const;

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function FaqSection() {
  return (
    <section
      id="faq"
      className="light-section-seam bg-[#F5F2EA] px-6 py-24 md:px-10 md:py-32 scroll-mt-20"
    >
      <WavyDivider />
      <div className="mx-auto max-w-[84rem]">
        <div className="mx-auto max-w-[48rem]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="type-eyebrow text-[#A87C4F]"
          >
            FAQ
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="mt-6 type-section-heading-serif text-[#161616]"
          >
            Questions, answered.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="type-support mt-6 text-[#2A2A2A]/70"
          >
            The things people usually ask before they get in touch.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.25, duration: 0.6, ease: EASE }}
            className="mt-14"
          >
            <Accordion.Root type="single" collapsible className="w-full">
              {FAQS.map((faq) => (
                <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </Accordion.Root>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <Accordion.Item
      value={question}
      className="border-t border-[#161616]/6 last:border-b"
    >
      <Accordion.Header>
        <Accordion.Trigger className="group flex w-full items-center justify-between gap-6 py-6 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C97C2E]/30">
          <span className="text-[1.05rem] font-semibold leading-snug text-[#161616]">
            {question}
          </span>
          <ChevronDown
            size={18}
            strokeWidth={2.25}
            className="shrink-0 text-[#A87C4F] transition-transform duration-300 group-data-[state=open]:rotate-180"
          />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
        <p className="type-body-sm max-w-[56ch] pb-6 pr-10 text-[#2A2A2A]/78">
          {answer}
        </p>
      </Accordion.Content>
    </Accordion.Item>
  );
}
