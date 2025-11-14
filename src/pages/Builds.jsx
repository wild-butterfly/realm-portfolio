export default function Builds() {
  return (
    <div className="min-h-screen bg-realm-gradient text-white flex flex-col items-center justify-center font-gamer px-6">
      <h1 className="text-4xl text-magicBlue mb-4">⚙️ Builds & Creations</h1>
      <p className="text-itemGreen mb-8">
        Explore my latest creations — from PCB testers to clever web apps.
      </p>
      <button
        onClick={() => window.history.back()}
        className="mt-4 px-6 py-2 bg-gradient-to-r from-magicBlue to-neonPurple rounded-lg text-black font-bold hover:scale-110 transition-all duration-500"
      >
        ← Back to Realm
      </button>
    </div>
  );
}
