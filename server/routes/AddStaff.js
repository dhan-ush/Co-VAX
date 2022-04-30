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
  const { aadhar_number, center_id, role } = req.body;
  db.query(
    "SELECT * FROM citizen WHERE aadhar_number=?",
    aadhar_number,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      } else if (result.length === 0) {
        res.send(result);
      } else {
        db.query(
          "INSERT INTO TABLE VALUES (?,?,?)",
          [aadhar_number, center_id, role],
          (err, result2) => {
            if (err) {
              res.send({ err: err });
            } else {
              res.send("Success");
            }
          }
        );
      }
    }
  );
});

module.exports = router;
