import Link from "next/link";
import { Leaf } from "lucide-react";

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Approach", href: "/#approach" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-full bg-primary/15 text-primary">
            <Leaf className="size-5" aria-hidden="true" />
          </span>
          <span className="font-serif text-lg font-medium tracking-tight text-foreground">
            Picton Psychology
          </span>
        </Link>

        {/**ADD BACK AFTER VIEWING */}
        {/* <nav className="flex flex-wrap items-center justify-center gap-1" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav> */}

        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Picton Psychology
        </p>
      </div>
    </footer>
  );
}
