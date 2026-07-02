import { Section, SectionHeading } from "../components/Section"
import QuoteForm from "../components/QuoteForm"

// PLACEHOLDER values — update once supplier quotes are in (see docs/MANUFACTURING-ROADMAP.md)
const specs = [
  { label: "Minimum quantity", value: "25 units (custom designs from 50)" },
  { label: "Materials", value: "Zinc alloy · stainless steel · brass" },
  { label: "Finishes", value: "Polished · matte black · gold · antique bronze · enamel fill" },
  { label: "Packaging", value: "Clear pouch · card backing · gift box · tournament bag insert" },
  { label: "Lead time", value: "Typically 3–6 weeks from artwork approval" },
]

export default function BulkOrders() {
  return (
    <>
      <Section className="pb-8">
        <SectionHeading
          eyebrow="Bulk & Event Orders"
          title="Outfit your whole event"
          lede="Custom and bulk divot tool orders are available for tournaments, organizations, and retailers. Tell us your quantity, design, and deadline — we'll come back with a quote."
        />

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specs.map((s) => (
            <div key={s.label} className="rounded-2xl border border-white/10 bg-gradient-to-b from-charcoal to-charcoal-2 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-gold">{s.label}</p>
              <p className="mt-2 text-sm leading-relaxed text-ivory/85">{s.value}</p>
            </div>
          ))}
          <div className="flex items-center justify-center rounded-2xl border border-gold/40 bg-fairway/20 p-5 text-center">
            <p className="text-sm text-ivory/85">
              Exact pricing depends on quantity, finish, and timeline — request a quote below.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-4" id="quote">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-charcoal p-6 shadow-2xl shadow-black/50 sm:p-10">
          <h2 className="mb-6 text-center font-serif text-2xl text-ivory">Request a Bulk Quote</h2>
          <QuoteForm formName="bulk-order" />
        </div>
      </Section>
    </>
  )
}
