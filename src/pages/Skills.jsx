// Created by Aşkın Fear © 2025
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Skills() {
  const navigate = useNavigate();

  const skillGroups = [
    {
      title: "Frontend & UI",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "TypeScript",
        "XML",
        "Tailwind CSS",
        "Bootstrap",
        "React",
        "React Native",
      ],
    },
    {
      title: "Backend & APIs",
      skills: ["Node.js", "Express.js", "RESTful APIs"],
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "Cloud & Infrastructure",
      skills: [
        "AWS Cloud",
        "AWS – S3",
        "AWS – EC2",
        "AWS – CloudFront",
        "Firebase",
      ],
    },
    {
      title: "Tools & Version Control",
      skills: ["Git", "GitHub"],
    },
    {
      title: "Design Tools",
      skills: ["Figma"],
    },
  ];

  return (
    <div className="min-h-screen bg-realm-gradient text-white flex flex-col items-center py-16 px-6 font-gamer">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl text-magicBlue mb-6 animate-fadeIn">
        🧠 Knowledge & Skills
      </h1>

      <p className="text-itemGreen text-center max-w-2xl mb-12 opacity-90">
        Full-stack engineering, cloud deployment, clean UI development and
        modern tooling — the technologies that power Clevermode and every other
        realm I build.
      </p>

      {/* Skill Groups */}
      <div className="max-w-5xl w-full space-y-10">
        {skillGroups.map((group, idx) => (
          <div key={idx}>
            <h2 className="text-itemGreen text-lg mb-3 tracking-wide">
              ▸ {group.title}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {group.skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-darkGray/70 border border-magicBlue/40 
                             hover:border-itemGreen/70 rounded-xl 
                             py-3 px-2 text-center text-xs md:text-sm
                             transition-all duration-300 hover:scale-105
                             shadow-[0_0_12px_#009dff30] hover:shadow-[0_0_20px_#00ffcc60]"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate("/realm")}
        className="mt-10 px-6 py-2 bg-gradient-to-r 
                   from-magicBlue to-neonPurple rounded-lg 
                   text-black font-bold hover:scale-110 
                   transition-all duration-500 shadow-lg"
      >
        ← Back to Realm
      </button>
    </div>
  );
}
