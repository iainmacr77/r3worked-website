import { NextResponse } from "next/server";

type LeadPayload = {
  name?: unknown;
  phone?: unknown;
  website?: unknown;
  message?: unknown;
  extra_field?: unknown; // honeypot — real users never see or fill this
};

type FieldErrors = Partial<Record<"name" | "phone" | "website" | "message", string>>;

function asTrimmedString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function validate(body: LeadPayload) {
  const name = asTrimmedString(body.name);
  const phone = asTrimmedString(body.phone);
  const website = asTrimmedString(body.website);
  const message = asTrimmedString(body.message);

  const errors: FieldErrors = {};

  if (name.length < 2) {
    errors.name = "Please tell us your name.";
  }
  // Loose UK-friendly phone check: digits, spaces, +, (), - with at least 7 digits.
  const digitCount = phone.replace(/\D/g, "").length;
  if (!/^[+()\d\s-]+$/.test(phone) || digitCount < 7 || digitCount > 15) {
    errors.phone = "Please enter a phone or WhatsApp number.";
  }
  if (website && !/^(https?:\/\/)?[\w-]+(\.[\w-]+)+([/?#].*)?$/i.test(website)) {
    errors.website = "That doesn't look like a website address.";
  }
  if (message.length > 1000) {
    errors.message = "Please keep the message under 1,000 characters.";
  }

  return { errors, lead: { name, phone, website, message } };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: Request) {
  let body: LeadPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: silently accept and drop bot submissions.
  if (asTrimmedString(body.extra_field).length > 0) {
    return NextResponse.json({ ok: true, delivered: false });
  }

  const { errors, lead } = validate(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL ?? "hello@r3worked.co.uk";
  const from = process.env.RESEND_FROM ?? "onboarding@resend.dev";

  if (!apiKey) {
    console.log("[lead] Resend not configured — lead received:", lead);
    return NextResponse.json({ ok: true, delivered: false });
  }

  const html = `
    <h2>New Lead Rescue enquiry</h2>
    <p><strong>Name:</strong> ${escapeHtml(lead.name)}</p>
    <p><strong>Phone / WhatsApp:</strong> ${escapeHtml(lead.phone)}</p>
    <p><strong>Website:</strong> ${lead.website ? escapeHtml(lead.website) : "—"}</p>
    <p><strong>Message:</strong> ${lead.message ? escapeHtml(lead.message) : "—"}</p>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: `New Lead Rescue enquiry — ${lead.name}`,
        html,
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("[lead] Resend send failed:", response.status, detail);
      return NextResponse.json(
        { ok: false, error: "We couldn't send your enquiry. Please try again." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("[lead] Resend request errored:", error);
    return NextResponse.json(
      { ok: false, error: "We couldn't send your enquiry. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, delivered: true });
}
