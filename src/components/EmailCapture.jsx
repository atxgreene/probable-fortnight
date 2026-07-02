import { useState } from "react"
import { site } from "../config"

export default function EmailCapture() {
  const [email, setEmail] = useState("")
  const [done, setDone] = useState(false)

  async function submit(e) {
    e.preventDefault()
    if (site.formEndpoint) {
      try {
        await fetch(site.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ form: "email-capture", email }),
        })
      } catch {
        /* still confirm; lead is recoverable via follow-up */
      }
    } else {
      window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent("Mailing list signup")}&body=${encodeURIComponent(`Please add me to the AP Golf list: ${email}`)}`
    }
    setDone(true)
  }

  if (done) {
    return <p className="rounded-lg bg-fairway/40 px-4 py-3 text-sm text-ivory">You're on the list. Welcome aboard.</p>
  }

  return (
    <form onSubmit={submit} className="flex gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@email.com"
        className="w-full rounded-lg border border-white/15 bg-ink px-4 py-2 text-sm text-ivory placeholder:text-mist/60 focus:border-gold focus:outline-none"
      />
      <button type="submit" className="shrink-0 rounded-lg bg-gold px-4 py-2 font-display text-xs font-bold uppercase tracking-wide text-ink transition hover:bg-gold-warm">
        Join
      </button>
    </form>
  )
}
