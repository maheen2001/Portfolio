import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Background3D from "@/components/Background3D";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <>
      <Background3D />
      <Header />
      <main>
        <Hero />
        <ScrollReveal>
          <About />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Skills />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Projects />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Experience />
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
