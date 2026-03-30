import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  Clock3,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  collinsAfterPreviewImagePaths,
  type CollinsAfterPreviewImages,
} from "./collinsPreviewImages";

type CollinsAfterFullPreviewProps = {
  className?: string;
  imagePaths?: Partial<CollinsAfterPreviewImages>;
};

type TrustSignal = {
  label: string;
  icon: LucideIcon;
};

type Service = {
  number: string;
  title: string;
  description: string;
};

type Project = {
  title: string;
  location: string;
  category: string;
  image: keyof CollinsAfterPreviewImages;
  className: string;
  titleClassName: string;
};

type QuoteFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
  accent?: "whatsapp";
  linkLabel?: string;
};

const navLinks = ["Services", "Projects", "Process", "About"];

const trustSignals: TrustSignal[] = [
  { label: "TrustMark Approved", icon: BadgeCheck },
  { label: "Fully Insured", icon: ShieldCheck },
  { label: "30+ Years in Manchester", icon: Clock3 },
  { label: "Warranty-Backed Structural Work", icon: BadgeCheck },
];

const heroCredibilityPoints = [
  "Fully Insured",
  "Federation of Master Builders Member",
  "Greater Manchester",
];

const services: Service[] = [
  {
    number: "01",
    title: "Extensions",
    description:
      "Side-return, rear, and wrap-around extensions designed to flow perfectly with your original home.",
  },
  {
    number: "02",
    title: "Renovations",
    description:
      "Whole-house transformations, period property restoration, and modern open-plan reconfigurations.",
  },
  {
    number: "03",
    title: "Kitchens & Bathrooms",
    description:
      "High-end bespoke kitchen design and structural expansion for the ultimate family gathering space.",
  },
  {
    number: "04",
    title: "Bespoke Joinery",
    description:
      "Custom-built timber elements, from grand staircases to integrated storage and exterior wood detailing.",
  },
  {
    number: "05",
    title: "Roofing & Exteriors",
    description:
      "Expert roofing, external rendering, and architectural landscaping to complete your home's aesthetic.",
  },
  {
    number: "06",
    title: "New Build Projects",
    description:
      "Constructing bespoke premium homes from the ground up with modern efficiency and timeless style.",
  },
];

const projects: Project[] = [
  {
    title: "The Glass Pavilion Extension",
    location: "Altrincham, Cheshire",
    category: "Extension",
    image: "projectGlassPavilion",
    className: "md:col-span-8",
    titleClassName: "text-3xl",
  },
  {
    title: "Victorian Heritage Restoration",
    location: "Didsbury, Manchester",
    category: "Renovation",
    image: "projectVictorian",
    className: "md:col-span-4",
    titleClassName: "text-2xl",
  },
  {
    title: "Modernist Detached Home",
    location: "Bramhall, Cheshire",
    category: "New Build",
    image: "projectModernist",
    className: "md:col-span-4",
    titleClassName: "text-2xl",
  },
  {
    title: "Open-Plan Living Transformation",
    location: "Hale, Cheshire",
    category: "Renovation",
    image: "projectOpenPlan",
    className: "md:col-span-8",
    titleClassName: "text-3xl",
  },
];

const quoteFeatures: QuoteFeature[] = [
  {
    title: "Fast Response Promise",
    description: "We review all enquiries and respond within 1 business day.",
    icon: Sparkles,
  },
  {
    title: "Fixed-fee Honesty",
    description: "No hidden costs. Detailed, itemised quotes you can rely on.",
    icon: ShieldCheck,
  },
  {
    title: "WhatsApp Photo Estimate",
    description:
      "Send us photos of your space for a fast, preliminary ballpark estimate.",
    icon: MessageCircle,
    accent: "whatsapp",
    linkLabel: "Message our surveyor now",
  },
];

const expertiseLinks = [
  "Home Extensions",
  "Victorian Renovations",
  "Bespoke Kitchens",
  "New Build Projects",
];

const companyLinks = [
  "Our Process",
  "Sustainability",
  "Privacy Policy",
  "Terms of Service",
];

const socialLinks = ["LinkedIn", "Instagram"];

export function CollinsAfterFullPreview({
  className,
  imagePaths,
}: CollinsAfterFullPreviewProps) {
  const images = { ...collinsAfterPreviewImagePaths, ...imagePaths };

  return (
    <div
      className={cn("w-full overflow-hidden bg-white text-slate-900", className)}
      style={{
        fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <header className="sticky top-0 z-20 border-b border-slate-100 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-8 py-6">
          <div
            className="text-2xl font-bold uppercase tracking-tighter text-blue-950"
            style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
          >
            Collins Construction
          </div>

          <nav
            className="hidden items-center space-x-10 md:flex"
            aria-label="Collins Construction after preview navigation"
          >
            {navLinks.map((link) => (
              <span
                key={link}
                className="font-semibold tracking-tight text-slate-600"
                style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
              >
                {link}
              </span>
            ))}
          </nav>

          <div className="flex items-center space-x-6">
            <span
              className="hidden font-bold tracking-tight text-blue-950 lg:block"
              style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
            >
              0161 123 4567
            </span>
            <PreviewButton variant="primary">Get a Quote</PreviewButton>
          </div>
        </div>
      </header>

      <main className="pt-6">
        <section className="mx-auto max-w-screen-2xl px-4 py-8 md:px-8">
          <div className="relative flex min-h-[780px] items-center overflow-hidden rounded-xl shadow-2xl">
            <div className="absolute inset-0 z-0">
              <img
                alt="High-end residential project by Collins Construction"
                className="h-full w-full object-cover"
                src={images.hero}
                decoding="async"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,30,64,0.85)_0%,rgba(0,30,64,0.4)_60%,rgba(0,30,64,0.1)_100%)]" />
            </div>

            <div className="relative z-10 w-full p-8 text-white md:w-2/3 md:p-20 lg:w-3/5">
              <div className="mb-8 flex w-fit items-center space-x-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-lg">
                <div className="flex items-center text-yellow-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span
                  className="text-sm font-bold tracking-tight"
                  style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
                >
                  4.9/5 from 120+ Google Reviews
                </span>
              </div>

              <h1
                className="mb-8 text-5xl font-black leading-[1.1] tracking-tight md:text-7xl"
                style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
              >
                Extensions and renovations done properly.
              </h1>
              <p className="mb-12 max-w-xl text-xl font-light leading-relaxed text-white/90 md:text-2xl">
                High-quality construction for Greater Manchester homes that deserve
                better. Built with pride by local specialists.
              </p>

              <div className="flex flex-wrap gap-5">
                <PreviewButton variant="heroPrimary">Get a Quote</PreviewButton>
                <PreviewButton variant="heroSecondary">View Projects</PreviewButton>
                <PreviewButton variant="whatsapp">
                  <MessageCircle className="h-5 w-5" aria-hidden="true" />
                  <span>WhatsApp Photo Estimate</span>
                </PreviewButton>
              </div>

              <div className="mt-16 flex flex-wrap gap-10 text-xs font-bold uppercase tracking-[0.15em] text-white/70">
                {heroCredibilityPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <BadgeCheck className="h-5 w-5 text-blue-300" aria-hidden="true" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-100 bg-white px-8 py-12">
          <div className="mx-auto max-w-screen-2xl">
            <div className="flex flex-wrap items-center justify-center gap-8 md:justify-between md:gap-4">
              {trustSignals.map((signal) => {
                const Icon = signal.icon;

                return (
                  <div key={signal.label} className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-blue-950" aria-hidden="true" />
                    <span
                      className="text-sm font-bold uppercase tracking-widest text-blue-950"
                      style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
                    >
                      {signal.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-2xl bg-white px-8 pb-20 pt-32">
          <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-12">
            <div className="lg:col-span-5 lg:py-10">
              <span
                className="mb-6 block text-sm font-bold uppercase tracking-[0.2em] text-slate-400"
                style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
              >
                Our Approach
              </span>
              <h2
                className="mb-8 text-4xl font-black leading-tight text-blue-950 md:text-5xl"
                style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
              >
                Precision Construction for the Modern Home
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-slate-600">
                Our team specializes in the intersection of traditional masonry and
                modern architectural detailing, ensuring uncompromising quality in
                every joint and finish.
              </p>
              <p className="mb-10 text-lg leading-relaxed text-slate-600">
                We provide full project management from absolute transparency in the
                initial review to our dedicated site managers who ensure a seamless
                transition between trades.
              </p>
              <PreviewButton variant="primaryLarge">See Our Work</PreviewButton>
            </div>

            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img
                  alt="High-end residential interior detailing"
                  className="h-[600px] w-full object-cover"
                  src={images.craftsmanship}
                  decoding="async"
                  loading="lazy"
                />
                <div className="absolute bottom-10 right-10 bg-blue-950 p-10 text-white shadow-2xl">
                  <div className="flex items-baseline gap-2">
                    <p
                      className="text-5xl font-black"
                      style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
                    >
                      30+
                    </p>
                    <p
                      className="text-lg font-bold"
                      style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
                    >
                      Years
                    </p>
                  </div>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] opacity-60">
                    500+ Projects Delivered
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 px-8 py-32">
          <div className="mx-auto max-w-screen-2xl">
            <div className="mb-20 text-center">
              <h2
                className="mb-6 text-4xl font-black text-blue-950 md:text-5xl"
                style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
              >
                Residential Building Specialists
              </h2>
              <p className="mx-auto max-w-2xl text-xl text-slate-600">
                From the first brick to the final brushstroke, we handle every
                stage of your home&apos;s transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-px bg-slate-200 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="group bg-white p-12 transition-all duration-500 hover:bg-blue-950"
                >
                  <span
                    className="mb-6 block text-xs font-black text-slate-400 group-hover:text-white/40"
                    style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
                  >
                    {service.number}
                  </span>
                  <h3
                    className="mb-4 text-2xl font-bold text-blue-950 group-hover:text-white"
                    style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
                  >
                    {service.title}
                  </h3>
                  <p className="mb-8 leading-relaxed text-slate-600 group-hover:text-white/70">
                    {service.description}
                  </p>
                  <ArrowRight className="h-5 w-5 text-blue-950 transition-transform group-hover:translate-x-2 group-hover:text-white" />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-8 py-32">
          <div className="mx-auto max-w-screen-2xl">
            <div className="mb-20 text-center">
              <h2
                className="mb-6 text-4xl font-black text-blue-950 md:text-5xl"
                style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
              >
                Portfolio of Calibre
              </h2>
              <p className="text-xl text-slate-600">
                A selection of recent projects across Greater Manchester and
                Cheshire.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:auto-rows-[1fr] md:h-[900px]">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className={cn(
                    "group relative cursor-pointer overflow-hidden rounded-lg",
                    project.className
                  )}
                >
                  <img
                    alt={project.title}
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                    src={images[project.image]}
                    decoding="async"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 flex translate-y-4 flex-col justify-end bg-blue-950/80 p-10 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 md:p-12">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                        {project.location}
                      </span>
                      <span className="h-1 w-1 rounded-full bg-white/30" />
                      <span className="text-xs font-bold uppercase tracking-widest text-white">
                        {project.category}
                      </span>
                    </div>
                    <h4
                      className={cn(
                        "font-black text-white",
                        project.titleClassName
                      )}
                      style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
                    >
                      {project.title}
                    </h4>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-screen-2xl bg-white px-8 pb-20 pt-32">
          <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-2">
            <div>
              <h2
                className="mb-8 text-5xl font-black leading-tight text-blue-950"
                style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
              >
                Ready to start your project?
              </h2>
              <p className="mb-12 text-xl leading-relaxed text-slate-600">
                Whether you have full architectural plans or just an initial idea,
                we provide honest, fixed-fee quotes that respect your vision and
                budget. Our process is transparent and low-friction.
              </p>

              <div className="space-y-6">
                {quoteFeatures.map((feature) => {
                  const Icon = feature.icon;
                  const isWhatsapp = feature.accent === "whatsapp";

                  return (
                    <article
                      key={feature.title}
                      className={cn(
                        "flex items-center gap-6 rounded-xl border p-8",
                        isWhatsapp
                          ? "border-[#25D366]/20 bg-[#25D366]/5"
                          : "border-slate-100 bg-slate-50"
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-10 w-10",
                          isWhatsapp ? "text-[#25D366]" : "text-blue-950"
                        )}
                        aria-hidden="true"
                      />
                      <div className="flex-grow">
                        <h4
                          className="text-lg font-black text-blue-950"
                          style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
                        >
                          {feature.title}
                        </h4>
                        <p className="text-slate-600">{feature.description}</p>
                        {feature.linkLabel ? (
                          <span className="mt-3 inline-flex items-center gap-1 text-sm font-black text-[#25D366]">
                            {feature.linkLabel}
                            <ArrowRight className="h-4 w-4" aria-hidden="true" />
                          </span>
                        ) : null}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="rounded-xl border border-slate-100 bg-white p-10 shadow-2xl">
              <div className="mb-7 flex items-end justify-between gap-6">
                <div>
                  <span className="text-xs font-black uppercase tracking-[0.22em] text-slate-400">
                    Quote request
                  </span>
                  <h3
                    className="mt-2 text-2xl font-black tracking-tight text-blue-950"
                    style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
                  >
                    Get a fixed-fee quote
                  </h3>
                </div>
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                  ~2 mins
                </span>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <PreviewField label="Name" placeholder="John Whitfield" />

                  <div className="space-y-3">
                    <PreviewLabel>Contact preference</PreviewLabel>
                    <div className="flex flex-wrap gap-2">
                      <PreviewPill active>Call</PreviewPill>
                      <PreviewPill>Email</PreviewPill>
                      <PreviewPill>WhatsApp</PreviewPill>
                    </div>
                  </div>
                </div>

                <PreviewField label="Phone number" placeholder="07123 456 789" />

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <PreviewSelect
                    label="Project type"
                    options={[
                      "Extension",
                      "Full Renovation",
                      "Kitchen / Bathroom",
                      "Loft Conversion",
                      "New Build",
                    ]}
                  />
                  <PreviewField label="Postcode" placeholder="M20 2XX" />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <PreviewUpload
                    label="Upload photos / plans"
                    helper="Optional, but speeds up quoting."
                  />
                  <PreviewTextarea
                    label="Short description"
                    placeholder="Rear extension. Approx 3m. Looking for a ballpark and next steps."
                    compact
                  />
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <PreviewButton className="w-full justify-center sm:w-auto" variant="formSubmit">
                    Request quote
                  </PreviewButton>
                  <p className="text-xs leading-relaxed text-slate-500">
                    We respond within 1 business day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-20 border-t border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-16 px-12 py-24 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-1">
            <div
              className="mb-8 text-2xl font-black uppercase tracking-tighter text-blue-950"
              style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
            >
              Collins Construction
            </div>
            <p className="mb-8 text-sm leading-relaxed text-slate-500">
              Premium residential building specialists serving Greater Manchester
              and the North West for over 30 years. Quality without compromise.
            </p>
            <div className="flex gap-6">
              <span className="text-blue-950">
                <Sparkles className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-blue-950">
                <Camera className="h-5 w-5" aria-hidden="true" />
              </span>
            </div>
          </div>

          <div>
            <FooterHeading>Expertise</FooterHeading>
            <ul className="space-y-5 text-sm text-slate-500">
              {expertiseLinks.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Company</FooterHeading>
            <ul className="space-y-5 text-sm text-slate-500">
              {companyLinks.map((link) => (
                <li key={link}>{link}</li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Contact</FooterHeading>
            <p className="mb-2 text-sm text-slate-500">Greater Manchester Coverage</p>
            <p
              className="mb-6 text-lg font-black text-blue-950"
              style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
            >
              0161 123 4567
            </p>
            <p className="text-sm text-slate-500">info@collinsconstruction.co.uk</p>
          </div>
        </div>

        <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-6 border-t border-slate-200 px-12 py-10 md:flex-row">
          <p className="text-xs font-medium text-slate-400">
            © 2024 Collins Construction Ltd. All rights reserved.
          </p>
          <div className="flex gap-8">
            {socialLinks.map((link) => (
              <span
                key={link}
                className="text-xs font-bold uppercase tracking-widest text-slate-400"
                style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
              >
                {link}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

type PreviewButtonProps = {
  children: ReactNode;
  className?: string;
  variant:
    | "primary"
    | "primaryLarge"
    | "heroPrimary"
    | "heroSecondary"
    | "whatsapp"
    | "formSubmit";
};

function PreviewButton({ children, className, variant }: PreviewButtonProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-md font-black transition-all",
        variant === "primary" &&
          "bg-blue-950 px-6 py-3 text-white shadow-sm",
        variant === "primaryLarge" &&
          "bg-blue-950 px-10 py-5 text-lg text-white shadow-lg",
        variant === "heroPrimary" &&
          "bg-white px-10 py-5 text-lg text-blue-950 shadow-lg",
        variant === "heroSecondary" &&
          "border-2 border-white bg-white/10 px-10 py-5 text-lg text-white backdrop-blur-sm",
        variant === "whatsapp" &&
          "border-2 border-white bg-white/10 px-8 py-5 text-lg text-[#25D366] backdrop-blur-sm",
        variant === "formSubmit" &&
          "bg-blue-950 px-8 py-6 text-xl text-white shadow-lg",
        className
      )}
      style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
    >
      {children}
    </span>
  );
}

type PreviewFieldProps = {
  label: string;
  placeholder: string;
};

function PreviewField({ label, placeholder }: PreviewFieldProps) {
  return (
    <div className="space-y-3">
      <label
        className="text-xs font-black uppercase tracking-widest text-slate-400"
        style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
      >
        {label}
      </label>
      <div className="w-full border-0 border-b-2 border-slate-200 bg-slate-50 p-4 font-semibold text-blue-950">
        {placeholder}
      </div>
    </div>
  );
}

type PreviewSelectProps = {
  label: string;
  options: string[];
};

function PreviewSelect({ label, options }: PreviewSelectProps) {
  return (
    <div className="space-y-3">
      <label
        className="text-xs font-black uppercase tracking-widest text-slate-400"
        style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
      >
        {label}
      </label>
      <div className="flex items-center justify-between border-0 border-b-2 border-slate-200 bg-slate-50 p-4 font-semibold text-blue-950">
        <span>{options[0]}</span>
        <span className="text-slate-400" aria-hidden="true">
          ▾
        </span>
      </div>
    </div>
  );
}

type PreviewTextareaProps = {
  label: string;
  placeholder: string;
  compact?: boolean;
};

function PreviewTextarea({ label, placeholder, compact }: PreviewTextareaProps) {
  return (
    <div className="space-y-3">
      <PreviewLabel>{label}</PreviewLabel>
      <div
        className={cn(
          "w-full border-0 border-b-2 border-slate-200 bg-slate-50 p-4 font-semibold text-blue-950",
          compact ? "min-h-[96px]" : "min-h-[124px]"
        )}
      >
        {placeholder}
      </div>
    </div>
  );
}

function PreviewLabel({ children }: { children: string }) {
  return (
    <label
      className="text-xs font-black uppercase tracking-widest text-slate-400"
      style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
    >
      {children}
    </label>
  );
}

function PreviewPill({
  children,
  active,
}: {
  children: string;
  active?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.18em]",
        active
          ? "border-blue-950/18 bg-blue-950 text-white shadow-[0_10px_22px_rgba(15,23,42,0.12)]"
          : "border-slate-200 bg-white text-slate-600"
      )}
      style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
    >
      {children}
    </span>
  );
}

function PreviewUpload({
  label,
  helper,
}: {
  label: string;
  helper: string;
}) {
  return (
    <div className="space-y-3">
      <PreviewLabel>{label}</PreviewLabel>
      <div className="flex min-h-[96px] items-center justify-center rounded-lg border border-dashed border-slate-200 bg-white p-4 text-center">
        <div>
          <p className="text-sm font-semibold text-slate-600">Drag or tap to add</p>
          <p className="mt-1 text-xs text-slate-500">{helper}</p>
        </div>
      </div>
    </div>
  );
}

type FooterHeadingProps = {
  children: string;
};

function FooterHeading({ children }: FooterHeadingProps) {
  return (
    <h4
      className="mb-8 text-xs font-black uppercase tracking-widest text-blue-950"
      style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
    >
      {children}
    </h4>
  );
}
