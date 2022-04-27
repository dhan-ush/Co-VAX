import React from 'react';
import st from "../styles/viewcentres.module.css";
import { useState } from 'react';

function ViewCentres(props) {
    const user = props.user;
    const setUser = props.setUser;
    const comp = props.comp;
    const setComp = props.setComp;
    const [tab, setTab] = useState(0);
    const [search, setSearch] = useState({
        pincode: "",
        vaccine_name: "none"
    })

    const [selection, setSelection] = useState({
        center_id: "",
        date: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const regexx = /\d{6}/;
        if (search.vaccine_name === "none" || !regexx.test(search.pincode))
            alert("Please Enter Correct Details Before Proceeding Further !!!");
        setTab(1);
    }

    const handleConfirmation = (e) => {
        e.preventDefault();
        console.log(selection);
    }

    const centers = [
        {
            id: 1234,
            name: "Columbia Asia Hospitals",
            address: "Hyderabad, Telangana",
            days: [0, 40, 0, 60, 70]
        },
        {
            id: 7894,
            name: "Apolo Bits Hospitals",
            address: "Hyderabad, Telangana",
            days: [28, 40, 50, 60, 0]
        },
        {
            id: 7894,
            name: "Apolo Bits Hospitals",
            address: "Hyderabad, Telangana",
            days: [38, 40, 50, 60, 0]
        },
        {
            id: 7894,
            name: "Apolo Bits Hospitals",
            address: "Hyderabad, Telangana",
            days: [22, 40, 50, 60, 0]
        },
        {
            id: 7894,
            name: "Apolo Bits Hospitals",
            address: "Hyderabad, Telangana",
            days: [30, 40, 50, 60, 0]
        },
        {
            id: 7894,
            name: "Apolo Bits Hospitals",
            address: "Hyderabad, Telangana",
            days: [30, 40, 50, 60, 0]
        },
    ]
    var today = new Date();
    return (
        <>
            <div className={st.outer}>
                <div className={tab ? st.box : st.box1 }>
                    <div className={st.title}>
                        <div className={st.arrowDiv}>
                            <a onClick={() => setComp(1)}
                                className={st.arrow}>&#8592;</a>
                        </div>
                        <div className={st.titleC}>
                            Book Your Dose
                            {user.vaccination_status == 1 ? " 2" : " 1"} Vaccination Slot
                        </div>
                    </div>

                    <div className={st.mid}>
                        <div>
                            <label for="pincode">Pincode</label>
                            <input type="text" id="pincode" value={search.pincode} onChange={(e) => { setSearch({ ...search, pincode: e.target.value }) }}></input>
                        </div>
                        <div>
                            <label for="vaccine_name">Select Vaccine</label>

                            {!user.vaccination_status ?
                                <>
                                    <select id="vaccine_name" onChange={(e) => { setSearch({ ...search, vaccine_name: e.target.value }) }}>
                                        <option value="none">None</option>
                                        <option value="covaxin">Covaxin</option>
                                        <option value="covishield">Covishield</option>
                                    </select>
                                </>
                                :
                                <>
                                    <select onChange={(e) => { setSearch({ ...search, vaccine_name: e.target.value }) }}>
                                        <option value="none">None</option>
                                        <option value={user.vaccine}>{user.vaccine}</option>
                                    </select>
                                </>}
                        </div>
                        <div>
                            <button className={st.submit} onClick={(e) => { handleSubmit(e) }}>Search</button>
                        </div>
                    </div>
                    {tab ? <>
                        <div className={st.tableDiv}>
                            {centers.length == 0 ? <div>No Centers Available</div> :
                                <table>

                                    <thead className={st.tableHead}>
                                        <th className={st.theading}>Vaccination Center</th>
                                        <th className={st.theading}>{`${today.getDate()} April`}</th>
                                        <th className={st.theading}>{`${today.getDate() + 1} April`}</th>
                                        <th className={st.theading}>{`${today.getDate() + 2} April`}</th>
                                        <th className={st.theading}>{`${today.getDate() + 3} April`}</th>
                                        <th className={st.theading}>{`${today.getDate() + 4} April`}</th>
                                    </thead>
                                    <tbody>
                                        {centers.map(w => {
                                            return (
                                                <tr className={st.trow}>
                                                    <td data-label="loc"><>
                                                        <div className={st.cname}>{w.name}</div>
                                                        <div className={st.caddress}>{w.address}</div>
                                                    </></td>

                                                    <td className={st.tcell}>{w.days[0] > 0 ? <>
                                                        <button className={st.available} onClick={() => setSelection({ center_id: w.id, date: `${today.getDate()} April` })}>{w.days[0]} Slots</button>
                                                    </> : <>
                                                        <div className={st.na}>N/A</div>
                                                    </>}</td>

                                                    <td className={st.tcell}>{w.days[1] > 0 ? <>
                                                        <button className={st.available} onClick={() => setSelection({ center_id: w.id, date: `${today.getDate()} April` })} > {w.days[1]} Slots</button>
                                                    </> : <>
                                                        <div className={st.na}>N/A</div>
                                                    </>}</td>
                                                    <td className={st.tcell}>{w.days[2] > 0 ? <>
                                                        <button className={st.available} onClick={() => setSelection({ center_id: w.id, date: `${today.getDate()} April` })} >{w.days[2]} Slots</button>
                                                    </> : <>
                                                        <div className={st.na}>N/A</div>
                                                    </>}</td>
                                                    <td className={st.tcell}>{w.days[3] > 0 ? <>
                                                        <button className={st.available} onClick={() => setSelection({ center_id: w.id, date: `${today.getDate()} April` })} >{w.days[3]} Slots</button>
                                                    </> : <>
                                                        <div className={st.na}>N/A</div>
                                                    </>}</td>
                                                    <td className={st.tcell}>{w.days[4] > 0 ? <>
                                                        <button className={st.available} onClick={() => setSelection({ center_id: w.id, date: `${today.getDate()} April` })} >{w.days[4]} Slots</button>
                                                    </> : <>
                                                        <div className={st.na}>N/A</div>
                                                    </>}</td>

                                                </tr>);
                                        })}
                                    </tbody>
                                </table>}

                        </div>
                        <div className={st.bottom}>
                            <button className={selection.center_id ? st.enabled : st.disabled}
                                disabled={selection.center_id ? false : true}
                                onClick={handleConfirmation}
                            >
                                Confirm
                            </button>
                        </div>
                    </> : <></>}
                </div>

            </div>
        </>
    )
}

export default ViewCentres