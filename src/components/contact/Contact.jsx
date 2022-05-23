import React from 'react';
import './contact.css';
import Phone from '../../img/phone.png';
import Email from '../../img/email.png';
import Address from '../../img/address.png';
import { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';



function Contact() {



    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;


    const handleSubmit = (e) => {
        e.preventDefault();
        
            emailjs.sendForm('vanoordtkarel_emailjs', 'template_eicx6do', formRef.current, 'erhe40ah7bzwz331g')
              .then((result) => {
                  console.log(result.text);
                  setDone(true);
              }, (error) => {
                  console.log(error.text);
              });

    };


  return (
    <div className='c'>
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
                <h1 className="c-title">Let's have a talk!</h1>
                <div className="c-info">
                    <div className="c-info-item">
                        <img src={Phone} alt="" className="c-icon" />
                        +51 991 327 262
                    </div>
                    <div className="c-info-item">
                        <img src={Email} alt="" className="c-icon" />
                        vanoordtkarel@gmail.com
                    </div>
                    <div className="c-info-item">
                        <img src={Address} alt="" className="c-icon" />
                        Lima, PE 🇵🇪
                    </div>
                </div>
            </div>

            <div className="c-right">
                <p className="c-desc">
                    <b>What are you interested in?</b> Get in touch with me to discuss a project, an idea
                    or a proposal.
                </p>

                <form ref={formRef} onSubmit={handleSubmit} >
                    <input  style = {{backgroundColor: darkMode && "#333"}}  type='text' placeholder='Name' name='user_name' />
                    <input  style = {{backgroundColor: darkMode && "#333"}}  type='text' placeholder='Subject' name='user_subject' />
                    <input  style = {{backgroundColor: darkMode && "#333"}}   type='text' placeholder='Email' name='user_email' />
                    <textarea style = {{backgroundColor: darkMode && "#333"}} rows='5' placeholder='Message' name='message' />
                    <button>Submit</button>
                    {done && 'Thanks for your email! We will be in touch soon'}
                </form>
            </div>
        </div>        
    </div>
  )
};

export default Contact