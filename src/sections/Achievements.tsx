import React from 'react';
import { Trophy, Award, Medal } from 'lucide-react';
import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";

export const AchievementsSection = () => {
  const achievements = [
    {
      title: "Smart India Hackathon 2024 Winner",
      description: "Led a team of 6 members to victory in the world's largest hackathon under the Ministry of Ayush at IIT Tirupati.",
      icon: <Trophy className="size-10 md:size-12 text-yellow-400" />,
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7273401249566183424/",
      details: [
        "Developed an innovative solution for problem statement SIH1643",
        "Competed against teams from across India in a 36-hour coding marathon",
        "Represented Army Institute of Technology, Pune"
      ],
      color: "from-yellow-600 via-yellow-500 to-yellow-400",
      glowColor: "yellow-400",
      borderColor: "yellow-500",
      baseColor: "yellow-900/30",
      textColor: "yellow-200"
    },
    {
      title: "Finance Among Us 2025 Winner",
      description: "Secured first place in the business simulation competition at Plaksha University, Mohali.",
      icon: <Award className="size-10 md:size-12 text-emerald-400" />,
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7315790681489195008/",
      details: [
        "Strategized as Domestic Institutional Investors (DIIs) through nine intense rounds",
        "Demonstrated financial insight and market dynamics understanding",
        "Won prize money of Rs. 12,000"
      ],
      color: "from-emerald-600 via-emerald-500 to-emerald-400",
      glowColor: "emerald-400",
      borderColor: "emerald-500",
      baseColor: "emerald-900/30",
      textColor: "emerald-200"
    },
    {
      title: "Hack Summit 2025 - Second Runner-Up",
      description: "Placed third in the open-innovation track at Plaksha University's flagship 24-hour hackathon.",
      icon: <Medal className="size-10 md:size-12 text-purple-400" />,
      link: "https://www.linkedin.com/feed/update/urn:li:activity:7315790681489195008/",
      details: [
        "Part of Team One of a Kind in the event hosted by Geek Room Plaksha",
        "Developed an innovative solution for real-world problems",
        "Demonstrated technical prowess and creativity in a time-constrained environment"
      ],
      color: "from-purple-600 via-purple-500 to-purple-400",
      glowColor: "purple-400",
      borderColor: "purple-500",
      baseColor: "purple-900/30",
      textColor: "purple-200"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="achievements">
      {/* Star field */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div 
          key={i}
          className="absolute w-px h-px bg-white rounded-full animate-pulse"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.7 + 0.3,
            animationDuration: `${Math.random() * 3 + 1}s`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
      
      <div className="max-w-[90%] md:max-w-4xl lg:max-w-[90rem] mx-auto relative z-10">
        <div className="mb-20 relative">
          <div className="absolute -inset-x-full -top-10 h-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
          <SectionHeader
            eyebrow="Recognition"
            title="Major Achievements"
            description="Celebrating milestones of innovation, creativity, and excellence in competitions."
          />
          <div className="absolute -inset-x-full -bottom-10 h-1 bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
        </div>

        <div className="relative">
          {/* Connecting line with cosmic effect */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 md:block hidden">
            <div className="h-full w-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
            </div>
          </div>
          
          {/* Achievement cards with staggered reveal */}
          <div className="space-y-24 relative">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`relative group transition-all duration-700 ease-out hover:scale-[1.02] ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}
                style={{ transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1)' }}
              >
                {/* Cosmic background glow */}
                <div className={`absolute -inset-4 bg-${achievement.baseColor} rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700`}></div>
                <div className={`absolute -inset-2 bg-gradient-to-r ${achievement.color} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-700`}></div>
                
                {/* Achievement card */}
                <div className={`relative bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-${achievement.borderColor}/30 overflow-hidden 
                  shadow-lg group-hover:shadow-${achievement.glowColor}/20 transition-all duration-500 p-0 max-w-3xl ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  
                  {/* Shimmering top band */}
                  <div className="h-1 w-full relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color}`}></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50 animate-pulse" style={{ animationDuration: '2s' }}></div>
                  </div>
                  
                  {/* Content container */}
                  <div className="p-8 md:p-10">
                    <div className="flex flex-col md:flex-row gap-8">
                      {/* Award icon with cosmic effect */}
                      <div className="relative flex-shrink-0 group-hover:scale-110 transition-transform duration-700">
                        <div className={`absolute -inset-4 bg-${achievement.baseColor} blur-xl opacity-70 rounded-full`}></div>
                        <div className={`absolute -inset-2 bg-gradient-to-br ${achievement.color} opacity-40 blur-lg rounded-full`}></div>
                        <div className={`absolute inset-0 bg-${achievement.glowColor}/20 rounded-full animate-pulse`} style={{ animationDuration: '2s' }}></div>
                        <div className={`relative w-20 h-20 rounded-full flex items-center justify-center bg-gray-950 border border-${achievement.borderColor}/50 z-10 shadow-inner`}>
                          {achievement.icon}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
                        </div>
                      </div>
                      
                      {/* Achievement content */}
                      <div className="flex-grow relative z-10">
                        <h3 className={`text-2xl md:text-3xl font-serif font-bold bg-clip-text text-transparent bg-gradient-to-r ${achievement.color} mb-4`}>
                          {achievement.title}
                        </h3>
                        
                        <p className="text-lg text-white/80 mb-6 leading-relaxed">
                          {achievement.description}
                        </p>
                        
                        <ul className="space-y-4 mb-8">
                          {achievement.details.map((detail, idx) => (
                            <li 
                              key={idx} 
                              className={`flex items-start gap-3 text-${achievement.textColor} opacity-90 group-hover:translate-x-2 transition-all duration-500`} 
                              style={{ transitionDelay: `${idx * 100}ms` }}
                            >
                              <span className={`text-${achievement.glowColor} mt-1.5 transform group-hover:scale-125 transition-transform duration-500`} style={{ transitionDelay: `${idx * 100}ms` }}>★</span>
                              <span className="text-lg">{detail}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <a 
                          href={achievement.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 text-${achievement.glowColor} group/link`}
                        >
                          <span className="relative font-medium group-hover/link:pr-2 transition-all duration-300">
                            Learn more
                            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-current group-hover/link:w-full transition-all duration-300"></span>
                          </span>
                          <svg className="w-5 h-5 group-hover/link:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Connection node to timeline */}
                <div className={`absolute top-1/2 -translate-y-1/2 ${index % 2 === 0 ? 'right-0 md:right-[-8px]' : 'left-0 md:left-[-8px]'} hidden md:block`}>
                  <div className={`w-4 h-4 rounded-full bg-${achievement.glowColor} shadow-lg shadow-${achievement.glowColor}/50 z-20 relative`}>
                    <div className={`absolute -inset-1 bg-${achievement.glowColor}/30 rounded-full animate-pulse`}></div>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Bottom cosmic ornament */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-0 hidden md:block">
              <div className="relative w-6 h-6">
                <div className="absolute -inset-2 bg-blue-500/30 rounded-full blur-lg"></div>
                <div className="absolute inset-0 bg-blue-400 rounded-full shadow-lg shadow-blue-400/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection; 
