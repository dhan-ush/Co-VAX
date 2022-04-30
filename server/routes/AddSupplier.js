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
  const { name, vaccine_name, jabs_available } = req.body;
  db.query(
    "INSERT INTO supplier SELECT MAX(supplier_id)+1,?,?,? from supplier",
    [name, vaccine_name, jabs_available],
    (err, result) => {
      if (err) {
        db.query(
          "INSERT INTO supplier values (1,?,?,?)",
          [name, vaccine_name, jabs_available],
          (err, result) => {
            if (err) {
              res.send(err);
            } else {
              res.send(result);
            }
          }
        );
      } else {
        res.send(result);
      }
    }
  );
});

module.exports = router;
