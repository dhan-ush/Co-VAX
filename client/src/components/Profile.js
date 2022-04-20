import React from "react";
import st from "../styles/userprofile.module.css";
import Logo from "../assets/user.png";
import { Link } from "react-router-dom";
import ProfileIcon from "../assets/icon-man.svg";
import Moment from "moment";

function Profile({ user, setUser }) {
  const getStatus = (vaccination_status) => {
    if (vaccination_status === 0) return "Not Vaccinated";
    else if (vaccination_status === 1) return "Partially Vaccinated";
    else return "Fully Vaccinated";
  };
  return (
    <>
      <div className={st.outer}>
        <div className={st.box}>
          <img src={ProfileIcon} className={st.img} alt="Profile Icon"></img>

          <div className={st.right}>
            <div className={st.rightTop}>
              <div className={st.content1}>{user.name}</div>
              {user.vaccination_status == 0 ? (
                <div></div>
              ) : (
                <div className={st.buttondiv}>
                  <button className={st.download}>Download Certificate</button>
                </div>
              )}
            </div>
            <div className={st.rightBottom}>
              <div className={st.innerLeft}>
                <div className={st.row}>
                  <div className={st.fieldName}>Aadhar no</div>
                  <div className={st.content}>{user.aadhar}</div>
                </div>
                <div className={st.row}>
                  <div className={st.fieldName}>Gender</div>
                  <div className={st.content}>{user.gender}</div>
                </div>
                <div className={st.row}>
                  <div className={st.fieldName}>Primary Contact</div>
                  <div className={st.content}>{user.mobile}</div>
                </div>
                <div className={st.row}>
                  <div className={st.fieldName}>Secondary Contact</div>
                  <div className={st.content}>
                    {user.secondary_number != ""
                      ? user.secondary_number
                      : "N.A."}
                  </div>
                </div>
              </div>
              <div className={st.innerRight}>
                <div className={st.row}>
                  <div className={st.fieldName}>Date of Birth</div>
                  <div className={st.content}>
                    {Moment(user.date_of_birth).format("DD-MM-YYYY")}
                  </div>
                </div>
                <div className={st.row}>
                  <div className={st.fieldName}>Address</div>
                  <div className={st.content}>
                    {user.address_line}, {user.city}, {user.state} -{" "}
                    {user.pincode}
                  </div>
                </div>

                <div className={st.row}>
                  <div className={st.fieldName}>Vaccination Status</div>
                  <div className={st.content}>
                    {getStatus(user.vaccination_status)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
