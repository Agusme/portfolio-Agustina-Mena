import "bootstrap/dist/css/bootstrap.min.css";
import "./font.css"; // Asegúrate de que la ruta sea correcta
import "./App.css";
import React from "react";
import Navegation from "./components/layouts/Navegation";
import Footer from "./components/layouts/Footer";
import Main from "./components/views/Main";
import Projects from "./components/views/Projects";
import StackMern from "./components/views/StackMern";
import About from "./components/views/About";
import Contact from "./components/views/Contact";

function App() {
  return (
    <>
      <Navegation />
      <Main />
      <About />
      <Projects />
      <StackMern />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
