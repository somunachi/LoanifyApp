import React from 'react'
import { Navigate } from 'react-router-dom';

export const RouteGuard = ({children}) => {

    const loggedIn = true;
  return loggedIn ? children : <Navigate to='/login'/>
}
