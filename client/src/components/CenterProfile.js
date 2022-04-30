import React from 'react'
import st from '../styles/userprofile.module.css';
import Moment from 'moment';

function CenterProfile({center,setCenter,comp,setComp}) {
  return (
    <>
      <div className={st.outer}>
        <div className={st.box}>

          <div className={st.right}>
            <div className={st.rightTop}>
              <div className={st.content1}>{center.name}</div>
              <div className={st.buttondiv}>
                  <button onClick={()=> setComp(1)}  className={st.download}>Manage Staff</button>
                </div>
            </div>
            <div className={st.rightBottom}>
              <div className={st.innerLeft}>
                <div className={st.row}>
                  <div className={st.fieldName}>Center ID</div>
                  <div className={st.content}>{center.center_id}</div>
                </div>
                <div className={st.row}>
                  <div className={st.fieldName}>Vaccine Name</div>
                  <div style={{textTransform:'uppercase'}} className={st.content}>{center.vaccine_name}</div>
                </div>
              </div>
              <div className={st.innerRight}>
                <div className={st.row}>
                  <div className={st.fieldName}>Address</div>
                  <div className={st.content}>
                    {center.address_line}, {center.city}, {center.state} -{" "}
                    {center.pincode}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CenterProfile