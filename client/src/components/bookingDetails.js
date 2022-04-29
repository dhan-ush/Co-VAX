import React from "react";
import st from "../styles/bookingdetails.module.css";
import { Link } from "react-router-dom";
import ProfileIcon from "../assets/icon-man.svg";
import OrangeIcon from "../assets/exclamation.png";
import RedIcon from "../assets/cross.svg";
import GreenIcon from "../assets/tick.svg";
import Moment from "moment";

function bookingDetails(props) {
  const user = props.user;
  const vaccinationDetails = props.vaccinationDetails;
  const setComp = props.setComp;
  const daysPassed = props.daysPassed;
  return (
    <>
      <div className={st.outer}>
        <div className={st.box}>
          <div className={st.top}>
            <div className={st.icon}>
              <img
                src={ProfileIcon}
                className={st.img}
                alt="Profile Icon"
              ></img>
            </div>
            <div className={st.content1}>{user.name}</div>
          </div>

          <div className={st.mid}>
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
              <div className={st.content}>
                {Moment(user.date_of_birth).format("DD-MM-YYYY")}
              </div>
            </div>
            <div className={st.row}>
              <div className={st.fieldName}>Primary Contact</div>
              <div className={st.content}>{user.mobile}</div>
            </div>
          </div>

          <div className={st.linee}>
            <hr></hr>
          </div>

          <div className={st.bottom}>
            {user.vaccination_status == 0 ? (
              <>
                <div className={st.boxes}>
                  <div className={st.bTop}>
                    <div className={st.bIcon}>
                      <img
                        className={st.bImg}
                        src={OrangeIcon}
                        alt="React Logo"
                      />
                    </div>
                    <div className={st.bTitle}>DOSE 1</div>
                  </div>
                  <div className={st.cautionO}>
                    Click on the Schedule Button to Schedule your Slot 1 Booking
                  </div>
                  <div className={st.bBtn}>
                    <input
                      onClick={() => setComp(2)}
                      type="submit"
                      className={st.schedule}
                      value="Schedule"
                    ></input>
                  </div>
                </div>
                <div className={st.boxes}>
                  <div className={st.bTop}>
                    <div className={st.bIcon}>
                      <img
                        className={st.bImgr}
                        src={RedIcon}
                        alt="React Logo"
                      />
                    </div>
                    <div className={st.bTitle}>DOSE 2</div>
                  </div>
                  <div className={st.cautionR}>Complete Your Dose 1</div>
                  <div className={st.cautionR}>Vaccination to Proceed</div>
                </div>
              </>
            ) : user.vaccination_status == 2 && daysPassed >= 70 ? (
              <>
                <div className={st.boxes}>
                  <div className={st.bTop}>
                    <div className={st.bIcon}>
                      <img
                        className={st.bImg}
                        src={GreenIcon}
                        alt="React Logo"
                      />
                    </div>
                    <div className={st.bTitle}>DOSE 1</div>
                  </div>
                  <div style={{textTransform:'uppercase'}} className={st.cautionG}>{vaccinationDetails.dose1_vaccine_name}</div>
                  <div className={st.cautionG}>{vaccinationDetails.dose1_center_id}</div>
                  <div className={st.cautionG}>{Moment(vaccinationDetails.dose1_date).format("DD-MM-YYYY")}</div>
                </div>
                <div className={st.boxes}>
                  <div className={st.bTop}>
                    <div className={st.bIcon}>
                      <img
                        className={st.bImgr}
                        src={OrangeIcon}
                        alt="React Logo"
                      />
                    </div>
                    <div className={st.bTitle}>DOSE 2</div>
                  </div>
                  <div className={st.cautionO}>
                    Click on the Schedule Button to Schedule your Slot 2 Booking
                  </div>
                  <div className={st.bBtn}>
                    <input
                      onClick={() => setComp(2)}
                      type="submit"
                      className={st.schedule}
                      value="Schedule"
                    ></input>
                  </div>
                </div>
              </>
            ) : user.vaccination_status == 2 && daysPassed < 70 ? (
              <>
                <div className={st.boxes}>
                  <div className={st.bTop}>
                    <div className={st.bIcon}>
                      <img
                        className={st.bImg}
                        src={GreenIcon}
                        alt="React Logo"
                      />
                    </div>
                    <div className={st.bTitle}>DOSE 1</div>
                  </div>
                  <div style={{textTransform:'uppercase'}} className={st.cautionG}>{vaccinationDetails.dose1_vaccine_name}</div>
                  <div className={st.cautionG}>{vaccinationDetails.dose1_center_id}</div>
                  <div className={st.cautionG}>{Moment(vaccinationDetails.dose1_date).format("DD-MM-YYYY")}</div>
                </div>
                <div className={st.boxes}>
                  <div className={st.bTop}>
                    <div className={st.bIcon}>
                      <img
                        className={st.bImgr}
                        src={RedIcon}
                        alt="React Logo"
                      />
                    </div>
                    <div className={st.bTitle}>DOSE 2</div>
                  </div>
                  <div className={st.cautionR}>
                    Please Wait for {70 - daysPassed} days
                  </div>
                  <div className={st.cautionR}>
                    To Schedule Dose 2 Vaccination
                  </div>
                </div>
              </>
            ) : user.vaccination_status == 4 ? (
              <>
                <div className={st.boxes}>
                  <div className={st.bTop}>
                    <div className={st.bIcon}>
                      <img
                        className={st.bImg}
                        src={GreenIcon}
                        alt="React Logo"
                      />
                    </div>
                    <div className={st.bTitle}>DOSE 1</div>
                  </div>
                  <div style={{textTransform:'uppercase'}} className={st.cautionG}>{vaccinationDetails.dose1_vaccine_name}</div>
                  <div className={st.cautionG}>{vaccinationDetails.dose1_center_id}</div>
                  <div className={st.cautionG}>{Moment(vaccinationDetails.dose1_date).format("DD-MM-YYYY")}</div>
                </div>
                <div className={st.boxes}>
                  <div className={st.bTop}>
                    <div className={st.bIcon}>
                      <img
                        className={st.bImg}
                        src={GreenIcon}
                        alt="React Logo"
                      />
                    </div>
                    <div className={st.bTitle}>DOSE 2</div>
                  </div>
                  <div style={{textTransform:'uppercase'}} className={st.cautionG}>{vaccinationDetails.dose1_vaccine_name}</div>
                  <div className={st.cautionG}>{vaccinationDetails.dose2_center_id}</div>
                  <div className={st.cautionG}>{Moment(vaccinationDetails.dose2_date).format("DD-MM-YYYY")}</div>
                </div>
              </>
            ) : user.vaccination_status == 1 ? (
              <>
                <div className={st.boxes}>
                  <div className={st.bTop}>
                    <div className={st.bIcon}>
                      <img
                        className={st.bImg}
                        src={OrangeIcon}
                        alt="React Logo"
                      />
                    </div>
                    <div className={st.bTitle}>DOSE 1</div>
                  </div>
                  <div className={st.cautionG}>
                    You have Successfully Completed Slot Booking for Dose 1
                  </div>
                </div>
                <div className={st.boxes}>
                  <div className={st.bTop}>
                    <div className={st.bIcon}>
                      <img
                        className={st.bImgr}
                        src={RedIcon}
                        alt="React Logo"
                      />
                    </div>
                    <div className={st.bTitle}>DOSE 2</div>
                  </div>
                  <div className={st.cautionR}>Complete Your Dose 1</div>
                  <div className={st.cautionR}>Vaccination to Proceed</div>
                </div>
              </>
            ) : (
              <>
                <div className={st.boxes}>
                  <div className={st.bTop}>
                    <div className={st.bIcon}>
                      <img
                        className={st.bImg}
                        src={GreenIcon}
                        alt="React Logo"
                      />
                    </div>
                    <div className={st.bTitle}>DOSE 1</div>
                  </div>
                  <div style={{textTransform:'uppercase'}} className={st.cautionG}>{vaccinationDetails.dose1_vaccine_name}</div>
                  <div className={st.cautionG}>{vaccinationDetails.dose1_center_id}</div>
                  <div className={st.cautionG}>{Moment(vaccinationDetails.dose1_date).format("DD-MM-YYYY")}</div>
                </div>
                <div className={st.boxes}>
                  <div className={st.bTop}>
                    <div className={st.bIcon}>
                      <img
                        className={st.bImgr}
                        src={OrangeIcon}
                        alt="React Logo"
                      />
                    </div>
                    <div className={st.bTitle}>DOSE 2</div>
                  </div>
                  <div className={st.cautionG}>
                    You have Successfully Completed Slot Booking for Dose 2
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default bookingDetails;
