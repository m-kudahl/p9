import React from 'react';
import './Popup.css';


export default function Popup({ setPopupOpen, selectedAlert }) {
    // Function to close the popup
    const closePopup = () => {
      setPopupOpen(false);
    };
    console.log(selectedAlert)
    return (
      <div className="Popup">
        <div className="PopupInner">
          <button className="CloseButtonPopup" onClick={closePopup}>
            Close
          </button>
          {selectedAlert && selectedAlert.description && (
            <div className="description">
              <h2>{selectedAlert.message}</h2>    
              <p>{selectedAlert.description}</p>
            </div>
          )}
        </div>
      </div>
    );
  }