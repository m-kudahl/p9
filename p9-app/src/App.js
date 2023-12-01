import './App.css';
import "./index.css";
import Sidebar from './components/Sidebar/Sidebar.js';
import Image from './components/Logo.js';
import Navbar from "./components/Navbar.js";
import StatusBoxes from "./components/Status.js"
import TimeLeft from './components/TimeLeft.js';
import Alertbox from './components/Alertbox.js';
import Popup from './components/Popup.js';
import React, { useState } from "react";
  
function App(){
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [selectedAlert, setSelectedAlert] = useState(null);
return <div className="App">
  <>
  <Alertbox setPopupOpen={setPopupOpen} setSelectedAlert={setSelectedAlert} />
  <Sidebar/>
  <Image/>
  <Navbar/>
  <StatusBoxes/>
  <TimeLeft />
  {isPopupOpen && <Popup setPopupOpen={setPopupOpen} selectedAlert={selectedAlert} />}
  </>
</div>
}
export default App;
