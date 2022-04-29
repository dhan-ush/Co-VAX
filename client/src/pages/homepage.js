import React from 'react';
import styles from '../styles/homepage.module.css'
import { Link } from 'react-router-dom';
import Homepage1 from '../assets/homepageCards.png';
import HomeCarousel from '../components/homeCarousel';

function Homepage() {
    return (
        <>
            <div className={styles.outer}>
                <div className={styles.navbar}>
                    <div className={styles.logo}>
                        <Link to="/" >
                            <a href="#" style={{ textDecoration: "none" }}>Co-VAX </a>
                          </Link>
                    </div>
                    <div className={styles.navRight}>
                        <div className={styles.signVac}>
                            <Link to="/adminLogin" style={{ textDecoration: "none" }}><button className={styles.userbtn}>Admin Login</button></Link>
                        </div>
                        <div className={styles.signVac}>
                            <Link to="/centerLogin" style={{ textDecoration: "none" }}><button className={styles.userbtn}>Vaccination Center</button></Link>
                        </div>
                        <div className={styles.signUser}>
                            <Link to="/userLogin" style={{ textDecoration: "none" }}><button className={styles.userbtn}>User Login</button></Link>
                        </div>
                    </div>
                </div>
                <div className={styles.carousel}>
                    <HomeCarousel/>
                </div>
                <div className={styles.cards}>
                </div>
            </div>

        </>
    )
}

export default Homepage