
import './App.css';
import "./index.css";
import Sidebar from './componts/Sidebar';
import Image from './componts/Image';
import Navbar from "./components/Navbar.js";
import StatusBoxes from "./components/Status.js"
import TimeLeft from './TimeLeft';
import TimeEstimated from './TimeEstimated';


function App(){
return <div className="App">
  
  <Sidebar/>
  <Image/>
  <Navbar/>
  <StatusBoxes/>
  <TimeLeft />
  <TimeEstimated />
  
</div>
}
export default App;
