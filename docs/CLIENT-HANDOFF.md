# Owner's Guide — Aim for Perfection Golf Website

Everything you need to run the site day-to-day. No coding experience required for most
tasks — each change below is a small text edit followed by a redeploy (which happens
automatically if the site is connected to GitHub + Vercel/Netlify).

## How to update the product price

1. Open `src/data/products.js`
2. Change the `price: 25` line to your price
3. Save → commit → the site redeploys automatically

The same file holds the product name, description, feature bullets, and the shipping note.

## How to add product photos

1. Drop new photos into `public/images/` (JPG, ideally ≤ 1400px wide, ≤ 300 KB)
2. In `src/data/products.js`, add them to the `images` array:
   ```js
   { src: "/images/my-new-photo.jpg", alt: "Describe the photo" },
   ```
3. The first image in the array is the main shop photo.

## How to change where order forms go

Forms are handled by **Formspree** (free tier is fine to start):

1. Create an account at formspree.io → "New form" → name it "AP Golf Orders"
2. Set the form's notification email to your orders inbox
3. Copy the endpoint (looks like `https://formspree.io/f/abcdwxyz`)
4. Paste it into `src/config.js` as `formEndpoint`

Until you do this, forms fall back to opening the visitor's email app addressed to
`contactEmail` — set that in `src/config.js` to your real inbox on day one.

## How to export custom order leads

Formspree dashboard → your form → Submissions → Export CSV. Import into Google Sheets to
track status (see `ORDER-WORKFLOW.md` for suggested columns).

## How to connect Stripe (turn on real checkout)

1. Create a Stripe account → Products → add "Signature Ichthys Divot Tool" with your price
2. Create a **Payment Link** for it (Stripe Dashboard → Payment Links → New)
3. Turn on "Let customers adjust quantity" and add your shipping rate
4. Paste the link into `src/config.js` as `stripePaymentLink`

The Shop page's button automatically switches from "Request to Order" to "Buy Now".

**Prefer Shopify later?** Replace the Buy button with a Shopify Buy Button embed — the site
structure doesn't need to change.

## How to update FAQs

Edit the `faqs` array at the top of `src/components/FAQAccordion.jsx` — each entry is a
question (`q`) and answer (`a`).

## How to deploy the site

See the Deployment section of `README.md`. Short version: connect the GitHub repo to
Vercel or Netlify once; after that, every commit deploys automatically in about a minute.

## Making edits without a developer

All routine edits are in three files:
- `src/config.js` — email, form endpoint, Stripe link
- `src/data/products.js` — product, price, photos
- `src/components/FAQAccordion.jsx` — FAQs

You can edit them directly on github.com (pencil icon), commit, and the site updates itself.
