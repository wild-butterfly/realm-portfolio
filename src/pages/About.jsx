export default function About() {
  return (
    <div className="min-h-screen bg-realm-gradient text-white flex flex-col items-center justify-center font-gamer px-6">
      <h1 className="text-4xl text-magicBlue mb-4">👤 About the Developer</h1>
      <p className="text-itemGreen mb-8 text-center max-w-2xl">
        Hi, I’m Aşkın Fear — a developer, designer, and innovator. I build
        futuristic tools and beautiful interfaces blending creativity with
        technology. 🚀
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
