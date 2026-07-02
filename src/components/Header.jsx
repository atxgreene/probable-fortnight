import { useState } from "react"
import { Link, NavLink } from "react-router-dom"

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/custom-orders", label: "Custom Orders" },
  { to: "/bulk-orders", label: "Bulk & Events" },
  { to: "/contact", label: "Contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/images/logo.jpg" alt="AP Golf logo" className="h-10 w-10 rounded-full ring-1 ring-gold/40" />
          <span className="font-serif text-lg leading-tight tracking-wide text-ivory">
            Aim for Perfection <span className="text-gold">Golf</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm transition-colors ${isActive ? "text-gold-warm" : "text-mist hover:text-ivory"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/custom-orders"
            className="rounded-full bg-gold px-4 py-2 text-sm font-semibold text-ink transition hover:bg-gold-warm"
          >
            Request Custom Quote
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-ivory md:hidden"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-charcoal px-4 pb-4 pt-2 md:hidden">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-md px-3 py-2.5 text-sm ${isActive ? "text-gold-warm" : "text-ivory/90"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/custom-orders"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-gold px-4 py-2.5 text-center text-sm font-semibold text-ink"
          >
            Request Custom Quote
          </Link>
        </nav>
      )}
    </header>
  )
}
