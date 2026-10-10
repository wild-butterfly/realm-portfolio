import { Link } from "react-router-dom";
import RealmLayout from "../components/RealmLayout";
import { HiOutlineCog, HiOutlineUserCircle } from "react-icons/hi";
import { PiBrainDuotone } from "react-icons/pi";
const quests = [
  { to: "/builds", title: "Builds & Creations", Icon: HiOutlineCog, text: "Explore Flowody, Movivate and Clevermode, their mobile apps, and the website behind my studio.", label: "Explore 6 product builds" },
  { to: "/skills", title: "Knowledge & Skills", Icon: PiBrainDuotone, text: "Follow the technology trees behind my web interfaces, native apps, APIs, databases and deployments.", label: "Open the skill tree" },
  { to: "/about", title: "About the Developer", Icon: HiOutlineUserCircle, text: "Meet Aşkın Fear: mechanical engineer turned developer, studio founder and the creator of this realm.", label: "Meet the developer" },
];
export default function Realm(){return <RealmLayout>
  <div className="page-intro hub-intro"><span className="eyebrow">Connection established</span><h1>Realm Online<span className="title-dot">.</span></h1><p>Welcome to Aşkın’s creative corner of the web. Choose a quest to explore the products, tools and person behind the builds.</p></div>
  <div className="quest-grid">{quests.map((quest,i)=><Link to={quest.to} className="panel quest-card" key={quest.to}><span className="quest-number">0{i+1}</span><quest.Icon className="quest-icon" aria-hidden="true"/><h2>{quest.title}</h2><p>{quest.text}</p><strong>{quest.label} →</strong></Link>)}</div>
  <section className="studio-panel"><div><span className="eyebrow">Beyond the realm</span><h2>Software that works in the real world.</h2><p>I build and maintain websites, mobile apps and business platforms through Flowody Software, based in Melbourne and working worldwide.</p></div><a className="realm-button" href="https://flowodysoftware.com" target="_blank" rel="noopener noreferrer">Visit the studio ↗</a></section>
</RealmLayout>;}
