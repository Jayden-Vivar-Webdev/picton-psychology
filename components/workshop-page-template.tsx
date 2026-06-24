import Image from "next/image"
import Link from "next/link"
import { Check, HeartHandshake, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { FaqAccordion } from "@/components/faq-accordion"
import type { WorkshopContent } from "@/lib/workshops-data"

export function WorkshopPageTemplate({ workshop }: { workshop: WorkshopContent }) {
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
                {workshop.eyebrow}
              </span>
              <h1 className="text-balance font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl">
                {workshop.title}
              </h1>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">{workshop.intro}</p>
              <ul className="flex flex-wrap gap-2.5">
                {workshop.badges.map((badge) => (
                  <li
                    key={badge}
                    className="flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-sm font-medium text-primary"
                  >
                    <Check className="size-4" aria-hidden="true" />
                    {badge}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col items-start gap-3 pt-2">
                <Button
                  render={<Link href="/#contact" />}
                  nativeButton={false}
                  size="lg"
                  className="rounded-full"
                >
                  {workshop.ctaLabel}
                </Button>
                <p className="text-sm text-muted-foreground">
                  Carefully developed by{" "}
                  <span className="font-medium text-foreground">{workshop.facilitator}</span>,{" "}
                  {workshop.facilitatorRole}
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2.5rem] border border-border/60 shadow-sm">
                <Image
                  src={workshop.image || "/placeholder.svg"}
                  alt={workshop.imageAlt}
                  width={760}
                  height={620}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-secondary/40 px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-balance text-center font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              {workshop.overview.heading}
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {workshop.overview.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-pretty leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Common experiences */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              {workshop.commonExperiences.heading}
            </h2>
            <ul className="mt-10 grid gap-4 text-left sm:grid-cols-2">
              {workshop.commonExperiences.items.map((item) => (
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

        {/* About the workshop */}
        <section className="bg-secondary/40 px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-center text-sm font-medium uppercase tracking-wide text-primary">The workshop</p>
            <h2 className="mt-4 text-balance text-center font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              {workshop.about.heading}
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {workshop.about.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-pretty leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Who this is for */}
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-primary">A good fit</p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                {workshop.whoFor.heading}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{workshop.whoFor.intro}</p>
            </div>
            <ul className="flex flex-col gap-4">
              {workshop.whoFor.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-3xl border border-border/60 bg-card p-6"
                >
                  <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <HeartHandshake className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-pretty leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What you'll learn */}
        <section className="relative overflow-hidden bg-secondary/40 px-6 py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 bottom-0 size-72 rounded-full bg-primary/10 blur-3xl animate-willow-drift-slow"
          />
          <div className="relative mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-wide text-primary">Inside the day</p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                {workshop.learn.heading}
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {workshop.learn.items.map((item, i) => (
                <article
                  key={item}
                  className="flex flex-col gap-3 rounded-3xl border border-border/60 bg-card p-7"
                >
                  <span className="flex size-11 items-center justify-center rounded-full bg-primary/15 font-serif text-lg font-medium text-primary">
                    {i + 1}
                  </span>
                  <p className="text-pretty leading-relaxed text-foreground">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Expected outcomes */}
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-primary">Outcomes</p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                {workshop.outcomes.heading}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{workshop.outcomes.intro}</p>
            </div>
            <ul className="flex flex-col gap-4">
              {workshop.outcomes.items.map((item) => (
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

        {/* Funding / Medicare */}
        <section className="px-6 pb-20">
          <div className="mx-auto flex max-w-5xl flex-col gap-6 rounded-[2.5rem] border border-primary/20 bg-primary/8 p-10 md:flex-row md:items-start md:p-12">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
              <ShieldCheck className="size-6" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-balance font-serif text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                {workshop.funding.heading}
              </h2>
              <div className="mt-4 flex flex-col gap-4">
                {workshop.funding.paragraphs.map((paragraph) => (
                  <p key={paragraph} className="text-pretty leading-relaxed text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Meet the facilitator */}
        <section className="bg-secondary/40 px-6 py-20">
          <div className="mx-auto max-w-3xl">
            <p className="text-center text-sm font-medium uppercase tracking-wide text-primary">Your facilitator</p>
            <h2 className="mt-4 text-balance text-center font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Meet {workshop.facilitatorBio.name}
            </h2>
            <p className="mt-2 text-center text-muted-foreground">{workshop.facilitatorBio.role}</p>
            <div className="mt-6 flex flex-col gap-4">
              {workshop.facilitatorBio.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-pretty leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p className="mb-3 text-sm font-medium uppercase tracking-wide text-primary">Good to know</p>
              <h2 className="text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                When you have a question, chances are someone else has too. Here are answers to the things people
                most often ask about our workshops.
              </p>
            </div>
            <FaqAccordion faqs={workshop.faqs} />
          </div>
        </section>

        {/* Closing CTA */}
        <section className="px-6 pb-20">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-5 rounded-[2.5rem] border border-border/60 bg-secondary/50 p-10 text-center md:p-14">
            <h2 className="text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              {workshop.closing.heading}
            </h2>
            <div className="flex max-w-xl flex-col gap-4">
              {workshop.closing.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-pretty leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
            <Button
              render={<Link href="/#contact" />}
              nativeButton={false}
              size="lg"
              className="rounded-full"
            >
              {workshop.ctaLabel}
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
