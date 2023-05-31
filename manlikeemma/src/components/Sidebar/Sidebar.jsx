import React, { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './sidebar.css'

export default function Sidebar() {
    const location = useLocation()
    const [active, setActive] = useState("1")

    useEffect(() => {
        const pathname = location.pathname
        const name = getPathnameName(pathname)
        setActive(name)
    }, [location])

    const getPathnameName = (pathname) => {
        switch (pathname) {
            case "/":
                return "1"
            case "/projects":
                return "2"
            case "/info":
                return "3"
            case "/contact":
                return "4"
            default:
                return "1"
        }
    }

    const handleBtn = (e) => {
        const name = e.currentTarget.getAttribute("name")
        setActive(name)
    }

    const SidebarButton = ({ title, link, name }) => {
        return (
            <NavLink to={link} style={{ textDecoration: 'none', width: "20px" }}>
                <div onClick={handleBtn} name={name} className={active === name ? 'page-sidebar-button' : 'page-sidebar-button'}>
                    {active === name ? <div className="active-dot"></div> : <h6 className='page-sidebar-title'>{title}</h6>}
                </div>
            </NavLink>
        )
    }

    return (
        <div className='page-sidebar-root'>
            <div className='page-sidebar-body'>
                <SidebarButton name={"1"} link={'/'} title={'Home'} />
                <SidebarButton name={"2"} link={'/projects'} title={'Project'} />
                <SidebarButton name={"3"} link={'/info'} title={'Experience'} />
                <SidebarButton name={"4"} link={'/contact'} title={'Contact'} />
            </div>
        </div>
    )
}
