import React from 'react';
import './toggle.css';
import Sun from '../../img/sun.png';
import Moon from '../../img/moon.png';

export default function Toggle() {
  return (
    <div className='t'>

        <img src={Sun} alt="" className="t-icon" />       
        <img src={Moon} alt="" className="t-icon" />  

        <div 
        className="t-button"></div>

    </div>
  )
}
