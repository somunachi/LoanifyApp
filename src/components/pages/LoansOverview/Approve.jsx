import React from 'react'
import approve from './approve.module.css';
import img6 from '../../../assets/Generic.svg'


function Approve({handleApproveClose}) {
  return (
    <div className={approve.approveContainer}>
          <div className={approve.approveclose}>
            <img src={img6} alt='close logo' className={approve.approveclosePic} onClick={handleApproveClose}/>
          </div>
          <div className={approve.approveconfirmation}>
            <h1>Application approved</h1>
            <p>The loans application has been approved</p>
          </div>
        </div>
  )
}

export default Approve