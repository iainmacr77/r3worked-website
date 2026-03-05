Hey Lola — Product Overview (Restaurants + Medical)

0) What Lola is (one-liner)

Lola is an always-on, conversational front desk that answers calls (and WhatsApp calls), handles the high-volume operational requests that steal staff time, books/reschedules/cancels inside your existing system, and escalates edge cases to humans—while producing a clean, queryable operational log of everything that happened.

Lola is the “intake + execution layer” sitting between:
	•	Guests/Patients (voice + WhatsApp calls),
	•	Your booking/diary system (DinePlan / reservation system; Google Calendar / practice management calendar layer),
	•	Your staff (escalations, approvals, and exceptions).

⸻

1) Two products, same engine

1.1 Lola Restaurants

Job: convert inbound demand into confirmed covers without dragging staff off the floor.

What she handles
	•	Book / edit / cancel reservations
	•	Seating preferences, dietary notes, birthdays, special occasions
	•	Policy FAQs (corkage, kids, dress code, parking, deposits, late arrivals)
	•	Waitlist handling + “call me back” options
	•	After-hours capture (no more “call tomorrow”)
	•	Escalation to host/manager when needed

Outcome
	•	Fewer missed calls, fewer mistakes, more bookings, cleaner service.

⸻

1.2 Lola Medical (Clinics + Dentists)

Job: protect clinic flow and reception sanity while capturing scheduling demand safely.

What she handles (strictly non-clinical)
	•	Book / reschedule / cancel appointments
	•	Appointment type routing (clean intake: “what are you booking for?” at a non-diagnostic level)
	•	Policy FAQs (forms, arrival time, late policy, medical aid admin info, practice details)
	•	After-hours capture and next-day scheduling
	•	“Receptionist confirm mode” (optional): Lola proposes changes → reception approves → patient gets confirmation

Safety rail
	•	No clinical decision-making. Any “medical advice” request is routed to reception immediately (or to a predefined safe instruction like “If emergency, seek urgent care now, otherwise we’ll have reception call you back”).
	•	Audit trail by default: every step is logged.

⸻

2) The pain Lola removes (with evidence)

2.1 Restaurants: no-shows + late cancellations + chaos
	•	Restaurants globally have been pushed to adopt deposits / no-show fees partly because no-shows and late cancellations are material; reported no-show rates can sit around high single digits in busy markets and have been described as worsening post-COVID in some reporting.
	•	Even a “small” no-show rate hurts disproportionately because the revenue is tied to finite inventory (tables + time) and the missed cover can be impossible to replace in the moment.

Operational reality Lola targets
	•	Peak-hour phone pileups
	•	Staff forced into mini call-centre mode
	•	Lost bookings + lost data (“why did they call?”)
	•	Human error under pressure (wrong time, wrong name, wrong party size)

⸻

2.2 Medical: no-shows + phone congestion + diary fragmentation
	•	Appointment no-shows are a persistent healthcare problem; systematic and review-style literature commonly reports no-show rates across outpatient contexts spanning from low single digits into double digits depending on specialty and setting.  ￼
	•	Large-scale healthcare call environments can see high abandonment when wait times spike (one reported example in Medicaid eligibility call centres cited ~29% abandonment in certain states under strain).  ￼

Operational reality Lola targets
	•	Reception juggling in-person patients + phones + admin
	•	“8am rush” / Monday spikes (everyone calls at once)
	•	After-hours demand leaks away
	•	Multiple-provider complexity (who’s available for what type of visit)
	•	Risk: callers drifting into “medical advice” territory that must be handled carefully

⸻

3) What Lola actually does (capabilities)

3.1 Core interaction loop (voice/WhatsApp call)
	1.	Answer instantly (no hold music, no voicemail default)
	2.	Identify intent (book / change / cancel / policy / escalation)
	3.	Collect minimum viable details (name, number, date/time preference, party size / appointment type)
	4.	Check availability in the connected system
	5.	Propose options conversationally (2–4 best matches)
	6.	Confirm + write back to the system (reservation/appointment created/updated)
	7.	Send confirmation (SMS/WhatsApp/email depending on setup)
	8.	Log everything (intent, outcome, duration, timestamps, notes)

⸻

3.2 The “trust boundary” (especially medical)

Lola’s design assumes:
	•	Scheduling + admin: OK for automation
	•	Medical advice / triage / diagnosis: not OK — must route to humans

So Lola can say:
	•	“I can help you book the soonest appointment. If you need medical advice, I’ll connect you to reception now.”

And she must avoid:
	•	“Based on your symptoms, you should…”

⸻

3.3 Human override (restaurant + medical)

At any point Lola can:
	•	Warm-transfer to a live line (host desk / reception)
	•	Create a call-back task (“Reception will call you within X minutes”)
	•	Push an approval request (Receptionist Confirm Mode) before finalizing changes

⸻

4) Setup: what a venue/practice actually does to go live

4.1 Day-0 prerequisites (both)
	•	Confirm which number(s) Lola will answer
	•	Decide escalation rules (who gets transferred to, when)
	•	Provide policy info (hours, location, FAQs, rules)
	•	Decide confirmation channel (SMS/WhatsApp/email) and messaging tone

⸻

4.2 Restaurants setup (practical)

Step 1 — Provision a dedicated “Lola Number”
	•	One public number guests actually use.
	•	Keep the existing direct line private (suppliers, VIPs, internal).

Step 2 — Route calls
	•	Forward public-facing listings (Google, website, Instagram, menus) to the Lola Number.

Step 3 — Connect booking system
	•	DinePlan (or alternative): connect via API / integration layer.
	•	Map: availability, table rules, seating areas, deposits, tags/notes fields.

Step 4 — Teach house rules
	•	Policy pack: corkage, kids, allergies workflow, late arrival rules, table turn times, deposits.
	•	VIP handling rules + escalation triggers.

Step 5 — Go live with a “soft launch”
	•	Start with after-hours + overflow first.
	•	Expand to full coverage once staff trusts the flow.

⸻

4.3 Medical setup (practical)

Step 1 — Connect “calendar reality first”
	•	Often fastest path: connect to Google Calendar / clinic calendar layer.
	•	For deeper integrations later: connect practice management scheduling if available.

Step 2 — Define appointment types
	•	Short list: “new patient”, “follow-up”, “procedure”, “hygiene”, etc.
	•	Each type has duration + provider constraints + lead times.

Step 3 — Define safety rail + escalation
	•	Any clinical question → route to reception immediately.
	•	Set emergency wording (practice-approved).

Step 4 — Choose operating mode
	•	Autopilot: Lola books directly inside constraints.
	•	Receptionist Confirm Mode: Lola drafts changes; staff approves.

Step 5 — Audit trail by default
	•	Logging is non-negotiable (timestamp + caller + intent + outcome).

⸻

5) What Lola reports back (metrics & intelligence)

5.1 Shared metrics (both verticals)

Demand + access
	•	Total inbound calls (by day/week)
	•	Peak load windows (hour-of-day heatmap)
	•	After-hours demand captured
	•	Average time-to-answer (should be near instant)
	•	Call abandonment proxies (hang-ups before resolution)

Outcomes
	•	Booked / rescheduled / cancelled counts
	•	Resolution rate (% handled without staff)
	•	Escalation rate (% forwarded to human)
	•	Reasons for escalation (categorised)

Efficiency
	•	Estimated staff minutes saved
	•	Average handle time by intent
	•	“Repeat callers” rate (friction indicator)

Conversation intelligence
	•	Top caller intents (what people actually want)
	•	Top FAQs (what your website/menu isn’t answering)
	•	Sentiment / frustration markers (optional)

⸻

5.2 Restaurant-specific metrics

Revenue & inventory
	•	Bookings captured that would otherwise be missed (proxy)
	•	Covers booked via phone/WhatsApp
	•	Late cancellation / no-show risk flags (if you use deposits/no-show rules)
	•	Waitlist conversion rate
	•	Seating preference distribution (inside/outside, terrace, bar)

Service quality
	•	“Staff interruption load” (calls during peak service windows)
	•	Mistake prevention: corrections detected (time, party size, name)

⸻

5.3 Medical-specific metrics

Clinic flow
	•	Appointment fill rate (per provider / per day)
	•	Diary gap recovery (cancellations rebooked into newly opened slots)
	•	No-show patterns (time/day/provider)
	•	After-hours capture leading to next-day bookings
	•	Reception escalation reasons (clinical question / complex case / insurance admin)

Safety + compliance
	•	Count of “clinical advice” requests safely routed to reception
	•	Response times for call-back tasks (if used)
	•	Full audit trail export (for internal review)

⸻

6) Why this is hard to copy (the “moat”)

Lola isn’t just a voice bot. The defensibility comes from:
	•	Operational constraints mapping (rules, edge-cases, exceptions)
	•	Tight system integration (booking/diary writes that don’t break reality)
	•	Human escalation choreography (handoffs that feel seamless)
	•	Continuous learning from transcripts + outcomes (what fails, what converts)
	•	A metrics layer that becomes the manager’s “control surface” over time

⸻

7) The product promise (simple language)

Restaurants

“Zero missed calls. Clean bookings. Better service.”

Medical

“Clinic calm. Clean scheduling. Safe escalation.”

⸻

8) Notes for implementation (so Codex doesn’t do something dumb)
	•	Never fabricate availability. If the system is unavailable, Lola must gracefully degrade (“I can take a request and have the team confirm shortly”).
	•	Medical: never give clinical advice. Route it.
	•	Always log: intent → action → outcome.
	•	Always provide an escape hatch: transfer/callback.
	•	Design principle: “Looks magical, behaves conservative.”
