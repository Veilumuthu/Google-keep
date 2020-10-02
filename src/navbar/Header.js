import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="container">
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={Link} to='/'>
                    Google Keep
                </NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to='/about'>About</NavLink>
                        </NavItem>
                    </Nav>
            </Navbar>
            
        </div>
    )
}

export default Header;