
import { useState, useEffect } from "react";
import "./Status.css";

export default function StatusBoxes() {
const [doorStatus, setDoorStatus] = useState("");
const [laserStatus, setLaserStatus] = useState("");

useEffect(() => {

  fetch('https://raw.githubusercontent.com/m-kudahl/p9/Hiwot/p9-app/public/Data.json')
  .then(response => response.json())
  .then ((data) => {  
      setDoorStatus(data.door.status);
      setLaserStatus(data.laser.status);
    
  })
  .catch((error) => 
    console.error('Error fetching data', error));

});



  //const doorStatus = Data.door.status;
  //const laserStatus = Data.laser.status;

  return (
    <div className="Status">
      <div className="DoorStatus">
        <h2>DOOR STATUS</h2>
        <div className="DoorLine"></div>
        <h2>{doorStatus}</h2>
      </div>    
    
      <div className="LaserStatus">
        <h2>LASER STATUS</h2>
        <div className="LaserLine"></div>
        <h2 className="Ready">{laserStatus}</h2>
      </div>
    </div>
  );
  }
