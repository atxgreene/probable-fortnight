import { Link } from "react-router-dom"

const useCases = [
  { title: "Golf Tournaments", copy: "Player gifts and tee prizes with your event logo — a keepsake that outlasts the scorecard." },
  { title: "Church Groups", copy: "A meaningful gift for men's retreats, youth fundraisers, and congregation golf days." },
  { title: "Corporate Outings", copy: "A premium branded piece your clients will actually keep in their bag." },
  { title: "Fundraisers", copy: "Sell or gift custom tools to support your cause with something people value." },
  { title: "Groomsmen Gifts", copy: "A personal, lasting thank-you for the guys standing beside you." },
  { title: "Club & Faith Events", copy: "Member gifts and faith-based event keepsakes, made to your design." },
]

export default function UseCaseCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {useCases.map((c) => (
        <Link
          key={c.title}
          to="/custom-orders"
          className="group rounded-xl border border-white/10 bg-gradient-to-b from-charcoal to-charcoal-2 p-6 shadow-lg shadow-black/40 transition hover:border-gold/40"
        >
          <h3 className="font-display text-lg font-bold uppercase tracking-wide text-gold-warm">{c.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-mist">{c.copy}</p>
          <p className="mt-4 font-display text-xs font-bold uppercase tracking-wider text-gold opacity-0 transition group-hover:opacity-100">
            Start a custom quote →
          </p>
        </Link>
      ))}
    </div>
  )
}
