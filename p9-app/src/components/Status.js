
import { useState, useEffect } from "react";
import "./Status.css";

export default function StatusBoxes() {
const [doorStatus, setDoorStatus] = useState();
//const [laserStatus, setLaserStatus] = useState();

  // Fetch status data from the JSON file
  useEffect(() => {
    const fetchDoorStatus = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/doorstatus");
        const data = await response.json();
        setDoorStatus(data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchDoorStatus();
  }, []);
   
    const toggleDoorStatus = () => {
      console.log('Before fetch, current door status:', doorStatus);
    
      fetch("http://localhost:8080/api/doorstatus", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ doorStatus }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log('After fetch, received data from server:', data.doorStatus);
          setDoorStatus(data.doorStatus);
          console.log('After fetch, updated door status in state:', doorStatus);
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
