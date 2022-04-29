import React from 'react'
import { useState } from 'react';
import st from '../styles/addsupplier.module.css'

function AddSupplier(props) {
    const comp = props.comp;
    const setComp = props.setComp;
    var today = new Date();
    var dmonth = today.getMonth();
    var day = today.getDate();
    if (dmonth < 10) {
        dmonth = '0' + dmonth;
    }
    if (day < 10) {
        day = '0' + day;
    }
    var dateFormat = `${today.getFullYear()}-${dmonth}-${day}`;
    const [supplier, setSupplier] = useState({
        sid: "",
        name: "",
        jabs: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target
        setSupplier({ ...supplier, [name]: value });
    };
    const supplierSubmit = (e) => {
        e.preventDefault();
        if (supplier.password !== supplier.confirm_password) {
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
                                className={st.arrow}>&#8592;</a> Add Supplier</div>
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
                                            <label className={st.label} htmlFor="cid">Supplier ID : </label>
                                            <br />
                                            <input
                                                className={st.inputNo}
                                                type="text"
                                                name="cid"
                                                id="cid"
                                                value={supplier.cid}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className={st.rightR}>
                                        
                                    <div>
                                            <label className={st.label} htmlFor="name"> Supplier Name : </label>
                                            <br />
                                            <input
                                                className={st.inputNo}
                                                type="text"
                                                name="name"
                                                id="name"
                                                value={supplier.name}
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

export default AddSupplier