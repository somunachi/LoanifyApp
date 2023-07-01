import React from 'react'
import checked from '../../../../assets/Generic.svg'
import style from "./profilesettings.module.css";

function ProfileComfirm() {
  return (
    <div className={style.profileconfirmation}>
    <div className={style.close}>
    </div>
    <div className={style.confirmation}>
      <img src={checked} alt='Checked mark'/>
      <p>Profile Saved</p>
    </div>
  </div>
  )
}

export default ProfileComfirm