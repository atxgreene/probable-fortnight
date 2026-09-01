/**
 * Site configuration — the single place the owner (or Bluebonnet) edits
 * to wire up live services. See docs/CLIENT-HANDOFF.md for instructions.
 */
export const site = {
  brandName: "Aim for Perfection Golf",
  brandShort: "AP Golf",
  scripture: "Matthew 5:48",

  // Where quote/contact form submissions go.
  // Create a free form at https://formspree.io, then paste its endpoint here,
  // e.g. "https://formspree.io/f/abcdwxyz". Leave empty to fall back to email.
  formEndpoint: "",

  // Orders inbox — used as the mailto fallback and shown on the contact page.
  contactEmail: "orders@aimforperfectiongolf.com", // PLACEHOLDER — set real inbox

  // Stripe Payment Link for the standard divot tool.
  // Create one at https://dashboard.stripe.com/payment-links and paste it here.
  // Leave empty to run inquiry-first: the Buy button routes to the order form.
  stripePaymentLink: "",

  // Custom + bulk ordering is on hold until that side of the business is ready.
  // Flip to true to bring back the nav links, footer links, quote CTAs and
  // announcement copy. The /custom-orders and /bulk-orders pages stay routed
  // either way, so existing links never 404.
  customOrdersEnabled: false,

  // Social placeholders (leave empty to hide in footer)
  instagram: "",
  facebook: "",
}

/** Prefix a public/ path with the deploy base (works at "/" and under subpaths). */
export const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, "")
