import { Section, SectionHeading } from "../components/Section"
import QuoteForm from "../components/QuoteForm"
import UseCaseCards from "../components/UseCaseCards"

export default function CustomOrders() {
  return (
    <>
      <Section className="pb-8">
        <SectionHeading
          eyebrow="Custom Orders"
          title="Custom Divot Tools for Events, Gifts, and Groups"
          lede="Whether you are planning a golf tournament, church fundraiser, corporate outing, bachelor party, or private club event, Aim for Perfection Golf can help create a meaningful custom divot tool for your group."
        />
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-charcoal p-6 shadow-2xl shadow-black/50 sm:p-10">
          <QuoteForm />
        </div>
        <p className="mx-auto mt-6 max-w-xl text-center text-sm text-mist">
          We typically reply within 1–2 business days with pricing, artwork requirements, and
          production timing.
        </p>
      </Section>

      <Section className="pt-8">
        <SectionHeading eyebrow="Perfect for" title="Made for moments that matter" />
        <UseCaseCards />
      </Section>
    </>
  )
}
