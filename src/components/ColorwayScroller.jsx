import { useEffect, useRef, useState } from "react"
import { colorways } from "../data/products"

/**
 * Scroll-driven colorway gallery.
 *
 * The section is tall; its inner stage sticks to the viewport, so scrolling
 * through the section scrubs across the six finishes instead of moving the page.
 *
 * The photos are shot on white and composited with `mix-blend-mode: multiply`
 * over the light panel — that is what makes their backgrounds disappear without
 * anyone having to cut them out, and why new photos only need to be shot on white.
 *
 * Per-frame work writes straight to DOM nodes through refs; React state only
 * changes when the active colorway does (six times across the whole section),
 * so scrolling never triggers a re-render.
 */
export default function ColorwayScroller() {
  const sectionRef = useRef(null)
  const imageRefs = useRef([])
  const [active, setActive] = useState(0)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const onChange = (e) => setReduced(e.matches)
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  useEffect(() => {
    if (reduced) return
    const section = sectionRef.current
    if (!section) return

    let progress = 0
    let targetProgress = 0
    let rafId = null
    let running = false
    let lastFrame = 0
    let lastTick = 0
    let lastIndex = -1

    const clamp01 = (v) => (v < 0 ? 0 : v > 1 ? 1 : v)

    const readScroll = () => {
      const span = section.offsetHeight - window.innerHeight
      targetProgress = span > 0 ? clamp01((window.scrollY - section.offsetTop) / span) : 0
    }

    const paint = () => {
      const pos = progress * (colorways.length - 1)
      imageRefs.current.forEach((node, i) => {
        if (!node) return
        const distance = Math.abs(pos - i)
        const opacity = clamp01(1 - distance)
        node.style.opacity = opacity
        // neighbours drift past each other so the swap reads as motion, not a dissolve
        node.style.transform = `translate3d(0, ${(i - pos) * 7}%, 0) scale(${0.92 + opacity * 0.08})`
      })
      const index = Math.round(pos)
      if (index !== lastIndex) {
        lastIndex = index
        setActive(index)
      }
    }

    const frame = (now) => {
      lastTick = performance.now()
      // Frame-rate independent smoothing: identical feel at 60Hz and 120Hz.
      const dt = lastFrame ? Math.min((now - lastFrame) / 1000, 0.1) : 1 / 60
      lastFrame = now
      readScroll()
      progress += (targetProgress - progress) * (1 - Math.exp(-dt / 0.09))
      if (Math.abs(targetProgress - progress) < 0.0004) progress = targetProgress
      paint()
      rafId = requestAnimationFrame(frame)
    }

    const start = () => {
      if (running) return
      running = true
      lastFrame = 0
      rafId = requestAnimationFrame(frame)
    }
    const stop = () => {
      running = false
      if (rafId) cancelAnimationFrame(rafId)
      rafId = null
    }

    // Only animate while the gallery is actually near the viewport.
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { rootMargin: "100px" },
    )
    io.observe(section)

    // Browsers throttle rAF whenever the page isn't compositing. Scroll events
    // still fire, so if the loop has gone quiet, render straight off them.
    const onScroll = () => {
      // `running` only means a frame was requested — it can still be starved.
      // Trust elapsed time since the last real frame instead.
      if (!running || performance.now() - lastTick > 250) {
        readScroll()
        progress = targetProgress
        paint()
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true })

    readScroll()
    progress = targetProgress
    paint()

    return () => {
      io.disconnect()
      stop()
      window.removeEventListener("scroll", onScroll)
    }
  }, [reduced])

  const jumpTo = (i) => {
    const section = sectionRef.current
    if (!section) return
    const span = section.offsetHeight - window.innerHeight
    window.scrollTo({
      top: section.offsetTop + span * (i / (colorways.length - 1)),
      behavior: "smooth",
    })
  }

  // Reduced motion: no scrubbing, just show every finish at once.
  if (reduced) {
    return (
      <section className="bg-[#f5f2ea] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="mb-2 text-center font-display text-xs font-bold uppercase tracking-[0.28em] text-[#8a6a22]">
            Six Colorways
          </p>
          <h2 className="mb-10 text-center font-display text-3xl font-extrabold uppercase tracking-tight text-ink sm:text-4xl">
            Pick the one that plays like you
          </h2>
          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {colorways.map((c) => (
              <li key={c.id} className="text-center">
                <img
                  src={c.image}
                  alt={`${c.name} Aim for Perfection divot tool`}
                  className="mx-auto h-56 w-auto mix-blend-multiply"
                  loading="lazy"
                />
                <p className="mt-2 font-display text-sm font-bold uppercase tracking-wide text-ink">{c.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    )
  }

  const current = colorways[active] ?? colorways[0]

  return (
    <section
      ref={sectionRef}
      id="colorways"
      className="relative bg-[#f5f2ea]"
      style={{ height: `${colorways.length * 70}vh` }}
      aria-label="Divot tool colorways"
    >
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <p className="absolute top-[7vh] w-full text-center font-display text-xs font-bold uppercase tracking-[0.28em] text-[#8a6a22]">
          {String(active + 1).padStart(2, "0")} / {String(colorways.length).padStart(2, "0")}
        </p>
        <h2
          className="absolute top-[11vh] w-full px-4 text-center font-display text-5xl font-black uppercase leading-none tracking-tighter transition-colors duration-500 sm:text-7xl"
          style={{ color: current.hex === "#FAFAF8" ? "#141310" : current.hex }}
        >
          {current.name}
        </h2>

        <div className="relative aspect-[700/868] w-[min(40vh,74vw)]">
          {colorways.map((c, i) => (
            <img
              key={c.id}
              ref={(node) => (imageRefs.current[i] = node)}
              src={c.image}
              alt={`${c.name} Aim for Perfection divot tool`}
              width="700"
              height="868"
              loading={i === 0 ? "eager" : "lazy"}
              className="absolute inset-0 h-full w-full object-contain mix-blend-multiply will-change-[opacity,transform]"
              style={{ opacity: i === 0 ? 1 : 0 }}
            />
          ))}
        </div>

        <div className="absolute bottom-[9vh] flex w-full justify-center gap-4">
          {colorways.map((c, i) => (
            <button
              key={c.id}
              type="button"
              onClick={() => jumpTo(i)}
              aria-label={c.name}
              aria-current={i === active}
              className="h-4 w-4 rounded-full border border-ink/25 transition-transform duration-300"
              style={{
                background: c.hex,
                transform: i === active ? "scale(1.5)" : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
