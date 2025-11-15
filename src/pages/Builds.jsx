// Created by Aşkın Fear © 2025. All rights reserved.
import React from "react";
import { useNavigate } from "react-router-dom";

// Icons
import { MdBuild } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import { HiArrowLeftCircle } from "react-icons/hi2";

const majorProjects = [
  {
    title: "Clevermode Website",
    description:
      "Smart testing & tagging website powered by AWS infrastructure. Handles real-time user registration, Firebase Authentication, Stripe billing, and printer setup — built for scalable device management.",
    link: "https://www.clevermode.com.au/",
    color: "from-itemGreen to-magicBlue",
  },
  {
    title: "Honeycomb Platform",
    description:
      "Workflow automation system for teams — integrates task scheduling, invoicing, and analytics in a single cloud-based dashboard. Focused on streamlining operational efficiency.",
    link: "#",
    color: "from-neonPurple to-itemGreen",
  },
  {
    title: "Realm Portfolio",
    description:
      "A sci-fi inspired, interactive portfolio built with React + Tailwind. Designed to showcase creative builds, technical achievements, and future quests.",
    link: "https://wild-butterfly.github.io/realm-portfolio",
    color: "from-magicBlue to-neonPurple",
  },
];

const miniProjects = [
  {
    title: "Cocktail Finder",
    description:
      "API-based project that lets users find creative cocktail recipes by ingredients. Built using vanilla JavaScript and REST API calls.",
    link: "https://github.com/wild-butterfly/cocktailfinder",
  },
  {
    title: "Exercise Finder",
    description:
      "Lightweight HTML/JS app that allows users to search exercises by muscle group, with a clean and simple UI powered by API requests.",
    link: "https://github.com/wild-butterfly/exercisefinder",
  },
  {
    title: "Gossip Girl Database",
    description:
      "A fun SQL-based project that creates a 'my_database' schema with a members table containing iconic Gossip Girl characters. Demonstrates SQL database creation, table management, and data insertion.",
    link: "https://github.com/wild-butterfly/gossipgirlAPI",
  },
  {
    title: "XML Project",
    description:
      "A front-end project exploring structured XML data rendering and styling with CSS, highlighting data parsing and presentation.",
    link: "https://github.com/wild-butterfly/xml-project",
  },
];

export default function Builds() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-realm-gradient text-white flex flex-col items-center py-16 px-6 font-gamer">
      <h1 className="text-4xl md:text-6xl mb-12 text-magicBlue animate-fadeIn flex items-center gap-3">
        <MdBuild className="text-itemGreen drop-shadow-[0_0_10px_#00ffcc]" />
        BUILDS & CREATIONS
      </h1>

      {/* Major Projects */}
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl">
        {majorProjects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`bg-gradient-to-br ${p.color} p-[2px] rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_25px_#00E7FF80]`}
          >
            <div className="bg-darkGray rounded-2xl h-full p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl mb-3 text-itemGreen">{p.title}</h2>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
              <span className="mt-6 inline-block text-magicBlue text-xs">
                VIEW PROJECT →
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Mini Projects */}
      <h2 className="text-2xl text-itemGreen mt-16 mb-6 flex items-center gap-2">
        <GiStarsStack className="text-neonPurple drop-shadow-[0_0_8px_#d57bff]" />
        Mini Builds
      </h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl">
        {miniProjects.map((p, i) => (
          <a
            key={i}
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-darkGray border border-magicBlue/40 hover:border-itemGreen/60 rounded-xl p-5 hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-lg text-magicBlue mb-2">{p.title}</h3>
            <p className="text-gray-400 text-sm">{p.description}</p>
          </a>
        ))}
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate("/realm")}
        className="mt-8 px-6 py-2 bg-gradient-to-r from-magicBlue to-neonPurple rounded-lg text-black font-bold hover:scale-110 transition-all flex items-center gap-2"
      >
        <HiArrowLeftCircle className="text-black text-xl" />
        Back to Realm
      </button>
    </div>
  );
}
