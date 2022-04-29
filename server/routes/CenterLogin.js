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

router.post("/", async (req, res) => {
  const { center_id, password } = req.body;
  db.query(
    "SELECT * FROM vaccination_center WHERE center_id= ?",
    center_id,
    async (err, result) => {
      if (err) {
        res.send({ err: err });
      } else if (result.length > 0) {
        const pw = result[0].password;
        const validPassword = await bcrypt.compare(password, pw);
        if (validPassword) {
          res.send(result);
        } else {
          res.send({ message: "Incorrect Password" });
        }
      } else {
        res.send({ message: "Center does not exist" });
      }
    }
  );
});

module.exports = router;
