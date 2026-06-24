import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { WorkshopPageTemplate } from "@/components/workshop-page-template"
import { getWorkshop, workshops } from "@/lib/workshops-data"

export function generateStaticParams() {
  return workshops.map((workshop) => ({ slug: workshop.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const workshop = getWorkshop(slug)

  if (!workshop) {
    return { title: "Workshop not found | Picton Psychology" }
  }

  return {
    title: `${workshop.eyebrow} Workshop | Picton Psychology`,
    description: workshop.intro,
  }
}

export default async function WorkshopPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const workshop = getWorkshop(slug)

  if (!workshop) {
    notFound()
  }

  return <WorkshopPageTemplate workshop={workshop} />
}
