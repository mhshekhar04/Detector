import React from "react";
import { useNavigate } from "react-router-dom";
import "./FirstPage.css";

const FirstPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* Gradient Title */}
      <h1 className="title">QUIZ</h1>

      {/* Start Button */}
      <button className="start-btn" onClick={() => navigate("/mainpage")}>
        Start
      </button>
    </div>
  );
};

export default FirstPage;
