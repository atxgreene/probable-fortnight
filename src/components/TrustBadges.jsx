const badges = [
  { icon: "✦", label: "Six Colorways" },
  { icon: "⛳", label: "Golf Tournament Ready" },
  { icon: "✚", label: "Faith-Inspired Design" },
  { icon: "❦", label: "Giftable Product" },
]

export default function TrustBadges() {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-3">
      {badges.map((b) => (
        <li
          key={b.label}
          className="flex items-center gap-2 rounded-full border border-gold/30 bg-charcoal px-4 py-2 text-xs font-medium tracking-wide text-ivory/90"
        >
          <span aria-hidden className="text-gold">{b.icon}</span>
          {b.label}
        </li>
      ))}
    </ul>
  )
}
