import "./Status.css";

import Data from "./Data.json";

export default function StatusBoxes() {
  const doorStatus = Data.door.status;
  const laserStatus = Data.laser.status;

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
