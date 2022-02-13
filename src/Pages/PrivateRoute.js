import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Homecomponent from '../components/Homecomponent';
import AuthHandle from './AuthHandle';
const PrivateRoute = ({child, ...rest}) => {
    

  return (<Route {...rest} 
   render={()=> AuthHandle.loggedIn() ? (<Homecomponent {...child}/>):(<Redirect to="/"/>) }
        />)
};

export default PrivateRoute;