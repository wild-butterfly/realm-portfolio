import { useNavigate } from "react-router-dom";

export default function Realm() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-realm-gradient text-white flex flex-col items-center justify-center font-gamer px-6">
      <h1 className="text-5xl md:text-6xl text-magicBlue mb-4 animate-fadeIn">
        Realm Online 🪐
      </h1>

      <p className="text-itemGreen mb-12 animate-fadeIn delay-200">
        Choose your quest to explore Aşkın's world.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <div
          onClick={() => navigate("/builds")}
          className="cursor-pointer border-2 border-cyan-400 hover:border-magicBlue bg-black/60 rounded-xl p-6 transition-all duration-500 hover:scale-105"
        >
          <h2 className="text-cyan-400 text-xl mb-2">⚙️ Builds & Creations</h2>
          <p className="text-sm text-white/70">
            Explore my latest projects, from PCB testers to clever web apps.
          </p>
        </div>

        <div
          onClick={() => navigate("/skills")}
          className="cursor-pointer border-2 border-cyan-400 hover:border-magicBlue bg-black/60 rounded-xl p-6 transition-all duration-500 hover:scale-105"
        >
          <h2 className="text-cyan-400 text-xl mb-2">🧠 Knowledge & Skills</h2>
          <p className="text-sm text-white/70">
            See the tools, languages and frameworks I master.
          </p>
        </div>

        <div
          onClick={() => navigate("/about")}
          className="cursor-pointer border-2 border-cyan-400 hover:border-magicBlue bg-black/60 rounded-xl p-6 transition-all duration-500 hover:scale-105"
        >
          <h2 className="text-cyan-400 text-xl mb-2">👤 About the Developer</h2>
          <p className="text-sm text-white/70">
            Learn who I am, my journey and my future quests.
          </p>
        </div>
      </div>

      <footer className="mt-12 text-xs text-white/50">
        © 2025 Aşkın Fear | Realm Portfolio 🚀
      </footer>
    </div>
  );
}
