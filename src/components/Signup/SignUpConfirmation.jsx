import React from 'react';
import style from './signupconfirmation.module.css';
import close from '../../assets/close.svg';
import { Link } from 'react-router-dom';

const SignUpConfirmation = ({ handleClosePop }) => {
  return (
    <div className={style.confirmEmail}>
      <div className={style.confirmation}>
        <Link to='/confirmation'>
          <img
            src={close}
            alt='close logo'
            onClick={handleClosePop}
            className={style.closeIcon}
          />
        </Link>
        <p>Confirmation email resent</p>
      </div>
    </div>
  );
};

export default SignUpConfirmation;
