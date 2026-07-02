import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Section } from "../components/Section"
import TrustBadges from "../components/TrustBadges"
import { products } from "../data/products"
import { site } from "../config"

export default function Shop() {
  const product = products[0]
  const [imgIdx, setImgIdx] = useState(0)
  const [qty, setQty] = useState(1)
  const navigate = useNavigate()

  function buy() {
    if (site.stripePaymentLink) {
      // Stripe Payment Links accept a quantity via the checkout page itself;
      // just hand the customer off to Stripe.
      window.location.href = site.stripePaymentLink
    } else {
      // Inquiry-first mode: route to the custom order form until checkout is live.
      navigate(`/custom-orders?product=${product.id}&qty=${qty}`)
    }
  }

  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Gallery */}
        <div>
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
            <img
              src={product.images[imgIdx].src}
              alt={product.images[imgIdx].alt}
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
          <div className="mt-4 flex gap-3">
            {product.images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setImgIdx(i)}
                aria-label={`View image ${i + 1}`}
                className={`overflow-hidden rounded-xl border-2 transition ${
                  i === imgIdx ? "border-gold" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img.src} alt="" className="h-20 w-20 object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-gold">{site.brandShort}</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold uppercase tracking-tight text-ivory sm:text-4xl">{product.name}</h1>
          <p className="mt-1 text-mist">{product.tagline}</p>
          <p className="mt-5 text-3xl font-semibold text-gold-warm">${product.price}</p>

          <p className="mt-5 leading-relaxed text-ivory/85">{product.description}</p>

          <ul className="mt-6 space-y-2.5">
            {product.features.map((f) => (
              <li key={f} className="flex gap-3 text-sm text-ivory/85">
                <span aria-hidden className="mt-0.5 text-gold">✦</span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex items-end gap-4">
            <div>
              <label htmlFor="qty" className="mb-1.5 block text-sm font-medium text-ivory/90">Quantity</label>
              <div className="flex items-center rounded-lg border border-white/15 bg-charcoal">
                <button type="button" aria-label="Decrease quantity" onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-2.5 text-gold">−</button>
                <input
                  id="qty"
                  type="number"
                  min="1"
                  value={qty}
                  onChange={(e) => setQty(Math.max(1, Number(e.target.value) || 1))}
                  className="w-14 bg-transparent text-center text-ivory focus:outline-none"
                />
                <button type="button" aria-label="Increase quantity" onClick={() => setQty(qty + 1)} className="px-4 py-2.5 text-gold">+</button>
              </div>
            </div>
            <button
              type="button"
              onClick={buy}
              className="flex-1 rounded-lg bg-gold px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.12em] text-ink transition hover:bg-gold-warm"
            >
              {site.stripePaymentLink ? "Buy Now" : "Request to Order"}
            </button>
          </div>

          <p className="mt-4 text-sm text-mist">{product.shippingNote}</p>
          <p className="mt-2 text-sm text-mist">
            {product.customNote}{" "}
            <Link to="/custom-orders" className="font-medium text-gold-warm hover:underline">
              Start a custom quote →
            </Link>
          </p>
        </div>
      </div>

      <div className="mt-16">
        <TrustBadges />
      </div>
    </Section>
  )
}
