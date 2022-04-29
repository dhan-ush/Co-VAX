const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const { response } = require("express");
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
  const {aadhar_number} = req.body;
  db.query(
    "Select * from vaccination_record WHERE aadhar_number= ?",
    aadhar_number,
    (err, result) => {
      //let finalResult = {aadhar_number:aadhar_number,dose1_date:result[0].dose1_date,dose1_center_name:"",dose1_vaccine_name:result[0].dose1_vaccine_name,dose2_date:result[0].dose2_date,dose2_center_name:"",dose2_vaccine_name:result[0].dose2_vaccine_name}
      if(err){
        res.send({err:err});
      }else if(result.length===0){
        res.send(result)
      }
      else{
        db.query(
          "SELECT name from vaccination_center WHERE center_id= ?",
          result[0].dose1_center_id,
          (err,result2) => {
            if(err){
              res.send({err:err});
            }else{
              //finalResult.dose1_center_name = result2[0].name;
              result[0].dose1_center_id = result2[0].name;
              if(result[0].dose2_center_id!=-1){
                db.query(
                  "SELECT name from vaccination_center WHERE center_id= ?",
                  result[0].dose2_center_id,
                  (err,result3) => {
                    if(err){
                      res.send({err:err});
                    }else{
                      //finalResult.dose2_center_name = result3[0].name;
                      result[0].dose2_center_id = result3[0].name;
                      res.send(result);
                    }
                  }
                )
              }else{
                //finalResult.dose2_center_name = "NA";
                //console.log(finalResult);
                result[0].dose2_center_id = "NA";
                res.send(result);
              }
            }
          }
        )

      }
    }
  )
});

module.exports = router;
