
import { useState } from "react";
import "./Status.css";

export default function StatusBoxes() {
const [doorStatus, setDoorStatus] = useState();
//const [laserStatus, setLaserStatus] = useState();

  // Fetch status data from the JSON file
  fetch("http://localhost:8080/api/doorstatus")
    .then((response) => response.json())
    .then((data) => {
      setDoorStatus(data);
      //setLaserStatus(data.laser.status);
    
  })
  .catch((error) => 
    console.error('Error fetching data', error));
   
    const toggleDoorStatus = () => {
      fetch("http://localhost:8080/api/doorstatus", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ doorStatus }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Response from server:", data.doorStatus);
          setDoorStatus(data.doorStatus);
          console.log("Response from server:", data.doorStatus);
        })
        .catch((error) => console.error("Error updating door status:", error));
    };
    
    
    



  return (
    <div className="Status">
      <div className="DoorStatus">
        <h2>DOOR STATUS</h2>
        <div className="DoorLine"></div>
        <h2>{doorStatus}</h2>
        <button onClick={toggleDoorStatus}>Toggle Door Status</button>
      </div>    
    
      <div className="LaserStatus">
        <h2>LASER STATUS</h2>
        <div className="LaserLine"></div>
        <h2 className="Ready"></h2>
      </div>
    </div>
  )};
