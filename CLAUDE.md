# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Next.js 16)
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint (no config file — uses eslint-config-next defaults)
```

No test framework is configured.

## Architecture

Single-page marketing site for **Ember**, a speech-coaching app. Built with **Next.js 16**, **React 19**, **TypeScript 5**, and **Tailwind CSS v4**.

### Page composition (`app/page.tsx`)

Nav → Hero → SocialProof → Features → HowItWorks → Coaches → KitsuneChallenge → Vision → FinalCTA → Footer

Each section is a self-contained component in `components/`. Most use `"use client"` for interactivity.

### Key files

- `lib/design-tokens.ts` — shared color constants (mirrors the CSS `@theme` variables)
- `app/globals.css` — Tailwind v4 `@theme` block defining colors, fonts, and keyframe animations
- `app/layout.tsx` — root layout loading four Google Fonts via `next/font/google`
- `app/api/waitlist/route.ts` — POST endpoint that creates a Kit (ConvertKit) subscriber via their v4 API

### Styling

Tailwind v4 with inline `@theme` in `globals.css`. Custom design tokens:

- **Palette**: night-sky, deep-navy, midnight (dark backgrounds); firelight, ivory (text); ember, warm-gold (accents); ash, smoke (secondary text)
- **Font families**: `--font-display` (Cormorant Garamond), `--font-heading` (DM Serif Display), `--font-sans` (DM Sans), `--font-mono` (JetBrains Mono)
- **Animations**: foxPulse, tailWag, float, fadeUp, shimmer, fireflicker, particleFloat

When referencing colors in TypeScript (e.g., inline SVG styles), import from `lib/design-tokens.ts` rather than hardcoding hex values.

### API

Single endpoint: `POST /api/waitlist` — accepts `{ email }`, calls Kit v4 `POST /v4/subscribers` with `X-Kit-Api-Key` header. Requires `CONVERTKIT_API_KEY` in `.env.local`.

### Notable components

- `Fox.tsx` — SVG fox mascot with multiple animation states (idle, sleeping, speaking, happy, recording, celebrating)
- `EmailCapture.tsx` — reused in Hero and FinalCTA; posts to `/api/waitlist`
- `Particles.tsx` — decorative floating particles; generation deferred to `useEffect` to avoid hydration mismatch
