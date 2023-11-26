import React, { useState } from 'react';
import './Sidebar.css';
import SidebarButtons from './SidebarButtons.js';
import ChangeUser from './ChangeUser.js';

export default function Sidebar() {
  const [SidebarText, setButtonText] = useState('START');
  const [SidebarColor, setButtonColor] = useState('#62BE59');

  const handleSidebarClick = () => {
    if (SidebarText === 'START') {
      setButtonText('PAUSE');
      setButtonColor('#FFFFF'); // Change color for 'PAUSE'
    } else {
      setButtonText('START');
      setButtonColor('#62BE59'); // Change color for 'START'
    }
  };

  return (
    <div className='Sidebar'>
      <SidebarButtons top="5%" background={SidebarColor} onClick={handleSidebarClick}>
        {SidebarText}
      </SidebarButtons>
      <SidebarButtons top="30%" background="#DB1414"> STOP</SidebarButtons>
      <SidebarButtons top="55%" background="#FFFFFF"> RESET</SidebarButtons>
      <ChangeUser> </ChangeUser>
    </div>
  );
}
