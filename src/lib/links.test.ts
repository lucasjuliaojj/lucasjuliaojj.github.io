import { describe, expect, it } from "vitest";
import { instagramUrl, mapsUrl, phoneUrl, whatsappUrl } from "./links";

describe("contact links", () => {
  it("builds a WhatsApp link with the Portuguese country code", () => {
    const url = new URL(whatsappUrl("Olá!"));
    expect(url.origin + url.pathname).toBe("https://wa.me/351926109422");
    expect(url.searchParams.get("text")).toBe("Olá!");
  });

  it("builds phone, Instagram and map links", () => {
    expect(phoneUrl).toBe("tel:+351926109422");
    expect(instagramUrl).toBe(
      "https://www.instagram.com/lucasjuliao_jiujitsu/",
    );
    expect(new URL(mapsUrl).searchParams.get("query")).toBe(
      "Rua Afonso Costa 1293, Quinta do Conde, Portugal",
    );
  });
});
