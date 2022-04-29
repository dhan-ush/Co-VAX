import React from "react";
import { useState } from "react";
import st from "../styles/addcenter.module.css";
import axios from "axios";

function AddCenter(props) {
  const comp = props.comp;
  const setComp = props.setComp;
  var today = new Date();
  var dmonth = today.getMonth()+1;
  var day = today.getDate();
  if (dmonth < 10) {
    dmonth = "0" + dmonth;
  }
  if (day < 10) {
    day = "0" + day;
  }
  var dateFormat = `${today.getFullYear()}-${dmonth}-${day}`;
  const [center, setCenter] = useState({
    date: dateFormat,
    name: "",
    password: "",
    vaccine_name: "",
    address_line: "",
    city: "",
    state: "",
    pincode: ""
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCenter({ ...center, [name]: value });
  };
  const centerSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/AddCenter", center).then((response) => {console.log(response)});
  };
  return (
    <>
      <div className={st.outer}>
        <div className={st.box}>
          <div className={st.box_right}>
            <div className={st.right_upper}>
              <div className={st.title}>
                <a onClick={() => setComp(0)} className={st.arrow}>
                  &#8592;
                </a>{" "}
                Add Center
              </div>
            </div>
            <div className={st.right_lower}>
              <form
                onSubmit={centerSubmit}
                className={st.box_form}
                action="/"
                method="get"
              >
                <div className={st.detailsBox}>
                  <div className={st.rightL}>
                    <div>
                      <label className={st.label} htmlFor="name">
                        Center Name :
                      </label>
                      <br />
                      <input
                        className={st.inputNo}
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleChange}
                        value={center.name}
                        required
                      />
                    </div>
                    <div>
                      <label className={st.label} htmlFor="password">
                        Password :
                      </label>
                      <br />
                      <input
                        className={st.inputNo}
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleChange}
                        value={center.password}
                        required
                      />
                    </div>
                    <div>
                      <label className={st.label} htmlFor="vaccine_name">
                        Vaccine Name :
                      </label>
                      <br />
                      <input
                        className={st.inputNo}
                        type="text"
                        name="vaccine_name"
                        id="vaccine_name"
                        onChange={handleChange}
                        value={center.vaccine_name}
                        required
                      />
                    </div>
                    <div>
                      <label className={st.label} htmlFor="address_line">
                        Address Line :
                      </label>
                      <br />
                      <input
                        className={st.inputNo}
                        type="text"
                        name="address_line"
                        id="address_line"
                        onChange={handleChange}
                        value={center.address_line}
                        required
                      />
                    </div>
                  </div>

                  <div className={st.rightR}>

                    <div>
                      <label className={st.label} htmlFor="city">
                        City :
                      </label>
                      <br />
                      <input
                        className={st.inputNo}
                        type="text"
                        name="city"
                        id="city"
                        onChange={handleChange}
                        value={center.city}
                        required
                      />
                    </div>
                    <div>
                      <label className={st.label} htmlFor="state">
                        State :
                      </label>
                      <br />
                      <input
                        className={st.inputNo}
                        type="text"
                        name="state"
                        id="state"
                        onChange={handleChange}
                        value={center.state}
                        required
                      />
                    </div>
                    <div>
                      <label className={st.label} htmlFor="pincode">
                        Pincode :
                      </label>
                      <br />
                      <input
                        className={st.inputNo}
                        type="text"
                        name="pincode"
                        id="pincode"
                        onChange={handleChange}
                        value={center.pincode}
                        required
                      />
                    </div>

                    <div>
                      <br />
                      <input
                        class={st.inputNo1}
                        type="submit"
                        value="Submit"
                      ></input>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* <div className={st.regOut}></div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCenter;
