import Image from "next/image"
import {
  PortableText as BasePortableText,
  type PortableTextComponents,
} from "@portabletext/react"

import { urlForImage } from "@/sanity/lib/image"

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mb-5 leading-relaxed text-foreground/90">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mb-4 mt-10 font-serif text-2xl font-medium text-foreground">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mb-3 mt-8 font-serif text-xl font-medium text-foreground">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 rounded-2xl border-l-4 border-primary bg-secondary/60 px-6 py-4 italic text-foreground/80">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mb-5 list-disc space-y-2 pl-6 text-foreground/90">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mb-5 list-decimal space-y-2 pl-6 text-foreground/90">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        rel="noreferrer noopener"
        className="font-medium text-primary underline underline-offset-4"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null
      return (
        <figure className="my-8 overflow-hidden rounded-3xl">
          <Image
            src={urlForImage(value).width(1200).fit("max").url()}
            alt={value.alt || ""}
            width={1200}
            height={800}
            className="h-auto w-full object-cover"
          />
        </figure>
      )
    },
  },
}

export function PortableText({ value }: { value: any[] }) {
  return <BasePortableText value={value} components={components} />
}
