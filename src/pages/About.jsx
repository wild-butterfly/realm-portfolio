// Created by Aşkın Fear © 2025
import React from "react";
import { useNavigate } from "react-router-dom";

// Fotoğraf
import myPhoto from "../assets/images/myphoto.jpg";

// Icons
import { FaUserAstronaut } from "react-icons/fa";
import { HiArrowLeftCircle } from "react-icons/hi2";
import { RiStackLine } from "react-icons/ri";
import { HiOutlineSparkles } from "react-icons/hi2";
import { BsRocketTakeoff } from "react-icons/bs";

export default function About() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-realm-gradient text-white flex flex-col items-center py-16 px-6 font-gamer">
      {/* Title */}
      <h1 className="text-4xl md:text-6xl text-magicBlue mb-4 text-center flex items-center justify-center gap-3">
        <FaUserAstronaut className="text-neonPurple drop-shadow-[0_0_10px_#c27bff]" />
        About the Developer
      </h1>

      <p className="text-itemGreen mb-10 text-center max-w-2xl opacity-90">
        Aşkın Fear is a multi-style full-stack developer who builds real
        business platforms, warm and friendly dashboards, and futuristic sci-fi
        interfaces. From Clevermode and Honeycomb to experimental realms like
        this portfolio, she loves turning complex workflows into simple,
        satisfying experiences.
      </p>

      {/* Content */}
      <div className="max-w-5xl w-full grid gap-8 md:grid-cols-[1.1fr,1.9fr]">
        {/* Developer Card */}
        <div className="bg-darkGray/80 border border-magicBlue/60 rounded-3xl p-6 shadow-[0_0_30px_#00e7ff40] flex flex-col items-center md:items-start">
          <span className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4">
            Developer Card
          </span>

          {/* Avatar */}
          <div
            className="w-24 h-24 rounded-full p-[3px] bg-gradient-to-br 
             from-magicBlue to-neonPurple shadow-[0_0_25px_#00e7ff80] mb-4"
          >
            <img
              src={myPhoto}
              alt="Aşkın Fear"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          <h2 className="text-2xl text-itemGreen mb-1">Aşkın Fear</h2>
          <p className="text-sm text-gray-300 mb-4">
            Frontend-Led Full-Stack Developer
          </p>

          {/* Stats */}
          <div className="w-full space-y-3 text-xs">
            {/* Creativity */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Creativity</span>
                <span className="text-itemGreen">95 / 100</span>
              </div>
              <div className="h-2 rounded-full bg-black/40 overflow-hidden">
                <div className="h-full w-[95%] bg-gradient-to-r from-itemGreen to-magicBlue" />
              </div>
            </div>

            {/* Problem Solving */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Problem Solving</span>
                <span className="text-itemGreen">92 / 100</span>
              </div>
              <div className="h-2 rounded-full bg-black/40 overflow-hidden">
                <div className="h-full w-[92%] bg-gradient-to-r from-magicBlue to-neonPurple" />
              </div>
            </div>

            {/* NEW — Code Quality */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Code Quality</span>
                <span className="text-itemGreen">94 / 100</span>
              </div>
              <div className="h-2 rounded-full bg-black/40 overflow-hidden">
                <div className="h-full w-[94%] bg-gradient-to-r from-itemGreen to-magicBlue" />
              </div>
            </div>

            {/* NEW — Speed & Efficiency */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">Speed & Efficiency</span>
                <span className="text-itemGreen">90 / 100</span>
              </div>
              <div className="h-2 rounded-full bg-black/40 overflow-hidden">
                <div className="h-full w-[90%] bg-gradient-to-r from-neonPurple to-itemGreen" />
              </div>
            </div>

            {/* NEW — UI/UX Sense */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">UI/UX Sense</span>
                <span className="text-itemGreen">97 / 100</span>
              </div>
              <div className="h-2 rounded-full bg-black/40 overflow-hidden">
                <div className="h-full w-[97%] bg-gradient-to-r from-itemGreen to-neonPurple" />
              </div>
            </div>

            {/* NEW — System Architecture */}
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-300">System Architecture</span>
                <span className="text-itemGreen">88 / 100</span>
              </div>
              <div className="h-2 rounded-full bg-black/40 overflow-hidden">
                <div className="h-full w-[88%] bg-gradient-to-r from-magicBlue to-neonPurple" />
              </div>
            </div>

            {/* Developer Class */}
            <div className="mt-4">
              <span className="text-xs tracking-[0.2em] uppercase text-gray-400">
                Developer Class
              </span>

              <div className="flex flex-wrap items-center gap-3 mt-2 text-itemGreen text-sm">
                <span className="flex items-center gap-1">
                  <RiStackLine size={16} className="text-itemGreen" />
                  Full-Stack
                </span>

                <span className="flex items-center gap-1">
                  <HiOutlineSparkles size={16} className="text-itemGreen" />
                  UI/UX-Focused
                </span>

                <span className="flex items-center gap-1">
                  <BsRocketTakeoff size={16} className="text-itemGreen" />
                  Product Developer
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Lore / Story */}
        <div className="bg-darkGray/70 border border-magicBlue/40 rounded-3xl p-6 shadow-[0_0_25px_#00e7ff30] space-y-6">
          <section>
            <h3 className="text-itemGreen text-lg mb-2">Origin Story</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Aşkın started as a curious problem-solver, fixing real-world
              workflows long before writing her first line of code. Originally
              trained as a Mechanical Engineer, she shifted her focus to
              software so she could design tools that move faster than hardware:
              platforms that teams actually use every day. She now works across
              products like Clevermode, Honeycomb and creative web realms,
              always aiming for experiences that feel smooth, fast and just a
              little bit magical.
            </p>
          </section>

          <section>
            <h3 className="text-itemGreen text-lg mb-2">Current Quests</h3>
            <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
              <li>
                Building and refining Clevermode’s SaaS platform — Stripe
                billing, Firebase user management and seamless printer
                onboarding.
              </li>
              <li>
                Designing warm, friendly dashboards in{" "}
                <span className="text-itemGreen">Honeycomb</span> that teams
                actually enjoy using.
              </li>
              <li>
                Expanding her AWS skills — deploying applications using S3, EC2,
                CloudFront and secure HTTPS setups.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-itemGreen text-lg mb-2">Playstyle & Values</h3>
            <ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
              <li>
                <span className="text-itemGreen">User-first design:</span> she
                builds screens that feel obvious, calm and satisfying to use.
              </li>
              <li>
                <span className="text-itemGreen">
                  Business-grade reliability:
                </span>{" "}
                her tools are built for real companies, not just portfolio
                demos.
              </li>
              <li>
                <span className="text-itemGreen">Lifelong learner:</span>{" "}
                she&apos;s constantly unlocking new tech trees, from cloud to
                design systems.
              </li>
            </ul>
          </section>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate("/realm")}
        className="mt-10 px-6 py-2 bg-gradient-to-r 
                   from-magicBlue to-neonPurple rounded-lg 
                   text-black font-bold hover:scale-110 
                   transition-all duration-500 shadow-lg flex items-center gap-2"
      >
        <HiArrowLeftCircle className="text-black text-xl" />
        Back to Realm
      </button>
    </div>
  );
}
