"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/Magnetic";

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
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
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
        error={errors.name}
        variant={variant}
        input={
          <input
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
        error={errors.phone}
        variant={variant}
        input={
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            placeholder="e.g. 07700 900123"
            value={values.phone}
            onChange={(e) => setField("phone", e.target.value)}
            className={cn(inputBase, INPUT_STYLES[variant], errors.phone && "border-red-500/60")}
          />
        }
      />

      <Field
        label="Your website (optional)"
        error={errors.website}
        variant={variant}
        input={
          <input
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
        error={errors.message}
        variant={variant}
        input={
          <textarea
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
  error,
  input,
  variant,
}: {
  label: string;
  error?: string;
  input: React.ReactNode;
  variant: Variant;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span
        className={cn(
          "text-[0.68rem] font-semibold uppercase tracking-[0.14em]",
          LABEL_STYLES[variant]
        )}
      >
        {label}
      </span>
      {input}
      {error && (
        <span role="alert" className="text-[0.78rem] font-medium text-red-500">
          {error}
        </span>
      )}
    </label>
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
