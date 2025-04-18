import React from 'react';
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import PortfolioProjects from "./PortfolioProjects";

const ProjectPhoneScreen = () => {
    return (
        <div className="mt-10 md:mt-20 flex flex-col gap-8">
            {PortfolioProjects.map((project, index) => (
                <div 
                    key={project.title} 
                    className="bg-gray-800/90 backdrop-blur-md rounded-3xl relative z-0 overflow-hidden shadow-lg group transition-all duration-300 hover:shadow-xl"
                >
                    {/* Animated background effects */}
                    <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full opacity-30 blur-xl"></div>
                    <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
                    
                    {/* Grain texture overlay */}
                    <div className="absolute inset-0 -z-10 opacity-5 pointer-events-none group-hover:opacity-10 transition-opacity" 
                        style={{
                            backgroundImage: `url(${grainImage.src})`
                        }}
                    ></div>
                    
                    {/* Border overlay */}
                    <div className="absolute inset-0 outline-2 outline outline-white/10 rounded-3xl pointer-events-none"></div>
                    
                    {/* Project content */}
                    <div className="p-6 md:p-8 relative z-10">
                        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                            <span>{project.company}</span>
                            <span>&bull;</span>
                            <span>{project.year}</span>
                        </div>
                        
                        <h3 className="font-serif text-2xl mt-3 md:text-4xl text-white">{project.title}</h3>
                        
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-4"></div>
                        
                        <ul className="flex flex-col gap-3 mt-4">
                            {project.results.map((result, index) => (
                                <li key={index} className="flex gap-3 text-base md:text-lg font-medium">
                                    <CheckCircleIcon className="size-5 md:size-6 text-emerald-400 shrink-0 mt-0.5" />
                                    <span className="text-[#96bcf7]">{result.title}</span>
                                </li>
                            ))}
                        </ul>
                        
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white h-12 w-full md:w-auto px-8 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-6 shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:-translate-y-1">
                                <span>Visit Live Site</span>
                                <ArrowUpRightIcon className="size-5" />
                            </button>
                        </a>
                        
                        <div className="mt-6 overflow-hidden rounded-xl relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="w-full h-auto rounded-xl shadow-md transform transition-transform duration-700 ease-in-out group-hover:scale-105"
                                width={600}
                                height={400}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectPhoneScreen;