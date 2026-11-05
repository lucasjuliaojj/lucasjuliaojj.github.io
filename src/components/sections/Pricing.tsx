import { Check } from "lucide-react";
import { plans } from "@/content/site";
import { whatsappUrl } from "@/lib/links";
import { SectionHeading } from "@/components/ui/SectionHeading";

function formatEuros(price: number): string {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: Number.isInteger(price) ? 0 : 2,
  }).format(price);
}

export function Pricing() {
  if (plans.length === 0) return null;

  return (
    <section id="precos" className="section section--line">
      <div className="container">
        <SectionHeading
          eyebrow="Preços"
          strong="Planos"
          soft="simples."
          align="center"
        />
        <div className="cards">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`plan ${plan.featured ? "plan--featured" : ""}`}
              data-reveal
            >
              <h3>{plan.name}</h3>
              <p className="plan__price">
                {formatEuros(plan.price)}
                <span> / {plan.period}</span>
              </p>
              <p>{plan.description}</p>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                className="button button--ghost"
                href={whatsappUrl(
                  `Olá! Gostaria de saber mais sobre o plano ${plan.name}.`,
                )}
                target="_blank"
                rel="noreferrer"
              >
                Escolher plano
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
