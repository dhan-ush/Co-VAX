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
  const { aadhar_number, issue } = req.body;
  db.query(
    "SELECT name from citizen WHERE aadhar_number = ?",
    aadhar_number,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      } else {
        db.query(
          "INSERT INTO issues values (?,?,?)",
          [aadhar_number, result[0].name, issue],
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
