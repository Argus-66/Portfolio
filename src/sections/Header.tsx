"use client";

import React, { useState, useEffect } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    const getActiveSection = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = section.offsetTop - 100; // Adjust this value as needed
        if (scrollPosition >= sectionTop) {
          return section.id;
        }
      }

      return "hero"; // Default to "hero" if no section is found
    };

    const updateActiveSection = () => {
      const currentSection = getActiveSection();
      setActiveSection(currentSection);
    };

    // Set initial active section
    updateActiveSection();

    // Add event listeners
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", updateActiveSection);
    };
  }, []);

  return (
    <div className={`fixed top-0 w-full transition-all duration-500 z-[100]`}>
      <div 
        className={`absolute top-0 w-full h-16 
          ${isScrolled 
            ? "bg-gray-950/80 backdrop-blur-md shadow-lg" 
            : "bg-transparent"
          } transition-all duration-500`}>
      </div>

      <div className="relative flex justify-center items-center h-16">
        <nav className={`flex gap-1 p-0.5 border ${isScrolled ? 'border-white/15 bg-gray-900/50' : 'border-white/10 bg-white/5'} rounded-full backdrop-blur-md shadow-lg transition-all duration-300`}>
          <a 
            href="#hero" 
            className={`nav-item relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeSection === "hero" 
                ? "text-white bg-white/10" 
                : "text-white/70 hover:text-white hover:bg-white/5"}`}
          >
            Home
            {activeSection === "hero" && (
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300/20 to-sky-400/20 animate-pulse"></span>
            )}
          </a>
          <a 
            href="#projects" 
            className={`nav-item relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeSection === "projects" 
                ? "text-white bg-white/10" 
                : "text-white/70 hover:text-white hover:bg-white/5"}`}
          >
            Projects
            {activeSection === "projects" && (
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300/20 to-sky-400/20 animate-pulse"></span>
            )}
          </a>
          <a 
            href="#achievements" 
            className={`nav-item relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeSection === "achievements" 
                ? "text-white bg-white/10" 
                : "text-white/70 hover:text-white hover:bg-white/5"}`}
          >
            Achievements
            {activeSection === "achievements" && (
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300/20 to-sky-400/20 animate-pulse"></span>
            )}
          </a>
          <a 
            href="#about" 
            className={`nav-item relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeSection === "about" 
                ? "text-white bg-white/10" 
                : "text-white/70 hover:text-white hover:bg-white/5"}`}
          >
            About
            {activeSection === "about" && (
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300/20 to-sky-400/20 animate-pulse"></span>
            )}
          </a>
          <a 
            href="#contact" 
            className={`nav-item relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${activeSection === "contact" 
                ? "text-white bg-white/10" 
                : "text-white/70 hover:text-white hover:bg-white/5"}`}
          >
            Contact
            {activeSection === "contact" && (
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300/20 to-sky-400/20 animate-pulse"></span>
            )}
          </a>
        </nav>
      </div>
    </div>
  );
};

export default Header;