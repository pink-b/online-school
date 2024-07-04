import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';
import Auth from '../page/Auth';
import { NOT_FOUND,  MAIN_PAGE } from '../utils/consts';
import { Context } from '..';

const AppRouter = () => {
    const {user} = useContext(Context)
    let isAuth = true
    console.log(user)
    return (
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) => {
                console.log(path)
                console.log(Component)
                return <Route key={path} path={path} element={<Component/>} exact/>
            })}
            
            {publicRoutes.map(({path, Component}) => {
                console.log(path)
                console.log(Component)
                return <Route key={path} path={path} element={<Component/>} exact/>
            })}
            <Route path="*" element={<Navigate to={MAIN_PAGE}/>}/>
        </Routes>
    );
};

export default AppRouter;