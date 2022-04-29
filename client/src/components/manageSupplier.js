import React from 'react'
import st from "../styles/managecenter.module.css"
import { useState } from 'react';
import AddSupplier from './addSupplier'
import RemoveSupplier from './removeSupplier';

function ManageSupplier() {
    const suppliers = [
        {
            cid: 101,
            name: "Apollo BGS Hospital",
            address: "Paradise Street, Global Road, Hyderabad"
        },
        {
            cid: 102,
            name: "Apollo BGS Hospital",
            address: "Paradise Street, Global Road, Hyderabad"
        },
        {
            cid: 103,
            name: "Apollo BGS Hospital",
            address: "Paradise Street, Global Road, Hyderabad"
        },
    ];
    const [comp,setComp]=useState(0);

    return (
        <>
            <div className={st.outer}>
                {comp==0?
                <>
                <div className={st.boxx1}>
                    {/* <div className={st.title}>Manage Suppliers</div> */}
                    <div className={st.box}>
                    <div className={st.box_left}>
                        <button onClick={()=>setComp(1)}
                        className={st.submit}>Add Supplier</button>
                    </div>
                    <div className={st.box_right}>
                    <button onClick={()=>setComp(2)}
                    className={st.submit}>Remove Supplier</button>
                        
                    </div>
                    </div>
                </div>
                </>:
                comp==1?
                <AddSupplier comp={comp} setComp={setComp}/>
                :
                <RemoveSupplier comp={comp} setComp={setComp}/>
}
            </div>
        </>
    )
}

export default ManageSupplier