import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './sidebar.css';

export default function Sidebar() {
    const location = useLocation();
    const [active, setActive] = useState("1");
    const buttonsRef = useRef([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const pathname = location.pathname;
        const name = getPathnameName(pathname);
        setActive(name);
    }, [location]);

    useEffect(() => {
        const buttons = buttonsRef.current;
        if (isVisible) {
            buttons.forEach((button, index) => {
                const delay = index * 200;
                setTimeout(() => {
                    button.classList.add('button-appear');
                }, delay)
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

    const getPathnameName = (pathname) => {
        switch (pathname) {
            case "/":
                return "1";
            case "/about":
                return "2";
            case "/projects":
                return "3";
            case "/experience":
                return "4";
            case "/contact":
                return "5";

            default:
                return "1";
        }
    };

    const handleBtn = (e) => {
        const name = e.currentTarget.getAttribute("name");
        setActive(name);
    };

    const SidebarButton = ({ title, link, name }) => {
        return (
            <NavLink to={link} style={{ textDecoration: 'none', width: "20px" }}>
                <div
                    ref={(el) => (buttonsRef.current[name - 1] = el)}
                    onClick={handleBtn}
                    name={name}
                    className={active === name ? 'page-sidebar-button active' : 'page-sidebar-button'}
                >
                    {active === name ? <div className="active-dot"></div> : <h6 className='page-sidebar-title'>{title}</h6>}
                </div>
            </NavLink>
        );
    };

    return (
        <div className='page-sidebar-root'>
            <div className='page-sidebar-body'>
                <SidebarButton name={"1"} link={'/'} title={'Home'} />
                <SidebarButton name={"2"} link={'/about'} title={'About'} />
                <SidebarButton name={"3"} link={'/projects'} title={'Project'} />
                <SidebarButton name={"4"} link={'/experience'} title={'Experience'} />
                <SidebarButton name={"5"} link={'/contact'} title={'Contact'} />
            </div>
        </div>
    );
}
