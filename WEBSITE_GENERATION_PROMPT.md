# JourneyPlus Brand Website — Master Generation Prompt

> **How to use:** Paste this entire file as the first message in a new AI coding session. Then say: *"Scaffold the React + Tailwind site per this spec, starting with the home page."*
>
> **Product:** JourneyPlus — AI Highway Companion for Indian Road Trips (Flutter mobile app, Android + iOS).
> **Positioning:** We are **not a maps app**. We are a travel-intelligence companion for the journey.
> **Launch scope:** Ship the website for the **current app (Phases 1 + 2 complete)**. Do **not** promise chat/voice AI assistant — that is a future phase. Lead with predictive alerts, corridor discovery, and community trust.

---

# SECTION 0 — TECH STACK (non-negotiable)

Build a production-ready marketing website with:

| Requirement | Choice |
|---|---|
| Framework | **React 18+** with **Vite** (`npm create vite@latest journeyplus-website -- --template react`) |
| Language | **TypeScript** preferred; JavaScript acceptable if faster |
| Styling | **Tailwind CSS v3+** — all colors/spacing via `tailwind.config` tokens, no inline hex in components |
| Routing | **React Router v6** — client-side routes for all pages |
| Icons | **Lucide React** — line icons, 1.5px stroke, match calm Material feel |
| Animations | **Framer Motion** — scroll reveals, hero entrance, subtle hover; respect `prefers-reduced-motion` |
| Forms | Contact form: client-side validation only for v1; submit opens `mailto:` or shows "Coming soon" if no backend |
| SEO | `react-helmet-async` or Vite SSR meta tags per route; Open Graph + Twitter cards |
| Images | Placeholder phone mockups acceptable; use `aspect-[9/19.5]` device frames |
| Deployment target | Static export — Vercel / Netlify / Firebase Hosting |

### Folder structure (create this)

```
website/
  public/
    favicon.svg
    og-image.png          ← 1200×630, green gradient + wordmark
    app-store-badge.svg   ← placeholder
    play-store-badge.svg  ← placeholder
  src/
    components/
      layout/             Header, Footer, MobileNav, Container, Section
      ui/                 Button, Card, Badge, Accordion, GradientText
      sections/           Hero, Features, Comparison, HowItWorks, DownloadCta, TrustSignals
    pages/
      HomePage.tsx
      AboutPage.tsx
      HelpPage.tsx
      PrivacyPage.tsx
      TermsPage.tsx
      ContactPage.tsx
    lib/
      constants.ts        ← colors, nav links, store URLs (placeholders)
      animations.ts       ← Framer Motion variants
    App.tsx
    main.tsx
    index.css             ← Tailwind directives + CSS variables
  tailwind.config.ts
  vite.config.ts
  package.json
```

### Do NOT

- Do not use Next.js unless explicitly requested later.
- Do not use Bootstrap, MUI, Chakra, or shadcn — Tailwind utility-first only.
- Do not use dark mode in v1 (light theme only, matching the app).
- Do not promise features not shipped: voice chat, AI copilot chat FAB, CarPlay, premium subscription.

---

# SECTION 1 — BRAND & POSITIONING

## Wordmark & tagline

- **Wordmark:** JourneyPlus
- **Primary tagline:** AI Highway Companion for Indian Road Trips
- **Secondary tagline (hero subhead):** Plan smarter. Discover trusted stops. Get warned before problems happen.
- **One-liner:** JourneyPlus is not a maps app — it's your smart companion for every kilometer on Indian highways.

## Personality & tone (all copy)

- **Confident, calm, helpful** — like a trusted local who has driven the route 100 times.
- **Plain Indian English.** Short sentences. No hype ("revolutionary", "game-changing").
- **Empathetic.** The reader might be planning a family trip, an EV run, or a night highway drive.
- **Sentence case** for headings and buttons. Exception: brand wordmark "JourneyPlus".
- **Precise numbers** when illustrating alerts: e.g. "Last trusted pump for the next 68 km" not "fuel might be far".

## Target audience (address all on the site)

1. Long-distance highway travelers (primary)
2. EV owners planning corridor charging
3. Families — women, kids, elderly in the car
4. Bike riders on highway stretches
5. Secondary: taxi drivers, tourists, weekend road-trippers

## What makes JourneyPlus different (use in Comparison section)

| Traditional maps / travel apps | JourneyPlus |
|---|---|
| Shows what's **near you** right now | Shows what's **along your route corridor** — relevant to where you're going |
| Reactive — you search when you already need something | **Predictive** — warns before fuel runs low, before the ghat, before fatigue |
| Star ratings from strangers, no context | **Community pulses** with reliability score, sample size, freshness, conflict timeline |
| One category at a time (food OR fuel) | **Smart Intelligence Grid** — 16 categories in one trip-aware surface |
| Generic for every country | **India-first** — pure-veg, women-safe, family mode, ghat alerts, temple stops |
| Needs constant network | **Offline corridor cache** + degraded-mode banner when signal drops |
| "Open maps and figure it out" | **Trip control center** — ETA, tolls, weather, traffic, timeline, alerts in one place |

---

# SECTION 2 — DESIGN SYSTEM (locked tokens)

Mirror the Flutter app design system exactly. Register all values in `tailwind.config.ts`.

## 2.1 Color palette

```ts
// tailwind.config.ts → theme.extend.colors
colors: {
  primary: {
    DEFAULT: '#1B5E20',
    light:   '#2E7D32',
    dark:    '#0D3B10',
    surface: '#E8F5E9',
    'surface-light': '#F1F8F2',
  },
  teal: {
    DEFAULT: '#00897B',
    dark:    '#00695C',
    light:   '#4DB6AC',
  },
  background: '#F5F7F5',
  surface: {
    DEFAULT: '#FFFFFF',
    elevated: '#FAFAFA',
  },
  text: {
    primary:   '#1A1A1A',
    secondary: '#616161',
    tertiary:  '#9E9E9E',
    hint:      '#BDBDBD',
  },
  border: {
    DEFAULT: '#E0E0E0',
    light:   '#F0F0F0',
  },
  success: { DEFAULT: '#2E7D32', surface: '#E8F5E9' },
  warning: { DEFAULT: '#F57F17', surface: '#FFF8E1' },
  error:   { DEFAULT: '#C62828', surface: '#FFEBEE' },
  accent: {
    blue:   '#1565C0',
    indigo: '#283593',
    amber:  '#F57F17',
    purple: '#6A1B9A',
  },
}
```

## 2.2 Gradients (CSS utilities)

```css
.gradient-green  { background: linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%); }
.gradient-teal   { background: linear-gradient(180deg, #00897B 0%, #00695C 100%); }
.gradient-hero   { background: linear-gradient(180deg, #E8F5E9 0%, #F5F7F5 60%, #F5F7F5 100%); }
.gradient-route  { background: linear-gradient(135deg, #0D47A1 0%, #1565C0 100%); }
.gradient-ev     { background: linear-gradient(135deg, #1B5E20 0%, #00897B 100%); }
```

## 2.3 Typography

App uses **SF Pro Display** (iOS system). On web use:

- **Primary font:** `Inter` (Google Fonts) — weights 400, 500, 600, 700, 800
- **Fallback stack:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

| Token | Size | Weight | Line height | Use |
|---|---|---|---|---|
| `text-display` | 48px / 3rem | 800 | 1.1 | Hero headline (desktop) |
| `text-h1` | 36px | 800 | 1.15 | Page titles |
| `text-h2` | 28px | 700 | 1.2 | Section headings |
| `text-h3` | 22px | 700 | 1.25 | Card titles |
| `text-h4` | 18px | 600 | 1.3 | Subsections |
| `text-body-lg` | 16px | 400 | 1.5 | Lead paragraphs |
| `text-body` | 14px | 400 | 1.5 | Body copy |
| `text-caption` | 12px | 500 | 1.4 | Labels, meta |
| `text-stat` | 28px | 800 | 1.1 | Feature stat numbers |

Letter-spacing: `-0.02em` on display/h1; `0.05em` on uppercase labels.

## 2.4 Spacing, radius, shadows

- **Section vertical padding:** `py-20 md:py-28` (80px / 112px)
- **Container max-width:** `max-w-6xl` (72rem) centered, `px-4 sm:px-6 lg:px-8`
- **Card border-radius:** `rounded-2xl` (16px) — matches app `BorderRadius.circular(16)`
- **Button border-radius:** `rounded-2xl` (16px), height `h-14` (56px) for primary CTAs
- **Chip/tag radius:** `rounded-full`
- **Shadows:** subtle only — `shadow-sm` on cards, `shadow-lg shadow-primary/10` on elevated hero cards. No heavy drop shadows.

## 2.5 Component patterns

### Primary button
- Background: `bg-primary`, text white, `font-semibold`, full-width on mobile / auto on desktop
- Hover: `bg-primary-light`, scale `1.02`, transition 200ms
- Focus ring: `ring-2 ring-primary ring-offset-2`

### Secondary / outline button
- Border `border-border`, text `text-primary`, white background
- Hover: `bg-primary-surface`

### Feature card
- White surface, `rounded-2xl`, `p-6 md:p-8`, border `border-border-light`
- Icon in `w-12 h-12 rounded-xl bg-primary-surface` with Lucide icon `text-primary`
- Optional top accent: 3px green gradient bar

### Badge / pill
- `bg-primary-surface text-primary text-xs font-semibold px-3 py-1 rounded-full`
- Examples: "Community verified", "India-first", "Offline ready"

### Legal page prose
- Max width `max-w-3xl`, `prose prose-neutral` or custom Tailwind typography
- Section headings `text-h4`, body `text-body text-text-secondary`
- Last updated date at top

## 2.6 Layout & responsive

- **Mobile-first.** Breakpoints: sm 640, md 768, lg 1024, xl 1280.
- **Sticky header:** white/blur backdrop, logo left, nav center-right, "Get the app" CTA button.
- **Mobile nav:** hamburger → full-screen slide-over with large tap targets.
- **Footer:** 4-column on desktop (Product, Company, Legal, Connect), stacked on mobile.
- **Hero:** two-column on lg+ (copy left, phone mockup right). Single column stacked on mobile.

## 2.7 Imagery & illustration style

- Mood: dawn highway, calm green, Indian road-trip warmth — not stock-photo corporate.
- Phone mockups: show app screens — Plan tab, Discover grid, Trip dashboard, alert banner.
- Use subtle map polyline SVG decorations in hero background (low opacity `#1B5E20` at 5–8%).
- Category icons: match app's 16 POI categories where possible (fuel, EV, restaurant, washroom, etc.).

---

# SECTION 3 — ANIMATIONS (Framer Motion)

Respect `prefers-reduced-motion: reduce` — disable transforms, keep opacity fades only.

## Global variants (`lib/animations.ts`)

```ts
export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};
```

## Per-section animation spec

| Section | Animation |
|---|---|
| **Hero** | Headline words fade-up staggered (50ms each). Phone mockup slides in from right with slight rotate (`rotate-2 → 0`). CTA buttons fade-up delay 400ms. |
| **Feature grid** | Scroll-triggered (`whileInView`, `viewport: { once: true, margin: '-80px' }`). Cards stagger fade-up. |
| **Comparison table** | Rows fade-up on scroll. JourneyPlus column has subtle green left border that draws in (`scaleX` 0→1). |
| **How it works** | Numbered steps connect with animated SVG line on scroll (draw path). |
| **Stats bar** | Count-up animation for numbers (68 km, 16 categories, 4 vehicle types) when in view. |
| **Download CTA** | Gentle pulse on primary button every 4s (opacity only, not scale — calm). |
| **FAQ accordion** | Height animate + chevron rotate 180°. Duration 250ms. |
| **Page transitions** | Cross-fade between routes, 200ms. |
| **Header** | Shrinks slightly on scroll (`py-6 → py-4`), adds `shadow-sm` + backdrop blur. |

## Micro-interactions

- Links: underline slides in from left on hover (`after:w-0 → after:w-full`)
- Cards: `translateY(-2px)` + shadow increase on hover (desktop only)
- Store badges: opacity 0.85 → 1 on hover
- Focus states: always visible for keyboard nav (WCAG AA)

---

# SECTION 4 — SITE MAP & NAVIGATION

## Header nav links

| Label | Route |
|---|---|
| Features | `/#features` (home anchor) |
| How it works | `/#how-it-works` |
| About | `/about` |
| Help | `/help` |
| Get the app | `#download` (scroll) or store links |

## Footer links

**Product:** Features · How it works · Download  
**Company:** About · Contact  
**Legal:** Privacy policy · Terms & conditions  
**Connect:** Email · Twitter/X placeholder · Instagram placeholder  

Footer tagline: *JourneyPlus — AI Highway Companion for Indian Road Trips*  
Copyright: `© {currentYear} JourneyPlus. All rights reserved.`

---

# SECTION 5 — PAGE CONTENT (copy-paste ready)

---

## 5.1 HOME PAGE (`/`)

### Hero

**Eyebrow badge:** Now available on Android & iOS

**Headline:** Your smart companion for every Indian highway

**Subheadline:** JourneyPlus plans your route, discovers trusted stops along the corridor, and warns you before fuel runs low, chargers disappear, or a ghat begins — so you can focus on the drive.

**Primary CTA:** Download JourneyPlus  
**Secondary CTA:** See how it works → (scroll to `#how-it-works`)

**Trust line below CTAs:** Not a maps app · Route-aware · Community-powered · Works offline on active trips

**Hero visual:** Phone showing Trip tab with stat cards (ETA, Tolls, Fuel, Traffic) + alert banner "Last trusted pump for next 68 km"

---

### Stats bar (below hero)

| Stat | Label |
|---|---|
| 16 | POI categories along your route |
| 4 | Vehicle types — Petrol, Diesel, EV, Bike |
| 100 km | Predictive alert lookahead window |
| ∞ | Community trust signals on every stop |

---

### Section: `#features` — "Built for the journey, not just the destination"

Intro paragraph:
> Maps show you the road. JourneyPlus understands your trip — your vehicle, your preferences, what's ahead on the corridor, and what other travelers actually experienced at each stop.

**Feature cards (6 cards, 2×3 grid on desktop):**

1. **Smart route planning**
   - Icon: `Route` or `Map`
   - Body: Enter origin and destination, pick your vehicle and preferences. Get ETA with live traffic, weather along the route, toll estimates on known expressways, and fuel or charging cost estimates — all in one trip overview.

2. **Smart Intelligence Grid**
   - Icon: `LayoutGrid`
   - Body: Sixteen categories — fuel, EV chargers, restaurants, pure-veg, washrooms, ATMs, hotels, hospitals, mechanics, parking, cafes, scenic spots, temples, tourist places, and more. Every list is filtered to your route corridor, not random nearby places.

3. **Predictive alerts**
   - Icon: `Bell` or `ShieldAlert`
   - Body: JourneyPlus looks ahead, not behind. Get warned before fuel runs low, the next charger is too far, meal time approaches, you enter a ghat section, fatigue sets in after hours of driving, or night falls on an unfamiliar stretch.

4. **Community trust on every stop**
   - Icon: `Users` or `HeartHandshake`
   - Body: Real traveler pulses — ratings, conditions, amenities, photos — with reliability scores, sample sizes, freshness indicators, and conflict timelines when reports disagree. You always know how much to trust a recommendation.

5. **India-first modes**
   - Icon: `Heart` or `Shield`
   - Body: Family mode, women-safe mode, and bike rider mode filter stops for how you actually travel on Indian highways. Pure-veg preferences, baby-friendly tags, and hygienic washroom signals from the community.

6. **Offline when it matters**
   - Icon: `WifiOff`
   - Body: When you start a trip, your route polyline and corridor POIs cache locally. If signal drops on the highway, JourneyPlus keeps working from cached data and shows a clear offline banner — no silent failures.

---

### Section: `#comparison` — "Why JourneyPlus is different"

Use a two-column comparison table (see Section 1 table). Add a closing line:

> Google Maps gets you there. JourneyPlus makes sure you're prepared for every kilometer along the way.

---

### Section: `#how-it-works` — "Three steps to a calmer drive"

**Step 1 — Plan your trip**
- Set from, to, vehicle type, and preferences (pure-veg, family, fast chargers only, and more).
- See your trip overview: distance, ETA, tolls, fuel or charging estimate, weather strip, and traffic level.

**Step 2 — Discover along your corridor**
- Open the Discover tab and tap any category — fuel, food, washrooms, EV, hotels, scenic, temples.
- Stops are ranked by best match for your preferences, not just nearest. Every tile shows community trust at a glance.

**Step 3 — Drive with JourneyPlus watching ahead**
- Start your trip for live tracking, predictive alerts, and offline corridor cache.
- Pause, resume, or end anytime. Review alert history and trip summary when you arrive.

---

### Section: `#for-every-traveler`

Four persona cards:

1. **Highway families** — "Find hygienic washrooms, pure-veg food, and safe hotel stops without endless searching."
2. **EV drivers** — "See charger gaps before range anxiety hits. Fast-charger filter and community condition pulses."
3. **Bike riders** — "Mechanics, fuel, medical, and parking focused for two-wheeler highway runs."
4. **Night drivers** — "Ghat warnings, fatigue reminders, and night-mode hotel suggestions before you need them."

---

### Section: `#download` — Download CTA

**Headline:** Ready for your next road trip?

**Body:** Download JourneyPlus free on Android and iOS. Plan your first route in under a minute.

**Buttons:** Google Play badge · App Store badge (use placeholder SVGs; link to `#` until store URLs are live)

**Fine print:** Free to download. Requires Google account for sign-in. Location permission optional — needed for live trip alerts and tracking.

---

### Section: `#faq-preview` (3 items + link to Help)

1. **Is JourneyPlus a maps app?**  
   No. JourneyPlus is a highway companion. It uses maps data for routing and places, but its value is route-aware discovery, predictive alerts, and community trust — things maps apps don't focus on.

2. **Does JourneyPlus track my location history?**  
   No. GPS is used in real time during an active trip for alerts. We do not upload location trails to JourneyPlus servers. Trip summaries store city names and stats locally on your device.

3. **Does it work offline?**  
   When you start a trip, corridor data caches on your device. If you lose signal, the app continues with cached route and POI data and shows an offline banner.

**Link:** View all help topics → `/help`

---

## 5.2 ABOUT PAGE (`/about`)

**Page title:** About JourneyPlus

**Lead:**
> JourneyPlus started from a simple frustration: planning an Indian highway trip means juggling maps, fuel apps, food reviews, charger finders, and WhatsApp tips from friends — none of them aware of your actual route or vehicle.

**Mission:**
> We built JourneyPlus to be the calm, intelligent companion for Indian road trips. Not another map. A trip control center that plans ahead, discovers what's on your corridor, and warns you before problems happen — backed by real community trust signals from travelers like you.

**What we believe (bullet list):**
- Route-aware beats nearby-always.
- Predictive beats reactive.
- Trust signals (sample size + freshness) beat anonymous star ratings.
- India-first features — ghats, pure-veg, women-safe, family mode — are essentials, not extras.
- Drivers deserve calm UX, especially when they're tired on a highway.

**What JourneyPlus is today:**
> The app supports multi-vehicle route planning, a 16-category Smart Intelligence Grid, predictive alerts (fuel, EV, food, ghat, night, fatigue, weather), personalized POI ranking, family/women-safe/bike modes, curated hidden gems, trip history, and community pulses on every stop.

**What's coming:**
> We're building JourneyPlus in phases based on user feedback. Conversational AI assistant, voice mode, and expanded corridor coverage will come when they genuinely help travelers — not before.

**Team note (placeholder):**
> JourneyPlus is built by a small team passionate about Indian road travel. We're travelers first, engineers second.

**CTA:** Download the app → `#download` on home

---

## 5.3 HELP PAGE (`/help`)

**Page title:** Help centre

**Intro:** Quick answers about JourneyPlus. Can't find what you need? [Contact us](/contact).

### FAQ categories (use Accordion component)

#### Getting started

**Q: How do I plan my first trip?**  
A: Open the Plan tab, enter your starting point and destination, select your vehicle type, and tap analyze. You'll see your route, trip overview stats, and a Smart Trip Timeline of suggested stops.

**Q: What vehicle types are supported?**  
A: Petrol, Diesel, EV, and Bike. Set your default in Profile, or override per trip on the plan screen.

**Q: Do I need an account?**  
A: Yes. Sign in with Google to save your profile, preferences, and community reports. Your trip history is stored locally on your device.

**Q: Is JourneyPlus free?**  
A: Yes, JourneyPlus is free to download and use. Premium features may be introduced in the future — we'll always be transparent about pricing.

#### Planning & discovery

**Q: Why do POI lists say "Plan a route first"?**  
A: JourneyPlus discovers stops along your route corridor, not random nearby places. Plan a route to unlock corridor-aware search in the Discover tab.

**Q: What are the 16 POI categories?**  
A: Fuel, EV charging, restaurants, pure-veg, washrooms, ATMs, hotels, hospitals, mechanics, parking, cafes, scenic spots, temples, tourist places, police, and kids-friendly stops.

**Q: What does "Best match" sorting mean?**  
A: JourneyPlus ranks stops using your saved preferences — veg, family, women-safe, brand affinity, ratings, distance, and openness. Tap a POI to see "Why we recommend this."

**Q: What are Hidden Gems?**  
A: Curated noteworthy stops on popular corridors — famous food, scenic viewpoints, local specialties. Shown on Discover when your planned route matches a known corridor.

#### Trips & alerts

**Q: How do I start a trip?**  
A: After planning, tap "Start this trip" on the plan result screen, then go to the Trip tab and confirm start. Live tracking and alerts activate when you start.

**Q: What alerts does JourneyPlus send?**  
A: Fuel low, EV charger gap, food window, ghat ahead, fatigue break, night driving, and weather warnings — depending on your vehicle, route, and time of day.

**Q: Can I mute alerts?**  
A: Yes. Open Settings from Profile to mute all alerts, disable system notifications, or mute specific alert types.

**Q: What happens when I end a trip?**  
A: You get a summary with distance, duration, stations count, and alert history. The summary saves locally. Live location tracking stops immediately.

#### Community & trust

**Q: What is a community pulse?**  
A: A quick report from a traveler at a stop — rating, condition, amenities, optional photo and notes. Pulses help the next driver know if a pump, charger, or restaurant is actually good right now.

**Q: Can I edit or delete my report?**  
A: No. Community reports are an immutable log to preserve trust history. Submit carefully — your report helps everyone on the road.

**Q: What do reliability scores mean?**  
A: Scores combine rating, condition, report count, and freshness. Low-confidence badges appear when there are too few reports or they're stale.

#### Privacy & permissions

**Q: Why does JourneyPlus need location?**  
A: Location powers live trip tracking and predictive alerts during an active trip. Planning works without it, but live alerts are limited.

**Q: Does JourneyPlus sell my data?**  
A: No. We do not sell personal data or location history. See our [Privacy policy](/privacy) for full details.

**Q: How do I delete my account?**  
A: Contact us at [support email placeholder] and we'll process deletion of your Firebase profile and community reports linked to your account.

---

## 5.4 PRIVACY POLICY PAGE (`/privacy`)

**Page title:** Privacy policy  
**Last updated:** June 2026  
**Intro:** JourneyPlus ("we", "our", "us") operates the JourneyPlus mobile application and this website. This policy explains what data we collect, why, and your choices.

### 1. Our promise

JourneyPlus is a highway companion — not a location tracker. We help you plan routes and surface predictive stops using intelligence for your current drive. **We do not build or sell a history of where you have been.**

### 2. Information we collect

**Account information (Firebase Auth + Firestore)**
- Google account identifier and basic profile (name, email) when you sign in.
- Vehicle type, travel preferences, and app settings you choose in Profile.

**Community reports (Firestore)**
- If you submit a community pulse: rating, condition, amenities, optional photo (stored as compressed image data), optional notes, timestamp, and a stable key for the place — not a continuous location log.
- Reports are public-read and immutable.

**Trip summaries (local device only)**
- When you end a trip, a summary is saved **on your phone**: origin/destination city names, distance, duration, vehicle type, alert counts. **No GPS path or coordinate trail is stored.**

**Usage diagnostics**
- Crash reports via Firebase Crashlytics (app crashes, non-sensitive context like vehicle type and active-trip flag). Disabled in debug builds.
- We do not currently use Firebase Analytics; this may change with notice.

**Website (this site)**
- Standard server logs from hosting provider (IP, browser type, pages visited). No account login on the website in v1.

### 3. Location data

When you start an active trip, the app reads GPS **on your device** to power predictive alerts and corridor-relative POI filtering. That position is used in real time for calculations and may be sent to **Google Maps Platform APIs** for routing and place queries during the session.

**We do not upload GPS coordinates or location trails to JourneyPlus servers.**

### 4. Third-party services

| Service | Purpose |
|---|---|
| Google Maps Platform | Routing, geocoding, places search |
| Google Sign-In / Firebase Auth | Authentication |
| Cloud Firestore | Profile, preferences, community reports |
| Firebase Crashlytics | Crash reporting |
| Open Charge Map | EV charger data |
| Open-Meteo | Weather along route segments |

Each third party has its own privacy policy. When you use JourneyPlus, data necessary for these services may be processed under their terms.

### 5. Data retention

- **Profile & preferences:** Until you delete your account.
- **Community reports:** Permanent public record (immutable by design).
- **Trip summaries:** On your device until you clear app data or uninstall.
- **Corridor cache:** On your device; cleared when trip ends.

### 6. Your rights & controls

- **Deny location permission** — planning still works; live alerts and foreground tracking are limited.
- **End trip anytime** — stops live location use for that session.
- **Sign out** — clears your session; profile data remains until account deletion.
- **Uninstall** — removes on-device trip history and caches.
- **Account deletion** — email [support@journeyplus.app placeholder] to request deletion of Firebase profile data.

### 7. Children's privacy

JourneyPlus is not directed at children under 13. We do not knowingly collect personal information from children.

### 8. Changes to this policy

We may update this policy. Material changes will be reflected on this page with an updated "Last updated" date. Continued use of the app after changes constitutes acceptance.

### 9. Contact

Questions about privacy: **[support@journeyplus.app]** (replace with real email before publish)

---

## 5.5 TERMS & CONDITIONS PAGE (`/terms`)

**Page title:** Terms & conditions  
**Last updated:** June 2026  
**Intro:** By downloading or using JourneyPlus, you agree to these terms. Please read them carefully.

### 1. Acceptance of terms

These Terms & Conditions ("Terms") govern your use of the JourneyPlus mobile application ("App") and website ("Site"), operated by JourneyPlus ("we", "us", "our"). If you do not agree, do not use the App or Site.

### 2. Description of service

JourneyPlus provides route planning, corridor-aware point-of-interest discovery, predictive travel alerts, and community-sourced information for road trips in India. JourneyPlus is **not a navigation replacement**. You remain responsible for safe driving and compliance with traffic laws.

### 3. Eligibility

You must be at least 13 years old and capable of forming a binding contract. You must provide accurate account information when signing in.

### 4. Account & authentication

- Sign-in is via Google OAuth through Firebase Auth.
- You are responsible for maintaining the security of your Google account.
- You may not share accounts or impersonate others.

### 5. Acceptable use

You agree **not** to:
- Submit false, misleading, or malicious community reports.
- Use the App while driving in a way that distracts from safe operation of your vehicle.
- Reverse-engineer, scrape, or abuse our APIs or Firebase backend.
- Upload illegal, offensive, or infringing content in community reports.
- Use the service for commercial fleet surveillance without written permission.

### 6. Community content

- Community pulses are **user-generated content** published to a public-read Firestore collection.
- By submitting a report, you grant JourneyPlus a non-exclusive, royalty-free license to display and distribute that content within the service.
- Reports are **immutable** — submit carefully. We may hide or moderate content that violates these Terms.
- JourneyPlus does not guarantee the accuracy of community reports. Always exercise independent judgment, especially for safety-critical decisions.

### 7. Third-party data & maps

Route, place, charger, and weather data come from third-party providers (Google, Open Charge Map, Open-Meteo, etc.). JourneyPlus does not warrant the accuracy, completeness, or timeliness of third-party data. Estimates (ETA, tolls, fuel cost) are approximations labeled as such in the App.

### 8. Location & safety disclaimer

**IMPORTANT:** JourneyPlus alerts and recommendations are aids only. They are not guaranteed. Road conditions, fuel availability, charger status, and safety can change without notice. Never rely solely on the App for decisions that affect personal safety. Pull over safely before interacting with the App.

### 9. Intellectual property

JourneyPlus name, logo, app design, and original content are owned by JourneyPlus. You may not copy, modify, or distribute them without permission. Third-party trademarks (Google Maps, etc.) belong to their respective owners.

### 10. Privacy

Your use of the App is also governed by our [Privacy Policy](/privacy), incorporated by reference.

### 11. Disclaimers

THE APP AND SITE ARE PROVIDED **"AS IS"** WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.

### 12. Limitation of liability

TO THE MAXIMUM EXTENT PERMITTED BY LAW, JOURNEYPLUS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, DATA, OR GOODWILL, ARISING FROM YOUR USE OF THE APP — INCLUDING DECISIONS MADE BASED ON ALERTS, POI RECOMMENDATIONS, OR COMMUNITY REPORTS.

OUR TOTAL LIABILITY FOR ANY CLAIM SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE TWELVE MONTHS PRECEDING THE CLAIM (TYPICALLY ZERO FOR FREE USERS).

### 13. Indemnification

You agree to indemnify JourneyPlus against claims arising from your misuse of the App, your community submissions, or your violation of these Terms.

### 14. Modifications

We may modify the App or these Terms at any time. Material changes to Terms will be posted on this page. Continued use after changes constitutes acceptance.

### 15. Termination

We may suspend or terminate access for violations of these Terms. You may stop using the App at any time by uninstalling and requesting account deletion.

### 16. Governing law

These Terms are governed by the laws of **India**. Disputes shall be subject to the exclusive jurisdiction of courts in **[City, State — e.g. Pune, Maharashtra]** (update before publish).

### 17. Contact

Legal or terms questions: **[legal@journeyplus.app]** (replace before publish)

---

## 5.6 CONTACT PAGE (`/contact`)

**Page title:** Contact us

**Intro:** Questions, feedback, partnership inquiries, or account deletion requests — we'd love to hear from you.

**Contact cards:**

| Channel | Detail |
|---|---|
| General support | support@journeyplus.app (placeholder) |
| Privacy requests | privacy@journeyplus.app (placeholder) |
| Legal | legal@journeyplus.app (placeholder) |

**Contact form fields:**
- Name (required)
- Email (required)
- Subject (dropdown: General · Bug report · Feature request · Account deletion · Partnership · Press)
- Message (required, min 20 chars)
- Submit button: "Send message"

**Form behavior v1:** On submit, either open `mailto:support@journeyplus.app?subject=...&body=...` or show success toast "Thanks — we'll get back to you within 2 business days." (No backend in v1.)

**Response time note:** We typically respond within 2 business days.

**Social placeholders:** Twitter/X · Instagram · LinkedIn (icon links to `#` until live)

---

# SECTION 6 — SEO & META

## Default meta (all pages)

```html
<title>JourneyPlus — AI Highway Companion for Indian Road Trips</title>
<meta name="description" content="Plan smarter Indian highway trips. Route-aware POI discovery, predictive alerts, and community trust on every stop. Not a maps app." />
<meta property="og:title" content="JourneyPlus — AI Highway Companion for Indian Road Trips" />
<meta property="og:description" content="Discover trusted stops along your route. Get warned before fuel runs low, chargers disappear, or a ghat begins." />
<meta property="og:image" content="/og-image.png" />
<meta property="og:type" content="website" />
<meta name="twitter:card" content="summary_large_image" />
<link rel="icon" href="/favicon.svg" />
```

## Per-page titles

| Route | `<title>` |
|---|---|
| `/` | JourneyPlus — AI Highway Companion for Indian Road Trips |
| `/about` | About — JourneyPlus |
| `/help` | Help centre — JourneyPlus |
| `/privacy` | Privacy policy — JourneyPlus |
| `/terms` | Terms & conditions — JourneyPlus |
| `/contact` | Contact — JourneyPlus |

## Structured data (JSON-LD on home)

Add `SoftwareApplication` schema:
- `name`: JourneyPlus
- `applicationCategory`: TravelApplication
- `operatingSystem`: Android, iOS
- `offers`: `{ price: "0", priceCurrency: "INR" }`
- `description`: (use meta description)

---

# SECTION 7 — ACCESSIBILITY & QUALITY BAR

Before calling the site done:

- [ ] WCAG 2.1 AA color contrast on all text (green on white passes; verify `#616161` on `#F5F7F5`)
- [ ] All interactive elements keyboard-focusable with visible focus ring
- [ ] `prefers-reduced-motion` disables scroll animations
- [ ] Semantic HTML: one `h1` per page, logical heading hierarchy
- [ ] Alt text on all images and mockups
- [ ] Mobile nav trap focus when open; close on Escape
- [ ] Lighthouse score ≥ 90 Performance, ≥ 95 Accessibility, ≥ 95 SEO (static site)
- [ ] All placeholder emails/links marked with `TODO` comment in source
- [ ] Legal pages linked from footer on every page
- [ ] 404 page with link back home

---

# SECTION 8 — BUILD ORDER (suggested phases)

**Phase A — Scaffold (1 session)**
- Vite + React + TS + Tailwind + React Router + Framer Motion + Lucide
- Tailwind config with all color tokens
- Layout shell: Header, Footer, Container, mobile nav
- Placeholder pages for all routes

**Phase B — Home page (1–2 sessions)**
- Hero + stats + features + comparison + how-it-works + personas + download + FAQ preview
- Framer Motion scroll animations
- Phone mockup placeholder component

**Phase C — Inner pages (1 session)**
- About, Help (full FAQ accordion), Contact (form)

**Phase D — Legal (1 session)**
- Privacy + Terms with prose styling, last-updated date, cross-links

**Phase E — Polish & ship (1 session)**
- SEO meta, OG image, favicon, 404, Lighthouse pass
- Deploy to Vercel/Netlify, connect domain

---

# SECTION 9 — PLACEHOLDERS TO REPLACE BEFORE PUBLISH

| Item | Current placeholder |
|---|---|
| Support email | support@journeyplus.app |
| Privacy email | privacy@journeyplus.app |
| Legal email | legal@journeyplus.app |
| Google Play URL | `#` |
| App Store URL | `#` |
| Governing law city | Pune, Maharashtra (confirm) |
| Social links | `#` |
| OG image | Generate 1200×630 green gradient + wordmark |
| Company legal entity name | JourneyPlus (confirm registered name) |

---

*End of prompt. Build the React + Tailwind website exactly per this spec. Match the calm, premium-yet-friendly green highway aesthetic of the JourneyPlus mobile app. When in doubt, choose clarity over decoration.*
