import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import "./navbar.css";
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { BsInstagram } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import { RadioButton } from '../RadioButton/RadioButton';

export const NavBar = ({ children, theme, handleThemeChange }) => {
    return (
        <div className='page-root'>
            <div className='page-header'>
                <div className="page-header-cont">
                    <h1>ManLikeEmma</h1>
                    <h2>Software Engineer | CEO of TechGate | Co-Founder of Attendity</h2>
                    <Sidebar />
                </div>
                <div className="links">
                    <div className='link_wrapper' style={{ textDecoration: 'none' }}>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='link_icon'>
                            <FiGithub style={{ pointerEvents: 'none' }} />
                        </a>
                    </div>
                    <div className='link_wrapper' style={{ textDecoration: 'none' }}>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='link_icon'>
                            <FiLinkedin style={{ pointerEvents: 'none' }} />
                        </a>
                    </div>
                    <div className='link_wrapper' style={{ textDecoration: 'none' }}>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='link_icon'>
                            <BsInstagram style={{ pointerEvents: 'none' }} />
                        </a>
                    </div>
                    <div className='link_wrapper' style={{ textDecoration: 'none' }}>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='link_icon'>
                            <FiTwitter style={{ pointerEvents: 'none', textDecoration: 'none' }} />
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
                <div className='page-output'>{children}</div>
            </div>
        </div>
    );
};
