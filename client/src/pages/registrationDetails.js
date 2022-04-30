import React from "react";
import axios from "axios";
import styles from "../styles/homepage.module.css";
import st from "../styles/regdetails.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import ReactLogo from "../assets/userLogin.svg";

function Registration({ user, setUser }) {
  const [confirm_password, setConfirm_password] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    if (name==="primary_number")console.log(value)
  };
  const handleChange1 = (e) => {
    setConfirm_password(e.target.value);
  };
  let navigate=useNavigate();
  const userSubmit = (e) => {
    e.preventDefault();
    if (user.password !== confirm_password) {
      alert("Password and Confirm Password don't match");
      return;
    }
    console.log(user);
    axios.post("http://localhost:3001/register", user).then((response) => {
      console.log(response);
      
    });
    alert('Registration Successful! Please Login to Continue using Co-VAX services.');
      navigate('/userLogin');
  };
  return (
    <>
      <div className={styles.outer}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <Link to="/">
              <a href="#" style={{ textDecoration: "none" }}>
                Co-VAX{" "}
              </a>
            </Link>
          </div>
          <div className={styles.navRight}>
            <div className={styles.signUser}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <button className={styles.userbtn}>Back To Homepage</button>
              </Link>
            </div>
          </div>
        </div>
        <div className={st.outer}>
          <div className={st.box}>
            <div className={st.box_left}>
              <img className={st.userLogImg} src={ReactLogo} alt="React Logo" />
            </div>
            <div className={st.box_right}>
              <div className={st.right_upper}>
                <div className={st.title}>User Registration</div>
              </div>
              <div className={st.right_lower}>
                <form
                  onSubmit={userSubmit}
                  className={st.box_form}
                  action="/"
                  method="get"
                >
                  <div className={st.detailsBox}>
                    <div className={st.rightL}>
                      <div>
                        <label className={st.label} htmlFor="aadhar">
                          Aadhar Number:{" "}
                        </label>
                        <br />
                        <input
                          className={st.inputNo}
                          type="text"
                          name="aadhar"
                          id="aadhar"
                          value={user.aadhar}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label className={st.label} htmlFor="name">
                          Name :{" "}
                        </label>
                        <br />
                        <input
                          className={st.inputNo}
                          type="text"
                          name="name"
                          id="name"
                          value={user.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label className={st.label} htmlFor="password">
                          Password :{" "}
                        </label>
                        <br />
                        <input
                          className={st.inputNo}
                          type="password"
                          name="password"
                          id="password"
                          value={user.password}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label className={st.label} htmlFor="confirm_password">
                          Confirm Password :
                        </label>
                        <br />
                        <input
                          className={st.inputNo}
                          type="password"
                          name="confirm_password"
                          id="confirm_password"
                          value={confirm_password}
                          onChange={handleChange1}
                          required
                        />
                      </div>
                    </div>
                    <div className={st.rightM}>
                      <div>
                        <label className={st.label} htmlFor="aadhar">
                          Date of Birth :{" "}
                        </label>
                        <br />
                        <input
                          className={st.inputNo}
                          type="date"
                          name="date_of_birth"
                          id="date_of_birth"
                          value={user.date_of_birth}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className={st.label} htmlFor="gender">
                          Gender :{" "}
                        </label>
                        <br />
                        <input
                          className={st.inputNo}
                          type="text"
                          name="gender"
                          id="gender"
                          value={user.gender}
                          onChange={handleChange}
                        />
                      </div>

                      <div>
                        <label className={st.label} htmlFor="aadhar">
                          Primary Number :{" "}
                        </label>
                        <br />
                        <input
                          className={st.inputNo}
                          type="text"
                          name="primary_number"
                          id="primary_number"
                          value={user.primary_number}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label className={st.label} htmlFor="aadhar">
                          Secondary Number :{" "}
                        </label>
                        <br />
                        <input
                          className={st.inputNo}
                          type="text"
                          name="secondary_number"
                          id="secondary_number"
                          value={user.secondary_number}
                          onChange={handleChange}
                        />
                      </div>
                      {/* <div className={st.regOut}> */}

                      {/* </div> */}
                      <div className={st.newRow}>
                        <br />
                        <input
                          class={st.inputNo1}
                          type="submit"
                          value="Register"
                        ></input>
                        <div className={st.reg}>
                          Already Registered? &nbsp;
                          <Link
                            to="/userLogin"
                            style={{ textDecoration: "none" }}
                          >
                            <a href="#">Sign In </a>
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className={st.rightR}>
                      <div>
                        <label className={st.label} htmlFor="aadhar">
                          Address Lines :{" "}
                        </label>
                        <br />
                        <input
                          className={st.inputNo}
                          type="text"
                          name="address_line"
                          id="address_line"
                          value={user.address_line}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label className={st.label} htmlFor="aadhar">
                          Pincode :{" "}
                        </label>
                        <br />
                        <input
                          className={st.inputNo}
                          type="text"
                          name="pincode"
                          id="pincode"
                          value={user.pincode}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label className={st.label} htmlFor="aadhar">
                          City :{" "}
                        </label>
                        <br />
                        <input
                          className={st.inputNo}
                          type="text"
                          name="city"
                          id="city"
                          value={user.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label className={st.label} htmlFor="aadhar">
                          State :{" "}
                        </label>
                        <br />
                        <input
                          className={st.inputNo}
                          type="text"
                          name="state"
                          id="state"
                          value={user.state}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/* <div className={st.regOut}></div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;