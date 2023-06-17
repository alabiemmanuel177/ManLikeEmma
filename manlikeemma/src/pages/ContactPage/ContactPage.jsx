import React, { useEffect, useState } from 'react'
import './contactpage.css';
import { BsArrowRight } from 'react-icons/bs';

export const ContactPage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 500);
  }, []);
  return (
    <div className={`contact-page-root ${fadeIn ? "fade-in" : ""}`}>
      <div className="contact-page-body">
        <h1>Send me a message!</h1>
        <h2>Got a question or proposal, or just want <br /> to say hello? Go ahead.</h2>
        <form action="" className="contact-form" style={{ marginTop: '40px' }}>
          <div className='userInfo'>
            <div className="labelInput user">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" className="underline-input" placeholder='Enter your name' style={{ fontWeight: 100 }} />
            </div>
            <div className="labelInput ">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" className="underline-input" placeholder='Enter your email address' />
            </div>
          </div>
          <div className="textArea">
            <label htmlFor="message">Your Message</label>
            <textarea id="message" className="underline-input textarea"
              placeholder='Hi, I think we need a design system for our products at Company X. 
            How soon can you hop on to discuss this?' />
          </div>
        </form>
        <button className="shoot">
          <span className="shootText">SHOOT</span> <BsArrowRight />
        </button>
      </div>
    </div>
  )
}
