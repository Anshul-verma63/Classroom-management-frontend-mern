import axios from "axios";
import React, { useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const base_url = "https://classroom-management-system-mern.onrender.com";

const EditTeacher = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [className, setClassName] = useState();
  const [subject, setSub] = useState();
  const [subjects, setSubject] = useState([]);
  const [classes, setClasses] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

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

  const getTeacherDetails = async () => {
    try {
      const { data } = await axios.get(
        `${base_url}/api/v1/admin/get-teacher-detail/${id}`
      );
      if (data) {
        setName(data?.name);
        setEmail(data?.email);
        setPassword(data?.password);
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  useLayoutEffect(() => {
    getAllClasses();
    getAllSubject();
    getTeacherDetails();
  }, []);

  //add teacher
  const handleUpdateTeacher = async () => {
    try {
      const { data } = await axios.put(
        `${base_url}/api/v1/admin/update-teacher/${id}`,
        { name, email, password, className, subject }
      );
      if (data?.success) {
        alert(data?.message);
        setName("");
        setEmail("");
        setPassword("");
        setSub("");
        setClassName("");
        navigate("/admin-dashboard/all-teachers");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };
  return (
    <>
      <div className="login-form">
        <div className="form-box">
          <h1>Update Teacher</h1>
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
            <button onClick={handleUpdateTeacher} className="login-btn">
              Update
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditTeacher;
