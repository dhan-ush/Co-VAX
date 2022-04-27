import React from 'react'
import st from "../styles/managebookings.module.css"

function OrderVaccine() {
    const data = [{
        sid: "123456789012",
        name: "BGS Chemicals Pvt Ltd",
        jabs: 50
    },
    {
        sid: "123456789412",
        name: "SKP Chemicals Pvt Ltd",
        jabs: 100
    },
    {
        sid: "123456712342",
        name: "CRP Chemicals Pvt Ltd",
        jabs: 210
    },
    {
        sid: "123456758962",
        name: "PKR Chemicals Pvt Ltd",
        jabs: 59
    }
    ]

    const handleClick = (w) => {
        // e.preventDefault();
        console.log(w);
    }
    return (
        <>
            <div className={st.outer1}>
                <div className={st.title1}>Order Vaccine</div>
                <div className={st.tableDiv}>
                    {data.length == 0 ? <div>No Suppliers Available !!</div> :
                        <table>

                            <thead className={st.tableHead}>
                                <th className={st.theading1}>Sl No.</th>
                                <th className={st.theading1}>Supplier Id</th>
                                <th className={st.theading1}>Name</th>
                                <th className={st.theading1}>Jabs Supplied</th>
                                <th className={st.theading1}>Order</th>
                            </thead>
                            <tbody>
                                {data.map((w, index) => {
                                    return (
                                        <tr className={st.trow}>


                                            <td className={st.tcell1}>
                                                <div className={st.cells}>{index + 1}</div>
                                            </td>
                                            <td className={st.tcell}>
                                                <div className={st.cells}>{w.sid}</div>
                                            </td>

                                            <td className={st.tcell}><div className={st.cells}>{w.name}</div></td>
                                            <td className={st.tcell}><div className={st.cells}>{w.jabs}</div></td>
                                            <td className={st.tcell1}><div className={st.cells}>
                                                <button
                                                    className={st.order_button}
                                                    onClick={() => handleClick(w)}
                                                >Order</button>
                                            </div>                      </td>

                                        </tr>);
                                })}
                            </tbody>
                        </table>}
                </div>
            </div>
        </>
    )
}

export default OrderVaccine