export type Clinician = {
  name: string
  role: string
  image: string
  alt: string
  bio: string[]
  referrals?: string
  availability?: string
}

export type SupportMember = {
  name: string
  role: string
  image: string
  alt: string
  bio: string[]
}

export const clinicians: Clinician[] = [
  {
    name: "Lisa Arnold",
    role: "Director / Clinical Psychologist",
    image: "/images/team/lisa-arnold.png",
    alt: "Portrait of Lisa Arnold, Director and Clinical Psychologist",
    bio: [
      "Founder of Picton Psychology, Lisa is a Clinical Psychologist with over 20 years\u2019 experience. Lisa practices an empathic and respectful approach towards treating first responders.",
      "Using sound clinical judgment to determine the most appropriate therapeutic technique, Lisa provides a flexible therapeutic approach specifically tailored to meet clients\u2019 needs. Lisa draws her therapeutic strategies from evidence-based therapies which include but are not limited to: Cognitive Behaviour Therapy, Dialectical Behaviour Therapy, Trauma-Focused Therapy, Cognitive Processing Therapy, and Mindfulness techniques.",
    ],
    referrals: "First Responders under Workcover",
    availability: "Books closed",
  },
  {
    name: "Peter Bland",
    role: "Child, Adolescent and Adult Registered Psychologist",
    image: "/images/team/peter-bland.png",
    alt: "Portrait of Peter Bland, Registered Psychologist",
    bio: [
      "Peter is a Registered Psychologist with extensive experience in the area of cognitive, educational and adaptive assessments.",
      "He specialises in cognitive, psycho-educational and functional assessments, and enjoys working with people of all ages. He believes using assessment to clarify learning, educational or cognitive difficulties can assist in tailoring interventions and recommendations specific to the client\u2019s needs.",
      "Peter has a holistic and culturally sensitive approach when working with individuals and is a strong advocate for families. Peter places strong emphasis on exploring an individual\u2019s developmental and emotional profile in order to gain a better understanding of their needs.",
    ],
    referrals: "Medicare, Private Health",
    availability: "Friday",
  },
  {
    name: "Bryan McDade",
    role: "Registered Clinical Counsellor",
    image: "/images/team/bryan-mcdade.png",
    alt: "Portrait of Bryan McDade, Registered Clinical Counsellor",
    bio: [
      "With over 16 years of experience, Bryan is a highly skilled senior therapist with a degree in psychology and a Master of Counselling. He specialises in providing both individual and relationship therapy, delivering compassionate, tailored support to help clients navigate their challenges and achieve meaningful change.",
      "Bryan has a special interest in working with trauma presentations, complex mood disorders, and relationship therapy. Bryan\u2019s expertise and empathetic approach create a supportive space for clients to explore their experiences and work toward personal and relational growth.",
      "Bryan is trained in gold-standard Eye Movement Desensitisation and Reprocessing (EMDR), Cognitive Behaviour Therapy (CBT), Mindfulness and Gottman Relationship Therapy.",
    ],
    referrals: "Workcover, Victim Services, Private Health Insurance",
    availability: "Monday, Tuesday, Wednesday",
  },
  {
    name: "Jazmine Schnalle",
    role: "Clinical Psychologist",
    image: "/images/team/jazmine-schnalle.png",
    alt: "Portrait of Jazmine Schnalle, Clinical Psychologist",
    bio: [
      "Jazmine is a Clinical Psychologist who has completed a Masters of Clinical Psychology and the Clinical Psychology Registrar program to become an endorsed Clinical Psychologist.",
      "Jazmine provides evidence-based interventions and assessments to children, adolescents and adults. She is an attentive, compassionate and empathic clinician, who places value on a client-centred approach to her work.",
      "Jazmine has experience providing services to those who may be experiencing a range of complex mental health concerns, such as anxiety, depression, behavioural and emotional difficulties, autism, ADHD and trauma. She utilises a range of evidence-based modalities including Cognitive Behaviour Therapy (CBT), Acceptance Commitment Therapy (ACT), Mindfulness, and Trauma Focused Cognitive Behaviour Therapy (TFCBT).",
    ],
    referrals: "Medicare, Private Health Insurance",
    availability: "Monday, Wednesday, Friday",
  },
  {
    name: "Kristen Mazzitelli",
    role: "Clinical Psychologist",
    image: "/images/team/kristen-mazzitelli.png",
    alt: "Portrait of Kristen Mazzitelli, Clinical Psychologist",
    bio: [
      "Kristen is a Clinical Psychologist, with experience in providing assessments and therapeutic interventions for a range of mental health presentations. She is a warm, empathetic and passionate clinician who uses a client-centered approach in her practice with adolescents and adults.",
      "Her areas of interest are anxiety, depression, stress management, trauma, attachment, ADHD, interpersonal challenges and personal development.",
      "Kristen utilises a range of evidence-based interventions including but not limited to: Cognitive Behaviour Therapy, Dialectical Behaviour Therapy, Trauma Focused Cognitive Behaviour Therapy, emotional regulation skills and mindfulness practices.",
    ],
    referrals: "Medicare, Private Health",
    availability: "Monday, Thursday",
  },
  {
    name: "Anna Oborn",
    role: "Registered Psychologist",
    image: "/images/team/anna-oborn.png",
    alt: "Portrait of Anna Oborn, Registered Psychologist",
    bio: [
      "Anna is a Registered Psychologist with over 19 years of experience. She has worked in private hospitals and private practice, supporting adults with complex mental health issues, interpersonal challenges, workplace pressures, grief and loss, chronic pain, and substance addiction.",
      "Anna has extensive experience providing telehealth services to individuals aged 18 and over, including elderly clients from rural and remote areas, ensuring accessible and compassionate care for all.",
      "Anna specialises in a range of therapy modalities, including Cognitive Behavioural Therapy, Acceptance Commitment Therapy, Dialectical Behaviour Therapy, Positive Psychology and Schema Therapy. Anna has a compassionate and empathetic approach and is passionate in terms of empowering clients with coping skills, to find a sense of purpose and to navigate life\u2019s difficulties.",
    ],
    referrals: "Workcover, Medicare, Private Health Insurance",
    availability: "Wednesday & Thursday \u2013 Telehealth appointments",
  },
  {
    name: "Julia Margin",
    role: "Provisional Psychologist | Registered Counsellor (ACA)",
    image: "/images/team/julia-margin.png",
    alt: "Portrait of Julia Margin, Provisional Psychologist and Registered Counsellor",
    bio: [
      "Julia is a compassionate and dedicated Provisional Psychologist with over six years of experience providing psychological support to adolescents (14+) and adults experiencing a range of complex mental health concerns.",
      "Julia completed her psychology training in Brazil, where she practiced and completed her training in Schema Therapy. Since relocating to Australia, Julia is completing her provisional psychologist internship pathway toward full registration with the Australian Health Practitioner Regulation Agency (AHPRA). She is also a Registered Counsellor with the Australian Counselling Association (ACA).",
      "Julia works collaboratively with clients from a compassionate, client-centred approach, helping individuals better understand their experiences, develop practical coping strategies, and build emotional resilience. She has experience supporting clients experiencing trauma, personality difficulties, grief and loss, mood and anxiety disorders, stress, and adjustment challenges, drawing on CBT, Schema Therapy, ACT, TF-CBT, and mindfulness-based approaches.",
      "As Julia is completing her provisional psychologist internship, appointments are offered at a reduced fee structure.",
    ],
    referrals: "Private Health Insurance",
    availability: "Monday and Tuesday",
  },
  {
    name: "Akua Wirekoh",
    role: "Accredited Mental Health Social Worker (AMHSW)",
    image: "/images/team/akua-wirekoh.png",
    alt: "Portrait of Akua Wirekoh, Accredited Mental Health Social Worker",
    bio: [
      "Akua is a warm and compassionate clinician with over five years of experience supporting adolescents (14+) and adults experiencing a range of complex mental health concerns.",
      "Akua holds a Master of Social Work and is an Accredited Mental Health Social Worker, a qualification recognised by Medicare to provide evidence-based psychological therapy for individuals experiencing mental health difficulties.",
      "Akua works collaboratively with clients from a client-centred and strengths-based approach, creating a safe and supportive environment where individuals feel heard, understood, and empowered in their healing journey. Her areas of interest are trauma, anxiety, mood disorders, adjustment difficulties, and interpersonal challenges, and she draws on CBT, ACT, TF-CBT, and mindfulness-based approaches.",
    ],
    referrals: "Medicare, Private Health Insurance",
    availability: "Friday",
  },
]

export const supportTeam: SupportMember[] = [
  {
    name: "Natalee Zolotas",
    role: "Director / Practice Manager",
    image: "/images/team/natalee-zolotas.png",
    alt: "Portrait of Natalee Zolotas, Director and Practice Manager",
    bio: [
      "Natalee has a background of Psychology, she manages and maintains Picton Psychology. Working closely with Lisa Arnold, all clinicians and the administration team to maintain a friendly and professional practice which she is passionate about.",
      "Natalee takes pride in providing an empathetic and professional service to all clients and other service providers.",
    ],
  },
  {
    name: "Rheanan Callaghan",
    role: "Executive Support Officer",
    image: "/images/team/rheanan-callaghan.png",
    alt: "Portrait of Rheanan Callaghan, Executive Support Officer",
    bio: [
      "Rheanan has a background of administrative management in the not-for-profit healthcare sector. Rheanan works closely with the administration team to maintain the operational and administrative sides of the practice.",
      "Rheanan prides herself on providing exceptional support to the team at Picton Psychology and highly values working in a community focused setting.",
    ],
  },
  {
    name: "Letique Dickey",
    role: "Executive Administration Officer",
    image: "/images/team/letique-dickey.png",
    alt: "Portrait of Letique Dickey, Executive Administration Officer",
    bio: [
      "Letique has a background in practice management and administration across allied health and professional service settings. With over 15 years\u2019 experience, she brings strong organisational skills, attention to detail, and a commitment to maintaining professional standards and confidentiality.",
      "As a friendly and supportive first point of contact, Letique is dedicated to ensuring clients feel welcomed and supported while helping the practice run smoothly behind the scenes.",
    ],
  },
]
