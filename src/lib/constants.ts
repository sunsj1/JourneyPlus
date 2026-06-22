export const SITE = {
  name: 'JourneyPlus',
  url: 'https://www.journeyplus.in',
  tagline: 'AI Highway Companion for Road Trips',
  description:
    'Plan smarter road trips. Route-aware POI discovery, predictive alerts, and community trust on every stop. Not a maps app.',
  // TODO: Replace with live store URLs before publish
  playStoreUrl: '#',
  appStoreUrl: '#',
  supportEmail: 'support@journeyplus.in',
  privacyEmail: 'privacy@journeyplus.in',
  legalEmail: 'legal@journeyplus.in',
} as const;

export const NAV_LINKS = [
  { label: 'Features', href: '/#features' },
  { label: 'How it works', href: '/#how-it-works' },
  { label: 'About', href: '/about' },
  { label: 'Help', href: '/help' },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: 'Features', href: '/#features' },
    { label: 'How it works', href: '/#how-it-works' },
    { label: 'Download', href: '/#download' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ],
  legal: [
    { label: 'Privacy policy', href: '/privacy' },
    { label: 'Terms & conditions', href: '/terms' },
  ],
  connect: [
    { label: 'Email', href: 'mailto:support@journeyplus.in' },
    { label: 'Twitter/X', href: '#' },
    { label: 'Instagram', href: '#' },
  ],
} as const;

export const STATS = [
  { value: 16, suffix: '', label: 'POI categories along your route' },
  { value: 4, suffix: '', label: 'Vehicle types — Petrol, Diesel, EV, Bike' },
  { value: 100, suffix: ' km', label: 'Predictive alert lookahead window' },
  { value: '∞', suffix: '', label: 'Community trust signals on every stop', isSymbol: true },
] as const;

export const FEATURES = [
  {
    icon: 'Route',
    title: 'Smart route planning',
    description:
      'Enter origin and destination, pick your vehicle and preferences. Get ETA with live traffic, weather along the route, toll estimates on known expressways, and fuel or charging cost estimates — all in one trip overview.',
  },
  {
    icon: 'LayoutGrid',
    title: 'Smart Intelligence Grid',
    description:
      'Sixteen categories — fuel, EV chargers, restaurants, dietary-friendly food, washrooms, ATMs, hotels, hospitals, mechanics, parking, cafes, scenic spots, landmarks, tourist places, and more. Every list is filtered to your route corridor, not random nearby places.',
  },
  {
    icon: 'Bell',
    title: 'Predictive alerts',
    description:
      'JourneyPlus looks ahead, not behind. Get warned before fuel runs low, the next charger is too far, meal time approaches, you enter a steep or mountain stretch, fatigue sets in after hours of driving, or night falls on an unfamiliar road.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Community trust on every stop',
    description:
      'Real traveler pulses — ratings, conditions, amenities, photos — with reliability scores, sample sizes, freshness indicators, and conflict timelines when reports disagree. You always know how much to trust a recommendation.',
  },
  {
    icon: 'Shield',
    title: 'Traveler-first modes',
    description:
      'Family mode, women-safe mode, and bike rider mode filter stops for how you actually travel. Dietary preferences, baby-friendly tags, and community-backed amenity signals from real travelers.',
  },
  {
    icon: 'WifiOff',
    title: 'Offline when it matters',
    description:
      'When you start a trip, your route polyline and corridor POIs cache locally. If signal drops on the highway, JourneyPlus keeps working from cached data and shows a clear offline banner — no silent failures.',
  },
] as const;

export const COMPARISON = [
  {
    traditional: 'Shows what\'s near you right now',
    journeyPlus: 'Shows what\'s along your route corridor — relevant to where you\'re going',
  },
  {
    traditional: 'Reactive — you search when you already need something',
    journeyPlus: 'Predictive — warns before fuel runs low, before tough terrain, before fatigue',
  },
  {
    traditional: 'Star ratings from strangers, no context',
    journeyPlus: 'Community pulses with reliability score, sample size, freshness, conflict timeline',
  },
  {
    traditional: 'One category at a time (food OR fuel)',
    journeyPlus: 'Smart Intelligence Grid — 16 categories in one trip-aware surface',
  },
  {
    traditional: 'Generic one-size-fits-all filters',
    journeyPlus: 'Traveler-first — family, women-safe, dietary prefs, terrain alerts, cultural stops',
  },
  {
    traditional: 'Needs constant network',
    journeyPlus: 'Offline corridor cache + degraded-mode banner when signal drops',
  },
  {
    traditional: '"Open maps and figure it out"',
    journeyPlus: 'Trip control center — ETA, tolls, weather, traffic, timeline, alerts in one place',
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Plan your trip',
    description:
      'Set from, to, vehicle type, and preferences (dietary, family, fast chargers only, and more). See your trip overview: distance, ETA, tolls, fuel or charging estimate, weather strip, and traffic level.',
  },
  {
    step: 2,
    title: 'Discover along your corridor',
    description:
      'Open the Discover tab and tap any category — fuel, food, washrooms, EV, hotels, scenic, landmarks. Stops are ranked by best match for your preferences, not just nearest. Every tile shows community trust at a glance.',
  },
  {
    step: 3,
    title: 'Drive with JourneyPlus watching ahead',
    description:
      'Start your trip for live tracking, predictive alerts, and offline corridor cache. Pause, resume, or end anytime. Review alert history and trip summary when you arrive.',
  },
] as const;

export const PERSONAS = [
  {
    title: 'Highway families',
    description:
      'Find clean restrooms, food that matches your preferences, and safe hotel stops without endless searching.',
    icon: 'Users',
  },
  {
    title: 'EV drivers',
    description:
      'See charger gaps before range anxiety hits. Fast-charger filter and community condition pulses.',
    icon: 'Zap',
  },
  {
    title: 'Bike riders',
    description:
      'Mechanics, fuel, medical, and parking focused for two-wheeler highway runs.',
    icon: 'Bike',
  },
  {
    title: 'Night drivers',
    description:
      'Terrain warnings, fatigue reminders, and night-mode hotel suggestions before you need them.',
    icon: 'Moon',
  },
] as const;

export const FAQ_PREVIEW = [
  {
    question: 'Is JourneyPlus a maps app?',
    answer:
      'No. JourneyPlus is a highway companion. It uses maps data for routing and places, but its value is route-aware discovery, predictive alerts, and community trust — things maps apps don\'t focus on.',
  },
  {
    question: 'Does JourneyPlus track my location history?',
    answer:
      'No. GPS is used in real time during an active trip for alerts. We do not upload location trails to JourneyPlus servers. Trip summaries store city names and stats locally on your device.',
  },
  {
    question: 'Does it work offline?',
    answer:
      'When you start a trip, corridor data caches on your device. If you lose signal, the app continues with cached route and POI data and shows an offline banner.',
  },
] as const;
