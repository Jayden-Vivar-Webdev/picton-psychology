"use client";

import { motion } from "motion/react";
import { Hand, MessagesSquare, Compass, Sprout, Sun } from "lucide-react";

const steps = [
  {
    icon: Hand,
    title: "Reach out",
    description: "Take the first step by contacting us.",
  },
  {
    icon: MessagesSquare,
    title: "First session",
    description:
      "A gentle conversation to get to know you and what brings you here.",
  },
  {
    icon: Compass,
    title: "Understanding",
    description:
      "Together we make sense of things and find a direction that fits.",
  },
  {
    icon: Sprout,
    title: "Growth",
    description:
      "Build new strengths and tools at a pace that feels right for you.",
  },
  {
    icon: Sun,
    title: "Wellbeing",
    description:
      "Move forward feeling more like yourself, supported every step.",
  },
];

export default function ProcessBanner() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-medium text-sm uppercase tracking-wider text-primary">
            How it works
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl text-foreground md:text-4xl">
            Your journey with us
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Healing happens one gentle step at a time. Here&apos;s the path
            we&apos;ll walk together, at a pace that feels right for you.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-4">
          {/* Connecting line (desktop) */}
          <div
            className="absolute top-7 right-[10%] left-[10%] hidden h-px bg-border md:block"
            aria-hidden="true"
          />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={step.title}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
              >
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-background shadow-sm transition-transform ease-out hover:scale-110">
                  <Icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  <span className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary font-medium text-[10px] text-primary-foreground">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mt-5 font-serif text-lg text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[16rem] text-pretty text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
