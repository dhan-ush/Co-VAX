import React from "react";
import styles from "../styles/userprofile.module.css";
import st from "../styles/userlogin.module.css";
import Logo from "../assets/user.png";
import { Link } from "react-router-dom";

function Profile() {
  const userData = {
    aadhar: 12345678,
    name: "Naga",
    password: "naga",
    confirm_password: "naga",
    date_of_birth: "20-08-2002",
    primary_number: "12345",
    secondary_number: "678910",
    vaccination_status: 2,
    address_line: "Bits Hyderabad",
    pincode: "500078",
    city: "Hyderabad",
    state: "Telangana",
  };
  const getStatus = (vaccination_status) => {
    if (vaccination_status === 0) return "Not Vaccinated";
    else if (vaccination_status === 1) return "Partially Vaccinated";
    else return "Fully Vaccinated";
  };
  return (
    <>
      <div className={st.outer}>
        <div className={st.navbar}>
          <div className={st.logo}>
            Co-VAX&nbsp;&nbsp;
            {/* </div> */}
            <div className={st.dashlogo}>Dashboard</div>
          </div>
          <div className={st.navRight}>
            <div className={st.logout}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <button className={st.linkk}>Book Slot</button>
              </Link>
            </div>
            <div className={st.logout}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <button className={st.linkk}>Profile</button>
              </Link>
            </div>
            <div className={st.logout}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <button className={st.linkk}>Download Certificate</button>
              </Link>
            </div>
            <div className={st.logout}>
              <button>Raise an Issue</button>
            </div>
            <div className={st.logout}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <button className={st.linkk}>Logout</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.outer}>
        <div className={styles.title}>My Profile</div>
        <div className={styles.inouter}>
          <div className={styles.details}>
            <div className={styles.row}>
              <div className={styles.fieldName}>Name :</div>{" "}
              <div className={styles.content}>{userData.name}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.fieldName}>Aadhar no :</div>{" "}
              <div className={styles.content}>{userData.aadhar}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.fieldName}>Contact no :</div>
            </div>
            <div className={styles.row}>
              <div className={styles.content}>
                {userData.primary_number}(Primary)
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.content}>
                {userData.secondary_number}(Secondary)
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.fieldName}>Vaccination Status :</div>{" "}
              <div className={styles.content}>
                {getStatus(userData.vaccination_status)}
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.fieldName}>Address:</div> <br />
            </div>
            <div className={styles.row}>
              <div className={styles.content}>{userData.address_line}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.content}>{userData.pincode}</div>
            </div>
            <div className={styles.row}>
              <div className={styles.content}>
                {userData.city}, {userData.state}
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
