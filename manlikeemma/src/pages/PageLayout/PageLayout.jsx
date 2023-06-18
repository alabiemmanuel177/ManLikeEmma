import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../../components/NavBar/NavBar'
// import Background from '../../Animation/World'

export const PageLayout = ({ theme, handleThemeChange }) => {
    return (
        <>
{/*             <Background /> */}
            <NavBar theme={theme} handleThemeChange={handleThemeChange}>
                <Outlet />
            </NavBar>
        </>
    )
}
