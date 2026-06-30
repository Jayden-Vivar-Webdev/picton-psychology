import Image from "next/image";
import Link from "next/link";
const team = [
  {
    name: "Lisa Arnold",
    role: "Clinical Psychologist & Founder",
    focus: "Anxiety, trauma & life transitions",
    image: "/images/team/Liza-Arnold.webp",
    alt: "Portrait of Clinical Psychologist Lisa Arnold, a warm clinical psychologist in a sage green sweater",
  },
  {
    name: "Natalee Zolotas",
    role: "Clinical Psychologist & Director",
    focus: "Relationships, stress & burnout",
    image: "/images/team/Natalee-Zolotas.webp",
    alt: "Portrait of Natalee Zolotas, a calm clinical psychologist.",
  },
  {
    name: "Kristen Mazzitelli",
    role: "Clinical Psychologist",
    focus: "Grief, identity & self-esteem",
    image: "/images/team/Kristen-Mazzitelli.webp",
    alt: "Portrait of Kristen Mazzitelli, a caring clinical psychologist",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="relative overflow-hidden px-6 py-20">
      {/* Soft organic background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 size-72 rounded-full bg-primary/10 blur-3xl animate-willow-drift-slow"
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="flex max-w-2xl flex-col items-start gap-4">
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            Our team
          </p>
          <h2 className="text-balance font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            The caring people behind Picton Psychology
          </h2>
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Every therapist here is fully qualified, deeply experienced, and
            chosen for one thing above all: genuine warmth. You&apos;ll be met
            with patience, never judgement.
          </p>
          <Link
            className="text-primary font-medium transition duration-200 hover:scale-102"
            href="#team"
          >
            View the full team
          </Link>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <article
              key={member.name}
              className={`group flex flex-col gap-5 ${index % 2 === 1 ? "sm:mt-10" : ""}`}
            >
              <div className="relative overflow-hidden rounded-[2rem] border border-border/60 shadow-sm">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.alt}
                  width={520}
                  height={620}
                  loading="lazy"
                  className="h-100 w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="font-serif text-xl font-medium tracking-tight text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-primary">
                  {member.role}
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {member.focus}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
