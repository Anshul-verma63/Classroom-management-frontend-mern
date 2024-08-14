import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="container" style={{ width: "100%", height: "100vh" }}>
      <div className="box">
        <h1 className="heading">
          Welcome To
          <br />
          <span>My Classroom Website</span>{" "}
        </h1>
        <button onClick={() => navigate("/login")} className="btn">
          Login
        </button>
      </div>
    </div>
  );
};

export default Home;
