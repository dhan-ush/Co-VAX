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
  const {
    date,
    name,
    password,
    vaccine_name,
    address_line,
    city,
    state,
    pincode,
  } = req.body;
  const salt = await bcrypt.genSalt(10);
  console.log(`Salt: ${salt}`);
  hashed_password = await bcrypt.hash(password, salt);
  console.log(`Hash: ${hashed_password}`);
  db.query(
    "INSERT INTO vaccination_center SELECT MAX(center_id)+1,?,?,?,?,?,?,?,0,0,? from vaccination_center",
    [
      date,
      name,
      address_line,
      city,
      state,
      pincode,
      hashed_password,
      vaccine_name,
    ],
    (err, result) => {
      if (err) {
        db.query(
          "INSERT INTO vaccination_center values (1,?,?,?,?,?,?,?,0,0,?)",
          [
            date,
            name,
            address_line,
            city,
            state,
            pincode,
            hashed_password,
            vaccine_name,
          ],
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
