import "./Status.css";
import { useState } from "react";
import { useEffect } from "react";


export default function StatusBoxes() {

const [doorStatus, setdoorStatus] = useState("");
const [laserStatus, setlaserStatus] = useState("");

useEffect(() => {

  fetch('https://raw.githubusercontent.com/m-kudahl/p9/Hiwot/p9-app/src/components/Data.json')
  .then(response =>{
    if(!response.ok) {
    throw new Error(response.status);
  }
    return response.json();
  })
  .then ((data) => {
  
    console.log(data)
    const doorStatuses = data.door.map(item => item.status);
    const laserStatuses = data.laser.map(item => item.status);
    console.log('Door Statuses', doorStatuses);
    console.log('Laser Statuses', laserStatuses);

  })
  .catch(error => {
    console.error('Error fetchinhg data', error);

});
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
