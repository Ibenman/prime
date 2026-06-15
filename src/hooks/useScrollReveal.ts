"use client";

import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    // Fallback: make everything visible after 1s for no-JS / SSR
    const timer = setTimeout(() => {
      elements.forEach((el) => el.classList.add("visible"));
    }, 800);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);
}
