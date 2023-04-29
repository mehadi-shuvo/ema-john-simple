import React, { useContext } from 'react';
import { AuthContext } from '../Providers/UserProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const location = useLocation()
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <div>Loading ...</div>
    }
    if(user){
        return children;
    }

    return <Navigate  to="/login" state={{from: location}}  replace={true}></Navigate>;
};

export default PrivateRoute;