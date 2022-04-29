import React from "react";
import st from "../styles/userdash.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import RaiseIssue from "./RaiseIssue";
import BookSlot from "./BookSlot";
import Profile from "./Profile";

function UserDash({ user, setUser }) {
  const [issue, setIssue] = useState(1);
  const logout = () => {
    // setUser({});
    // localStorage.clear();
  };
  return (
    <>
      <div className={st.outer}>
        <div className={st.navbar}>
                    <div className={st.logo}>
                    <Link to="/" >
                            <a href="#" style={{ textDecoration: "none" }}>Co-VAX </a>
                          </Link>&nbsp;&nbsp;
                    <div className={st.dashlogo}>Dashboard</div>
                    </div>
                    <div className={st.navRight}>
                        <div className={st.logout}>
                            <button onClick={ () => setIssue(1)
                            }
                            className={st.linkk}>Book Slot</button>
                        </div>
                        <div className={st.logout}>
                            <button onClick={ () => setIssue(2)
                            }
                            className={st.linkk}>Profile</button>
                        </div>
                        <div className={st.logout}>
                            <button onClick={ () => setIssue(3)
                            }className={st.linkk}>Raise an Issue</button>
                        </div>
                        <div className={st.logout}>
                            <Link to="/" style={{ textDecoration: "none" }}><button onClick={logout} className={st.linkk}>Logout</button></Link>
                        </div>
                    </div>
            </div>
        <div className={st.lower}>
          {issue == 1 ? (
            <BookSlot user={user} setUser={setUser} />
          ) : issue == 2 ? (
            <Profile user={user} setUser={setUser} />
          ) : (
            <RaiseIssue />
          )}
        </div>
      </div>
    </>
  );
}

export default UserDash;
