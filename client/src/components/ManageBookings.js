import React, { useEffect, useState } from "react";
import st from "../styles/managebookings.module.css";
import GreenIcon from "../assets/greentick.png";
import RedIcon from "../assets/cross.png";
import axios from "axios";
    
function ManageBookings(props) {
  const [dose,setDose]=useState(1);
  let index = 0;
  const center = props.center;
  const setCenter = props.setCenter;
  const [data, setData] = useState({
    center_id: center.center_id,
    name: center.name,
    bookings: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();

}

  const getData = async () => {
    // call the API to get the bookings for the vaccination center
  };

  useEffect(() => {
    axios.post("http://localhost:3001/ManageBookings/display", { center_id:center.center_id, dose_number:1 })
  .then((response)=>{
    console.log(response)
    setData({...data, bookings:response.data})
  })
  }, []);
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
            <div className={st.out}>
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
                
                <div className={st.radioRow}>    
                <div className={st.radiotitlee}>Select Dose :</div>
                    <div className={st.op}>
                        <input selected checked="true" className={st.rOption} onClick={(e) => setDose(1)}
                            type="radio" id="dose1" name="dose" value="dose1" />
                        <label className={st.radiolabel} for="dose1">Dose 1</label><br></br>
                    </div>
                    <div className={st.op}>
                        <input className={st.rOption} onClick={(e) => setDose(2)}
                            type="radio" id="dose2" name="dose" value="dose2" />
                        <label className={st.radiolabel} for="dose2">Dose 2</label><br></br>
                    </div>
                    <button className={st.submit1} onClick={(e) => { handleSubmit(e) }}>Update</button>
                </div>
                <div className={st.outertablediv}>
                    <div className={st.tableDiv}>
                        {data.bookings.length == 0 ? <div className={st.noBook}>No Bookings Available</div> :
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
                                                    <div className={st.cells}>{w.aadhar_number}</div>
                                                </td>

                                                <td className={st.tcell}><div className={st.cells}>{w.name}</div></td>
                                                <td className={st.tcell}><div className={st.cells}>{w.primary_number}</div></td>
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
            </div>
        </>
    )
                  
}

export default ManageBookings;
