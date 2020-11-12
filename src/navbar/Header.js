import React from 'react';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../redux/auth';

const Header = ({ startLogout }) => {
    return (
        <div className="container">
            <Navbar color="dark" dark expand="md">
                <NavbarBrand tag={Link} to='/notes'>
                    Google Keep
                </NavbarBrand>
                <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={Link} to='/about'>About</NavLink>
                    </NavItem>
                </Nav>
                <Nav className="mr-right" navbar>
                    <NavLink><button className="butnav" onClick={startLogout}>Logout</button></NavLink>
                </Nav>
            </Navbar>

        </div>
    )
}

const mapProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})
export default connect(undefined, mapProps)(Header);