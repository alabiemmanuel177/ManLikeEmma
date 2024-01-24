import React, { useEffect, useState } from 'react'
import './homepage.css'
export const HomePage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 500);
  }, []);

  return (
    <div className='home-page-root'>
      <div className="home-page-body">
        <div className="home-page-card-container">
          <div className={`home-page-card ${fadeIn ? "fade-in" : ""}`}>
            <h2>Hello, I'm <span className='nameColour'>Alabi Emmanuel</span>,</h2>
            <h1>I create comprehensive solutions for the digital landscape.</h1>
            <h3>I'm a passionate Software Engineer with expertise in front-end and back-end development.
              With a strong focus on creating intuitive and user-friendly experiences,
              I specialize in utilizing technologies such as React, React Native, Next.js and Python to build exceptional web and mobile applications.</h3>
          </div>
        </div>

      </div>

    </div>
  )
}
