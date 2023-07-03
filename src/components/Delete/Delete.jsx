import React from 'react';
import del from './Delete.module.css';
import { Link } from 'react-router-dom';

function Delete({ handleCloseDelete, handleDeleteConfirmed }) {
  const handleDelete = () => {
    localStorage.removeItem('token');
    console.log('delete')
    
  };

  const handleCancel = () => {
    handleCloseDelete(); // Close the dropdown
  };

  return (
    <div className={del.deleteBody}>
      <h3>Are you sure you want to delete this account?</h3>
      <div className={del.deleteButtonsBlock}>
        <Link to= '/signup'><button className={del.yesDelete} onClick={handleDelete}>Yes</button></Link>
        <button className={del.noDelete} onClick={handleCancel}>No</button>
      </div>
    </div>
  );
}

export default Delete;
