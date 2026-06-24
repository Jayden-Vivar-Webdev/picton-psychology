"use client"

import { useState, type FormEvent } from "react"
import { Check, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

const enquiryOptions = [
  "Booking a first appointment",
  "Question about therapy",
  "Assessments",
  "Workshops",
  "Something else",
]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-[2rem] border border-border/60 bg-card p-10 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-primary/15 text-primary">
          <Check className="size-7" aria-hidden="true" />
        </span>
        <h3 className="font-serif text-2xl font-medium tracking-tight text-foreground">Thank you for reaching out</h3>
        <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground">
          We&apos;ve received your message and one of our friendly team will be in touch within one business day. There&apos;s
          nothing more you need to do for now.
        </p>
        <Button
          type="button"
          variant="outline"
          className="mt-2 rounded-full"
          onClick={() => setSubmitted(false)}
        >
          Send another message
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-[2rem] border border-border/60 bg-card p-7 md:p-9"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Smith"
            className="rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            Phone <span className="text-muted-foreground">(optional)</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="(000) 000-0000"
            className="rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="jane@example.com"
          className="rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="enquiry" className="text-sm font-medium text-foreground">
          What can we help with?
        </label>
        <select
          id="enquiry"
          name="enquiry"
          defaultValue={enquiryOptions[0]}
          className="rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30"
        >
          {enquiryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a little about what brings you here, or any questions you have. Share only what feels comfortable."
          className="resize-none rounded-2xl border border-border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30"
        />
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        Your enquiry is confidential. If this is an emergency or you need urgent support, please call 000 or Lifeline
        on 13 11 14.
      </p>

      <Button type="submit" size="lg" className="rounded-full self-start">
        Send message
        <Send className="size-4" aria-hidden="true" />
      </Button>
    </form>
  )
}
