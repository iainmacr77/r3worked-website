# Hey Lola — Product Overview (Restaurants + Medical)

## 0) What Lola is (one-liner)

Lola is an always-on conversational front desk that answers calls (including WhatsApp calls), handles the high-volume operational requests that steal staff time, books/reschedules/cancels inside your existing systems, and escalates edge cases to humans—while producing a clean, queryable log of everything that happened.

Lola is the **intake + execution layer** sitting between:
- Guests / Patients (voice + WhatsApp calls)
- Your booking or diary system (restaurant reservation system, Google Calendar, or practice management scheduling layer)
- Your staff (for escalations, approvals, and exceptions)

---

## 1) Two products, one core engine

### 1.1 Lola Restaurants

**Primary job:** convert inbound demand into confirmed covers without dragging staff off the floor.

**What she handles**
- Book, edit, and cancel reservations
- Seating preferences, dietary notes, birthdays, and special occasions
- Policy FAQs (corkage, kids, dress code, parking, deposits, late arrivals)
- Waitlist handling and callback requests
- After-hours demand capture
- Escalation to a host or manager when needed

**Outcome**
- Fewer missed calls
- Fewer booking errors
- More confirmed covers
- Cleaner service during peak periods

---

### 1.2 Lola Medical (Clinics + Dentists)

**Primary job:** protect clinic flow and reception sanity while capturing scheduling demand safely.

**What she handles (strictly non-clinical)**
- Book, reschedule, and cancel appointments
- Appointment-type routing at a non-diagnostic level
- Policy FAQs (forms, arrival time, late policy, admin info, practice details)
- After-hours capture and next-day scheduling
- Optional **Receptionist Confirm Mode**: Lola proposes a change, reception approves it, the patient then receives confirmation

**Outcome**
- Fewer calls interrupting reception
- Cleaner scheduling flow
- Better after-hours capture
- Safer handling of non-clinical inbound demand

**Safety rail**
- Lola does **not** provide clinical advice, diagnosis, or triage
- Any request for medical advice is routed to reception immediately, or to a predefined safe instruction such as:  
  *“If this is urgent, please seek urgent medical care now. Otherwise, reception will contact you as soon as possible.”*
- Every step is logged by default

---

## 2) The pain Lola removes

### 2.1 Restaurants: no-shows, late cancellations, and phone chaos

Restaurants globally have been pushed toward deposits and no-show fees because no-shows and late cancellations create real financial damage. Even a modest no-show rate hurts disproportionately because restaurant revenue depends on finite inventory: tables, covers, and time. Once a time slot is lost, it is often impossible to recover in the moment.

**Operational pain Lola targets**
- Peak-hour phone pileups
- Staff dragged into mini call-centre mode
- Lost bookings and lost caller intent data
- Human error under pressure (wrong time, wrong name, wrong party size)

---

### 2.2 Medical: no-shows, phone congestion, and diary fragmentation

Appointment no-shows are a persistent healthcare problem, and front desks are often forced to juggle in-person patients, telephones, and admin simultaneously. The result is a messy scheduling environment where demand spikes are hard to absorb and after-hours requests are often lost.

**Operational pain Lola targets**
- Reception handling patients, phones, and admin at the same time
- “8am rush” and Monday spike behaviour
- After-hours demand leaking away
- Multi-provider diary complexity
- Callers drifting into clinical territory that must be handled safely

---

## 3) What Lola actually does

### 3.1 Core interaction loop (voice or WhatsApp call)

1. Answer instantly  
2. Identify intent (book / change / cancel / policy / escalation)  
3. Collect the minimum viable details  
4. Check availability in the connected system  
5. Propose suitable options conversationally  
6. Confirm and write back to the system  
7. Send confirmation (SMS / WhatsApp / email, depending on setup)  
8. Log the full interaction (intent, timestamps, outcome, notes)

---

### 3.2 The trust boundary

Lola is designed around a very clear boundary:

**Safe for automation**
- Scheduling
- Rescheduling
- Cancellations
- Availability checks
- Operational FAQs
- Administrative information

**Not safe for automation**
- Clinical advice
- Diagnosis
- Triage
- Symptom interpretation

So Lola can say:
- *“I can help you book the soonest available appointment. If you need medical advice, I’ll connect you to reception now.”*

And Lola must never say:
- *“Based on your symptoms, you should…”*

---

### 3.3 Human override (both verticals)

At any point, Lola can:
- Warm-transfer to a live person
- Create a callback task
- Push an approval request before finalising a change
- Gracefully stop automation and defer to staff

---

## 4) Setup: what a client actually does to go live

### 4.1 Day-0 prerequisites (both)

- Confirm which number(s) Lola will answer
- Decide escalation rules
- Provide policy information (hours, location, FAQs, rules)
- Choose confirmation channels (SMS / WhatsApp / email)
- Define tone of voice and brand behaviour

---

### 4.2 Restaurant setup

**Step 1 — Provision a dedicated Lola Number**
- One public-facing number guests actually use
- Existing direct lines can remain private for suppliers, VIPs, or internal use

**Step 2 — Route calls**
- Website, Google Business Profile, Instagram, and other public listings point to the Lola Number

**Step 3 — Connect the booking system**
- DinePlan or alternative reservation system via API or integration layer
- Map availability, seating rules, deposits, notes, tags, and table logic

**Step 4 — Teach Lola the house rules**
- Corkage, kids, allergies workflow, late arrivals, table turn times, deposits
- VIP handling rules and escalation triggers

**Step 5 — Soft launch**
- Start with after-hours and overflow
- Expand to full coverage once trust is established

---

### 4.3 Medical setup

**Step 1 — Connect calendar reality first**
- Fastest initial path is often Google Calendar or the clinic calendar layer
- Deeper practice management integrations can come later

**Step 2 — Define appointment types**
- Examples: new patient, follow-up, hygiene, procedure
- Each type has a duration, provider constraint, and lead-time rule

**Step 3 — Define safety rails and escalation**
- Any clinical question routes to reception immediately
- Emergency wording must be practice-approved

**Step 4 — Choose operating mode**
- **Autopilot:** Lola books directly within defined constraints
- **Receptionist Confirm Mode:** Lola drafts the action, staff approves it

**Step 5 — Audit trail by default**
- Every interaction is logged with caller, timestamp, intent, and outcome

---

## 5) What Lola reports back

### 5.1 Shared metrics (both verticals)

**Demand + access**
- Total inbound calls
- Peak load windows
- After-hours demand captured
- Average time to answer
- Hang-ups before resolution

**Outcomes**
- Booked / rescheduled / cancelled volumes
- Resolution rate
- Escalation rate
- Categorised reasons for escalation

**Efficiency**
- Estimated staff minutes saved
- Average handle time by intent
- Repeat-caller rate

**Conversation intelligence**
- Top caller intents
- Top FAQs
- Frustration or sentiment markers (optional)

---

### 5.2 Restaurant-specific metrics

**Revenue + inventory**
- Bookings captured that may otherwise have been missed
- Covers booked via phone or WhatsApp
- Waitlist conversion rate
- Late cancellation / no-show risk flags
- Seating preference distribution

**Service quality**
- Staff interruption load during service peaks
- Mistake prevention and correction patterns

---

### 5.3 Medical-specific metrics

**Clinic flow**
- Appointment fill rate by provider and day
- Diary gap recovery
- No-show pattern analysis
- After-hours capture leading to next-day bookings
- Escalation reasons (clinical query, complex case, insurance admin)

**Safety + compliance**
- Count of clinical-advice requests safely routed away from automation
- Callback response times
- Full audit-trail export for internal review

---

## 6) Why this is hard to copy

Lola is not just a voice bot. The defensibility comes from:
- Operational constraint mapping
- Tight booking and scheduling integrations
- Human escalation choreography
- Continuous learning from transcripts and outcomes
- A growing metrics layer that becomes a management control surface over time

The hard part is not generating speech.  
The hard part is making automation behave reliably inside messy real-world operations.

---

## 7) The product promise

### Restaurants
**Zero missed calls. Clean bookings. Better service.**

### Medical
**Clinic calm. Clean scheduling. Safe escalation.**

---

## 8) Implementation notes (so Codex doesn’t do something stupid)

- Never fabricate availability
- If a connected system is unavailable, Lola must degrade gracefully:  
  *“I can take your request and have the team confirm shortly.”*
- Medical mode must never provide clinical advice, diagnosis, or triage
- Always log: **intent → action → outcome**
- Always provide an escape hatch: transfer, callback, or staff approval
- Prefer conservative execution over impressive-looking guesswork
- Design principle: **Looks magical, behaves conservative**