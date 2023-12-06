import React, { useState, useEffect } from 'react';
import { useDoorStatus } from '../Status';
import { handleAddAlert } from '../Alertbox';
 
export default function StartButton({ top, background, children }) {
  const [label, setLabel] = useState('START');
  const [buttonBackground, setButtonBackground] = useState(background);
  const { doorStatus } = useDoorStatus(); // Use the useDoorStatus hook
  
  useEffect(() => {
    // This effect will run whenever doorStatus changes
    console.log('Door status changed:', doorStatus);
  }, [doorStatus]);

  const handleClick = () => {
    if (label === 'START' && doorStatus === 'LOCKED') {
      setLabel((prevLabel) => (prevLabel === 'START' ? 'PAUSE' : 'START'));
      setButtonBackground('#B7B7B7');
    } else if (label ==='PAUSE') {
      setLabel((prevLabel) => (prevLabel === 'START' ? 'PAUSE' : 'START'));
      setButtonBackground('#62BE59');
    } else if (label === 'START' && doorStatus === 'UNLOCKED') {
      handleAddAlert('error' , 'ERROR 06: DOOR NOT LOCKED')
    }
    console.log(doorStatus);
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