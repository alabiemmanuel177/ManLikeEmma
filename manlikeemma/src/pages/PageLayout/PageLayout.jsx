import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../../components/NavBar/NavBar'
export const PageLayout = () => {
    return (
        <>
            <NavBar>
                <Outlet />
            </NavBar>
        </>

    )
}
