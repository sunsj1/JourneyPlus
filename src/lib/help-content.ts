export const HELP_FAQ = {
  'Getting started': [
    {
      question: 'How do I plan my first trip?',
      answer:
        'Open the Plan tab, enter your starting point and destination, select your vehicle type, and tap analyze. You\'ll see your route, trip overview stats, and a Smart Trip Timeline of suggested stops.',
    },
    {
      question: 'What vehicle types are supported?',
      answer:
        'Petrol, Diesel, EV, and Bike. Set your default in Profile, or override per trip on the plan screen.',
    },
    {
      question: 'Do I need an account?',
      answer:
        'Yes. Sign in with Google to save your profile, preferences, and community reports. Your trip history is stored locally on your device.',
    },
    {
      question: 'Is JourneyPlus free?',
      answer:
        'Yes, JourneyPlus is free to download and use. Premium features may be introduced in the future — we\'ll always be transparent about pricing.',
    },
  ],
  'Planning & discovery': [
    {
      question: 'Why do POI lists say "Plan a route first"?',
      answer:
        'JourneyPlus discovers stops along your route corridor, not random nearby places. Plan a route to unlock corridor-aware search in the Discover tab.',
    },
    {
      question: 'What are the 16 POI categories?',
      answer:
        'Fuel, EV charging, restaurants, pure-veg, washrooms, ATMs, hotels, hospitals, mechanics, parking, cafes, scenic spots, temples, tourist places, police, and kids-friendly stops.',
    },
    {
      question: 'What does "Best match" sorting mean?',
      answer:
        'JourneyPlus ranks stops using your saved preferences — veg, family, women-safe, brand affinity, ratings, distance, and openness. Tap a POI to see "Why we recommend this."',
    },
    {
      question: 'What are Hidden Gems?',
      answer:
        'Curated noteworthy stops on popular corridors — famous food, scenic viewpoints, local specialties. Shown on Discover when your planned route matches a known corridor.',
    },
  ],
  'Trips & alerts': [
    {
      question: 'How do I start a trip?',
      answer:
        'After planning, tap "Start this trip" on the plan result screen, then go to the Trip tab and confirm start. Live tracking and alerts activate when you start.',
    },
    {
      question: 'What alerts does JourneyPlus send?',
      answer:
        'Fuel low, EV charger gap, food window, ghat ahead, fatigue break, night driving, and weather warnings — depending on your vehicle, route, and time of day.',
    },
    {
      question: 'Can I mute alerts?',
      answer:
        'Yes. Open Settings from Profile to mute all alerts, disable system notifications, or mute specific alert types.',
    },
    {
      question: 'What happens when I end a trip?',
      answer:
        'You get a summary with distance, duration, stations count, and alert history. The summary saves locally. Live location tracking stops immediately.',
    },
  ],
  'Community & trust': [
    {
      question: 'What is a community pulse?',
      answer:
        'A quick report from a traveler at a stop — rating, condition, amenities, optional photo and notes. Pulses help the next driver know if a pump, charger, or restaurant is actually good right now.',
    },
    {
      question: 'Can I edit or delete my report?',
      answer:
        'No. Community reports are an immutable log to preserve trust history. Submit carefully — your report helps everyone on the road.',
    },
    {
      question: 'What do reliability scores mean?',
      answer:
        'Scores combine rating, condition, report count, and freshness. Low-confidence badges appear when there are too few reports or they\'re stale.',
    },
  ],
  'Privacy & permissions': [
    {
      question: 'Why does JourneyPlus need location?',
      answer:
        'Location powers live trip tracking and predictive alerts during an active trip. Planning works without it, but live alerts are limited.',
    },
    {
      question: 'Does JourneyPlus sell my data?',
      answer:
        'No. We do not sell personal data or location history. See our Privacy policy for full details.',
    },
    {
      question: 'How do I delete my account?',
      answer:
        'Contact us at support@journeyplus.app and we\'ll process deletion of your Firebase profile and community reports linked to your account.',
    },
  ],
} as const;
