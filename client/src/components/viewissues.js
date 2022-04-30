import React, { useState, useEffect } from "react";
import st from "../styles/viewissues.module.css";
import RedIcon from "../assets/cross.png";
import axios from "axios";
function ViewIssues() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.post("http://localhost:3001/DisplayIssues", {}).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <>
      <div className={st.outer}>
        <div className={st.box}>
          <div className={st.title1}>User Issues</div>
          <div className={st.tableDiv}>
            <table>
              <thead className={st.tableHead}>
                <th className={st.theading}>Sl No.</th>
                <th className={st.theading}>User Aadhar No.</th>
                <th className={st.theading}>Name</th>
                <th className={st.theading}>Issue Description</th>
              </thead>
              <tbody>
                {data.map((w, index) => {
                  return (
                    <tr className={st.trow}>
                      <td className={st.tcell}>
                        <div className={st.cells}>{index + 1}</div>
                      </td>
                      <td className={st.tcell}>
                        <div className={st.cells}>{w.aadhar_number}</div>
                      </td>
                      <td className={st.tcell}>
                        <div className={st.cells}>{w.name}</div>
                      </td>
                      <td className={st.tcell}>
                        <div className={st.cells}>{w.issue}</div>
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

export default ViewIssues;
