import React, { useEffect, useRef, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./navbar.css";
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { RadioButton } from '../RadioButton/RadioButton';

export const NavBar = ({ children, theme, handleThemeChange }) => {
    const h1Ref = useRef(null);
    const h2Ref = useRef(null);

    useEffect(() => {
        const h1 = h1Ref.current;
        const h2 = h2Ref.current;

        h1.style.animation = 'slide-in 0.5s forwards';
        h2.style.animation = 'slide-in 0.9s forwards';

        const animationDelay = 250;

        setTimeout(() => {
            h2.style.animationDelay = `${animationDelay}ms`;
        }, animationDelay);
    }, []);

    const iconsRef = useRef([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const icons = iconsRef.current;
        if (isVisible) {
            icons.forEach((icon, index) => {
                const delay = index * 200;
                setTimeout(() => {
                    icon.classList.add('icon-appear');
                }, delay);
            });
        }
    }, [isVisible]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 500);

        return () => {
            clearTimeout(timeout);
        };
    }, []);
    return (
        <div className='page-root'>
            <div className='page-header'>
                <div className="page-header-cont">
                    <h1 ref={h1Ref}>ManLikeEmma</h1>
                    <h2 ref={h2Ref}>Software Engineer | CEO of TechGate | Co-Founder of Attendity</h2>
                    <Sidebar />
                </div>
                <div className="links">
                    <div className="link_wrapper" ref={(el) => (iconsRef.current[0] = el)}>
                        <a href="https://github.com/alabiemmanuel177" target="_blank" rel="noopener noreferrer" className="link_icon">
                            <FiGithub style={{ pointerEvents: 'none' }} />
                        </a>
                    </div>
                    <div className="link_wrapper" ref={(el) => (iconsRef.current[1] = el)}>
                        <a href="https://www.linkedin.com/in/emmanuel-alabi-5474501a9" target="_blank" rel="noopener noreferrer" className="link_icon">
                            <FiLinkedin style={{ pointerEvents: 'none' }} />
                        </a>
                    </div>
                    <div className="link_wrapper" ref={(el) => (iconsRef.current[2] = el)}>
                        <a href="https://instagram.com/_manlike.emma?igshid=OGQ5ZDc2ODk2ZA==" target="_blank" rel="noopener noreferrer" className="link_icon">
                            <BsInstagram style={{ pointerEvents: 'none' }} />
                        </a>
                    </div>
                    <div className="link_wrapper" ref={(el) => (iconsRef.current[3] = el)}>
                        <a href="https://twitter.com/_manlikeemma" target="_blank" rel="noopener noreferrer" className="link_icon">
                            <FiTwitter style={{ pointerEvents: 'none' }} />
                        </a>
                    </div>
                    <div className="thememode">
                        <RadioButton
                            label="Light Mode"
                            value="light"
                            checked={theme === 'light'}
                            onChange={handleThemeChange}
                        />
                        <RadioButton
                            label="Dark Mode"
                            value="dark"
                            checked={theme === 'dark'}
                            onChange={handleThemeChange}
                        />
                    </div>
                </div>
            </div>
            <div className='page-body'>
                <div className={'page-output'}>{children}</div>
            </div>
        </div>
    );
};

