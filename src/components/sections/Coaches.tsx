import Image from "next/image";
import { coaches } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Coaches() {
  if (coaches.length === 0) return null;

  return (
    <section id="equipa" className="section section--line">
      <div className="container">
        <SectionHeading
          eyebrow="Equipa"
          strong="Quem está"
          soft="consigo no tatame."
          align="center"
        />
        <div className="cards">
          {coaches.map((coach) => (
            <article key={coach.name} className="coach" data-reveal>
              <Image
                src={coach.photo}
                alt={coach.name}
                width={640}
                height={800}
              />
              <h3>{coach.name}</h3>
              <p className="eyebrow">{coach.role}</p>
              <p>{coach.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
