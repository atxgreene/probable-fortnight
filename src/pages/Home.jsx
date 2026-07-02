import { Link } from "react-router-dom"
import { Section, SectionHeading } from "../components/Section"
import TrustBadges from "../components/TrustBadges"
import UseCaseCards from "../components/UseCaseCards"
import FAQAccordion from "../components/FAQAccordion"
import { products } from "../data/products"
import { site } from "../config"

const product = products[0]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/product-course.jpg"
            alt=""
            aria-hidden
            className="h-full w-full object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/80 to-ink" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 py-24 text-center sm:px-6 sm:py-32">
          <img
            src="/images/logo.jpg"
            alt="Aim for Perfection Golf logo"
            className="mb-8 h-32 w-32 rounded-full shadow-2xl shadow-black/60 ring-1 ring-gold/50 sm:h-40 sm:w-40"
          />
          <h1 className="font-serif text-5xl tracking-wide text-ivory sm:text-6xl">
            Faith. Focus. <span className="text-gold-warm">Fairways.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ivory/80">
            Premium golf divot tools designed to remind every player to aim higher — on and off
            the course.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/shop"
              className="rounded-full bg-gold px-8 py-3.5 font-semibold text-ink shadow-lg shadow-gold/20 transition hover:bg-gold-warm"
            >
              Shop Divot Tools
            </Link>
            <Link
              to="/custom-orders"
              className="rounded-full border border-gold/60 px-8 py-3.5 font-semibold text-gold-warm transition hover:border-gold hover:bg-gold/10"
            >
              Request a Custom Order
            </Link>
          </div>
          <div className="mt-12">
            <TrustBadges />
          </div>
        </div>
      </section>

      {/* Product feature */}
      <Section id="product">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/50">
            <img src="/images/product-pouch.jpg" alt={product.images[1].alt} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">The Signature Tool</p>
            <h2 className="font-serif text-3xl text-ivory sm:text-4xl">{product.name}</h2>
            <p className="mt-4 leading-relaxed text-mist">{product.description}</p>
            <ul className="mt-6 space-y-2.5">
              {product.features.slice(0, 4).map((f) => (
                <li key={f} className="flex gap-3 text-sm text-ivory/85">
                  <span aria-hidden className="mt-0.5 text-gold">✦</span>
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex items-center gap-5">
              <Link
                to="/shop"
                className="rounded-full bg-gold px-6 py-3 font-semibold text-ink transition hover:bg-gold-warm"
              >
                Buy Now — ${product.price}
              </Link>
              <Link to="/custom-orders" className="text-sm font-medium text-gold-warm hover:underline">
                Customize it →
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Brand story */}
      <section className="border-y border-white/10 bg-charcoal">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <img
            src="/images/wordmark.jpg"
            alt="Aim for Perfection — Matt 5:48 handwritten wordmark"
            className="mx-auto mb-8 w-64 rounded-xl sm:w-80"
          />
          <h2 className="font-serif text-3xl text-ivory sm:text-4xl">More than a scorecard</h2>
          <p className="mt-5 text-lg leading-relaxed text-ivory/85">
            Aim for Perfection Golf was created for golfers who see the game as more than a
            scorecard. Every round demands patience, discipline, humility, and focus. Our divot
            tools are designed as a small reminder to pursue excellence with purpose — one shot,
            one round, and one step at a time.
          </p>
          <p className="mt-6 font-serif text-lg italic text-gold/90">
            “Be perfect, therefore, as your heavenly Father is perfect.” — {site.scripture}
          </p>
        </div>
      </section>

      {/* Custom orders + use cases */}
      <Section id="custom">
        <SectionHeading
          eyebrow="Custom Orders"
          title="Custom divot tools for events, gifts, and groups"
          lede="Whether you are planning a golf tournament, church fundraiser, corporate outing, bachelor party, or private club event, we can help create a meaningful custom divot tool for your group."
        />
        <UseCaseCards />
        <div className="mt-10 text-center">
          <Link
            to="/custom-orders"
            className="inline-block rounded-full bg-gold px-8 py-3.5 font-semibold text-ink transition hover:bg-gold-warm"
          >
            Start a Custom Quote
          </Link>
        </div>
      </Section>

      {/* Founder note */}
      <section className="bg-fairway/20">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <div className="rounded-3xl border border-gold/20 bg-charcoal p-8 shadow-xl shadow-black/40 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">A note from the founder</p>
            <p className="mt-4 leading-relaxed text-ivory/85">
              Aim for Perfection Golf is a small, founder-led brand. Every tool is checked by hand
              and every custom order gets personal attention — because these pieces tend to mean
              something to the people who carry them. Thanks for supporting a small business built
              on faith and fairways.
            </p>
            <p className="mt-5 font-serif text-xl text-gold-warm">— Aim for Perfection Golf</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <Section id="faq">
        <SectionHeading eyebrow="FAQ" title="Common questions" />
        <div className="mx-auto max-w-2xl">
          <FAQAccordion />
        </div>
      </Section>
    </>
  )
}
