import React from 'react'
import st from "../styles/orderconfirm.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";

function RegSuccess() {
  return (
    <>
      <div className={st.outer}>
        <div className={st.box}>
          <div className={st.top}>
            <div className={st.content1}>Registeration Successful!</div>
          </div>
        </div>
        <div className={st.reg}>
                          Already Registered? &nbsp;
                          <Link
                            to="/userLogin"
                            style={{ textDecoration: "none" }}
                          >
                            <a href="#">Sign In </a>
                          </Link>
                        </div>
      </div>
    </>
  )
}

export default RegSuccess