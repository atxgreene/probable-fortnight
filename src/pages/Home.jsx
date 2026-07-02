import { Link } from "react-router-dom"
import { Section, SectionHeading } from "../components/Section"
import TrustBadges from "../components/TrustBadges"
import UseCaseCards from "../components/UseCaseCards"
import FAQAccordion from "../components/FAQAccordion"
import { products } from "../data/products"
import { site, asset } from "../config"

const product = products[0]

export default function Home() {
  return (
    <>
      {/* Hero — full-bleed course photo, headline anchored low */}
      <section className="relative flex min-h-[78vh] items-end overflow-hidden sm:min-h-[82vh]">
        <img
          src={asset("images/product-course.jpg")}
          alt="Signature Ichthys Divot Tool held up on the golf course"
          className="absolute inset-0 h-full w-full object-cover object-[center_58%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink" />
        <div className="relative mx-auto w-full max-w-6xl px-4 pb-16 pt-40 text-center sm:px-6 sm:pb-20">
          <p className="mb-3 font-display text-xs font-bold uppercase tracking-[0.28em] text-gold-warm">
            Faith-inspired golf gear
          </p>
          <h1 className="font-display text-4xl font-black uppercase leading-[1.02] tracking-tight text-ivory sm:text-6xl lg:text-7xl">
            Faith. Focus.
            <br />
            Fairways.
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-ivory/85 sm:text-lg">
            Premium golf divot tools designed to remind every player to aim higher — on and off
            the course.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/shop"
              className="rounded-lg bg-gold px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.12em] text-ink shadow-lg shadow-black/40 transition hover:bg-gold-warm"
            >
              Shop Divot Tools
            </Link>
            <Link
              to="/custom-orders"
              className="rounded-lg border border-ivory/40 bg-ink/30 px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.12em] text-ivory backdrop-blur transition hover:border-gold hover:text-gold-warm"
            >
              Request a Custom Order
            </Link>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="border-y border-white/10 bg-charcoal py-5">
        <TrustBadges />
      </div>

      {/* Product feature */}
      <Section id="product">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
            <img src={asset("images/product-pouch.jpg")} alt={product.images[1].alt} className="h-full w-full object-cover" />
          </div>
          <div>
            <p className="mb-2 font-display text-xs font-bold uppercase tracking-[0.28em] text-gold">The Signature Tool</p>
            <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ivory sm:text-4xl">
              {product.name}
            </h2>
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
                className="rounded-lg bg-gold px-6 py-3.5 font-display text-sm font-bold uppercase tracking-[0.12em] text-ink transition hover:bg-gold-warm"
              >
                Buy Now — ${product.price}
              </Link>
              <Link to="/custom-orders" className="font-display text-sm font-semibold uppercase tracking-wide text-gold-warm hover:underline">
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
            src={asset("images/logo.jpg")}
            alt="Aim for Perfection Golf circular logo"
            className="mx-auto mb-8 h-28 w-28 rounded-full ring-1 ring-gold/40 sm:h-32 sm:w-32"
          />
          <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ivory sm:text-4xl">
            More than a scorecard
          </h2>
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
            className="inline-block rounded-lg bg-gold px-8 py-4 font-display text-sm font-bold uppercase tracking-[0.12em] text-ink transition hover:bg-gold-warm"
          >
            Start a Custom Quote
          </Link>
        </div>
      </Section>

      {/* Founder note */}
      <section className="bg-fairway/20">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
          <div className="rounded-2xl border border-gold/20 bg-charcoal p-8 shadow-xl shadow-black/40 sm:p-10">
            <p className="font-display text-xs font-bold uppercase tracking-[0.28em] text-gold">A note from the founder</p>
            <p className="mt-4 leading-relaxed text-ivory/85">
              Aim for Perfection Golf is a small, founder-led brand. Every tool is checked by hand
              and every custom order gets personal attention — because these pieces tend to mean
              something to the people who carry them. Thanks for supporting a small business built
              on faith and fairways.
            </p>
            <img
              src={asset("images/wordmark-gold.png")}
              alt="Aim for Perfection — Matt 5:48 signature"
              className="mt-6 h-20 w-auto"
            />
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
