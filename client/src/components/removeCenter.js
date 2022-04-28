import React, { useState } from 'react'
import st from "../styles/managebookings.module.css"
import RedIcon from "../assets/cross.png"
function RemoveCenter() {
    const [data, setData] = useState({
        center_id: "1234",
        center_name: "Columbia Asia Hospitals",
        bookings: [
            {
                uid: "123456789012",
                name: "Akshat Khaitan",
                number: "5647893210",
                vaccination_status: 0
            },
            {
                uid: "123456789412",
                name: "Nagadhanush KV",
                number: "5647893210",
                vaccination_status: 1
            },
            {
                uid: "123456712342",
                name: "Ankit Yadav",
                number: "5647893210",
                vaccination_status: 1
            },
            {
                uid: "123456758962",
                name: "Rishi Poddar",
                number: "5647893210",
                vaccination_status: 0
            }
        ]
    })
    return (
        <>
            <table>

                <thead className={st.tableHead}>
                    <th className={st.theading}>Sl No.</th>
                    <th className={st.theading}>Center No.</th>
                    <th className={st.theading}>Center Name</th>
                    <th className={st.theading}>Address</th>
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
                                    <div className={st.cells}>{w.uid}</div>
                                </td>

                                <td className={st.tcell}><div className={st.cells}>{w.name}</div></td>
                                <td className={st.tcell}><div className={st.cells}>{w.number}</div></td>
                                <td className={st.tcell}>
                                    < div className={st.manageB}>
                                        <div className={st.icon}>
                                            <img className={st.bImgr} src={RedIcon} alt="React Logo" />
                                        </div>

                                    </div>
                                </td>

                            </tr>);
                    })}
                </tbody>
            </table>

        </>
    )
}

export default RemoveCenter