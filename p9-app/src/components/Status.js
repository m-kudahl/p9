
import { useState, useEffect } from "react";
import "./Status.css";

export default function StatusBoxes() {
const [doorStatus, setDoorStatus] = useState("");
const [laserStatus, setLaserStatus] = useState("");

useEffect(() => {

  fetch('')
  .then(response => response.json())
  .then ((data) => {
    if (data.door && data.door.length > 0) {
      // Update door status state
      setDoorStatus(data.door[0].status);
    }
    if (data.laser && data.laser.length > 0) {
      // Update laser status state
      setLaserStatus(data.laser[0].status);
    }
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
