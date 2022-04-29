import React from "react";
import st from "../styles/userReg.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FormData from "form-data";

function EnterMobile(props) {
    const UserSubmit = props.UserSubmit;
    const mobile=props.mobile;
    const StoreNo = props.StoreNo;
    // console.log(UserSubmit)

    // const sendOTPMessage = async () => {
    //     try {
    //         const data = new FormData();
    //         data.append('mobile', mobile);
    //         data.append('sender_id', 'Co-Vax');
    //         data.append('message', 'Your OTP fro Co-Vax Mobile Verification is : ');
    //         data.append('expiry', '900');
    //         const response = await axios({
    //             method:'POST',
    //             url: 'http://d7networks.com/api/verifire/send',
    //             headers: {
    //                 Authorization: ''
    //             }

    //         })
    //     }

    // }
    // const handleSubmit = () => {
    //     sendOTPMessage();
    // }
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
                    <input 
                    // onClick={handleSubmit()} 
                    class={st.submit} type="submit" value="Receive OTP"></input>
                </form>
            </div>
            
        </>
    );
}

export default EnterMobile;
