"use client";

import { useEffect } from "react";

/**
 * Fades in elements marked data-reveal. Hiding happens here, after load, so
 * the page stays fully readable without JavaScript.
 */
export function ScrollReveal() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const elements = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const belowFold = [...elements].filter(
      (element) => element.getBoundingClientRect().top > window.innerHeight,
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.remove("is-hidden");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px" },
    );

    for (const element of belowFold) {
      element.classList.add("is-hidden");
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
