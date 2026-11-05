import { business } from "@/content/site";
import { complaintsBookUrl, instagramUrl, whatsappUrl } from "@/lib/links";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
import type { NavLink } from "@/components/layout/Header";
import { LogoLockup } from "@/components/ui/Logo";

export function Footer({ links }: { links: NavLink[] }) {
  return (
    <footer className="site-footer">
      <div className="container site-footer__top">
        <LogoLockup size="large" />
        <p>{business.tagline}</p>
        <div className="site-footer__social">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <WhatsAppIcon size={22} />
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon size={22} />
          </a>
        </div>
        <nav aria-label="Rodapé">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="container site-footer__bottom">
        <span>
          © {new Date().getFullYear()} {business.name}
        </span>
        <a href={complaintsBookUrl} target="_blank" rel="noreferrer">
          Livro de Reclamações
        </a>
      </div>
    </footer>
  );
}
