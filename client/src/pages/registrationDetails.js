import React from "react";
import styles from "../styles/homepage.module.css";
import st from "../styles/userlogin.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ReactLogo from "../assets/userLogin.svg";

function Registration() {
  const [user, setUser] = useState({
    aadhar: "",
    name: "",
    password: "",
    confirm_password: "",
    date_of_birth: "",
    primary_number: "",
    secondary_number: "",
    vaccination_status: 0,
    address_line: "",
    pincode: "",
    city: "",
    state: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const userSubmit = (e) => {
    e.preventDefault();
    if (
      user.aadhar &&
      user.name &&
      user.password &&
      user.confirm_password &&
      user.date_of_birth &&
      user.primary_number &&
      user.secondary_number &&
      user.address_line &&
      user.pincode &&
      user.city &&
      user.state
    ) {
      if (user.password !== user.confirm_password) {
        alert("Password and Confirm Password don't match");
        return;
      }
    } else {
      alert("Please fill all the details");
    }
    console.log(user);
  };
  return (
    <>
      <div className={styles.outer}>
        <div className={styles.navbar}>
          <div className={styles.logo}>Co-VAX</div>
          <div className={styles.navRight}>
            {/* <div className={styles.signVac}>
                        <Link to="/vacLogin" style={{ textDecoration: "none" }}><button className={styles.userbtn}>Vaccination Center</button></Link>
                    </div> */}
            <div className={styles.signUser}>
              <Link to="/userLogin" style={{ textDecoration: "none" }}>
                <button className={styles.userbtn}>Sign In</button>
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
                <div className={st.title}>Enter your details</div>
              </div>
              <div className={st.right_lower}>
                <form
                  onSubmit={userSubmit}
                  className={st.box_form}
                  action="/"
                  method="get"
                >
                  <div>
                    <label htmlFor="aadhar">Aadhar : </label>
                    <br />
                    <input
                      type="text"
                      name="aadhar"
                      id="aadhar"
                      value={user.aadhar}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="name">Name : </label>
                    <br />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={user.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Password : </label>
                    <br />
                    <input
                      type="password"
                      name="password"
                      id="password"
                      value={user.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="confirm_password">Confirm Password :</label>
                    <br />
                    <input
                      type="password"
                      name="confirm_password"
                      id="confirm_password"
                      value={user.confirm_password}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="aadhar">Date of Birth : </label>
                    <br />
                    <input
                      type="date"
                      name="date_of_birth"
                      id="date_of_birth"
                      value={user.date_of_birth}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="aadhar">Primary Number : </label>
                    <br />
                    <input
                      type="text"
                      name="primary_number"
                      id="primary_number"
                      value={user.primary_number}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="aadhar">Secondary Number : </label>
                    <br />
                    <input
                      type="text"
                      name="secondary_number"
                      id="secondary_number"
                      value={user.secondary_number}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="aadhar">Address Lines : </label>
                    <br />
                    <input
                      type="text"
                      name="address_line"
                      id="address_line"
                      value={user.address_line}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="aadhar">Pincode : </label>
                    <br />
                    <input
                      type="text"
                      name="pincode"
                      id="pincode"
                      value={user.pincode}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="aadhar">City : </label>
                    <br />
                    <input
                      type="text"
                      name="city"
                      id="city"
                      value={user.city}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="aadhar">State : </label>
                    <br />
                    <input
                      type="text"
                      name="state"
                      id="state"
                      value={user.state}
                      onChange={handleChange}
                    />
                  </div>
                  <input
                    class={st.submit}
                    type="submit"
                    value="Register"
                  ></input>
                </form>
              </div>
              <div className={st.regOut}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Registration;
