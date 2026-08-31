import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import ImpactCards from "./components/ImpactCards";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Sponsors from "./components/Sponsors";

export default function App() {
  return (
    <div className="site-shell">
      <Hero />
      <main>
        <Intro />
        <Impact />
        <ImpactCards />
        <Projects />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
