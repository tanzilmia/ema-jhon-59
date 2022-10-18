import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { mycontext } from '../contextApi/UseContext';

const PrivetRouter = ({children}) => {
    const {user,loading} = useContext(mycontext)
    const location = useLocation()
    if(loading){
        return <p>Loadding...</p>
    }

    if(user && user?.uid){
        return children
    }
    return <Navigate to ='/login' state={{from : location}} replace></Navigate>
};

export default PrivetRouter;