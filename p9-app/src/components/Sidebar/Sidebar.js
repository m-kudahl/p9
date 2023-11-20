import React from 'react';
import './Sidebar.css';
import SidebarButtons from './SidebarButtons.js';
import ChangeUser from './ChangeUser.js';

  
export default function Sidebar() {
  return (
 <div className='Sidebar' > 
    <SidebarButtons top="5%" background="#62BE59" > START</SidebarButtons>
    <SidebarButtons top="30%" background="#DB1414" > STOP</SidebarButtons>
    <SidebarButtons top="55%" background="#FFFFFF" > RESET</SidebarButtons>
    <ChangeUser> </ChangeUser>
    </div>
  )
}


