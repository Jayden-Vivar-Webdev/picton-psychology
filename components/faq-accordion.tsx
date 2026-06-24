"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

type FaqItem = { question: string; answer: string }

export function FaqAccordion({ faqs }: { faqs: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0)

  return (
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
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
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
  )
}
