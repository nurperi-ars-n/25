import './App.css';
import {Header} from "./components/Header";
import {Block1} from "./components/Block1";
import {Block2} from "./components/Block2";

function App() {
  return (
    <div  className="App">
      <div className="container">
           <Header/>
           <Block1/>
           <Block2/>
      </div>
   
    </div>
  );
}

export default App;
