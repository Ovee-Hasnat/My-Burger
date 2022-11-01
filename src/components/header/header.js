import React from "react";
import "./headerStyles.css";
import { Navbar, Nav, NavbarBrand, NavItem } from 'reactstrap';
import logo from '../../assets/burgerlogo.png';
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="navigation">
            <Navbar style={{
                backgroundColor: "#D70F64",
                height: "70px"
            }}>
                <NavbarBrand href="/" className="mr-auto ml-md-5 Brand">
                    <img src={logo} alt="Logo" width='80px' />
                </NavbarBrand>
                <Nav className="mr-md-5">
                    <NavItem>
                        <NavLink exact to="/" className="Navlink">BurgerBuilder</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink exact to="/orders" className="Navlink">Orders</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;