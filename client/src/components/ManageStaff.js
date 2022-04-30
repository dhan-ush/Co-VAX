import React from 'react'
import st from '../styles/managecenter.module.css';

function ManageStaff({center,setCenter,comp,setComp}) {
  return (
    <>
      <div className={st.outer}>
      <div className={st.box}>
        <div className={st.box_left}>
          <button onClick={() => setComp(2)}
            className={st.submit}>Add Staff</button>
        </div>
        <div className={st.box_right}>
          <button onClick={() => setComp(3)}
            className={st.submit}>Remove Staff</button>

        </div>
      </div>
      </div>
    </>
  )
}

export default ManageStaff