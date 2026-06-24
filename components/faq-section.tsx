"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "How do I know if therapy is right for me?",
    answer:
      "There's no problem too big or too small to bring to therapy. If something is weighing on you, that's reason enough. Our first conversation is a relaxed space to explore whether we feel like the right fit for you.",
  },
  {
    question: "How long are the sessions, and how often?",
    answer:
      "Sessions are typically 50 minutes. Many people start weekly and adjust over time. We always move at a pace that honours your comfort and your goals.",
  },
  {
    question: "Is everything I share kept confidential?",
    answer:
      "Yes. What you share stays between us, within the standard ethical and legal boundaries we'll explain clearly in your first session. Your privacy is treated with the utmost care.",
  },
  {
    question: "Do you offer online or in-person sessions?",
    answer:
      "Both. You're welcome to visit us in our calm, comfortable space, or meet from wherever you feel most at ease over a secure video call.",
  },
  {
    question: "What if I'm nervous about my first session?",
    answer:
      "That's completely normal, and you don't need to prepare anything. There's no script to follow. We'll simply begin a gentle conversation, and you can share only as much as feels right.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative overflow-hidden px-6 py-20">
      {/* Soft organic accent */}
      <div
        aria-hidden="true"
        className="animate-willow-drift pointer-events-none absolute -right-16 top-1/4 size-72 rounded-full bg-secondary/40 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Editorial heading column */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <p className="mb-3 text-sm font-medium uppercase tracking-wide text-primary">
            Good to know
          </p>
          <h2 className="text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Questions, gently answered
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Taking the first step can bring up a lot of questions. Here are a few
            of the things people often wonder about.
          </p>
        </div>

        {/* Accordion column */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={faq.question}
                className={[
                  "rounded-3xl border transition-colors",
                  isOpen
                    ? "border-primary/30 bg-secondary/40"
                    : "border-border/60 bg-card hover:border-primary/30",
                ].join(" ")}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-7 py-6 text-left"
                >
                  <span className="font-serif text-lg font-medium text-foreground">
                    {faq.question}
                  </span>
                  <span
                    className={[
                      "flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary transition-transform duration-300",
                      isOpen ? "rotate-45" : "",
                    ].join(" ")}
                  >
                    <Plus className="size-5" aria-hidden="true" />
                  </span>
                </button>
                <div
                  className={[
                    "grid transition-all duration-300 ease-in-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-7 text-pretty leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
