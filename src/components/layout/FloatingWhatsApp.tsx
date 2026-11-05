"use client";

import { useEffect, useState } from "react";
import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { whatsappUrl } from "@/lib/links";

/** Phone-only shortcut, shown once the hero's own buttons have scrolled away. */
export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () =>
      setVisible(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      className={`floating-whatsapp ${visible ? "floating-whatsapp--visible" : ""}`}
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Agendar pelo WhatsApp"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
