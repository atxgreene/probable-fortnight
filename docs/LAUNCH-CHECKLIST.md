# Launch Checklist — Aim for Perfection Golf

## Business decisions (client)
- [ ] Confirm product price (placeholder is $25 — `src/data/products.js`)
- [ ] Confirm available inventory count
- [ ] Confirm shipping cost / flat rate and update the shipping note
- [ ] Confirm return/refund policy (add to FAQ)
- [ ] Confirm payment processor: Stripe Payment Link now, or inquiry-first
- [ ] Confirm custom order email routing (real orders inbox)

## Site setup (Bluebonnet)
- [ ] Set `contactEmail` in `src/config.js` to the real inbox
- [ ] Create Formspree form and set `formEndpoint`
- [ ] Create Stripe Payment Link and set `stripePaymentLink` (skip if inquiry-first)
- [ ] Replace placeholder bulk specs on the Bulk & Events page once supplier quotes land
- [ ] Add any additional product photos

## QA
- [ ] Test mobile layout (390px) — nav, sticky CTA, forms
- [ ] Test custom order form submission end-to-end (email arrives)
- [ ] Test contact form submission
- [ ] Test checkout with a live $1 test or Stripe test mode
- [ ] Check all images load and pages scroll correctly

## Go live
- [ ] Buy/connect domain (e.g. aimforperfectiongolf.com) in Vercel/Netlify
- [ ] Add analytics (Vercel Analytics or Plausible — one script tag in `index.html`)
- [ ] Publish site
- [ ] Send announcement post (Instagram/Facebook + church/golf networks)
- [ ] Set up the orders spreadsheet (see ORDER-WORKFLOW.md)
