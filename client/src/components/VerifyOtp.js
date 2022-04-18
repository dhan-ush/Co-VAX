import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import st from "../styles/userReg.module.css";
import { Link } from "react-router-dom";

function VerifyOtp(props){
    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/regDetails`; 
    navigate(path);
  }

  
    const changeNo=props.changeNo;
    const mobile=props.mobile.substr(6);
    const formSubmit= (e) => {
        e.preventDefault();
    };
    return(
        <>
        <div className={st.right_upper}>
                                <div className={st.title}>
                                    OTP Verification
                                </div>
                                <div className={st.info}>
                                    An OTP has been sent to XXX XXX {mobile} <div></div>
                                    Not Your Mobile Number?&nbsp;
                                    <a onClick={changeNo}href="#" style={{color:"#949fb2"}}>Click Here</a>
                                </div>
                                <div className={st.info}>
                                    
                                
                                </div>
                            </div>
                            <div className={st.right_lower}>
                                <form onSubmit={formSubmit} className={st.box_form} action="/" method="get">
                                    <input class={st.inputNo} type="text" placeholder="Enter OTP"></input>
                                    <input 
                                    onClick={routeChange} 
                                    class={st.submit} type="submit" value="Verify OTP"></input>
                                </form>
                            </div>
        </>
    );
}

export default VerifyOtp;
