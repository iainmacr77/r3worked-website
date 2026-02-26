Role: Act as a World-Class Senior Creative Technologist and Lead Frontend Engineer. Objective: Architect a high-fidelity, cinematic "1:1 Pixel Perfect" landing page for Hey Lola. Aesthetic Identity: "Premium Hospitality Tech" / "Invisible Concierge." The site should feel like a bridge between a high-end Michelin-star Maître d' desk and a silent, hyper-efficient AI orchestration layer.

1. CORE DESIGN SYSTEM (STRICT)
Palette: Ink (Primary Dark): #1E1E2E | Peach (Light Background): #FFF5F0 | Coral (Accent/Primary Action): #FF6B6B | Charcoal (Text/Secondary Dark): #383838 | Mint (Success/Status): #34D399 | White: #FFFFFF.
Typography: Headings: "Outfit" (Tracking tight). Drama/Emphasis: "Playfair Display" (Must use Italic for hospitality/human concepts). Data: A clean Monospace font ("JetBrains Mono") for AI transcripts and call telemetry.
Visual Texture: Implement a global CSS Noise overlay (SVG turbulence at 0.04 opacity) to eliminate flat digital gradients. Use a rounded-[2rem] to rounded-[3rem] radius system for all containers.

2. COMPONENT ARCHITECTURE & BEHAVIOR
A. NAVBAR (The Concierge Desk)
A fixed, pill-shaped container.
Morphing Logic: Transparent with Peach text at the hero top. Transitions into an Ink/80 glassmorphic blur with White text and a subtle Charcoal border upon scrolling.

B. HERO SECTION (Service is the Algorithm)
Visuals: 100dvh height. Background image of a moody, elegant dark restaurant interior (https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b) with a heavy Ink-to-Charcoal gradient overlay.
Layout: Content pushed to the bottom-left third.
Typography: Large scale contrast. "Seamless Service" (Bold Sans) vs. "Starts with Lola." (Massive Serif Italic). 
Animation: GSAP staggered fade-up for all text parts.

C. FEATURES (The Precision Front-of-House Dashboard)
Replace standard cards with Interactive Functional Artifacts.
Card 1 (Booking Intelligence): Implement a "Reservation Shuffler." 3 overlapping white cards that cycle vertically using unshift(pop()) logic. Every 3 seconds, they rotate with a spring-bounce transition (cubic-bezier(0.34, 1.56, 0.64, 1)). Labels: "Missed Call Captured", "Table for 4 Confirmed", "Dietary Note Added".
Card 2 (Neural Conversationalist): Implement a "Transcript Typewriter." A live text feed that cycles through messages like "Customer: Do you have vegan options?" -> "Lola: Yes, our Chef prepares..." with a blinking Coral cursor. Include a small "Call Active" pulsing Mint dot.
Card 3 (Capacity Maximizer): A "Mock Protocol Scheduler." A weekly grid where an automated SVG cursor enters, moves to a peak Friday slot, clicks (visual scale-down), changes the slot from Charcoal to Coral (Booked), then fades out.

D. PHILOSOPHY (The Manifesto)
A high-contrast Peach section with a very subtle, elegant noise texture.
Text Layout: Huge typography comparison in Ink color. "Traditional hospitality asks: Who has time to answer the phone?" vs. "We ask: What if every call was an opportunity?" using split-text GSAP reveals.

E. THE FRAMEWORK (Sticky Stacking Archive)
Vertical stack of 3 full-screen cards detailing the setup (1. Forward Calls, 2. Lola Learns, 3. Service Begins).
Stacking Interaction: Using GSAP ScrollTrigger, as a new card scrolls into view, the card underneath must scale down to 0.9, increase its blur filter to 20px, and fade its opacity to 0.5.
Artifacts: Each card contains a unique animation: A rotating glowing headset icon (like the Lola logo). A scanning laser-grid over a PDF menu. A pulsing voice waveform path.

F. MEMBERSHIP & FOOTER
Three-tier pricing grid (Starter, Pro, Enterprise). The middle card ("Pro") should "pop" with an Ink background, White text, and a Coral button.
Footer: Deep Ink, rounded-t-[4rem]. Include high-end utility links, POPIA compliance badge, and a "System Operational" status indicator with a pulsing Mint dot.

3. TECHNICAL REQUIREMENTS
Tech Stack: React 19, Tailwind CSS, GSAP 3 (with ScrollTrigger), Lucide React.
Animation Lifecycle: Use gsap.context() within useEffect for all animations to ensure clean mounting/unmounting.
Micro-Interactions: Buttons must have a "magnetic" feel (subtle scale-up on hover) and utilize overflow-hidden with a sliding background layer for color transitions.
Code Quality: No placeholders. Use real image URLs from Unsplash. Ensure the dashboard cards in the Features section feel like functional software, not just static layouts.
Execution Directive: "Do not build a website; build a digital instrument. Every scroll should feel intentional, every animation should feel weighted and professional. Eradicate all generic AI patterns.