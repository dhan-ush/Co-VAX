import React from "react";
import st from "../styles/orderconfirm.module.css";
import Moment from "moment";

function OrderConfirm({ order, center }) {
  return (
    <>
      <div className={st.outer}>
        <div className={st.box}>
          <div className={st.top}>
            <div className={st.content1}>Order Confirmed!</div>
          </div>

          <div className={st.mid}>
            <div className={st.row}>
              <div className={st.fieldName}>Supplier ID</div>
              <div className={st.linee}></div>
              <div className={st.content}>{order.sid}</div>
            </div>
            <div className={st.row}>
              <div className={st.fieldName}>Supplier Name</div>
              <div className={st.linee}></div>
              <div className={st.content}>{order.sname}</div>
            </div>
            <div className={st.row}>
              <div className={st.fieldName}>Vaccine Name</div>
              <div className={st.linee}></div>
              <div
                style={{ textTransform: "capitalize" }}
                className={st.content}
              >
                {center.vaccine_name}
              </div>
            </div>
            <div className={st.row}>
              <div className={st.fieldName}>Order Quantity</div>
              <div className={st.linee}></div>
              <div className={st.content}>{order.qty}</div>
            </div>
            <div className={st.row}>
              <div className={st.fieldName}>Date of Delivery</div>
              <div className={st.linee}></div>
              <div className={st.content}>
                {Moment(order.date).format("DD-MM-YYYY")}
              </div>
            </div>
          </div>

          {/* <div className={st.linee}>
            <hr></hr>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default OrderConfirm;
