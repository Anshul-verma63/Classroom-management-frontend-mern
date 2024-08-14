import axios from "axios";
import React, { useLayoutEffect, useState } from "react";
const base_url = "https://classroom-management-system-mern.onrender.com";

const AddTeacher = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [className, setClassName] = useState();
  const [subject, setSub] = useState();
  const [subjects, setSubject] = useState([]);
  const [classes, setClasses] = useState();

  //get all classe
  const getAllClasses = async () => {
    try {
      const { data } = await axios.get(
        `${base_url}/api/v1/admin/get-all-class`
      );
      setClasses(data);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  const getAllSubject = async () => {
    try {
      const { data } = await axios.get(
        `${base_url}/api/v1/admin/get-all-subjects`
      );
      setSubject(data);
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  useLayoutEffect(() => {
    getAllClasses();
    getAllSubject();
  }, []);

  //add teacher
  const handleAddTeacher = async () => {
    console.log(name);
    console.log(email);
    console.log(password);
    console.log(className);
    console.log(subject);

    try {
      const { data } = await axios.post(
        `${base_url}/api/v1/admin/add-teacher`,
        { name, email, password, className, subject }
      );
      if (data?.success) {
        alert(data?.message);
        setName("");
        setEmail("");
        setPassword("");
        setSub("");
        setClassName("");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };
  return (
    <>
      <div className="login-form">
        <div className="form-box">
          <h1>Add Teacher</h1>
          <div className="input-box">
            <input
              className="input-item"
              type="name"
              placeholder="Enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="input-item"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input-item"
              type="text"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <select
              onChange={(e) => setClassName(e.target.value)}
              className="input-item"
            >
              <option>Select Class</option>
              {classes?.map((item, i) => {
                return (
                  <option key={i} value={item?._id}>
                    {item.cname}
                  </option>
                );
              })}
            </select>
            <select
              onChange={(e) => setSub(e.target.value)}
              className="input-item"
            >
              <option>Select Subject</option>
              {subjects?.map((item, i) => {
                return (
                  <option key={i} value={item?._id}>
                    {item.subName}
                  </option>
                );
              })}
            </select>
            <button onClick={handleAddTeacher} className="login-btn">
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTeacher;
