import 'bootstrap/dist/css/bootstrap.min.css';
import './font.css';  // Asegúrate de que la ruta sea correcta
import './App.css';
import React from 'react';
import Navegation from './components/layouts/Navegation';
import Footer from './components/layouts/Footer';
import Main from './components/views/Main';
import Projects from './components/views/Projects';
import StackMern from './components/views/StackMern';

function App() {
  return (
    <>
      <Navegation />
      <Main />
      <Projects />
      <StackMern />
      <Footer />
    </>
  );
}

export default App;
