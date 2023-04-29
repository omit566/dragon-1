import React, { useContext } from 'react';
import { AuthContext } from './../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


const PrivateRoutes = ({children}) => {
    const { user,loading } = useContext(AuthContext)
    const location = useLocation();
    console.log(location) ;
    console.log(loading,'loading.......')

    if(loading){
        
        return <Spinner  className='d-flex justify-content-center spinner-border' role='status' animation="border" variant="warning" />
    }
   

   
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>;
};

export default PrivateRoutes;