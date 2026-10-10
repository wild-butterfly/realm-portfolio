import { NavLink, Link } from "react-router-dom";
export default function RealmLayout({ children }) {
  return <div className="realm-shell">
    <header className="realm-nav"><Link to="/realm" className="realm-brand">AF<span> / REALM</span></Link>
      <nav aria-label="Realm navigation"><NavLink to="/realm">Hub</NavLink><NavLink to="/builds">Builds</NavLink><NavLink to="/skills">Skills</NavLink><NavLink to="/about">Developer</NavLink></nav>
      <a href="https://askin-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="nav-portfolio">Main portfolio ↗</a>
    </header>
    <main className="realm-content">{children}</main>
    <footer className="realm-footer"><span>© {new Date().getFullYear()} Aşkın Fear · Creative frontend realm</span><a href="https://flowodysoftware.com" target="_blank" rel="noopener noreferrer">Flowody Software ↗</a><a href="mailto:askinfear@hotmail.com">Start a conversation ↗</a></footer>
  </div>;
}
