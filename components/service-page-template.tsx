import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Brain,
  Check,
  ClipboardList,
  FileText,
  Heart,
  Leaf,
  MessageCircleHeart,
  Search,
  Shield,
  Sparkles,
  Sprout,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { FaqAccordion } from "@/components/faq-accordion";
import { Reveal, RevealItem } from "@/components/reveal";
import type { ServiceContent } from "@/lib/services-data";
import { getRelatedServices } from "@/lib/services-data";
import BackgroundImage from "./background-image";

const approachIcons: Record<string, LucideIcon> = {
  brain: Brain,
  sprout: Sprout,
  heart: Heart,
  shield: Shield,
  sparkles: Sparkles,
  leaf: Leaf,
  "message-circle": MessageCircleHeart,
  users: Users,
  clipboard: ClipboardList,
  search: Search,
  "file-text": FileText,
};

export function ServicePageTemplate({ service }: { service: ServiceContent }) {
  const related = getRelatedServices(service.slug);

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero + Quick Facts */}
        <section className="relative overflow-hidden px-6 pt-16 pb-20 md:pt-20">
          <BackgroundImage
            imagesrc="/images/nature-bridge-background.jpg"
            imagealt="Peaceful natural landscape"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-0 size-72 rounded-full bg-primary/10 blur-3xl animate-willow-drift"
          />

          <div className="relative mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-[1.4fr_1fr]">
            <Reveal stagger className="flex flex-col items-start gap-6">
              <RevealItem>
                <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                  {service.eyebrow}
                </span>
              </RevealItem>
              <RevealItem>
                <h1 className="text-balance font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl">
                  {service.title}
                </h1>
              </RevealItem>
              <RevealItem>
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                  {service.heroDescription}
                </p>
              </RevealItem>

              <RevealItem className="w-full">
                <div className="mt-2 aspect-3/2 w-full overflow-hidden rounded-[2.5rem] border border-border/60 shadow-sm">
                  <Image
                    src={service.heroImage || "/placeholder.svg"}
                    alt={service.heroImageAlt}
                    width={760}
                    height={620}
                    priority
                    className="h-full w-full object-cover"
                  />
                </div>
              </RevealItem>
            </Reveal>

            {/* Quick Facts card */}
            <Reveal
              direction="left"
              delay={0.2}
              className="w-full lg:sticky lg:top-32"
            >
              <aside className="flex w-full flex-col gap-5 rounded-[2rem] border border-border/60 bg-card p-7 shadow-sm md:p-9">
                <span className="inline-block self-start rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                  Quick facts
                </span>

                <dl className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
                  {service.quickFacts.map((fact) => (
                    <div key={fact.label} className="flex flex-col gap-1">
                      <dt className="text-sm text-muted-foreground">
                        {fact.label}
                      </dt>
                      <dd className="font-serif text-lg font-medium text-foreground">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="my-1 h-px w-full bg-border/60" />

                <div className="flex flex-col gap-3">
                  <Button
                    render={<Link href="/contact" />}
                    nativeButton={false}
                    size="lg"
                    className="w-full rounded-full"
                  >
                    Book an appointment
                  </Button>
                  <Button
                    render={<Link href="/contact" />}
                    nativeButton={false}
                    size="lg"
                    variant="outline"
                    className="w-full rounded-full"
                  >
                    Ask a question
                  </Button>
                </div>
              </aside>
            </Reveal>
          </div>
        </section>

        {/* Overview */}
        <section className="bg-secondary/40 px-6 py-20">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              {service.overview.heading}
            </h2>
            <div className="mt-6 flex flex-col gap-4">
              {service.overview.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-pretty leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Is this right for you? */}
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal direction="right" className="lg:sticky lg:top-32">
              <p className="mb-3 text-sm font-medium uppercase tracking-wide text-primary">
                Is this right for you?
              </p>
              <h2 className="text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                {service.rightForYou.heading}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {service.rightForYou.intro}
              </p>
            </Reveal>
            <Reveal stagger as="ul" className="grid gap-4 sm:grid-cols-2">
              {service.rightForYou.items.map((item) => (
                <RevealItem
                  key={item}
                  as="li"
                  className="flex items-start gap-3 rounded-2xl border border-border/60 bg-card p-5"
                >
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="size-4" aria-hidden="true" />
                  </span>
                  <span className="text-pretty leading-relaxed text-foreground">
                    {item}
                  </span>
                </RevealItem>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Focus points */}
        <section className="bg-secondary/40 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-wide text-primary">
                Focus points
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                {service.focusPoints.heading}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {service.focusPoints.intro}
              </p>
            </Reveal>
            <Reveal
              stagger
              className="mx-auto mt-12 grid max-w-4xl gap-x-10 gap-y-8 sm:grid-cols-2"
            >
              {service.focusPoints.items.map((item, i) => (
                <RevealItem key={item.title} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 font-serif text-sm font-medium text-primary">
                    {i + 1}
                  </span>
                  <div className="flex flex-col gap-1.5 border-b border-border/60 pb-6">
                    <h3 className="font-serif text-lg font-medium text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-pretty leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </RevealItem>
              ))}
            </Reveal>
          </div>
        </section>

        {/* Approaches we draw on */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-wide text-primary">
                How we work
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                {service.approaches.heading}
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {service.approaches.intro}
              </p>
            </Reveal>
            <Reveal stagger className="mt-12 grid gap-5 md:grid-cols-3">
              {service.approaches.items.map((item) => {
                const Icon = approachIcons[item.icon] ?? Sprout;
                return (
                  <RevealItem
                    key={item.title}
                    className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-card p-7 transition-colors hover:border-primary/40 hover:bg-secondary/40"
                  >
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                      <Icon className="size-6" aria-hidden="true" />
                    </span>
                    <h3 className="font-serif text-xl font-medium text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-pretty leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </RevealItem>
                );
              })}
            </Reveal>
          </div>
        </section>

        {/* Fees & rebates */}
        <section className="bg-secondary/40 px-6 py-20">
          <Reveal className="mx-auto max-w-6xl">
            <div className="grid gap-10 rounded-[2.5rem] border border-border/60 bg-card p-8 md:p-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="flex flex-col items-start gap-5">
                <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
                  Fees & rebates
                </span>
                <h2 className="text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                  {service.fees.heading}
                </h2>
                <div className="flex flex-col gap-4">
                  {service.fees.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-pretty leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                <Button
                  render={<Link href="/contact" />}
                  nativeButton={false}
                  size="lg"
                  className="mt-2 rounded-full"
                >
                  Talk to us about fees
                </Button>
              </div>

              <Reveal stagger as="ul" className="grid grid-cols-2 gap-4">
                {service.fees.items.map((item) => (
                  <RevealItem
                    key={item.label}
                    as="li"
                    className="flex flex-col gap-2 rounded-2xl border border-border/60 bg-secondary/40 p-5"
                  >
                    <span className="flex size-9 items-center justify-center rounded-full bg-primary/12 font-serif text-base font-medium text-primary">
                      $
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {item.label}
                    </span>
                    <span className="font-serif text-lg font-medium text-foreground">
                      {item.value}
                    </span>
                  </RevealItem>
                ))}
              </Reveal>
            </div>
          </Reveal>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal direction="right" className="lg:sticky lg:top-32 lg:self-start">
              <p className="mb-3 text-sm font-medium uppercase tracking-wide text-primary">
                Good to know
              </p>
              <h2 className="text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                Questions, gently answered
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                A few of the things people often wonder about before getting
                started.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <FaqAccordion faqs={service.faqs} />
            </Reveal>
          </div>
        </section>

        {/* Related services */}
        {related.length > 0 ? (
          <section className="bg-secondary/40 px-6 py-20">
            <div className="mx-auto max-w-6xl">
              <Reveal className="mx-auto mb-12 max-w-2xl text-center">
                <p className="text-sm font-medium uppercase tracking-wide text-primary">
                  Explore more
                </p>
                <h2 className="mt-4 text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                  Related services
                </h2>
              </Reveal>
              <Reveal stagger className="grid gap-5 md:grid-cols-3">
                {related.map((item) => (
                  <RevealItem key={item.slug}>
                    <Link
                      href={`/services/${item.slug}`}
                      className="group flex items-center justify-between gap-4 rounded-3xl border border-border/60 bg-card p-7 transition-colors hover:border-primary/40 hover:bg-secondary/40"
                    >
                      <div className="flex flex-col gap-1">
                        <span className="text-xs font-medium uppercase tracking-wide text-primary">
                          {item.eyebrow}
                        </span>
                        <span className="font-serif text-xl font-medium text-foreground">
                          {item.title}
                        </span>
                      </div>
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary transition-transform group-hover:translate-x-0.5">
                        <ArrowRight className="size-5" aria-hidden="true" />
                      </span>
                    </Link>
                  </RevealItem>
                ))}
              </Reveal>
            </div>
          </section>
        ) : null}

        {/* Closing CTA */}
        <section className="px-6 py-20">
          <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-5 rounded-[2.5rem] border border-border/60 bg-secondary/50 p-10 text-center md:p-14">
            <h2 className="text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              {service.cta.heading}
            </h2>
            <p className="max-w-xl text-pretty leading-relaxed text-muted-foreground">
              {service.cta.description}
            </p>
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              size="lg"
              className="rounded-full"
            >
              Book an appointment
            </Button>
          </Reveal>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
