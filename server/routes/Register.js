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
    aadhar,
    name,
    password,
    date_of_birth,
    gender,
    primary_number,
    secondary_number,
    vaccination_status,
    address_line,
    pincode,
    city,
    state,
  } = req.body;
  const salt = await bcrypt.genSalt(10);
  console.log(`Salt: ${salt}`);
  hashed_password = await bcrypt.hash(password, salt);
  console.log(`Hash: ${hashed_password}`);
  db.query(
    "INSERT INTO citizen (aadhar_number, name, password, date_of_birth, gender, primary_number, secondary_number, vaccination_status, address_line, pincode, city, state) VALUES (?,?,?,?,?,?,?,0,?,?,?,?)",
    [
      aadhar,
      name,
      hashed_password,
      date_of_birth,
      gender,
      primary_number,
      secondary_number,
      address_line,
      pincode,
      city,
      state,
    ],
    (err, result) => {
      console.log(result);
      console.log(err);
    }
  );
});

module.exports = router;
