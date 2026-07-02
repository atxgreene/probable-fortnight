import { Link } from "react-router-dom"
import { site } from "../config"
import EmailCapture from "./EmailCapture"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-charcoal">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src="/images/logo.jpg" alt="AP Golf logo" className="h-12 w-12 rounded-full ring-1 ring-gold/40" />
            <p className="font-serif text-lg text-ivory">
              Aim for Perfection <span className="text-gold">Golf</span>
            </p>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
            Faith-driven golf accessories for players who want purpose, precision, and personal
            meaning on the course.
          </p>
          <p className="mt-3 font-serif italic text-gold/80">“Aim for Perfection” — {site.scripture}</p>
        </div>

        <div className="text-sm">
          <p className="mb-3 font-semibold uppercase tracking-wider text-gold">Explore</p>
          <ul className="space-y-2 text-mist">
            <li><Link className="hover:text-ivory" to="/shop">Shop Divot Tools</Link></li>
            <li><Link className="hover:text-ivory" to="/custom-orders">Custom Orders</Link></li>
            <li><Link className="hover:text-ivory" to="/bulk-orders">Bulk & Event Orders</Link></li>
            <li><Link className="hover:text-ivory" to="/contact">Contact</Link></li>
          </ul>
          <p className="mt-6 text-mist">
            <a className="hover:text-ivory" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>
          </p>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gold">Stay in the loop</p>
          <p className="mb-3 text-sm text-mist">New designs, tournament season drops, and custom order openings.</p>
          <EmailCapture />
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-mist">
        © {new Date().getFullYear()} Aim for Perfection Golf LLC. All rights reserved.
      </div>
    </footer>
  )
}
