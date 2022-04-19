//library imports
const express = require("express");
const cors = require("cors");

const app=express();

app.use(cors());
app.use(express.json());

//route variables
const RegisterRouter = require("./routes/Register");
const LoginRouter = require("./routes/Login");
//

//routes
app.use("/register", RegisterRouter);
app.use("/login", LoginRouter);
//

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
