import React, { useContext } from 'react';
import { Context } from '../index';
import { Navbar, Button, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { MAIN_PAGE } from '../utils/consts';
import {observer} from 'mobx-react-lite'

const CustomNavBar = observer(() => {
    const { user } = useContext(Context);
    console.log(user.isAuth)
    return (
        <Navbar bg="dark" variant="dark">
            <NavLink className="ms-5" style={{ color: 'white' }} to={MAIN_PAGE}>DENGY_MNE_PLATY</NavLink>
            {user.isAuth ? 
            <Nav className="ms-auto" style={{ color: 'white'}}>
                <Button className="me-2">Админ панель</Button>
                <Button className='me-2'>Войти</Button>
                <Button className='me-4' onClick={() => user.setAuth(!user.isAuth)}>Выйти</Button>
            </Nav>
        :
            <Nav className="ms-auto" style={{ color: 'white'}}>
                <Button className='me-4' onClick={() => user.setAuth(true)}>Авторизация</Button>
            </Nav>
            }
        </Navbar>
    );
});

export default CustomNavBar;
