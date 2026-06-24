import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ServicePageTemplate } from "@/components/service-page-template"
import { getServiceBySlug, services } from "@/lib/services-data"

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return { title: "Service not found | Picton Psychology" }
  }

  return {
    title: `${service.title} | Picton Psychology`,
    description: service.heroDescription,
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return <ServicePageTemplate service={service} />
}
