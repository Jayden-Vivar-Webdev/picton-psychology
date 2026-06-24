import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

import { PortableText } from "@/components/portable-text"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { urlForImage } from "@/sanity/lib/image"
import { getPostBySlug, getPostSlugs } from "@/sanity/lib/queries"

export async function generateStaticParams() {
  const slugs = await getPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: "Post not found | Picton Psychology" }
  return {
    title: `${post.title} | Picton Psychology`,
    description: post.excerpt,
  }
}

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) notFound()

  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to blog
          </Link>

          <header className="mt-8">
            {post.categories && post.categories.length > 0 && (
              <div className="mb-4 flex flex-wrap gap-2">
                {post.categories.map((cat) => (
                  <span
                    key={cat.title}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {cat.title}
                  </span>
                ))}
              </div>
            )}

            <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-foreground text-balance md:text-5xl">
              {post.title}
            </h1>

            <div className="mt-5 flex items-center gap-3 text-sm text-muted-foreground">
              {post.author?.name && (
                <span className="font-medium text-foreground">
                  {post.author.name}
                </span>
              )}
              {post.author?.role && <span>{post.author.role}</span>}
              <span aria-hidden="true">&middot;</span>
              <time dateTime={post.publishedAt}>
                {formatDate(post.publishedAt)}
              </time>
            </div>
          </header>

          {post.mainImage?.asset && (
            <div className="mt-8 overflow-hidden rounded-3xl">
              <Image
                src={urlForImage(post.mainImage).width(1200).height(700).url()}
                alt={post.mainImage.alt || post.title}
                width={1200}
                height={700}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          )}

          <div className="mt-10">
            {post.body && <PortableText value={post.body} />}
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
