import Image from "next/image"
import Link from "next/link"
import { Check, Clock, Users, MapPin, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { FaqAccordion } from "@/components/faq-accordion"
import type { AssessmentContent } from "@/lib/assessments-data"

export function AssessmentPageTemplate({ assessment }: { assessment: AssessmentContent }) {
  const keyDetails = [
    { icon: Users, label: "Suitable for", value: assessment.keyDetails.ages },
    { icon: Clock, label: "Typical length", value: assessment.keyDetails.duration },
    { icon: MapPin, label: "Format", value: assessment.keyDetails.format },
    { icon: FileText, label: "Turnaround", value: assessment.keyDetails.turnaround },
  ]

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
                {assessment.eyebrow}
              </span>
              <h1 className="text-balance font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl">
                {assessment.title}
              </h1>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                {assessment.heroDescription}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  render={<Link href="/#contact" />}
                  nativeButton={false}
                  size="lg"
                  className="rounded-full"
                >
                  Enquire about an assessment
                </Button>
                <Button
                  render={<Link href="/#contact" />}
                  nativeButton={false}
                  size="lg"
                  variant="outline"
                  className="rounded-full"
                >
                  Ask a question
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2.5rem] border border-border/60 shadow-sm">
                <Image
                  src={assessment.heroImage || "/placeholder.svg"}
                  alt={assessment.heroImageAlt}
                  width={760}
                  height={620}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Key details strip */}
          <div className="relative mx-auto mt-12 max-w-6xl">
            <dl className="grid gap-px overflow-hidden rounded-3xl border border-border/60 bg-border/60 sm:grid-cols-2 lg:grid-cols-4">
              {keyDetails.map((detail) => (
                <div key={detail.label} className="flex items-center gap-4 bg-card p-6">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <detail.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="flex flex-col">
                    <dt className="text-sm text-muted-foreground">{detail.label}</dt>
                    <dd className="font-serif text-lg font-medium text-foreground">{detail.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-secondary/40 px-6 py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              {assessment.overview.heading}
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {assessment.overview.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-pretty leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* What we explore */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-wide text-primary">What we explore</p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                {assessment.areas.heading}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {assessment.areas.intro}
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {assessment.areas.items.map((item) => (
                <article
                  key={item.title}
                  className="flex flex-col gap-3 rounded-3xl border border-border/60 bg-card p-7 transition-colors hover:border-primary/40 hover:bg-secondary/40"
                >
                  <span className="flex size-10 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                    <Check className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-serif text-xl font-medium text-foreground">{item.title}</h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* The process */}
        <section className="relative overflow-hidden bg-secondary/40 px-6 py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 bottom-0 size-72 rounded-full bg-primary/10 blur-3xl animate-willow-drift-slow"
          />
          <div className="relative mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-wide text-primary">The process</p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                {assessment.process.heading}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {assessment.process.intro}
              </p>
            </div>
            <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {assessment.process.items.map((step, i) => (
                <li
                  key={step.title}
                  className="flex flex-col gap-3 rounded-3xl border border-border/60 bg-card p-7 shadow-sm"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-primary/15 font-serif text-lg font-medium text-primary">
                    {i + 1}
                  </span>
                  <h3 className="font-serif text-lg font-medium text-foreground">{step.title}</h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">{step.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* What you'll receive */}
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-primary">Outcomes</p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                {assessment.outcomes.heading}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {assessment.outcomes.intro}
              </p>
            </div>
            <ul className="flex flex-col gap-4">
              {assessment.outcomes.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-3xl border border-border/60 bg-card p-6"
                >
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-pretty leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-secondary/40 px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p className="mb-3 text-sm font-medium uppercase tracking-wide text-primary">Good to know</p>
              <h2 className="text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                Questions, gently answered
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                A few of the things people often wonder about before booking an assessment.
              </p>
            </div>
            <FaqAccordion faqs={assessment.faqs} />
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 rounded-[2.5rem] border border-border/60 bg-secondary/50 p-10 text-center md:p-14">
            <h2 className="text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              {assessment.cta.heading}
            </h2>
            <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
              {assessment.cta.description}
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
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
