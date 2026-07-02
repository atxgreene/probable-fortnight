import { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { asset } from "../config"

const nav = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/custom-orders", label: "Custom" },
  { to: "/bulk-orders", label: "Bulk & Events" },
  { to: "/contact", label: "Contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur">
      <div className="mx-auto grid h-20 max-w-6xl sm:h-24 grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-6">
        {/* Left: desktop nav / mobile hamburger */}
        <nav className="hidden items-center gap-5 lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `font-display text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                  isActive ? "text-gold-warm" : "text-mist hover:text-ivory"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="justify-self-start rounded-md p-2 text-ivory lg:hidden"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        {/* Center: handwritten wordmark */}
        <Link to="/" className="justify-self-center" onClick={() => setOpen(false)} aria-label="Aim for Perfection Golf — home">
          <img
            src={asset("images/wordmark-gold.png")}
            alt="Aim for Perfection — Matt 5:48"
            className="h-14 w-auto sm:h-[4.5rem]"
          />
        </Link>

        {/* Right: CTA */}
        <div className="justify-self-end">
          <Link
            to="/custom-orders"
            className="hidden rounded-lg bg-gold px-4 py-2.5 font-display text-xs font-bold uppercase tracking-[0.12em] text-ink transition hover:bg-gold-warm sm:inline-block"
          >
            Request Quote
          </Link>
          <Link to="/shop" className="font-display text-xs font-bold uppercase tracking-[0.12em] text-gold-warm sm:hidden">
            Shop
          </Link>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-charcoal px-4 pb-4 pt-2 lg:hidden">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-md px-3 py-3 font-display text-sm font-semibold uppercase tracking-[0.12em] ${
                  isActive ? "text-gold-warm" : "text-ivory/90"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link
            to="/custom-orders"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-lg bg-gold px-4 py-3 text-center font-display text-sm font-bold uppercase tracking-[0.12em] text-ink"
          >
            Request Custom Quote
          </Link>
        </nav>
      )}
    </header>
  )
}
