import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactCta() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-primary px-8 py-16 text-center text-primary-foreground md:px-16">
        <h2 className="mx-auto max-w-2xl text-balance font-serif text-3xl font-medium tracking-tight md:text-4xl">
          Taking the first step is the hardest part
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-primary-foreground/85">
          When you&apos;re ready, we&apos;re here. Reach out today and
          we&apos;ll help you find a time that works for you.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button
            render={<Link href="mailto:hello@willowgrove.example" />}
            nativeButton={false}
            size="lg"
            variant="secondary"
            className="rounded-full px-6"
          >
            Book a session
            <ArrowRight className="size-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-primary-foreground/85">
          <a
            href="tel:0246027111"
            className="flex items-center gap-2 hover:text-primary-foreground"
          >
            <Phone className="size-4" aria-hidden="true" />
            Phone 02 4602 7111
          </a>
          <a
            href="mailto:reception@pictonpsychology.com.au"
            className="flex items-center gap-2 hover:text-primary-foreground"
          >
            <Mail className="size-4" aria-hidden="true" />
            reception@pictonpsychology.com.au
          </a>
        </div>
      </div>
    </section>
  );
}
