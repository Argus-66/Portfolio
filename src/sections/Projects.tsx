import React from 'react';
import ProjectPhoneScreen from "../components/ProjectPhoneScreen";
import ProjectsLargeScreen from "../components/ProjectsLargeScreen";

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-4">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          Discover how I bring ideas to life, creating immersive and engaging digital experiences.
        </p>
        
        {/* Phone Screen (visible on small screens, hidden on medium and up) */}
        <div className="md:hidden">
          <ProjectPhoneScreen />
        </div>

        {/* Large Screen (hidden on small screens, visible on medium and up) */}
        <div className="hidden md:block w-[100%]">
          <ProjectsLargeScreen />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;