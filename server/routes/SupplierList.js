const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const router = express.Router();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Dhanushkv@12",
  database: "registrationsystem",
  multipleStatements: true
});
db.connect((err) => {
  if (err) {
    console.log("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + db.threadId);
}); 

router.post("/", async (req, res) => {
  const { vaccine_name } = req.body;
  db.query(
    "SELECT * FROM supplier WHERE vaccine_name= ?",
    [vaccine_name],
    async (err, result) => {
      if (err) {
        res.send({ err: err });
      }else {
        res.send(result);
      }
    }
  );

});

module.exports = router;