// Alertbox.js
import React, { useEffect, useState } from 'react';
import './Alertbox.css';
import Popup from './Popup';

// Function to add new alerts
export const handleAddAlert = async (type, message) => {  // Takes parameters type and message, these are located in the HTML, and can be manually adjusted there
  try {
    const response = await fetch('http://localhost:8080/api/alerts', {  // Attempts to POST a JSON string consisting of type and message
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type: type, message: message }), 
    });

    if (!response.ok) {
      throw new Error('Failed to add new alert');
    }

    const newAlert = await response.json();
    return newAlert;

  } catch (error) {
    console.error('Error adding alert:', error);
  }
};

export default function Alertbox() {
  const [alertData, setAlertData] = useState([]);
  const [selectedAlert, setSelectedAlert] = useState(null);
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setSelectedAlert(null); // Reset selectedAlert
  };
  // UseEffect hook to fetch initial alert list and update the state of Alertdata
  useEffect(() => {
    fetch('http://localhost:8080/api/alerts')
      .then((response) => response.json())
      .then((data) => setAlertData(data))
      .catch((error) => console.error('Error fetching alert data:', error));
  }, []);

  const handleAddAlertClick = async (type, message) => {  // adds a new alert, with type and message depending on what button was clicked
    try {
      const newAlert = await handleAddAlert(type, message);
      setAlertData((prevData) => [...prevData, newAlert]);
    } catch (error) {
      console.error('Error adding alert:', error);
    }
  };

  const handleAlertPopup = (index) => {
    setSelectedAlert(alertData[index]);
    openPopup();
  };

  return (
    <div className="CenterBox">
   <div className="FixedButtonsContainer">
      <div className="AlertHeader">
        <h1> ALERTS</h1>
      </div>
      
      <button onClick={() => handleAddAlertClick('error', 'NEW ERROR')}>Add Error Alert</button>
      <button onClick={() => handleAddAlertClick('warning', 'NEW WARNING')}>Add Warning Alert</button>
      <button onClick={() => handleAddAlertClick('info', 'NEW INFO')}>Add Info Alert</button>
      </div>
    
      <table className="AlertList">
        <tbody>
          {alertData.slice().reverse().map((alert, index) => (
            <tr
              key={index}
              className="AlertEntry"
              style={{ background: alert.type === 'error' ? 'red' : alert.type === 'warning' ? 'orange' : 'inherit' }}
              onClick={() => handleAlertPopup(index)}
            >
              <td>{alert.message}</td>
            </tr>
          ))}
        </tbody>
      </table>

    {isPopupOpen && selectedAlert && (
      <Popup closePopup={closePopup} selectedAlert={selectedAlert} />
    )}
  </div>
);
    }