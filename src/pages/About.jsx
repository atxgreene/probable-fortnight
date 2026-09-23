import { Link } from "react-router-dom"
import { Section } from "../components/Section"
import { site, asset } from "../config"

const paragraphs = [
  "For more than 34 years, I've had the privilege of serving in ministry as a bi-vocational youth minister and pastor. I am currently the pastor at a small country church in Cookietown, OK. Throughout those years, my desire has always been to encourage people to grow in their faith and pursue the life God has called them to live.",
  "Outside of ministry, one of my greatest passions is golf. I started sketching ideas for a divot tool and eventually came up with this design. It is a unique design that I'm proud to share with fellow golfers. That's how Aim for Perfection was born.",
  'The name comes from Matthew 5:48, where Jesus challenges us to "be perfect, therefore, as your heavenly Father is perfect." While none of us will achieve perfection on our own, we can make it our daily goal to grow, improve, and become more like Christ. That same mindset applies on the golf course — striving to improve with every round while enjoying the game we love.',
  "Every Aim for Perfection divot tool is more than just a golf accessory. It's a reminder to repair what we can, leave the course better than we found it, and pursue excellence in both our faith and our game. My hope is that every time you use one, you'll be encouraged to keep aiming for perfection — on the course and in life.",
]

export default function About() {
  return (
    <>
      {/* Header band with logo */}
      <section className="border-b border-white/10 bg-charcoal">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <img
            src={asset("images/logo.jpg")}
            alt="Aim for Perfection Golf logo"
            className="mx-auto mb-8 h-28 w-28 rounded-full ring-1 ring-gold/40 sm:h-32 sm:w-32"
          />
          <p className="mb-2 font-display text-xs font-bold uppercase tracking-[0.28em] text-gold">Our Story</p>
          <h1 className="font-display text-4xl font-black uppercase tracking-tight text-ivory sm:text-5xl">
            About Us
          </h1>
        </div>
      </section>

      {/* Story */}
      <Section className="max-w-3xl">
        <figure className="mb-12 text-center">
          <img
            src={asset("images/founder.jpg")}
            alt="The founder of Aim for Perfection Golf"
            width="820"
            height="1017"
            loading="lazy"
            className="mx-auto w-full max-w-xs rounded-2xl border border-gold/25 p-2"
          />
          <figcaption className="mt-4 font-display text-xs font-bold uppercase tracking-[0.24em] text-gold">
            Founder &amp; Pastor
          </figcaption>
        </figure>
        <div className="space-y-6">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-lg leading-relaxed text-ivory/85">
              {p}
            </p>
          ))}
          <p className="font-display text-lg font-bold uppercase tracking-wide text-gold-warm">
            We look forward to seeing you out on the course!
          </p>
        </div>

        {/* Signature + scripture */}
        <div className="mt-12 border-t border-white/10 pt-10 text-center">
          <img
            src={asset("images/wordmark-gold.png")}
            alt="Aim for Perfection — Matt 5:48 signature"
            className="mx-auto h-24 w-auto"
          />
          <p className="mt-6 font-serif text-lg italic text-gold/90">
            “Be perfect, therefore, as your heavenly Father is perfect.” — {site.scripture}
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-12 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/shop"
            className="rounded-lg bg-gold px-8 py-4 text-center font-display text-sm font-bold uppercase tracking-[0.12em] text-ink transition hover:bg-gold-warm"
          >
            Shop Divot Tools
          </Link>
          <Link
            to="/custom-orders"
            className="rounded-lg border border-ivory/30 px-8 py-4 text-center font-display text-sm font-bold uppercase tracking-[0.12em] text-ivory transition hover:border-gold hover:text-gold-warm"
          >
            Request a Custom Order
          </Link>
        </div>
      </Section>
    </>
  )
}
