import React, { useLayoutEffect, useState } from "react";
import logo1 from "../../img/logo1.png";
import logo2 from "../../img/logo2.png";
import logo3 from "../../img/logo3.png";
import axios from "axios";
const base_url = "https://classroom-management-system-mern.onrender.com";

const AdminHome = () => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);
  const getAllStudents = async () => {
    try {
      const { data } = await axios.get(
        `${base_url}/api/v1/admin/get-all-students`
      );
      setStudents(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const getAllTeachers = async () => {
    try {
      const { data } = await axios.get(
        `${base_url}/api/v1/admin/get-all-teacher`
      );
      setTeachers(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  const getAllClasses = async () => {
    try {
      const { data } = await axios.get(
        `${base_url}/api/v1/admin/get-all-class`
      );
      setClasses(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  useLayoutEffect(() => {
    getAllStudents();
    getAllClasses();
    getAllTeachers();
  }, []);
  return (
    <div className="container">
      <div className="cart">
        <img width={"70px"} src={logo2} alt="img" />
        <h2>Total Students</h2>
        <h2>{students.length}</h2>
      </div>
      <div className="cart">
        <img width={"70px"} src={logo3} alt="img" />
        <h2>Total Classes</h2>
        <h2>{classes.length}</h2>
      </div>
      <div className="cart">
        <img width={"70px"} src={logo1} alt="img" />
        <h2>Total Teachers</h2>
        <h2>{teachers.length}</h2>
      </div>
    </div>
  );
};

export default AdminHome;
