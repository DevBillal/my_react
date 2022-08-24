import React from 'react'
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements'

const NavBar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavLink to='/'>Pizza</NavLink>
                <NavIcon onClick={toggle}>
                    <p>Menu</p>
                    <Bars></Bars>
                </NavIcon>
            </Nav>
        </>
    )
}

export default NavBar;