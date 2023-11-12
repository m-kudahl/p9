import React from 'react';
import './Sidebar.css';


const Mybutton = ({ top, background, children}) =>{ 
    const MyButton = { 
      position: "absolute",
      width: "70%",
      height: "20%", 
      left: "15%",
      top: top,
      borderRadius: "8px",
      border: "1px solid #000000", 
      background: background,
      fontSize: 'calc(2vw + 2vh)',
    };
    
  return <button style={MyButton}>{children}</button>;
  };

  
function Sidebar() {
  return (
 <div className='Sidebar'> 
    <Mybutton top="5%" background="#62BE59" > Start</Mybutton>
    <Mybutton top="30%" background="#DB1414" > Stop</Mybutton>
    <Mybutton top="55%" background="#FFFFFF" > Reset</Mybutton>
    </div>
 
  )
}

export default Sidebar

