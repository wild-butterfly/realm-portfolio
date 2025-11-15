// Created by Aşkın Fear © 2025
import { useNavigate } from "react-router-dom";
import { HiOutlineCog, HiOutlineUserCircle } from "react-icons/hi";
import { PiBrainDuotone, PiRocketDuotone } from "react-icons/pi";

export default function Realm() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-realm-gradient text-white flex flex-col items-center justify-center font-gamer px-6">
      <h1 className="text-5xl md:text-6xl text-magicBlue mb-4 animate-fadeIn flex items-center gap-3">
        Realm Online
        <PiRocketDuotone className="text-magicBlue" />
      </h1>

      <p className="text-itemGreen mb-12 animate-fadeIn delay-200">
        Choose your quest to explore Aşkın's world.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Builds */}
        <div
          onClick={() => navigate("/builds")}
          className="cursor-pointer border-2 border-cyan-400 hover:border-magicBlue bg-black/60 rounded-xl p-6 transition-all duration-500 hover:scale-105"
        >
          <h2 className="text-cyan-400 text-xl mb-2 flex items-center gap-2">
            <HiOutlineCog className="text-cyan-400 text-2xl" />
            Builds & Creations
          </h2>
          <p className="text-sm text-white/70">
            Explore my real-world projects — Honeycomb Platform, the Clevermode
            SaaS system and my other creations.
          </p>
        </div>

        {/* Skills */}
        <div
          onClick={() => navigate("/skills")}
          className="cursor-pointer border-2 border-cyan-400 hover:border-magicBlue bg-black/60 rounded-xl p-6 transition-all duration-500 hover:scale-105"
        >
          <h2 className="text-cyan-400 text-xl mb-2 flex items-center gap-2">
            <PiBrainDuotone className="text-cyan-400 text-2xl" />
            Knowledge & Skills
          </h2>
          <p className="text-sm text-white/70">
            A full overview of the technologies, tools and frameworks I use to
            build my worlds.
          </p>
        </div>

        {/* About */}
        <div
          onClick={() => navigate("/about")}
          className="cursor-pointer border-2 border-cyan-400 hover:border-magicBlue bg-black/60 rounded-xl p-6 transition-all duration-500 hover:scale-105"
        >
          <h2 className="text-cyan-400 text-xl mb-2 flex items-center gap-2">
            <HiOutlineUserCircle className="text-cyan-400 text-2xl" />
            About the Developer
          </h2>
          <p className="text-sm text-white/70">
            Learn about my journey, what I build and the quests I’m taking on
            next.
          </p>
        </div>
      </div>

      <footer className="mt-12 text-xs text-white/50 flex items-center gap-2">
        © 2025 Aşkın Fear | Realm Portfolio
        <PiRocketDuotone className="text-white/50 text-sm" />
      </footer>
    </div>
  );
}
