# Wow Deck

Landing page for **Wow Deck** — Presentation & Training Development Consultancy.
"Stop Boring! Rev up Wowing!"

## Tech stack

- [Astro](https://astro.build) (static site generation)
- [GSAP](https://gsap.com) for animations
- Package manager: **pnpm**
- Deployed to **Vercel** (supports multiple custom domains)

## Local development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
pnpm preview
```

## Deployment

Deploy with **Vercel**:

```bash
pnpm dlx vercel
```

Or connect the GitHub repository in the Vercel dashboard. Vercel detects the
`pnpm-lock.yaml` and uses pnpm automatically. It builds the project on every
push and lets you attach multiple custom domains under **Settings →
Domains**.

The Vercel adapter is configured in `astro.config.mjs`. Update the `site`
value to match your primary domain.

## Project structure

```
src/
  components/   Header, FAQ overlay, cookie banner
  layouts/      BaseLayout (head + fonts + global styles)
  pages/        index, privacy, terms-of-use
  styles/       global.css (all site styles)
public/
  images/       static assets (images, favicon, svgs)
```

> Note: This project was migrated from a Webflow export. All Webflow runtime
> scripts, CSS, and data attributes have been removed and replaced with a
> clean Astro implementation.
