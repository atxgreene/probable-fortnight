import { useState } from "react"

export const faqs = [
  {
    q: "Do you offer custom designs?",
    a: "Yes. Custom designs are available for golf tournaments, church groups, corporate outings, fundraisers, and private events.",
  },
  {
    q: "Can I order in bulk?",
    a: "Yes. Bulk pricing is available by request depending on quantity, finish, and timeline.",
  },
  {
    q: "Can I add my logo?",
    a: "Yes. Upload your logo through the custom order form and we will follow up with artwork requirements.",
  },
  {
    q: "How long do custom orders take?",
    a: "Timing depends on quantity and manufacturing availability. Add your deadline in the quote request form and we'll confirm production timing with your quote.",
  },
  {
    q: "Is this a good gift?",
    a: "Yes. The divot tool is designed as a meaningful golf gift for players, groups, tournaments, and faith-based events.",
  },
]

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-charcoal">
      {faqs.map((f, i) => {
        const open = openIdx === i
        return (
          <div key={f.q}>
            <button
              type="button"
              onClick={() => setOpenIdx(open ? -1 : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
            >
              <span className="font-medium text-ivory">{f.q}</span>
              <span className={`text-gold transition-transform ${open ? "rotate-45" : ""}`} aria-hidden>+</span>
            </button>
            {open && <p className="px-5 pb-5 text-sm leading-relaxed text-mist">{f.a}</p>}
          </div>
        )
      })}
    </div>
  )
}
