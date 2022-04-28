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

router.post("/", async (req, res) => {
  const { center_id,dose_number } = req.body;
  db.query(
    "SELECT v.aadhar_number,dose?_date,name,primary_number FROM vaccination_record v, citizen c WHERE dose?_center_id = ? AND v.aadhar_number = c.aadhar_number",
    [dose_number,dose_number,center_id],
    async (err, result) => {
      if (err) {
        res.send({ err: err });
      } 
      else{
        res.send(result);
      }
    }
  );
});

module.exports = router;
