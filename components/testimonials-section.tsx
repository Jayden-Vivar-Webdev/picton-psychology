import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Even the most restless mind can find stillness in small, gentle moments.",
    name: "Peace",
    detail: "Anxiety & stress support",
    featured: true,
  },
  {
    quote: "This too is temporary. Breathe, and let it pass through you.",
    name: "Reflective",
    detail: "Burnout & sleep",
  },
  {
    quote:
      "What happened to you may have shaped your story, but it does not define your worth or where your story can go from here.",
    name: "Recovery",
    detail: "Trauma",
  },
];

const affirmations = [
  "You are allowed to rest",
  "Healing is not linear",
  "Your feelings are valid",
  "Small steps still count",
  "You are not alone",
  "It is okay to ask for help",
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative overflow-hidden px-6 py-20">
      {/* Abstract organic backdrop */}

      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="animate-willow-drift-slow absolute -right-24 top-10 size-80 rounded-full bg-secondary/50 blur-3xl" />
        <div className="animate-willow-drift absolute -left-20 bottom-0 size-72 rounded-full bg-accent/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-primary">
            Reflective Space
          </p>
          <h2 className="text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Where change is possible
          </h2>
        </div>

        {/* Asymmetric editorial grid */}
        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className={[
                "relative flex flex-col rounded-[2rem] border border-border/60 bg-card p-8",
                t.featured
                  ? "lg:col-span-2 lg:row-span-1 lg:rounded-[2.5rem] lg:bg-secondary/50 lg:p-12"
                  : "",
              ].join(" ")}
            >
              <Quote
                className={[
                  "text-primary/30",
                  t.featured ? "size-12" : "size-8",
                ].join(" ")}
                aria-hidden="true"
              />
              <blockquote
                className={[
                  "mt-4 text-pretty font-serif font-medium leading-relaxed text-foreground",
                  t.featured ? "text-2xl md:text-3xl" : "text-lg",
                ].join(" ")}
              >
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-primary/12 font-serif text-sm font-medium text-primary">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-medium text-foreground">
                    {t.name}
                  </span>
                  <span className="block text-sm text-muted-foreground">
                    {t.detail}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>

      {/* Drifting affirmations marquee */}
      <div
        className="relative mt-16 flex overflow-hidden"
        aria-label="Calming affirmations"
      >
        <div className="animate-willow-marquee flex shrink-0 items-center gap-6 pr-6">
          {[...affirmations, ...affirmations].map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="flex items-center gap-6 whitespace-nowrap font-serif text-2xl font-medium text-foreground/30 md:text-3xl"
            >
              {word}
              <span
                className="size-2 rounded-full bg-primary/40"
                aria-hidden="true"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
