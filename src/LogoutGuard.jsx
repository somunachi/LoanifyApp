import React from 'react'
import { Navigate } from 'react-router-dom';

export const LogoutGuard = ({children}) => {

    const loggedIn = false;
  return   !loggedIn ? <Navigate to='/login'/> : children

}
