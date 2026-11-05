"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/links";
import { LogoLockup } from "@/components/ui/Logo";

export interface NavLink {
  href: string;
  label: string;
}

export function Header({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const className = [
    "site-header",
    scrolled || open ? "site-header--solid" : "",
  ].join(" ");

  return (
    <header className={className}>
      <div className="container site-header__inner">
        <a href="#inicio" aria-label="Início" onClick={() => setOpen(false)}>
          <LogoLockup />
        </a>

        <nav className="site-nav" aria-label="Principal">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="button button--primary button--small site-header__cta"
          href={whatsappUrl()}
          target="_blank"
          rel="noreferrer"
        >
          Aula experimental
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Menu">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="button button--primary"
            href={whatsappUrl()}
            target="_blank"
            rel="noreferrer"
          >
            Agendar aula experimental
          </a>
        </nav>
      )}
    </header>
  );
}
