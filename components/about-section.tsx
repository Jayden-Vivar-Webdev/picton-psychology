import Image from "next/image";
import { Check } from "lucide-react";

const values = [
  "A safe, confidential and judgement-free space",
  "Warm, qualified and genuinely caring therapists",
  "Flexible in-person and online sessions",
  "An approach shaped entirely around you",
];

export function AboutSection() {
  return (
    <section id="about" className="bg-secondary/40 px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-[2.5rem] border border-border/60 shadow-sm">
            <Image
              src="/images/calm-room.webp"
              alt="A warm, welcoming clinic waiting area with sage green walls and soft natural light"
              width={720}
              height={620}
              loading="lazy"
              className="h-full w-full object-cover aspect-square"
            />
          </div>
        </div>

        <div className="order-1 flex flex-col items-start gap-6 lg:order-2">
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            About the clinic
          </p>
          <h2 className="text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            A peaceful place to pause, reflect, and heal
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Picton Psychology was founded on a simple belief: everyone deserves
            to feel understood. We&apos;ve created a calm, welcoming environment
            where you can slow down, feel safe, and work towards lasting change
            at your own pace.
          </p>

          <ul className="grid gap-3 pt-2">
            {values.map((value) => (
              <li key={value} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <span className="leading-relaxed text-foreground">{value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
