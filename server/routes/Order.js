const express = require("express");
const mysql = require("mysql");
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

router.post("/", async (req, res) => {
  const { supplier_id, center_id, jabs_ordered, date } = req.body;
  db.query(
    "UPDATE supplier SET jabs_available=jabs_available-? WHERE supplier_id = ?",
    [jabs_ordered, supplier_id],
    async (err, result) => {
      if (err) {
        res.send({ err: err });
      } else {
        db.query(
          "SELECT * FROM vaccination_center WHERE center_id = ? AND date = ?",
          [center_id, date],
          async (err, result2) => {
            if (err) {
              res.send({ err: err });
            }
            // else{
            //   res.send(result2)
            // }
            else if (result2.length > 0) {
              db.query(
                "UPDATE vaccination_center SET jabs_unbooked = jabs_unbooked + ? WHERE center_id = ? AND date = ?",
                [jabs_ordered, center_id, date],
                async (err, result3) => {
                  if (err) {
                    res.send({ err: err });
                  }
                }
              );
            } else {
                db.query(
                  "SELECT * FROM vaccination_center WHERE center_id = ?",
                 center_id,
                  async(err, result4) => {
                    if (err) {
                      res.send({ err: err });
                    }
                    else{
                      db.query(
                        "INSERT INTO vaccination_center VALUES (?,?,?,?,?,?,?,?,?,?,?)",
                        [center_id,date,result4[0].name,result4[0].address_line,result4[0].city,result4[0].state,result4[0].pincode,result4[0].password,jabs_ordered,0,result4[0].vaccine_name],
                      )
                      async(err, result5) => {
                        if (err) {
                          res.send({ err: err });
                        }
                      }
                    }
              }
              )
            }
          }
        );
        res.send(result);
      }
    }
  );
});

module.exports = router;
