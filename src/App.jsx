import { useState } from "react";
import Realm from "./Realm";

// Sadece portal sesi aktif
import portalSound from "./assets/sounds/mixkit-technology-transition-slide-3120.wav";

export default function App() {
  const [enterRealm, setEnterRealm] = useState(false);
  const [portalActive, setPortalActive] = useState(false);

  const handleEnter = () => {
    // Portal sesi (kesin çalışır)
    const audio = new Audio(portalSound);
    audio.volume = 0.6;
    audio.play().catch((err) => console.log("Ses engellendi:", err));

    setPortalActive(true);
    setTimeout(() => setEnterRealm(true), 2000);
  };

  if (enterRealm) return <Realm />;

  return (
    <div className="min-h-screen bg-realm-gradient flex flex-col items-center justify-center text-center text-white relative overflow-hidden font-gamer">
      <h1 className="text-5xl md:text-6xl text-magicBlue mb-4 opacity-100 animate-fadeIn">
        ⚡ Welcome, The Chosen One ⚡
      </h1>

      <p className="text-itemGreen text-lg animate-fadeIn delay-300">
        Initializing Destiny Protocol...
      </p>

      <button
        onClick={handleEnter}
        className="mt-10 px-8 py-3 bg-gradient-to-r from-magicBlue to-neonPurple rounded-xl text-black font-bold tracking-widest shadow-[0_0_25px_#00E7FF80] hover:shadow-[0_0_45px_#00E7FF] transition-all duration-500 transform hover:scale-110"
      >
        ENTER REALM 🚀
      </button>

      {portalActive && (
        <div className="absolute w-[200vmax] h-[200vmax] rounded-full bg-gradient-radial from-magicBlue/60 via-neonPurple/40 to-transparent animate-portalOpen blur-3xl"></div>
      )}
    </div>
  );
}
