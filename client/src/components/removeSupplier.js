import React, { useState } from 'react'
import st from "../styles/removesupplier.module.css"
import RedIcon from "../assets/cross.png"

function RemoveSupplier({comp,setComp}) {
    const [data, setData] = useState({
        supplier_id: "1234",
        supplier_name: "Columbia Asia Hospitals",
        bookings: [
            {
                uid: "123456789012",
                name: "Akshat Khaitan",
                number: "5647893210",
                jabs: 0
            },
            {
                uid: "123456789412",
                name: "Nagadhanush KV",
                number: "5647893210",
                jabs: 1
            },
            {
                uid: "123456712342",
                name: "Ankit Yadav",
                number: "5647893210",
                jabs: 1
            },
            {
                uid: "123456758962",
                name: "Rishi Poddar",
                number: "5647893210",
                jabs: 0
            }
        ]
    })
    return (
        <>
        <div className={st.outer}>
            <div className={st.box}>
                <div className={st.title1}><a onClick={() => setComp(0)}
                                className={st.arrow1}>&#8592;</a>&nbsp;Remove Suppliers</div>
                <div>
            <table>

                <thead className={st.tableHead}>
                    <th className={st.theading1}>Sl No.</th>
                    <th className={st.theading1}>Supplier No.</th>
                    <th className={st.theading1}>Supplier Name</th>
                    <th className={st.theading1}>Jabs Available</th>
                    <th className={st.theading1}>Manage</th>
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
                                <td className={st.tcell}><div className={st.cells}>{w.jabs}</div></td>
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
            </div>
            </div>
            </div>

        </>
    )
}

export default RemoveSupplier