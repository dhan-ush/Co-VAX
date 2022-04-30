import React, { useEffect } from "react";
import st from "../styles/managebookings.module.css";
import { useState } from "react";
import axios from "axios";
import OrderConfirm from "./OrderConfirm";

function OrderVaccine(props) {
  const [comp,setComp]=useState(0);
  const { center, setCenter } = props;
  const [data, setdata] = useState([]);
  //   let data = [
  // {
  //   sid: "123456789012",
  //   name: "BGS Chemicals Pvt Ltd",
  //   jabs: 50,
  // },
  // {
  //   sid: "123456789412",
  //   name: "SKP Chemicals Pvt Ltd",
  //   jabs: 100,
  // },
  // {
  //   sid: "123456712342",
  //   name: "CRP Chemicals Pvt Ltd",
  //   jabs: 210,
  // },
  // {
  //   sid: "123456758962",
  //   name: "PKR Chemicals Pvt Ltd",
  //   jabs: 59,
  // },
  //   ];

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    // Get request to the API to get the suppliers information.
    console.log(center.vaccine_name);
    axios
      .post("http://localhost:3001/SupplierList", {
        vaccine_name: center.vaccine_name,
      })
      .then((response) => {
        setdata(response.data);
        console.log(response);
      });
  };

  const [order, setOrder] = useState({
    cid: "",
    sid:"",
    sname:"",
    qty: "",
    date: "",
  });

  const handleQty = (e) => {
    setOrder({ ...order, qty: e.target.value });
  };

  const handleClick = async (w) => {
    console.log(order.qty);
    setOrder({ ...order, cid: w.cid,sid:w.supplier_id,sname:w.name });
    const regexx = /\d+/;
    var today = new Date();
    var dmonth = today.getMonth()+1;
    var day = today.getDate();
    if (dmonth < 10) {
      dmonth = "0" + dmonth;
    }
    if (day < 10) {
      day = "0" + day;
    }
    var dateFormat = `${today.getFullYear()}-${dmonth}-${day}`;
    console.log(dateFormat);
    if (!order.qty || order.qty > w.jabs_available || !regexx.test(order.qty))
      {
        alert("Please Enter Appropriate Value for Quantity");
        return;
      }
    else if (order.date < dateFormat)
      {
        alert("Please Enter a Future Delivery Date");
        return;
      }
    else {
      //  POST request to the corresponding API to update the jabs info.
        axios
        .post("http://localhost:3001/Order", {
            supplier_id: w.supplier_id,
            center_id : center.center_id,
            jabs_ordered : order.qty,
            date : order.date
        })
        .then((response)=>{
            console.log(response)
        })
        axios
        .post("http://localhost:3001/UpdateSupplyTable", {
            supplier_id: w.supplier_id,
            center_id : center.center_id,
            jabs_ordered : order.qty,
            vaccine_name: center.vaccine_name
        })
        .then((response)=>{
            setComp(1);
        })
    }
  };
  return (
    <>
    {comp==0?
    <><div className={st.outer1}>
        <div className={st.title1}>Order Vaccine</div>
        <div className={st.tableDiv}>
          {data.length == 0 ? (
            <div>No Suppliers Available !!</div>
          ) : (
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
                        <div className={st.cells}>{w.supplier_id}</div>
                      </td>

                      <td className={st.tcell}>
                        <div className={st.cells}>{w.name}</div>
                      </td>
                      <td className={st.tcell}>
                        <div className={st.cells}>{w.jabs_available}</div>
                      </td>
                      <td className={st.tcell}>
                        <div className={st.cells}>
                          <input
                            type="text"
                            className={st.inputQty}
                            onChange={handleQty}
                          ></input>
                        </div>
                      </td>
                      <td className={st.tcell}>
                        <div className={st.cells}>
                          <input
                            className={st.inputQty}
                            type="date"
                            name="date"
                            id="date"
                            placeholder="0"
                            onChange={(e) => {
                              setOrder({ ...order, date: e.target.value });
                            }}
                          />
                        </div>
                      </td>
                      <td className={st.tcell1}>
                        <div className={st.cells}>
                          <button
                            className={st.order_button}
                            onClick={() => handleClick(w)}
                          >
                            Order
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div></>:
      <OrderConfirm order={order} center={center}/>
    }
      
    </>
  );
}

export default OrderVaccine;
