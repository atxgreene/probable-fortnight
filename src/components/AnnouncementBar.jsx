import { useEffect, useState } from "react"
import { site } from "../config"

const messages = [
  "Faith-inspired divot tools — designed to aim higher",
  "Now in six colorways — purple, sky blue, green, burgundy, white & black",
  ...(site.customOrdersEnabled
    ? ["Custom orders for tournaments, churches & events", "Bulk pricing available — request a quote"]
    : []),
]

export default function AnnouncementBar() {
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % messages.length), 5000)
    return () => clearInterval(t)
  }, [])

  const step = (d) => setIdx((i) => (i + d + messages.length) % messages.length)

  return (
    <div className="flex items-center justify-center gap-4 bg-black px-4 py-2.5 text-center">
      <button type="button" aria-label="Previous announcement" onClick={() => step(-1)} className="text-mist/70 hover:text-ivory">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 5l-7 7 7 7" /></svg>
      </button>
      <p className="font-display text-[11px] font-semibold uppercase italic tracking-[0.18em] text-ivory/90 sm:text-xs">
        {messages[idx]}
      </p>
      <button type="button" aria-label="Next announcement" onClick={() => step(1)} className="text-mist/70 hover:text-ivory">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>
  )
}
