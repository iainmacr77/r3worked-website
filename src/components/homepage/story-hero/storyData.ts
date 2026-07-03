export const BEAT1 = {
  eyebrow: "LEAD RESCUE FOR TRADES & LOCAL SERVICE BUSINESSES",
  heading: "Stop losing enquiries.",
  support:
    "Missed calls, slow replies and buried web forms turn serious jobs into someone else's booking.",
  primaryCta: "Stop losing enquiries",
  secondaryCta: "See how it works",
} as const;

export const BEAT1_LOSSES = {
  feedLabel: "Incoming enquiries",
  statusLabel: "Unprotected",
  tag: "Example scenario",
  counterLabel: "Walked away this month",
  footnote: "Every one of these was a real job for someone else.",
  leads: [
    {
      job: "Roof repair",
      area: "M20, Manchester",
      value: 1400,
      channel: "call",
      lostVia: "Rang twice. No answer.",
    },
    {
      job: "Kitchen extension",
      area: "SK8, Cheadle",
      value: 12500,
      channel: "form",
      lostVia: "Form sat unread for two days.",
    },
    {
      job: "Boiler replacement",
      area: "M33, Sale",
      value: 2300,
      channel: "message",
      lostVia: "WhatsApp seen. Never answered.",
    },
  ],
} as const;

export const BEAT2_FORM = {
  eyebrow: "STEP 01",
  heading: "Web enquiries captured the second they land",
  support:
    "Every quote form submission is turned into a structured lead and pushed instantly to the business owner.",
  fields: [
    { label: "Name", value: "James Whitfield" },
    { label: "Project", value: "Roof repair / Kitchen extension / Solar install" },
    { label: "Postcode", value: "M20, Manchester" },
    { label: "Message", value: "Need a quote this week…" },
  ],
  leadCard: {
    title: "James Whitfield",
    meta: "Roof repair · M20, Manchester",
    status: "New enquiry",
  },
  alertCaption: "Alert on its way to the owner",
} as const;

export const BEAT3_ALERT = {
  eyebrow: "STEP 02",
  heading: "The owner gets alerted immediately",
  support:
    "WhatsApp and email alerts make sure new enquiries are seen while the customer is still warm.",
  origin: {
    label: "Lead captured",
    name: "James Whitfield",
    meta: "Roof repair · M20, Manchester",
  },
  notification: {
    label: "WhatsApp alert sent",
    title: "New roof repair enquiry — M20 Manchester",
    action: "Open lead details",
  },
  email: {
    label: "Email alert sent",
    subject: "New enquiry: Roof repair, M20",
  },
} as const;

export const BEAT4_MISSED_CALL = {
  eyebrow: "STEP 03",
  heading: "Missed calls should not become missed jobs",
  support:
    "AI missed-call rescue answers, captures the job details, and sends the owner a clean summary.",
  caller: "New Customer",
  transcript:
    "Hey, got a leak on the extension roof in Manchester M20, need a quote this week please…",
  comingSoon: {
    badge: "COMING SOON",
    title: "AI missed-call rescue",
    answerLine: "AI picks up within two rings",
    steps: [
      "Call answered",
      "Short summary generated",
      "WhatsApp/email alert sent",
      "Lead logged",
    ],
  },
} as const;

export const BEAT5_DASHBOARD = {
  eyebrow: "STEP 04",
  heading: "Every enquiry logged. Every next step visible",
  support:
    "A simple lead log shows what came in, who was notified, and what needs to happen next.",
  timeline: ["Captured (Web)", "WhatsApp alerted", "Follow-up ready"],
  tiles: [
    { label: "Source", value: "Web form" },
    { label: "Status", value: "Alert sent" },
    { label: "Next action", value: "Call back" },
    { label: "Owner notified", value: "Yes" },
    { label: "Follow-up", value: "Ready" },
  ],
} as const;

export const BEAT6_REVIEW = {
  eyebrow: "STEP 05",
  heading: "Finished jobs become five-star momentum",
  support:
    "After the job, automated follow-up helps happy customers turn into Google reviews.",
  prompt: "How did we do?",
  positive: "Great job, thanks!",
  reviewPrompt: "Would you mind leaving a Google review?",
} as const;
