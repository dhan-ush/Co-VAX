import React from 'react';
import st from '../styles/raiseissue.module.css'
import { Link } from "react-router-dom"

function RaiseIssue() {
  return (
    <>
    <div className={st.outer}>
        <div className={st.outerBox}>
            <div className={st.title}>
                Raise an Issue
            </div>
        </div>
    </div>

    </>
  )
}

export default RaiseIssue;