import React, { useEffect, useState } from "react";
import './Alertbox.css';

export default function Alertbox() {
  const [alertData, setAlertData] = useState([]);

  const openCustomPopup = (message) => {
    const popupWindow = window.open('', 'PopupWindow', 'width=400,height=200');
    popupWindow.document.write('<html><head><title>Custom Popup</title></head><body>');
    popupWindow.document.write(`<h1>${message}</h1>`);
    popupWindow.document.write('<button onclick="window.close();">Close</button>');
    popupWindow.document.write('</body></html>');
  };

  useEffect(() => {
    // Fetch alert data from the JSON file
    fetch('/alerts.json')
      .then((response) => response.json())
      .then((data) => setAlertData(data))
      .catch((error) => console.error('Error fetching alert data:', error));
  }, []);
    // Create alert list and populate with data from json
  return (
    <div className="CenterBox">
      <div className="AlertHeader">
        ALERTS
      </div>
      <table className="AlertList"> 
        <tbody>
          {alertData.map((alert, index) => (
            <tr
              key={index}
              className="AlertEntry"
              style={{ background: alert.type === 'error' ? 'red' : alert.type === 'warning' ? 'orange' : 'inherit' }}
              onClick={() => openCustomPopup(alert.message)}
            >
              <td>{alert.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
