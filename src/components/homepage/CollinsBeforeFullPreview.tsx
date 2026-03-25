import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Bath,
  Building2,
  ClipboardList,
  Hammer,
  HardHat,
  House,
  HousePlus,
  Mail,
  Map,
  MapPin,
  Phone,
  Wrench,
} from "lucide-react";

import { cn } from "@/lib/utils";
import {
  collinsBeforePreviewImagePaths,
  type CollinsBeforePreviewImages,
} from "./collinsPreviewImages";

type CollinsBeforeFullPreviewProps = {
  className?: string;
  imagePaths?: Partial<CollinsBeforePreviewImages>;
};

type ServiceCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const services: ServiceCard[] = [
  {
    title: "Joinery",
    description:
      "Expert joinery services for all your interior and exterior needs. From doors to bespoke furniture.",
    icon: Hammer,
  },
  {
    title: "Building",
    description:
      "General building work including brickwork, structural repairs, and garden walls.",
    icon: Building2,
  },
  {
    title: "Contracting",
    description:
      "Full project management and sub-contracting services for larger commercial projects.",
    icon: ClipboardList,
  },
  {
    title: "Roofing",
    description:
      "New roofs, roof repairs, and guttering services. We work with slate and tile roofs.",
    icon: HardHat,
  },
  {
    title: "New Builds",
    description:
      "Complete new build services from planning and groundworks to final completion.",
    icon: House,
  },
  {
    title: "Extensions",
    description:
      "High-quality house extensions to increase your living space and property value.",
    icon: HousePlus,
  },
  {
    title: "Kitchens",
    description:
      "Full kitchen design and installation services including plumbing and electrical work.",
    icon: Wrench,
  },
  {
    title: "Bathrooms",
    description:
      "Modern bathroom renovations and wet room installations tailored to your style.",
    icon: Bath,
  },
  {
    title: "Renovations",
    description:
      "Complete property renovations and modernisations for old and new homes.",
    icon: Building2,
  },
];

const testimonials = [
  {
    quote:
      '"Collins Construction did a fantastic job on our kitchen extension. They were reliable, tidy, and finished the work on time. Highly recommended."',
    attribution: "Mr. & Mrs. Thompson, Stockport",
  },
  {
    quote:
      '"Great service from start to finish. The team were very professional and the quality of the joinery work is excellent. Will use again."',
    attribution: "John Davies, Manchester",
  },
];

const infoLinks = ["Home", "Our Services", "Privacy Policy"];
const addressLines = ["47 Alderley Road", "Cheadle", "Greater Manchester", "SK8 1NZ"];

export function CollinsBeforeFullPreview({
  className,
  imagePaths,
}: CollinsBeforeFullPreviewProps) {
  const images = { ...collinsBeforePreviewImagePaths, ...imagePaths };

  return (
    <div
      className={cn(
        "w-full overflow-hidden bg-[#faf9f9] text-[#1a1c1c]",
        className
      )}
      style={{
        fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <header className="flex w-full flex-col border-b border-slate-300 shadow-sm">
        <div className="bg-slate-100 px-8 py-2 text-center md:text-right">
          <span
            className="text-xs font-normal uppercase tracking-tight text-slate-600"
            style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
          >
            Free estimates for domestic and commercial work
          </span>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 bg-white px-8 py-5 md:flex-row">
          <div className="flex items-center gap-3">
            <div
              className="text-3xl font-extrabold tracking-tighter text-[#001e40]"
              style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
            >
              CCC
            </div>
            <div className="hidden h-8 w-px bg-slate-300 md:block" />
            <div
              className="text-sm font-bold uppercase leading-tight tracking-wide text-slate-700"
              style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
            >
              Collins Construction
              <br />
              Company
            </div>
          </div>

          <nav
            className="flex gap-8"
            aria-label="Collins Construction preview navigation"
          >
            <span
              className="border-b-2 border-[#001e40] text-base font-bold text-[#001e40]"
              style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
            >
              Home
            </span>
            <span
              className="text-base text-slate-600"
              style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
            >
              Services
            </span>
            <span
              className="text-base text-slate-600"
              style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
            >
              Contact
            </span>
          </nav>
        </div>
      </header>

      <section className="relative h-[450px] w-full overflow-hidden bg-[#003366]">
        <img
          alt="UK brick house extension project"
          className="absolute inset-0 h-full w-full object-cover opacity-70"
          src={images.hero}
          decoding="async"
        />
        <div className="relative z-10 flex h-full flex-col items-center justify-center bg-black/40 px-4 text-center">
          <h1
            className="mb-4 text-4xl font-extrabold uppercase tracking-tight text-white drop-shadow-md md:text-5xl"
            style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
          >
            Quality Construction Services
          </h1>
          <p className="max-w-2xl text-lg font-medium text-white drop-shadow-md md:text-xl">
            Professional building and joinery solutions serving Manchester and the
            surrounding areas.
          </p>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-8 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2
            className="mb-6 text-3xl font-bold text-[#001e40]"
            style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
          >
            Established Builders &amp; Joiners in the North West
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-[#5f5e5e]">
            Collins Construction Company provides a wide range of building services
            for domestic and commercial customers. We work across the local area
            including Cheadle and Greater Manchester. From building work and
            extensions to joinery and repairs, our team of tradesmen ensures that
            every job is finished properly and with care.
          </p>
          <PreviewPrimaryAction>Get a Free Quote</PreviewPrimaryAction>
        </div>
      </section>

      <section className="bg-white px-8 py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              alt="Kitchen renovation"
              className="w-full border-4 border-slate-50 shadow-md"
              src={images.feature}
              decoding="async"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2
              className="mb-6 text-3xl font-bold text-[#001e40]"
              style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
            >
              Expertise You Can Trust
            </h2>
            <p className="mb-6 leading-relaxed text-[#5f5e5e]">
              Collins Construction Company has been operating in the Manchester area
              for over 10 years. We pride ourselves on delivering a professional,
              clean, and reliable service to all our customers. Whether it&apos;s a
              small internal repair or a large-scale property extension, our focus
              is always on quality craftsmanship and customer satisfaction. All our
              work is carried out by qualified professionals and is fully insured.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#001e40] px-6 py-2 font-bold text-white">
              <span>View Our Services</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 px-8 py-16">
        <div className="mx-auto max-w-4xl">
          <h2
            className="mb-12 text-center text-2xl font-bold text-[#001e40]"
            style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
          >
            Customer Feedback
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.attribution}
                className="border border-slate-200 bg-white p-8 shadow-sm"
              >
                <p className="mb-4 italic text-[#5f5e5e]">{testimonial.quote}</p>
                <p
                  className="text-sm font-bold uppercase text-[#001e40]"
                  style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
                >
                  {`— ${testimonial.attribution}`}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <h2
            className="mb-16 text-center text-3xl font-bold text-[#001e40] underline decoration-slate-300 decoration-4 underline-offset-8"
            style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
          >
            Our Building Services
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <article
                  key={service.title}
                  className="flex flex-col items-center border border-slate-200 bg-slate-50 p-8 text-center"
                >
                  <Icon className="mb-4 h-10 w-10 text-[#001e40]" aria-hidden="true" />
                  <h3
                    className="mb-3 text-xl font-bold text-[#001e40]"
                    style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
                  >
                    {service.title}
                  </h3>
                  <p className="mb-6 text-sm text-[#5f5e5e]">{service.description}</p>
                  <span className="mt-auto border border-[#001e40] bg-white px-4 py-1 text-xs font-bold uppercase text-[#001e40]">
                    Get Started
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-100 px-8 py-20">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2">
          <div>
            <h2
              className="mb-8 text-3xl font-bold text-[#001e40]"
              style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
            >
              Get In Touch
            </h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <PreviewField label="Name" placeholder="Your Name" />
                <PreviewField label="Phone" placeholder="Phone Number" />
              </div>
              <PreviewField label="Email Address" placeholder="email@example.com" />
              <PreviewSelect
                label="Subject / Service Required"
                options={[
                  "General Enquiry",
                  "Home Extension",
                  "Kitchen/Bathroom Renovation",
                  "Joinery Services",
                  "Other",
                ]}
              />
              <PreviewTextarea
                label="Message Details"
                placeholder="Please describe your requirements..."
              />
              <div className="flex items-start gap-2 py-2">
                <div className="mt-1 h-4 w-4 border border-slate-400 bg-white" />
                <p className="text-[10px] uppercase leading-tight text-slate-500">
                  I agree to the GDPR privacy policy and give consent for CCC to
                  contact me regarding my enquiry.
                </p>
              </div>
              <PreviewPrimaryAction className="w-full md:w-auto">
                Send Message
              </PreviewPrimaryAction>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex-1 border border-slate-200 bg-white p-12 shadow-sm">
              <h3
                className="mb-2 text-xl font-bold text-[#001e40]"
                style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
              >
                Our Office
              </h3>
              <p className="mb-6 text-sm uppercase text-slate-500">
                Contact us directly for a free estimate
              </p>
              <div className="mb-8">
                <p className="mb-1 text-xs font-bold uppercase text-slate-400">
                  Office Line
                </p>
                <p
                  className="text-4xl font-extrabold tracking-tighter text-[#001e40]"
                  style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
                >
                  0161 482 7314
                </p>
              </div>
              <div className="space-y-6 text-slate-600">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-0.5 h-5 w-5 text-[#001e40]" aria-hidden="true" />
                  <div>
                    <p
                      className="mb-1 text-sm font-bold uppercase text-[#001e40]"
                      style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
                    >
                      Address
                    </p>
                    <p className="text-sm leading-relaxed">
                      47 Alderley Road,
                      <br />
                      Cheadle, Greater Manchester, SK8 1NZ
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="mt-0.5 h-5 w-5 text-[#001e40]" aria-hidden="true" />
                  <div>
                    <p
                      className="mb-1 text-sm font-bold uppercase text-[#001e40]"
                      style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
                    >
                      Email
                    </p>
                    <p className="text-sm">info@collinsconstruction.co.uk</p>
                  </div>
                </div>
              </div>
              <div className="relative mt-10 h-48 w-full border border-slate-200 bg-slate-100">
                <div className="flex h-full items-center justify-center text-slate-400">
                  <div className="text-center">
                    <Map className="mx-auto mb-2 h-10 w-10" aria-hidden="true" />
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em]">
                      Map View
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t-4 border-[#001e40] bg-slate-900 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-8 py-12 md:grid-cols-4">
          <div>
            <div
              className="mb-4 text-2xl font-bold text-white"
              style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
            >
              CCC
            </div>
            <p className="text-xs uppercase tracking-wider text-slate-400">
              Collins Construction Company
              <br />
              Providing high-quality building services across the North West since
              2008.
            </p>
          </div>

          <div>
            <FooterHeading>Location</FooterHeading>
            <ul className="space-y-2 text-sm text-slate-400">
              {addressLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Contact Info</FooterHeading>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5" aria-hidden="true" />
                <span>0161 482 7314</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                <span>info@collinsconstruction.co.uk</span>
              </li>
            </ul>
          </div>

          <div>
            <FooterHeading>Information</FooterHeading>
            <ul className="space-y-2 text-sm text-slate-400">
              {infoLinks.map((label) => (
                <li key={label}>{label}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-black px-8 py-4 text-center text-[10px] uppercase tracking-[0.2em] text-slate-500">
          © 2018 Collins Construction Company. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

type PreviewPrimaryActionProps = {
  children: string;
  className?: string;
};

function PreviewPrimaryAction({
  children,
  className,
}: PreviewPrimaryActionProps) {
  return (
    <span
      className={cn(
        "inline-block bg-[#001e40] px-10 py-3 text-sm font-bold uppercase tracking-wider text-white",
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
    <div>
      <label className="mb-1 block text-xs font-bold uppercase text-slate-500">
        {label}
      </label>
      <div className="w-full border border-slate-300 bg-white p-2 text-sm text-slate-400">
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
    <div>
      <label className="mb-1 block text-xs font-bold uppercase text-slate-500">
        {label}
      </label>
      <div className="flex items-center justify-between border border-slate-300 bg-white p-2 text-sm text-slate-700">
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
};

function PreviewTextarea({ label, placeholder }: PreviewTextareaProps) {
  return (
    <div>
      <label className="mb-1 block text-xs font-bold uppercase text-slate-500">
        {label}
      </label>
      <div className="min-h-[124px] w-full border border-slate-300 bg-white p-2 text-sm text-slate-400">
        {placeholder}
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
      className="mb-6 border-b border-slate-700 pb-2 text-sm font-bold uppercase tracking-[0.2em] text-white"
      style={{ fontFamily: '"Public Sans", Inter, sans-serif' }}
    >
      {children}
    </h4>
  );
}
