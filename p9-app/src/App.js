import React, { useState } from 'react';
import './App.css';
import "./index.css";
import Sidebar from './components/Sidebar/Sidebar.js';
import Image from './components/Logo.js';
import Navbar from "./components/Navbar.js";
import StatusBoxes from "./components/Status.js"
import TimeLeft from './components/TimeLeft.js';
import TimeEstimated from './components/TimeEstimated.js';
import Alertbox from './components/Alertbox.js';
import Popup from './components/Popup.js';



function App(){
  const [isPopupOpen, setPopupOpen] = useState(false);

return <div className="App">
  <>
  <Alertbox setPopupOpen={setPopupOpen} />
  <Sidebar/>
  <Image/>
  <Navbar/>
  <StatusBoxes/>
  <TimeLeft />
  <TimeEstimated />
  {isPopupOpen && <Popup setPopupOpen={setPopupOpen} />} 
  </>
</div>
}
export default App;
