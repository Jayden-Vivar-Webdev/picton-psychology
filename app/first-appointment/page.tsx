import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, ClipboardList, Clock, Coffee, FileText, Heart, MessageCircle, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { FaqAccordion } from "@/components/faq-accordion"

export const metadata: Metadata = {
  title: "Your first appointment | Picton Psychology",
  description:
    "Everything you need to know before your first session at Picton Psychology — what to expect, what to bring, and how we help you feel at ease from the moment you arrive.",
}

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Before you arrive",
    description:
      "Once you book, we'll send a short, simple intake form so we can get to know a little about you. There's no need to prepare anything — just come as you are.",
  },
  {
    icon: Coffee,
    number: "02",
    title: "When you arrive",
    description:
      "Settle into our calm waiting space with a cup of tea. Your therapist will greet you warmly and walk you through what the session will look like.",
  },
  {
    icon: MessageCircle,
    number: "03",
    title: "During your session",
    description:
      "This first conversation is gentle and unhurried. We'll listen, get to know what brings you here, and explore your goals — only ever at your pace.",
  },
  {
    icon: Calendar,
    number: "04",
    title: "After your session",
    description:
      "Together we'll shape a plan that feels right for you and, if you'd like, book your next session. There's never any pressure to continue.",
  },
]

const bring = [
  {
    icon: ClipboardList,
    title: "Your intake form",
    description: "Completed beforehand if possible, but we can always help you finish it when you arrive.",
  },
  {
    icon: FileText,
    title: "Any referral or plan",
    description: "If you have a GP referral or Mental Health Treatment Plan, bring it along — though it's not essential.",
  },
  {
    icon: Heart,
    title: "An open mind",
    description: "There's nothing you need to rehearse. Just bring yourself and whatever feels comfortable to share.",
  },
]

const reassurances = [
  "You're in control — share only what you feel ready to.",
  "There are no right or wrong answers, ever.",
  "It's completely normal to feel nervous, and that's okay.",
  "Sessions are private, confidential, and judgement-free.",
]

const faqs = [
  {
    question: "How long does the first appointment go for?",
    answer:
      "Your first session usually runs for around 50 to 60 minutes. This gives us plenty of time to get to know you, understand what brings you in, and talk through how we can best support you — without ever feeling rushed.",
  },
  {
    question: "Do I need a referral to book?",
    answer:
      "No referral is needed to see us. However, if you'd like to access Medicare rebates, you'll need a Mental Health Treatment Plan from your GP. If you're unsure, our friendly team are happy to talk you through your options.",
  },
  {
    question: "What if I feel nervous or don't know what to say?",
    answer:
      "That's completely normal, and you're not alone. Many people feel unsure before their first session. There's no pressure to have the right words or to share anything you're not ready for. Your therapist will gently guide the conversation and meet you exactly where you are.",
  },
  {
    question: "Can I have my first session online?",
    answer:
      "Yes. We offer both in-person and secure online sessions, so you can choose whatever feels most comfortable for you. Online sessions are just as warm, private, and supportive as meeting in the clinic.",
  },
  {
    question: "What happens after the first appointment?",
    answer:
      "There's no obligation to continue. If it feels right for you, we'll work together to shape a plan and book your next session at a pace that suits you. The choice is always entirely yours.",
  },
]

export default function FirstAppointmentPage() {
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
                Your first appointment
              </span>
              <h1 className="text-balance font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl">
                What to expect from your first visit
              </h1>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                Walking into a first session can feel daunting — and that&apos;s
                completely understandable. Here&apos;s a gentle walk-through of
                exactly what happens, so you can arrive feeling a little more at
                ease.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button
                  render={<Link href="/#contact" />}
                  nativeButton={false}
                  size="lg"
                  className="rounded-full"
                >
                  Book your first session
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
                <Button
                  render={<Link href="/about" />}
                  nativeButton={false}
                  size="lg"
                  variant="outline"
                  className="rounded-full"
                >
                  About the clinic
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-[2.5rem] border border-border/60 shadow-sm">
                <Image
                  src="/images/first-appointment.png"
                  alt="A warm, welcoming clinic waiting area with sage green walls and soft natural light"
                  width={760}
                  height={620}
                  priority
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="bg-secondary/40 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-wide text-primary">Step by step</p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                How your first appointment unfolds
              </h2>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {steps.map((step) => (
                <article
                  key={step.number}
                  className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-card p-7 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                      <step.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-serif text-3xl font-medium text-primary/40">{step.number}</span>
                  </div>
                  <h3 className="font-serif text-xl font-medium tracking-tight text-foreground">{step.title}</h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* What to bring */}
        <section className="px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-wide text-primary">A little preparation</p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                What to bring along
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {bring.map((item) => (
                <article key={item.title} className="flex flex-col gap-4 rounded-3xl border border-border/60 bg-card p-7">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <item.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-serif text-xl font-medium tracking-tight text-foreground">{item.title}</h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reassurance */}
        <section className="bg-secondary/40 px-6 py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
            <div className="flex flex-col items-start gap-6">
              <p className="text-sm font-medium uppercase tracking-wide text-primary">You&apos;re in safe hands</p>
              <h2 className="text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                It&apos;s okay to feel however you feel
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                There&apos;s no such thing as being &quot;ready&quot; or having it all figured out. Your first
                session is simply a gentle starting point, and we&apos;ll take every step at a pace that feels
                comfortable for you.
              </p>
              <ul className="grid gap-3 pt-2">
                {reassurances.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                      <Heart className="size-3.5" aria-hidden="true" />
                    </span>
                    <span className="leading-relaxed text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4 rounded-[2.5rem] border border-border/60 bg-card p-8 md:p-10">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Clock className="size-5" aria-hidden="true" />
              </span>
              <h3 className="text-balance font-serif text-2xl font-medium tracking-tight text-foreground">
                Good to know
              </h3>
              <dl className="grid gap-4">
                <div>
                  <dt className="font-medium text-foreground">Session length</dt>
                  <dd className="text-pretty leading-relaxed text-muted-foreground">Around 50–60 minutes for your first visit.</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">In-person or online</dt>
                  <dd className="text-pretty leading-relaxed text-muted-foreground">Choose whichever feels most comfortable for you.</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Medicare rebates</dt>
                  <dd className="text-pretty leading-relaxed text-muted-foreground">Available with a Mental Health Treatment Plan from your GP.</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <p className="text-sm font-medium uppercase tracking-wide text-primary">Common questions</p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                Before your first visit
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                Still wondering about something? Our friendly team are always happy to answer any questions before
                you come in.
              </p>
            </div>
            <FaqAccordion faqs={faqs} />
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 text-center text-primary-foreground md:px-16">
            <h2 className="mx-auto max-w-2xl text-balance font-serif text-3xl font-medium tracking-tight md:text-4xl">
              Ready to take the first step?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/85">
              When you feel ready, we&apos;re here — gently, patiently, and without judgement. Reach out and
              we&apos;ll help you find a time that works for you.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                render={<Link href="/#contact" />}
                nativeButton={false}
                size="lg"
                variant="secondary"
                className="rounded-full px-6"
              >
                Book your first session
                <ArrowRight className="size-4" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
