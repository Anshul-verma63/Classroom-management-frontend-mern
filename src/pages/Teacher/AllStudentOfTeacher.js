import axios from "axios";
import React, { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const base_url = "https://classroom-management-system-mern.onrender.com";

const AllStudentOfTeacher = () => {
  const [students, setStudents] = useState([]);
  const [toggle, setToggle] = useState(false);
  const ClassId = localStorage.getItem("teacher");
  const navigate = useNavigate();

  //get all teachers
  const getAllStudents = async () => {
    try {
      const { data } = await axios.get(
        `${base_url}/api/v1/teacher/get-student-by-class/${ClassId}`
      );
      setStudents(data);
    } catch (error) {
      console.log(error.response.data);
    }
  };
  useLayoutEffect(() => {
    getAllStudents();
  }, [toggle]);

  const deletStudent = async (id) => {
    try {
      const { data } = await axios.delete(
        `${base_url}/api/v1/admin/delete-student/${id}`
      );
      if (data) {
        setToggle((prev) => !prev);
        alert(data?.message);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };
  return (
    <div className="teacher-table">
      <h1>All Students of your class</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">S.NO</th>
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">EDIT</th>
            <th scope="col">DELETE</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((item, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>
                  <button
                    onClick={() =>
                      navigate(`/teacher-dashboard/update-student/${item._id}`)
                    }
                    className="btn"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => deletStudent(item._id)}
                    className="btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AllStudentOfTeacher;
