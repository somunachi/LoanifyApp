import React from 'react'
import Login from '../Login/Login';
import { ResetPassword } from './ResetPassword';
import { useState } from 'react';

export const ParentResetSuccess = () => {

    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleSuccess = () => {
      setShowConfirmation(true);
    };

  return (
    <div>
        {!showConfirmation ? (
          <ResetPassword onSuccess={handleSuccess}/>
          ) : (
            <Login />
      )}
    </div>
  )
}
