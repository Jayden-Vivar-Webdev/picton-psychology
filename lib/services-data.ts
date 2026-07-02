export type ServiceContent = {
  slug: string;
  eyebrow: string;
  title: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  quickFacts: { label: string; value: string }[];
  overview: {
    heading: string;
    paragraphs: string[];
  };
  rightForYou: {
    heading: string;
    intro: string;
    items: string[];
  };
  focusPoints: {
    heading: string;
    intro: string;
    items: { title: string; description: string }[];
  };
  approaches: {
    heading: string;
    intro: string;
    items: { icon: string; title: string; description: string }[];
  };
  fees: {
    heading: string;
    paragraphs: string[];
    items: { label: string; value: string }[];
  };
  faqs: { question: string; answer: string }[];
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
    heroImage: "/images/service-adult-therapy.png",
    heroImageAlt:
      "A calm, softly lit therapy room with a comfortable armchair beside a sunlit window",
    quickFacts: [
      { label: "Suitable for", value: "Adults 18+" },
      { label: "Session length", value: "50 minutes" },
      { label: "Format", value: "In-person or online" },
      { label: "Rebates", value: "Medicare eligible" },
    ],
    overview: {
      heading: "A space that's entirely yours",
      paragraphs: [
        "Adult life can quietly pile up — work, relationships, family, and the weight of expectations we place on ourselves. Sometimes it helps to have a space outside of it all, where you can slow down and make sense of what you're feeling.",
        "Our individual therapy sessions are warm, unhurried, and shaped entirely around you. There's no script and no judgement — just a qualified therapist who genuinely listens and helps you find your footing again.",
      ],
    },
    rightForYou: {
      heading: "You might relate if…",
      intro:
        "People come to individual therapy for all sorts of reasons. You don't need to be in crisis to reach out — you may recognise some of these.",
      items: [
        "Worry or a racing mind keeps you up at night",
        "You feel flat, unmotivated, or not quite yourself",
        "Stress at work or home is starting to spill over",
        "You're carrying grief or a difficult change",
        "Old patterns keep repeating and you're ready to understand them",
        "You simply want space to think without judgement",
      ],
    },
    focusPoints: {
      heading: "Within this service",
      intro:
        "Therapy is shaped around you, but these are some of the areas we most often work on together.",
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
    approaches: {
      heading: "Approaches we draw on",
      intro:
        "We tailor our approach to you, drawing on evidence-based frameworks that suit your goals and the way you think.",
      items: [
        {
          icon: "brain",
          title: "Cognitive behavioural therapy",
          description:
            "Understand the links between thoughts, feelings, and behaviour, and build practical tools for change.",
        },
        {
          icon: "sprout",
          title: "Acceptance & commitment",
          description:
            "Make room for difficult feelings while moving toward what genuinely matters to you.",
        },
        {
          icon: "heart",
          title: "Person-centred care",
          description:
            "A warm, collaborative relationship where you set the pace and always feel heard.",
        },
      ],
    },
    fees: {
      heading: "Fees, rebates & Medicare",
      paragraphs: [
        "We believe support should be transparent and accessible. We'll always be clear about costs before you begin, with no surprises.",
        "With a GP Mental Health Care Plan, you may be eligible for a Medicare rebate on a number of sessions each year. We're happy to walk you through how it works.",
      ],
      items: [
        { label: "Standard session", value: "From $220" },
        { label: "Medicare rebate", value: "Up to $96.65" },
        { label: "Private health", value: "May apply" },
        { label: "Sessions / year", value: "Up to 10 rebated" },
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
    cta: {
      heading: "Ready when you are",
      description:
        "Taking the first step is often the hardest part. When you feel ready, we're here — gently, patiently, and without judgement.",
    },
  },
  {
    slug: "trauma-therapy",
    eyebrow: "Therapy services",
    title: "Trauma therapy",
    heroDescription:
      "Specialised, compassionate support for people living with the effects of trauma. We move gently and never rush, helping you feel safe enough to process the past and reclaim a sense of steadiness in the present.",
    heroImage: "/images/workshop-understanding-trauma.png",
    heroImageAlt:
      "A soft, grounding therapy space with warm light and natural textures",
    quickFacts: [
      { label: "Suitable for", value: "Adults 18+" },
      { label: "Session length", value: "50–60 minutes" },
      { label: "Format", value: "In-person or online" },
      { label: "Rebates", value: "Medicare eligible" },
    ],
    overview: {
      heading: "Healing at a pace that feels safe",
      paragraphs: [
        "Trauma can stay with the body and mind long after the event itself — showing up as anxiety, flashbacks, numbness, or a constant sense of being on edge. These are natural responses to overwhelming experiences, not signs of weakness.",
        "Our trauma-informed therapists create a steady, predictable space where safety comes first. We never push you to relive more than you're ready for, working carefully so that healing feels grounding rather than overwhelming.",
      ],
    },
    rightForYou: {
      heading: "You might relate if…",
      intro:
        "Trauma looks different for everyone. You may notice some of these in your own experience.",
      items: [
        "Distressing memories or flashbacks intrude on your day",
        "You feel constantly alert, tense, or easily startled",
        "Certain places, people, or reminders feel unsafe",
        "You feel disconnected, numb, or 'not really here'",
        "Sleep is disrupted by nightmares or restlessness",
        "A past experience still shapes how you live today",
      ],
    },
    focusPoints: {
      heading: "Within this service",
      intro:
        "We work at your pace, focusing on stability first and gently building from there.",
      items: [
        {
          title: "Safety & stabilisation",
          description:
            "Grounding tools to help you feel steadier before we explore anything deeper.",
        },
        {
          title: "Understanding responses",
          description:
            "Make sense of trauma reactions so they feel less frightening and more manageable.",
        },
        {
          title: "Processing memories",
          description:
            "Work through difficult experiences carefully, only when and if you're ready.",
        },
        {
          title: "Regulating the nervous system",
          description:
            "Calm a body stuck in fight-or-flight and restore a sense of ease.",
        },
        {
          title: "Rebuilding trust",
          description:
            "Reconnect with yourself and others at a pace that feels safe.",
        },
        {
          title: "Reclaiming the present",
          description:
            "Loosen the grip of the past so you can live more fully in the now.",
        },
      ],
    },
    approaches: {
      heading: "Approaches we draw on",
      intro:
        "We use established, trauma-focused methods, always adapted to what feels safe and right for you.",
      items: [
        {
          icon: "shield",
          title: "Trauma-focused CBT",
          description:
            "A structured, evidence-based approach to processing trauma and easing its ongoing impact.",
        },
        {
          icon: "sparkles",
          title: "EMDR-informed work",
          description:
            "Gentle techniques that help the mind reprocess distressing memories more adaptively.",
        },
        {
          icon: "leaf",
          title: "Somatic & grounding",
          description:
            "Body-based tools to settle the nervous system and restore a felt sense of safety.",
        },
      ],
    },
    fees: {
      heading: "Fees, rebates & Medicare",
      paragraphs: [
        "Trauma work is an investment in your wellbeing, and we keep our fees clear and predictable from the very start.",
        "A GP Mental Health Care Plan may make you eligible for Medicare rebates. We can help you understand what's available so cost is one less thing to worry about.",
      ],
      items: [
        { label: "Standard session", value: "From $220" },
        { label: "Medicare rebate", value: "Up to $96.65" },
        { label: "Private health", value: "May apply" },
        { label: "Sessions / year", value: "Up to 10 rebated" },
      ],
    },
    faqs: [
      {
        question: "Will I have to talk about the trauma in detail?",
        answer:
          "Never before you're ready. We focus on safety and stability first, and only explore memories at a pace that feels manageable for you.",
      },
      {
        question: "How long does trauma therapy take?",
        answer:
          "It varies from person to person. Some people find a few months helpful, while others prefer longer-term support. We'll shape it around your needs.",
      },
      {
        question: "Is trauma therapy right for older experiences?",
        answer:
          "Yes. Trauma can affect us years or even decades later. It's never too late to seek support and find relief.",
      },
    ],
    cta: {
      heading: "You don't have to carry it alone",
      description:
        "Reaching out for trauma support takes real courage. When you're ready, we'll meet you gently and move at a pace that feels safe.",
    },
  },
  {
    slug: "first-responders",
    eyebrow: "Specialist support",
    title: "First responders",
    heroDescription:
      "Confidential, informed psychological support for police, paramedics, firefighters, and emergency service workers. We understand the unique pressures of the job and offer a space built on respect, discretion, and genuine understanding.",
    heroImage: "/images/clinic-warm-space.png",
    heroImageAlt:
      "A calm, private consulting room designed for confidential conversations",
    quickFacts: [
      { label: "Suitable for", value: "Emergency & frontline workers" },
      { label: "Session length", value: "50–60 minutes" },
      { label: "Format", value: "In-person or online" },
      { label: "Confidentiality", value: "Strictly private" },
    ],
    overview: {
      heading: "Support that understands the job",
      paragraphs: [
        "First responders carry what most people never see — repeated exposure to critical incidents, long shifts, and the weight of being the person others rely on in a crisis. Over time, that toll is real, and it deserves proper care.",
        "Our therapists are experienced in working with frontline and emergency service personnel. We offer a confidential space free of jargon and judgement, where you can talk openly about the impact of the work and start to feel more like yourself again.",
      ],
    },
    rightForYou: {
      heading: "You might relate if…",
      intro:
        "The effects of frontline work can build slowly. You may recognise some of these signs.",
      items: [
        "Critical incidents replay in your mind off shift",
        "You feel wound-up, irritable, or unable to switch off",
        "Sleep, appetite, or concentration have changed",
        "You're using distance or numbness to cope",
        "Relationships at home feel strained",
        "You worry about the stigma of asking for help",
      ],
    },
    focusPoints: {
      heading: "Within this service",
      intro:
        "We focus on the pressures that come with the role, and on practical ways to protect your wellbeing.",
      items: [
        {
          title: "Critical incident stress",
          description:
            "Process difficult jobs and reduce the lingering impact of traumatic exposure.",
        },
        {
          title: "PTSD & hypervigilance",
          description:
            "Evidence-based support for post-traumatic stress and a nervous system stuck on high alert.",
        },
        {
          title: "Sleep & shift work",
          description:
            "Strategies to rest and recover despite demanding, irregular rosters.",
        },
        {
          title: "Anger & irritability",
          description:
            "Understand and manage the frustration that can build up over time.",
        },
        {
          title: "Relationships & home life",
          description:
            "Reconnect with loved ones and ease the strain the job can place at home.",
        },
        {
          title: "Return to work",
          description:
            "Considered, supported planning for coming back after time off.",
        },
      ],
    },
    approaches: {
      heading: "Approaches we draw on",
      intro:
        "We draw on trauma-focused, practical methods that respect the realities of frontline work.",
      items: [
        {
          icon: "shield",
          title: "Trauma-focused therapy",
          description:
            "Targeted work to process critical incidents and reduce their ongoing impact.",
        },
        {
          icon: "brain",
          title: "CBT & skills-based tools",
          description:
            "Practical strategies for managing stress, sleep, and difficult thoughts.",
        },
        {
          icon: "users",
          title: "Confidential, informed care",
          description:
            "A private space with therapists who genuinely understand the demands of the role.",
        },
      ],
    },
    fees: {
      heading: "Fees, rebates & Medicare",
      paragraphs: [
        "We keep our fees transparent and can talk you through any workplace, insurance, or compensation pathways that may apply.",
        "Depending on your situation, support may be covered through a GP Mental Health Care Plan, workers' compensation, or employer assistance programs. We're happy to help you navigate the options.",
      ],
      items: [
        { label: "Standard session", value: "From $220" },
        { label: "Medicare rebate", value: "Up to $96.65" },
        { label: "Workers' comp", value: "May be covered" },
        { label: "EAP / employer", value: "Enquire with us" },
      ],
    },
    faqs: [
      {
        question: "Is what I share kept confidential from my employer?",
        answer:
          "Yes. Your sessions are private. We only ever share information with your explicit consent, or where there's a genuine and immediate safety concern.",
      },
      {
        question: "Do you understand shift work and operational pressures?",
        answer:
          "Absolutely. Our therapists are experienced with the realities of frontline work, from rosters and callouts to critical incident exposure.",
      },
      {
        question: "Can I access support through workers' compensation?",
        answer:
          "In many cases, yes. Get in touch and we'll help you understand the pathways that might be available to you.",
      },
    ],
    cta: {
      heading: "Support for those who support others",
      description:
        "You spend your working life looking after everyone else. When you're ready, we're here to look after you — confidentially and without judgement.",
    },
  },
  {
    slug: "relationship-therapy",
    eyebrow: "Therapy services",
    title: "Relationship therapy",
    heroDescription:
      "Supportive, balanced guidance for couples and partners. Whether you're working through conflict, rebuilding trust, or simply wanting to feel closer, we help you communicate and reconnect.",
    heroImage: "/images/service-relationship-counselling.png",
    heroImageAlt:
      "A warm counselling room with two comfortable chairs angled toward each other beside a soft sofa",
    quickFacts: [
      { label: "Suitable for", value: "Couples & partners" },
      { label: "Session length", value: "60 minutes" },
      { label: "Format", value: "In-person or online" },
      { label: "Rebates", value: "Ask about eligibility" },
    ],
    overview: {
      heading: "Reconnect, communicate, and grow together",
      paragraphs: [
        "Every relationship goes through difficult patches. Tension, distance, or the same arguments on repeat don't mean something is broken — they often mean something needs to be understood.",
        "Our relationship therapy offers a calm, neutral space where both partners feel heard. We don't take sides. Instead, we help you understand each other more deeply and find healthier ways to move forward, together.",
      ],
    },
    rightForYou: {
      heading: "You might relate if…",
      intro:
        "Couples reach out at every stage. You may notice some of these in your relationship.",
      items: [
        "The same arguments keep coming back around",
        "You feel more like housemates than partners",
        "Trust has been shaken and you want to rebuild it",
        "Big changes have left you feeling out of sync",
        "Conversations turn tense before they get anywhere",
        "You want to feel close again but aren't sure how",
      ],
    },
    focusPoints: {
      heading: "Within this service",
      intro:
        "We help you understand the patterns between you and build healthier ways to connect.",
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
    approaches: {
      heading: "Approaches we draw on",
      intro:
        "We draw on proven couples frameworks to help you understand each other and reconnect.",
      items: [
        {
          icon: "heart",
          title: "Emotionally focused therapy",
          description:
            "Understand the emotional cycles between you and build a more secure connection.",
        },
        {
          icon: "message-circle",
          title: "Gottman-informed tools",
          description:
            "Practical, research-based skills for communication, conflict, and closeness.",
        },
        {
          icon: "users",
          title: "Neutral, balanced space",
          description:
            "A setting where both partners feel equally heard, respected, and supported.",
        },
      ],
    },
    fees: {
      heading: "Fees, rebates & Medicare",
      paragraphs: [
        "We're upfront about costs so you can focus on your relationship, not the paperwork.",
        "Couples sessions aren't usually covered by Medicare, but individual sessions may be if you have a GP Mental Health Care Plan. Talk to us and we'll explain your options.",
      ],
      items: [
        { label: "Couples session", value: "From $260" },
        { label: "Individual session", value: "From $220" },
        { label: "Medicare rebate", value: "Individual only" },
        { label: "Private health", value: "May apply" },
      ],
    },
    faqs: [
      {
        question: "Do both partners need to attend?",
        answer:
          "Relationship therapy works best with both partners present, but we can also begin with individual sessions if that feels more comfortable to start.",
      },
      {
        question: "Will you take sides?",
        answer:
          "Never. Our role is to remain neutral and to make sure both of you feel equally heard and supported throughout.",
      },
      {
        question: "What if we're not sure we want to stay together?",
        answer:
          "That's completely okay. Therapy can help you find clarity, whether that leads to reconnecting or to parting with kindness and respect.",
      },
    ],
    cta: {
      heading: "Take the next step together",
      description:
        "Reaching out is a sign of care, not failure. When you're both ready, we're here to help you find your way back to one another.",
    },
  },
  {
    slug: "diagnostic-assessments",
    eyebrow: "Assessments",
    title: "Diagnostic assessments",
    heroDescription:
      "Thorough, compassionate psychological assessments that bring clarity and understanding. From autism and ADHD to learning and cognitive assessments, we help you make sense of how your mind works and what support might help.",
    heroImage: "/images/assessment-autism.png",
    heroImageAlt:
      "A bright, welcoming assessment room with a desk, comfortable seating, and natural light",
    quickFacts: [
      { label: "Suitable for", value: "Children & adults" },
      { label: "Typical length", value: "Multiple sessions" },
      { label: "Format", value: "In-person" },
      { label: "Outcome", value: "Written report" },
    ],
    overview: {
      heading: "Understanding leads to the right support",
      paragraphs: [
        "Sometimes the most helpful thing is a clearer picture. A thorough assessment can explain long-standing questions, confirm or rule out a diagnosis, and open the door to the right support at school, work, or home.",
        "Our assessments are carried out with care and rigour. We take the time to understand the whole person — not just test scores — and translate our findings into clear, practical recommendations you can actually use.",
      ],
    },
    rightForYou: {
      heading: "You might relate if…",
      intro:
        "An assessment can be helpful at any age. You may be considering one because of some of these.",
      items: [
        "You've long wondered about autism or ADHD",
        "Learning or focus difficulties are affecting school or work",
        "You need a formal report for support or funding",
        "A child is struggling and you want to understand why",
        "Memory or thinking changes are a concern",
        "You want clarity and practical recommendations",
      ],
    },
    focusPoints: {
      heading: "Within this service",
      intro:
        "We offer a range of evidence-based assessments, each tailored to the question you're seeking to answer.",
      items: [
        {
          title: "Autism assessments",
          description:
            "Comprehensive evaluation of social communication, sensory experience, and behaviour.",
        },
        {
          title: "ADHD assessments",
          description:
            "Careful assessment of attention, focus, and activity across settings.",
        },
        {
          title: "Cognitive assessments",
          description:
            "Understand memory, reasoning, and thinking skills with standardised measures.",
        },
        {
          title: "Learning assessments",
          description:
            "Identify specific learning difficulties like dyslexia to guide the right support.",
        },
        {
          title: "Educational assessments",
          description:
            "Reports to inform learning plans, adjustments, and school support.",
        },
        {
          title: "Support & funding reports",
          description:
            "Clear documentation to help access funding, accommodations, or services.",
        },
      ],
    },
    approaches: {
      heading: "How we work",
      intro:
        "Our assessment process is structured, thorough, and designed to make you feel at ease at every step.",
      items: [
        {
          icon: "clipboard",
          title: "Comprehensive intake",
          description:
            "We begin by understanding your history, concerns, and what you hope to learn.",
        },
        {
          icon: "search",
          title: "Standardised testing",
          description:
            "Validated, evidence-based tools administered in a calm, unhurried setting.",
        },
        {
          icon: "file-text",
          title: "Clear written report",
          description:
            "A plain-language report with findings and practical, tailored recommendations.",
        },
      ],
    },
    fees: {
      heading: "Fees, rebates & Medicare",
      paragraphs: [
        "Assessment fees depend on the type and scope of assessment. We'll always provide a clear quote before we begin so you know exactly what to expect.",
        "Some assessments may attract a Medicare or private health rebate depending on your circumstances. Get in touch and we'll help you understand what applies.",
      ],
      items: [
        { label: "Assessment", value: "Quoted upfront" },
        { label: "Includes", value: "Testing + report" },
        { label: "Medicare rebate", value: "May apply" },
        { label: "Private health", value: "May apply" },
      ],
    },
    faqs: [
      {
        question: "How long does an assessment take?",
        answer:
          "Assessments usually involve several appointments across a few weeks, including intake, testing, and a feedback session. We'll outline the timeline for your specific assessment.",
      },
      {
        question: "Will I receive a written report?",
        answer:
          "Yes. You'll receive a clear, comprehensive report with findings and practical recommendations you can share with schools, employers, or other providers.",
      },
      {
        question: "Do I need a referral?",
        answer:
          "Not usually. You can book an assessment directly with us. If a rebate is available, we'll let you know what's needed.",
      },
    ],
    cta: {
      heading: "Find the clarity you're looking for",
      description:
        "Whether it's for you or someone you love, an assessment can be the first step toward the right understanding and support. Reach out and we'll guide you through it.",
    },
  },
  {
    slug: "workshops",
    eyebrow: "Group programs",
    title: "Workshops",
    heroDescription:
      "Practical, supportive group workshops on the things that matter most — from understanding trauma to managing anxiety and beating burnout. Learn alongside others in a warm, welcoming space.",
    heroImage: "/images/workshop-mood-and-anxiety.png",
    heroImageAlt:
      "A bright, comfortable group workshop space with soft seating arranged in a circle",
    quickFacts: [
      { label: "Suitable for", value: "Adults & groups" },
      { label: "Format", value: "Small group sessions" },
      { label: "Location", value: "In-person or online" },
      { label: "Materials", value: "Included" },
    ],
    overview: {
      heading: "Learn, connect, and grow together",
      paragraphs: [
        "There's something powerful about learning alongside others who understand. Our workshops combine practical, evidence-based tools with the quiet reassurance that you're not the only one facing these challenges.",
        "Led by experienced psychologists, each workshop is warm, engaging, and grounded in real strategies you can take away and use. Whether you attend as an individual, a workplace, or a community group, you'll leave with something useful.",
      ],
    },
    rightForYou: {
      heading: "You might relate if…",
      intro:
        "Workshops suit all kinds of people and organisations. You may be a good fit if some of these apply.",
      items: [
        "You learn best with practical tools and structure",
        "You'd find comfort in a supportive group setting",
        "You want to build skills before or alongside therapy",
        "Your workplace wants to invest in staff wellbeing",
        "You're a community group seeking mental health education",
        "You prefer a lower-pressure way to get started",
      ],
    },
    focusPoints: {
      heading: "Within this service",
      intro:
        "Our workshops cover a range of topics, each designed to leave you with practical, lasting skills.",
      items: [
        {
          title: "Understanding trauma",
          description:
            "Recognise the effects of trauma and learn gentle tools to support recovery.",
        },
        {
          title: "Mood & anxiety",
          description:
            "Practical strategies to quiet worry, lift mood, and feel more grounded.",
        },
        {
          title: "Burnout to balance",
          description:
            "Restore energy, set healthier boundaries, and protect your wellbeing.",
        },
        {
          title: "Stress & resilience",
          description:
            "Build the skills to cope with pressure and bounce back more easily.",
        },
        {
          title: "Workplace wellbeing",
          description:
            "Tailored sessions to support mental health across your team or organisation.",
        },
        {
          title: "Custom programs",
          description:
            "Bespoke workshops shaped around the needs of your group or community.",
        },
      ],
    },
    approaches: {
      heading: "How we run our workshops",
      intro:
        "Every workshop is designed to feel welcoming, practical, and genuinely useful.",
      items: [
        {
          icon: "users",
          title: "Small, supportive groups",
          description:
            "Warm, welcoming sessions where everyone feels comfortable to take part.",
        },
        {
          icon: "sprout",
          title: "Practical, evidence-based",
          description:
            "Real tools grounded in psychology that you can start using straight away.",
        },
        {
          icon: "message-circle",
          title: "Led by psychologists",
          description:
            "Experienced facilitators who bring warmth, expertise, and lived understanding.",
        },
      ],
    },
    fees: {
      heading: "Fees & bookings",
      paragraphs: [
        "Workshop fees vary by format and length. Individual places, workplace bookings, and community group sessions are all available.",
        "Get in touch for current dates and pricing, or to arrange a tailored workshop for your team or organisation.",
      ],
      items: [
        { label: "Individual place", value: "Enquire" },
        { label: "Workplace booking", value: "Quoted" },
        { label: "Materials", value: "Included" },
        { label: "Custom programs", value: "Available" },
      ],
    },
    faqs: [
      {
        question: "Do I need any experience to join a workshop?",
        answer:
          "Not at all. Our workshops are designed to be accessible and welcoming for everyone, whatever your starting point.",
      },
      {
        question: "Can you run a workshop for my workplace?",
        answer:
          "Yes. We regularly deliver tailored workshops for workplaces and community groups. Get in touch and we'll design something that fits your needs.",
      },
      {
        question: "Are workshops a replacement for therapy?",
        answer:
          "Workshops are a great complement to therapy and a wonderful place to build skills, but they're not a substitute for individual support. We can help you find the right fit.",
      },
    ],
    cta: {
      heading: "Come and learn with us",
      description:
        "Whether you're joining as an individual or booking for your team, our workshops are a warm, practical place to start. Reach out for upcoming dates.",
    },
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string, limit = 3) {
  return services.filter((service) => service.slug !== slug).slice(0, limit);
}
