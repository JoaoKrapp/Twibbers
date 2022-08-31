import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const ExternalRoute = () => {
    let { user } = useContext(AuthContext)

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    console.log("LMAO")
    return user ? <Navigate to="/" /> : <Outlet /> ;
}

export default ExternalRoute