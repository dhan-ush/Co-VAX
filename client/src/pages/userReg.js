import React from 'react';
import styles from "../styles/homepage.module.css";
import st from "../styles/userReg.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ReactLogo from '../assets/userLogin.svg';
import EnterMobile from '../components/EnterMobile.js';
import VerifyOtp from '../components/VerifyOtp.js';
function UserReg({ user, setUser }) {
    const [comp, setComp] = useState(1);
    const userSubmit = (e) => {
        e.preventDefault();
        const regexx = /\d{10}/;
        if (!regexx.test(user.mobile)) {
            alert("Invalid Mobile Number Entered!");
            return;
        }

        setComp(0);
    };
    const StoreNo = (e) => {
        setUser({ ...user, mobile: e.target.value })
    };
    const changeNo = (e) => {
        e.preventDefault();
        setComp(1);
    };
    return (
        <>
            <div className={styles.outer}>
                <div className={styles.navbar}>
                    <div className={styles.logo}>
                        Co-VAX
                    </div>
                    <div className={styles.navRight}>
                        {/* <div className={styles.signVac}>
                        <Link to="/vacLogin" style={{ textDecoration: "none" }}><button className={styles.userbtn}>Vaccination Center</button></Link>
                    </div> */}
                        <div className={styles.signUser}>
                            <Link to="/userLogin" style={{ textDecoration: "none" }}><button className={styles.userbtn}>Register / Sign In</button></Link>
                        </div>
                    </div>
                </div>
                <div className={st.outer}>
                    <div className={st.box}>
                        <div className={st.box_left}>
                            <img className={st.userLogImg} src={ReactLogo} alt="React Logo" />
                        </div>
                        <div className={st.box_right}>
                            {comp ? <EnterMobile UserSubmit={userSubmit} StoreNo={StoreNo} mobile={user.mobile} /> : <VerifyOtp mobile={user.mobile} changeNo={changeNo} />}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default UserReg;