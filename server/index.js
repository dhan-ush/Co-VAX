//library imports
const express = require("express");
const cors = require("cors");

const app=express();

app.use(cors());
app.use(express.json());

//route variables
const RegisterRouter = require("./routes/Register");
const LoginRouter = require("./routes/Login");
const ShowVaccinationCenters = require("./routes/ShowVaccinationCenters");
const BookSlot = require("./routes/BookSlot");
const SupplierList = require("./routes/SupplierList")
const Order = require("./routes/Order");
const VaccinationHistory = require("./routes/VaccinationHistory");
const DisplayManageBookings = require("./routes/DisplayManageBookings")
//

//routes
app.use("/register", RegisterRouter);
app.use("/login", LoginRouter);
app.use("/ShowVaccinationCenters", ShowVaccinationCenters);
app.use("/BookSlot", BookSlot);
app.use("/SupplierList", SupplierList);
app.use("/Order", Order);
app.use("/VaccinationHistory", VaccinationHistory);
app.use("/DisplayManageBookings", DisplayManageBookings);
//

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
