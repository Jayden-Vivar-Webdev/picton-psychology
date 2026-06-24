import Image from "next/image"
import Link from "next/link"

import type { PostListItem } from "@/sanity/lib/queries"
import { urlForImage } from "@/sanity/lib/image"

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function BlogCard({ post }: { post: PostListItem }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-card transition-shadow hover:shadow-lg hover:shadow-primary/5">
      <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
        <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
          {post.mainImage?.asset ? (
            <Image
              src={urlForImage(post.mainImage).width(800).height(500).url()}
              alt={post.mainImage.alt || post.title}
              width={800}
              height={500}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="h-full w-full bg-secondary" />
          )}
        </div>

        <div className="flex flex-1 flex-col gap-3 p-6">
          {post.categories && post.categories.length > 0 && (
            <div className="flex flex-wrap gap-2">
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

          <h2 className="font-serif text-xl font-medium leading-snug text-foreground text-balance">
            {post.title}
          </h2>

          {post.excerpt && (
            <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
              {post.excerpt}
            </p>
          )}

          <div className="mt-auto flex items-center gap-2 pt-2 text-xs text-muted-foreground">
            {post.author?.name && <span>{post.author.name}</span>}
            {post.author?.name && <span aria-hidden="true">&middot;</span>}
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
          </div>
        </div>
      </Link>
    </article>
  )
}
