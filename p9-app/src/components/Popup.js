import React from 'react';
import './Popup.css';

export default function Popup({ closePopup, selectedAlert }) {
  return (
    <div className="Popup">
      {selectedAlert && (
        <div className="PopupInner">
          <button className="CloseButtonPopup" onClick={closePopup}>
            Close
          </button>
          <div className="content">
            <h2>{selectedAlert.message}</h2>
            <p>{selectedAlert.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
