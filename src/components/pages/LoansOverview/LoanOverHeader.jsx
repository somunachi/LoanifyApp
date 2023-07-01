import React from "react";
import avatar from '../../../assets/loangirl.svg';
import phone from '../../../assets/phone.svg';
import enve from '../../../assets/envelope.svg';
import style from './loanoverheader.module.css';
import { useState } from "react";
import Decline from "./Decline";
import Approve from "./Approve";

export const LoanOverHeader = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [showApprove, setShowApprove] = useState(false);
  const [loanStatus, setLoanStatus] = useState("Pending");


  const handleDeclineClick = () => {
    console.log("decline")
    setShowPopUp(true)
    setLoanStatus("Decline");
    setTimeout(() => {
      setShowPopUp(false); 
    }, 1000);
  } 
  const handleDeclineClose = () => {
    console.log("close")
    setShowPopUp(false)
    
  }

  const handleApproveClick = () => {
    setShowApprove(true)
    setLoanStatus("Approved");
    setTimeout(() => {
      setShowApprove(false); 
    }, 1000);
  }
  const handleApproveClose= () => {
    // setShowApprove(false)
    setTimeout(() => {
      setShowApprove(false); 
    }, 1000);

    
  }

  return (
    <div className={style.overGeneral}>
      <div className={style.overgenLeft}>
        <img src={avatar} alt="profile pic" />
        <div className={style.overgenDet}>
          <h1 className={style.overgenName}>Chioma Kahlay</h1>
          <div className={style.overgenId}>
            <span>Case ID;</span>
            <span>RRZU9D6BVG </span>
          </div>
          <div className={style.overgenAdd}>
            <span>
              <img
                src={phone}
                alt="p"
                style={{ width: "20px", height: "20px" }}
              />
              09055555558
            </span>
            <span>
              <img
                src={enve}
                alt="e"
                style={{ width: "20px", height: "20px" }}
              />
              paschalcodes@gmail.com
            </span>
          </div>
          <div className={style.overgenOfficer}>
            <span className={style.overgenOffice}>Loan Officer:</span>
            <span>Unassigned</span>
          </div>
        </div>
      </div>
      <div className={style.overgenRight}>
        <div className={style.overgenTopActive}>
          <span className={style.overgenSpans}>Loan Type:</span>
          <span>Personal Loan</span>
        </div>
        <div className={style.overgenTopActiveStatus}>
          <span className={style.overgenSpans}>Loan Status:</span>
          <div className={`${style.overgenActiveDot} ${loanStatus === 'Decline' ? style.declineDot : loanStatus === 'Approved' ? style.approveDot : style.pendingDot}`}>
            <span className={style.loan_check_check}>{loanStatus}</span>
            <p className={style.activeDot}></p>
          </div>
        </div>
        <div className={style.btnsBlock}>
        <button className={style.approve} onClick={handleApproveClick}>Approve</button>
        { showApprove && <Approve handleApproveClose={handleApproveClose}/> }
        <button className={style.decline} onClick={handleDeclineClick}>Decline</button>
        {showPopUp && <Decline handleDeclineClose={handleDeclineClose}/>}

        </div>
      </div>
    </div>
  );
};
