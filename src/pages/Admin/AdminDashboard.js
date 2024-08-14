import React from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard-container">
      <div className="left">
        <h1>Admin Panel</h1>
        <div className="nav-list">
          <p
            onClick={() => navigate("/admin-dashboard/create-classroom")}
            className="nav-list-item"
          >
            Create Clssroom
          </p>
          <p
            onClick={() => navigate("/admin-dashboard/add-teacher")}
            className="nav-list-item"
          >
            Add Teacher
          </p>
          <p
            onClick={() => navigate("/admin-dashboard/add-student")}
            className="nav-list-item"
          >
            Add Student
          </p>
          <p
            onClick={() => navigate("/admin-dashboard/all-teachers")}
            className="nav-list-item"
          >
            All Teachers
          </p>
          <p
            onClick={() => navigate("/admin-dashboard/all-student")}
            className="nav-list-item"
          >
            All Students
          </p>
        </div>
      </div>
      <div className="right">
        <div className="header">
          <h2>Principal</h2>
          <FaRegUserCircle className="icon" />
        </div>
        <div className="body">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
