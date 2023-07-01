import styles from "./user.module.css";
import { useContext, useState } from "react";
import empty from "../../../../assets/Default_pfp.svg.png";
// import { useSelector } from "react-redux";
// import { selectUser } from "../../../../features/userSlice";
import { Link } from "react-router-dom";
import { AvatarInfo } from "../../../../Context";

export const User = () => {
  const {photo, setPhoto} = useContext(AvatarInfo)
  const {firstName, setFirstName} = useContext(AvatarInfo)
  const {lastName, setLastName} = useContext(AvatarInfo);
  const {role, setRole} = useContext(AvatarInfo);
  const {status, setStatus} = useContext(AvatarInfo);


  return (
    
      <div className={styles.userProfile_settings_container}>
        <div className={styles.userProfile_block}>
          <div>
          {!photo ? (
                    <img src={empty} alt="default photo" className={styles.emptyPhoto} />
                  ) : (
                    <img
                    className={styles.Useravatar}
                      alt="user profile"
                      src={photo}
                      sx={{ width: 140, height: 140 }}
                    />
                  )}
          </div>

          
            <div className={styles.about_user}>
              <h3><> {firstName} </>{lastName}
              </h3>
              <p>
                Role:
                <span className={styles.role}>{role}</span>
              </p>
              <p className={styles.status_status}>
                Status:
                {/* <span className={styles.status}>{status}</span> */}
                <span className={status === "Active" ? styles.activeStatus : styles.inactiveStatus}>{status}</span>

              </p>
            </div>
          
        </div>
        <button className={styles.edit}>
          <Link to="/settings/profile">
          Edit
          </Link></button>
      </div>
  );
};
