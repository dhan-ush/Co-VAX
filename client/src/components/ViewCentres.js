import React from "react";
import st from "../styles/viewcentres.module.css";
import { useState } from "react";
import axios from "axios";
import Moment from "moment";

function ViewCentres(props) {
  const [vaccine, setVaccine] = useState("Covaxin");
  const user = props.user;
  const setUser = props.setUser;
  const comp = props.comp;
  const setComp = props.setComp;
  const [tab, setTab] = useState(0);
  const [search, setSearch] = useState({
    pincode: "",
    vaccine_name: "covaxin",
  });

  const [selection, setSelection] = useState({
    center_id: "",
    date: "",
  });

  var days = [];
  var today = new Date();
  var day1 = new Date(today);
  days.push(Moment(day1).format("YYYY-MM-DD"));
  today.setDate(today.getDate() + 1);
  var day2 = new Date(today);
  days.push(Moment(day2).format("YYYY-MM-DD"));
  today.setDate(today.getDate() + 1);
  var day3 = new Date(today);
  days.push(Moment(day3).format("YYYY-MM-DD"));
  today.setDate(today.getDate() + 1);
  var day4 = new Date(today);
  days.push(Moment(day4).format("YYYY-MM-DD"));
  today.setDate(today.getDate() + 1);
  var day5 = new Date(today);
  days.push(Moment(day5).format("YYYY-MM-DD"));

  const [centers, setcenters] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const regexx = /\d{6}/;
    if (search.vaccine_name === "none" || !regexx.test(search.pincode)) {
      alert("Please Enter Correct Details Before Proceeding Further !!!");
      return;
    }
    console.log(days);
    axios
      .post("http://localhost:3001/ShowVaccinationCenters", {
        pincode: search.pincode,
        vaccine_name: search.vaccine_name,
        days: days,
      })
      .then((response) => {
        console.log(response);
        setcenters(response.data);
      });
    setTab(1);
  };

  const handleConfirmation = (e) => {
    // console.log(day1);
    // console.log(day2);
    // console.log(day3);
    // console.log(day4);
    // console.log(day5);
    e.preventDefault();
    console.log(selection);
    axios
      .post("http://localhost:3001/BookSlot", {
        center_id: selection.center_id,
        date: selection.date,
        dose_number: user.vaccination_status === 0 ? 1 : 2,
        aadhar_number: user.aadhar,
      })
      .then((response) => {
        console.log(response);
        setUser({...user,vaccination_status:response.data[0].vaccination_status});
      });
    setComp(1);
  };

  //   const centers = [
  //     {
  //       id: 1234,
  //       name: "Columbia Asia Hospitals",
  //       address: "Hyderabad, Telangana",
  //       jabs_unbooked: [0, 40, 0, 60, 70],
  //     },
  //     {
  //       id: 7894,
  //       name: "Apolo Bits Hospitals",
  //       address: "Hyderabad, Telangana",
  //       jabs_unbooked: [28, 40, 50, 60, 0],
  //     },
  //     {
  //       id: 7894,
  //       name: "Apolo Bits Hospitals",
  //       address: "Hyderabad, Telangana",
  //       jabs_unbooked: [38, 40, 50, 60, 0],
  //     },
  //     {
  //       id: 7894,
  //       name: "Apolo Bits Hospitals",
  //       address: "Hyderabad, Telangana",
  //       jabs_unbooked: [22, 40, 50, 60, 0],
  //     },
  //     {
  //       id: 7894,
  //       name: "Apolo Bits Hospitals",
  //       address: "Hyderabad, Telangana",
  //       jabs_unbooked: [30, 40, 50, 60, 0],
  //     },
  //     {
  //       id: 7894,
  //       name: "Apolo Bits Hospitals",
  //       address: "Hyderabad, Telangana",
  //       jabs_unbooked: [30, 40, 50, 60, 0],
  //     },
  //   ];

  //   var dateFormat1=`${day1.getFullYear()}-${day1.getMonth()+1}-${day1.getDate()}`;
  //   if(day1.getMonth()+1<10)
  //   dateFormat1=`${day1.getFullYear()}-0${day1.getMonth()+1}-${day1.getDate()}`;
  //   var dateFormat5=`${day5.getFullYear()}-${day5.getMonth()+1}-${day5.getDate()}`;
  //   if(day5.getMonth()+1<10)
  //   dateFormat5=`${day5.getFullYear()}-0${day5.getMonth()+1}-${day5.getDate()}`;

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  // day2.setDate(today.getDate()+1);
  // var day3=new Date();
  // day3.setDate(today.getDate()+2);
  // var day4=new Date();
  // day4.setDate(today.getDate()+3);
  // var day5=new Date();
  // day5.setDate(today.getDate()+4);
  return (
    <>
      <div className={st.outer}>
        <div className={tab ? st.box : st.box1}>
          <div className={st.title}>
            <div className={st.arrowDiv}>
              <a onClick={() => setComp(1)} className={st.arrow}>
                &#8592;
              </a>
            </div>
            <div className={st.titleC}>
              Book Your Dose
              {user.vaccination_status == 0 ? " 1" : " 2"} Vaccination Slot
            </div>
          </div>

          <div className={st.mid}>
            <div>
              <label for="pincode">Pincode</label>
              <input
                type="text"
                id="pincode"
                value={search.pincode}
                onChange={(e) => {
                  setSearch({ ...search, pincode: e.target.value });
                }}
              ></input>
            </div>
            <div>
              <label for="vaccine_name">Select Vaccine</label>

              {user.vaccination_status == 0 ? (
                <>
                  <select
                    id="vaccine_name"
                    onChange={(e) => {
                      setSearch({ ...search, vaccine_name: e.target.value });
                    }}
                  >
                    <option value="covaxin">Covaxin</option>
                    {/* <option value="none">None</option> */}
                    <option value="covishield">Covishield</option>
                  </select>
                </>
              ) : (
                <>
                  <select
                    onChange={(e) => {
                      setSearch({ ...search, vaccine_name: e.target.value });
                    }}
                  >
                    <option value={vaccine}>{vaccine}</option>
                  </select>
                </>
              )}
            </div>
            <div>
              <button
                className={st.submit}
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Search
              </button>
            </div>
          </div>
          {tab ? (
            <>
              <div className={st.tableDiv}>
                {centers.length == 0 ? (
                  <div>No Centers Available</div>
                ) : (
                  <table>
                    <thead className={st.tableHead}>
                      <th className={st.theading}>Vaccination Center</th>
                      <th className={st.theading}>{`${day1.getDate()} ${
                        months[day1.getMonth()]
                      }`}</th>
                      <th className={st.theading}>{`${day2.getDate()} ${
                        months[day2.getMonth()]
                      }`}</th>
                      <th className={st.theading}>{`${day3.getDate()} ${
                        months[day3.getMonth()]
                      }`}</th>
                      <th className={st.theading}>{`${day4.getDate()} ${
                        months[day4.getMonth()]
                      }`}</th>
                      <th className={st.theading}>{`${day5.getDate()} ${
                        months[day5.getMonth()]
                      }`}</th>
                    </thead>
                    <tbody>
                      {centers.map((w) => {
                        return (
                          <tr className={st.trow}>
                            <td data-label="loc">
                              <>
                                <div className={st.cname}>{w.name}</div>
                                <div className={st.caddress}>{w.city}</div>
                              </>
                            </td>
                            {w.jabs_unbooked.map((j, i) => {
                              return (
                                <td className={st.tcell}>
                                  {j > 0 ? (
                                    <button
                                      className={st.available}
                                      onClick={() => {
                                        setSelection({
                                          center_id: w.center_id,
                                          date: days[i],
                                        });
                                        console.log(selection);
                                      }}
                                    >
                                      {j} Slots
                                    </button>
                                  ) : (
                                    <>
                                      <div className={st.na}>N/A</div>
                                    </>
                                  )}
                                </td>
                              );
                            })}
                            ;
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}
              </div>
              <div className={st.bottom}>
                <button
                  className={selection.center_id ? st.enabled : st.disabled}
                  disabled={selection.center_id ? false : true}
                  onClick={handleConfirmation}
                >
                  Confirm
                </button>
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </>
  );
}

export default ViewCentres;
