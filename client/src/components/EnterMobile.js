import React from "react";
import st from "../styles/userReg.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function EnterMobile(props) {
    const UserSubmit = props.UserSubmit;
    const mobile=props.mobile;
    const StoreNo = props.StoreNo;
    console.log(UserSubmit)
    return (
        <>
            <div className={st.right_upper}>
                <div className={st.title}>
                    Register for Vaccination
                </div>
                <div className={st.info}>
                    You will receive an OTP on your mobile number for verification
                </div>
            </div>
            <div className={st.right_lower}>
                <form onSubmit={UserSubmit} className={st.box_form} action="/" method="get">
                    {mobile===""?
                    <input onChange={StoreNo} class={st.inputNo} type="text" placeholder="Enter your Mobile Number"></input>:
                    <input onChange={StoreNo} class={st.inputNo} type="text" value={mobile}></input>
                    }
                    <input class={st.submit} type="submit" value="Receive OTP"></input>
                </form>
            </div>
            <div className={st.regOut}>
                <div className={st.reg}>
                    Already Registered? &nbsp;
                    <Link to="/userReg" style={{ textDecoration: "none" }}>
                        <a href="#">Sign In </a>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default EnterMobile;
