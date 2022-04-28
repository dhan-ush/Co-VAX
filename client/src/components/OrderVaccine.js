import React, { useEffect } from 'react'
import st from "../styles/managebookings.module.css"
import { useState } from 'react';

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

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        // Get request to the API to get the suppliers information. 
    }

    const [order, setOrder] = useState(
        {
            cid: "",
            qty: "",
            date: ""
        }
    );

    const handleQty = (e) => {
        setOrder({ ...order, qty: e.target.value });
    }

    const handleClick = async (w) => {
        console.log(order.qty)
        setOrder({ ...order, cid: w.cid });
        const regexx = /\d+/;
        var today = new Date();
        var dmonth=today.getMonth();
        var day=today.getDate();
        if(dmonth<10)
        {
            dmonth='0'+ dmonth;
        }
        if(day<10)
        {
            day='0'+ day;
        }
        var dateFormat = `${today.getFullYear()}-${dmonth}-${day}`;
        console.log(dateFormat);
        if (!order.qty || order.qty > w.jabs || !regexx.test(order.qty))
            alert('Please Enter Appropriate Value for Quantity');
        else if (order.date < dateFormat)
            alert("Please Enter a Future Delivery Date");
        else
            {
                //  POST request to the corresponding API to update the jabs info.
            }
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
                                <th className={st.theading1}>Jabs Available</th>
                                <th className={st.theading1}>Order Quantity</th>
                                <th className={st.theading1}>Delivery Date</th>
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
                                            <td className={st.tcell}><div className={st.cells}>
                                                <input type="text" className={st.inputQty} onChange={handleQty}></input>
                                            </div></td>
                                            <td className={st.tcell}><div className={st.cells}>
                                                <input
                                                    className={st.inputQty}
                                                    type="date"
                                                    name="date"
                                                    id="date"
                                                    placeholder="0"
                                                    onChange={(e) => { setOrder({ ...order, date: e.target.value }) }}
                                                />
                                            </div>
                                            </td>
                                            <td className={st.tcell1}><div className={st.cells}>
                                                <button
                                                    className={st.order_button}
                                                    onClick={() => handleClick(w)}
                                                >Order</button>
                                            </div>
                                            </td>

                                        </tr>);
                                })}
                            </tbody>
                        </table>}
                        {order.date}
                </div>
            </div>
        </>
    )
}

export default OrderVaccine