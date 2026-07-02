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

  // Social placeholders (leave empty to hide in footer)
  instagram: "",
  facebook: "",
}
