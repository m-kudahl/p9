import "./Status.css";
import { useState } from "react";
import { useEffect } from "react";


export default function StatusBoxes() {

const [doorStatus, setdoorStatus] = useState("");
const [laserStatus, setlaserStatus] = useState("");



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
