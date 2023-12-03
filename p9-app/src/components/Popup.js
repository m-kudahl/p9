import React from 'react';
import './Popup.css';

export default function Popup({ setPopupOpen, selectedAlert }) {
  console.log(selectedAlert)
  // Function to close the popup
  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="Popup">
      <div className="PopupInner">
        <button className="CloseButtonPopup" onClick={closePopup}>
          Close
        </button>
        {selectedAlert && (
          <div className="content">
            <h2>{selectedAlert.message}</h2>
            <p>{selectedAlert.description}</p>
          </div>
        )}
      </div>
    </div>
  );
}