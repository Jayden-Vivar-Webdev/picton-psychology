import type { Metadata } from "next"

import { BlogCard } from "@/components/blog-card"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { isSanityConfigured } from "@/sanity/env"
import { getPosts } from "@/sanity/lib/queries"

export const metadata: Metadata = {
  title: "Blog | Picton Psychology",
  description:
    "Gentle reflections, practical guidance, and resources on mental wellbeing from the team at Picton Psychology.",
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
              From the journal
            </span>
            <h1 className="mt-5 font-serif text-4xl font-medium tracking-tight text-foreground text-balance md:text-5xl">
              Reflections on wellbeing
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              Gentle insights, practical guidance, and resources to support you
              on your journey, written with care by our team.
            </p>
          </div>

          <div className="mt-14">
            {!isSanityConfigured ? (
              <SetupNotice />
            ) : posts.length === 0 ? (
              <EmptyState />
            ) : (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                  <BlogCard key={post._id} post={post} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

function SetupNotice() {
  return (
    <div className="mx-auto max-w-xl rounded-3xl border border-border/60 bg-card p-8 text-center">
      <h2 className="font-serif text-xl font-medium text-foreground">
        Connect your Sanity project
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        The blog is ready to go. Add your{" "}
        <code className="rounded bg-secondary px-1.5 py-0.5 text-xs">
          NEXT_PUBLIC_SANITY_PROJECT_ID
        </code>{" "}
        and{" "}
        <code className="rounded bg-secondary px-1.5 py-0.5 text-xs">
          NEXT_PUBLIC_SANITY_DATASET
        </code>{" "}
        environment variables, then create content at{" "}
        <code className="rounded bg-secondary px-1.5 py-0.5 text-xs">
          /studio
        </code>
        .
      </p>
    </div>
  )
}

function EmptyState() {
  return (
    <div className="mx-auto max-w-xl rounded-3xl border border-border/60 bg-card p-8 text-center">
      <h2 className="font-serif text-xl font-medium text-foreground">
        No posts yet
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        Head to{" "}
        <code className="rounded bg-secondary px-1.5 py-0.5 text-xs">
          /studio
        </code>{" "}
        to write your first post. It will appear here automatically.
      </p>
    </div>
  )
}
