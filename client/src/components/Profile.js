import React from "react";
import st from "../styles/userprofile.module.css";
import Logo from "../assets/user.png";
import { Link } from "react-router-dom";
import ProfileIcon from"../assets/icon-man.svg";

function Profile() {
  const user = {
    aadhar: 12345678,
    name: "Akshat Khaitan",
    password: "naga",
    gender:"Male",
    date_of_birth: "20-08-2002",
    primary_number: "12345",
    secondary_number: "",
    vaccination_status: 2,
    address_line: "Bits Hyderabad",
    pincode: "500078",
    city: "Hyderabad",
    state: "Telangana",
  };
  const getStatus = (vaccination_status) => {
    if (vaccination_status === 0) return "Not Vaccinated";
    else if (vaccination_status === 1) return "Partially Vaccinated";
    else return "Fully Vaccinated";
  };
  return (
    <>
        <div className={st.outer}>
          <div className={st.box}>
            <div className={st.left}>
              <div className={st.icon}>
              <img src={ProfileIcon} className={st.img} alt="Profile Icon"></img>
              </div>
            </div>

            <div className={st.right}>
              <div className={st.rightTop}>
              <div className={st.content1}>{user.name}</div>
              {user.vaccination_status==0?<div></div>:
              <div className={st.buttondiv} >
              <button className={st.download}>Download Certificate</button>
              </div>
              }
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
                  <div className={st.fieldName}>Date of Birth</div>
                  <div className={st.content}>{user.date_of_birth}</div>
                </div>
                <div className={st.row}>
                  <div className={st.fieldName}>Primary Contact</div>
                  <div className={st.content}>{user.primary_number}</div>
                </div>
                <div className={st.row}>
                  <div className={st.fieldName}>Secondary Contact</div>
                  <div className={st.content}>{user.secondary_number!=''?user.secondary_number:"N.A."}</div>
                </div>
              </div>
              <div className={st.innerRight}>
                <div className={st.row}>
                  <div className={st.fieldName}>Address Line</div>
                  <div className={st.content}>{user.address_line}</div>
                </div>
                <div className={st.row}>
                  <div className={st.fieldName}>City</div>
                  <div className={st.content}>{user.city}</div>
                </div>
                <div className={st.row}>
                  <div className={st.fieldName}>State</div>
                  <div className={st.content}>{user.state}</div>
                </div>
                <div className={st.row}>
                  <div className={st.fieldName}>Pincode</div>
                  <div className={st.content}>{user.pincode}</div>
                </div>
                <div className={st.row}>
                  <div className={st.fieldName}>Vaccination Status</div>
                  <div className={st.content}>{getStatus(user.vaccination_status)}</div>
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
