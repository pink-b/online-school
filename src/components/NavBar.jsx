import React, { useContext } from 'react';
import { Context } from '../index';
import { Navbar, Button, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { MAIN_PAGE } from '../utils/consts';

const CustomNavBar = () => {
    const { user } = useContext(Context);

    return (
        <Navbar bg="dark" variant="dark">
            <NavLink style={{ color: 'white' }} to={MAIN_PAGE}>DENGY_MNE_PLATY</NavLink>
            <Nav className="ml-auto" style={{ color: 'white'}}>
                <Button>Авторизация</Button>
            </Nav>
        </Navbar>
    );
};

export default CustomNavBar;
