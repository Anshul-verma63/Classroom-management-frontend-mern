import React from "react";
import logo from "../../img/logo1.png";
const StudentHome = () => {
  const data = localStorage.getItem("studentData");
  const studentData = JSON.parse(data);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "80vh",
      }}
    >
      <h2>Your Profile</h2>
      <img src={logo} width={"100px"} />
      <h1>{studentData.name}</h1>
      <h1>{studentData.email}</h1>
    </div>
  );
};

export default StudentHome;
