# PRISM Collective website

Responsive React/Vite implementation of the PRISM Collective website.

## Local development

```bash
npm ci
npm run dev
```

Quality checks: `npm run lint` and `npm run build`.

## Design system

The site is dark-first and supports a persisted light theme. Theme values live in `src/styles/colours.css` as semantic surface, text, border, and action properties. Decorative gradients use generic visual names such as `--gradient-pink-dark`, rather than names tied to a particular component.

Typography tokens live in `src/styles/typography.css`. Metro Photograph is served locally as WOFF2, while Inter and Geist Mono fall back to system sans-serif and monospace fonts when unavailable.

## Content and assets

Project content is centralized in `src/components/Projects.jsx`. Figma image exports are committed as optimized WebP assets under `src/assets/projects`.

## Deployment

Run `npm run build` and publish `dist` to any static host. Recommended Cloudflare Pages, Netlify, or Vercel settings:

- Build command: `npm run build`
- Output directory: `dist`
- Node.js: 22 or newer

Set the production domain after the team chooses its hosting account and DNS owner.
