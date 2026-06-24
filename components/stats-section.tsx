"use client"

import { useEffect, useRef, useState } from "react"

const stats = [
  { value: 12, suffix: "+", label: "Years of compassionate care" },
  { value: 2400, suffix: "+", label: "Sessions held with warmth" },
  { value: 96, suffix: "%", label: "Clients feel genuinely heard" },
  { value: 7, suffix: "", label: "Specialist areas of support" },
]

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active) return
    let frame = 0
    const start = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      // ease-out cubic for a gentle settle
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * target))
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [target, active, duration])

  return value
}

function StatItem({
  value,
  suffix,
  label,
  active,
}: {
  value: number
  suffix: string
  label: string
  active: boolean
}) {
  const count = useCountUp(value, active)
  return (
    <div className="text-center">
      <p className="font-serif text-4xl font-medium tracking-tight text-primary-foreground md:text-5xl">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-2 text-pretty text-sm leading-relaxed text-primary-foreground/80">
        {label}
      </p>
    </div>
  )
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="px-6 py-20">
      <div
        ref={ref}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 md:px-16"
      >
        {/* Abstract drifting organic shapes */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="animate-willow-drift absolute -left-16 -top-20 size-64 rounded-full bg-primary-foreground/10 blur-2xl" />
          <div className="animate-willow-drift-slow absolute -bottom-24 right-0 size-72 rounded-full bg-accent/20 blur-2xl" />
          <div className="animate-willow-drift absolute right-1/3 top-1/2 size-40 rounded-full bg-primary-foreground/10 blur-xl" />
        </div>

        <div className="relative">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-wide text-primary-foreground/70">
              Quietly making a difference
            </p>
            <h2 className="text-balance font-serif text-3xl font-medium tracking-tight text-primary-foreground md:text-4xl">
              A practice built on trust
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
            {stats.map((stat) => (
              <StatItem key={stat.label} {...stat} active={active} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
