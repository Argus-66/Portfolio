"use client";

import React from "react";
import { ArrowDownOnSquareIcon } from "@heroicons/react/24/outline";

const ResumeFile = () => {
    const handleClick = () => {
        console.log("Button clicked!");
    };

    return (
        <a
            href="/Resume/Ayush_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
        >
            <button
                className="inline-flex items-center gap-2 text-gray-900 h-8 px-2.5 rounded-xl transform transition-transform duration-300 hover:scale-110"
                style={{
                    background: "linear-gradient(to right, #030014  10%, #030014  10%, #e9b7ce  100%)",
                }}
                onClick={handleClick}
            >
                <span className="font-semibold text-white">My Resume!</span>
                <ArrowDownOnSquareIcon className="size-6 text-white" />
            </button>
        </a>
    );
};


export default ResumeFile;
