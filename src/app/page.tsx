import { Header } from "@/sections/Header";
import { Hero } from "@/sections/HeroMaster";
import { ProjectsSection } from "@/sections/Projects";



export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ProjectsSection />
    </div>
  );
}
