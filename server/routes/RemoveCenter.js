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
  const { center_id } = req.body;
  db.query(
    "DELETE FROM vaccination_center where center_id = ?",
    center_id,
    (err, resut) => {
      if (err) {
        res.send({ err: err });
      } else {
        res.send("Success");
      }
    }
  );
});

module.exports = router;
