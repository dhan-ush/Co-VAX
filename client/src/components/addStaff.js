import React from 'react'
import { useState } from 'react';
import st from '../styles/addstaff.module.css'

function AddStaff(props) {
    const comp = props.comp;
    const setComp = props.setComp;
    const [staff, setStaff] = useState({
        aadhar_number: "",
        cid: "",
        role: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target
        setStaff({ ...staff, [name]: value });
    };
    const supplierSubmit = (e) => {
        e.preventDefault();
        // console.log(staff)
    };
    return (
        <>
            <div className={st.outer}>
                <div className={st.box010}>
                    <div className={st.box_right}>
                        <div className={st.right_upper}>
                            <div className={st.title}><a onClick={() => setComp(0)}
                                className={st.arrow}>&#8592;</a> Add Staff</div>
                        </div>
                        <div className={st.right_lower}>

                            <form
                                onSubmit={supplierSubmit}
                                className={st.box_form}
                                action="/"
                                method="get"
                            >
                                <div className={st.detailsBox}>
                                    <div className={st.rightL}>
                                        <div>
                                            <label className={st.label} htmlFor="aadhar_number">Staff's Aadhar Number : </label>
                                            <br />
                                            <input
                                                className={st.inputNo}
                                                type="text"
                                                name="aadhar_number"
                                                id="aadhar_number"
                                                value={staff.aadhar_number}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className={st.optt}>
                                            <label className={st.label} htmlFor="role"> Role : </label>
                                            <br />
                                            <div className={st.radioRow111}>
                                                <div className={st.op}>
                                                    <input className={st.rOption} onClick={(e) => setStaff({...staff,role:e.target.value})}
                                                    type="radio" id="Medical Officer" name="role" value="Medical Officer" />
                                                    <label className={st.radiolabel1} for="Medical Officer">Medical Officer</label>
                                                </div>
                                                <div className={st.op}>
                                                    <input className={st.rOption} onClick={(e) => setStaff({...staff,role:e.target.value})}
                                                    type="radio" id="Asst. Medical Officer" name="role" value="Asst. Medical Officer" />
                                                    <label className={st.radiolabel1} for="Asst. Medical Officer">Asst. Medical Officer</label><br></br>
                                                </div>
                                                <div className={st.op}>
                                                    <input className={st.rOption} onClick={(e) => setStaff({...staff,role:e.target.value})} 
                                                    type="radio" id="Compounder" name="role" value="Compounder" />
                                                    <label className={st.radiolabel1} for="Compounder">Compounder</label><br></br>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <br />
                                            <input
                                                class={st.inputNo1}
                                                type="submit"
                                                value="Submit"
                                            ></input>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                        {/* <div className={st.regOut}></div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddStaff