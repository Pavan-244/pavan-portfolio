import { lazy, Suspense, useState } from "react";

import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import IntroLoader from "./components/src/components/IntroLoader.jsx";
import SnowBackground from "./components/SnowBackground.jsx";
import SunPath from "./components/SunPath";

// Lazy-loaded sections
const Skills = lazy(() => import("./components/Skills/Skills.jsx"));
const Projects = lazy(() => import("./components/Projects/Projects.jsx"));
const Education = lazy(() => import("./components/Education/Education.jsx"));
const Footer = lazy(() => import("./components/Footer/Footer.jsx"));

const App = () => {
  const [isIntroDone, setIsIntroDone] = useState(false);

  return (
    <>
      <div id="wind-overlay" />
      <SunPath />
      {/* Global background effect */}
      <SnowBackground />

      {/* Intro animation */}
      {!isIntroDone && <IntroLoader onFinish={() => setIsIntroDone(true)} />}

      {/* Main content */}
      {isIntroDone && (
        <>
          <Navbar />

          <main>
            <Hero />

            <Suspense fallback={null}>
              <Skills />
              <Projects />
              <Education />
              <Footer />
            </Suspense>
          </main>
        </>
      )}
    </>
  );
};

export default App;
