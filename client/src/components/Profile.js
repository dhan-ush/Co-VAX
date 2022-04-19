import { React, useEffect } from "react";
import styles from "../styles/userprofile.module.css";
import st from "../styles/userlogin.module.css";
import Logo from "../assets/user.png";
import { Link } from "react-router-dom";

function Profile({ user, setUser }) {
  const getStatus = (vaccination_status) => {
    if (vaccination_status === 0) return "Not Vaccinated";
    else if (vaccination_status === 1) return "Partially Vaccinated";
    else return "Fully Vaccinated";
  };
  return (
    <>
      <div className={styles.outer}>
        <div className={styles.title}>My Profile</div>
        <div className={styles.inouter}>
          <div className={styles.details}>
            <div className={styles.row}>
              <div className={styles.fieldName}>Name :</div>{" "}
              <div className={styles.content}>{user.name}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.fieldName}>Aadhar no :</div>{" "}
              <div className={styles.content}>{user.aadhar}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.fieldName}>Contact no :</div>
            </div>
            <div className={styles.row}>
              <div className={styles.content}>
                {user.primary_number}(Primary)
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.content}>
                {user.secondary_number}(Secondary)
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.fieldName}>Vaccination Status :</div>{" "}
              <div className={styles.content}>
                {getStatus(user.vaccination_status)}
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.fieldName}>Address:</div> <br />
            </div>
            <div className={styles.row}>
              <div className={styles.content}>{user.address_line}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.content}>{user.pincode}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.content}>
                {user.city}, {user.state}
              </div>
            </div>
          </div>
          <div className={st.box_left}>
            <img className={st.userLogImg} src={Logo} alt="Logo" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
