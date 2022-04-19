import React from 'react';
import st from '../styles/raiseissue.module.css'
import { useState } from 'react';
import { Link } from "react-router-dom"

function RaiseIssue() {
  const [issueInput,setIssueInput]=useState("");
  return (
    <> 
    <div className={st.outer}>
        <div className={st.outerBox}>
            <div className={st.title}>
                Raise an Issue:
            </div>
            <div className={st.info}>
            Raise any issue regarding your account with our support team. Our team will contact you and resolve them at the earliest.
            </div>
            <div className={st.textbox}>
              <textarea onChange={ (e) => {
                setIssueInput(e.target.value);
              }
              }
              className={st.issueBox}
              placeholder="Briefly Describe your Issue Here.."
              type="text"  ></textarea>
            </div>
            <div className={st.btn}>
              <button className={st.submitbtn}>Submit</button>
            </div>
        </div>
    </div>

    </>
  )
}

export default RaiseIssue;
