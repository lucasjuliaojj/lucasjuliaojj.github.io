import { About } from "@/components/sections/About";
import { Coaches } from "@/components/sections/Coaches";
import { Contact } from "@/components/sections/Contact";
import { Faq } from "@/components/sections/Faq";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { Footer } from "@/components/layout/Footer";
import { Header, type NavLink } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Programs } from "@/components/sections/Programs";
import { Schedule } from "@/components/sections/Schedule";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Testimonials } from "@/components/sections/Testimonials";
import { business, coaches, plans } from "@/content/site";
import { instagramUrl } from "@/lib/links";

const navLinks: NavLink[] = [
  { href: "#sobre", label: "Sobre" },
  { href: "#aulas", label: "Aulas" },
  { href: "#horarios", label: "Horários" },
  ...(coaches.length > 0 ? [{ href: "#equipa", label: "Equipa" }] : []),
  ...(plans.length > 0 ? [{ href: "#precos", label: "Preços" }] : []),
  { href: "#perguntas", label: "Perguntas" },
  { href: "#contacto", label: "Contacto" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: business.name,
  description: business.tagline,
  telephone: business.phoneE164,
  sameAs: [instagramUrl],
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    addressLocality: business.locality,
    addressCountry: business.countryCode,
  },
};

export default function HomePage() {
  return (
    <>
      <Header links={navLinks} />
      <main>
        <Hero />
        <About />
        <Programs />
        <Schedule />
        <Coaches />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
      </main>
      <Footer links={navLinks} />
      <FloatingWhatsApp />
      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
