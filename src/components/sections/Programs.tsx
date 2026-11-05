import { ArrowRight, CalendarDays, Check, Clock } from "lucide-react";
import Image from "next/image";
import { programs } from "@/content/site";
import { assetPath } from "@/lib/assets";
import { programWhatsappUrl } from "@/lib/links";
import { formatDays } from "@/lib/schedule";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Programs() {
  return (
    <section id="aulas" className="section section--line">
      <div className="container">
        <SectionHeading
          eyebrow="Aulas"
          strong="Encontre a aula"
          soft="certa para si."
          align="center"
        />
        <div className="programs">
          {programs.map((program) => (
            <article key={program.id} className="program" data-reveal>
              <Image
                className="program__icon"
                src={assetPath(program.icon)}
                alt=""
                width={120}
                height={100}
              />
              <p className="eyebrow">{program.label}</p>
              <h3>{program.name}</h3>
              <p className="program__description">{program.description}</p>

              {program.sessions.map((session) => (
                <dl key={session.start} className="program__session">
                  <div>
                    <dt>
                      <CalendarDays size={18} aria-hidden="true" />
                      <span className="sr-only">Dias</span>
                    </dt>
                    <dd>{formatDays(session.days)}</dd>
                  </div>
                  <div>
                    <dt>
                      <Clock size={18} aria-hidden="true" />
                      <span className="sr-only">Hora</span>
                    </dt>
                    <dd>
                      {session.start} às {session.end}
                    </dd>
                  </div>
                </dl>
              ))}

              <ul className="program__benefits">
                {program.benefits.map((benefit) => (
                  <li key={benefit}>
                    <Check size={16} aria-hidden="true" />
                    {benefit}
                  </li>
                ))}
              </ul>

              <a
                className="link-arrow"
                href={programWhatsappUrl(program.name)}
                target="_blank"
                rel="noreferrer"
              >
                Agendar esta aula
                <ArrowRight size={16} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
