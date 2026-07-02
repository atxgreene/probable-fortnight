# Operating Workflows — Aim for Perfection Golf

## 1. Standard product order

```
Customer lands on site → views product → buys through checkout (Stripe Payment Link)
→ owner receives Stripe email notification → product ships (2–4 business days)
→ customer gets Stripe receipt + owner sends tracking
```

Inquiry-first mode (before Stripe is connected): the Buy button routes to the order form →
owner replies with a Stripe/Square/QuickBooks invoice → paid → ship.

Owner checklist per order:
- [ ] Confirm payment received (Stripe dashboard)
- [ ] Pack tool + pouch, include thank-you card
- [ ] Ship, send tracking number
- [ ] Log the sale (spreadsheet or Stripe export)

## 2. Custom order

```
Customer submits quote form → owner reviews details → owner confirms quantity/design/deadline
→ quote sent → invoice paid → production begins → proof approved by customer → order fulfilled
```

Owner checklist per custom order:
- [ ] Reply within 1–2 business days (the site promises this)
- [ ] Confirm: quantity, artwork, deadline, budget, ship-to
- [ ] Get supplier pricing if quantity exceeds on-hand inventory
- [ ] Send quote (unit price + setup fee + shipping + timeline)
- [ ] Collect payment before production (100% for small runs, 50% deposit for large)
- [ ] Send artwork proof — get written approval before production
- [ ] Order production, share timeline updates
- [ ] Ship + follow up for a review/photo

## 3. Manufacturer pipeline

```
Collect specs → send RFQs → compare vendors → order samples → approve quality
→ place first batch → document costs and lead times
```

See `MANUFACTURING-ROADMAP.md` and `RFQ-TEMPLATE.md`. Track quotes in
`supplier-comparison.csv`.

## Lead tracking

Until a CRM is needed, a spreadsheet is enough. Formspree keeps every submission
(export as CSV from the dashboard). Columns: date · name · email · type · quantity ·
deadline · status (new / quoted / invoiced / in production / shipped / closed).
