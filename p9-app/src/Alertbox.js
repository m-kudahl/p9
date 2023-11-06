import React from "react";
import './Alertbox.css'

export default function Alertbox() {
  const openCustomPopup = () => {
    // Create a new popup window
    const popupWindow = window.open('', 'PopupWindow', 'width=400,height=200');

    // Write your custom message to the popup window
    popupWindow.document.write('<html><head><title>Custom Popup</title></head><body>');
    popupWindow.document.write('<h1>Placeholder for error message</h1>');
    popupWindow.document.write('<button onclick="window.close();">Close</button>');
    popupWindow.document.write('</body></html>');
  };
  return (
    <div className="BackgroundBox">
        <div className="CenterBox"> 
            <div className="AlertHeader">
                ALERTS
            </div>
            <div className="AlertList">
                <div className="AlertEntry" style={{background: 'red'}} onClick={openCustomPopup}> ERROR 7: PLACEHOLDER </div>
                <div className="AlertEntry" style={{background: 'orange'}}onClick={openCustomPopup}>  WARNING: PLACEHOLDER </div>
                <div className="AlertEntry" onClick={openCustomPopup}> Placeholder </div>
            </div>

        </div> 
    </div>
  )
}
