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
    <div className={`fixed top-0 w-full transition-all duration-300 z-[10]`}>
      <div className={`absolute top-0 w-full h-16 bg-[#030014] ${isScrolled ? "backdrop-blur-0" : "backdrop-blur-md"} transition-all duration-300`}></div>

      <div className="relative flex justify-center items-center h-16">
        <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
          <a href="#hero" className={`nav-item ${activeSection === "hero" ? "active" : ""}`}>Home</a>
          <a href="#projects" className={`nav-item ${activeSection === "projects" ? "active" : ""}`}>Projects</a>
          <a href="#about" className={`nav-item ${activeSection === "about" ? "active" : ""}`}>About</a>
          <a href="#contact" className={`nav-item ${activeSection === "contact" ? "active" : ""}`}>Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;