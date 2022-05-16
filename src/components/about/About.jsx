import React from 'react';
import './about.css';
import Award from '../../img/award.png'

export default function About() {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card ">
                <img src="https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg" 
                alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
           <h1 className="a-title">About Me</h1>
           <p className="a-sub">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
           Consequuntur eligendi recusandae repellendus officia doloremque. Officia, totam, 
           amet repellat rem at maxime accusantium iure, voluptatem dolorum qui alias consequatur ab. Tempora!</p>
           <div className="a-award">
               <img src={Award} alt="" className="a-award-img" />
               <div className="a-award-texts">
                   <h4 className="a-award-title">International Desing Award</h4>
                   <p className="a-award-desc">
                       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae voluptatibus facere molestiae veniam unde quis? Optio sed velit, officiis corrupti assumenda deleniti repellendus nesciunt architecto pariatur, magni iste sapiente maxime.
                   </p>
               </div>
           </div>
        </div>
    </div>
  )
}
