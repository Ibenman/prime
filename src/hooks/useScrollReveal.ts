"use client";

import { useEffect } from "react";

export default function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" }
    );

    document.querySelectorAll(
      ".reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade"
    ).forEach((el) => observer.observe(el));

    const timer = setTimeout(() => {
      document.querySelectorAll(
        ".reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-fade"
      ).forEach((el) => el.classList.add("revealed"));
    }, 1200);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);
}
