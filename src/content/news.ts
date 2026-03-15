export type NewsArticle = {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  description: string;
  intro: string;
  body: string[];
  keyPoints: string[];
};

export const newsArticles: NewsArticle[] = [
  {
    slug: "introducing-lola-medical",
    category: "Product",
    date: "March 2026",
    title: "Introducing Lola Medical: voice booking built for medical practices",
    excerpt:
      "The same Hey Lola voice layer now handles bookings, reschedules, and non-clinical front-desk pressure for medical practices.",
    description:
      "Introducing Hey Lola Medical, a voice booking layer for medical practices that keeps routine scheduling with Lola and clinical matters with staff.",
    intro:
      "Hey Lola Medical extends the same operational voice layer already proven in restaurants into clinics and practices where routine demand lands heavily on reception.",
    body: [
      "The brief was straightforward: reduce routine phone pressure without pretending clinical work can be automated away. Lola now handles bookings, reschedules, cancellations, and non-clinical questions in a voice flow that stays inside the clinic's real operating boundaries.",
      "That boundary matters. The product is designed to capture intent, move scheduling work forward, and step back the moment a conversation becomes clinical or judgment-based. The result is a calmer front desk, cleaner diary movement, and a more honest use of automation.",
      "Medical is not a branding detour. It is proof that the Hey Lola model can transfer across operational environments where access, timing, and trust matter just as much as conversation quality.",
    ],
    keyPoints: [
      "Routine scheduling stays with Lola.",
      "Clinical questions route back to staff.",
      "Reception gains capacity without a rip-and-replace workflow.",
    ],
  },
  {
    slug: "after-hours-capture-and-hidden-demand",
    category: "Operations",
    date: "February 2026",
    title: "How after-hours capture recovers demand you never see",
    excerpt:
      "Most teams only measure the calls they answer. The more revealing metric is the booking intent that arrives when nobody is available to catch it.",
    description:
      "A look at how after-hours voice capture helps Hey Lola recover booking demand that would otherwise disappear into voicemail, missed calls, or delayed follow-up.",
    intro:
      "Operational demand does not respect opening hours. A meaningful share of real intent arrives before teams are ready, after they have gone home, or while the desk is already overloaded.",
    body: [
      "That creates a blind spot. Traditional reporting tells teams how many calls were handled, but not how much intent was abandoned because the line rang out, went to voicemail, or landed at the wrong moment. After-hours capture closes that gap.",
      "Lola answers immediately, identifies the request, and carries routine booking work as far as it can within the agreed rules. When a request cannot be completed safely in the moment, the handoff is logged cleanly so staff begin the next shift with context rather than guesswork.",
      "For operators, the value is not novelty. It is visibility. Once intent is captured consistently, teams can see when demand actually appears, where callers drop off, and how much recoverable revenue or capacity was previously invisible.",
    ],
    keyPoints: [
      "Missed demand becomes measurable.",
      "Staff inherit a clean queue instead of voicemail fragments.",
      "The same logic applies across restaurants and medical.",
    ],
  },
  {
    slug: "the-voice-layer-thesis",
    category: "Platform",
    date: "January 2026",
    title: "The voice layer thesis: why we started with restaurants",
    excerpt:
      "Restaurants were the first live environment because the operational pain is obvious: every missed call costs service quality, revenue, or both.",
    description:
      "Why Hey Lola started in restaurants and how that decision shaped a broader voice layer for real-world operations.",
    intro:
      "Hey Lola did not begin as a generic AI interface. It began with one operational observation: live demand still reaches many businesses by phone, and most teams are forced to absorb that pressure manually.",
    body: [
      "Restaurants made the thesis visible quickly. Calls arrive during service, callers need answers in the moment, and small handling errors have immediate consequences for revenue and guest experience. If a voice layer could behave reliably there, it would have earned the right to expand.",
      "That expansion was never about chasing categories. It was about proving that the same operating model could hold in other environments where routine requests are high volume, timing matters, and escalation needs to stay disciplined.",
      "Starting with restaurants gave Hey Lola a demanding first use case. It also clarified the broader ambition: one serious voice layer for real-world operations, deployed where live demand is too important to leave to voicemail or staff interruption.",
    ],
    keyPoints: [
      "Restaurants exposed the operational problem clearly.",
      "The core challenge is reliable execution, not speech generation.",
      "The parent brand now carries across multiple live verticals.",
    ],
  },
];

export function getNewsArticle(slug: string) {
  return newsArticles.find((article) => article.slug === slug);
}
