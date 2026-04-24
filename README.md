# devstudio · landing v2

Editorial landing page for **devstudio**, a four-person software studio based in Tegucigalpa / Remote LATAM. Built with Next.js 16, React 19, Tailwind v4, and motion.

> _Software que mueve tu negocio._

---

## What's inside

| Section | Description |
|---|---|
| **01 — Hero** | Giant clamp-sized headline with parallax + scroll-driven scale; full-bleed photo slab |
| **03 — Servicios** | Five numbered service rows with hover-invert and 3D slide-in |
| **04 — Proceso** | Dark four-column grid (Análisis · Diseño · Desarrollo · Entrega) with rotateX flip |
| **05 — Beneficios** | Three animated stats with bouncy easing (CountUp on view) |
| **06 — Stack** | Four marquees of tech names that respond to scroll velocity |
| **07 — Equipo** | Four-member team grid (Camilo, Daniel, Jafeth, Edgardo) with photo avatars |
| **08 — Voces** | Featured testimonial + 3-column quotes grid with 3D tilt |
| **09 — Contacto** | Final CTA with split-words headline |
| **Footer** | Oversized "devstudio." headline with scroll-scale, contact, nav, social, newsletter |
| **Chat (FAB)** | Floating chat widget proxied to an n8n webhook for lead capture |

All scroll animations **replay** every time an element enters the viewport (not single-fire) and respect `prefers-reduced-motion`.

---

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- React 19
- TypeScript 5 (strict mode)
- [Tailwind CSS v4](https://tailwindcss.com) (CSS-first `@theme` config)
- [motion](https://motion.dev) (formerly Framer Motion) for animations
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) — Geist Sans, Geist Mono, Inter

---

## Project structure

```
src/
├── app/
│   ├── api/chat/route.ts      # n8n webhook proxy
│   ├── globals.css             # Tailwind v4 @theme tokens
│   ├── layout.tsx              # Fonts + html shell
│   └── page.tsx                # Composes all sections
├── components/
│   ├── chat/
│   │   └── ChatButton.tsx      # Floating chat FAB + panel
│   ├── layout/
│   │   ├── Container.tsx       # Editorial max-width wrapper
│   │   ├── Eyebrow.tsx         # Mono uppercase caption
│   │   └── Section.tsx
│   ├── motion/
│   │   ├── CountUp.tsx         # Number animation on view
│   │   ├── Marquee.tsx         # Velocity-driven horizontal scroll
│   │   ├── Reveal.tsx          # Fade + slide + scale + blur
│   │   ├── ScrollParallax.tsx  # Y translation tied to scroll
│   │   ├── ScrollScale.tsx     # In/out scale through viewport
│   │   └── SplitWords.tsx      # Per-word 3D flip stagger
│   └── sections/               # Hero, Nav, Services, Process,
│                               # Benefits, TechStack, Team,
│                               # Testimonials, FinalCTA, Footer
└── lib/
    └── cn.ts                    # className helper
public/
├── images/hero.jpg              # Hero photo
└── teams/1-4.png                # Member avatars
```

---

## Getting started

### Prerequisites

- Node.js 20+ (LTS recommended)
- npm 10+

### Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Available scripts

| Script | What it does |
|---|---|
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build |
| `npm start` | Run the production build locally |
| `npm run lint` | ESLint |

---

## Environment variables

Copy `env.example` to `.env.local` and fill in:

| Var | Required | Description |
|---|---|---|
| `N8N_WEBHOOK_URL` | optional | URL of the n8n workflow that handles chat messages. If unset, the widget shows a friendly fallback. |
| `N8N_WEBHOOK_TOKEN` | optional | Bearer token forwarded as `Authorization` header to the n8n webhook. |

### Chat webhook contract

The `/api/chat` route forwards each user message to your n8n workflow:

**Request body** (POST):
```json
{
  "sessionId": "abc123",
  "message": "Hola, quiero una cotización",
  "history": [
    { "role": "user", "content": "..." },
    { "role": "assistant", "content": "..." }
  ],
  "source": "devstudio-landing"
}
```

**Expected response**:
```json
{ "reply": "..." }
```
or `{ "output": "..." }` (compatible with n8n's *Respond to Webhook* node default).

---

## Design system

Tailwind v4 tokens defined in `src/app/globals.css`:

| Token | Value | Use |
|---|---|---|
| `--color-paper` | `#ffffff` | Light backgrounds |
| `--color-ink` | `#1a1a1a` | Primary text + dark sections |
| `--color-ink-soft` | `#333333` | Soft dark |
| `--color-muted` | `#666666` | Secondary text on light bg |
| `--color-muted-soft` | `#999999` | Tertiary text on dark bg |
| `--font-display` | Geist Sans | Big headlines |
| `--font-sans` | Inter | Body |
| `--font-mono` | Geist Mono | Eyebrows + captions |
| `--container-editorial` | `90rem` | Editorial max width |
| `--tracking-mono` | `0.16em` | Mono caption tracking |

---

## Deploying

This project is deploy-ready for [Vercel](https://vercel.com). After connecting the repo:

1. Set `N8N_WEBHOOK_URL` (and optionally `N8N_WEBHOOK_TOKEN`) in **Project Settings → Environment Variables**.
2. Push to `main` → Vercel deploys.

---

## Team

- [Camilo Henríquez](#) — Full Stack · AI Tooling
- [Daniel Brizuela](#) — Full Stack
- [Jafeth Ventura](#) — Mobile Developer
- [Edgardo Wilchez](#) — Mobile · Frontend

---

## License

Private — © 2026 Devstudio. All rights reserved.
