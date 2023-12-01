import React, { useState } from 'react';

export default function StartButton({ top, background, children }) {
  const [label, setLabel] = useState('START');
  const [buttonBackground, setButtonBackground] = useState(background);

  const handleClick = () => {
    setLabel((prevLabel) => (prevLabel === 'START' ? 'PAUSE' : 'START'));
    if (label === 'START') {
      setButtonBackground('#B7B7B7');
    } else {
      setButtonBackground('#62BE59');
    }
  };

  const buttonStyle = {
    position: 'absolute',
    width: '70%',
    height: '20%',
    left: '15%',
    top: top,
    borderRadius: '8px',
    border: '1px solid #000000',
    background: buttonBackground,
    fontSize: 'calc(2vw + 2vh)',
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {label}
    </button>
  );
}