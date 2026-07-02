import { useState } from "react"
import { Section, SectionHeading } from "../components/Section"
import { site } from "../config"

const inputCls =
  "w-full rounded-lg border border-white/15 bg-ink px-4 py-2.5 text-sm text-ivory placeholder:text-mist/50 focus:border-gold focus:outline-none"

export default function Contact() {
  const [status, setStatus] = useState("idle")

  async function submit(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    data.append("form", "contact")

    if (!site.formEndpoint) {
      window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(
        `Website message from ${data.get("name")}`
      )}&body=${encodeURIComponent(data.get("message") + "\n\n— " + data.get("name") + " (" + data.get("email") + ")")}`
      setStatus("sent")
      return
    }
    setStatus("sending")
    try {
      const res = await fetch(site.formEndpoint, { method: "POST", headers: { Accept: "application/json" }, body: data })
      if (!res.ok) throw new Error("send failed")
      setStatus("sent")
      e.target.reset()
    } catch {
      setStatus("error")
    }
  }

  return (
    <Section>
      <SectionHeading
        eyebrow="Contact"
        title="Get in touch"
        lede="Questions about an order, a custom design, or anything else — we'd love to hear from you."
      />
      <div className="mx-auto max-w-xl">
        {status === "sent" ? (
          <div className="rounded-2xl border border-gold/40 bg-fairway/30 p-8 text-center">
            <p className="font-display text-2xl font-extrabold uppercase tracking-tight text-gold-warm">Message received.</p>
            <p className="mt-3 text-ivory/90">Thanks for reaching out — we'll get back to you shortly.</p>
          </div>
        ) : (
          <form onSubmit={submit} className="grid gap-5 rounded-3xl border border-white/10 bg-charcoal p-6 shadow-2xl shadow-black/50 sm:p-8">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-ivory/90" htmlFor="c-name">Name *</label>
              <input id="c-name" name="name" required className={inputCls} placeholder="Full name" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-ivory/90" htmlFor="c-email">Email *</label>
              <input id="c-email" name="email" type="email" required className={inputCls} placeholder="you@email.com" />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-ivory/90" htmlFor="c-msg">Message *</label>
              <textarea id="c-msg" name="message" rows={5} required className={inputCls} placeholder="How can we help?" />
            </div>
            <button
              type="submit"
              disabled={status === "sending"}
              className="rounded-lg bg-gold px-6 py-4 font-display text-sm font-bold uppercase tracking-[0.12em] text-ink transition hover:bg-gold-warm disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send Message"}
            </button>
            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong. Email us directly at{" "}
                <a className="underline" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
              </p>
            )}
          </form>
        )}
        <p className="mt-8 text-center text-mist">
          Prefer email? Reach us any time at{" "}
          <a className="font-medium text-gold-warm hover:underline" href={`mailto:${site.contactEmail}`}>
            {site.contactEmail}
          </a>
        </p>
      </div>
    </Section>
  )
}
