# Everwell Dental

A design concept website for a fictional dental practice in Charlotte, North Carolina. Ten pages: Home, Services (and four service pages), Our Practice, New Patients, Contact, and a demonstration Privacy notice.

Everwell Dental is not a real practice. The phone number, email, hours and team are demonstration content, the appointment form sends nothing, and every page is set to `noindex`.

## Stack

- TanStack Start (React 19, file-based routing, server-rendered), TypeScript strict
- Tailwind CSS v4, CSS-only motion, Phosphor icons
- Bricolage Grotesque and Geist, self-hosted variable fonts under the SIL OFL
- Nitro for the production build (it picks the Vercel output on Vercel and a Node server elsewhere)

## Run it

```bash
bun install
bun run dev        # http://localhost:5173
bun run build      # production build
bun run lint
bun run test
```

## Deploying to Vercel

Framework Preset: Nitro (or Other). Leave Output Directory blank, use Node 22.x, and no environment variables are needed. Open Graph and canonical URLs use the deployment domain automatically (the Vercel production domain, or `SITE_URL` if you set it).

## Images and brand

Originals live in `assets-source/` and are never served.

- `bun run images` builds the responsive AVIF and WebP photographs (and the three team portrait crops) in `public/images/`, the typed manifest `src/data/images.generated.ts`, and the Open Graph images in `public/og/`.
- `node scripts/build-logo.mjs` builds the light and dark logo variants and the favicon set from `assets-source/brand/everwell-logo-original.png`.

## Content rules

The photographs are stock images from Pexels (free licence, no attribution required) and do not show a real clinic, team or patients. Pexels photo ids: 4269368, 4270093, 4269682, 5920763, 6502305, 6193197, 3974017, 6812453, 9062527, 4269687, 12746003, 4269699 and 4270095. The licence asks that people shown are not portrayed in a bad light, so keep captions neutral. There are no reviews, credentials, insurance plans, fees or compliance claims, and the site collects no health information. To make the site indexable, set `INDEXABLE` to `true` in `src/data/site.ts` and update `public/robots.txt`.
