import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { AssessmentPageTemplate } from "@/components/assessment-page-template"
import { getAssessmentBySlug, assessments } from "@/lib/assessments-data"

export function generateStaticParams() {
  return assessments.map((assessment) => ({ slug: assessment.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const assessment = getAssessmentBySlug(slug)

  if (!assessment) {
    return { title: "Assessment not found | Picton Psychology" }
  }

  return {
    title: `${assessment.title} | Picton Psychology`,
    description: assessment.heroDescription,
  }
}

export default async function AssessmentPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const assessment = getAssessmentBySlug(slug)

  if (!assessment) {
    notFound()
  }

  return <AssessmentPageTemplate assessment={assessment} />
}
