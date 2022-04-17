import React from 'react';
import styles from "../styles/homepage.module.css";
import st from "../styles/userlogin.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ReactLogo from '../assets/userLogin.svg';

function Userlogin() {
    const [aadhar, setAadhar] = useState("");
    const [password, setPassword] = useState("");
    const userSubmit = (e) => {
        e.preventDefault();
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
                            <div className={st.right_upper}>
                                <div className={st.title}>
                                    Sign In for Vaccination
                                </div>
                                <div className={st.info}>
                                    Enter Your Login Credentials
                                </div>
                            </div>
                            <div className={st.right_lower}>
                                <form onSubmit={userSubmit} className={st.box_form} action="/" method="get">
                                    <input class={st.inputNo} type="text" placeholder="Enter your Aadhar Number"></input>
                                    <input class={st.inputNo} type="password" placeholder="Enter your password"></input>
                                    <input class={st.submit} type="submit" value="Sign In"></input>
                                </form>
                            </div>
                            <div className={st.regOut}>
                            <div className={st.reg}>
                                Not Yet Registered? &nbsp;
                                <Link to ="/userReg" style={{textDecoration:"none"}}>
                                <a href="#">Click Here </a>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Userlogin