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
  const { center_id, date, dose_number, aadhar_number } = req.body;
  db.query(
    "UPDATE vaccination_center SET jabs_unbooked = jabs_unbooked - 1 ,jabs_booked = jabs_booked + 1 WHERE center_id = ? AND date = ?;" +
      "INSERT into book_slot? SELECT ?,?,?, MAX(booking_id) + 1 FROM book_slot?",
    [center_id, date, dose_number, aadhar_number, center_id, date, dose_number],
    async (err, result) => {
      if (err) {
        db.query(
            "INSERT into book_slot? VALUES (?,?,?,1)",
            [dose_number, aadhar_number, center_id, date],
            async (err, result) => {
              if (err) {
                res.send({ err: err });
              } else {
                res.send("Success from error");
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
