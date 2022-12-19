import logo from './logo.svg';
import './App.css';
import MainRoute from './Routes/MainRoute';
import Simple from './Components/navbar';
import About from './Routes/About';
import Skills from './Routes/Skills';
import Home from './Routes/Home';
import Projects from './Routes/Projects';
import Contact from './Routes/Contact';
import Github from './Routes/Github';

function App() {
  return (
    <div className="App">
      <Simple />
      <Home/>
      <About/>
      <Skills/>
      <Github/>
      <Projects/>
      <Contact/>

      {/* <MainRoute/> */}
      {/* <section id="#skills">
        <Skills/>
      </section> */}
      {/* <About/> */}
    
    </div>
  );
}

export default App;
// const Links=[
  //   {
  //     to:"/",
  //     title:"Home"
  //   },
  //   {
  //     to:"/about",
  //     title:"About"
  //   },
  //   {
  //     to:"/skills",
  //     title:"Skills"
  //   },
  //   {
  //     to:"/contact",
  //     title:"Contact"
  //   },
  //   {
  //     to:"/projects",
  //     title:"Projects"
  //   },

  // ]