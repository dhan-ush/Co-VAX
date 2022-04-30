const express = require("express");
const mysql = require("mysql");
const router = express.Router();
const pdf = require("html-pdf");
const pdfTemplate = require("../documents");

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

router.post("/create-pdf", (req, res) => {
  console.log(req.body.aadhar_number);
  db.query(
    "SELECT name, date_of_birth, gender, c.aadhar_number, dose1_vaccine_name, dose1_date, dose2_date FROM citizen c, vaccination_record d WHERE c.aadhar_number = d.aadhar_number and c.aadhar_number=?",
    req.body.aadhar_number,
    (err, result) => {
      console.log(result[0])
      if (err) {
        res.send({ err: err });
      } else if (result.length > 0) {
        pdf.create(pdfTemplate(result[0]), {}).toFile("result.pdf", (err) => {
          if (err) {
            console.log("Error1");
            res.send(Promise.reject());
          }
          res.send(Promise.resolve());
        });
      }
      else{
        res.send({message:"User does not exist"})
      }
    }
  );
  // res.send("Success");
});

router.get("/fetch-pdf", (req, res) => {
  res.sendFile("C:\\Users\\Rishi\\Desktop\\desk\\webdev\\DBMS_project\\server\\result.pdf");
});

module.exports = router;
