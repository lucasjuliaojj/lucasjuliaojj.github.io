import { business } from "@/content/site";

const DEFAULT_MESSAGE =
  "Olá! Gostaria de agendar uma aula experimental de Jiu-Jítsu.";

export function whatsappUrl(message: string = DEFAULT_MESSAGE): string {
  const phone = business.phoneE164.replace("+", "");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function programWhatsappUrl(programName: string): string {
  return whatsappUrl(
    `Olá! Gostaria de agendar uma aula experimental de ${programName}.`,
  );
}

export const phoneUrl = `tel:${business.phoneE164}`;

export const instagramUrl = `https://www.instagram.com/${business.instagram}/`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${business.street}, ${business.locality}, Portugal`,
)}`;

export const complaintsBookUrl = "https://www.livroreclamacoes.pt/inicio";
