import React, { useEffect, useState } from "react";
import st from "../styles/managebookings.module.css";
import GreenIcon from "../assets/greentick.png";
import RedIcon from "../assets/cross.png";
import axios from "axios";

function ManageBookings(props) {
  const [dose, setDose] = useState(1);
  let index = 0;
  const center = props.center;
  const setCenter = props.setCenter;
  const [data, setData] = useState({
    center_id: center.center_id,
    name: center.name,
    bookings: [],
  });

  const getData = async () => {
    // call the API to get the bookings for the vaccination center
  };

  useEffect(() => {
    axios
      .post("http://localhost:3001/ManageBookings/display", {
        center_id: center.center_id,
        dose_number: 1,
      })
      .then((response) => {
        console.log(response);
        setData({ ...data, bookings: response.data });
      });
  }, []);

  const handleTick = (id) => {
    // console.log(id);
    // console.log(data.bookings[id].aadhar_number);
    // console.log(center.center_id,);
    
    axios.post("http://localhost:3001/ManageBookings/approve", {
      aadhar_number: data.bookings[id].aadhar_number,
      center_id: center.center_id,
      dose_number: 1,
    }).then((response) => {
      console.log(response);
    });
    var done_user = data.bookings.splice(id, 1);
    var x = data.bookings;
    x.filter((o, i) => id !== i);
    setData({ ...data, bookings: x });
    // SEND done_user to backend to update his record accordingly
    console.log(done_user);
  };

  const handleCross = (id) => {
    axios.post("http://localhost:3001/ManageBookings/reject", {
      aadhar_number: data.bookings[id].aadhar_number,
      center_id: center.center_id,
      dose_number: 1,
    }).then((response) => {
      console.log(response);
    });
    var removed_user = data.bookings.splice(id, 1);
    var x = data.bookings;
    x.filter((o, i) => id !== i);
    setData({ ...data, bookings: x });
    // SEND removed_user to backend to update his record accordingly
    console.log(removed_user);
  };
  return (
    <>
      <div className={st.out}>
        <div className={st.info}>
          <div>
            <span>Center Name: </span>{" "}
            <div className={st.data}> {data.name}</div>
          </div>
          <div>
            <span>Id:</span> <div className={st.data}> {data.center_id} </div>
          </div>
          <div>
            <span>Total Number Of Bookings Today: </span>{" "}
            <div className={st.data}>{data.bookings.length}</div>
          </div>
        </div>
        <div>
          <div className={st.tableDiv}>
            {data.bookings.length == 0 ? (
              <div>No Bookings Available</div>
            ) : (
              <table>
                <thead className={st.tableHead}>
                  <th className={st.theading}>Sl No.</th>
                  <th className={st.theading}>Identification Number</th>
                  <th className={st.theading}>Name</th>
                  <th className={st.theading}>Mobile Number</th>
                  <th className={st.theading}>Manage</th>
                </thead>
                <tbody>
                  {data.bookings.map((w, index) => {
                    return (
                      <tr className={st.trow}>
                        <td className={st.tcell1}>
                          <div className={st.cells}>{index + 1}</div>
                        </td>
                        <td className={st.tcell}>
                          <div className={st.cells}>{w.aadhar_number}</div>
                        </td>

                        <td className={st.tcell}>
                          <div className={st.cells}>{w.name}</div>
                        </td>
                        <td className={st.tcell}>
                          <div className={st.cells}>{w.primary_number}</div>
                        </td>
                        <td className={st.tcell}>
                          <div className={st.manageB}>
                            <div className={st.icon}>
                              <img
                                className={st.bImg}
                                src={GreenIcon}
                                alt="React Logo"
                                onClick={() => handleTick(index)}
                              />
                            </div>
                            <div className={st.icon}>
                              <img
                                className={st.bImgr}
                                src={RedIcon}
                                alt="React Logo"
                                onClick={() => handleCross(index)}
                              />
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageBookings;
