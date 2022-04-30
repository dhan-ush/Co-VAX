const express = require("express");
const mysql = require("mysql");
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
  const { supplier_id, center_id, jabs_ordered,vaccine_name} = req.body;
  db.query(
    "SELECT * from supply WHERE center_id = ? and supplier_id = ?",
    [jabs_ordered, center_id, supplier_id],
    async (err, result) => {
      if (err) {
        res.send({ err: err });
      } else{
        db.query(
          "INSERT INTO supply VALUES (?,?,?,?)",
          [center_id, supplier_id, vaccine_name,jabs_ordered],
          (err, result) => {
            if(err){
              db.query(
                "UPDATE supply SET quantity=quantity+? WHERE center_id = ? and supplier_id = ?",
                [jabs_ordered, center_id, supplier_id],
                async (err, result) => {
                  if (err) {
                    res.send({ err: err });
                  } else {
                    res.send(result);
                  }
                }
              );
            }else{
              res.send(result);
            }
          }
        )
      }
      });
    }
  );

module.exports = router;
