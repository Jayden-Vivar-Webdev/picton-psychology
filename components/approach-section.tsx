const steps = [
  {
    number: "01",
    title: "Reach out",
    description:
      "Get in touch and share a little about what brings you here. There's no pressure, just a friendly first conversation.",
  },
  {
    number: "02",
    title: "Your first session",
    description:
      "We'll get to know you and gently explore your goals, building a plan that feels right for you.",
  },
  {
    number: "03",
    title: "Ongoing support",
    description:
      "Together we work towards lasting change, at a pace that always honours your comfort and wellbeing.",
  },
]

export function ApproachSection() {
  return (
    <section id="approach" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-primary">
            Our approach
          </p>
          <h2 className="text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Gentle steps, taken together
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-border/60 bg-card p-8"
            >
              <span className="font-serif text-4xl font-medium text-primary/60">
                {step.number}
              </span>
              <h3 className="mt-4 mb-2 font-serif text-xl font-medium text-foreground">
                {step.title}
              </h3>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
