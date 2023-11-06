
import './App.css';
import "./index.css";
import Sidebar from './componts/Sidebar';
import Image from './componts/Image';
import Navbar from "./components/Navbar.js";
import StatusBoxes from "./components/Status.js"


function App(){
return <div className="App">
  
  <Sidebar/>
  <Image/>
  <Navbar/>
  <StatusBoxes/>
  
</div>
}
export default App;
