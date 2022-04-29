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
        vaccine_name: "",
        name: "",
        jabs_available: ""
    });
    const handleChange = (e) => {
        const { name, value } = e.target
        setSupplier({ ...supplier, [name]: value });
    };
    const supplierSubmit = (e) => {
        e.preventDefault();
        // console.log(supplier)
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
                                            <label className={st.label} htmlFor="name">Supplier Name : </label>
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
                                        <div className={st.optt}>
                                            <label className={st.label} htmlFor="vaccine_name"> Vaccine Name : </label>
                                            <br />
                                            <div className={st.radioRow}>
                                                <div className={st.op}>
                                                    <input className={st.rOption} onClick={(e) => setSupplier({...supplier,vaccine_name:e.target.value})}
                                                    type="radio" id="covishield" name="vaccine_name" value="covishield" />
                                                    <label className={st.radiolabel} for="covishield">Covishield</label><br></br>
                                                </div>
                                                <div className={st.op}>
                                                    <input className={st.rOption} onClick={(e) => setSupplier({...supplier,vaccine_name:e.target.value})} 
                                                    type="radio" id="covaxin" name="vaccine_name" value="covaxin" />
                                                    <label className={st.radiolabel} for="covaxin">Covaxin</label><br></br>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <label className={st.label} htmlFor="jabs_available">Jabs Available : </label>
                                            <br />
                                            <input
                                                className={st.inputNo}
                                                type="text"
                                                name="jabs_available"
                                                id="jabs_available"
                                                value={supplier.jabs_available}
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