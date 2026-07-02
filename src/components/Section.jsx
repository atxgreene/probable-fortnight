export function Section({ children, className = "", ...props }) {
  return (
    <section className={`mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 ${className}`} {...props}>
      {children}
    </section>
  )
}

export function SectionHeading({ eyebrow, title, lede }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-2 font-display text-xs font-bold uppercase tracking-[0.28em] text-gold">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-ivory sm:text-4xl">{title}</h2>
      {lede && <p className="mt-3 text-mist">{lede}</p>}
    </div>
  )
}
