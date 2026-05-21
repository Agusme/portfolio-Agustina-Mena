import "./App.css";
import React, { Suspense, lazy, useEffect, useState } from "react";
import Navegation from "./components/layouts/Navegation";
import Main from "./components/views/Main";

const About = lazy(() => import("./components/views/About"));
const Projects = lazy(() => import("./components/views/Projects"));
const StackMern = lazy(() => import("./components/views/StackMern"));
const Certifications = lazy(() => import("./components/views/Certifications"));
const Contact = lazy(() => import("./components/views/Contact"));
const Footer = lazy(() => import("./components/layouts/Footer"));

function App() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const loadDeferredStyles = () => {
      import("./App.deferred.css");
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(loadDeferredStyles);
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(loadDeferredStyles, 1);
    return () => window.clearTimeout(timeoutId);
  }, []);

  // Defer rendering of heavy components to allow initial paint
  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(() => setShowContent(true));
      return () => window.cancelIdleCallback(idleId);
    } else {
      const timeoutId = window.setTimeout(() => setShowContent(true), 50);
      return () => window.clearTimeout(timeoutId);
    }
  }, []);

  return (
    <>
      <Navegation />
      <h1 className="visually-hidden">
        Agustina Mena - Portfolio: Desarrolladora Frontend y Full Stack
      </h1>
      <Main />
      {showContent && (
        <Suspense fallback={null}>
          <About />
          <Projects />
          <StackMern />
          <Certifications />
          <Contact />
          <Footer />
        </Suspense>
      )}
    </>
  );
}

export default App;
