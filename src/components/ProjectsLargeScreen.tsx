"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import PortfolioProjects from './PortfolioProjects';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const PortfolioGallery: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState(PortfolioProjects[0]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const selectProject = (index: number) => {
        if (isTransitioning || index === currentIndex) return;
        
        setIsTransitioning(true);
        setCurrentIndex(index);
        setSelectedProject(PortfolioProjects[index]);
        
        // Reset transitioning state after animation completes
        setTimeout(() => setIsTransitioning(false), 500);
    };

    const nextProject = () => {
        selectProject((currentIndex + 1) % PortfolioProjects.length);
    };

    const prevProject = () => {
        selectProject((currentIndex - 1 + PortfolioProjects.length) % PortfolioProjects.length);
    };

    // Auto-rotate through projects
    useEffect(() => {
        const intervalId = setInterval(() => {
            if (!isTransitioning) {
                nextProject();
            }
        }, 8000);
        
        return () => clearInterval(intervalId);
    }, [currentIndex, isTransitioning]);

    return (
        <div className="bg-gray-900/80 backdrop-blur-md rounded-3xl relative min-h-screen p-4 md:p-8 mt-16 border border-white/10 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 to-blue-900/5 rounded-3xl"></div>
            <div className="max-w-7xl mx-auto z-10 relative">
                
                {/* Main Project Display */}
                <div className="relative mb-8 group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 opacity-30 blur-xl rounded-3xl group-hover:opacity-40 transition-opacity duration-300"></div>
                    <div className="w-full overflow-hidden rounded-3xl relative">
                        <Image
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-in-out group-hover:scale-105"
                            width={1800}
                            height={1400}
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <button
                        onClick={prevProject}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-900/60 hover:bg-gray-900/90 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 group-hover:left-6 opacity-80 hover:opacity-100"
                        aria-label="Previous project"
                        disabled={isTransitioning}
                    >
                        <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                    <button
                        onClick={nextProject}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-900/60 hover:bg-gray-900/90 text-white p-3 md:p-4 rounded-full shadow-lg transition-all duration-300 group-hover:right-6 opacity-80 hover:opacity-100"
                        aria-label="Next project"
                        disabled={isTransitioning}
                    >
                        <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                    </button>
                </div>

                {/* Project Thumbnails */}
                <div className="flex justify-center space-x-3 md:space-x-4 mb-10 overflow-x-auto pb-4 px-4">
                    {PortfolioProjects.map((project, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer transition-all duration-500 flex-shrink-0 relative
                                ${index === currentIndex 
                                  ? 'scale-110 z-10' 
                                  : 'opacity-70 hover:opacity-100 filter grayscale hover:grayscale-0'
                                }`}
                            onClick={() => selectProject(index)}
                        >
                            <div className={`absolute inset-0 rounded border-2 ${index === currentIndex ? 'border-emerald-400 animate-pulse' : 'border-transparent'}`}></div>
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="w-24 h-16 md:w-32 md:h-20 object-cover rounded shadow-md"
                                width={128}
                                height={80}
                            />
                        </div>
                    ))}
                </div>

                {/* Project Details */}
                <div className="bg-gray-800/90 backdrop-blur-md rounded-xl shadow-lg p-6 md:p-10 max-w-4xl mx-auto border border-white/5">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6">
                        <div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-white">{selectedProject.title}</h2>
                            <p className="text-xl md:text-2xl lg:text-2xl bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text font-semibold">
                                {selectedProject.company} - {selectedProject.year}
                            </p>
                        </div>
                        <div className="flex gap-2 mt-3 md:mt-0">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-900/50 text-purple-200 border border-purple-600/30">
                                {PortfolioProjects.indexOf(selectedProject) + 1}/{PortfolioProjects.length}
                            </span>
                        </div>
                    </div>
                    
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent my-6"></div>
                    
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">Key Results:</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                        {selectedProject.results.map((result, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <span className="text-emerald-400 mt-1">•</span>
                                <span className="text-[#96bcf7] text-lg">{result.title}</span>
                            </li>
                        ))}
                    </ul>
                    
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                        <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white h-12 lg:h-14 lg:text-xl w-full md:w-auto px-6 lg:px-10 rounded-xl font-semibold inline-flex items-center justify-center gap-2 shadow-xl hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1">
                            <span>Visit Live Site</span>
                            <ArrowUpRightIcon className="size-5" />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PortfolioGallery;