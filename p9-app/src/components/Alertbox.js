// Alertbox.js
import React, { useEffect, useState } from 'react';
import './Alertbox.css';
import Popup from './Popup';

export const handleAddAlert = async (type, message) => {
  try {
    const response = await fetch('http://localhost:8080/api/alerts', {
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

  useEffect(() => {
    fetch('http://localhost:8080/api/alerts')
      .then((response) => response.json())
      .then((data) => setAlertData(data))
      .catch((error) => console.error('Error fetching alert data:', error));
  }, []);

  const handleAddAlertClick = async (type, message) => {
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
      <div className="AlertHeader">ALERTS</div>
      <button onClick={() => handleAddAlertClick('error', 'NEW ERROR')}>Add Error Alert</button>
      <button onClick={() => handleAddAlertClick('warning', 'NEW WARNING')}>Add Warning Alert</button>
      <button onClick={() => handleAddAlertClick('info', 'NEW INFO')}>Add Info Alert</button>
      <table className="AlertList">
        <tbody>
          {alertData.map((alert, index) => (
            <tr
              key={index}
              className="AlertEntry"
              style={{ background: alert.type === 'error' ? 'red' : alert.type === 'warning' ? 'orange' : 'inherit', display: 'inline-block', maxWidth: '100%' }}
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
