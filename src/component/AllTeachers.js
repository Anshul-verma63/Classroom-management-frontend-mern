import axios from "axios";
import React, { useLayoutEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
const base_url = "https://classroom-management-system-mern.onrender.com";

const AllTeachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  //get all teachers
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
  useLayoutEffect(() => {
    getAllTeachers();
  }, [toggle]);

  //delete teacher
  const deleteTeacher = async (id) => {
    try {
      const { data } = await axios.delete(
        `${base_url}/api/v1/admin/delete-teacher/${id}`
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
      <h1>All Teachers</h1>
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
          {teachers?.map((item, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item?.name}</td>
                <td>{item?.email}</td>
                <td>
                  <button
                    onClick={() =>
                      navigate(`/admin-dashboard/update-teacher/${item._id}`)
                    }
                    className="btn"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => deleteTeacher(item?._id)}
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

export default AllTeachers;
