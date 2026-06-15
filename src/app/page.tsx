"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Partners from "@/components/Partners";
import Support from "@/components/Support";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main style={{ paddingTop: 80 }}>
        <Hero />
        <About />
        <Solutions />
        <Partners />
        <Support />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
