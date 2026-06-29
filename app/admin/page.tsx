import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowUpRight,
  FileText,
  FolderTree,
  PenLine,
  Search,
  Users,
} from "lucide-react"

import { isSanityConfigured } from "@/sanity/env"

export const metadata: Metadata = {
  title: "Admin | Picton Psychology",
  description: "Internal content dashboard for Picton Psychology.",
  robots: { index: false, follow: false },
}

const tools = [
  {
    title: "Blog posts",
    description: "Write, edit and publish articles for the blog.",
    href: "/admin/studio/structure/post",
    icon: PenLine,
  },
  {
    title: "Authors",
    description: "Manage the clinicians and writers behind each post.",
    href: "/admin/studio/structure/author",
    icon: Users,
  },
  {
    title: "Categories",
    description: "Organise posts into topics readers can browse.",
    href: "/admin/studio/structure/category",
    icon: FolderTree,
  },
  {
    title: "Vision (queries)",
    description: "Run GROQ queries against your content for debugging.",
    href: "/admin/studio/vision",
    icon: Search,
  },
]

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <header className="flex flex-col gap-4 border-b border-border/60 pb-10">
          <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Picton Psychology
          </span>
          <h1 className="font-serif text-3xl font-medium text-foreground text-balance md:text-4xl">
            Content dashboard
          </h1>
          <p className="max-w-2xl leading-relaxed text-muted-foreground">
            Manage everything that appears on the website&apos;s blog. Editing
            opens the Sanity Studio &mdash; you&apos;ll be asked to sign in with
            your Sanity account, so only invited team members can make changes.
          </p>
        </header>

        {!isSanityConfigured && (
          <div className="mt-8 rounded-2xl border border-accent/60 bg-accent/40 p-5">
            <h2 className="font-serif text-lg font-medium text-accent-foreground">
              Sanity isn&apos;t connected yet
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-accent-foreground/90">
              Add your{" "}
              <code className="rounded bg-card px-1.5 py-0.5 text-xs">
                NEXT_PUBLIC_SANITY_PROJECT_ID
              </code>{" "}
              and{" "}
              <code className="rounded bg-card px-1.5 py-0.5 text-xs">
                NEXT_PUBLIC_SANITY_DATASET
              </code>{" "}
              environment variables to enable editing. The tools below will work
              once they&apos;re set.
            </p>
          </div>
        )}

        <section className="mt-10 grid gap-4 sm:grid-cols-2">
          {tools.map((tool) => {
            const Icon = tool.icon
            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group flex flex-col gap-3 rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/50 hover:bg-secondary/40"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="font-serif text-xl font-medium text-card-foreground">
                  {tool.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {tool.description}
                </p>
              </Link>
            )
          })}
        </section>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/admin/studio"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <FileText className="h-4 w-4" aria-hidden="true" />
            Open full Studio
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary/40"
          >
            View live blog
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  )
}
