import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import quizData from "../components/quizData.json";
import "./MainPage.css";

const MainPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [correctCount, setCorrectCount] = useState(0);
  const navigate = useNavigate();

  // Shuffle the questions on component mount
  useEffect(() => {
    const shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions);
  }, []);

  const handleNext = () => {
    if (selectedAnswer) {
      const isCorrect = selectedAnswer === questions[currentQuestion].answer;
      const newCorrectCount = isCorrect ? correctCount + 1 : correctCount;
  
      if (currentQuestion < questions.length - 1) {
        setCorrectCount(newCorrectCount);
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(""); // reset answer for next question
      } else {
        navigate("/gamedata", {
          state: { 
            correctAnswers: newCorrectCount, 
            wrongAnswers: questions.length - newCorrectCount 
          },
        });
      }
    }
  };
  

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main-page">
      <h2 className="question-number">
        Question {currentQuestion + 1} / {questions.length}
      </h2>
      <h3 className="question">{questions[currentQuestion].question}</h3>

      <div className="options">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`option-button ${selectedAnswer === option ? "selected" : ""}`}
            onClick={() => setSelectedAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>

      <button 
        className="next-button" 
        onClick={handleNext} 
        disabled={!selectedAnswer}
      >
        {currentQuestion < questions.length - 1 ? "Next" : "Finish"}
      </button>
    </div>
  );
};

export default MainPage;
