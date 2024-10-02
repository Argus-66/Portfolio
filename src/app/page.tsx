import { Header } from "@/sections/Header";
import { Hero } from "@/sections/HeroMaster";
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ProjectsSection />
      <TapeSection />
    </div>
  );
}
