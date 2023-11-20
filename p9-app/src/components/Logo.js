import React from 'react';
import './Logo.css';
import Migatronic_logo from './Images/Migatronic_logo.png'


function Image(){
    return(
    <div>
        <img src={Migatronic_logo} alt='migatronic' className='Image'/>
    </div>
    )
}
export default Image;