import React, { useState, useEffect } from "react";
import st from "../styles/removestaff.module.css";
import RedIcon from "../assets/cross.png";
import axios from "axios";
 
function RemoveStaff({ comp, setComp }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .post("http://localhost:3001/AdminStaffList", {})
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      });
  }, []);
  const handleCross = (id, supplier_id) => {
    var removed_staff = data.splice(id, 1);
    var x = [...data];
    x.filter((_o, i) => id !== i);
    // setCenters(x)
    setData(x)
 
    // // SEND removed_user to backend to update his record accordingly
    axios
      .post("http://localhost:3001/RemoveSupplier", {
        supplier_id: supplier_id,
      })
      .then((response) => {
        console.log(response.data);
      });
    console.log(removed_staff);
  };
  return (
    <>
      <div className={st.outer}>
        <div className={st.box010}>
          <div className={st.title1}>
            <a onClick={() => setComp(0)} className={st.arrow1}>
              &#8592;
            </a>
            &nbsp;Remove Staff
          </div>
          <div className={st.tableDiv}>
            <table>
              <thead className={st.tableHead}>
                <th className={st.theading}>Staff Aadhar Number</th>
                <th className={st.theading}>Staff Name</th>
                <th className={st.theading}>Staff Gender</th>
                <th className={st.theading}>Manage</th>
              </thead>
              <tbody>
                {data.map((w, index) => {
                  return (
                    <tr className={st.trow}>
                      <td className={st.tcell}>
                        <div className={st.cells}>{w.aadhar_number}</div>
                      </td>
 
                      <td className={st.tcell}>
                        <div className={st.cells}>{w.name}</div>
                      </td>
                      <td className={st.tcell}>
                        <div className={st.cells}>{w.gender}</div>
                      </td>
                      <td className={st.tcell}>
                        <div className={st.manageB}>
                          <div className={st.icon}>
                            <img
                              className={st.bImgr}
                              src={RedIcon}
                              onClick={() => handleCross(index, w.supplier_id)}
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
 
export default RemoveStaff;