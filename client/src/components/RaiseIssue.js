import React from 'react';
import st from '../styles/raiseissue.module.css'
import { useState } from 'react';
import { Link } from "react-router-dom"

function RaiseIssue({user,setUser}) {
  const [issueInput,setIssueInput]=useState("");

  const handleSubmit= (e) => {
    e.preventDefault();
    console.log(issueInput);
    if(issueInput.length>200)
    {
      alert('Word Limit Exceeded!')
      return;
    }
    else{

    }
    // console.log(user.aadhar)
  }
  return (
    <> 
    <div className={st.outer}>
        <div className={st.outerBox}>
            <div className={st.title}>
                Raise an Issue:
            </div>
            <div className={st.info}>
            Raise any issue regarding your experience with our support team (in less than 200 words) 
            </div>
            <div className={st.info}>
             Our team will contact you and resolve them at the earliest. 
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
              <div className={st.wordcount}>Word Count:{issueInput.length}</div>
              <button onClick={handleSubmit} className={st.submitbtn}>Submit</button>
            </div>
        </div>
    </div>

    </>
  )
}

export default RaiseIssue;
