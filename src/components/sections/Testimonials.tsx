import { testimonials } from "@/content/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  if (testimonials.length === 0) return null;

  return (
    <section id="testemunhos" className="section section--line">
      <div className="container">
        <SectionHeading
          eyebrow="Testemunhos"
          strong="O que dizem"
          soft="os nossos alunos."
          align="center"
        />
        <div className="cards">
          {testimonials.map((testimonial) => (
            <figure key={testimonial.author} className="quote" data-reveal>
              <blockquote>{testimonial.quote}</blockquote>
              <figcaption>
                <strong>{testimonial.author}</strong>
                <span>{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
