import React, { useEffect, useState } from "react";
import './Alertbox.css';

export default function Alertbox({setPopupOpen}) {
  const [alertData, setAlertData] = useState([]); // Usestate is a "hook" (function that allows components to use states). It allows us to store the current state value (alertData) and gives us a function (setAlertData) we can use to update alertData
  const [selectedAlert, setSelectedAlert] = useState(null); // New state to store the selected alert
  
  const openPopup = () => {
    setPopupOpen(true);
  };
  
  const handleAddAlert = async (type) => { // Function to add new alerts
    try {  // We are using a try-catch here because inputting a line of text is (probably) an easy way to make errors (probably not needed before we implement functionality for the client to input new alerts in the browser instead of in code)
      const response = await fetch('http://localhost:8080/api/alerts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // This shows that the content is in a .json format
        },
        body: JSON.stringify({ type: type, message: 'New Alert Message' }), // This is what is sent to the server in the body. Currently this is how we input new alerts. 
      });

      if (!response.ok) {
        throw new Error('Failed to add new alert');
      } 
      const updatedData = await response.json();
      
      setAlertData(updatedData); // Update the state of alertData which visually adds the new alert to the table in the browser

    } catch (error) {
      console.error('Error adding alert:', error);
    }
  };
  
  useEffect(() => {
    // Fetch alert data from the server
    fetch('http://localhost:8080/api/alerts')
      .then((response) => response.json())
      .then((data) => setAlertData(data))
      .catch((error) => console.error('Error fetching alert data:', error));
  }, []); // This is an "Empty dependency array" which means that the useEffect will only be run once at server start.

const handleAlertClick = (index) => {
    setSelectedAlert(alertData[index]);
    console.log(selectedAlert);
    openPopup();
  };

  
  
  return (
    <div className="CenterBox">
      <div className="AlertHeader">
        ALERTS
      </div>
        <button onClick={() => handleAddAlert('error')}>Add Error Alert</button> 
        <button onClick={() => handleAddAlert('warning')}>Add Warning Alert</button>
        <button onClick={() => handleAddAlert('info')}>Add Info Alert</button>
      <table className="AlertList">
        <tbody>
          {alertData.map((alert, index) => (
            <tr
              key={index}
              className="AlertEntry"
              style={{ background: alert.type === 'error' ? 'red' : alert.type === 'warning' ? 'orange' : 'inherit',  display: 'inline-block', maxWidth: '100%'}}
              onClick={() => handleAlertClick(index)}
            >
              <td>{alert.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
