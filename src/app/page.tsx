import { Header } from "@/sections/Header";
import { Hero } from "@/sections/HeroMaster";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialsSection } from "@/sections/Testimonials";
import { AboutSection } from "@/sections/About";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ProjectsSection />
      <TapeSection />
      <TestimonialsSection />
      <AboutSection />
    </div>
  );
}
