import { groq } from "next-sanity"

import { isSanityConfigured } from "../env"
import { client } from "./client"

export type PostListItem = {
  _id: string
  title: string
  slug: string
  excerpt?: string
  publishedAt: string
  mainImage?: { asset?: { _ref: string }; alt?: string }
  author?: { name?: string; role?: string }
  categories?: { title: string }[]
}

export type PostDetail = PostListItem & {
  body?: any[]
  author?: {
    name?: string
    role?: string
    bio?: string
    image?: { asset?: { _ref: string } }
  }
}

const postFields = groq`
  _id,
  title,
  "slug": slug.current,
  excerpt,
  publishedAt,
  mainImage,
  "author": author->{name, role},
  "categories": categories[]->{title}
`

export async function getPosts(): Promise<PostListItem[]> {
  if (!isSanityConfigured) return []
  return client.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
      ${postFields}
    }`,
    {},
    { next: { revalidate: 60 } },
  )
}

export async function getPostBySlug(slug: string): Promise<PostDetail | null> {
  if (!isSanityConfigured) return null
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      ${postFields},
      body,
      "author": author->{name, role, bio, image}
    }`,
    { slug },
    { next: { revalidate: 60 } },
  )
}

export async function getPostSlugs(): Promise<string[]> {
  if (!isSanityConfigured) return []
  const slugs = await client.fetch<string[]>(
    groq`*[_type == "post" && defined(slug.current)].slug.current`,
  )
  return slugs
}
