# JourneyPlus — Brand Website

Marketing site for **JourneyPlus — AI Highway Companion for Road Trips**.

## Status

**Live scaffold.** React + Vite + Tailwind site with home, about, help, contact, privacy, terms, and 404 pages.

## Quick start

```bash
cd website
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Tech stack

| Layer | Choice |
|---|---|
| Framework | React 18 (Vite) |
| Styling | Tailwind CSS v3 |
| Routing | React Router v6 |
| Icons | Lucide React |
| Animations | Framer Motion |
| Fonts | Inter |

## Routes

| Route | Page |
|---|---|
| `/` | Home (hero, features, comparison, download CTA) |
| `/about` | About the app & mission |
| `/help` | Help centre / FAQ |
| `/privacy` | Privacy policy |
| `/terms` | Terms & conditions |
| `/contact` | Contact & support |

## Project structure

```
src/
  components/
    layout/     Header, Footer, MobileNav, Container, Section, Seo
    ui/         Button, Card, Badge, Accordion, PhoneMockup
    sections/   Hero, Features, Comparison, HowItWorks, etc.
  pages/        Route-level page components
  lib/          constants, animations, help-content
```

## Design source of truth

Website tokens mirror the Flutter app (`lib/core/theme/app_colors.dart`). Full copy and spec in `WEBSITE_GENERATION_PROMPT.md`.

## Publishing

Static export — deploy `dist/` to Vercel, Netlify, or Firebase Hosting.
