const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const router = express.Router();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dhanushkv@12",
  database: "registrationsystem",
  multipleStatements: true,
});
db.connect((err) => {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + db.threadId);
});

router.post("/display", async (req, res) => {
  const { center_id, dose_number } = req.body;
  db.query(
    "SELECT b.aadhar_number,name,primary_number FROM book_slot? b, citizen c WHERE center_id = ? AND b.aadhar_number = c.aadhar_number",
    [dose_number, center_id],
    async (err, result) => {
      if (err) {
        res.send({ err: err });
      } else {
        res.send(result);
      }
    }
  );
});

router.post("/reject", async (req, res) => {
  const { aadhar_number, center_id, dose_number } = req.body;
  db.query(
    "DELETE FROM book_slot? WHERE aadhar_number = ? AND center_id = ?",
    [dose_number, aadhar_number, center_id],
    async (err, result) => {
      if (err) {
        res.send({ err: err });
      } else {
        db.query(
          "UPDATE citizen SET vaccination_status = vaccination_status-1 WHERE aadhar_number = ?",
          aadhar_number,
          (err, result4) => {
            if (err) {
              res.send({ err: err });
            } else {
              res.send("Success_1");
            }
          }
        );
        // res.send("Success_2");
      }
    }
  );
});

router.post("/approve", async (req, res) => {
  const { aadhar_number, center_id, dose_number } = req.body;
  db.query(
    "SELECT * FROM book_slot? WHERE aadhar_number = ? AND center_id = ?",
    [dose_number, aadhar_number, center_id],
    async (err, result) => {
      if (err) {
        res.send({ err: err });
      } else {
        //res.send(result)
        if (dose_number == 2) {
          db.query(
            "UPDATE citizen SET vaccination_status = vaccination_status+1 WHERE aadhar_number = ?;" +
              "DELETE FROM book_slot? WHERE aadhar_number = ? AND center_id = ?;" +
              "UPDATE vaccination_record SET dose2_date = ?, dose2_center_id = ?, dose2_vaccine_name = dose1_vaccine_name WHERE aadhar_number = ?",
            [
              aadhar_number,
              dose_number,
              aadhar_number,
              center_id,
              result[0].date,
              result[0].center_id,
              aadhar_number,
            ],
            async (err, result2) => {
              if (err) {
                res.send({ err: err });
              } else {
                res.send("Success");
              }
            }
          );
        } else {
          let vaccine_name;
          db.query(
            "SELECT vaccine_name FROM vaccination_center WHERE center_id = ?",
            center_id,
            async (err, result3) => {
              if (err) {
                res.send({ err: err });
              } else if (result3.length > 0) {
                vaccine_name = result3[0].vaccine_name;
                db.query(
                  "UPDATE citizen SET vaccination_status = vaccination_status+1 WHERE aadhar_number = ?;" +
                    "DELETE FROM book_slot? WHERE aadhar_number = ? AND center_id = ?;" +
                    "INSERT INTO vaccination_record SELECT ?,COUNT(*) + 1,?,?,?,?,?,?  FROM vaccination_record",
                  [
                    aadhar_number,
                    dose_number,
                    aadhar_number,
                    center_id,
                    aadhar_number,
                    result[0].date,
                    center_id,
                    vaccine_name,
                    result[0].date,
                    -1,
                    "NA",
                  ],
                  async (err, result2) => {
                    if (err) {
                      //   db.query(
                      //     "INSERT INTO vaccination_record values (?,1,?,?,?,?,?,?)",
                      //     [aadhar_number,result[0].date,center_id,vaccine_name,result[0].date,-1,"NA"],
                      //     async (err, result) => {
                      //       if (err) {
                      //         res.send({ err: err });
                      //       } else {
                      //         res.send("Success from error");
                      //       }
                      //     }
                      // );
                      res.send({ err: err });
                    } else {
                      res.send("Success");
                    }
                  }
                );
              }
              else{
                res.send("no records");
              }
            }
          );
          // db.query(
          //   "UPDATE citizen SET vaccination_status = vaccination_status+1 WHERE aadhar_number = ?;"+
          //   "DELETE FROM book_slot? WHERE aadhar_number = ? AND center_id = ?;"+
          //   "INSERT INTO vaccination_record values (?,MAX(vaccination_id) + 1 FROM vaccination_record,?,?,vaccine_name,?,?,?)"+
          //   "SELECT vaccine_name FROM vacccination_center WHERE center_id = ?",
          //   [aadhar_number,dose_number,aadhar_number,center_id,aadhar_number,result[0].date,center_id,result[0].date,-1,"NA",center_id],
          //   async(err,result2)=>{
          //     if (err) {
          //       db.query(
          //         "INSERT INTO vaccination_record values (?,1,?,?,vaccine_name,?,?,?)"+
          //         "SELECT vaccine_name FROM vacccination_center WHERE center_id = ?",
          //         [aadhar_number,dose_number,aadhar_number,center_id,aadhar_number,result[0].date,center_id,center_id,result[0].date,-1,"NA",center_id],
          //         async (err, result) => {
          //           if (err) {
          //             res.send({ err: err });
          //           } else {
          //             res.send("Success from error");
          //           }
          //         }
          //     );
          //     }else{
          //       res.send("Success");
          //     }
          //   }
          // )
        }
      }
    }
  );
});

module.exports = router;
