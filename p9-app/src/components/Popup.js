import React from 'react';
import './Popup.css';

export default function Popup({ setPopupOpen }) {
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
        {/* Additional content goes here */}
      </div>
    </div>
  );
}