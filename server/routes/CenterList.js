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
 
router.use("/", async (req, res) => {
  db.query(
    "SELECT DISTINCT center_id FROM vaccination_center",
    (err, result) => {
      console.log(result);
      if (err) {
        res.send({ err: err });
      } else {
        db.query("SELECT * FROM vaccination_center", (err, result2) => {
          if (err) {
            res.send({ err: err });
          } else {
            let finalResult = [];
            for (let i = 0; i < result.length; i++) {
              for (let j = 0; j < result2.length; j++) {
                if (result[i].center_id === result2[j].center_id) {
                  finalResult.push(result2[j]);
                  break;
                }
              }
            }
            res.send(finalResult);
          }
        });
      }
    }
  );
});
 
module.exports = router;