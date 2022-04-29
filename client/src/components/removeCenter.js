import React, { useState, useEffect } from "react";
import st from "../styles/removecenter.module.css";
import RedIcon from "../assets/cross.png";
import axios from "axios";
 
function RemoveCenter({ comp, setComp }) {
  const [centers, setCenters] = useState([]);
  useEffect(() => {
    axios.post("http://localhost:3001/CenterList", {}).then((response) => {
      setCenters(response.data);
      console.log(response.data);
    });
  }, []);
 
  const handleCross = (id, center_id) => {
    var removed_center = centers.splice(id, 1);
    var x = [...centers];
    x.filter((_o, i) => id !== i);
    setCenters(x);
    // setCenters(x)
 
    // // SEND removed_user to backend to update his record accordingly
    axios
      .post("http://localhost:3001/RemoveCenter", { center_id: center_id })
      .then((response) => {
        console.log(response.data);
      });
    console.log(removed_center);
  };
  return (
    <>
      <div className={st.outer}>
        <div className={st.box}>
          <div className={st.title1}>
            <a onClick={() => setComp(0)} className={st.arrow1}>
              &#8592;
            </a>
            &nbsp;Remove Centers
          </div>
          <div>
            <table>
              <thead className={st.tableHead}>
                <th className={st.theading}>Center Id.</th>
                <th className={st.theading}>Center Name</th>
                <th className={st.theading}>Address</th>
                <th className={st.theading}>Manage</th>
              </thead>
              <tbody>
                {centers.map((w, index) => {
                  return (
                    <tr className={st.trow}>
                      <td className={st.tcell}>
                        <div className={st.cells}>{w.center_id}</div>
                      </td>
 
                      <td className={st.tcell}>
                        <div className={st.cells}>{w.name}</div>
                      </td>
                      <td className={st.tcell}>
                        <div className={st.cells}>{w.address_line}</div>
                      </td>
                      <td className={st.tcell}>
                        <div className={st.manageB}>
                          <div className={st.icon}>
                            <img
                              className={st.bImgr}
                              src={RedIcon}
                              onClick={() => handleCross(index, w.center_id)}
                              alt="React Logo"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default RemoveCenter;
