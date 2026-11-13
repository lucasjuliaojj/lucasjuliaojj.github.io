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
    "Há turmas para crianças dos 4 aos 13 anos e para adultos, iniciantes e avançados.",
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
    label: "De 4 a 8 anos",
    description: "Aulas próprias para as crianças mais pequenas.",
    icon: "/icons/kids.svg",
    sessions: [{ days: ["seg", "qua", "sex"], start: "19:00", end: "20:00" }],
    benefits: [
      "Disciplina",
      "Respeito",
      "Concentração",
      "Socialização",
      "Evolução",
    ],
  },
  {
    id: "infantil",
    name: "Infantil",
    shortName: "Infantil",
    label: "De 9 a 13 anos",
    description: "Aulas para crianças e pré-adolescentes.",
    icon: "/icons/kids.svg",
    sessions: [{ days: ["ter", "qui"], start: "19:00", end: "20:00" }],
    benefits: [
      "Disciplina",
      "Respeito",
      "Concentração",
      "Socialização",
      "Evolução",
    ],
  },
  {
    id: "adultos-iniciantes",
    name: "Adultos Iniciantes",
    shortName: "Iniciantes",
    label: "Adultos",
    description: "Para quem está a começar no Jiu-Jítsu.",
    icon: "/icons/kimono.svg",
    sessions: [{ days: ["ter", "qui"], start: "20:00", end: "21:00" }],
    benefits: adultBenefits,
  },
  {
    id: "adultos-avancados",
    name: "Adultos Avançados",
    shortName: "Avançados",
    label: "Adultos",
    description: "Para quem já treina e quer evoluir.",
    icon: "/icons/kimono.svg",
    sessions: [{ days: ["seg", "qua", "sex"], start: "20:00", end: "21:00" }],
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
    question: "Qual é a turma certa para mim?",
    answer:
      "Crianças dos 4 aos 8 anos: Kids. Dos 9 aos 13 anos: Infantil. Adultos: Iniciantes ou Avançados.",
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
