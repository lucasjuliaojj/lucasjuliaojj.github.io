import type { Metadata, Viewport } from "next";
import { Barlow, Barlow_Condensed, Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import { business, hero } from "@/content/site";
import "./globals.css";

const body = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display",
});

const brand = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-brand",
});

const title = `${business.name} | ${business.locality}`;
const description = `Aulas de Jiu-Jítsu na ${business.locality}, para crianças e adultos. ${hero.subtitle} Agende a sua aula experimental.`;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  ),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    locale: "pt_PT",
    siteName: business.name,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-PT"
      className={`${body.variable} ${display.variable} ${brand.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
