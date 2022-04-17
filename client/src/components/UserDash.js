import React from 'react';
import st from '../styles/userdash.module.css'
import { Link } from "react-router-dom"
import { useState } from 'react';
import RaiseIssue from './RaiseIssue';
import BookSlot from './BookSlot';
import Profile from './Profile';
import DownloadCerti from './DownloadCerti.js';

function UserDash() {
    const [issue,setIssue]=useState(1);
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
                            <Link to="/" style={{ textDecoration: "none" }}><button className={st.linkk}>Book Slot</button></Link>
                        </div>
                        <div className={st.logout}>
                            <Link to="/" style={{ textDecoration: "none" }}><button className={st.linkk}>Profile</button></Link>
                        </div>
                        <div className={st.logout}>
                            <Link to="/" style={{ textDecoration: "none" }}><button className={st.linkk}>Download Certificate</button></Link>
                        </div>
                        <div className={st.logout}>
                            <button onClick={ () => setIssue(1)
                            }className={st.linkk}>Raise an Issue</button>
                        </div>
                        <div className={st.logout}>
                            <Link to="/" style={{ textDecoration: "none" }}><button className={st.linkk}>Logout</button></Link>
                        </div>
                    </div>
            </div>
            <div className={st.lower}>
                        {issue?<RaiseIssue/>:<BookSlot/>}
            </div>
    </div>
    </>
  )
}

export default UserDash;