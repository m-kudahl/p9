import React, { useEffect, useState } from "react";
import './Alertbox.css';

export default function Alertbox({setPopupOpen}) {
  const [alertData, setAlertData] = useState([]);

 const openPopup = () => {
    setPopupOpen(true);
  };
  
  const handleAddAlert = async () => { // Function to add new alerts
    try {  // We are using a try-catch here because inputting a line of text is (probably) an easy way to make errors (probably not needed before we implement functionality for the client to input new alerts in the browser instead of in code)
      const response = await fetch('http://localhost:8080/api/alerts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // This   s that the content is in a .json format
        },
        body: JSON.stringify({ type: 'error', message: 'New Alert Message' }), // This is what is sent to the server in the body. Currently this is how we input new alerts. 
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

  return (
    <div className="CenterBox">
      
      <div className="AlertHeader">
        ALERTS
      </div>
      <button onClick={handleAddAlert}>Add Alert</button>
      <table className="AlertList">
        <tbody>
          {alertData.map((alert, index) => (
            <tr
              key={index}
              className="AlertEntry"
              onClick={openPopup}
              style={{ background: alert.type === 'error' ? 'red' : alert.type === 'warning' ? 'orange' : 'inherit' }}
              
            >
              <td>{alert.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}