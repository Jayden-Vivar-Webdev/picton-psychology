"use client";

import { useState } from "react";
import Link from "next/link";
import { Leaf, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type NavLink = { label: string; href: string; description?: string };
type MenuGroup = { label: string; href: string; links: NavLink[] };

const menuGroups: MenuGroup[] = [
  {
    label: "About",
    href: "/about",
    links: [
      {
        label: "About the clinic",
        href: "/about",
        description: "Our story & values",
      },
      {
        label: "Our team",
        href: "/our-team",
        description: "Meet the therapists",
      },
    ],
  },
  {
    label: "Services",
    href: "/#services",
    links: [
      {
        label: "Adult Therapy",
        href: "/services/adult-therapy",
        description: "Support for individuals",
      },
      {
        label: "Adolescent Therapy",
        href: "/services/adolescent-therapy",
        description: "Care for younger clients",
      },
      {
        label: "Relationship Counselling",
        href: "/services/relationship-counselling",
        description: "Couples & families",
      },
      {
        label: "Fees & Rebates",
        href: "/#services",
        description: "Pricing & Medicare info",
      },
      { label: "FAQs", href: "/#faq", description: "Common questions" },
    ],
  },
  {
    label: "Assessments",
    href: "/#services",
    links: [
      {
        label: "Assessment Process",
        href: "/#services",
        description: "How it works",
      },
      {
        label: "Autism Assessment",
        href: "/assessments/autism-assessment",
        description: "Autism spectrum evaluation",
      },
      {
        label: "Specific Learning Disorders",
        href: "/#services",
        description: "Dyslexia, dyscalculia & more",
      },
      {
        label: "Intellectual Disability Assessment",
        href: "/#services",
        description: "Functioning evaluation",
      },
      {
        label: "Cognitive Assessment",
        href: "/#services",
        description: "Memory & thinking skills",
      },
      {
        label: "ADHD Assessment",
        href: "/#services",
        description: "Attention & focus evaluation",
      },
      {
        label: "Educational Assessment",
        href: "/#services",
        description: "Learning & school support",
      },
      {
        label: "Disability Support Pension Assessment",
        href: "/#services",
        description: "DSP eligibility reports",
      },
    ],
  },
  {
    label: "Workshops",
    href: "/#services",
    links: [
      {
        label: "Understanding Trauma",
        href: "/workshops/understanding-trauma",
        description: "Recognise & recover",
      },
      {
        label: "Mood & Anxiety",
        href: "/workshops/mood-and-anxiety",
        description: "Tools for calm",
      },
      {
        label: "Burnout to Balance",
        href: "/workshops/burnout-to-balance",
        description: "Restore your energy",
      },
    ],
  },
  {
    label: "Resources",
    href: "/blog",
    links: [
      { label: "Blog", href: "/blog", description: "Articles & insights" },
      {
        label: "First Appointment",
        href: "/first-appointment",
        description: "What to expect",
      },
    ],
  },
];

const navLinks: NavLink[] = [
  { label: "Approach", href: "/#approach" },
  { label: "Contact", href: "/contact" },
];

function DesktopMenuGroup({ group }: { group: MenuGroup }) {
  return (
    <div className="group relative">
      <Link
        href={group.href}
        className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground group-hover:bg-secondary group-hover:text-foreground group-focus-within:bg-secondary group-focus-within:text-foreground"
        aria-haspopup="true"
      >
        {group.label}
        <ChevronDown
          className="size-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
          aria-hidden="true"
        />
      </Link>
      <div className="invisible absolute left-0 top-full z-50 w-72 translate-y-1 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <div className="overflow-hidden rounded-2xl border border-border/60 bg-background/95 p-2 shadow-lg backdrop-blur-md">
          {group.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex flex-col gap-0.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-secondary"
            >
              <span className="text-sm font-medium text-foreground">
                {link.label}
              </span>
              {link.description ? (
                <span className="text-xs text-muted-foreground">
                  {link.description}
                </span>
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileMenuGroup({
  group,
  onNavigate,
}: {
  group: MenuGroup;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border/50 py-1">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-medium text-foreground transition-colors hover:bg-secondary"
      >
        {group.label}
        <ChevronDown
          className={`size-5 text-muted-foreground transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>
      {open ? (
        <div className="flex flex-col pb-2 pl-3">
          {group.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={onNavigate}
              className="flex flex-col gap-0.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-secondary"
            >
              <span className="text-sm font-medium text-foreground">
                {link.label}
              </span>
              {link.description ? (
                <span className="text-xs text-muted-foreground">
                  {link.description}
                </span>
              ) : null}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-28 max-w-6xl items-end justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="flex h-full items-center gap-2.5"
          onClick={closeMobile}
        >
          <img
            className="h-full w-full object-contain"
            src="/images/logo-transparent.webp"
            alt="Picton Psychology"
          />
        </Link>

        <nav
          className="hidden items-center gap-1 " //xl:flex - Add back when finished showing.
          aria-label="Main navigation"
        >
          {menuGroups.map((group) => (
            <DesktopMenuGroup key={group.label} group={group} />
          ))}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            className="hidden rounded-full px-5" //xl:inline-flex - Add back
          >
            Book a session
          </Button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            className="flex size-10 items-center justify-center rounded-full text-foreground transition-colors hover:bg-secondary xl:hidden"
          >
            {mobileOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-menu"
          className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-border/60 bg-background/95 backdrop-blur-md hidden" //xl:hidden - replace with hidden
        >
          <nav
            className="mx-auto flex max-w-6xl flex-col px-6 py-4"
            aria-label="Mobile navigation"
          >
            {menuGroups.map((group) => (
              <MobileMenuGroup
                key={group.label}
                group={group}
                onNavigate={closeMobile}
              />
            ))}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="border-b border-border/50 px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              onClick={closeMobile}
              className="mt-4 w-full rounded-full"
            >
              Book a session
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
