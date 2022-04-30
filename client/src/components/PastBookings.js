import React from 'react'
import st from "../styles/managebookings.module.css"
import { useState } from 'react';

function PastBookings() {
    const [dose,setDose]=useState(1);
    const data = [{
        uid: "123456789012",
        name: "Akshat Khaitan",
        number: "5647893210",
        date: "22-02-2022"
    },
    {
        uid: "123456789412",
        name: "Nagadhanush KV",
        number: "5647893210",
        date: "22-02-2022"
    },
    {
        uid: "123456712342",
        name: "Ankit Yadav",
        number: "5647893210",
        date: "23-02-2022"
    },
    {
        uid: "123456758962",
        name: "Rishi Poddar",
        number: "5647893210",
        date: "23-02-2022"
    }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <>
            <div className={st.outer1}>
                <div className={st.title1}>Vaccination History</div>

                <div className={st.radioRow}>
                    <div className={st.radiotitlee}>Select Dose :</div>
                    <div className={st.op}>
                        <input className={st.rOption} onClick={(e) => setDose(1)}
                            type="radio" id="dose1" name="dose" value="dose1" />
                        <label className={st.radiolabel} for="dose1">Dose 1</label><br></br>
                    </div>
                    <div className={st.op}>
                        <input className={st.rOption} onClick={(e) => setDose(2)}
                            type="radio" id="dose2" name="dose" value="dose2" />
                        <label className={st.radiolabel} for="dose2">Dose 2</label><br></br>
                    </div>
                    <button className={st.submit1} onClick={(e) => { handleSubmit(e) }}>Update</button>
                </div>

                <div className={st.tableDiv}>
                    {data.length == 0 ? <div>No Past Bookings !!</div> :
                        <table>

                            <thead className={st.tableHead}>
                                <th className={st.theading}>Sl No.</th>
                                <th className={st.theading}>Identification Number</th>
                                <th className={st.theading}>Name</th>
                                <th className={st.theading}>Mobile Number</th>
                                <th className={st.theading}>Date</th>
                            </thead>
                            <tbody>
                                {data.map((w, index) => {
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
                                            <td className={st.tcell}><div className={st.cells}>{w.date}</div>                      </td>

                                        </tr>);
                                })}
                            </tbody>
                        </table>}
                </div>
            </div>
        </>
    )
}

export default PastBookings