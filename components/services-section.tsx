import { Brain, Users, Sprout, Sun, MessageCircleHeart, Moon } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "Anxiety & Stress",
    description:
      "Gentle, evidence-based support to help you quiet a busy mind and feel more grounded.",
  },
  {
    icon: MessageCircleHeart,
    title: "Individual Therapy",
    description:
      "One-on-one sessions in a safe, confidential space tailored entirely to you.",
  },
  {
    icon: Users,
    title: "Couples & Relationships",
    description:
      "Rebuild connection, communication, and trust with compassionate guidance.",
  },
  {
    icon: Moon,
    title: "Sleep & Burnout",
    description:
      "Practical tools to restore rest, recover energy, and protect your wellbeing.",
  },
  {
    icon: Sprout,
    title: "Personal Growth",
    description:
      "Explore your values and build a life that feels meaningful and authentic.",
  },
  {
    icon: Sun,
    title: "Grief & Loss",
    description:
      "Tender, unhurried support as you move through difficult transitions.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-primary">
            How we can help
          </p>
          <h2 className="text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Care that meets you where you are
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Every journey is different. We offer a range of supportive services,
            each delivered with warmth, patience, and respect.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-3xl border border-border/60 bg-card p-7 transition-colors hover:border-primary/40 hover:bg-secondary/40"
            >
              <span className="mb-5 flex size-12 items-center justify-center rounded-2xl bg-primary/12 text-primary">
                <service.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mb-2 font-serif text-xl font-medium text-foreground">
                {service.title}
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
