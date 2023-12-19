import React from 'react';
import './Logo.css';
import Placeholder from './Images/Placeholder.png'


function Image(){
    return(
    <div>
        <img src={Placeholder} alt='placeholder' className='Image'/>
    </div>
    )
}
export default Image;