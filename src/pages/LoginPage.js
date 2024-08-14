import React, { useState } from "react";
import { GrUserAdmin } from "react-icons/gr";
import { FaUserAlt } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const base_url = "https://classroom-management-system-mern.onrender.com";

const LoginPage = () => {
  const [type, setType] = useState("Student");
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (type === "Admin") {
      try {
        const { data } = await axios.post(
          `${base_url}/api/v1/admin/admin-login`,
          { email, password }
        );
        if (data.success) {
          navigate("/admin-dashboard");
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    } else if (type === "Student") {
      try {
        const { data } = await axios.post(
          `${base_url}/api/v1/student/student-login`,
          { email, password }
        );

        if (data.success) {
          navigate("/student-dashboard");
          localStorage.setItem("student", data?.student?.sclassName);
          localStorage.setItem("studentData", JSON.stringify(data.student));
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    } else {
      try {
        const { data } = await axios.post(
          `${base_url}/api/v1/teacher/teacher-login`,
          { email, password }
        );

        if (data?.success) {
          navigate("/teacher-dashboard");
          console.log(data);

          localStorage.setItem("teacher", data?.teacher?.className);
        }
      } catch (error) {
        alert(error.response.data.message);
      }
    }
  };
  return (
    <div className="loginpage">
      <div className="cart-container">
        <div onClick={() => setType("Admin")} className="cart">
          <GrUserAdmin className="icon" />
          <h1>Admin</h1>
        </div>
        <div onClick={() => setType("Student")} className="cart">
          <FaUserAlt className="icon" />
          <h1>Student</h1>
        </div>
        <div onClick={() => setType("Teacher")} className="cart">
          <FaUsersLine className="icon" />
          <h1>Teacher</h1>
        </div>
      </div>
      <div className="login-form">
        <div className="form-box">
          <h1>Login {type}</h1>
          <div className="input-box">
            <input
              className="input-item"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="input-item"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin} className="login-btn">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
