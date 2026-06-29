"use client"

import dynamic from "next/dynamic"

const JourneyScene = dynamic(() => import("@/components/journey-scene"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-2 w-2 animate-pulse rounded-full bg-primary/50" />
    </div>
  ),
})

export default function StatsBanner() {
  return (
    <section className="bg-secondary/60 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-medium text-sm uppercase tracking-wider text-primary">
            How it works
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl text-foreground md:text-4xl">
            Your journey with us
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Healing happens one gentle step at a time. Here&apos;s the path we&apos;ll
            walk together, at a pace that feels right for you.
          </p>
        </div>

        <div
          className="mt-10 h-[360px] w-full md:h-[420px]"
          aria-hidden="true"
        >
          <JourneyScene />
        </div>

        {/* Accessible text fallback for the decorative 3D scene */}
        <ol className="sr-only">
          <li>Reach out — take the first step</li>
          <li>First session — a gentle conversation</li>
          <li>Understanding — make sense of things</li>
          <li>Growth — build new strengths</li>
          <li>Wellbeing — feel like yourself</li>
        </ol>
      </div>
    </section>
  )
}
