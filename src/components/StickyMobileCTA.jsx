import { Link, useLocation } from "react-router-dom"

export default function StickyMobileCTA() {
  const { pathname } = useLocation()
  if (pathname === "/custom-orders") return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-ink/95 p-3 backdrop-blur md:hidden">
      <div className="flex gap-2">
        <Link
          to="/shop"
          className="flex-1 rounded-lg border border-gold/60 px-4 py-3 text-center font-display text-xs font-bold uppercase tracking-[0.1em] text-gold-warm"
        >
          Shop Divot Tools
        </Link>
        <Link
          to="/custom-orders"
          className="flex-1 rounded-lg bg-gold px-4 py-3 text-center font-display text-xs font-bold uppercase tracking-[0.1em] text-ink"
        >
          Custom Quote
        </Link>
      </div>
    </div>
  )
}
