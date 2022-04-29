import React from "react";
import axios from "axios";
import styles from "../styles/homepage.module.css";
import st from "../styles/userlogin.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import ReactLogo from "../assets/center.svg";
import { useNavigate } from "react-router-dom";

function Centerlogin(props) {
  const center = props.center;
  const setCenter = props.setCenter;
  const [credentials, setCredentials] = useState({
    center_id: "",
    password: "",
  });

  const [loginStatus, setloginStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    console.log(value)
    console.log(typeof(value))
  };

  const navigate = useNavigate();
  const centerSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    axios
      .post("http://localhost:3001/CenterLogin", credentials)
      .then((response) => {
        console.log(response);
        if (response.data.err) {
          setloginStatus("Unexpected error");
        } else if (response.data.message) {
          setloginStatus(response.data.message);
        } else {
          setCenter(response.data[0]);
          // localStorage.setItem('user', JSON.stringify(response.data[0]));
          navigate("/centerDash");
        }
      });
    // navigate("/centerDash");
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
                <div className={st.title}>Vaccination Center Login</div>
                <div className={st.info}>Enter Your Login Credentials</div>
              </div>
              <div className={st.right_lower}>
                <form
                  onSubmit={centerSubmit}
                  className={st.box_form}
                  action="/"
                  method="get"
                >
                  <input
                    class={st.inputNo}
                    type="text"
                    name="center_id"
                    id="center_id"
                    placeholder="Enter Vaccination Center ID"
                    value={credentials.center_id}
                    onChange={handleChange}
                  ></input>
                  <input
                    class={st.inputNo}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Center password"
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
              <h6>{loginStatus}</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Centerlogin;
