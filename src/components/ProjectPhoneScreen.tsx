import React from 'react';
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";
import PortfolioProjects from "./PortfolioProjects";

const ProjectPhoneScreen = () => {
    return (
        <div className="mt-10 md:mt-20 flex flex-col gap-14">
            {PortfolioProjects.map(project => (
                <div key={project.title} className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:Content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 p-8 md-pt-12 md:px-10 after:pointer-events-none">
                    <div className="absolute inset-0 -z-10 opacity-5" style={{
                        backgroundImage: `url(${grainImage.src})`
                    }}></div>
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                        <span>{project.company}</span>
                        <span>&bull;</span>
                        <span>{project.year}</span>
                    </div>
                    <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl ">{project.title}</h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                        {project.results.map((result, index) => (
                            <li key={index} className="flex gap-2 text-sm md:text-base text-[#96bcf7]">
                                <CheckCircleIcon className="size-5 md:size-6" />
                                <span>{result.title}</span>
                            </li>
                        ))}
                    </ul>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                            <span>Visit Live Site</span>
                            <ArrowUpRightIcon className="size-4" />
                        </button>
                    </a>
                    <Image
                        src={project.image}
                        alt={project.title}
                        className="mt-8 rounded-2xl"
                    />
                </div>
            ))}
        </div>
    );
};

export default ProjectPhoneScreen;