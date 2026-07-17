"use client";

import { useEffect, useMemo, useRef, useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, ChevronDown, Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/Magnetic";
import {
  DEFAULT_PHONE_COUNTRY,
  PHONE_COUNTRIES,
  type PhoneCountry,
} from "./phoneCountries";

type Variant = "dark" | "light";

type FieldName = "name" | "phone" | "website" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;
type Status = "idle" | "submitting" | "success" | "error";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const LABEL_STYLES: Record<Variant, string> = {
  dark: "text-[#F7F3EE]/60",
  light: "text-[#2A2A2A]/60",
};

const INPUT_STYLES: Record<Variant, string> = {
  dark: "border-[#F7F3EE]/12 bg-[#F7F3EE]/[0.04] text-[#F7F3EE] placeholder:text-[#F7F3EE]/25 focus:border-[#F0A442]/60",
  light:
    "border-[#161616]/10 bg-white/70 text-[#161616] placeholder:text-[#161616]/30 focus:border-[#C97C2E]/60",
};

export function LeadCaptureForm({
  variant = "dark",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  const [values, setValues] = useState({
    name: "",
    phone: "",
    website: "",
    message: "",
    extra_field: "", // honeypot — named so browser profile autofill won't touch it
  });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<PhoneCountry>(
    DEFAULT_PHONE_COUNTRY
  );
  const [countryOpen, setCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const countryPickerRef = useRef<HTMLDivElement>(null);
  const countrySearchRef = useRef<HTMLInputElement>(null);
  const selectedCountryRef = useRef<HTMLButtonElement>(null);

  const filteredCountries = useMemo(() => {
    const query = countrySearch.trim().toLocaleLowerCase();
    if (!query) return PHONE_COUNTRIES;

    return PHONE_COUNTRIES.filter(
      (country) =>
        country.name.toLocaleLowerCase().includes(query) ||
        country.dialCode.includes(query) ||
        country.code.toLocaleLowerCase().includes(query)
    );
  }, [countrySearch]);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!countryPickerRef.current?.contains(event.target as Node)) {
        setCountryOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCountryOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!countryOpen) return;
    countrySearchRef.current?.focus();
    selectedCountryRef.current?.scrollIntoView({ block: "nearest" });
  }, [countryOpen]);

  const setField = (field: keyof typeof values, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (field !== "extra_field" && errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateClient = (): FieldErrors => {
    const next: FieldErrors = {};
    if (values.name.trim().length < 2) next.name = "Please tell us your name.";
    const digits = values.phone.replace(/\D/g, "").length;
    if (digits < 7 || digits > 15) {
      next.phone = "Please enter a phone or WhatsApp number.";
    }
    return next;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setServerError(null);

    const clientErrors = validateClient();
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }

    setStatus("submitting");
    try {
      const submittedPhone = formatInternationalPhone(
        selectedCountry.dialCode,
        values.phone
      );
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, phone: submittedPhone }),
      });
      const data = await response.json();

      if (response.status === 422 && data.errors) {
        setErrors(data.errors);
        setStatus("idle");
        return;
      }
      if (!response.ok || !data.ok) {
        setServerError(
          data.error ?? "We couldn't send your enquiry. Please try again."
        );
        setStatus("error");
        return;
      }
      setStatus("success");
    } catch {
      setServerError("We couldn't send your enquiry. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <CapturedLeadCard
        variant={variant}
        name={values.name.trim()}
        phone={values.phone.trim()}
        className={className}
      />
    );
  }

  const inputBase =
    "w-full min-h-[3rem] rounded-xl border px-4 py-3 text-[0.95rem] outline-none transition-colors duration-300";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn("flex w-full flex-col gap-4", className)}
    >
      {/* Honeypot — hidden from real users, tempting for bots */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label>
          Company
          <input
            type="text"
            name="extra_field"
            tabIndex={-1}
            autoComplete="off"
            value={values.extra_field}
            onChange={(e) => setField("extra_field", e.target.value)}
          />
        </label>
      </div>

      <Field
        label="Your name"
        id="lead-name"
        error={errors.name}
        variant={variant}
        input={
          <input
            id="lead-name"
            type="text"
            name="name"
            autoComplete="name"
            placeholder="e.g. James Whitfield"
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
            className={cn(inputBase, INPUT_STYLES[variant], errors.name && "border-red-500/60")}
          />
        }
      />

      <Field
        label="Phone / WhatsApp"
        id="lead-phone"
        error={errors.phone}
        variant={variant}
        input={
          <div ref={countryPickerRef} className="relative">
            <div
              className={cn(
                "flex min-h-[3rem] w-full overflow-visible rounded-xl border transition-colors duration-300",
                INPUT_STYLES[variant],
                errors.phone && "border-red-500/60"
              )}
            >
              <button
                type="button"
                aria-haspopup="listbox"
                aria-expanded={countryOpen}
                aria-label={`Country code: ${selectedCountry.name}`}
                onClick={() => setCountryOpen((open) => !open)}
                className="flex shrink-0 items-center gap-2 rounded-l-xl border-r border-current/10 px-3.5 text-left text-[0.9rem] font-medium transition-colors hover:bg-current/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C97C2E]/50"
              >
                <span aria-hidden="true" className="text-[1.05rem] leading-none">
                  {countryFlag(selectedCountry.code)}
                </span>
                <span>{selectedCountry.dialCode}</span>
                <ChevronDown
                  size={15}
                  aria-hidden="true"
                  className={cn(
                    "ml-auto shrink-0 opacity-60 transition-transform",
                    countryOpen && "rotate-180"
                  )}
                />
              </button>
              <input
                id="lead-phone"
                type="tel"
                name="phone"
                autoComplete="tel-national"
                inputMode="tel"
                placeholder="e.g. 062 637 7609"
                value={values.phone}
                onChange={(e) => setField("phone", e.target.value)}
                className="min-w-0 flex-1 rounded-r-xl bg-transparent px-3.5 py-3 text-[0.95rem] outline-none placeholder:opacity-50"
              />
            </div>

            {countryOpen && (
              <div
                className={cn(
                  "absolute left-0 right-0 top-[calc(100%+0.5rem)] z-30 overflow-hidden rounded-xl border p-2 shadow-[0_18px_50px_rgba(22,22,22,0.2)]",
                  variant === "dark"
                    ? "border-[#F7F3EE]/12 bg-[#242321] text-[#F7F3EE]"
                    : "border-[#161616]/10 bg-[#FFFDF8] text-[#161616]"
                )}
              >
                <div className="relative">
                  <Search
                    size={15}
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-50"
                  />
                  <input
                    ref={countrySearchRef}
                    type="search"
                    value={countrySearch}
                    onChange={(event) => setCountrySearch(event.target.value)}
                    placeholder="Search countries"
                    aria-label="Search countries"
                    className="h-10 w-full rounded-lg border border-current/10 bg-current/[0.04] pl-9 pr-3 text-sm outline-none placeholder:opacity-50 focus:border-[#C97C2E]/60"
                  />
                </div>
                <div
                  role="listbox"
                  aria-label="Country codes"
                  className="mt-2 max-h-60 overflow-y-auto overscroll-contain"
                >
                  {filteredCountries.length > 0 ? (
                    filteredCountries.map((country) => (
                      <button
                        key={country.code}
                        ref={
                          country.code === selectedCountry.code
                            ? selectedCountryRef
                            : undefined
                        }
                        type="button"
                        role="option"
                        aria-selected={country.code === selectedCountry.code}
                        onClick={() => {
                          setSelectedCountry(country);
                          setCountrySearch("");
                          setCountryOpen(false);
                        }}
                        className={cn(
                          "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors hover:bg-[#C97C2E]/10",
                          country.code === selectedCountry.code &&
                            "bg-[#C97C2E]/10 font-semibold"
                        )}
                      >
                        <span aria-hidden="true" className="text-base leading-none">
                          {countryFlag(country.code)}
                        </span>
                        <span className="min-w-0 flex-1 truncate">{country.name}</span>
                        <span className="shrink-0 text-xs opacity-60">
                          {country.dialCode}
                        </span>
                      </button>
                    ))
                  ) : (
                    <p className="px-3 py-4 text-sm opacity-60">
                      No country found.
                    </p>
                  )}
                </div>
              </div>
            )}
          </div>
        }
      />

      <Field
        label="Your website (optional)"
        id="lead-website"
        error={errors.website}
        variant={variant}
        input={
          <input
            id="lead-website"
            type="text"
            name="website"
            autoComplete="url"
            inputMode="url"
            placeholder="e.g. collinsconstruction.co.uk"
            value={values.website}
            onChange={(e) => setField("website", e.target.value)}
            className={cn(inputBase, INPUT_STYLES[variant], errors.website && "border-red-500/60")}
          />
        }
      />

      <Field
        label="Anything we should look at? (optional)"
        id="lead-message"
        error={errors.message}
        variant={variant}
        input={
          <textarea
            id="lead-message"
            name="message"
            rows={3}
            maxLength={1000}
            placeholder="e.g. We miss calls when we're on site…"
            value={values.message}
            onChange={(e) => setField("message", e.target.value)}
            className={cn(inputBase, INPUT_STYLES[variant], "resize-none", errors.message && "border-red-500/60")}
          />
        }
      />

      {serverError && (
        <p role="alert" className="text-[0.82rem] font-medium text-red-500">
          {serverError}
        </p>
      )}

      <Magnetic className="mt-2 w-full sm:w-fit" strength={0.2}>
        <button
          type="submit"
          disabled={status === "submitting"}
          className={cn(
            "inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.14em] transition-[transform,box-shadow,opacity] duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:w-fit sm:px-9",
            variant === "dark"
              ? "bg-[#F0A442] text-[#161616] shadow-[0_8px_20px_rgba(240,164,66,0.2)] hover:shadow-[0_12px_28px_rgba(240,164,66,0.25)]"
              : "bg-[#C97C2E] text-white shadow-[0_8px_20px_rgba(201,124,46,0.2)] hover:shadow-[0_12px_28px_rgba(201,124,46,0.25)]"
          )}
        >
          {status === "submitting" ? "Sending…" : "Get my free review"}
          {status !== "submitting" && <ArrowRight size={14} strokeWidth={2.5} />}
        </button>
      </Magnetic>

      <p className={cn("text-[0.72rem] leading-relaxed", LABEL_STYLES[variant])}>
        No spam, no obligation. We&apos;ll reply on WhatsApp or by phone.
      </p>
    </form>
  );
}

function Field({
  label,
  id,
  error,
  input,
  variant,
}: {
  label: string;
  id: string;
  error?: string;
  input: React.ReactNode;
  variant: Variant;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span
        className={cn(
          "text-[0.68rem] font-semibold uppercase tracking-[0.14em]",
          LABEL_STYLES[variant]
        )}
      >
        <label htmlFor={id}>{label}</label>
      </span>
      {input}
      {error && (
        <span role="alert" className="text-[0.78rem] font-medium text-red-500">
          {error}
        </span>
      )}
    </div>
  );
}

function formatInternationalPhone(dialCode: string, phone: string) {
  const trimmedPhone = phone.trim();
  if (trimmedPhone.startsWith("+")) return trimmedPhone;
  return `${dialCode} ${trimmedPhone.replace(/^0+/, "")}`.trim();
}

function countryFlag(countryCode: string) {
  return countryCode
    .toUpperCase()
    .replace(/./g, (character) =>
      String.fromCodePoint(127397 + character.charCodeAt(0))
    );
}

/**
 * Success state — the enquiry rendered as a captured lead card, in the same
 * visual language as the hero story's "lead captured" moment.
 */
function CapturedLeadCard({
  variant,
  name,
  phone,
  className,
}: {
  variant: Variant;
  name: string;
  phone: string;
  className?: string;
}) {
  const dark = variant === "dark";
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: EASE }}
      className={cn("w-full", className)}
      role="status"
    >
      <div
        className={cn(
          "relative overflow-hidden rounded-[1.6rem] border p-6 sm:p-8",
          dark
            ? "border-[#F7F3EE]/10 bg-[#F7F3EE]/[0.04]"
            : "border-[#161616]/10 bg-white/95 shadow-[0_10px_24px_rgba(22,22,22,0.05)]"
        )}
      >
        <div className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full bg-[#C97C2E]/10 blur-3xl" />

        <div className="flex items-center gap-3">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.25, duration: 0.5, ease: EASE }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2E7D5B]"
          >
            <Check size={18} strokeWidth={3} className="text-white" />
          </motion.div>
          <div>
            <p
              className={cn(
                "text-[0.68rem] font-bold uppercase tracking-[0.18em]",
                dark ? "text-[#F0A442]" : "text-[#A87C4F]"
              )}
            >
              Lead captured
            </p>
            <p
              className={cn(
                "text-[1.05rem] font-semibold",
                dark ? "text-[#F7F3EE]" : "text-[#161616]"
              )}
            >
              {name}
            </p>
          </div>
        </div>

        <div
          className={cn(
            "mt-5 rounded-xl border px-4 py-3",
            dark ? "border-[#F7F3EE]/8 bg-[#161616]/40" : "border-[#161616]/6 bg-[#F5F2EA]/70"
          )}
        >
          <p className={cn("text-[0.82rem]", dark ? "text-[#F7F3EE]/60" : "text-[#2A2A2A]/60")}>
            Lead Rescue Review · {phone}
          </p>
          <AnimatePresence>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className={cn(
                "mt-1 text-[0.82rem] font-medium",
                dark ? "text-[#F7F3EE]/85" : "text-[#161616]/85"
              )}
            >
              We&apos;ve got it — exactly the way your customers&apos; enquiries
              will be caught. We&apos;ll be in touch shortly.
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
