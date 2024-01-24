import React, { useEffect, useState } from 'react';
import './contactpage.css';
import { BsArrowRight } from 'react-icons/bs';

export const ContactPage = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 500);
  }, []);

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (name.trim() === '') {
      errors.name = 'Please enter your name';
      isValid = false;
    }

    if (email.trim() === '') {
      errors.email = 'Please enter your email address';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (message.trim() === '') {
      errors.message = 'Please enter your message';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('message', message);

      try {
        const response = await fetch('https://formspree.io/f/mnqyeojp', {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        });

        if (response.ok) {
          alert('Message sent! Thank you for contacting us.');
          setName('');
          setEmail('');
          setMessage('');
          setErrors({});
        } else {
          alert('An error occurred while sending the message. Please try again later.');
        }
      } catch (error) {
        alert('An error occurred while sending the message. Please check your network connection.');
      }
    }
  };

  return (
    <div className={`contact-page-root ${fadeIn ? 'fade-in' : ''}`}>
      <div className="contact-page-body">
        <h1>Send me a message!</h1>
        <h2>Got a question or proposal, or just want <br /> to say hello? Go ahead.</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className='userInfo'>
            <div className="labelInput user">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                className="underline-input"
                placeholder='Enter your name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="labelInput">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                className="underline-input"
                placeholder='Enter your email address'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
          </div>
          <div className="textArea">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              className="underline-input textarea"
              placeholder='Hi, I think we need a design system for our products at Company X. 
            How soon can you hop on to discuss this?'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <button type="submit" className="shoot">
            <span className="shootText">SHOOT</span> <BsArrowRight />
          </button>
        </form>
      </div>
    </div>
  );
};
