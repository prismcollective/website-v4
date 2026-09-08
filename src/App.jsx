import { useRef } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import ImpactCards from "./components/ImpactCards";
import Intro from "./components/Intro";
import Join from "./components/Join";
import Projects from "./components/Projects";
import Sponsors from "./components/Sponsors";
import useScrollReveal from "./hooks/useScrollReveal";

export default function App() {
  const pageRef = useRef(null);
  useScrollReveal(pageRef);

  return (
    <div className="overflow-x-clip" ref={pageRef}>
      <Hero />
      <main className="max-[800px]:flex max-[800px]:flex-col max-[800px]:gap-8 max-[800px]:bg-[var(--surface-page)] max-[800px]:px-4 max-[800px]:py-8">
        <Intro />
        <Impact />
        <ImpactCards />
        <Projects />
        <Join />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}
