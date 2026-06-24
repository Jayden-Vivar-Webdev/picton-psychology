export type AssessmentContent = {
  slug: string
  eyebrow: string
  title: string
  heroDescription: string
  heroImage: string
  heroImageAlt: string
  /** Quick-reference facts shown in a strip beneath the hero. */
  keyDetails: {
    ages: string
    duration: string
    format: string
    turnaround: string
  }
  overview: {
    heading: string
    paragraphs: string[]
  }
  /** The areas or domains explored during the assessment. */
  areas: {
    heading: string
    intro: string
    items: { title: string; description: string }[]
  }
  /** The step-by-step assessment process. */
  process: {
    heading: string
    intro: string
    items: { title: string; description: string }[]
  }
  /** What the client receives at the end (report, feedback, recommendations). */
  outcomes: {
    heading: string
    intro: string
    items: string[]
  }
  faqs: { question: string; answer: string }[]
  cta: {
    heading: string
    description: string
  }
}

export const assessments: AssessmentContent[] = [
  {
    slug: "autism-assessment",
    eyebrow: "Assessment services",
    title: "Autism Assessment",
    heroDescription:
      "A thorough, compassionate evaluation to understand whether autism is part of your or your child's experience. Our assessments bring clarity, validation, and a clear path forward — at a pace that feels safe.",
    heroImage: "/images/assessment-autism.png",
    heroImageAlt:
      "A calm psychology assessment room with assessment materials arranged neatly on a light wooden table",
    keyDetails: {
      ages: "Children & adults",
      duration: "3–4 sessions",
      format: "In-person & online",
      turnaround: "Report in 2–3 weeks",
    },
    overview: {
      heading: "Understanding, not labelling",
      paragraphs: [
        "An autism assessment is about understanding how someone experiences the world — how they think, communicate, connect, and process their surroundings. For many people, a diagnosis brings enormous relief and self-understanding.",
        "Our assessments are gold-standard, evidence-based, and led by experienced clinicians. We move gently and thoroughly, gathering a full picture so the outcome is accurate, meaningful, and genuinely useful.",
      ],
    },
    areas: {
      heading: "What we explore",
      intro:
        "A comprehensive autism assessment looks across several connected areas, including:",
      items: [
        {
          title: "Social communication",
          description:
            "How a person connects, converses, and interprets social cues and relationships.",
        },
        {
          title: "Interests & routines",
          description:
            "Patterns of focused interests, repetition, and the comfort found in routine.",
        },
        {
          title: "Sensory experiences",
          description:
            "Sensitivity to sound, light, texture, and other sensory input in daily life.",
        },
        {
          title: "Developmental history",
          description:
            "A careful look at early development, milestones, and lifelong patterns.",
        },
        {
          title: "Strengths & abilities",
          description:
            "Recognising unique strengths, not just challenges, to give a balanced picture.",
        },
        {
          title: "Daily functioning",
          description:
            "How things show up at home, school, or work, and where support could help.",
        },
      ],
    },
    process: {
      heading: "How the assessment works",
      intro:
        "A clear, structured process so you always know what comes next.",
      items: [
        {
          title: "Initial consultation",
          description:
            "We talk through your concerns, history, and what you're hoping to understand.",
        },
        {
          title: "Information gathering",
          description:
            "Questionnaires and, where relevant, input from family, school, or other clinicians.",
        },
        {
          title: "Assessment sessions",
          description:
            "Structured, standardised activities and interviews conducted at a comfortable pace.",
        },
        {
          title: "Feedback & report",
          description:
            "A warm feedback session and a detailed written report with clear recommendations.",
        },
      ],
    },
    outcomes: {
      heading: "What you'll receive",
      intro:
        "Every assessment concludes with clear, practical outcomes you can act on:",
      items: [
        "A comprehensive written report outlining findings and whether criteria are met",
        "A relaxed feedback session to talk through the results together",
        "Personalised, practical recommendations for support at home, school, or work",
        "Guidance on next steps, services, and any relevant funding or supports",
      ],
    },
    faqs: [
      {
        question: "Do I need a referral for an assessment?",
        answer:
          "No referral is needed to book privately. A GP or paediatrician referral can sometimes help with funding or rebates, and we're happy to guide you through the options.",
      },
      {
        question: "How long until I receive the report?",
        answer:
          "We typically provide the written report within two to three weeks of the final session, followed by a feedback session to walk through it together.",
      },
      {
        question: "Can adults be assessed for autism?",
        answer:
          "Absolutely. Many people seek assessment in adulthood, and we offer a sensitive, affirming process tailored to adult experiences.",
      },
    ],
    cta: {
      heading: "Begin with a conversation",
      description:
        "If you're wondering whether an assessment is the right step, reach out. We'll talk it through gently and help you decide what feels right.",
    },
  },
]

export function getAssessmentBySlug(slug: string) {
  return assessments.find((assessment) => assessment.slug === slug)
}
