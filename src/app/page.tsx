import { Header } from "@/sections/Header";
import { Hero } from "@/sections/HeroMaster";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";
import { ContactSection } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <div id="hero">
        <Hero />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="tape">
        <TapeSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
