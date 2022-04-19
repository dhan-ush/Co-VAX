import React from "react";
import st from "../styles/userdash.module.css";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import RaiseIssue from "./RaiseIssue";
import BookSlot from "./BookSlot";
import Profile from "./Profile";
import DownloadCerti from "./DownloadCerti.js";
import DownloadCertificate from "./DownloadCerti.js";

function UserDash({user, setUser}) {
  const [issue, setIssue] = useState(2);
  const logout = ()=>{
    setUser({});
    localStorage.clear();
  }
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
              <button onClick={() => setIssue(1)} className={st.linkk}>Book Slot</button>
            </div>
            <div className={st.logout}>
              <button onClick={() => setIssue(2)} className={st.linkk}>Profile</button>
            </div>
            <div className={st.logout}>
              <button onClick={() => setIssue(3)} className={st.linkk}>Download Certificate</button>
            </div>
            <div className={st.logout}>
              <button onClick={() => setIssue(4)} className={st.linkk}>
                Raise an Issue
              </button>
            </div>
            <div className={st.logout}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <button className={st.linkk} onClick={logout}>Logout</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={st.lower}>
        {
            issue == 1 ? <BookSlot /> : 
            issue == 2 ? <Profile user = {user} setUser={setUser} /> : 
            issue == 3 ? <DownloadCertificate /> : 
            <RaiseIssue/>
            }</div>
      </div>
    </>
  );
}

export default UserDash;
