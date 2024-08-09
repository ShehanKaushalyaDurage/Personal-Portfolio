import logo from './logo.svg';
import './App.css';
import NavBar from './component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './component/Banner';
import Skills from './component/Skills';
import Projects from './component/Projects';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
