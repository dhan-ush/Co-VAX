import React from 'react';
import styles from '../styles/homepage.module.css'
import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <>
        <div className={styles.outer}>
            <div className={styles.navbar}>
                <div className={styles.logo}>
                    Co-VAX
                </div>
                <div className={styles.navRight}>
                <div className={styles.signVac}>
                <Link to="/vacLogin" style={{ textDecoration: "none" }}><button className={styles.userbtn}>Vaccination Center</button></Link>
                </div>
                <div className={styles.signUser}>
                <Link to="/userLogin" style={{ textDecoration: "none" }}><button className={styles.userbtn}>Register / Sign In</button></Link>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Homepage