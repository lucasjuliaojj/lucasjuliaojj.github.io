import { Plus } from "lucide-react";
import { faq } from "@/content/site";
import { whatsappUrl } from "@/lib/links";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq() {
  return (
    <section id="perguntas" className="section section--line">
      <div className="container faq">
        <div className="faq__intro">
          <SectionHeading
            eyebrow="Dúvidas"
            strong="Perguntas"
            soft="frequentes."
          />
          <p data-reveal>Tem outra pergunta? Fale connosco.</p>
          <a
            className="button button--ghost"
            href={whatsappUrl("Olá! Tenho uma pergunta sobre as aulas.")}
            target="_blank"
            rel="noreferrer"
            data-reveal
          >
            Enviar mensagem
          </a>
        </div>
        <div className="faq__list" data-reveal>
          {faq.map((item) => (
            <details key={item.question}>
              <summary>
                {item.question}
                <Plus size={20} aria-hidden="true" />
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
