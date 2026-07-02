import { useState } from "react"
import { site } from "../config"

const inputCls =
  "w-full rounded-lg border border-white/15 bg-ink px-4 py-2.5 text-sm text-ivory placeholder:text-mist/50 focus:border-gold focus:outline-none"
const labelCls = "mb-1.5 block text-sm font-medium text-ivory/90"

const eventTypes = [
  "Golf tournament",
  "Church group / ministry",
  "Corporate outing",
  "Fundraiser",
  "Groomsmen / wedding gifts",
  "Club event",
  "Faith-based gift",
  "Personal order",
  "Other",
]

const budgets = ["Under $250", "$250–$500", "$500–$1,000", "$1,000–$2,500", "$2,500+", "Not sure yet"]

export default function QuoteForm({ compact = false, formName = "custom-order" }) {
  const [status, setStatus] = useState("idle") // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    data.append("form", formName)

    if (!site.formEndpoint) {
      // No form service configured yet — fall back to a prefilled email.
      const body = [...data.entries()]
        .filter(([k, v]) => typeof v === "string" && v && k !== "form")
        .map(([k, v]) => `${k}: ${v}`)
        .join("\n")
      window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(
        `Custom order request — ${data.get("name") || "new inquiry"}`
      )}&body=${encodeURIComponent(body + "\n\n(Attach your logo/artwork to this email.)")}`
      setStatus("sent")
      return
    }

    setStatus("sending")
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      })
      if (!res.ok) throw new Error(`Form service responded ${res.status}`)
      setStatus("sent")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-gold/40 bg-fairway/30 p-8 text-center">
        <p className="font-serif text-2xl text-gold-warm">Thank you.</p>
        <p className="mx-auto mt-3 max-w-md text-ivory/90">
          We received your custom order request and will follow up with pricing, artwork
          requirements, and production timing.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2" encType="multipart/form-data">
      <div>
        <label className={labelCls} htmlFor="qf-name">Name *</label>
        <input id="qf-name" name="name" required className={inputCls} placeholder="Full name" />
      </div>
      <div>
        <label className={labelCls} htmlFor="qf-email">Email *</label>
        <input id="qf-email" name="email" type="email" required className={inputCls} placeholder="you@email.com" />
      </div>
      <div>
        <label className={labelCls} htmlFor="qf-phone">Phone</label>
        <input id="qf-phone" name="phone" type="tel" className={inputCls} placeholder="(555) 555-5555" />
      </div>
      <div>
        <label className={labelCls} htmlFor="qf-org">Organization / event</label>
        <input id="qf-org" name="organization" className={inputCls} placeholder="Tournament, church, or company" />
      </div>
      <div>
        <label className={labelCls} htmlFor="qf-type">Order type *</label>
        <select id="qf-type" name="order_type" required className={inputCls} defaultValue="">
          <option value="" disabled>Select one…</option>
          {eventTypes.map((t) => <option key={t}>{t}</option>)}
        </select>
      </div>
      <div>
        <label className={labelCls} htmlFor="qf-qty">Quantity needed *</label>
        <input id="qf-qty" name="quantity" type="number" min="1" required className={inputCls} placeholder="e.g. 100" />
      </div>
      <div>
        <label className={labelCls} htmlFor="qf-deadline">Deadline / event date</label>
        <input id="qf-deadline" name="deadline" type="date" className={inputCls} />
      </div>
      <div>
        <label className={labelCls} htmlFor="qf-budget">Budget range</label>
        <select id="qf-budget" name="budget" className={inputCls} defaultValue="">
          <option value="" disabled>Select one…</option>
          {budgets.map((b) => <option key={b}>{b}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="qf-design">Desired logo or phrase</label>
        <input id="qf-design" name="design_text" className={inputCls} placeholder='e.g. "First Baptist Golf Classic 2026"' />
      </div>
      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="qf-file">Upload logo / artwork</label>
        <input
          id="qf-file"
          name="artwork"
          type="file"
          accept="image/*,.pdf,.ai,.eps,.svg"
          className="w-full cursor-pointer rounded-lg border border-dashed border-white/20 bg-ink px-4 py-3 text-sm text-mist file:mr-4 file:rounded-full file:border-0 file:bg-gold file:px-4 file:py-1.5 file:text-sm file:font-semibold file:text-ink"
        />
        {!site.formEndpoint && (
          <p className="mt-1.5 text-xs text-mist/70">
            You'll be able to attach your file to the email that opens when you submit.
          </p>
        )}
      </div>
      <div className="sm:col-span-2">
        <label className={labelCls} htmlFor="qf-notes">Notes</label>
        <textarea
          id="qf-notes"
          name="notes"
          rows={compact ? 3 : 4}
          className={inputCls}
          placeholder="Tell us about your event, finish preferences, packaging needs, or anything else."
        />
      </div>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full rounded-full bg-gold px-6 py-3.5 font-semibold text-ink transition hover:bg-gold-warm disabled:opacity-60 sm:w-auto"
        >
          {status === "sending" ? "Sending…" : "Start a Custom Quote"}
        </button>
        {status === "error" && (
          <p className="mt-3 text-sm text-red-400">
            Something went wrong sending your request. Please email us directly at{" "}
            <a className="underline" href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
          </p>
        )}
      </div>
    </form>
  )
}
