import React, { useEffect, useState } from 'react'
import './aboutpage.css'

export const AboutPage = () => {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setFadeIn(true);
        }, 500);
    }, []);
    return (
        <div className={`about-page-root ${fadeIn ? "fade-in" : ""}`}>
            <div className="pageContent">
                <div className="page-head" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginTop: '40px' }}>About Me</h2>
                    <hr style={{ width: "200px", border: "1px solid hsl(0, 0%, 67%)" }} />
                </div>
                <div className="about-page-body">
                    <div className="about-page-txt">
                        <p>Hello! I'm Alabi Emmanuel, a passionate software engineer with a diverse range of skills and expertise.
                            My journey into software development began in 2018 when I started customizing Tumblr themes, exploring HTML and CSS to create unique features like a custom reblog button.</p>
                        <br />
                        <p>Over time, I've had the privilege of working in various professional settings, <span style={{ fontWeight: '600' }}>including startups and corporate environments.</span> These experiences have shaped my skills and allowed me to explore different aspects of software engineering.</p>
                        <br />
                        <p>Currently seeking new opportunities to apply my expertise and contribute to meaningful projects, my primary focus lies in developing <span style={{ fontWeight: '600' }}>high-quality software solutions</span> that are <span style={{ fontWeight: '600' }}>accessible, inclusive, and cater to user needs.</span> I thrive on challenges and enjoy collaborating with teams to create impactful digital experiences.</p>
                        <br />
                        <div className="Technologies">
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <p><span style={{ fontWeight: '600' }}>Core Technoligies:</span></p>
                                <ul className="techList">
                                    <li>JavaScript</li>
                                    <li>React</li>
                                    <li>React Native</li>
                                    <li>Next JS</li>
                                    <li>Node JS</li>
                                    <li>Express JS</li>
                                    <li>Python</li>
                                    <li>Django</li>
                                </ul>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <p><span style={{ fontWeight: '600' }}>Others:</span></p>
                                <ul className="techList">
                                    <li>Docker</li>
                                    <li>Software Testing</li>
                                    <li>Computer Hardware</li>
                                    <li>Kubernetes</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className={"about-page-image_cont"} style={{ marginTop: '40px' }}>
                <AboutMe />
            </div>
        </div>)
}

const AboutMe = () => {
    return (
        <div className="about-me-container">
            <div className="image-container">
                <div className="overlay">
                    <div className="overlay-content">
                        <h2>Alabi Emmanuel</h2>
                        <p>Software Engineer</p>
                    </div>
                </div>
                <img
                    src="/path/to/your/photo.jpg" // Replace with the path to your actual photo
                    alt="Alabi Emmanuel"
                    className="photo"
                />
            </div>
        </div>
    );
};