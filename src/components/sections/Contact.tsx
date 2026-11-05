import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import type { ReactNode } from "react";
import { business } from "@/content/site";
import { instagramUrl, mapsUrl, phoneUrl, whatsappUrl } from "@/lib/links";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
import { LogoMark } from "@/components/ui/Logo";

interface ContactLink {
  href: string;
  icon: ReactNode;
  label: string;
  value: string;
  external: boolean;
}

const LINKS: ContactLink[] = [
  {
    href: whatsappUrl(),
    icon: <WhatsAppIcon size={24} />,
    label: "WhatsApp",
    value: business.phoneDisplay,
    external: true,
  },
  {
    href: phoneUrl,
    icon: <Phone size={24} aria-hidden="true" />,
    label: "Telefone",
    value: business.phoneDisplay,
    external: false,
  },
  {
    href: instagramUrl,
    icon: <InstagramIcon size={24} />,
    label: "Instagram",
    value: `@${business.instagram}`,
    external: true,
  },
  {
    href: mapsUrl,
    icon: <MapPin size={24} aria-hidden="true" />,
    label: "Morada",
    value: `${business.street}, ${business.locality}`,
    external: true,
  },
];

export function Contact() {
  return (
    <section id="contacto" className="section section--line contact">
      <LogoMark className="contact__watermark" />
      <div className="container contact__inner">
        <div className="heading" data-reveal>
          <p className="eyebrow">Contacto</p>
          <h2>
            Agende a sua{" "}
            <span className="heading__soft">aula experimental.</span>
          </h2>
        </div>
        <ul className="contact__links">
          {LINKS.map((link) => (
            <li key={link.label} data-reveal>
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                <span className="contact__icon">{link.icon}</span>
                <span className="contact__text">
                  <span>{link.label}</span>
                  <strong>{link.value}</strong>
                </span>
                <ArrowUpRight size={20} aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
