import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import AboutPage from "./components/AboutUs";
import ContactLinks from "./components/ContactLinks";

export default function Home() {
  return (
    <main className="dark:bg-black bg-white">
      <Navbar />
      <Hero />
      <AboutPage />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
      <ContactLinks />
    </main>
  );
}
