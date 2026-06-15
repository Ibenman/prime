"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Process from "@/components/Process";
import Partners from "@/components/Partners";
import Testimonials from "@/components/Testimonials";
import Support from "@/components/Support";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import useScrollReveal from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Process />
        <Partners />
        <Testimonials />
        <Support />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
