import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { CalendarDays, FileText } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { clinicians, supportTeam } from "@/lib/team-data"

export const metadata: Metadata = {
  title: "Our Team | Picton Psychology",
  description:
    "Meet the warm, experienced clinicians and support team behind Picton Psychology — qualified psychologists, counsellors, and social workers offering compassionate, person-centred care.",
}

export default function OurTeamPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden px-6 pt-16 pb-16 md:pt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-0 size-72 rounded-full bg-primary/10 blur-3xl animate-willow-drift"
          />
          <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              Our team
            </span>
            <h1 className="text-balance font-serif text-4xl font-medium tracking-tight text-foreground md:text-5xl">
              The caring people behind Picton Psychology
            </h1>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              Our clinicians are fully qualified, deeply experienced, and chosen for one thing above
              all: genuine warmth. Whoever you meet with, you&apos;ll be supported with patience,
              respect, and never judgement.
            </p>
          </div>
        </section>

        {/* Clinicians */}
        <section className="px-6 pb-8">
          <div className="mx-auto flex max-w-6xl flex-col gap-16 md:gap-20">
            {clinicians.map((member, index) => (
              <article
                key={member.name}
                className="grid items-start gap-8 md:grid-cols-5 md:gap-12"
              >
                <div
                  className={`md:col-span-2 ${index % 2 === 1 ? "md:order-2" : ""}`}
                >
                  <div className="overflow-hidden rounded-[2rem] border border-border/60 shadow-sm">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.alt}
                      width={520}
                      height={600}
                      loading="lazy"
                      className="aspect-[5/6] w-full object-cover"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4 md:col-span-3">
                  <div className="flex flex-col gap-1">
                    <h2 className="font-serif text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                      {member.name}
                    </h2>
                    <p className="text-sm font-medium uppercase tracking-wide text-primary">
                      {member.role}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 text-pretty leading-relaxed text-muted-foreground">
                    {member.bio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>

                  {(member.referrals || member.availability) && (
                    <div className="mt-2 flex flex-wrap gap-3">
                      {member.referrals && (
                        <div className="flex items-start gap-2 rounded-2xl border border-border/60 bg-secondary/40 px-4 py-3">
                          <FileText
                            className="mt-0.5 size-4 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          <span className="text-sm leading-relaxed text-foreground">
                            <span className="font-medium">Referrals:</span> {member.referrals}
                          </span>
                        </div>
                      )}
                      {member.availability && (
                        <div className="flex items-start gap-2 rounded-2xl border border-border/60 bg-secondary/40 px-4 py-3">
                          <CalendarDays
                            className="mt-0.5 size-4 shrink-0 text-primary"
                            aria-hidden="true"
                          />
                          <span className="text-sm leading-relaxed text-foreground">
                            <span className="font-medium">Available:</span> {member.availability}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Support team */}
        <section className="mt-8 bg-secondary/40 px-6 py-20">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-medium uppercase tracking-wide text-primary">
                Behind the scenes
              </p>
              <h2 className="mt-4 text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
                Our friendly support team
              </h2>
              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                From your very first phone call, our support team is here to make every step feel
                welcoming, organised, and easy.
              </p>
            </div>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {supportTeam.map((member) => (
                <article
                  key={member.name}
                  className="flex flex-col gap-5 rounded-3xl border border-border/60 bg-card p-6 shadow-sm"
                >
                  <div className="overflow-hidden rounded-[1.5rem] border border-border/60">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.alt}
                      width={420}
                      height={420}
                      loading="lazy"
                      className="aspect-square w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-serif text-xl font-medium tracking-tight text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-primary">{member.role}</p>
                  </div>
                  <div className="flex flex-col gap-3 text-sm leading-relaxed text-muted-foreground">
                    {member.bio.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
            <h2 className="text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Find the right person for you
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Not sure who to book with? That&apos;s completely okay. Reach out and our team will
              gently help match you with the clinician best suited to your needs.
            </p>
            <Button
              render={<Link href="/#contact" />}
              nativeButton={false}
              size="lg"
              className="rounded-full"
            >
              Book an intake call
            </Button>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
