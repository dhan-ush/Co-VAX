import React from 'react'
import st from "../styles/managecenter.module.css"
import { useState } from 'react';
import AddCenter from './addCenter';
import RemoveCenter from './removeCenter';

function ManageCenter() {
    const centers = [
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
    const [comp, setComp] = useState(0);

    return (
        <>
            <div className={st.outer}>
                {comp == 0 ?
                    <>
                        <div className={st.box}>
                            <div className={st.box_left}>
                                <button onClick={() => setComp(1)}
                                    className={st.submit}>Add Center</button>
                            </div>
                            <div className={st.box_right}>
                                <button onClick={() => setComp(2)}
                                    className={st.submit}>Remove Center</button>

                            </div>
                        </div>
                    </>
                    :
                    comp == 1 ? <AddCenter comp={comp} setComp={setComp} /> :
                        <RemoveCenter comp={comp} setComp={setComp} />
                }
            </div>
        </>
    )
}

export default ManageCenter