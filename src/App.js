import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navegation from './components/layouts/Navegation';
import Footer from './components/layouts/Footer';
import Main from './components/views/Main';
import Projects from './components/views/Projects';
import StackMern from './components/views/StackMern';

function App() {
  return (
<>
<Navegation/>
<Main/>
<StackMern/>
<Projects/>
<Footer/>
</>
  );
}

export default App;
