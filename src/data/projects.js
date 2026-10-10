const base = import.meta.env.BASE_URL;
export const projects = [
  { title: "Flowody", type: "Web platform", image: "flowody-calendar.png", tags: ["React", "TypeScript", "PostgreSQL"], description: "Job management for service businesses: scheduling, quoting, customer records, job tracking and invoicing in one connected workspace.", link: "https://flowody.com" },
  { title: "Flowody Mobile", type: "iOS & Android", image: "flowody-mobile-timesheet.png", mobile: true, tags: ["React Native", "Expo", "TypeScript"], description: "A companion app for field teams to view jobs, check in and out, and record labour. Timesheet interface design preview shown.", link: "https://flowody.com" },
  { title: "Clevermode", type: "Website & customer platform", image: "clevermode-website.png", tags: ["Next.js", "Firebase", "Stripe"], description: "A testing and tagging product with a website, printer registration, customer accounts, billing and reporting tools.", link: "https://www.clevermode.com.au/" },
  { title: "Movivate Website", type: "Product website", image: "movivate-website.png", tags: ["Next.js", "TypeScript"], description: "A home workout product website connecting exercise features, pricing, app downloads and support.", link: "https://movivate.com" },
  { title: "Movivate Mobile", type: "iOS & Android", image: "movivate-mobile-program.png", mobile: true, tags: ["React Native", "Expo", "TypeScript"], description: "Guided home workouts with animated exercises, custom programs, timers, rest periods and training progress.", link: "https://movivate.com/download" },
  { title: "Flowody Software", type: "My software studio", image: "flowody-software.png", tags: ["Next.js", "Node.js", "Cloudflare"], description: "My studio website, bringing services, real product case studies and project enquiries into one responsive experience.", link: "https://flowodysoftware.com" },
].map(p => ({ ...p, image: `${base}projects/${p.image}` }));
export const experiments = [
  { title: "Developer Portfolio", description: "My current professional portfolio, with case studies, technology filters and a founder profile.", link: "https://askin-portfolio.vercel.app" },
  { title: "Realm Portfolio", description: "This experimental sci-fi portfolio: portals, neon interfaces and route-based exploration.", link: "https://github.com/wild-butterfly/realm-portfolio" },
  { title: "Cocktail Finder", description: "An ingredient-based recipe search exploring JavaScript and public REST APIs.", link: "https://github.com/wild-butterfly/cocktailfinder" },
  { title: "Gossip Girl API", description: "An earlier database and API project exploring structured records and backend workflows.", link: "https://github.com/wild-butterfly/gossipgirlAPI" },
  { title: "Memory Game", description: "A JavaScript card-matching game exploring state, DOM updates and interaction.", link: "https://github.com/wild-butterfly/memory-game-js" },
  { title: "Rock Paper Scissors", description: "A browser game exploring conditional logic, events and responsive UI updates.", link: "https://github.com/wild-butterfly/rock-paper-scissors" },
];
