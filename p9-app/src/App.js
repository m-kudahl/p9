import './App.css';
import "./index.css";
import Sidebar from './components/Sidebar/Sidebar.js';
import Image from './components/Logo.js';
import Navbar from "./components/Navbar.js";
import StatusBoxes from "./components/Status.js"
import TimeLeft from './components/TimeLeft.js';
import Alertbox from './components/Alertbox.js';




function App(){
return <div className="App">
  <>
  <Alertbox />
  <Sidebar/>
  <Image/>
  <Navbar/>
  <StatusBoxes/>
  <TimeLeft />
<<<<<<< HEAD
  {isPopupOpen && <Popup setPopupOpen={setPopupOpen} selectedAlert={selectedAlert} />}
=======

>>>>>>> parent of b97c8e91 (Merge branch 'Jonas')
  </>
</div>
}
export default App;
