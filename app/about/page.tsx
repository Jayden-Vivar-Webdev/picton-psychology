import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Check, Heart, Leaf, ShieldCheck, Sparkles } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export const metadata: Metadata = {
  title: "About the clinic | Picton Psychology",
  description:
    "Learn the story, values, and quiet philosophy behind Picton Psychology — a warm, welcoming clinic built around compassionate, person-centred care.",
}

const values = [
  {
    icon: Heart,
    title: "Genuine warmth",
    description:
      "You are a person, never a case file. Every conversation begins with patience, kindness, and zero judgement.",
  },
  {
    icon: ShieldCheck,
    title: "A safe space",
    description:
      "Confidential, calming, and unhurried. What you share here stays here, always.",
  },
  {
    icon: Sparkles,
    title: "Shaped around you",
    description:
      "No two journeys look the same, so we never use a one-size-fits-all approach. Your therapy is built around your needs.",
  },
  {
    icon: Leaf,
    title: "Lasting change",
    description:
      "We help you build understanding and tools that stay with you, long after our sessions end.",
  },
]

const promises = [
  "A safe, confidential and judgement-free space",
  "Warm, qualified and genuinely caring therapists",
  "Flexible in-person and online sessions",
  "An approach shaped entirely around you",
]

const milestones = [
  { value: "2014", label: "Year Picton Psychology opened its doors" },
  { value: "3,000+", label: "People supported on their journey" },
  { value: "12", label: "Specialist areas of care" },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pt-16 pb-20 md:pt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-0 size-72 rounded-full bg-primary/10 blur-3xl animate-willow-drift"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col items-start gap-6">
              <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                About the clinic
              </span>
              <h1 className="text-balance font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl">
                A peaceful place to pause, reflect, and heal
              </h1>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                Picton Psychology was founded on a simple belief: everyone deserves to
                feel understood. We&apos;ve created a calm, welcoming environment
                where you can slow down, feel safe, and work towards lasting change
                at your own pace.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  render={<Link href="/#contact" />}
                  nativeButton={false}
                  size="lg"
                  className="rounded-full"
                >
                  Book a first conversation
                </Button>
                <Button
                  render={<Link href="/our-team" />}
                  nativeButton={false}
                  size="lg"
                  variant="outline"
                  className="rounded-full"
                >
                  Meet our team
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2.5rem] border border-border/60 shadow-sm">
                <Image
                  src="/images/about-willows.png"
                  alt="Soft willow trees beside a calm reflective pond at golden hour"
                  width={760}
                  height={620}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="bg-secondary/40 px-6 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-[2.5rem] border border-border/60 shadow-sm">
                <Image
                  src="/images/clinic-warm-space.png"
                  alt="A warm, welcoming clinic waiting area with sage green walls and soft natural light"
                  width={720}
                  height={620}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="order-1 flex flex-col items-start gap-6 lg:order-2">
              <p className="text-sm font-medium uppercase tracking-wide text-primary">
                Our story
              </p>
              <h2 className="text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                Built quietly, with care
              </h2>
              <div className="flex flex-col gap-4 text-pretty leading-relaxed text-muted-foreground">
                <p>
                  Picton Psychology began with our founder, Dr. Clara Whitfield, and a
                  frustration shared by so many: that asking for help so often
                  felt clinical, rushed, and cold. She imagined something gentler —
                  a clinic that felt more like a deep breath than a waiting room.
                </p>
                <p>
                  Today, we&apos;re a small, close-knit team of therapists who chose
                  this work because we care. We take the time to truly listen, and
                  we meet you exactly where you are — no scripts, no pressure, no
                  rush.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="relative overflow-hidden px-6 py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 bottom-0 size-72 rounded-full bg-primary/10 blur-3xl animate-willow-drift-slow"
          />
          <div className="relative mx-auto grid max-w-5xl gap-8 text-center sm:grid-cols-3">
            {milestones.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <span className="font-serif text-4xl font-medium text-primary md:text-5xl">
                  {item.value}
                </span>
                <span className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="bg-secondary/40 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-wide text-primary">
                What we stand for
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                The values woven through everything we do
              </h2>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {values.map((value) => (
                <article
                  key={value.title}
                  className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-card p-7 shadow-sm"
                >
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <value.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-serif text-xl font-medium tracking-tight text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Promise + CTA */}
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col items-start gap-6">
              <p className="text-sm font-medium uppercase tracking-wide text-primary">
                Our promise to you
              </p>
              <h2 className="text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                What you can always expect here
              </h2>
              <ul className="grid gap-3 pt-2">
                {promises.map((promise) => (
                  <li key={promise} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Check className="size-4" aria-hidden="true" />
                    </span>
                    <span className="leading-relaxed text-foreground">{promise}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col items-start gap-5 rounded-[2.5rem] border border-border/60 bg-secondary/50 p-8 md:p-10">
              <h3 className="text-balance font-serif text-2xl font-medium tracking-tight text-foreground">
                Ready when you are
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Taking the first step is often the hardest part. When you feel
                ready, we&apos;re here — gently, patiently, and without judgement.
              </p>
              <Button
                render={<Link href="/#contact" />}
                nativeButton={false}
                size="lg"
                className="rounded-full"
              >
                Get in touch
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
