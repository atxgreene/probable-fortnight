/**
 * Product data — edit prices, copy, and images here.
 * See docs/CLIENT-HANDOFF.md → "How to update product price".
 */
import { asset } from "../config"

export const products = [
  {
    id: "signature-ichthys",
    name: "Signature Ichthys Divot Tool",
    tagline: "The original Aim for Perfection divot tool",
    price: 25, // PLACEHOLDER — confirm final retail price
    compareAt: null,
    shippingNote: "Ships in 2–4 business days. Flat-rate shipping.", // PLACEHOLDER
    customNote:
      "Want your tournament, church, or company logo on it? Custom and bulk orders are available.",
    images: [
      { src: asset("images/product-course.jpg"), alt: "Signature Ichthys Divot Tool held on the golf course" },
      { src: asset("images/product-pouch.jpg"), alt: "Signature Ichthys Divot Tool in its clear carry pouch" },
    ],
    description:
      "A premium divot repair tool built for golfers who carry their faith onto the course. Designed with a distinctive ichthys-inspired form and Aim for Perfection detailing, this piece is ideal for personal use, gifts, tournaments, church outings, and custom group orders.",
    features: [
      "Faith-inspired golf accessory — ichthys form with Matthew 5:48 detailing",
      "Distinctive AP Golf design in polished metal and black enamel",
      "Lightweight and easy to carry in a pocket or bag",
      "Great for tournaments, gifts, and outings",
      "Custom order options available",
      "Bulk orders available by request",
    ],
  },
]

/**
 * Colorways — the finishes the Signature tool ships in.
 * To add one: drop a photo shot on a plain white background into
 * public/images/colorways/, then add a row here. The scroll gallery,
 * its labels, counter and swatch dots all read from this list.
 * `hex` is sampled from the product render and colours the swatch dot + label.
 */
export const colorways = [
  { id: "purple",   name: "Purple",   hex: "#401070", image: asset("images/colorways/purple.jpg") },
  { id: "sky-blue", name: "Sky Blue", hex: "#60C0F8", image: asset("images/colorways/sky-blue.jpg") },
  { id: "green",    name: "Green",    hex: "#205030", image: asset("images/colorways/green.jpg") },
  { id: "burgundy", name: "Burgundy", hex: "#881820", image: asset("images/colorways/burgundy.jpg") },
  { id: "white",    name: "White",    hex: "#FAFAF8", image: asset("images/colorways/white.jpg") },
  { id: "black",    name: "Black",    hex: "#161619", image: asset("images/colorways/black.jpg") },
]
