import React from 'react';
import './TimeLeft.css';

function TimeLeft() {
  return (

    <div className='timeleft' style={{ background: '#D9D9D9', padding: '10px', color: 'white', textAlign: 'center', width: "241px",
    height: "150px", position: 'relative', left: "1000px", top: "150px"}}>
        
      <p>Time Left</p>
      <p>01:20:05</p>
    </div>
  );
}

export default TimeLeft;