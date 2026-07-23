import Sidebar from "./components/Sidebar.jsx";
import Projects from "./components/Projects.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Proof from "./components/Proof.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
  return (
    <div className="layout">
      <Sidebar />
      <main className="content">
        <Projects />
        <About />
        <Experience />
        <Proof />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
