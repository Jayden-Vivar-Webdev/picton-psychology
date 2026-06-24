import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Clock, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact us | Picton Psychology",
  description:
    "Get in touch with Picton Psychology. Reach out to book a first appointment, ask a question, or find our clinic — we're here when you're ready.",
}

const details = [
  {
    icon: Phone,
    title: "Call us",
    lines: ["(000) 000-0000"],
    href: "tel:+10000000000",
    note: "Mon–Fri, during clinic hours",
  },
  {
    icon: Mail,
    title: "Email us",
    lines: ["hello@willowgrove.example"],
    href: "mailto:hello@willowgrove.example",
    note: "We reply within one business day",
  },
  {
    icon: MapPin,
    title: "Visit us",
    lines: ["24 Willow Lane", "Riverside, NSW 2000"],
    href: "https://maps.google.com",
    note: "Free parking on site",
  },
]

const hours = [
  { day: "Monday – Thursday", time: "8:30am – 6:00pm" },
  { day: "Friday", time: "8:30am – 5:00pm" },
  { day: "Saturday", time: "9:00am – 1:00pm" },
  { day: "Sunday", time: "Closed" },
]

export default function ContactPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pt-16 pb-12 md:pt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 top-0 size-72 rounded-full bg-primary/10 blur-3xl animate-willow-drift"
          />
          <div className="relative mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              Contact us
            </span>
            <h1 className="mt-6 text-balance font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl">
              We&apos;re here when you&apos;re ready
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Whether you&apos;re ready to book your first session or simply have a question, reaching out is the first
              gentle step. Send us a message and our warm, friendly team will be in touch.
            </p>
          </div>
        </section>

        {/* Details */}
        <section className="px-6 pb-4">
          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
            {details.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group flex flex-col gap-3 rounded-3xl border border-border/60 bg-card p-7 transition-colors hover:border-primary/40"
              >
                <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <item.icon className="size-5" aria-hidden="true" />
                </span>
                <h2 className="font-serif text-xl font-medium tracking-tight text-foreground">{item.title}</h2>
                <div className="flex flex-col">
                  {item.lines.map((line) => (
                    <span key={line} className="leading-relaxed text-foreground group-hover:text-primary">
                      {line}
                    </span>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">{item.note}</span>
              </a>
            ))}
          </div>
        </section>

        {/* Form + aside */}
        <section className="px-6 py-16">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-sm font-medium uppercase tracking-wide text-primary">Send a message</p>
                <h2 className="mt-3 text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                  Drop us a line
                </h2>
              </div>
              <ContactForm />
            </div>

            <div className="flex flex-col gap-6">
              <div className="overflow-hidden rounded-[2rem] border border-border/60 shadow-sm">
                <Image
                  src="/images/contact-clinic.png"
                  alt="The welcoming entrance and garden of Picton Psychology clinic"
                  width={620}
                  height={420}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-4 rounded-[2rem] border border-border/60 bg-card p-7">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <Clock className="size-5" aria-hidden="true" />
                </span>
                <h3 className="font-serif text-xl font-medium tracking-tight text-foreground">Clinic hours</h3>
                <dl className="flex flex-col gap-3">
                  {hours.map((row) => (
                    <div key={row.day} className="flex items-center justify-between gap-4 border-b border-border/50 pb-3 last:border-0 last:pb-0">
                      <dt className="text-muted-foreground">{row.day}</dt>
                      <dd className="font-medium text-foreground">{row.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 text-center text-primary-foreground md:px-16">
            <h2 className="mx-auto max-w-2xl text-balance font-serif text-3xl font-medium tracking-tight md:text-4xl">
              Not sure where to start?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/85">
              If you&apos;re feeling unsure, that&apos;s completely okay. Learn what to expect from your very first
              visit, and arrive feeling a little more at ease.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                render={<Link href="/first-appointment" />}
                nativeButton={false}
                size="lg"
                variant="secondary"
                className="rounded-full px-6"
              >
                Your first appointment
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
