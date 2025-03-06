import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import React from "react";
import Navegation from "./components/layouts/Navegation";
import Footer from "./components/layouts/Footer";
import Main from "./components/views/Main";
import Projects from "./components/views/Projects";
import StackMern from "./components/views/StackMern";
import About from "./components/views/About";
import Contact from "./components/views/Contact";
import Certifications from "./components/views/Certifications";

function App() {
  return (
    <>
      <Navegation />
      <Main />
      <About />
      <Projects />
      <StackMern />
      <Certifications />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
