import React, { useState } from 'react';
import './Sidebar.css';
import SidebarButtons from './SidebarButtons.js';
import ChangeUser from './ChangeUser.js';

export default function Sidebar({doorStatus}) {
  const [sidebarText, setSidebarText] = useState('START');
  const [sidebarColor, setSidebarColor] = useState('#62BE59');

  
  const handleSidebarClick = () => {
   //console.log('doorStatus:', doorStatus);
   //console.log('sidebarText:', sidebarText);

    if (sidebarText === 'START') {
      setSidebarText('PAUSE');
      setSidebarColor('#EEEEEE');
    } else {
      // måske kunne man sende en alarm 
      setSidebarText('START');
      setSidebarColor('#62BE59');
    }
  };

  return (
    <div className='Sidebar'>
      <SidebarButtons top="5%" background={sidebarColor} onClick={handleSidebarClick}>
        {sidebarText}
      </SidebarButtons>
      <SidebarButtons top="30%" background="#DB1414">STOP</SidebarButtons>
      <SidebarButtons top="55%" background="#FFFFFF">RESET</SidebarButtons>
      <ChangeUser />
    </div>
  );
}