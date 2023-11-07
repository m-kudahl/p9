import React from 'react';
import '../App.css';


const Mybutton = ({ top, background, children}) =>{ 
    const MyButton = { 
      position: "relative",
      width: "241px",
      height: "150px", 
      left: "39px",
      border: "1px solid #000000", 
      background: background, 
      marginBottom: "5%"
  
  };
  
  return <button style={MyButton}>{children}</button>;
  
  };

  
function Sidebar() {
  return (
 <div className='Sidebar'> 
    <Mybutton background="#62BE59" > Start</Mybutton> 
    <Mybutton background="#DB1414" > Stop</Mybutton>
    <Mybutton background="#FFFFFF" > Reset</Mybutton>
    <Mybutton background="#EEEEEE" > Pause </Mybutton>
    </div>
  
 
  )
}

export default Sidebar