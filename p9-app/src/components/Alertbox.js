import React, { useEffect, useState } from "react";
import './Alertbox.css';
import Popup from './Popup';

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

  const handleAddAlert = async (type) => {
  };

  useEffect(() => {
    fetch('http://localhost:8080/api/alerts')
      .then((response) => response.json())
      .then((data) => setAlertData(data))
      .catch((error) => console.error('Error fetching alert data:', error));
  }, []);

  const handleAlertClick = (index) => {
    setSelectedAlert(alertData[index]);
    openPopup();
  };

  return (
    <div className="CenterBox">
      <div className="AlertHeader">ALERTS</div>
      <button onClick={() => handleAddAlert('error')}>Add Error Alert</button>
      <button onClick={() => handleAddAlert('warning')}>Add Warning Alert</button>
      <button onClick={() => handleAddAlert('info')}>Add Info Alert</button>
      <table className="AlertList">
        <tbody>
          {alertData.map((alert, index) => (
            <tr
              key={index}
              className="AlertEntry"
              style={{ background: alert.type === 'error' ? 'red' : alert.type === 'warning' ? 'orange' : 'inherit' }}
              onClick={() => handleAlertClick(index)}
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
