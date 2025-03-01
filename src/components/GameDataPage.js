import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import "./GameDataPage.css";

const GameDataPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // Retrieve correctAnswers from state (default to 0 if not provided)
  const { correctAnswers } = location.state || { correctAnswers: 0 };
  const totalQuestions = 10;
  // Recalculate wrongAnswers based on total questions
  const wrongAnswers = totalQuestions - correctAnswers;

  const correctPercentage = ((correctAnswers / totalQuestions) * 100).toFixed(2);
  const wrongPercentage = ((wrongAnswers / totalQuestions) * 100).toFixed(2);

  const data = [
    { name: "Good Answer", value: correctAnswers, color: "#00c853" },
    { name: "Bad Answer", value: wrongAnswers, color: "#f44336" },
  ];

  return (
    <div className="game-end">
      <h1>Game Over</h1>
      <PieChart width={250} height={250}>
        <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={80} label>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      <p className="result-text">✅ Good Answer: {correctPercentage}%</p>
      <p className="result-text">❌ Bad Answer: {wrongPercentage}%</p>

      <button 
        className="check-hero-button" 
        onClick={() => navigate("/resultpage", { state: { wrongAnswers } })}
      >
        Check Your Reality
      </button>
    </div>
  );
};

export default GameDataPage;
