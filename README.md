# Aim for Perfection Golf — Website

A boutique storefront for **Aim for Perfection Golf LLC**: faith-inspired golf divot tools,
custom order intake, and bulk/event quoting.

**Faith. Focus. Fairways.**

## Stack

- [Vite](https://vite.dev) + React 19
- Tailwind CSS 4
- React Router 7
- Static-first — deploys anywhere (Vercel, Netlify, Cloudflare Pages)
- No backend required: forms post to Formspree (or any form endpoint), checkout via Stripe Payment Link

## Quick start

```bash
npm install
npm run dev        # local dev at http://localhost:5173
npm run build      # production build to dist/
npm run preview    # serve the production build locally
```

## Project structure

```
src/
  config.js            ← site settings (form endpoint, Stripe link, contact email)
  data/products.js     ← product name, price, copy, images
  components/          ← header, footer, quote form, FAQ, badges, cards
  pages/               ← Home, Shop, CustomOrders, BulkOrders, Contact
public/images/         ← logo + product photography
docs/                  ← business launch package (see below)
```

## Configuration (before launch)

All live-service wiring lives in **`src/config.js`**:

| Setting | What it does |
| --- | --- |
| `formEndpoint` | Formspree (or compatible) endpoint for quote/contact forms. Empty = mailto fallback. |
| `contactEmail` | Orders inbox shown on the site and used as the form fallback. **Placeholder — replace.** |
| `stripePaymentLink` | Stripe Payment Link for the divot tool. Empty = inquiry-first mode ("Request to Order"). |

Product price and copy live in **`src/data/products.js`** (`price` is a placeholder — confirm with client).

## Deployment

### Vercel
1. Push this repo to GitHub.
2. [vercel.com/new](https://vercel.com/new) → import the repo. Vercel auto-detects Vite.
3. Client-side routing is already handled by the included `vercel.json` rewrite.
4. Add the custom domain under Project → Settings → Domains.

### Netlify
1. [app.netlify.com](https://app.netlify.com) → "Add new site" → import the repo.
2. Build command `npm run build`, publish directory `dist`.
3. Client-side routing is already handled by the included `public/_redirects` file.
4. Add the custom domain under Site settings → Domain management.

## Business launch package (`docs/`)

| File | Purpose |
| --- | --- |
| `CLIENT-HANDOFF.md` | Owner's guide: update prices/photos/FAQs, connect Stripe & forms, export leads, deploy |
| `BRAND-POSITIONING.md` | Positioning summary, voice, palette, product copy |
| `MANUFACTURING-ROADMAP.md` | Internal 5-phase sourcing plan (prototype → supplier search → RFQ → compare → first batch) |
| `RFQ-TEMPLATE.md` | Ready-to-send request-for-quote packet for suppliers |
| `supplier-comparison.csv` | Vendor comparison tracker (open in Excel/Sheets) |
| `ORDER-WORKFLOW.md` | Operating workflows: standard orders, custom orders, manufacturer pipeline |
| `LAUNCH-CHECKLIST.md` | Pre-launch checklist |
| `FOLLOW-UP-EMAIL.md` | Draft reply for the client inquiry |
