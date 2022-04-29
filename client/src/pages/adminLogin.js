import React from "react";
import axios from "axios";
import styles from "../styles/homepage.module.css";
import st from "../styles/userlogin.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ReactLogo from "../assets/admin.svg";
import { useNavigate } from 'react-router-dom'
function Userlogin({ admin, setAdmin }) {
  const [credentials, setCredentials] = useState({
    aadhar: "",
    password: "",
  });
  const [loginStatus, setloginStatus] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  const navigate = useNavigate();
  const userSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    axios.post("http://localhost:3001/login", credentials).then((response) => {
      console.log(response);
      if (response.data.err) {
        setloginStatus("Unexpected error");
      } else if (response.data.message) {
        setloginStatus(response.data.message);
      } else {

        navigate("/adminDash")
      }
    });
  };
  return (
    <>
      <div className={styles.outer}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <Link to="/" >
              <a href="#" style={{ textDecoration: "none" }}>Co-VAX </a>
            </Link>
          </div>
          <div className={styles.navRight}>
            {/* <div className={styles.signVac}>
                        <Link to="/vacLogin" style={{ textDecoration: "none" }}><button className={styles.userbtn}>Vaccination Center</button></Link>
                    </div> */}
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
                <div className={st.title}>Admin Login</div>
                <div className={st.info}>Enter the Login Credentials</div>
              </div>
              <div className={st.right_lower}>
                <form
                  onSubmit={userSubmit}
                  className={st.box_form}
                  action="/"
                  method="get"
                >
                  <input
                    class={st.inputNo}
                    type="text"
                    name="aadhar"
                    id="aadhar"
                    placeholder="Enter admin username"
                    value={credentials.aadhar}
                    onChange={handleChange}
                  ></input>
                  <input
                    class={st.inputNo}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter admin password"
                    value={credentials.password}
                    onChange={handleChange}
                  ></input>
                  <input
                    class={st.submit}
                    type="submit"
                    value="Sign In"
                  ></input>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Userlogin;
