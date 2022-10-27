import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';



const Header = () => {
    <div>
        <Navbar>
            <NavbarBrand href="/">Brand</NavbarBrand>
            <Nav>
                <NavItem>
                    <NavLink href="#">Somethng</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    </div>
}

export default Header;