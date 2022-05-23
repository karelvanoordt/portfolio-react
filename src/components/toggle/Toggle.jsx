import React from 'react';
import './toggle.css';
import Sun from '../../img/sun.png';
import Moon from '../../img/moon.png';
import { ThemeContext } from '../../context';
import { useContext } from 'react';

export default function Toggle() {

  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" })
  }

  

  return (
    <div className='t'>

        <img src={Sun} alt="" className="t-icon" />       
        <img src={Moon} alt="" className="t-icon" />  

        <div className="t-button" onClick={handleClick}></div>

    </div>
  )
}
