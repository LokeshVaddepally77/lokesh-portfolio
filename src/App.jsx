import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Education from "./pages/Education.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
import NotFound from "./pages/NotFound.jsx";
import useReveal from "./hooks/useReveal.js";

const siteTitle = "Lokesh Vaddepally — Full Stack Developer";

// Per-route tab titles, so bookmarks/history/tabs say which page it is.
const pageTitles = {
  "/": siteTitle,
  "/education": "Education · Lokesh Vaddepally",
  "/experience": "Experience · Lokesh Vaddepally",
  "/projects": "Projects · Lokesh Vaddepally",
  "/resume": "Résumé · Lokesh Vaddepally",
  "/contact": "Contact · Lokesh Vaddepally",
};

export default function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = pageTitles[location.pathname] ?? `Page not found · ${siteTitle}`;
  }, [location.pathname]);

  useReveal(location.pathname);

  return (
    <div className="layout">
      <Navbar />
      <main className="content" key={location.pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
