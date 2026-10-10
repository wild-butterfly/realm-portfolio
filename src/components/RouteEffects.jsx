import { useEffect } from "react";
import { useLocation } from "react-router-dom";
export default function RouteEffects() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    const names = { "/": "Portal", "/realm": "Realm Hub", "/builds": "Builds & Creations", "/skills": "Knowledge & Skills", "/about": "About the Developer" };
    document.title = `${names[pathname] ?? "Realm Hub"} — Aşkın Fear`;
  }, [pathname]);
  return null;
}

