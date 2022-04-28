import React from 'react'
import { useState } from 'react';
import st from '../styles/addcenter.module.css'

function AddCenter(props) {
    const comp=props.comp;
    const setComp=props.setComp;
    var today=new Date();
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
    const [center, setCenter] = useState({
        cid:"",
        date:{dateFormat},
        name:"",
        address_line:"",
        city:"",
        state:"",
        pincode:"",
        nearest_landmark:"",
        jabs_unused:"0",
        jabs_used:"0"
    });
    const handleChange = (e) => {
        const { name, value } = e.target
        setCenter({ ...center, [name]: value });
    };
    const centerSubmit = (e) => {
        e.preventDefault();
        if (center.password !== center.confirm_password) {
            alert("Password and Confirm Password don't match");
            return;
        }
    };
    return (
        <>
            <div className={st.outer}>
                <div className={st.box}>
                    <div className={st.box_right}>
                        <div className={st.right_upper}>
                            <div className={st.title}><a onClick={() => setComp(0)}
                                className={st.arrow}>&#8592;</a> Add Center</div>
                        </div>
                        <div className={st.right_lower}>

                            <form
                                onSubmit={centerSubmit}
                                className={st.box_form}
                                action="/"
                                method="get"
                            >
                                <div className={st.detailsBox}>
                                    <div className={st.rightL}>
                                        <div>
                                            <label className={st.label} htmlFor="cid">Center ID : </label>
                                            <br />
                                            <input
                                                className={st.inputNo}
                                                type="text"
                                                name="cid"
                                                id="cid"
                                                value={center.cid}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className={st.label} htmlFor="name"> Center Name : </label>
                                            <br />
                                            <input
                                                className={st.inputNo}
                                                type="text"
                                                name="name"
                                                id="name"
                                                value={center.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className={st.label} htmlFor="address_line">Address Line : </label>
                                            <br />
                                            <input
                                                className={st.inputNo}
                                                type="address_line"
                                                name="address_line"
                                                id="address_line"
                                                value={center.address_line}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className={st.label} htmlFor="confirm_password">City :</label>
                                            <br />
                                            <input
                                                className={st.inputNo}
                                                type="city"
                                                name="city"
                                                id="city"
                                                value={center.city}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className={st.rightR}>
                                        <div>
                                            <label className={st.label} htmlFor="aadhar">Address Lines : </label>
                                            <br />
                                            <input
                                                className={st.inputNo}
                                                type="text"
                                                name="address_line"
                                                id="address_line"
                                                value={center.address_line}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className={st.label} htmlFor="aadhar">Pincode : </label>
                                            <br />
                                            <input
                                                className={st.inputNo}
                                                type="text"
                                                name="pincode"
                                                id="pincode"
                                                value={center.pincode}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className={st.label} htmlFor="aadhar">State : </label>
                                            <br />
                                            <input
                                                className={st.inputNo}
                                                type="text"
                                                name="state"
                                                id="state"
                                                value={center.state}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className={st.label} htmlFor="aadhar">Nearest Landmark : </label>
                                            <br />
                                            <input
                                                className={st.inputNo}
                                                type="text"
                                                name="city"
                                                id="city"
                                                value={center.city}
                                                onChange={handleChange}
                                                required
                                            />
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

export default AddCenter