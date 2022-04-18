import React from "react";
import st from "../styles/raiseissue.module.css";
import { Link } from "react-router-dom";

function DownloadCertificate() {
  const userData = {
    aadhar: 12345678,
    name: "Naga",
    password: "naga",
    confirm_password: "naga",
    date_of_birth: "20-08-2002",
    primary_number: "12345",
    secondary_number: "678910",
    vaccination_status: 2,
    address_line: "Bits Hyderabad",
    pincode: "500078",
    city: "Hyderabad",
    state: "Telangana",
  };
  const vaccinationRecord = {
    aadhar: 12345678,
    vaccination_id: 1234,
    dose1_Date: "01-07-2020",
    dose1_center_id: 1,
    dose1_vaccine_name: "covishield",
    dose2_Date: "30-09-2020",
    dose2_center_id: 2,
    dose2_vaccine_name: "covishield",
  };
  const getVaccinationCenterName = (center_id) => {
    //we will use this fucntion to get name of center from center_id when backend is ready
    //currently i am returning a dummy name
    return "BPHC";
  };
  const getStatus = (vaccination_status) => {
    if (vaccination_status === 0) return "Not Vaccinated";
    else if (vaccination_status === 1) return "Partially Vaccinated";
    else return "Fully Vaccinated";
  };
  return (
    <>
      <div>{userData.name}</div>
      <div>Aaadhar ID : {userData.aadhar}</div>
      <div>Vaccination Status : {getStatus(userData.vaccination_status)}</div>

      {(getStatus(userData.vaccination_status) === "Partially Vaccinated" ||
        getStatus(userData.vaccination_status) === "Fully Vaccinated") && (
        <div style={{ backgroundColor: "green" }}>
          <div>Dose 1 Details</div>
          <div>Vaccine Name : {vaccinationRecord.dose1_vaccine_name}</div>
          <div>Vaccination Date : {vaccinationRecord.dose1_Date}</div>
          <div>
            Vaccination Center :{" "}
            {getVaccinationCenterName(vaccinationRecord.dose1_center_id)}
          </div>
        </div>
      )}

      {getStatus(userData.vaccination_status) === "Fully Vaccinated" && (
        <div style={{ backgroundColor: "blue" }}>
          <div>Dose 2 Details</div>
          <div>Vaccine Name : {vaccinationRecord.dose2_vaccine_name}</div>
          <div>Vaccination Date : {vaccinationRecord.dose2_Date}</div>
          <div>
            Vaccination Center :{" "}
            {getVaccinationCenterName(vaccinationRecord.dose2_center_id)}
          </div>
        </div>
      )}

      {getStatus(userData.vaccination_status) === "Partially Vaccinated" && (
        <div>?? days left for second dose</div> //will decide how to calculate number of days later
      )}

      {getStatus(userData.vaccination_status) !== "Not Vaccinated" && (
        <button>Download Certificate</button>
      )}

      {getStatus(userData.vaccination_status) === "Not Vaccinated" && (
        <div>Certificates are only available for vaccinated people</div>
      )}
    </>
  );
}

export default DownloadCertificate;
