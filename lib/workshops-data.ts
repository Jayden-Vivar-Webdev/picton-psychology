export type WorkshopHighlight = {
  title: string
  description: string
}

export type WorkshopContent = {
  slug: string
  /** Short label shown in the eyebrow above the hero heading */
  eyebrow: string
  /** Main hero heading */
  title: string
  /** Supporting hero paragraph */
  intro: string
  /** Hero image */
  image: string
  imageAlt: string
  /** Short badges shown beneath the hero heading (e.g. bulk billed) */
  badges: string[]
  /** Primary call-to-action button label */
  ctaLabel: string
  /** Lead facilitator name shown in the hero credit line */
  facilitator: string
  facilitatorRole: string
  /** Opening "reality of" overview section */
  overview: {
    heading: string
    paragraphs: string[]
  }
  /** Common experiences associated with the topic */
  commonExperiences: {
    heading: string
    items: string[]
  }
  /** About the workshop long-form description */
  about: {
    heading: string
    paragraphs: string[]
  }
  /** Who the workshop is for */
  whoFor: {
    heading: string
    intro: string
    items: string[]
  }
  /** What attendees will learn */
  learn: {
    heading: string
    items: string[]
  }
  /** Expected outcomes by the end of the workshop */
  outcomes: {
    heading: string
    intro: string
    items: string[]
  }
  /** Medicare / pricing reassurance block */
  funding: {
    heading: string
    paragraphs: string[]
  }
  /** Detailed facilitator bio */
  facilitatorBio: {
    name: string
    role: string
    paragraphs: string[]
  }
  /** Frequently asked questions */
  faqs: { question: string; answer: string }[]
  /** Closing CTA copy */
  closing: {
    heading: string
    paragraphs: string[]
  }
}

export const workshops: WorkshopContent[] = [
  {
    slug: "understanding-trauma",
    eyebrow: "Understanding Trauma",
    title: "Understand trauma and learn practical ways to feel safer, more grounded, and more in control",
    intro:
      "A one-day, skills-based workshop that helps you understand how trauma affects the brain, body, and nervous system — and gives you practical tools to support grounding, regulation, and long-term wellbeing.",
    image: "/images/workshop-understanding-trauma.png",
    imageAlt: "A calm, supportive small-group workshop space with a circle of comfortable armchairs",
    badges: ["100% Bulk Billed", "No Out-of-Pocket Expenses", "Multiple Dates Available"],
    ctaLabel: "Register your interest",
    facilitator: "Lisa Arnold",
    facilitatorRole: "Clinical Psychologist & Director",
    overview: {
      heading: "The reality of trauma",
      paragraphs: [
        "Trauma can affect the way the brain, body, and nervous system respond long after the event itself has passed. When a person experiences something distressing, overwhelming, or unsafe, the nervous system automatically shifts into survival mode to help protect them. For many people, the nervous system can remain stuck in this heightened state of alertness long after the danger has passed.",
        "Over time, trauma can begin impacting emotions, thoughts, relationships, sleep, concentration, sense of safety, confidence, and overall day-to-day functioning. Many people describe feeling constantly on edge, emotionally overwhelmed, hypervigilant, disconnected, emotionally reactive, shut down, or unsure why they are responding the way they are in everyday situations.",
        "Trauma may develop following a single distressing event or through ongoing experiences of stress, fear, instability, interpersonal difficulties, loss, medical experiences, workplace exposure, neglect, or repeated distressing situations. Everyone experiences trauma differently, and there is no \u201cright\u201d or \u201cwrong\u201d way for trauma symptoms to appear.",
        "Many trauma symptoms develop automatically as the brain and nervous system attempt to keep a person safe from perceived danger or threat. These responses are not signs of weakness or failure — they are protective survival responses developed by the nervous system.",
      ],
    },
    commonExperiences: {
      heading: "Common experiences associated with trauma",
      items: [
        "Feeling constantly on edge or hypervigilant",
        "Emotional overwhelm or difficulty regulating emotions",
        "Feeling disconnected, numb, or emotionally shut down",
        "Avoidance of situations, places, people, or memories",
      ],
    },
    about: {
      heading: "About the workshop",
      paragraphs: [
        "Understanding Trauma is a one-day, skills-based workshop designed to help you better understand trauma responses and the impact trauma can have on the brain, nervous system, emotions, behaviours, physical symptoms, and everyday functioning.",
        "The workshop combines evidence-based psychoeducation with practical tools and strategies to help you better understand why trauma responses occur, how the body responds to perceived danger and threat, and why trauma symptoms can continue long after the traumatic experience itself has passed.",
        "Throughout the workshop, you will explore concepts relating to survival responses, emotional regulation, grounding, stabilisation, stress activation, and the connection between thoughts, emotions, behaviours, and physical symptoms. The workshop also incorporates practical coping strategies, mindfulness, behavioural approaches, and nervous system regulation strategies to support recovery, safety, and emotional wellbeing.",
        "The workshop has been carefully designed to provide a safe, structured, and supportive environment, with absolutely no pressure to share personal experiences unless you feel comfortable doing so.",
      ],
    },
    whoFor: {
      heading: "Who this is for",
      intro: "This workshop may be particularly helpful for people who are experiencing:",
      items: [
        "Feelings of constantly being on edge, hypervigilant, or emotionally overwhelmed",
        "Feeling disconnected, emotionally numb, shut down, or unsafe",
        "Avoidance of situations, people, memories, or emotions linked to traumatic experiences",
        "A desire to better understand trauma responses and learn practical coping strategies",
      ],
    },
    learn: {
      heading: "What you will learn",
      items: [
        "What trauma is and how trauma responses can develop",
        "How trauma can impact the way you think, feel, and respond to situations",
        "The neuroanatomy of trauma and how it can affect the brain, nervous system, emotions, and behaviours",
        "Greater understanding of trauma triggers, stress responses, hypervigilance, avoidance, and emotional shutdown",
        "Survival responses and practical ways to help regulate the nervous system",
      ],
    },
    outcomes: {
      heading: "Expected outcomes",
      intro: "By the end of the Understanding Trauma workshop, you\u2019ll be equipped to:",
      items: [
        "Better understand your personal trauma responses and why they occur",
        "Recognise trauma triggers, stress responses, and early warning signs of overwhelm",
        "Feel more informed and reassured about how trauma can impact emotions, behaviours, relationships, and everyday life",
        "Use practical tools and strategies to help you feel calmer, safer, more grounded, and emotionally balanced",
        "Leave with practical coping tools to support ongoing recovery, emotional wellbeing, and day-to-day coping",
      ],
    },
    funding: {
      heading: "100% bulk billed through Medicare",
      paragraphs: [
        "These workshops are 100% bulk billed through Medicare with a valid Mental Health Treatment Plan (MHTP), meaning there are no out-of-pocket costs.",
        "A Mental Health Treatment Plan can be arranged through your GP. If you already have a current and valid plan in place, there is no need to obtain a new referral.",
        "Under Medicare, you can access up to 10 individual therapy sessions and 10 group therapy sessions each calendar year. Importantly, attending a workshop does not reduce your access to individual therapy sessions.",
      ],
    },
    facilitatorBio: {
      name: "Lisa Arnold",
      role: "Director / Clinical Psychologist",
      paragraphs: [
        "Lisa Arnold has over 25 years of clinical experience supporting individuals experiencing trauma, anxiety, chronic stress, burnout, and complex mental health presentations.",
        "Lisa developed the Understanding Trauma Workshop following many years of supporting individuals experiencing chronic and complex trauma presentations, including first responders such as police officers and paramedics, as well as survivors of chronic abuse and interpersonal trauma.",
        "Known for her warm, practical, and down-to-earth approach, Lisa is passionate about helping people better understand trauma responses and the impact trauma can have on the brain, nervous system, emotions, relationships, and overall wellbeing. She strongly believes that understanding the \u201cwhy\u201d behind trauma responses can help reduce shame, self-blame, confusion, and emotional overwhelm.",
        "She understands that trauma affects everyone differently and is committed to creating a supportive, structured, and non-judgemental environment where everyone feels safe, respected, and supported throughout their healing journey.",
      ],
    },
    faqs: [
      {
        question: "Do I have to talk about my trauma?",
        answer:
          "No. There is absolutely no pressure to talk about or share personal details of your experience. The workshop has been carefully designed to feel safe, structured, and supportive, and you\u2019re welcome to participate at a pace that feels comfortable for you. Some people like to contribute to discussions, while others prefer to sit back, listen, and take in the information — both are completely okay.",
      },
      {
        question: "Is this a replacement for individual therapy?",
        answer:
          "No. The workshop is designed to provide psychoeducation, practical tools, and coping strategies to help you better understand trauma and how it may be impacting you. Many people find the workshop complements their individual therapy by reinforcing skills and understanding between sessions, however it is not intended to replace personalised psychological treatment.",
      },
      {
        question: "Who leads the workshop?",
        answer:
          "Lisa Arnold, Director and Clinical Psychologist, facilitates the workshop. Lisa has over 25 years of clinical experience supporting individuals with complex trauma, anxiety, stress, and complex mental health presentations.",
      },
      {
        question: "Is the workshop online or in person?",
        answer:
          "The workshop is facilitated in person in a small, supportive group setting. We intentionally keep our groups face-to-face, as many people find this creates a more comfortable, connected, and supportive environment for learning and skill-building. Our workshops are also fully bulk billed through Medicare, and current Medicare guidelines for group programs delivered via telehealth are limited to specific rural and remote locations.",
      },
      {
        question: "What if I can\u2019t attend the workshop? Will there be a cancellation fee?",
        answer:
          "We understand that unexpected things can happen, and if you\u2019re unable to attend, we ask for at least 7 days\u2019 notice where possible. Because your place is reserved specifically for you, late cancellations can impact the viability of the workshop for others, and cancellations made within 7 days may still be billed in line with Medicare group therapy guidelines and the consent form provided during onboarding. If something unexpected arises, please contact us as soon as possible so we can discuss your situation and support you where we can.",
      },
      {
        question: "How do I know whether the workshop or individual therapy is the best fit for me?",
        answer:
          "Our workshops provide psychoeducation, practical coping strategies, and a supportive environment to help you better understand your symptoms and learn tools for everyday life. Individual therapy may be more suitable if you are looking for personalised support, ongoing treatment, or a space to explore your experiences in greater depth. Some people choose to attend both. If you are unsure which option is the best fit, our friendly team are more than happy to help guide you.",
      },
    ],
    closing: {
      heading: "Ready to take the next step?",
      paragraphs: [
        "If you feel this workshop may benefit you, we understand that reaching out or trying something new can sometimes feel overwhelming.",
        "Our friendly team are more than happy to answer any questions you may have and provide further information about workshop dates, suitability, and the next steps for joining the program. Lisa looks forward to meeting you and supporting you in a safe and structured environment, where you can learn practical tools and strategies at a pace that feels comfortable for you.",
      ],
    },
  },
  {
    slug: "mood-and-anxiety",
    eyebrow: "Mood & Anxiety",
    title:
      "Understand mood and anxiety symptoms and learn practical ways to feel calmer, more balanced, and more in control",
    intro:
      "A one-day, skills-based workshop providing practical tools, psychoeducation, and coping strategies for people experiencing anxiety, overwhelm, low mood, or emotional exhaustion.",
    image: "/images/workshop-mood-and-anxiety.png",
    imageAlt: "A calm, light-filled wellness space with a comfortable armchair beside a window",
    badges: ["100% Bulk Billed", "No Out-of-Pocket Expenses", "Multiple Dates Available"],
    ctaLabel: "Register your interest",
    facilitator: "Lisa Arnold",
    facilitatorRole: "Clinical Psychologist & Director",
    overview: {
      heading: "The effects of mood and anxiety",
      paragraphs: [
        "Mood and anxiety symptoms can affect many areas of everyday life, including thoughts, emotions, motivation, confidence, relationships, sleep, energy levels, and overall day-to-day functioning.",
        "Many people describe feeling constantly worried, overwhelmed, emotionally exhausted, stuck in negative thinking patterns, on edge, or unable to properly switch off and relax. Others may notice low motivation, difficulty concentrating, avoidance behaviours, increased irritability, or feeling disconnected from themselves and the people around them.",
        "For many people, one of the hardest parts is not fully understanding why these symptoms occur or knowing how to manage them when they begin affecting everyday life.",
        "This workshop is designed to help you better understand how mood and anxiety symptoms can affect the brain, nervous system, emotions, behaviours, and day-to-day functioning, while learning practical tools and strategies to support emotional regulation, coping, confidence, balance, and long-term wellbeing.",
      ],
    },
    commonExperiences: {
      heading: "Common experiences associated with mood and anxiety",
      items: [
        "Constant worrying, overthinking, or feeling mentally overwhelmed",
        "Feeling on edge, restless, irritable, or unable to relax",
        "Low mood, reduced motivation, or feeling emotionally exhausted",
        "Avoidance, self-doubt, or difficulty coping with everyday pressures",
      ],
    },
    about: {
      heading: "About the workshop",
      paragraphs: [
        "Mood & Anxiety is a one-day, skills-based workshop designed to help you better understand mood and anxiety symptoms, while learning practical strategies to support emotional wellbeing, coping, and day-to-day functioning.",
        "The workshop combines evidence-based psychoeducation with practical tools and strategies drawn from Cognitive Behavioural Therapy (CBT), mindfulness, nervous system regulation, behavioural approaches, and neuroplasticity. Throughout the day, you explore how thoughts, emotions, behaviours, physical symptoms, and stress responses interact, and how these patterns can contribute to anxiety, overwhelm, low mood, avoidance, self-criticism, and emotional exhaustion.",
        "You are guided through activities, reflections, grounding strategies, mindfulness exercises, and coping tools designed to support emotional regulation, self-awareness, resilience, and healthier coping patterns moving forward.",
        "The workshop has been carefully designed to provide a safe, structured, and supportive environment where you engage at a pace that is comfortable for you. There is absolutely no pressure to share personal experiences or participate in discussions if you do not wish to. Whether you prefer to actively engage or simply sit back and take in the information, you will be fully supported throughout the workshop.",
      ],
    },
    whoFor: {
      heading: "Who this is for",
      intro: "This workshop may be particularly helpful for people experiencing:",
      items: [
        "Feelings of overwhelm, constant worry, overthinking, stress, or racing thoughts",
        "Increased anxiety, panic attacks, feeling on edge, or unable to properly relax and switch off",
        "Low mood, reduced motivation, self-doubt, or difficulty enjoying everyday life",
        "Struggling with confidence, avoidance, negative thinking patterns, or feeling emotionally stuck",
      ],
    },
    learn: {
      heading: "What you will learn",
      items: [
        "What mood and anxiety symptoms are and how they can develop",
        "How mood and anxiety can impact the way you think, feel, and respond to situations",
        "The neuroanatomy of stress, anxiety, and mood symptoms, including how they can affect the brain, nervous system, emotions, and behaviours",
        "Greater understanding of negative thinking patterns, avoidance behaviours, emotional overwhelm, and stress responses",
      ],
    },
    outcomes: {
      heading: "Expected outcomes",
      intro: "By the end of the Mood & Anxiety workshop, you\u2019ll be equipped to:",
      items: [
        "Better understand how mood and anxiety symptoms can impact everyday life, relationships, confidence, and overall wellbeing",
        "Have greater awareness of how stress, overthinking, avoidance, and negative thinking patterns can affect emotions, behaviours, and coping",
        "Better understand emotional overwhelm, anxiety, low mood, and feeling \u201cstuck\u201d in unhelpful emotional and behavioural patterns",
        "Leave with practical coping strategies and tools to support emotional wellbeing and day-to-day functioning moving forward",
      ],
    },
    funding: {
      heading: "100% bulk billed through Medicare",
      paragraphs: [
        "These workshops are 100% bulk billed through Medicare with a valid Mental Health Treatment Plan (MHTP), meaning there are no out-of-pocket costs.",
        "A Mental Health Treatment Plan can be arranged through your GP. If you already have a current and valid plan in place, there is no need to obtain a new referral.",
        "Under Medicare, you can access up to 10 individual therapy sessions and 10 group therapy sessions each calendar year. Importantly, attending a workshop does not reduce your access to individual therapy sessions.",
      ],
    },
    facilitatorBio: {
      name: "Lisa Arnold",
      role: "Director / Clinical Psychologist",
      paragraphs: [
        "Lisa Arnold has over 25 years of clinical experience supporting individuals experiencing anxiety, stress, low mood, burnout, trauma, and complex mental health presentations.",
        "Lisa developed the Mood & Anxiety Workshop after many years of supporting people struggling with constant worry, overthinking, emotional overwhelm, low mood, stress, self-doubt, avoidance behaviours, and difficulty coping with everyday pressures. Through her extensive clinical experience, Lisa understands that mood and anxiety symptoms can gradually begin affecting confidence, relationships, motivation, emotional wellbeing, and overall day-to-day functioning.",
        "Known for her warm, practical, and down-to-earth approach, Lisa has carefully designed this workshop to provide a supportive, structured, and non-judgemental environment where you can better understand mood and anxiety symptoms while learning realistic strategies to support emotional wellbeing and long-term balance.",
        "Rather than focusing solely on symptom management, the workshop helps you understand the \u201cwhy\u201d behind mood and anxiety symptoms, including how thoughts, emotions, behaviours, stress responses, and the nervous system interact and influence one another. The workshop draws from a range of evidence-based psychological approaches, including CBT, mindfulness, behavioural strategies, nervous system regulation, and psychoeducation.",
      ],
    },
    faqs: [
      {
        question: "Is this suitable if I already see a psychologist?",
        answer:
          "Yes. Many people attend our workshops alongside individual therapy. The workshop is designed to complement individual psychological treatment by providing additional psychoeducation, practical tools, and coping strategies that can support progress between sessions. The workshop does not replace individual therapy or personalised psychological care. If you\u2019re unsure whether the workshop is suitable for your current situation, our friendly team are more than happy to discuss this with you.",
      },
      {
        question: "Will this fix my anxiety or mood symptoms?",
        answer:
          "The workshop is designed to help you better understand mood and anxiety, while learning practical tools and strategies that may support recovery, emotional wellbeing, stress management, and long-term self-management. Many people find the workshop helpful in increasing insight, improving coping strategies, and feeling more balanced, emotionally regulated, and in control moving forward.",
      },
      {
        question: "Do I need to participate in group discussion?",
        answer:
          "There is absolutely no pressure to participate or share personal experiences if you do not feel comfortable doing so. Everyone is encouraged and supported to engage at a pace that feels right for you. Some people prefer to actively participate in discussions, while others feel more comfortable sitting back, listening, and taking in the information — both are completely okay and fully supported throughout the workshop.",
      },
      {
        question: "Is the workshop online or in person?",
        answer:
          "The workshop is facilitated in person at Picton Psychology in a small, supportive group setting. We intentionally keep our groups face-to-face, as many people find this creates a more comfortable, connected, and supportive environment for learning and skill-building. Our workshops are also fully bulk billed through Medicare, and current Medicare guidelines for group programs delivered via telehealth are limited to specific rural and remote locations.",
      },
      {
        question: "What if I can\u2019t attend the workshop? Will there be a cancellation fee?",
        answer:
          "We understand that unexpected things can happen, and if you\u2019re unable to attend, we ask for at least 7 days\u2019 notice where possible. Because your place is reserved specifically for you, late cancellations can impact the viability of the workshop for others, and cancellations made within 7 days may still be billed in line with Medicare group therapy guidelines and the consent form provided during onboarding. If something unexpected arises, please contact us as soon as possible so we can discuss your situation and support you where we can.",
      },
      {
        question: "How do I know whether the workshop or individual therapy is the best fit for me?",
        answer:
          "Our workshops provide psychoeducation, practical coping strategies, and a supportive environment to help you better understand your symptoms and learn tools for everyday life. Many people find workshops helpful as a starting point, alongside individual therapy, or as additional support between sessions. Individual therapy may be more suitable if you are looking for personalised support, ongoing treatment, or a space to explore your experiences in greater depth. If you are unsure which option may be the best fit, our friendly team are more than happy to help guide you.",
      },
    ],
    closing: {
      heading: "Ready to take the next step?",
      paragraphs: [
        "If you feel this workshop may benefit you, we understand that reaching out or trying something new can sometimes feel overwhelming.",
        "Our friendly team at Picton Psychology are more than happy to answer any questions you may have and provide further information about workshop dates, suitability, and the next steps for joining the program. Lisa looks forward to meeting you and supporting you in a safe, supportive, and structured environment, where you can learn practical tools and strategies at a pace that feels comfortable for you.",
      ],
    },
  },
  {
    slug: "burnout-to-balance",
    eyebrow: "Burnout to Balance",
    title: "Understand burnout and learn practical ways to restore balance and feel more in control",
    intro:
      "A one-day, skills-based workshop designed to help people experiencing chronic stress, overwhelm, exhaustion, or burnout to restore balance, rebuild energy, and develop practical strategies for managing stress in everyday life.",
    image: "/images/workshop-burnout-to-balance.png",
    imageAlt: "A calm restful reading nook with a soft armchair, blanket, tea, and plants by a sunlit window",
    badges: ["100% Bulk Billed", "No Out-of-Pocket Expenses", "Multiple Dates Available"],
    ctaLabel: "Register your interest",
    facilitator: "Lisa Arnold",
    facilitatorRole: "Clinical Psychologist & Director",
    overview: {
      heading: "The effects of burnout",
      paragraphs: [
        "Burnout is more than simply feeling tired. Over time, chronic stress and overwhelm can begin to impact your energy, motivation, mood, concentration, sleep, patience, and overall ability to cope with everyday life.",
        "Many people describe feeling constantly \u201con,\u201d mentally drained, emotionally exhausted, overwhelmed, or like they are running on empty. Others notice they struggle to switch off, feel increasingly irritable, disconnected, or find themselves pushing through each day without properly recovering.",
        "Burnout can affect anyone. Whether you are balancing work pressures, caring for others, managing family responsibilities, studying, or simply carrying ongoing stress for extended periods of time, the effects can gradually build until your mind and body begin forcing you to slow down.",
        "This workshop is designed to help you better understand the impact chronic stress and burnout can have on the brain, nervous system, emotions, and day-to-day functioning, while learning practical tools and strategies to support recovery, emotional regulation, balance, and long-term wellbeing.",
      ],
    },
    commonExperiences: {
      heading: "Common experiences with burnout include",
      items: [
        "Feeling exhausted, even after resting",
        "Constantly thinking about responsibilities or tasks",
        "Difficulty switching off or relaxing",
        "Feeling overwhelmed or emotionally drained",
        "Reduced motivation and concentration",
        "Feeling like you are always pushing through",
        "Struggling to find balance between responsibilities and self-care",
      ],
    },
    about: {
      heading: "About the program",
      paragraphs: [
        "Burnout to Balance is a one-day, skills-based workshop designed for people experiencing chronic stress, overwhelm, emotional exhaustion, or burnout.",
        "Many people attending the workshop are balancing demanding work environments, caregiving responsibilities, parenting, study pressures, ongoing stress, or the constant demands of everyday life. Often, people continue pushing through while feeling mentally drained, emotionally overwhelmed, disconnected, or unable to properly switch off and recover.",
        "This workshop provides a supportive opportunity to step back and better understand the impact stress and burnout can have on the brain, nervous system, emotions, energy levels, and day-to-day functioning, while learning practical strategies to support recovery and long-term wellbeing.",
        "The workshop combines psychoeducation, nervous system regulation strategies, mindfulness, behavioural approaches, and practical coping tools to help reduce overwhelm, improve emotional balance, and develop healthier, more sustainable ways of managing stress in everyday life.",
        "We understand that attending a workshop can feel overwhelming. The workshop has been carefully designed to provide a safe, structured, and supportive environment where you can engage at a pace that feels comfortable for you, with absolutely no pressure to share personal experiences if you don\u2019t wish to.",
      ],
    },
    whoFor: {
      heading: "Who this workshop is for",
      intro: "This workshop may be particularly helpful for:",
      items: [
        "People feeling emotionally exhausted, overwhelmed, mentally drained, or close to burnout",
        "Professionals working in demanding or high-pressure environments who want practical ways to restore balance and prevent burnout",
        "Parents, caregivers, and support people who spend much of their time caring for others, often with little opportunity to rest or recharge",
        "Frontline workers, helping professionals, and community responders carrying ongoing emotional stress and responsibility",
        "People juggling multiple responsibilities across work, family, relationships, study, or everyday life who are feeling stretched, depleted, or unable to properly switch off and recover",
      ],
    },
    learn: {
      heading: "What you will learn",
      items: [
        "How chronic stress and burnout can develop and impact day-to-day life",
        "How stress and burnout can affect the brain, nervous system, emotions, energy levels, motivation, and overall wellbeing",
        "Greater understanding of stress responses, overwhelm, emotional exhaustion, and feeling \u201cstuck in survival mode\u201d",
        "Practical ways to calm and regulate the nervous system, reduce overwhelm, and improve emotional balance",
        "Practical coping strategies to support rest, recovery, healthier boundaries, and long-term wellbeing",
      ],
    },
    outcomes: {
      heading: "Expected outcomes",
      intro: "By the end of the Burnout to Balance workshop, you\u2019ll be equipped to:",
      items: [
        "Recognise the signs and impact of chronic stress, overwhelm, and burnout",
        "Understand your personal stress responses and how ongoing stress can affect your emotions, energy, and day-to-day functioning",
        "Feel more aware of when your mind and body are moving into \u201csurvival mode\u201d and know how to slow things down before reaching exhaustion",
        "Use practical grounding, regulation, and stress management strategies to feel calmer, more balanced, and better able to cope with everyday pressures",
        "Leave with practical tools and healthier coping strategies to support ongoing recovery, resilience, and long-term wellbeing",
      ],
    },
    funding: {
      heading: "100% bulk billed through Medicare",
      paragraphs: [
        "These workshops are 100% bulk billed through Medicare with a valid Mental Health Treatment Plan (MHTP), meaning there are no out-of-pocket costs.",
        "A Mental Health Treatment Plan can be arranged through your GP. If you already have a current and valid plan in place, there is no need to obtain a new referral.",
        "Under Medicare, you can access up to 10 individual therapy sessions and 10 group therapy sessions each calendar year. Importantly, attending a workshop does not reduce your access to individual therapy sessions.",
      ],
    },
    facilitatorBio: {
      name: "Lisa Arnold",
      role: "Director / Clinical Psychologist",
      paragraphs: [
        "Lisa Arnold has over 25 years of clinical experience supporting individuals experiencing chronic stress, burnout, anxiety, trauma, and complex mental health presentations.",
        "Lisa developed the Burnout to Balance Workshop after seeing increasing numbers of people struggling with emotional exhaustion, overwhelm, mental fatigue, and the pressure of constantly pushing through daily demands. Through her extensive clinical experience, Lisa understands that burnout often develops gradually, leaving many people feeling emotionally drained, disconnected, irritable, unmotivated, or unable to properly switch off and recover.",
        "Known for her warm, practical, and down-to-earth approach, Lisa has carefully designed this workshop to provide a supportive, structured, and non-judgemental environment where you can better understand stress and burnout, while learning realistic strategies to support recovery and long-term wellbeing.",
        "Rather than providing generic information, the workshop focuses on helping you understand the \u201cwhy\u201d behind stress, overwhelm, emotional exhaustion, and burnout, while learning practical tools and strategies that can be realistically applied in everyday life. The workshop draws from a range of evidence-based psychological approaches, including Cognitive Behavioural Therapy (CBT), Behavioural Activation, mindfulness, nervous system regulation, and psychoeducation, helping you explore different strategies and discover what works best for you.",
      ],
    },
    faqs: [
      {
        question: "Is this suitable if I already see a psychologist?",
        answer:
          "Yes. Many people attend our workshops alongside individual therapy. The workshop is designed to complement individual psychological treatment by providing additional psychoeducation, practical tools, and coping strategies that can support progress between sessions. The workshop does not replace individual therapy or personalised psychological care. If you\u2019re unsure whether the workshop is suitable for your current situation, our friendly team at Picton Psychology are more than happy to discuss this with you.",
      },
      {
        question: "Will this fix burnout?",
        answer:
          "The workshop is designed to help you better understand stress and burnout, while learning practical tools and strategies that may support recovery, emotional wellbeing, stress management, and long-term self-management. Many people find the workshop helpful in increasing insight, improving coping strategies, and feeling more balanced, emotionally regulated, and in control moving forward.",
      },
      {
        question: "Do I need to participate in group discussion?",
        answer:
          "There is absolutely no pressure to participate or share personal experiences if you do not feel comfortable doing so. Everyone is encouraged and supported to engage at a pace that feels right for you. Some people prefer to actively participate in discussions, while others feel more comfortable sitting back, listening, and taking in the information — both are completely okay and fully supported throughout the workshop.",
      },
      {
        question: "Is the workshop online or in person?",
        answer:
          "The workshop is facilitated in person at Picton Psychology in a small, supportive group setting. We intentionally keep our groups face-to-face, as many people find this creates a more comfortable, connected, and supportive environment for learning and skill-building. Our workshops are also fully bulk billed through Medicare, and current Medicare guidelines for group programs delivered via telehealth are limited to specific rural and remote locations.",
      },
      {
        question: "What if I can\u2019t attend the workshop? Will there be a cancellation fee?",
        answer:
          "We understand that unexpected things can happen, and if you\u2019re unable to attend, we ask for at least 7 days\u2019 notice where possible. Our workshops are intentionally kept small to provide a supportive environment, and Medicare group programs are required to meet specific attendance and billing requirements. Because your place is reserved specifically for you, late cancellations can impact the viability of the workshop for others. For this reason, cancellations made within 7 days of the workshop may still be billed in line with Medicare group therapy guidelines and the consent form provided during onboarding. If something unexpected arises, please contact us as soon as possible so we can discuss your situation and support you where we can.",
      },
      {
        question: "How do I know whether the workshop or individual therapy is the best fit for me?",
        answer:
          "Our workshops are designed to provide psychoeducation, practical coping strategies, and a supportive environment to help you better understand your symptoms and learn tools that can be applied in everyday life. Many people find workshops helpful as a starting point, alongside individual therapy, or as additional support between sessions. Individual therapy may be more suitable if you are looking for personalised support, ongoing treatment, or a space to explore your experiences in greater depth with a psychologist. Some people choose to attend both, while others begin with the workshop to build understanding and practical skills before deciding whether they would benefit from further individual support. If you are unsure which option may be the best fit, our friendly team are more than happy to help guide you.",
      },
    ],
    closing: {
      heading: "Ready to take the next step?",
      paragraphs: [
        "If you feel this workshop may benefit you, we understand that reaching out or trying something new can sometimes feel overwhelming.",
        "Our friendly team at Picton Psychology are more than happy to answer any questions you may have and provide further information about workshop dates, suitability, and the next steps for joining the program. Lisa looks forward to meeting you and supporting you in a safe, supportive, and structured environment, where you can learn practical tools and strategies at a pace that feels comfortable for you.",
      ],
    },
  },
]

export function getWorkshop(slug: string) {
  return workshops.find((w) => w.slug === slug)
}

export function getWorkshopSlugs() {
  return workshops.map((w) => w.slug)
}
