/**
 * All site content lives here. Everything marked "From the posters" came from
 * the school's posters. Empty lists hide their section until real content exists.
 */

export type Weekday = "seg" | "ter" | "qua" | "qui" | "sex" | "sab" | "dom";

export interface Session {
  days: Weekday[];
  /** 24-hour time, "HH:MM". */
  start: string;
  end: string;
}

export interface Program {
  id: string;
  name: string;
  /** Short name used inside the timetable. */
  shortName: string;
  label: string;
  description: string;
  /** Path in public/. */
  icon: string;
  sessions: Session[];
  benefits: string[];
}

export interface Value {
  id: "disciplina" | "foco" | "respeito" | "evolucao";
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Coach {
  name: string;
  role: string;
  bio: string;
  /** Path in public/. */
  photo: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export interface Plan {
  name: string;
  /** Price in euros. */
  price: number;
  period: string;
  description: string;
  features: string[];
  featured?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// From the posters.
export const business = {
  name: "Lucas Julião Jiu-Jítsu",
  tagline: "Mais que luta, um estilo de vida.",
  phoneDisplay: "926 109 422",
  phoneE164: "+351926109422",
  instagram: "lucasjuliao_jiujitsu",
  street: "Rua Afonso Costa 1293",
  locality: "Quinta do Conde",
  countryCode: "PT",
} as const;

export const hero = {
  eyebrow: `Jiu-Jítsu na ${business.locality}`,
  titleStrong: "Jiu-Jítsu",
  titleSoft: "para todos os níveis.",
  subtitle: "Do iniciante ao avançado. Crianças e adultos.",
  photoAlt:
    "Treinador de braços cruzados, com rash guard preta Lucas Julião Jiu-Jítsu",
};

export const about = {
  text: [
    `A ${business.name} ensina Jiu-Jítsu a crianças e adultos na ${business.locality}, do primeiro treino ao nível avançado.`,
    "Os adultos treinam com kimono ou em No-Gi, e as crianças têm aulas próprias.",
  ],
  photoAlt:
    "Faixa preta com o logótipo Lucas Julião atada sobre um kimono branco",
};

// The four value names are from the posters. The descriptions are draft copy.
export const values: Value[] = [
  {
    id: "disciplina",
    title: "Disciplina",
    description: "Presença e constância, treino após treino.",
  },
  {
    id: "foco",
    title: "Foco",
    description: "Atenção total ao que está a aprender.",
  },
  {
    id: "respeito",
    title: "Respeito",
    description: "Pelo parceiro de treino, pelo professor e por si próprio.",
  },
  {
    id: "evolucao",
    title: "Evolução",
    description: "Cada aula é um passo em frente, ao seu ritmo.",
  },
];

// From the posters: names, days, times and benefits.
const adultBenefits = [
  "Saúde física e mental",
  "Disciplina",
  "Autoconfiança",
  "Novos amigos",
];

export const programs: Program[] = [
  {
    id: "kids",
    name: "Kids",
    shortName: "Kids",
    label: "Jiu-Jítsu infantil",
    description: "Aulas próprias para crianças.",
    icon: "/icons/kids.svg",
    sessions: [{ days: ["seg", "qua", "sex"], start: "19:00", end: "19:50" }],
    benefits: [
      "Disciplina",
      "Respeito",
      "Concentração",
      "Socialização",
      "Evolução",
    ],
  },
  {
    id: "adulto-kimono",
    name: "Adulto Kimono",
    shortName: "Kimono",
    label: "Com kimono",
    description: "Jiu-Jítsu para adultos, treinado com kimono.",
    icon: "/icons/kimono.svg",
    sessions: [{ days: ["seg", "qua", "sex"], start: "20:00", end: "21:00" }],
    benefits: adultBenefits,
  },
  {
    id: "adulto-no-gi",
    name: "Adulto No-Gi",
    shortName: "No-Gi",
    label: "Sem kimono",
    description: "Jiu-Jítsu para adultos, treinado sem kimono.",
    icon: "/icons/nogi.svg",
    sessions: [{ days: ["ter", "qui"], start: "20:00", end: "21:00" }],
    benefits: adultBenefits,
  },
];

// Hidden until Lucas supplies real content. See the questions doc.
export const stats: Stat[] = [];
export const coaches: Coach[] = [];
export const testimonials: Testimonial[] = [];
export const plans: Plan[] = [];

// Answers use only what the posters state.
export const faq: FaqItem[] = [
  {
    question: "Preciso de experiência para começar?",
    answer: "Não. As aulas são para todos os níveis, do iniciante ao avançado.",
  },
  {
    question: "Há aulas para crianças?",
    answer:
      "Sim. As crianças têm aulas próprias de Jiu-Jítsu infantil. Os dias e as horas estão na secção de horários.",
  },
  {
    question: "Qual é a diferença entre Kimono e No-Gi?",
    answer:
      "Nas aulas de Kimono treina-se com kimono. Nas aulas de No-Gi treina-se sem kimono.",
  },
  {
    question: "Como agendo uma aula experimental?",
    answer: `Envie uma mensagem por WhatsApp para o ${business.phoneDisplay} ou pelo Instagram @${business.instagram}.`,
  },
  {
    question: "Onde ficam as aulas?",
    answer: `Na ${business.street}, ${business.locality}.`,
  },
];
