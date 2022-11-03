import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../Context/UserContext';

const PrivateRoute = ({children}) => {
    const {user, loading}=useContext(AuthContext);
    const location=useLocation();

    if(loading){
        console.log('yes loading found')
        return <div>Loading......</div>
    }
    console.log(loading);

    if(user && user.uid){
        return children;
    }
    
};

export default PrivateRoute;