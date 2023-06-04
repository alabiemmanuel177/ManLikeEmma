import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../../components/NavBar/NavBar'
export const PageLayout = ({ theme, handleThemeChange }) => {
    return (
        <>
            <NavBar theme={theme} handleThemeChange={handleThemeChange}>
                <Outlet />
            </NavBar>
        </>

    )
}
