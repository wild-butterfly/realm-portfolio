import RealmLayout from "../components/RealmLayout";
import { skillGroups } from "../data/skills";
export default function Skills(){return <RealmLayout><div className="page-intro"><span className="eyebrow">Quest log / 02</span><h1>Knowledge &amp; Skills</h1><p>The tools behind Flowody, Movivate and Clevermode. Practical capabilities developed through building, shipping and maintaining software.</p></div>
<div className="skill-grid">{skillGroups.map((g,i)=><section key={g.title} className="panel skill-panel"><span className="eyebrow">Technology tree / 0{i+1}</span><h2>{g.title}</h2><p>{g.text}</p><ul className="tags">{g.skills.map(s=><li key={s}>{s}</li>)}</ul></section>)}</div>
<section className="studio-panel"><div><h2>See the skills in action.</h2><p>Explore the interfaces and workflows built with this stack.</p></div><a className="realm-button" href="#/builds">View builds →</a></section>
</RealmLayout>;}
