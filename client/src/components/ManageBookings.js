import React, { useEffect, useState } from 'react'
import st from "../styles/managebookings.module.css"
import GreenIcon from "../assets/greentick.png";
import RedIcon from "../assets/cross.png";

function ManageBookings() {
    let index = 0;
    const [data, setData] = useState({
        center_id: "1234",
        center_name: "Columbia Asia Hospitals",
        bookings: [
            {
                uid: "123456789012",
                name: "Akshat Khaitan",
                number: "5647893210"
            },
            {
                uid: "123456789412",
                name: "Nagadhanush KV",
                number: "5647893210"
            },
            {
                uid: "123456712342",
                name: "Ankit Yadav",
                number: "5647893210"
            },
            {
                uid: "123456758962",
                name: "Rishi Poddar",
                number: "5647893210"
            }
        ]
    })

    const getData = async () => {
        // call the API to get the bookings for the vaccination center
    }

    useEffect(() => {
        getData();
    }, [])



    const handleTick = (id) => {
        var done_user = data.bookings.splice(id, 1);
        var x = data.bookings;
        x.filter((o, i) => id !== i);
        setData({ ...data, bookings: x })
        // SEND done_user to backend to update his record accordingly
        console.log(done_user)
    }

    const handleCross = (id) => {
        var removed_user = data.bookings.splice(id, 1);
        var x = data.bookings;
        x.filter((o, i) => id !== i);
        setData({ ...data, bookings: x })
        // SEND removed_user to backend to update his record accordingly
        console.log(removed_user)
    }
    return (
        <>
            <div className={st.info}>
                <div>
                    <span>Center Name: </span> <div className={st.data}> {data.center_name}</div>
                </div>
                <div>
                    <span>Id:</span> <div className={st.data}> {data.center_id} </div>
                </div>
                <div>
                    <span>Total Number Of Bookings Today: </span> <div className={st.data}>
                        {data.bookings.length}
                    </div>
                </div>
            </div>
            <div>
                <div className={st.tableDiv}>
                    {data.bookings.length == 0 ? <div>No Bookings Available</div> :
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
                                                <div className={st.cells}>{w.uid}</div>
                                            </td>

                                            <td className={st.tcell}><div className={st.cells}>{w.name}</div></td>
                                            <td className={st.tcell}><div className={st.cells}>{w.number}</div></td>
                                            <td className={st.tcell}>
                                                <div className={st.manageB}>
                                                    <div className={st.icon}>
                                                        <img className={st.bImg} src={GreenIcon} alt="React Logo" onClick={() => handleTick(index)} />
                                                    </div>
                                                    <div className={st.icon}>
                                                        <img className={st.bImgr} src={RedIcon} alt="React Logo" onClick={() => handleCross(index)} />
                                                    </div>
                                                </div>
                                            </td>

                                        </tr>);
                                })}
                            </tbody>
                        </table>}

                </div>
            </div>
        </>
    )
}

export default ManageBookings