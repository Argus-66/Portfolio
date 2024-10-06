"use client";

import { useState, useEffect } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Create an Intersection Observer to track sections
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className={`fixed top-0 w-full transition-all duration-300 ${isScrolled ? "z-[10]" : "z-[2]"}`}>
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
