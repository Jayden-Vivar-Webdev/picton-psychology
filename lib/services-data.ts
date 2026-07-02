export type ServiceContent = {
  slug: string;
  eyebrow: string;
  title: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  overview: {
    heading: string;
    paragraphs: string[];
  };
  helpsWith: {
    heading: string;
    intro: string;
    items: { title: string; description: string }[];
  };
  steps: {
    heading: string;
    intro: string;
    items: { title: string; description: string }[];
  };
  faqs: { question: string; answer: string }[];
  notes: {
    title: string;
    points: string[];
  };
  cta: {
    heading: string;
    description: string;
  };
};

export const services: ServiceContent[] = [
  {
    slug: "individual-therapy",
    eyebrow: "Therapy services",
    title: "Individual therapy",
    heroDescription:
      "One-on-one support for life's heavier seasons. Whether you're navigating anxiety, low mood, stress, or simply feeling stuck, we offer a calm, confidential space to be heard and to heal at your own pace.",
    heroImage: "/images/clinic-wallshot.jpg",
    heroImageAlt:
      "A calm, softly lit therapy room with a comfortable armchair beside a sunlit window",
    overview: {
      heading: "A space that's entirely yours",
      paragraphs: [
        "Adult life can quietly pile up — work, relationships, family, and the weight of expectations we place on ourselves. Sometimes it helps to have a space outside of it all, where you can slow down and make sense of what you're feeling.",
        "Our adult therapy sessions are warm, unhurried, and shaped entirely around you. There's no script and no judgement — just a qualified therapist who genuinely listens and helps you find your footing again.",
      ],
    },
    helpsWith: {
      heading: "What we can help with",
      intro:
        "Therapy isn't only for crisis points. People come to us for all kinds of reasons, including:",
      items: [
        {
          title: "Anxiety & stress",
          description:
            "Quiet a racing mind, ease persistent worry, and rediscover a sense of calm.",
        },
        {
          title: "Low mood & depression",
          description:
            "Gentle, evidence-based support to help you feel more like yourself again.",
        },
        {
          title: "Burnout & overwhelm",
          description:
            "Restore your energy and rebuild healthier boundaries that protect your wellbeing.",
        },
        {
          title: "Grief & loss",
          description:
            "Tender, unhurried support as you move through painful change and transition.",
        },
        {
          title: "Self-esteem & identity",
          description:
            "Reconnect with your values and build a kinder relationship with yourself.",
        },
        {
          title: "Life transitions",
          description:
            "Navigate big changes — career, relationships, or a shifting sense of purpose.",
        },
      ],
    },
    steps: {
      heading: "What to expect",
      intro:
        "Starting therapy can feel daunting. Here's how it gently unfolds.",
      items: [
        {
          title: "Reach out",
          description:
            "Send us a message or book a first conversation. There's no pressure and no commitment to continue.",
        },
        {
          title: "Your first session",
          description:
            "We take time to understand what's bringing you here and what you'd like to feel different.",
        },
        {
          title: "A plan shaped around you",
          description:
            "Together we agree on a pace and approach that feels right — never one-size-fits-all.",
        },
        {
          title: "Ongoing support",
          description:
            "We meet regularly, building understanding and tools that stay with you long after.",
        },
      ],
    },
    faqs: [
      {
        question: "How long are sessions, and how often?",
        answer:
          "Sessions usually run for 50 minutes. Many people start weekly or fortnightly, and we adjust the rhythm as you progress.",
      },
      {
        question: "Do you offer online sessions?",
        answer:
          "Yes. We offer both in-person and secure online video sessions, so you can choose whatever feels most comfortable.",
      },
      {
        question: "Will I need a referral?",
        answer:
          "No referral is required to see us privately. If you'd like to claim a Medicare rebate, a GP Mental Health Care Plan can help — we're happy to guide you.",
      },
    ],
    notes: {
      title: "testing",
      points: ["text contents as an idea or points"],
    },
    cta: {
      heading: "Ready when you are",
      description:
        "Taking the first step is often the hardest part. When you feel ready, we're here — gently, patiently, and without judgement.",
    },
  },
  {
    slug: "adolescent-therapy",
    eyebrow: "Therapy services",
    title: "Adolescent Therapy",
    heroDescription:
      "Compassionate, age-appropriate support for young people aged 12–17. We help teens navigate big feelings, school pressures, and the ups and downs of growing up — in a space that feels safe and never clinical.",
    heroImage: "/images/service-adolescent-therapy.png",
    heroImageAlt:
      "A bright, welcoming counselling space for teenagers with soft seating and plants",
    overview: {
      heading: "Support that meets teens where they are",
      paragraphs: [
        "The teenage years bring enormous change — emotionally, socially, and academically. It's completely normal for young people to feel overwhelmed, and sometimes they need a trusted adult outside the family to talk to.",
        "Our therapists are experienced in working with adolescents. We build trust slowly, speak their language, and create a relaxed space where they feel genuinely heard rather than lectured.",
      ],
    },
    helpsWith: {
      heading: "What we can help with",
      intro:
        "We support young people through a wide range of challenges, including:",
      items: [
        {
          title: "Anxiety & worry",
          description:
            "Tools to manage stress, social anxiety, and the pressure to keep up.",
        },
        {
          title: "Low mood",
          description:
            "A safe place to talk through sadness, withdrawal, and feeling flat.",
        },
        {
          title: "School & exam stress",
          description:
            "Healthier ways to cope with academic pressure and perfectionism.",
        },
        {
          title: "Friendships & bullying",
          description:
            "Navigating social dynamics, conflict, and a sense of belonging.",
        },
        {
          title: "Self-esteem",
          description:
            "Building confidence and a kinder inner voice during a formative time.",
        },
        {
          title: "Big emotions",
          description:
            "Understanding and managing anger, overwhelm, and mood swings.",
        },
      ],
    },
    steps: {
      heading: "What to expect",
      intro:
        "We keep parents informed while protecting your teen's trust and privacy.",
      items: [
        {
          title: "Initial chat with parents",
          description:
            "We start by understanding your concerns and what your child might need.",
        },
        {
          title: "Getting comfortable",
          description:
            "Early sessions focus on building trust so your teen feels safe to open up.",
        },
        {
          title: "Gentle, practical work",
          description:
            "We use age-appropriate, engaging approaches — never dry or intimidating.",
        },
        {
          title: "Working together",
          description:
            "With consent, we share guidance to help you support them at home too.",
        },
      ],
    },
    faqs: [
      {
        question: "Will you tell me what my child says?",
        answer:
          "Trust is essential to good therapy, so sessions are confidential. We'll always raise any genuine safety concerns with you, and we share general guidance with consent.",
      },
      {
        question: "What ages do you work with?",
        answer:
          "Our adolescent service supports young people aged 12 to 17. For younger children, get in touch and we'll point you in the right direction.",
      },
      {
        question: "Can parents attend sessions?",
        answer:
          "Sometimes, yes. Depending on your teen's needs, we may include family sessions — always in a way that respects their comfort.",
      },
    ],
    notes: {
      title: "testing",
      points: ["text contents as an idea or points"],
    },
    cta: {
      heading: "Help your teen feel heard",
      description:
        "Reaching out for your child takes courage. We're here to make the next step feel simple, warm, and reassuring.",
    },
  },
  {
    slug: "relationship-counselling",
    eyebrow: "Therapy services",
    title: "Relationship Counselling",
    heroDescription:
      "Supportive, balanced guidance for couples and partners. Whether you're working through conflict, rebuilding trust, or simply wanting to feel closer, we help you communicate and reconnect.",
    heroImage: "/images/service-relationship-counselling.png",
    heroImageAlt:
      "A warm counselling room with two comfortable chairs angled toward each other beside a soft sofa",
    overview: {
      heading: "Reconnect, communicate, and grow together",
      paragraphs: [
        "Every relationship goes through difficult patches. Tension, distance, or the same arguments on repeat don't mean something is broken — they often mean something needs to be understood.",
        "Our relationship counselling offers a calm, neutral space where both partners feel heard. We don't take sides. Instead, we help you understand each other more deeply and find healthier ways to move forward, together.",
      ],
    },
    helpsWith: {
      heading: "What we can help with",
      intro: "Couples come to us at all stages, for many reasons, including:",
      items: [
        {
          title: "Communication breakdowns",
          description:
            "Break free from repeating arguments and learn to truly hear one another.",
        },
        {
          title: "Rebuilding trust",
          description:
            "Work through betrayal, hurt, or distance with honesty and care.",
        },
        {
          title: "Conflict & resentment",
          description:
            "Understand the patterns underneath recurring tension and ease them.",
        },
        {
          title: "Intimacy & connection",
          description:
            "Rediscover closeness, warmth, and emotional safety together.",
        },
        {
          title: "Life changes",
          description:
            "Navigate parenthood, work stress, or big transitions as a team.",
        },
        {
          title: "Considering the future",
          description:
            "Find clarity together, whether that means growing closer or parting kindly.",
        },
      ],
    },
    steps: {
      heading: "What to expect",
      intro:
        "A supportive process designed to help you both feel safe and heard.",
      items: [
        {
          title: "A shared first session",
          description:
            "We meet together to understand your relationship and what you each hope for.",
        },
        {
          title: "Understanding the patterns",
          description:
            "We gently explore the dynamics and cycles that keep getting in the way.",
        },
        {
          title: "Building new tools",
          description:
            "You'll practise healthier ways to communicate, repair, and reconnect.",
        },
        {
          title: "Moving forward together",
          description:
            "We support you in carrying these changes into everyday life.",
        },
      ],
    },
    faqs: [
      {
        question: "Do both partners need to attend?",
        answer:
          "Relationship counselling works best with both partners present, but we can also begin with individual sessions if that feels more comfortable to start.",
      },
      {
        question: "Will you take sides?",
        answer:
          "Never. Our role is to remain neutral and to make sure both of you feel equally heard and supported throughout.",
      },
      {
        question: "What if we're not sure we want to stay together?",
        answer:
          "That's completely okay. Counselling can help you find clarity, whether that leads to reconnecting or to parting with kindness and respect.",
      },
    ],
    notes: {
      title: "testing",
      points: ["text contents as an idea or points"],
    },
    cta: {
      heading: "Take the next step together",
      description:
        "Reaching out is a sign of care, not failure. When you're both ready, we're here to help you find your way back to one another.",
    },
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
