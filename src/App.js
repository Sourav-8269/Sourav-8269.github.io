import logo from './logo.svg';
import './App.css';
import MainRoute from './Routes/MainRoute';
import Simple from './Components/navbar';

function App() {
  return (
    <div className="App">

      <Simple />
      <MainRoute/>
    
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