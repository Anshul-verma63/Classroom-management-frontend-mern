import axios from "axios";
import React, { useState } from "react";
const base_url = "https://classroom-management-system-mern.onrender.com";

const CreateClassRoom = () => {
  const [classroomName, setClassroomName] = useState("");
  const [schedule, setSchedule] = useState([
    { day: "Monday", startTime: "", endTime: "" },
    { day: "Tuesday", startTime: "", endTime: "" },
    { day: "Wednesday", startTime: "", endTime: "" },
    { day: "Thursday", startTime: "", endTime: "" },
    { day: "Friday", startTime: "", endTime: "" },
    { day: "Saturday", startTime: "", endTime: "" },
  ]);

  const handleInputChange = (index, field, value) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[index][field] = value;
    setSchedule(updatedSchedule);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const classroomData = {
      cname: classroomName,
      sessions: schedule.filter((day) => day.startTime && day.endTime),
    };
    try {
      const { data } = await axios.post(
        `${base_url}/api/v1/admin/create-class`,
        classroomData
      );
      if (data?.success) {
        alert(data?.message);
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="class-container">
      <div className="class-form" style={{ textAlign: "center" }}>
        <h1 style={{ marginBottom: "15px" }}>Create Class</h1>
        <div className="class-box">
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Classroom Name:
                <input
                  style={{ height: "25px", outline: "none", fontSize: "1rem" }}
                  type="text"
                  value={classroomName}
                  onChange={(e) => setClassroomName(e.target.value)}
                  required
                />
              </label>
            </div>

            {schedule.map((daySchedule, index) => (
              <div key={index} style={{ margin: "0px", padding: "0px" }}>
                <h6>{daySchedule.day}</h6>
                <label>
                  Start Time:
                  <input
                    type="time"
                    value={daySchedule.startTime}
                    onChange={(e) =>
                      handleInputChange(index, "startTime", e.target.value)
                    }
                    required
                  />
                </label>
                <label style={{ marginLeft: "20px" }}>
                  End Time:
                  <input
                    type="time"
                    value={daySchedule.endTime}
                    onChange={(e) =>
                      handleInputChange(index, "endTime", e.target.value)
                    }
                    required
                  />
                </label>
              </div>
            ))}

            <button style={{ marginTop: "20px" }} className="btn" type="submit">
              Create Classroom
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateClassRoom;
