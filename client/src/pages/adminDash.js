import React from "react";
import st from "../styles/admindash.module.css";
import { Link } from "react-router-dom";
import { useState , useEffect } from "react";
import AddCenter from "../components/addCenter";

function UserDash({user, setUser}) {
  const [comp, setComp] = useState(1);
  const logout = ()=>{
    // setUser({});
    // localStorage.clear();
  }
  return (
    <>
      <div className={st.outer}>
        <div className={st.navbar}>
                    <div className={st.logo}>
                        Co-VAX&nbsp;&nbsp;
                    <div className={st.dashlogo}>Dashboard</div>
                    </div>
                    <div className={st.navRight}>
                        <div className={st.logout}>
                            <button onClick={ () => setComp(1)
                            }
                            className={st.linkk}>Manage Centers</button>
                        </div>
                        <div className={st.logout}>
                            <button onClick={ () => setComp(2)
                            }
                            className={st.linkk}>Manage Suppliers</button>
                        </div>
                        {/* <div className={st.logout}>
                            <button onClick={ () => setComp(3)
                            }className={st.linkk}></button>
                        </div> */}
                        <div className={st.logout}>
                            <Link to="/" style={{ textDecoration: "none" }}><button onClick={logout} className={st.linkk}>Logout</button></Link>
                        </div>
                    </div>
            </div>
            <div className={st.lower}>
                        {
                            comp==1?<AddCenter/>:
                            <></>
                            // issue==2?<Profile user={user} setUser={setUser}/>:
                            // <RaiseIssue/>
                        }
            </div>
          </div>
    </>
  );
}

export default UserDash;
