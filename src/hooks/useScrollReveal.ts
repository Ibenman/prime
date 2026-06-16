"use client";

import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    // Small delay to ensure CSS is fully loaded
    const startTimeout = setTimeout(() => {
      const selector = ".reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade, .stagger-child";
      const elements = document.querySelectorAll(selector);

      if (elements.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
      );

      elements.forEach((el) => observer.observe(el));

      // Re-observe after a short delay in case CSS wasn't ready
      const recheckTimeout = setTimeout(() => {
        elements.forEach((el) => {
          if (!el.classList.contains("revealed")) {
            const rect = el.getBoundingClientRect();
            const inView = rect.top < window.innerHeight && rect.bottom > 0;
            if (inView) {
              el.classList.add("revealed");
            }
          }
        });
      }, 300);

      return () => {
        observer.disconnect();
        clearTimeout(recheckTimeout);
      };
    }, 100);

    return () => clearTimeout(startTimeout);
  }, []);
}
