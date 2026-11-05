import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import { business, hero } from "@/content/site";
import { assetPath } from "@/lib/assets";
import { mapsUrl, whatsappUrl } from "@/lib/links";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__photo">
        <Image
          src={assetPath("/images/trainer-hero.webp")}
          alt={hero.photoAlt}
          width={1280}
          height={1950}
          sizes="(max-width: 900px) 100vw, 45vw"
          priority
        />
      </div>

      <div className="container hero__content">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>
          {hero.titleStrong}
          <span className="hero__soft">{hero.titleSoft}</span>
        </h1>
        <p className="hero__subtitle">{hero.subtitle}</p>
        <div className="hero__actions">
          <a
            className="button button--primary"
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon />
            Agendar aula experimental
          </a>
          <a className="button button--ghost" href="#horarios">
            Ver horários
            <ArrowRight size={18} aria-hidden="true" />
          </a>
        </div>
        <a
          className="hero__address"
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
        >
          <MapPin size={18} aria-hidden="true" />
          {business.street}, {business.locality}
        </a>
      </div>
    </section>
  );
}
