import RealmLayout from "../components/RealmLayout";
import { projects, experiments } from "../data/projects";
export default function Builds() {
  return <RealmLayout><div className="page-intro"><span className="eyebrow">Quest log / 01</span><h1>Builds &amp; Creations</h1><p>Real products for work and everyday life, followed by the experiments that helped shape my craft.</p></div>
    <div className="project-grid">{projects.map(p=><a className="project-card" key={p.title} href={p.link} target="_blank" rel="noopener noreferrer">
      <div className={`project-preview ${p.mobile ? "mobile-preview" : ""}`}><img src={p.image} alt={`${p.title} interface preview`} loading="lazy" /></div>
      <div className="project-body"><span className="eyebrow">{p.type}</span><h2>{p.title}</h2><p>{p.description}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div><strong>Explore product ↗</strong></div>
    </a>)}</div>
    <div className="section-intro"><span className="eyebrow">Side quests</span><h2>Experiments &amp; earlier builds</h2><p>Creative interfaces, API practice and browser games. A place to try ideas beyond commercial product work.</p></div>
    <div className="experiment-grid">{experiments.map(p=><a key={p.title} className="panel experiment" href={p.link} target="_blank" rel="noopener noreferrer"><h3>{p.title}</h3><p>{p.description}</p><strong>Explore build ↗</strong></a>)}</div>
  </RealmLayout>;
}
