import React from 'react';
import decline from './decline.module.css';
import img5 from '../../../assets/closeRed.png';


function Decline({handleDeclineClose}) {
  return (
    <div className={decline.declineContainer}>
          <div className={decline.declineclose}>
            <img src={img5} alt='close logo' className={decline.declineclosePic} onClick={handleDeclineClose}/>
          </div>
          <div className={decline.declineconfirmation}>
            <h1>Application Declined</h1>
            <p>The loans application has been declined</p>
          </div>
        </div>
  )
}

export default Decline