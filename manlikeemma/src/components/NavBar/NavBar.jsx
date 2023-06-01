import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import "./navbar.css"

export const NavBar = ({ children }) => {

    return (
        <div className='page-root'>
            <div className='page-header'>
                <h1>Alabi Emmanuel</h1>
                <h2>Software Engineer | CEO of TechGate | Co-Founder of Attendity</h2>
                <Sidebar />
            </div>
            <div className='page-body'>
                <div className='page-output'>{children}</div>
            </div>
        </div>)
}