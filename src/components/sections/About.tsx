import {
  Brain,
  Handshake,
  Shield,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { about, stats, values, type Value } from "@/content/site";

const VALUE_ICONS: Record<Value["id"], LucideIcon> = {
  disciplina: Shield,
  foco: Brain,
  respeito: Handshake,
  evolucao: TrendingUp,
};

export function About() {
  return (
    <section id="sobre" className="section">
      <div className="container about">
        <div className="about__photo" data-reveal>
          <Image
            src="/images/black-belt.webp"
            alt={about.photoAlt}
            width={1200}
            height={1520}
            sizes="(max-width: 900px) 100vw, 45vw"
          />
        </div>
        <div className="about__body">
          <div className="heading" data-reveal>
            <p className="eyebrow">Sobre</p>
            <h2>
              Mais que luta,{" "}
              <span className="heading__soft">um estilo de vida.</span>
            </h2>
          </div>
          <div className="about__text" data-reveal>
            {about.text.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {stats.length > 0 && (
            <dl className="stats" data-reveal>
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dd>{stat.value}</dd>
                  <dt>{stat.label}</dt>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>

      <div className="container">
        <ul className="values">
          {values.map((value) => {
            const Icon = VALUE_ICONS[value.id];
            return (
              <li key={value.id} data-reveal>
                <Icon size={30} strokeWidth={1.5} aria-hidden="true" />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
