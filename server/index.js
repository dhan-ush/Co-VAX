//library imports
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//route variables
const RegisterRouter = require("./routes/Register");
const LoginRouter = require("./routes/Login");
const ShowVaccinationCenters = require("./routes/ShowVaccinationCenters");
const BookSlot = require("./routes/BookSlot");
const SupplierList = require("./routes/SupplierList");
const Order = require("./routes/Order");
const VaccinationHistory = require("./routes/VaccinationHistory");
const ManageBookings = require("./routes/ManageBookings");
const VaccinationDetails = require("./routes/VaccinationDetails");
const AddCenter = require("./routes/AddCenter");
const CenterLogin = require("./routes/CenterLogin");
const RemoveCenter = require("./routes/RemoveCenter");
const CenterList = require("./routes/CenterList");
const AddSupplier = require("./routes/AddSupplier")
const RemoveSupplier = require("./routes/RemoveSupplier")
const AdminSupplierList = require("./routes/AdminSupplierList")
const UpdateSupplyTable =  require("./routes/UpdateSupplyTable")
const ConvertToHash =  require("./routes/ConvertToHash")
const GetVaccineDose1 =  require("./routes/GetVaccineDose1")
const AddStaff = require("./routes/AddStaff")
const RemoveStaff = require("./routes/RemoveStaff")
const Certificate = require("./routes/Certificate")
const StaffList = require("./routes/StaffList")
const AddIssue = require("./routes/AddIssue")
const DisplayIssues =  require("./routes/DisplayIssues")
//

//routes
app.use("/register", RegisterRouter);
app.use("/login", LoginRouter);
app.use("/ShowVaccinationCenters", ShowVaccinationCenters);
app.use("/BookSlot", BookSlot);
app.use("/SupplierList", SupplierList);
app.use("/Order", Order);
app.use("/VaccinationHistory", VaccinationHistory);
app.use("/ManageBookings", ManageBookings);
app.use("/VaccinationDetails", VaccinationDetails);
app.use("/AddCenter", AddCenter);
app.use("/CenterLogin", CenterLogin);
app.use("/RemoveCenter", RemoveCenter);
app.use("/CenterList", CenterList);
app.use("/AddSupplier", AddSupplier)
app.use("/RemoveSupplier", RemoveSupplier)
app.use("/AdminSupplierList", AdminSupplierList)
app.use("/ConvertToHash", ConvertToHash)
app.use("/GetVaccineDose1", GetVaccineDose1)
app.use("/UpdateSupplyTable", UpdateSupplyTable)
app.use("/AddStaff", AddStaff)
app.use("/RemoveStaff",RemoveStaff)
app.use("/Certificate",Certificate)
app.use("/StaffList",StaffList)
app.use("/AddIssue", AddIssue)
app.use("/DisplayIssues",DisplayIssues)
//

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
