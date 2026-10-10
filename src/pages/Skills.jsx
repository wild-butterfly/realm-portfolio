import RealmLayout from "../components/RealmLayout";
const groups = [
  {title:"Web interfaces", text:"Responsive product websites, portals and application screens.", skills:["React", "Next.js", "TypeScript", "JavaScript", "HTML / CSS", "Tailwind CSS"]},
  {title:"Mobile applications", text:"Connected iOS and Android experiences for field teams and home workouts.", skills:["React Native", "Expo", "Expo Router", "TanStack Query", "Secure session storage"]},
  {title:"Backend & APIs", text:"Services that connect accounts, business workflows and integrations.", skills:["Node.js", "Express", "Hono", "REST APIs", "Authentication & roles", "Stripe"]},
  {title:"Databases", text:"Structured application data, migrations and persistence.", skills:["PostgreSQL", "MySQL", "MongoDB", "Firebase Firestore"]},
  {title:"Cloud & delivery", text:"Shipping applications and supporting them beyond the first release.", skills:["AWS / EC2 / S3", "CloudFront", "Cloudflare", "Vercel", "Docker", "GitHub Actions"]},
  {title:"Design & development tools", text:"Tools for planning, implementing and reviewing a build.", skills:["Git / GitHub", "Figma", "Postman", "VS Code", "Responsive design", "SEO metadata"]},
];
export default function Skills(){return <RealmLayout><div className="page-intro"><span className="eyebrow">Quest log / 02</span><h1>Knowledge &amp; Skills</h1><p>The tools behind Flowody, Movivate and Clevermode. Practical capabilities developed through building, shipping and maintaining software.</p></div>
<div className="skill-grid">{groups.map((g,i)=><section key={g.title} className="panel skill-panel"><span className="eyebrow">Technology tree / 0{i+1}</span><h2>{g.title}</h2><p>{g.text}</p><ul className="tags">{g.skills.map(s=><li key={s}>{s}</li>)}</ul></section>)}</div>
<section className="studio-panel"><div><h2>See the skills in action.</h2><p>Explore the interfaces and workflows built with this stack.</p></div><a className="realm-button" href="#/builds">View builds →</a></section>
</RealmLayout>;}
