const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const router = express.Router();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dhanushkv@12",
  database: "registrationsystem",
});
db.connect((err) => {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + db.threadId);
}); 

router.post("/", async (req, res) => {
  const {pincode} = req.body;
  db.query(
    "SELECT * FROM vaccination_center WHERE pincode= ?",
    pincode,
    async (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      else {
        db.query(
          "SELECT DISTINCT center_id FROM vaccination_center WHERE pincode= ?",
          pincode,
          async (err1, result1) => {
            const center_ids = [];
            if(err1){
              res.send({err: err1});
            }
            else{
              for(let i=0;i<result1.length;i++){
                const {center_id} = result1[i];
                center_ids.push(center_id)
            }
            finalResult = []
            for(let i=0;i<center_ids.length;i++){
              const vaccination_center = {
                center_id : 0,name:"",address:"",pincode:"",city:"",state:"",nearest_landmark:"",jabs_unbooked:[0,0,0,0,0],jabs_booked:[0,0,0,0,0]
              }
              for(let j = 0;j<result.length;j++){
                if(center_ids[i] == result[j].center_id){
                  vaccination_center.center_id = result[j].center_id;
                  vaccination_center.name = result[j].name;
                  vaccination_center.address = result[j].address;
                  vaccination_center.pincode = result[j].pincode;
                  vaccination_center.city = result[j].city;
                  vaccination_center.state = result[j].state;
                  vaccination_center.nearest_landmark = result[j].nearest_landmark;
                  break;
                }
              }
              let curr = 0;
              for(let j = 0;j<result.length;j++){
                if(center_ids[i] ==  result[j].center_id){
                  vaccination_center.jabs_unbooked[curr] = result[j].jabs_unbooked;
                  vaccination_center.jabs_booked[curr] = result[j].jabs_booked;
                  curr++;
                }
              }
              finalResult.push(vaccination_center);
            }
            res.send(finalResult);
          }
        }
        )
        }}
  );
});

module.exports = router;
