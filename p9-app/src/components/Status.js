import { useState } from "react";
import "./Status.css";

// export custom hook to manage door status
export const useDoorStatus = () => {
  // State to store the door status and a function to update it
  const [doorStatus, setDoorStatus] = useState();

  // Function to fetch door status from the server
  const fetchDoorStatus = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/doorstatus"); // Fetch door status from the server
      const data = await response.json();
      setDoorStatus(data); // Update the door status in the state
    } catch (error) {
      console.error('Error fetching door status:', error);
    }
  };
  // Fetch door status when the component using this hook mounts
  fetchDoorStatus();
  // Return the door status and a function to set the door status
  return { doorStatus, setDoorStatus };
};

// Function to display and interact with door status
export default function StatusBoxes() {
  // Use the custom hook to manage door status
  const { doorStatus, setDoorStatus } = useDoorStatus();

  // Function to toggle the door status
  const toggleDoorStatus = () => {
    console.log('Before fetch, current door status:', doorStatus);

    // Send a PUT request to update the door status on the server
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
        // Update the door status using response
        setDoorStatus(data.doorStatus);
        console.log('After fetch, updated door status to:', data.doorStatus);
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
        <h2>MACHINE STATUS</h2>
        <div className="LaserLine"></div>
        <h2>READY</h2>
      </div>
    </div>
  );
}
