import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Education from "./pages/Education.jsx";
import Experience from "./pages/Experience.jsx";
import Projects from "./pages/Projects.jsx";
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
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.title = pageTitles[pathname] ?? `Page not found · ${siteTitle}`;
  }, [pathname]);

  // Jump (not smooth-scroll) to the top on route change, or to the #anchor
  // when one is given, e.g. a home-page project card → /projects#slug.
  useEffect(() => {
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (target) {
      target.scrollIntoView({ behavior: "instant", block: "start" });
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  useReveal(pathname);

  return (
    <div className="layout">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="content" key={pathname}>
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
      <Footer />
    </div>
  );
}
