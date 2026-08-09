import { About } from "@/components/About";
import { ChatAssistant } from "@/components/ChatAssistant";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-0 grid-overlay" aria-hidden />
      <Navbar />
      <main className="relative z-10 flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatAssistant />
    </>
  );
}
