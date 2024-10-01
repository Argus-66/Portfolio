"use client";
import React, { useState } from 'react';
import Image from "next/image";
import PortfolioProjects from './PortfolioProjects';
import grainImage from "@/assets/images/grain.jpg";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

const PortfolioGallery: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState(PortfolioProjects[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const selectProject = (index: number) => {
        setCurrentIndex(index);
        setSelectedProject(PortfolioProjects[index]);
    };

    const nextProject = () => {
        selectProject((currentIndex + 1) % PortfolioProjects.length);
    };

    const prevProject = () => {
        selectProject((currentIndex - 1 + PortfolioProjects.length) % PortfolioProjects.length);
    };

    return (
        <div className="bg-gray-900 rounded-3xl relative   min-h-screen p-4 md:p-8 mt-16">
            <div className="max-w-7xl mx-auto z-[1]">
                
                {/* Main Project Display */}
                <div className="relative mb-8">
                    <div className="w-full h-[300px] md:h-[400px] lg:h-[700px] overflow-hidden rounded-lg">
                        <Image
                            src={selectedProject.image}
                            alt={selectedProject.title}
                            className="w-full h-full object-cover object-center"
                            width={1800}
                            height={1400}
                        />
                    </div>
                    <button
                        onClick={prevProject}
                        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 md:p-3 rounded-full shadow-md transition-colors"
                        aria-label="Previous project"
                    >
                        <ChevronLeft className="w-3 h-3 md:w-4 md:h-4 text-gray-800" />
                    </button>
                    <button
                        onClick={nextProject}
                        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/80 hover:bg-white p-2 md:p-3 rounded-full shadow-md transition-colors"
                        aria-label="Next project"
                    >
                        <ChevronRight className="w-3 h-3 md:w-4 md:h-4 text-gray-800" />
                    </button>
                </div>

                {/* Project Thumbnails */}
                <div className="flex justify-center space-x-2 md:space-x-4 mb-8 overflow-x-auto pb-4">
                    {PortfolioProjects.map((project, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer transition-all duration-300 flex-shrink-0 ${
                                index === currentIndex ? 'scale-110 border-2 border-white' : 'opacity-70 hover:opacity-100'
                            }`}
                            onClick={() => selectProject(index)}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="w-20 h-14 md:w-28 md:h-20 object-cover rounded"
                                width={112}
                                height={80}
                            />
                        </div>
                    ))}
                </div>

                {/* Project Details */}
                <div className="bg-gray-800 rounded-lg shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-3 text-white">{selectedProject.title}</h2>
                    <p className="text-xl md:text-2xl lg:text-3xl mb-5 bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text font-semibold">
                        {selectedProject.company} - {selectedProject.year}
                    </p>
                    <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">Key Results:</h3>
                    <ul className="list-disc pl-6 mb-6">
                        {selectedProject.results.map((result, index) => (
                            <li key={index} className="text-[#96bcf7] text-lg md:text-xl lg:text-2xl mb-2">{result.title}</li>
                        ))}
                    </ul>
                    <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                        <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white h-12 lg:h-16 lg:text-xl w-full md:w-auto px-6 lg:px-10 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-6">
                            <span>Visit Live Site</span>
                            <ArrowUpRightIcon className="size-4" />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PortfolioGallery;